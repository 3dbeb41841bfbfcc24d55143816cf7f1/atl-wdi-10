var express = require('express');
var app = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

var movieSearchController = require('./controllers/movieSearchController');
app.use('/moviesSearch', movieSearchController);

app.listen(3000, function () {
  console.log('OMDB app listening on Port 3000!!!');
});