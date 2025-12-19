const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizer',
        required: true
    },
    courseType: {
        type: String,
        enum: ['external', 'banner', 'lms', 'Webinar', 'Course', 'Meetup'],
        required: true
    },
    eventType: {
        type: String,
        enum: ['Inperson', 'Online', 'Hybrid'],
        default: 'Online'
    },
    contentType: {
        type: String,
        enum: ['section', 'richText'],
        default: 'section'
    },
    richTextContent: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    bannerImage: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    externalLink: {
        type: String
    },

    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    location: {
        type: String
    },
    targetProfession: [{
        type: String
    }],
    credits: [{
        type: {
            type: String
        },
        value: {
            type: String
        }
    }],
    shortDescription: {
        type: String
    },
    topics: [{
        title: {
            type: String
        },
        subtitle: {
            type: String
        },
        description: {
            type: String
        }
    }],
    objectives: [{
        type: String
    }],
    keyFeatures: [{
        type: String
    }],
    accreditation: [{
        title: {
            type: String
        },
        description: {
            type: String
        }
    }],
    creditSummary: {
        type: String
    },
    speakers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Speaker'
    }],
    modules: [{
        title: {
            type: String
        },
        lectures: [{
            title: {
                type: String
            },
            videoUrl: {
                type: String
            },
            duration: {
                type: Number
            },
            resources: [{
                name: {
                    type: String
                },
                url: {
                    type: String
                }
            }]
        }]
    }],
    status: {
        type: String,
        enum: ['draft', 'active', 'archived'],
        default: 'draft'
    },
    featured: {
        type: Boolean,
        default: false
    },
    enrollmentCount: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
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

courseSchema.pre('save', function () {
    this.updatedAt = Date.now();
});

module.exports = mongoose.model('Course', courseSchema);
