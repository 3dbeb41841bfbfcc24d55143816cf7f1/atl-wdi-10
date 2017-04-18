var express        = require('express');
var bodyParser     = require('body-parser');
var logger         = require('morgan');
var mongoose       = require('mongoose');
var gifsController = require('./controllers/gifs.js');

var app = express();

app.use(express.static('public'))

mongoose.connect('mongodb://localhost/giphy');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use('/gifs', gifsController);


app.listen(3000, function() {
  console.log('hey')
});
