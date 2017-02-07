var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var CreditSchema = new Schema({
  note: String,
  total: Number,
  created_at: Date,
  updated_at: Date
});

CreditSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;

  if(!this.created_at){
    this.created_at = now;
  }

  next();
});

var CreditModel = mongoose.model('Credit', CreditSchema);

module.exports = {
  Credit: CreditModel
};
