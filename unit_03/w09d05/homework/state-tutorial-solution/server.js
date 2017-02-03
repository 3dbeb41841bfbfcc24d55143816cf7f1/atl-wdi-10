var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(express.static('public'));

app.listen(3000, function(){
  console.log('listening on port 3000');
});
