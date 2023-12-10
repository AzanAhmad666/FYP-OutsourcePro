const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the user (Freelancer or Company) who left the comment
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the user (Freelancer or Company) who created the post
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  images: [{
    type: String, // Store image URLs
  }],
  videos: [{
    type: String, // Store video URLs
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to users who liked the post
  }],
  comments: [commentSchema], // Array of comments
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
