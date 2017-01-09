var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/family-tree');

var User = require('../models/user');
var Item = require('../models/item');

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing users and items.
// Item.remove({})
//   .catch(function(err){
//     console.log(err);
//   });
//
User.remove({}, function(err){
  console.log(err);
});


var users = [
  {
    first_name: 'Gerry',
    email: 'gerry@gmail.com',
    items: [{name: "Pay car insurance"}]
  },
  {
    first_name: 'marc',
    email: 'marc@gmail.com',
    items: [{name: "Get dry cleaning"}]
  }
];

users.forEach(function(user){
  User.create({
    first_name: user.first_name,
    email: user.email
  });
});



//
//
// User.remove({})
// .then(function(){
//   var users = [
//     {
//       first_name: 'Gerry',
//       email: 'gerry@gmail.com',
//       items: [{name: "Pay car insurance"}]
//     },
//     {
//       first_name: 'marc',
//       email: 'marc@gmail.com',
//       items: [{name: "Get dry cleaning"}]
//     }
//   ];
//
//   users.forEach(function(user){
//     User.create({
//       first_name: user.first_name,
//       email: user.email
//     });
//   });
// })
// .then(function(users){
//   console.log(users);
// })
// .catch(function(err){
//   console.log(err);
// });





// // create new users
// var gerry = new User({
//   first_name: 'Gerry',
//   email: 'gerry@gmail.com',
//   items: [{name: "Pay car insurance"}]
// });
//
// var marc = new User({
//   first_name: 'marc',
//   email: 'marc@gmail.com',
//   items: [{name: "Get dry cleaning"}]
// });
//
// var diesel = new User({
//   first_name: 'diesel',
//   email: 'diesel@gmail.com',
//   items: [{name: "Go to the store"}]
// });
//
// // save the users
// gerry.save(function(err) {
//   if (err) console.log(err);
//   console.log('User created!');
// });
//
// marc.save(function(err) {
//   if (err) console.log(err);
//   console.log('User created!');
// });
//
// diesel.save(function(err) {
//   if (err) console.log(err);
//   console.log('User created!');
// });
//
// User.create({
//   first_name: "Marcus",
//   email: "marcus@ga.co"
// });

mongoose.disconnect();
