var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var ListSchema = new Schema({
  name: String,
  complete: {type: Boolean, default: false},
  created_at: Date,
  updated_at: Date
});

var UserSchema = new Schema({
  name: String,
  email: String,
  list: [ListSchema],
  password_digest: String,
  created_at: Date,
  updated_at: Date
});

ListSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

var UserModel = mongoose.model('User', UserSchema);
var ListModel = mongoose.model('List', ListSchema);

module.exports = {
  User: UserModel,
  List: ListModel
}
