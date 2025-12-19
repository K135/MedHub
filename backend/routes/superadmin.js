const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const superAdmin = require('../middleware/superAdmin');
const Course = require('../models/Course');
const Organizer = require('../models/Organizer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        // Create directory if it doesn't exist
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

// @route   GET api/superadmin/dashboard-stats
// @desc    Get dashboard statistics
// @access  Super Admin
router.get('/dashboard-stats', auth, superAdmin, async (req, res) => {
    try {
        const totalOrganizers = await Organizer.countDocuments({ role: 'organizer' });
        const totalCourses = await Course.countDocuments();
        const activeCourses = await Course.countDocuments({ status: 'active' });

        res.json({
            totalOrganizers,
            totalCourses,
            activeCourses
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/superadmin/organizers
// @desc    Get all organizers
// @access  Super Admin
router.get('/organizers', auth, superAdmin, async (req, res) => {
    try {
        const organizers = await Organizer.find({ role: 'organizer' }).select('-password');
        
        // For each organizer, get course count
        const organizersWithStats = await Promise.all(organizers.map(async (org) => {
            const courseCount = await Course.countDocuments({ organizer: org._id });
            return {
                ...org.toObject(),
                courseCount
            };
        }));

        res.json(organizersWithStats);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/superadmin/organizers/:id
// @desc    Get organizer details and courses
// @access  Super Admin
router.get('/organizers/:id', auth, superAdmin, async (req, res) => {
    try {
        const organizer = await Organizer.findById(req.params.id).select('-password');
        if (!organizer) {
            return res.status(404).json({ msg: 'Organizer not found' });
        }

        const courses = await Course.find({ organizer: req.params.id });

        res.json({
            organizer,
            courses
        });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Organizer not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route   GET api/superadmin/courses/:id
// @desc    Get course details (Super Admin)
// @access  Super Admin
router.get('/courses/:id', auth, superAdmin, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }

        res.json(course);
    } catch (err) {
        console.error('Error fetching course:', err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Course not found' });
        }
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

// @route   POST api/superadmin/courses
// @desc    Create a new course (Super Admin)
// @access  Super Admin
router.post('/courses', auth, superAdmin, upload.single('banner'), async (req, res) => {
    try {
        let courseData = { ...req.body };

        // Parse JSON fields
        if (typeof courseData.topics === 'string') courseData.topics = JSON.parse(courseData.topics);
        if (typeof courseData.objectives === 'string') courseData.objectives = JSON.parse(courseData.objectives);
        if (typeof courseData.keyFeatures === 'string') courseData.keyFeatures = JSON.parse(courseData.keyFeatures);
        if (typeof courseData.accreditation === 'string') courseData.accreditation = JSON.parse(courseData.accreditation);
        if (typeof courseData.targetProfession === 'string') courseData.targetProfession = JSON.parse(courseData.targetProfession);
        if (typeof courseData.credits === 'string') courseData.credits = JSON.parse(courseData.credits);
        if (typeof courseData.speakers === 'string') courseData.speakers = JSON.parse(courseData.speakers);

        // Ensure organizer is set from body
        if (!courseData.organizer) {
             return res.status(400).json({ msg: 'Organizer is required' });
        }

        if (req.file) {
            courseData.bannerImage = `/uploads/${req.file.filename}`;
        }

        const course = new Course(courseData);
        await course.save();

        res.json(course);
    } catch (err) {
        console.error('Course creation error:', err);
        if (err.name === 'ValidationError') {
            return res.status(400).json({ msg: err.message });
        }
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

// @route   PUT api/superadmin/courses/:id
// @desc    Update course details (Super Admin)
// @access  Super Admin
router.put('/courses/:id', auth, superAdmin, upload.single('banner'), async (req, res) => {
    try {
        let course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }

        let updateData = { ...req.body };

        // Parse JSON fields
        if (typeof updateData.topics === 'string') updateData.topics = JSON.parse(updateData.topics);
        if (typeof updateData.objectives === 'string') updateData.objectives = JSON.parse(updateData.objectives);
        if (typeof updateData.keyFeatures === 'string') updateData.keyFeatures = JSON.parse(updateData.keyFeatures);
        if (typeof updateData.accreditation === 'string') updateData.accreditation = JSON.parse(updateData.accreditation);
        if (typeof updateData.targetProfession === 'string') updateData.targetProfession = JSON.parse(updateData.targetProfession);
        if (typeof updateData.credits === 'string') updateData.credits = JSON.parse(updateData.credits);
        if (typeof updateData.speakers === 'string') updateData.speakers = JSON.parse(updateData.speakers);

        if (req.file) {
            updateData.bannerImage = `/uploads/${req.file.filename}`;
        }

        course = await Course.findByIdAndUpdate(
            req.params.id,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        res.json(course);
    } catch (err) {
        console.error('Course update error:', err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Course not found' });
        }
        if (err.name === 'ValidationError') {
            return res.status(400).json({ msg: err.message });
        }
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

// @route   PUT api/superadmin/courses/:id/toggle-featured
// @desc    Toggle course featured status
// @access  Super Admin
router.put('/courses/:id/toggle-featured', auth, superAdmin, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }

        course.featured = !course.featured;
        await course.save();

        res.json(course);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/superadmin/courses/:id/status
// @desc    Update course status (active/draft/archived)
// @access  Super Admin
router.put('/courses/:id/status', auth, superAdmin, async (req, res) => {
    try {
        const { status } = req.body;
        if (!['active', 'draft', 'archived'].includes(status)) {
            return res.status(400).json({ msg: 'Invalid status' });
        }

        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }

        course.status = status;
        await course.save();

        res.json(course);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
