var express        = require('express'),
    bodyParser     = require('body-parser'),
    mongoose       = require('mongoose'),
    port           = 3000 || process.env.PORT,
    app            = express();

mongoose.connect('mongodb://localhost/world_bank_loan_app');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

var wbinfoController = require('./controllers/wbinfoController');
// var seedController = require('./controllers/seedController');

app.use('/wbinfo', wbinfoController);
// app.use('/seed', seedController);



app.listen(port, function() {
    console.log('=======================');
    console.log('Running on port ' + port);
    console.log('=======================');
});
