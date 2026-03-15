const express = require('express');
const Inquiry = require('../models/Inquiry');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, phone, service, message } = req.body;

    if (!name || !phone || !service) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const inquiry = await Inquiry.create({
      name,
      phone,
      service,
      message
    });

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      inquiry
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    res.json({ success: true, inquiry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    res.json({ success: true, message: 'Inquiry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
