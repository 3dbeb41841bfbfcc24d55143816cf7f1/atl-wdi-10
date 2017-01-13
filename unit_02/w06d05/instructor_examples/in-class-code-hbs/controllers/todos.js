var express = require('express');
var router = express.Router();
var data = require('../data.js');

/* INDEX TODOS */
router.get('/', function(req,res) {

  res.render('todos/index', {
    todos: data.seededTodos
  });
});

/* NEW TODO */
router.get('/new', function(req, res){
  res.render('todos/new');
});

/* SHOW TODO */
router.get('/:id', function(req,res) {
  var todo = data.seededTodos[req.params.id];

  res.render('todos/show', {
    todo: todo
  });
});

/* CREATE/POST TODO */
router.post('/', function(req, res){
  var newTodo = {
    description: req.body.description,
    urgent: req.body.urgent
  };

  data.seededTodos.push(newTodo);
  // res.send("Create a new todo is working!");
  res.redirect('/todos');
});


module.exports = router;
