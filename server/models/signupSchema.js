const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AwwUsersSchema = new Schema({
    aww_name: {
        type: String,
        required: true
    },
    aww_email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('AwwUsers', AwwUsersSchema);