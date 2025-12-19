const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Transaction = require('../models/Transaction');
const Course = require('../models/Course');

router.get('/', auth, async (req, res) => {
    try {
        const transactions = await Transaction.find({ organizer: req.organizer.id })
            .populate('course', 'title')
            .sort({ createdAt: -1 });

        res.json(transactions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/stats', auth, async (req, res) => {
    try {
        const transactions = await Transaction.find({ 
            organizer: req.organizer.id,
            status: 'completed'
        });

        const totalEarnings = transactions.reduce((sum, txn) => sum + txn.amount, 0);
        
        const availableForPayout = transactions
            .filter(txn => txn.payoutStatus === 'pending')
            .reduce((sum, txn) => sum + txn.amount, 0);

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        
        const monthlyEarnings = transactions
            .filter(txn => {
                const txnDate = new Date(txn.createdAt);
                return txnDate.getMonth() === currentMonth && 
                       txnDate.getFullYear() === currentYear;
            })
            .reduce((sum, txn) => sum + txn.amount, 0);

        const previousMonthDate = new Date(currentYear, currentMonth - 1);
        const prevMonthEarnings = transactions
            .filter(txn => {
                const txnDate = new Date(txn.createdAt);
                return txnDate.getMonth() === previousMonthDate.getMonth() && 
                       txnDate.getFullYear() === previousMonthDate.getFullYear();
            })
            .reduce((sum, txn) => sum + txn.amount, 0);

        const monthlyGrowth = prevMonthEarnings > 0 
            ? ((monthlyEarnings - prevMonthEarnings) / prevMonthEarnings * 100).toFixed(1)
            : 0;

        const nextPayoutDate = new Date();
        nextPayoutDate.setDate(15);
        if (nextPayoutDate < currentDate) {
            nextPayoutDate.setMonth(nextPayoutDate.getMonth() + 1);
        }

        res.json({
            totalEarnings,
            availableForPayout,
            monthlyGrowth,
            nextPayoutDate,
            transactionCount: transactions.length
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const transaction = await Transaction.findOne({
            _id: req.params.id,
            organizer: req.organizer.id
        }).populate('course', 'title');

        if (!transaction) {
            return res.status(404).json({ msg: 'Transaction not found' });
        }

        res.json(transaction);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Transaction not found' });
        }
        res.status(500).send('Server error');
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const { courseId, amount, student } = req.body;

        const course = await Course.findOne({
            _id: courseId,
            organizer: req.organizer.id
        });

        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }

        const transactionId = 'TRX-' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();

        const transaction = new Transaction({
            organizer: req.organizer.id,
            course: courseId,
            transactionId,
            description: `Course Enrollment - ${course.title}`,
            amount,
            student,
            status: 'completed'
        });

        await transaction.save();

        course.enrollmentCount += 1;
        await course.save();

        res.json(transaction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
