var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/criminals-app');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

var criminalsController = require('./server/routes/criminals.js');
app.use('/api/criminals', criminalsController);

app.listen(port, function(){
    console.log("Listening on port " + port);
});
