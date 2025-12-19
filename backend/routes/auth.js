const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Organizer = require('../models/Organizer');

// Signup
router.post('/signup', async (req, res) => {
    try {
        const { name, email, phone, password, organizationName } = req.body;

        // Check if user exists
        let organizer = await Organizer.findOne({ email });
        if (organizer) {
            return res.status(400).json({ msg: 'Organizer already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        organizer = new Organizer({
            name,
            email,
            phone,
            password: hashedPassword,
            organizationName
        });

        await organizer.save();

        // Create Token
        const payload = {
            organizer: {
                id: organizer.id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        let organizer = await Organizer.findOne({ email });
        if (!organizer) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, organizer.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // Create Token
        const payload = {
            organizer: {
                id: organizer.id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
