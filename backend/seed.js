const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const Organizer = require('./models/Organizer');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Medhubmongo')
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });

const seedOrganizer = async () => {
    try {
        // Check if admin exists
        const email = 'admin@medhub.com';
        const existingOrganizer = await Organizer.findOne({ email });

        if (existingOrganizer) {
            console.log('Admin user already exists');
            process.exit();
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('admin123', salt);

        const newOrganizer = new Organizer({
            name: 'Super Admin',
            email: email,
            phone: '1234567890',
            password: hashedPassword,
            organizationName: 'MedHub HQ'
        });

        await newOrganizer.save();
        console.log('Admin user created successfully');
        console.log('Email: admin@medhub.com');
        console.log('Password: admin123');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedOrganizer();
