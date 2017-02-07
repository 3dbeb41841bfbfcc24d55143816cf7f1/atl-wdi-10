var express    = require('express');
var logger     = require('morgan');
var bodyParser = require('body-parser');
var app        = express();

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/budget-tracker');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//controller for Credits
var creditsController = require('./controllers/credits.js');
app.use('/credits', creditsController);

//controller for Expenses
var expenseController = require('./controllers/expenses.js');
app.use('/expenses', expenseController);

app.listen(3000);
