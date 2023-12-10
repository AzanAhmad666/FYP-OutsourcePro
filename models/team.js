const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  leader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the UserSchema
    required: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the UserSchema
  }],
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task', // Reference to the TaskSchema
  }],
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
