var mongoose = require('mongoose');

var CharacterSchema = mongoose.Schema({
	name: String,
  lightsaber: String
});

module.exports = mongoose.model('Character', CharacterSchema);

