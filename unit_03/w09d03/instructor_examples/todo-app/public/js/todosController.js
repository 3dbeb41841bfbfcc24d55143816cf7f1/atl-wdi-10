angular.module('todoApp')
  .controller('TodosController', TodosController)
  .controller('MateyController', MateyController)
  .controller('ParentController', ParentController)
  .controller('ChildController', ChildController);

function ParentController(){
  this.property1 = "fun";
}

function ChildController(){
  this.property1 = 'awesome';
}

function MateyController(){
  this.hello = 'Hey-o Matey!!';
  this.hideDiv = true;
  this.showDiv = true;
  this.imgSrc = 'http://images6.fanpop.com/image/photos/37900000/-sweet-Jack-Sparrow-captain-jack-sparrow-37974096-400-274.jpg';
  this.makeAlert = function(){
      alert("Hello World");
    };
}

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
