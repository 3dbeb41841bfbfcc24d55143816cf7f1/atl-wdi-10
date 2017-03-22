var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-mongoose-lesson-starter');

var User = require('../models/user');
var Item = require('../models/item');

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing users and items.
Item.remove({}, function(err){
  console.log(err);
});

User.remove({}, function(err){
  console.log(err);
});

// create new users
var danny = new User({
  first_name: 'Danny',
  email: 'danny@gmail.com',
  items: [{name: "Bike maintenance"}]
});

var maren = new User({
  first_name: 'Maren',
  email: 'maren@gmail.com',
  items: [{name: "Get dry cleaning"}]
});

var diesel = new User({
  first_name: 'diesel',
  email: 'diesel@gmail.com',
  items: [{name: "Go to the dog park"}]
});

// save the users
danny.save(function(err) {
  if (err) console.log(err);

  console.log('User created!');
});

maren.save(function(err) {
  if (err) console.log(err);

  console.log('User created!');
});

diesel.save(function(err) {
  if (err) console.log(err);
  
  console.log('User created!');
});
