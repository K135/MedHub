const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const Organizer = require('./models/Organizer');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Medhubmongo')
    .then(() => console.log('MongoDB Connected for Seeding Super Admin'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });

const createSuperAdmin = async () => {
    try {
        const email = 'superadmin@medhub.com';
        const password = 'superadmin123';

        // Check if superadmin exists
        let superAdmin = await Organizer.findOne({ email });

        if (superAdmin) {
            console.log('Super Admin already exists');
            // Ensure role is superadmin
            if (superAdmin.role !== 'superadmin') {
                superAdmin.role = 'superadmin';
                await superAdmin.save();
                console.log('Updated existing user role to superadmin');
            }
            process.exit();
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        superAdmin = new Organizer({
            name: 'Super Admin',
            email: email,
            phone: '0000000000',
            password: hashedPassword,
            organizationName: 'MedHub HQ',
            role: 'superadmin',
            website: 'https://medhub.com'
        });

        await superAdmin.save();
        console.log('Super Admin created successfully');
        console.log('Email:', email);
        console.log('Password:', password);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

createSuperAdmin();
