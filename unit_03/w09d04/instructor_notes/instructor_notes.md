---
title: CRUD with Angular and Express
type: Lesson
duration: "4:00"
creator:
    name: Colin Hart
    city: LA
competencies: Front-end frameworks
---

# Angular Directives

### Objectives

  - Build full CRUD with Ajax using $http
  - Keep track of view states as the user interacts with the app
  - Use ng-show/ng-hide to construct a cohesive flow for the user
  - Review `var self = this` syntax as a work around for closures.
  - Keep track of and update state of the app as the user CRUD's

### Preparation

- Set up a basic Angular app
- Create a basic NgController with hardcoded data
- Use directives like ng-show, ng-if and ng-repeat
- Build and interact with an Express API built on MongoDB

# Intro
### Client Side Rendering versus Server Side Rendering

Let's walk through what happens in server side rendering.

Say I'm on the home page of an app, and I click a button to create a new resource.
What happens?

*Server Side Rendering (Unit 2)*

1. The button will make a get request for the html page that has the form to create the resource
2. The server will send that html page back to the browser
3. The browser starts at the top of the html file and starts building the DOM
4. _IF_ the html page links css files or uses a script tag to include js files the browser will stop building the DOM and make another GET request for the css file(s) and js file(s). One request for each file.
5. The page loads, the user types some information into the form and hits submit making a POST request to the server.
6. The server saves the data to the database and then redirects the user to another route, which will send another html page back to the browser.
7. The browser *_repeats_* steps 3 - 4.

This process happens on every single request. We're constantly reloading and repainting the DOM.
It's slow; the browser has to refresh every time we want to see different content.

Client side rendering solves this.


### What is Ajax?

Ajax is a way of making http requests using JS in the browser to receive pure data.

Because Ajax receives json instead of a view we can update a piece of the DOM instead of reloading the entire page.

*Client Side Rendering (Unit 3)*

Say I'm on the home page of an app, and I click a button to create a new resource.
What happens?

1. Angular/jQuery/Vanilla JS runs to build or show the form without the page reloading
2. User inputs data and hits submit
3. Ajax runs taking the data from the form and posting it to the server.
4. The server responds with json, *_no_* html.
5. Using promises or callbacks, the Ajax function waits for the servers response
6. When the Ajax function receives a response, it updates the variable holding that data with new data
7. Angular rebuilds the piece of the DOM affected, not the whole page.



# Step One (25 min)

Familiarize yourself with the starter code. Don't just read, but take notes, make comments.

- npm install
- start mongod
- start nodemon

Use postman to test the routes.

Hit the post route with description and done to create some sample todo objects for the future.

Questions to answer:

- How is MVC structured on the back-end?
- What modules are installed?
- What routes exist?
- What is the implicit route of the controller?
- What is the name of the database?
- What schemas/models exist?
- What are the attributes of the Schema?


# Step Two

You might have noticed that the `public` directory didn't contain any content. That's what we'll need to structure first.

1. touch `public/index.html`
2. mkdir `public/js`
3. touch `public/js/app.js`
4. Verify that the Angular cdn is in `index.html`

  ```
  https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js
  ```

5. Verify that `js/app.js` is loaded `index.html` _*below*_ the Angular cdn.

6. Instantiate your angular app using `ng-app` on one of the parent html tags.

  ```
  <body ng-app="todo"
  ```


# Step 3 GET#todos


We're going to do this first part together.

In app.js define our todo app module and MainCtrl controller

```js
(function(){
  angular.module('todo', []).controller('MainCtrl', function() {


  });
})();
```

And we're going to set up our controller and todos view using ng-repeat

```html
<div ng-controller="MainCtrl as main">

<div class="todos">
  <div class="todo" ng-repeat="todo in main.todos">
    <div>
      <p>Todo: {{todo.description}}</p>
      <p>Done?: {{todo.done}}</p>
      <p>Created at: {{todo.createdAt | date:'short' }}</p>
    </div>
    <hr>
  </div>
</div>
```
Date filter documentation: https://docs.angularjs.org/api/ng/filter/date


Let's just hardcode some data first in our controller in app.js

```js
this.todos = [
  {description: "learn angular", done: false, createdAt: new Date()},
  {description: "eat breakfast", done: true, createdAt: new Date()},
]
```

If we refresh, we should see those todos loaded up. This is what you were doing yesterday with Marc—displaying hard-coded data.

Let's quickly break down the angular syntax here:

What problem is Angular solving?

All of this code, while a little funky looking is trying to solve the same problems you were solving in Unit 1. DOM manipulation.

`MainCtrl as main` is essentially `var main = new MainCtrl()`

`ng-repeat="todo in main.todos"` is essentially:

