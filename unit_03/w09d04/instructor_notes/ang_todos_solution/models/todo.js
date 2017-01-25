var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  description: String,
  done: Boolean,
  createdAt: Date,
  updatedAt: Date
});


module.exports = mongoose.model('Todo', todoSchema);
