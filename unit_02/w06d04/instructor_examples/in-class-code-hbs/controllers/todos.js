var express = require('express');
var router = express.Router();
var data = require('../data.js');

/* INDEX TODOS */
router.get('/', function(req,res) {

  res.render('todos/index', {
    todos: data.seededTodos
  });
});

/* SHOW TODO */
router.get('/:id', function(req,res) {
  var todo = data.seededTodos[req.params.id];

  res.render('todos/show', {
    todo: todo
  });
});

module.exports = router;
