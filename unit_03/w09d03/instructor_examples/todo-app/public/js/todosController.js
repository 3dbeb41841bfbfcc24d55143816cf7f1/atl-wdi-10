angular.module('todoApp')
  .controller('TodosController', TodosController);


function TodosController(){
  this.all = [
    {task: "build an awesome to-do list", done: false},
    {task: "get super good at Angular", done: false},
    {task: "party on code", done: false},
    {task: "tackle the bonus challenges for this lesson", done: false},
    {task: "take a nap", done: false}
  ];

  this.newTodo = {task: '', done: false};

  var addTodo = function(){
    this.all.push({task: this.newTodo.task, done: false});
    this.newTodo.task = '';
  };

  this.add = addTodo;

}
