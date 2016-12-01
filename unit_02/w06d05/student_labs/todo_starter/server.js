/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var data        = require('./data.js');
var bodyParser  = require('body-parser');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/

// log
app.use( logger('dev'));
// app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({
  extended: true
}));

/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

/* INDEX TODOS */
app.get('/todos', function(req,res) {
  res.render('todos/index', {
    todos: data.seededTodos
  });
});

/* CREATE TODO */
app.post('/todos', function(req, res){
  var newTodo = {
    description: req.body.description,
    urgent: req.body.urgent
  }

  data.seededTodos.push(newTodo);
  res.redirect('/todos');
});

/* NEW TODO */
app.get('/todos/new', function(req, res){
  res.render('todos/new');
});

/* SHOW TODO */
app.get('/todos/:id', function(req, res){
  var showTodo = data.seededTodos[req.params.id];
  res.render('todos/show', {data: showTodo});
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date())
});
