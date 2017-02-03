var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var QuoteSchema = new Schema({
  name: String,
  created_at: Date,
  updated_at: Date
});

QuoteSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;

  if(!this.created_at){
    this.created_at = now;
  }

  next();
});

var QuoteModel = mongoose.model('Quote', QuoteSchema);

module.exports = {
  Quote: QuoteModel
};
