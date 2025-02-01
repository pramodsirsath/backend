const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    collegeId: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
    },
    roomNo: {
        type: String
    },
    address: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;