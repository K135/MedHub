const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const SupportTicket = require('../models/SupportTicket');

router.post('/', auth, async (req, res) => {
    try {
        const { subject, message, priority } = req.body;

        const ticket = new SupportTicket({
            organizer: req.organizer.id,
            subject,
            message,
            priority: priority || 'medium'
        });

        await ticket.save();

        res.json(ticket);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const tickets = await SupportTicket.find({ organizer: req.organizer.id })
            .sort({ createdAt: -1 });

        res.json(tickets);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const ticket = await SupportTicket.findOne({
            _id: req.params.id,
            organizer: req.organizer.id
        });

        if (!ticket) {
            return res.status(404).json({ msg: 'Ticket not found' });
        }

        res.json(ticket);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Ticket not found' });
        }
        res.status(500).send('Server error');
    }
});

router.post('/:id/reply', auth, async (req, res) => {
    try {
        const { message } = req.body;

        const ticket = await SupportTicket.findOne({
            _id: req.params.id,
            organizer: req.organizer.id
        });

        if (!ticket) {
            return res.status(404).json({ msg: 'Ticket not found' });
        }

        ticket.replies.push({
            message,
            isAdmin: false
        });

        await ticket.save();

        res.json(ticket);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Ticket not found' });
        }
        res.status(500).send('Server error');
    }
});

router.put('/:id/status', auth, async (req, res) => {
    try {
        const { status } = req.body;

        const ticket = await SupportTicket.findOne({
            _id: req.params.id,
            organizer: req.organizer.id
        });

        if (!ticket) {
            return res.status(404).json({ msg: 'Ticket not found' });
        }

        ticket.status = status;
        await ticket.save();

        res.json(ticket);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Ticket not found' });
        }
        res.status(500).send('Server error');
    }
});

module.exports = router;
