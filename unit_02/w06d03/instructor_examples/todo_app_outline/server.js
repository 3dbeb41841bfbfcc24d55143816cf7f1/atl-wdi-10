var express = require('express');
var hbs = require('hbs');
var morgan = require('morgan');
var todosController = require('./controllers/todos.js')

var app = express();

app.set('view engine', 'hbs');

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// ROUTERS
app.use('/todos', todosController);
// IN ENGLISH: any route that comes in at /todos use the routes defined
// in the todosController loaded on line 4 of server.js
// also prefix all of the routes in that file with /todos


var port = 3000;

app.listen(port, function() {
  console.log(`listening on ${port}`)
});
