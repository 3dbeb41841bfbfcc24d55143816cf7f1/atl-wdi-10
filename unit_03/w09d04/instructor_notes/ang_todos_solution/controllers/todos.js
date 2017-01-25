var express = require('express');
var router = express.Router();

var Todo = require('../models/todo.js');


router.get('/', function(req, res){
  var query = Todo.find({});
  query.then(function(todos) {
    console.log(todos)
    res.json({todos: todos})

  })
  .catch( function(err) {
    res.json(500, `ERROR: ${err}`)
  })
});

router.get('/:todoId', function(req, res){
  Todo.findOne({_id: req.params.todoId})
    .then(function(todo){
      res.json({todo: todo});
    })
    .catch(function(err){
      res.json(500, `ERROR: ${err}`)
    });
});


router.post('/', function(req, res){
  var newToDo;

  Todo.create({
    description: req.body.description,
    done: req.body.done || false,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(function(todo){
    console.log('JUST CREATED TODO OBJECT>>>>', todo)
    newTodo = todo;
  })
  .then(function(){
    return Todo.find({}).exec();
  })
  .then(function(todos) {
    console.log('ALL TODOS>>>>', todos)

    res.json({todos: todos, todo: newTodo});
  })
  .catch(function(err) {
    res.json(400, err)
  })
});

router.put('/:todoId', function(req, res) {
  var editedTodo;

  Todo.update({_id: req.params.todoId}, req.body)
    .then(function() {
      return Todo.find({}).exec();
    })
    .then(function(todos) {
      console.log('ALL TODOS>>>>', todos)

      res.json({message: "succesfully updated", todos: todos})
    })
    .catch(function(err) {
      res.json(400, err)
    });
})


router.delete('/:todoId', function(req, res){
  var todos;

  var query = Todo.remove({_id: req.params.todoId})
    query.then(function() {
      return Todo.find({}).exec();
    })
    .then(function(todos) {
      console.log('ALL TODOS>>>>', todos)

      res.json({message: "succesfully deleted", todos: todos})
    })
    .catch(function(err) {
      res.json(400, err)
    });
});

module.exports = router;