Vanilla
```js
var todosContainer = document.querySelector('.todos');

for (var i=0;i<main.todos.length; i++) {
  var div = document.createElement('div');
  var p1 = document.createElement('p');
  var p2 = document.createElement('p');
  var p3 = document.createElement('p');
  var p1 = main.todos[i].description;
  var p2 = main.todos[i].done;
  var p3 = main.todos[i].createdAt;
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  todos.appendChild(div);
}
```

Handlebars and Server side rendering.

```html
<div class="todos">
  {{#each main.todos}}
  <div class="todo">
    <div>
      <p>Todo: {{description}}</p>
      <p>Done?: {{done}}</p>
      <p>Created at: {{createdAt}}</p>
    </div>
    <hr>
  </div>
  {{/each}}
</div>
```

We didn't learn `ejs` but it's a different server-side view engine like handlebars.

ejs
```html
<div class="todos">
  <% main.todos.forEach(function(el) { %>
    <div class="todo">
      <div>
        <p>Todo: <%= el.description %></p>
        <p>Done?: <%= el.done %></p>
        <p>Created at: <%= el.createdAt %></p>
      </div>
      <hr>
    </div>
  <% }) %>
</div>
```

Same thing. We're just trying to dynamically build the Dom based on some data.

But the point of today's content isn't hardcoded data; it's about dynamic.

Comment out your hard coded todos. And write this:

1. Add `$http` to your callback.
2. Define a variable self which holds the value of this
3. Define your ajax request with $http and promises

```
angular.module('todo', []).controller('MainCtrl', function($http) {

var self = this;

$http.get('/todos')  // make a GET request to /users
  .then(function(response) { // call this function when a response is received
    self.todos = response.data.todos; // save the returned json to self.todos
  })
  .catch(function(err) { // catch the error if one happens
    console.log(err)
  });
```


# Step 4 POST#todos

```html
<div>
    <button ng-click="main.startCreating()">Add Todo!</button>
</div>
```

`startCreating()` is going to toggle a boolean to show our form

```html
<div class="form">
  <form>
    <div>
      <label for="description">Description</label>
      <input type="text">
    </div>
    <div>
      <label for="done">done?</label>
      <input type="checkbox" value="true" checked>
    </div>
    <button type="submit">Create!</button>
  </form>
</div>
```



```js
this.isCreating = false; // thing to toggle state tracker

var startCreating = function() { // toggle to show the form or not
  this.isCreating = true
}

// Logic
var addTodo = function(newTodo) { // code that gets run on submit to add todos
  console.log(newTodo)
}

// PUBLIC METHODS

this.startCreating = startCreating;
this.addTodo = addTodo;
```

We want the form only to show when isCreating is true. So we want the boolean to toggle when we click the `Add Todo!` button.

When we click `Add Todo!` we want the form data to be sent to our controller so add `ng-submit="main.addTodo(newTodo)` to the form.

The last piece we need is to add ng-model to our input fields.

review: What does ng-model do?

ngModel directive binds an input, select, textarea (or custom form control) to a property on the scope using NgModelController `MainCtrl`

It just creates a property on `this`.

Mind-blown


```html
<div class="form">
  <form ng-show="main.isCreating" ng-submit="main.addTodo(newTodo)">
    <div>
      <label for="description">Description</label>
      <input type="text" ng-model="newTodo.description">
    </div>
    <div>
      <label for="done">done?</label>
      <input type="checkbox" ng-model="newTodo.done" value="true" checked>
    </div>
    <button type="submit">Create!</button>
  </form>
</div>
```

### SIDENOTE on Forms and ng-submit
`ng-submit` on the form instead of `ng-click` on a button

>Enables binding angular expressions to on submit events.

>Additionally it prevents the default action (which for form means sending the request to the server and reloading the current page), but only if the form does not contain action, data-action, or x-action attributes.

- from https://docs.angularjs.org/api/ng/directive/ngSubmit

You could use `ng-click` on a button in the form, but you'd have to prevent the default event manually using the `$event`.

```html
<div ng-controller="MainCtrl as main">
  <form  action="#">
    <input type="text" name="name" value="">
    <button type="button" ng-click="main.submitForm($event)">submit</button>
  </form>
</div>
```
```js
(function(){
  angular.module('todo', []).controller('MainCtrl', function()  {

  function submitForm(event) {
    event.preventDefault();
    // [...] rest of the code.
  };

  this.submitForm = submitForm;
})})();
```


If we click create we should see in our chrome console, the newTodo object that we just created!

Finally, we can polish up our UI; It's a little confusing that we have two buttons that have the same wording. Let's hide the first one once it's clicked.

Can you figure out how to use `main.isCreating` and `ng-hide` to create this behavior?

```html
<div class="nav" ng-hide="main.isCreating">
    <button ng-click="main.startCreating()">Add todo</button>
</div>
```

# Step 4.5 $http

So we have the form, and the object created client side, but we need to implement $http in our addTodo function to post to our server.


