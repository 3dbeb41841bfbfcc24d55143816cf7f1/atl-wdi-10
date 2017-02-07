var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var GifSchema = new Schema({
  url: {type: String, required: true},
  name: {type: String, required: true},
  created_at: Date,
  updated_at: Date
});

var UserSchema = new Schema({
  name: String,
  email: String,
  gifs: [GifSchema],
  password_digest: String,
  created_at: Date,
  updated_at: Date
});


GifSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }

  next();
});


UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

var GifModel = mongoose.model('Gif', GifSchema);
var UserModel = mongoose.model('User', UserSchema);

module.exports = {
  User: UserModel,
  Gif: GifModel
}
