const mongoose = require('mongoose');

const speakerSchema = new mongoose.Schema({
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizer',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    },
    achievements: [{
        date: {
            type: String
        },
        achievement: {
            type: String
        }
    }],
    about: {
        type: String
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

speakerSchema.pre('save', function() {
    this.updatedAt = Date.now();
});

module.exports = mongoose.model('Speaker', speakerSchema);
