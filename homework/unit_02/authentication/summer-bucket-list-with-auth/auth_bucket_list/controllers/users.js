//require express, router, User Schema, List Schema, authHelpers
var express = require('express');
router = express.Router();
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');

//SHOW: create a GET "/" that displays all users on the index page
router.get('/', function(req, res) {
  User.find({})
  .exec(function(err, users){
    if (err) { console.log(err); }
    res.render('users/index.hbs', { users: users });
  });
});

//SIGN UP: create a GET "/signup" that simply renders the signup page
router.get('/signup', function(req, res){
  res.render('users/signup.hbs');
});

//SHOW: create a GET "/:id" route that shows the page ONLY IF it's the current user's session. Else, redirect to an error page that says "Oops! You are not authorized."




//User registration
//Auth stuff: POST "/" save username, email, and password
router.post('/', authHelpers.createSecure, function(req, res){

  var user = new User({
    email: req.body.email,
    password_digest: res.hashedPassword
  });

  user.save(function(err, user){
    if (err) console.log(err);
    console.log(user);
    console.log(req.session.currentUser);
    res.redirect('/users/login');
  });
});


module.exports = router;
