var mongoose = require('mongoose');

var CriminalSchema = mongoose.Schema({
	name: String,
  crime: String
});

module.exports = mongoose.model('Criminal', CriminalSchema);
