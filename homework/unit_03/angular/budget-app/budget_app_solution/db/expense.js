var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var ExpenseSchema = new Schema({
  note: String,
  total: Number,
  created_at: Date,
  updated_at: Date
});

ExpenseSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;

  if(!this.created_at){
    this.created_at = now;
  }

  next();
});

var ExpenseModel = mongoose.model('Expense', ExpenseSchema);

module.exports = {
  Expense: ExpenseModel
};
