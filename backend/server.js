const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Medhubmongo')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const speakerRoutes = require('./routes/speakers');
const transactionRoutes = require('./routes/transactions');
const bankDetailsRoutes = require('./routes/bankDetails');
const supportRoutes = require('./routes/support');
const profileRoutes = require('./routes/profile');
const uploadRoutes = require('./routes/upload');
const superAdminRoutes = require('./routes/superadmin');

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/speakers', speakerRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/bank-details', bankDetailsRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/superadmin', superAdminRoutes);

app.get('/', (req, res) => {
    res.send('MedHub API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
