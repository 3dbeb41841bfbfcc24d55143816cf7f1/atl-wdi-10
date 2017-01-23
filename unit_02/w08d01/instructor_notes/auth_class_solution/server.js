pry = require('pryjs');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var hbs = require('hbs')
var mongoose = require('mongoose');
var authHelpers = require('./helpers/auth.js')
var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');

var app = express();

mongoose.connect('mongodb://localhost/auth');

app.set('view engine', 'hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(methodOverride('_method'));

app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

app.use('/users', usersController);
app.use('/sessions', sessionsController);

function hello(req, res, next) {
  console.log('HELLO FROM MIDDLEWARE>>>>>>>>>>>');
  next()
}

app.get('/test-middleware', authHelpers.authorize, function(req, res) {
  res.send('hi')
})

app.listen(3000, function() {
  console.log('hey')
});
