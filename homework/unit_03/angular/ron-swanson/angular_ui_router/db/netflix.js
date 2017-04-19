var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var NetflixSchema = new Schema({
  title: String,
  poster: String,
  created_at: Date,
  updated_at: Date
});

NetflixSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;

  if(!this.created_at){
    this.created_at = now;
  }

  next();
});

var NetflixModel = mongoose.model('Netflix', NetflixSchema);

module.exports = {
  Netflix: NetflixModel
};
