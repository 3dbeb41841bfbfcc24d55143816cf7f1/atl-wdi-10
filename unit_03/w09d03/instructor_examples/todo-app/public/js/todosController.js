(function(){
  angular.module('todoApp')
    .controller('TodosController', TodosController)
    .controller('MateyController', MateyController)
    .controller('ParentController', ParentController)
    .controller('ChildController', ChildController);

  function MateyController(){
    this.hello = 'oh hai!';
    this.divExists = false;
    this.hideDiv = false;
    this.showDiv = true;
    this.imgSrc = 'http://images6.fanpop.com/image/photos/37900000/-sweet-Jack-Sparrow-captain-jack-sparrow-37974096-400-274.jpg';
    this.makeAlert = function(){
      alert("Hello World");
    };
  }

  function ParentController(){
    this.property1 = "I'm the PARENT";
  }

  function ChildController(){
    this.property1 = "I'm the CHILD";
  }

  function TodosController(){
    this.all = [
      {task: "build an awesome to-do list", done: false},
      {task: "get super good at Angular", done: false},
      {task: "party on code", done: false},
      {task: "tackle the bonus challenges for this lesson", done: false},
      {task: "take a nap", done: false}
    ];

    var addTodo = function(){
      this.all.push({task: this.newTodo.task, done: false});
      this.newTodo.task = '';
    };

    this.add = addTodo;

    // this.newTodo = {task: '', done: false}

  }

})();
