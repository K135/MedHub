const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Course = require('../models/Course');
const Transaction = require('../models/Transaction');
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

router.get('/featured', async (req, res) => {
    try {
        const courses = await Course.find({
            featured: true,
            status: 'active'
        })
        .populate('organizer', 'organizationName')
        .sort({ createdAt: -1 })
        .limit(6);

        res.json(courses);
    } catch (err) {
        console.error('Error fetching featured courses:', err);
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

router.get('/public/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
            .populate('organizer', 'organizationName')
            .populate('speakers');
        
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

router.post('/', auth, upload.single('banner'), async (req, res) => {
    try {
        console.log('Received POST request to /courses');
        console.log('Body:', req.body);
        console.log('File:', req.file);

        let courseData = { ...req.body };

        // Parse JSON fields that might be sent as strings due to FormData
        if (typeof courseData.topics === 'string') courseData.topics = JSON.parse(courseData.topics);
        if (typeof courseData.objectives === 'string') courseData.objectives = JSON.parse(courseData.objectives);
        if (typeof courseData.keyFeatures === 'string') courseData.keyFeatures = JSON.parse(courseData.keyFeatures);
        if (typeof courseData.accreditation === 'string') courseData.accreditation = JSON.parse(courseData.accreditation);
        if (typeof courseData.targetProfession === 'string') courseData.targetProfession = JSON.parse(courseData.targetProfession);
        if (typeof courseData.credits === 'string') courseData.credits = JSON.parse(courseData.credits);
        if (typeof courseData.speakers === 'string') courseData.speakers = JSON.parse(courseData.speakers);

        courseData.organizer = req.organizer.id;

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

router.get('/', auth, async (req, res) => {
    try {
        const courses = await Course.find({ organizer: req.organizer.id })
            .sort({ createdAt: -1 });

        res.json(courses);
    } catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const course = await Course.findOne({
            _id: req.params.id,
            organizer: req.organizer.id
        });

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

router.put('/:id', auth, upload.single('banner'), async (req, res) => {
    try {
        let course = await Course.findOne({
            _id: req.params.id,
            organizer: req.organizer.id
        });

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

router.delete('/:id', auth, async (req, res) => {
    try {
        const course = await Course.findOne({
            _id: req.params.id,
            organizer: req.organizer.id
        });

        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }

        await Course.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Course removed' });
    } catch (err) {
        console.error('Error deleting course:', err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Course not found' });
        }
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

router.get('/stats/summary', auth, async (req, res) => {
    try {
        const totalCourses = await Course.countDocuments({ organizer: req.organizer.id });
        const activeCourses = await Course.countDocuments({
            organizer: req.organizer.id,
            status: 'active'
        });
        const draftCourses = await Course.countDocuments({
            organizer: req.organizer.id,
            status: 'draft'
        });

        const courses = await Course.find({ organizer: req.organizer.id });
        const totalEnrollments = courses.reduce((sum, course) => sum + course.enrollmentCount, 0);

        res.json({
            totalCourses,
            activeCourses,
            draftCourses,
            totalEnrollments
        });
    } catch (err) {
        console.error('Error fetching course stats:', err);
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

module.exports = router;
