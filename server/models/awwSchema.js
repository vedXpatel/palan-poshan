const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const awwSchema = new Schema({
    mothers_name: {
        type: String,
        required: true
    },
    due_date: {
        type: Date,
        default: Date.now,
    },
    trimester: {
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

module.exports = mongoose.model('Aww', awwSchema);