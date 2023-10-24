const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    manufacturer: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    unitOfMeasure: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Item", itemSchema);