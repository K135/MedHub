const mongoose = require('mongoose');

const bankDetailsSchema = new mongoose.Schema({
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizer',
        required: true,
        unique: true
    },
    accountHolderName: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    routingNumber: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

bankDetailsSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('BankDetails', bankDetailsSchema);
