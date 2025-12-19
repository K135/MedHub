const Organizer = require('../models/Organizer');

module.exports = async function(req, res, next) {
    try {
        const organizer = await Organizer.findById(req.organizer.id);
        
        if (!organizer) {
            return res.status(404).json({ msg: 'User not found' });
        }

        if (organizer.role !== 'superadmin') {
            return res.status(403).json({ msg: 'Access denied. Super Admin only.' });
        }

        next();
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
