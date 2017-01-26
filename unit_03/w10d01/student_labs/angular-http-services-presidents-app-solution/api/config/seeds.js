var mongoose = require('mongoose');
var President = require('../models/President.js');
mongoose.connect('mongodb://localhost:27017/presidents-app');

// db.presidents.drop()

var presidents = [
  {"name": "George Washington", "start": 1789, "end": 1797 },
  {"name": "John Adams", "start": 1797, "end": 1801 },
  {"name": "Thomas Jefferson", "start": 1801, "end": 1809 },
  {"name": "James Madison", "start": 1809, "end": 1817 }
];


President.remove({}, function(err){
  console.log(err);
});

President.create(presidents);
// President.create({"name": "George Washington", "start": 1789, "end": 1797 });
// President.create({"name": "George Washington", "start": 1789, "end": 1797 });
// President.create({"name": "George Washington", "start": 1789, "end": 1797 });


mongoose.connection.close()
