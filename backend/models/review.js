// Load required packages
var mongoose = require('mongoose');

// Define Review Schema
var ReviewSchema = mongoose.Schema({
    email		: {type: String, required: true, unique: true},
    rating1 : Integer,
    rating2 : Integer,
    rating3 : Integer,
    rating4 : Integer,
    text : String,
    location : String,
    dateCreated : {type: Date, default: Date.now}
});

module.exports = mongoose.model('Review', ReviewSchema);
