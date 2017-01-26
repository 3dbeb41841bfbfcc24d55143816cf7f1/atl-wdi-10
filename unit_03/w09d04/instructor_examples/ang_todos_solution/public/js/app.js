(function(){
  angular.module('todo', []).controller('MainCtrl', function($http)  {
      var self = this;

      $http.get('/todos')
        .then(function(response) {
          self.todos = response.data.todos;
        })
        .catch((err) => {
          console.log(err);
        });

      // keep track of APP STATE
      // ==============================

      this.isCreating = false;
      this.isEditing = false;
      this.editedTodo = null;

      function startCreating() {
        this.isCreating = true;
        this.isEditing = false;
      }

      function startEditing() {
        this.isCreating = false;
        this.isEditing = true;
      }

       function setTodoToEdit(todo) {
        this.editedTodo = todo;
      }

      function reset(todo) {
        this.isCreating = false;
        this.isEditing = false;
      }

      // CRUD LOGIC
      // ==============================
      function addTodo(newTodo) {

        $http.post('/todos', newTodo)
          .then(function(response) {
            self.todos = response.data.todos;

            newTodo.description = '';
          })
          .catch((err) => {
            console.log(err);
          });
      }

      function deleteTodo(id) {
        $http.delete(`/todos/${id}`)
          .then(function(response) {
            console.log(response);
            self.todos = response.data.todos;
          })
      }

      function editTodo(todo) {
        $http.put(`/todos/${todo._id}`, todo)
          .then(function(response){
            console.log(response);
            self.todos = response.data.todos;
          })

        this.isEditing = false;
      }

      // PUBLIC METHODS
      this.startCreating = startCreating;
      this.addTodo = addTodo;
      this.deleteTodo = deleteTodo;
      this.startEditing = startEditing;
      this.setTodoToEdit = setTodoToEdit;
      this.editTodo = editTodo;
      this.reset = reset;
})})();
