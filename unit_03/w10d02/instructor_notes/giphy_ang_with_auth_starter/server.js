pry = require('pryjs');
var express        = require('express');
var bodyParser     = require('body-parser');
var session        = require('express-session');
var logger         = require('morgan');
var mongoose       = require('mongoose');
var usersController = require('./controllers/users.js');
var gifsController = require('./controllers/gifs.js');
var sessionsController = require('./controllers/sessions.js');

var app = express();

app.use(express.static('public'))

var mongoURI = 'mongodb://localhost/giphy_app'
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use(session({
  secret: "derpderpderpcats",
  resave: true,
  saveUninitialized: false
}));

app.use('/users', usersController);
app.use('/users/:id/gifs', gifsController)
app.use('/sessions', sessionsController);

app.listen(process.env.PORT || 3000, function() {
  console.log(`listening on 3000`)
});
