// MODULES
// ==================================
pry = require('pryjs')
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var hbs = require('hbs');
var bodyParser = require('body-parser');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// MODELS
// ==================================
var User = require('./models/user')

// MODULES
// ==================================
var usersController = require('./controllers/users.js')

var app = express();
// DATABASE CONNECTION
// ==================================
mongoose.connect('mongodb://localhost/auth-test-app');

// MIDDLEWARE / CONFIGURATION
// ==================================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs');

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ROUTING MIDDLEWARE
// ==================================
app.use('/users', usersController );

// ROUTES
// ==================================

var hello = function(req, res, next) {
  console.log('hello');
  next()
};

app.get('/', hello, function(req, res) {
  res.json({status: 200, message: "Everythings A-Okay"});
});

// SERVER LISTENING ON PORT
// ==================================
app.listen(3000);
