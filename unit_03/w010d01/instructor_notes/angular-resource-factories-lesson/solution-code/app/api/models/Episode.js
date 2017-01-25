var mongoose = require('mongoose');

var EpisodeSchema = mongoose.Schema({
	name: String,
  release_date: String,
  director: String,
  studio: String
});

module.exports = mongoose.model('Episode', EpisodeSchema);

