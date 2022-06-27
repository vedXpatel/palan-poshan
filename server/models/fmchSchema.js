const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fmchSchema = new Schema({
    aww_name: {
        type: String,
        required: true
    },
    number_of_mothers_counselling: {
        type: Number,
        required: true
    }, 
    location: {
        type: String,
        required: true
    },
    number_of_mothers_counselling_today: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Fmch', fmchSchema);