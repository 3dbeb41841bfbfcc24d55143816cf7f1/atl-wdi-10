var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var port = 3000;
var path = require('path');

mongoose.connect('mongodb://localhost:27017/angular-hw-app');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

var quotesController = require('./server/routes/quotes.js');
app.use('/quotes', quotesController);

var netflixController = require('./server/routes/netflix.js');
app.use('/netflix', netflixController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function(){
  console.log('listening on port ' + port);
});
