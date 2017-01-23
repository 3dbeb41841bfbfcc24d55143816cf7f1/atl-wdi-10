pry = require('pryjs')

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var hbs = require('hbs');
var mongoose = require('mongoose');



var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');

// require the list controller here

var app = express();

mongoose.connect('mongodb://localhost/auth');

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(logger('dev'));
app.use(methodOverride('_method'));

app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

app.use('/users', usersController);
app.use('/sessions', sessionsController);

//add the third app.use here (check readme for which route)


app.listen(4000, function() {
  console.log('hey');
});
