var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var MovieSchema = new Schema({
  title: String,
  image: String,
  year: String,
  description: String,
  rating: Number,
  created_at: Date,
  updated_at: Date
});

MovieSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

var MovieModel = mongoose.model('Movie', MovieSchema);

module.exports = {
  Movie: MovieModel
}
