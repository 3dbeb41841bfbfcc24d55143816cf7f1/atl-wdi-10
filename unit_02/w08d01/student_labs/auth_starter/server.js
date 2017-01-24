var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var hbs = require('hbs');
var mongoose = require('mongoose');
var session = require('express-session');

var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');

var app = express();

mongoose.connect('mongodb://localhost/auth');

app.set('view engine', 'hbs');

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

app.get('/test-middleware', function(req, res) {res.send('hi')});


app.listen(3000, function() {
  console.log('hey');
});