```js
var addTodo = function(newTodo) {
  $http.post('/todos', newTodo)
    .then(function(response) {
      self.todos = response.data.todos;

      newTodo.description = ''; // reset the form so the user can add another todo
    })
    .catch((err) => {
      console.log(err)
    });
}

// PUBLIC METHODS
this.startCreating = startCreating;
this.addTodo = addTodo;
```

```js
var addTodo = function(newTodo) {
  $http.post('/todos', newTodo)
    .then(function(response) {
      self.todos = response.data.todos;

      newTodo.description = '';
    })
    .catch((err) => {
      console.log(err);
    });
}
```

# Step 5 Delete

Delete

Let's add a delete button to our html

```html
<div ng-repeat="todo in main.todos">
  <div>
    <p>Todo: {{todo.description}}</p>
    <p>Done?: {{todo.done}}</p>
    <p>Created at: {{todo.createdAt | date:'short' }}</p>
  </div>
  <button ng-click="main.deleteTodo()">&#10006</button>
  <hr>
</div>
```

```js
var deleteTodo = function() {
  console.log('deleting')
}
```

What is the key piece of information about our todo database objects that we need to delete it from our database?

HINT: look at the route in our todos controller.

Update the ng-click function on our delete button to have the `_id`

```html
<button ng-click="main.deleteTodo(todo._id)">&#10006</button>
```

```js
var deleteTodo = function(id) {
  console.log(id);
}
```

Finally, we're going to add the `$http.delete` function

```js
var deleteTodo = function(id) {
  $http.delete(`/todos/${id}`)
    .then(function(response) {
      console.log(response);
      self.todos = response.data.todos;
    })
}
```

Take a minute to walk through what the delete route in the controller file does.

Why do we need this line?

```js
self.todos = response.data.todos
```

# Step 6 Update!

Last but not least. Update.

Let's add the html, since we know we're going to need a form, and we'll add an `ng-submit` on the form.

```html
<div class="form">
  <form action="#" ng-submit="main.editTodo()">
    <div>
      <label for="description">Description</label>
      <input type="text">
    </div>
    <div>
      <label for="done">done?</label>
      <input type="checkbox" value="true" checked>
    </div>
    <button type="submit">Edit Todo!</button>
  </form>
</div>
```

What are the behaviors/pieces of data we know we need for our edit feature to work?

1. We know we need the object we edited
2. We need our ajax request making a put request to the server.
3. Per our create form we need to keep track of state, is the user editing or creating and are we showing/hiding the right buttons and forms.
4. When we make the put request we need it to return all of the todos so, we can update the data on the page.

Create three functions in app.js.

1. A `startEditing` function that models the behavior of start creating.
  - it should set isCreating to false
  - and it should set this.isEditing to true
  - you'll also need to create this.isEditing in your code.

2. Add an editing button next to the delete button. Set the ng-click to call `main.startEditing`  

3. Create an editTodo function that just logs `'i am working'` to the console.

4. Test by clicking the edit button, it should show your edit form and hide the creating form. If you click submit on the editing form it should console.log 'i am working'

```js
this.editedTodo = null;
// ...
var startEditing = function() {
  this.isCreating = false;
  this.isEditing = true;
}

var setTodoToEdit = function(todo) {
  this.editedTodo = todo
}
```

So we've satisfied some of the behavior that we defined above. The piece we want to build out next is how to pre-populate the form with the data of the todo we want to edit.

Define a function in app.js called setTodoToEdit and define a property on `this` called editedTodo and set it to null.


```js
this.editedTodo = null;

var setTodoToEdit = function(todo) {
  this.editedTodo = todo
}
```

Add this code to your edit button

```js
<button ng-click="main.setTodoToEdit(todo); main.startEditing()">Edit</button>
```

So we're going to pass the whole `todo` object to the `setTodoToEdit` function.

We now need to tie the todo object we're editing that we've stored in the controller and bind it to the edit form. We're going to use ng-model to do that.

```html
<div class="form">
  <form ng-show="main.isEditing" ng-submit="main.editTodo(main.editedTodo") action="#">
    <div>
      <label for="description">Description</label>
      <input type="text" ng-model="main.editedTodo.description">
    </div>
    <div>
      <label for="done">done?</label>
      <input type="checkbox" ng-model="main.editedTodo.done" value="true" checked>
    </div>
    <button type="submit">Edit Todo!</button>
  </form>
</div>
```


```js
var editTodo = function(todo) {
  $http.put(`/todos/${todo._id}`, todo)
    .then(function(response){
      console.log(response)
      self.todos = response.data.todos
    })

  this.isEditing = false;
}
```


There we have it. Full CRUD with angular and $http


Bonus:

https://docs.angularjs.org/api/ng/input/input%5Bcheckbox%5D
