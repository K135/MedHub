const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Organizer = require('../models/Organizer');
const bcrypt = require('bcryptjs');

router.get('/', auth, async (req, res) => {
    try {
        const organizer = await Organizer.findById(req.organizer.id).select('-password');

        if (!organizer) {
            return res.status(404).json({ msg: 'Organizer not found' });
        }

        res.json(organizer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.put('/', auth, async (req, res) => {
    try {
        const { name, email, phone, organizationName, website } = req.body;

        const updateData = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (phone) updateData.phone = phone;
        if (organizationName) updateData.organizationName = organizationName;
        if (website) updateData.website = website;

        if (email && email !== req.body.currentEmail) {
            const existingOrganizer = await Organizer.findOne({ email });
            if (existingOrganizer && existingOrganizer._id.toString() !== req.organizer.id) {
                return res.status(400).json({ msg: 'Email already in use' });
            }
        }

        const organizer = await Organizer.findByIdAndUpdate(
            req.organizer.id,
            { $set: updateData },
            { new: true }
        ).select('-password');

        res.json(organizer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.put('/password', auth, async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        const organizer = await Organizer.findById(req.organizer.id);

        if (!organizer) {
            return res.status(404).json({ msg: 'Organizer not found' });
        }

        const isMatch = await bcrypt.compare(currentPassword, organizer.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Current password is incorrect' });
        }

        const salt = await bcrypt.genSalt(10);
        organizer.password = await bcrypt.hash(newPassword, salt);

        await organizer.save();

        res.json({ msg: 'Password updated successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
