
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    date : {
        type: Date,
        required: true
    },
    quantity : {
        type : Number,
        required: true
    },
    code : {
        type : String,
        required: true,
        unique: true
    },
    
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
