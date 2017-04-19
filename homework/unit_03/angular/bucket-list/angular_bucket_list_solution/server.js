pry = require('pryjs');
var express        = require('express');
var bodyParser     = require('body-parser');
var session        = require('express-session');
var logger         = require('morgan');
var mongoose       = require('mongoose');


var listsController = require('./controllers/lists.js');
var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');

var app = express();

app.use(express.static('public'))

var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/ang_bucket_list'
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use(session({
  secret: "derpderpderpcats",
  resave: true,
  saveUninitialized: false
}));

app.get('/test', (req, res) => {
  eval(pry.it)
});

app.use('/users', usersController);
app.use('/sessions', sessionsController);
app.use('/users/:id/lists', listsController);

app.listen(process.env.PORT || 3000, function() {
  console.log('***LISTENING to 3000****');
});
