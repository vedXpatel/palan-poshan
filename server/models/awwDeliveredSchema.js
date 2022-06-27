const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const awwDelivered = new Schema({
    mothers_name: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        default: Date.now,
    },
    stage: {
        type: Number,
        required: true
    },
    number_of_checkups: {
        type: Number,
        required: true
    },
    appoinment_date: {
        type: Date,
    }
});

module.exports = mongoose.model('AwwDelivered', awwDelivered);