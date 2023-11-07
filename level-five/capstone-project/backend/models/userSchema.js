const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    employeeId: {
        type: Number,
        required: true
    },
    locationId: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    loginStatus: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);