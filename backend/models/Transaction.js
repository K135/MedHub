const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizer',
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    transactionId: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'refunded'],
        default: 'completed'
    },
    payoutStatus: {
        type: String,
        enum: ['pending', 'processing', 'paid'],
        default: 'pending'
    },
    student: {
        name: {
            type: String
        },
        email: {
            type: String
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);
