const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type:String,
        required: true
    },
    time: {
        type: String
    }
}, {timestamps: true});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;