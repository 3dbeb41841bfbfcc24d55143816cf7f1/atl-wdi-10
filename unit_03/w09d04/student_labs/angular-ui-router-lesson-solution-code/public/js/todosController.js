(function(){
  angular
	.module("todoApp")
	.controller("TodosController", TodosController);

	function TodosController(){

		var self = this;

		this.todoList = [
			{task: "build an awesome todo app", done: false},
			{task: "get super good at Angular", done: false},
			{task: "party on code", done: false},
			{task: "tackle the bonus challenges for this lesson", done: false},
			{task: "take a nap", done: false}
		];

		self.addTodo = addTodo;
		self.deleteTodo = deleteTodo;
		self.completedTodos = completedTodos;
		self.remainingTodos = remainingTodos;

		//function that allows us to add new todos to our todoList
		function addTodo(){
			self.todoList.push({task: self.text, done: false});
			self.text = null;
		}

		//function that allows us to delete specific todos from our todoList
		function deleteTodo($index){
			self.todoList.splice($index, 1);
		}

		//returns a count of the tasks that have been marked as done
		function completedTodos(){
			return self.todoList.filter(function(x){ return x.done == true; })
		}

		//returns a count of the tasks that have not been marked as done
		function remainingTodos(){
			return self.todoList.filter(function(x){ return x.done == false; })
		}

	}

})()
