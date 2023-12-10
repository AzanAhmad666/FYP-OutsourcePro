const mongoose = require('mongoose');

const disputeSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project', // Reference to the project related to the dispute
    required: true,
  },
  raisedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the user (Freelancer or Company) who raised the dispute
    required: true,
  },
  against: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the user (Freelancer or Company) against whom the dispute is raised
    required: true,
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task', // Reference to the task related to the dispute
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Open', 'Resolved'],
    default: 'Open',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Dispute = mongoose.model('Dispute', disputeSchema);

module.exports = Dispute;
