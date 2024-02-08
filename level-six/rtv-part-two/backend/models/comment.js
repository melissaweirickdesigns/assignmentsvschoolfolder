const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  issue: { // Add this field to reference the Issue
    type: Schema.Types.ObjectId,
    ref: 'Issue',
    required: true
  }
});

module.exports = mongoose.model("Comment", commentSchema);
