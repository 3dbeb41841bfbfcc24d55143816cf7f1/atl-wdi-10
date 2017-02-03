var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/angular-hw-app');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var quotesController = require('./controllers/quotes.js');
app.use('/quotes', quotesController);

var netflixController = require('./controllers/netflix.js');
app.use('/netflix', netflixController);



app.listen(3000, function(){
  console.log('listening on port 3000')
});
