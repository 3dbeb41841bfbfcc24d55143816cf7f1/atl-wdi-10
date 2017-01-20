//require mongoose:
var mongoose = require('mongoose');

//write your vampireSchema:
var vampireSchema = mongoose.Schema({
    name: String,
    hair_color: String,
    eye_color: String,
    loves: [String],
    dob: Date,
    location: String,
    gender: String,
    victims: Number,
    title: String
});

//export your model:

var Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;
