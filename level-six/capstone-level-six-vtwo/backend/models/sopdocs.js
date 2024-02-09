const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sopdocsSchema = new Schema({
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateEffective: {
    type: Date,
    default: () => Date.now() + 72460601000
  },
  title: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: true
  },
  keywords: {
    type: Array,
    required: true
  },
  guidelines: {
    type: String,
    required: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  archivedDate: {
    type: Date,
    default: null
  },
  replacedById: {
    type: Schema.Types.ObjectId,
    ref: 'Sopdocs', 
    default: null
  }
})

module.exports = mongoose.model("Sopdocs", sopdocsSchema)