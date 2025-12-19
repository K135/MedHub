const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const auth = require('../middleware/auth');
const Speaker = require('../models/Speaker');

const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'speaker-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only images are allowed.'));
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: fileFilter
});

router.post('/', auth, upload.single('profileImage'), async (req, res) => {
    try {
        const { name, jobTitle, about, achievements } = req.body;

        const speakerData = {
            name,
            jobTitle,
            about,
            organizer: req.organizer.id
        };

        if (req.file) {
            speakerData.profileImage = `/uploads/${req.file.filename}`;
        }

        if (achievements) {
            try {
                speakerData.achievements = JSON.parse(achievements);
            } catch (e) {
                speakerData.achievements = [];
            }
        }

        const speaker = new Speaker(speakerData);
        await speaker.save();

        res.json(speaker);
    } catch (err) {
        console.error('Speaker creation error:', err);
        if (err.name === 'ValidationError') {
            return res.status(400).json({ msg: err.message });
        }
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const speakers = await Speaker.find({ organizer: req.organizer.id })
            .sort({ createdAt: -1 });

        res.json(speakers);
    } catch (err) {
        console.error('Error fetching speakers:', err);
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const speaker = await Speaker.findOne({
            _id: req.params.id,
            organizer: req.organizer.id
        });

        if (!speaker) {
            return res.status(404).json({ msg: 'Speaker not found' });
        }

        res.json(speaker);
    } catch (err) {
        console.error('Error fetching speaker:', err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Speaker not found' });
        }
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

router.put('/:id', auth, upload.single('profileImage'), async (req, res) => {
    try {
        let speaker = await Speaker.findOne({
            _id: req.params.id,
            organizer: req.organizer.id
        });

        if (!speaker) {
            return res.status(404).json({ msg: 'Speaker not found' });
        }

        const { name, jobTitle, about, achievements } = req.body;
        const updateData = {
            name,
            jobTitle,
            about
        };

        if (req.file) {
            if (speaker.profileImage) {
                const oldImagePath = path.join(__dirname, '..', speaker.profileImage);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
            updateData.profileImage = `/uploads/${req.file.filename}`;
        }

        if (achievements) {
            try {
                updateData.achievements = JSON.parse(achievements);
            } catch (e) {
                updateData.achievements = speaker.achievements;
            }
        }

        speaker = await Speaker.findByIdAndUpdate(
            req.params.id,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        res.json(speaker);
    } catch (err) {
        console.error('Speaker update error:', err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Speaker not found' });
        }
        if (err.name === 'ValidationError') {
            return res.status(400).json({ msg: err.message });
        }
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const speaker = await Speaker.findOne({
            _id: req.params.id,
            organizer: req.organizer.id
        });

        if (!speaker) {
            return res.status(404).json({ msg: 'Speaker not found' });
        }

        if (speaker.profileImage) {
            const imagePath = path.join(__dirname, '..', speaker.profileImage);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await Speaker.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Speaker removed' });
    } catch (err) {
        console.error('Error deleting speaker:', err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Speaker not found' });
        }
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

module.exports = router;
