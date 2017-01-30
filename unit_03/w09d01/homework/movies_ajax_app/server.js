var express        = require('express');
var bodyParser     = require('body-parser');
var logger         = require('morgan');
var mongoose       = require('mongoose');
var moviesController = require('./controllers/movies.js');

var app = express();

app.use(express.static('public'))

mongoose.connect('mongodb://localhost/movies_app');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use('/movies', moviesController);


app.listen(3000, function() {
  console.log('LISTENING TO PORT 3000')
});
