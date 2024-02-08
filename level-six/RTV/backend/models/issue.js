const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = require('./comment')

const issueSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  votes: [{
    voter: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    voteType: {
      type: String,
      enum: ['upvote', 'downvote'],
      required: true
    }
  }],
  upvotesCount: {
    type: Number,
    default: 0
  },
  downvotesCount: {
    type: Number,
    default: 0
  },
  commentsCount: {
    type: Number,
    default: 0
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: [commentSchema]
  }]
})

module.exports = mongoose.model("Issue", issueSchema)