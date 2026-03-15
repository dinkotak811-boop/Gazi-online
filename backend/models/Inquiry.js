const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    trim: true,
    maxlength: [20, 'Phone cannot be more than 20 characters']
  },
  service: {
    type: String,
    required: [true, 'Service is required'],
    enum: ['electric', 'recharge', 'banking', 'print', 'other']
  },
  message: {
    type: String,
    trim: true,
    maxlength: [500, 'Message cannot be more than 500 characters']
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

inquirySchema.index({ createdAt: -1 });
inquirySchema.index({ status: 1 });

module.exports = mongoose.model('Inquiry', inquirySchema);
