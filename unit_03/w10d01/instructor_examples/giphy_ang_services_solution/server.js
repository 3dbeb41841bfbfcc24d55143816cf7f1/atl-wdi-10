var express        = require('express');
var bodyParser     = require('body-parser');
var logger         = require('morgan');
var mongoose       = require('mongoose');
var gifsController = require('./controllers/gifs.js');

var app = express();

app.use(express.static('public'))

var mongoURI = 'mongodb://localhost/giphy_app'
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use('/gifs', gifsController);

app.listen(process.env.PORT || 3000, function() {
  console.log(`listening on 3000`)
});
