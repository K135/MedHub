const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const BankDetails = require('../models/BankDetails');

router.get('/', auth, async (req, res) => {
    try {
        const bankDetails = await BankDetails.findOne({ organizer: req.organizer.id });

        if (!bankDetails) {
            return res.status(404).json({ msg: 'Bank details not found' });
        }

        const maskedDetails = {
            ...bankDetails.toObject(),
            accountNumber: '****' + bankDetails.accountNumber.slice(-4),
            routingNumber: bankDetails.routingNumber.slice(0, 2) + '***' + bankDetails.routingNumber.slice(-2)
        };

        res.json(maskedDetails);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const { accountHolderName, bankName, routingNumber, accountNumber } = req.body;

        let bankDetails = await BankDetails.findOne({ organizer: req.organizer.id });

        if (bankDetails) {
            bankDetails.accountHolderName = accountHolderName;
            bankDetails.bankName = bankName;
            bankDetails.routingNumber = routingNumber;
            bankDetails.accountNumber = accountNumber;
            bankDetails.isVerified = true;
        } else {
            bankDetails = new BankDetails({
                organizer: req.organizer.id,
                accountHolderName,
                bankName,
                routingNumber,
                accountNumber,
                isVerified: true
            });
        }

        await bankDetails.save();

        const maskedDetails = {
            ...bankDetails.toObject(),
            accountNumber: '****' + accountNumber.slice(-4),
            routingNumber: routingNumber.slice(0, 2) + '***' + routingNumber.slice(-2)
        };

        res.json(maskedDetails);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.delete('/', auth, async (req, res) => {
    try {
        const bankDetails = await BankDetails.findOne({ organizer: req.organizer.id });

        if (!bankDetails) {
            return res.status(404).json({ msg: 'Bank details not found' });
        }

        await BankDetails.findByIdAndDelete(bankDetails._id);

        res.json({ msg: 'Bank details removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
