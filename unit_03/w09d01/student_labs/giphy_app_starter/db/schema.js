var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var GifSchema = new Schema({
  url: String,
  created_at: Date,
  updated_at: Date
});

GifSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  
  next()
});

var GifModel = mongoose.model('Gif', GifSchema);

module.exports = {
  Gif: GifModel
}
