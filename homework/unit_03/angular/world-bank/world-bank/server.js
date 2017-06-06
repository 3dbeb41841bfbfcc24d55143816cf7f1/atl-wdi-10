var express        = require('express'),
  bodyParser     = require('body-parser'),
  mongoose       = require('mongoose'),
  logger         = require('morgan'),
  port           = 3000 || process.env.PORT,
  app            = express();

mongoose.connect('mongodb://localhost/world_bank_loan_app');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/wbinfo', require('./controllers/wbinfoController'));

app.use(express.static('public'));

app.listen(port, function() {
    console.log('=======================');
    console.log('Running on port ' + port);
    console.log('=======================');
});
