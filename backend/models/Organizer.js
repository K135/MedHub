const mongoose = require('mongoose');

const organizerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    organizationName: {
        type: String
    },
    website: {
        type: String
    },
    role: {
        type: String,
        enum: ['organizer', 'superadmin'],
        default: 'organizer'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Organizer', organizerSchema);
