const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company', // Reference to the user who is providing the review (Freelancer or Company)
    required: true,
  },
  target: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Freelancer', // Reference to the user who is being reviewed (Freelancer or Company)
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
