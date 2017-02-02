var mongoose = require('mongoose');
var President = require('../models/President.js');

mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb://localhost:27017/presidents-app');

var presidents = [
  {name: 'George Washington', start: 1789, end: 1797 },
  {name: 'John Adams', start: 1797, end: 1801 },
  {name: 'Thomas Jefferson', start: 1801, end: 1809 },
  {name: 'James Madison', start: 1809, end: 1817 }
];

President.remove({})
  .then(function(){
    return President.create(presidents);
  })
  .then(function(presidents){
    console.log(presidents);
  })
  .then(function(){
    mongoose.connection.close(function () {
      console.log('Mongoose connection disconnected');
    });
  });
