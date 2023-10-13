const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    bountyAmt: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Bounty", bountySchema);