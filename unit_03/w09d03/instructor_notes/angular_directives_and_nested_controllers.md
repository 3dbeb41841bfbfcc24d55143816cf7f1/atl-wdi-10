---
title: Angular Directives
type: Lesson
duration: "1:25"
creator:
    name: Micah Rich
    city: LA
adapted by:
    name: Marc Wright
    city: WDIR
competencies: Front-end frameworks
---

# Angular Directives and Nested Controllers

### Objectives

- Use ng-repeat to iterate over data
- Use ng-if & ng-hide/ng-show to hide & show elements
- Build forms
- Research other Angular directives that are included in Angular's library
- Understand and implement filters
- Understand nested controllers

### Preparation

- Set up a basic Angular app
- Create a basic controller with hardcoded data

## What Are Directives? Intro (5 mins)

Directives are markers on a DOM node – think custom attributes on HTML tags – that tell Angular to attach extra behaviors to a node or even transform the node and possibly its children. Angular comes with a bunch of different directives for different behaviors and gives you the ability to create your own.

There are a few you'll be using all the time that we're gonna walk through together, today. There are also a few you've already used – `ng-app` and `ng-controller`. You added them onto HTML tags to tell your Angular app what module we were using and what controller we wanted to ask for data from. Those are two examples of specific behaviors so let's see a few more.

## What are we building? Demo (5 mins)

Our end goal for this lesson is to build ourselves a simple little todo app. Shocking, it's true, but it'll be a great way to demonstrate both directives and interacting with controllers.

> Here is a deployed version of our completed app: http://secretary-jocelyn-77112.bitballoon.com/

We have a lot to get through – we'll have to list an array of to-dos, demonstrate some simple hiding & showing mechanisms, and bind some changing data via a form.

## Set up your app for the lesson
We'll build a simple Node/Express app for this lesson.

1. `mkdir todo-app` && `cd` into it

2. `npm init -y`
3. `npm install --save express`
4. `touch server.js`

```js
var express = require('express');
var app     = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(4000, function(){
    console.log("app listening on port 4000");
});
```
    

1. `mkdir public`
2. `mkdir public/js`
3. `touch public/js/app.js`

```js
angular.module('todoApp', []);
```
4. `touch public/js/todosController.js`

5. `touch public/index.html`

```html
<!DOCTYPE html>
<html ng-app="todoApp">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
    <script src="js/app.js"></script>
    <script src="js/todosController.js"></script>
  </head>
  <body>
    {{1 + 1}}
  </body>
</html>
```
> Note that we added the `ng-app` directive to the opening `<html>` tag.
    
##### &#x1F535; YOU DO

Set-up your Angular app. Run `nodemon server.js` to confirm that Angular is wired up correctly. You should see the number 2 in the browser.

![](https://i.imgur.com/rui014A.png)




## ng-repeat - Codealong (20 minutes)

Let's start filling in our `todosController.js` a little bit - add in some initial seed data:

```js
angular
  .module("todoApp")
  .controller("TodosController", TodosController);

function TodosController(){
  // this is our hardcoded seed data
  this.all = [
    {task: "build an awesome to-do list", done: false},
    {task: "get super good at Angular", done: false},
    {task: "party on code", done: false},
    {task: "tackle the bonus challenges for this lesson", done: false},
    {task: "take a nap", done: false}
  ];
}
```

This is great - we've got an array of simple objects. Granted, `.all` is whatever we want it to be, but calling it that makes it feel almost 'Mongoose-y', doesn't it? Totally your choice, though.

##### &#x1F535; YOU DO

Fill out your TodosController

<br>

Now, let's start filling out the view with this data. Head over to `index.html`:

```html
<body>
  <header>
    <h1>Angular Todo App</h1>
    <h3>You have {{}} to-dos to do!</h3>
  </header>
</body>
```

Now, how do we get the data our controller has access to? We'll use the `controller as` syntax. 

```html
<body ng-controller="TodosController as todos">
  <header>
    <h1>Angular Todo App</h1>
    <h3>You have {{todos.all.length}} to-dos to do!</h3>
  </header>
</body>
```

<img width="752" alt="screen shot 2015-07-31 at 3 45 04 am" src="https://cloud.githubusercontent.com/assets/25366/9005855/8e7bee44-3736-11e5-9276-d930778b197a.png">

Beautiful! But we need more. How do we actually list out our todos? We can use the `ng-repeat` directive.

```html
<ul id='todos'>
  <li ng-repeat="todo in todos.all">
    {{todo.task}}
  </li>
</ul>
```

<img width="752" alt="screen shot 2015-07-31 at 3 49 11 am" src="https://cloud.githubusercontent.com/assets/25366/9005933/1e6c49cc-3737-11e5-8f4d-3dd46a471c34.png">


Let's walk through that. First, hello `ng-repeat`! This is used for instantiating a template once per item from a collection. Rather than our old-fashioned `for` loop, Angular uses `ng-repeat` on the element we want to iterate over. Sort of like JavaScript's forEach, we say:

> "For each item in `todos.all`, call the one we're on `todo`."

The first argument (`todo`) in `ng-repeat="todo in todos.all"` is a declaration of how we want to refer to an item in a collection (`todos.all`), which is the second argument.  Then, inside that element, we have access to the item `{{todo}}`.

##### &#x1F535; YOU DO

Add the ng-repeat to your view

<br>

## Adding a Todo with a Form - Codealong (15 mins)

Now, let's see how _data binding_ works by adding to our list! We'll need a form.

```html
<form id='add-todo'>
  <input type="text" placeholder='I need to...'>
</form>
```

Super simple - this does nothing, yet, but we need it to add to our list when we hit enter and submit it. **On the controller side, how would we write a function that adds a new item to our array?**

Maybe something like:

```js
// this just adds a new object to our array, with defaults for now
var addTodo = function(){
  this.all.push({task: "something", done: false});
};

//this will add our new function as a property on our controller, so we can use it in the view
this.add = addTodo;
```

By including the `this.addTodo = addTodo;` line, we now can use that function in our view, when we want to. So check out this other useful form directive, `ng-submit`:


```html
<form id='add-todo' ng-submit="todos.add()">
   <input type="text" placeholder='I need to...'>
</form>
```

Now, it'll be adding fake todos, but I can't resist – try it! You'll see why Angular is so exciting. As soon as you press enter, **it auto-updates the list and the count** above, without any extra work. That's _data binding_, it's watching for changes to our data in the controller and updating the view _for_ us.

##### &#x1F535; YOU DO

Add the form to create a new todo

<br>

## ng-model Codealong (15 mins)

Obviously we don't want to only use dummy data and just create new "something" todos. How do we keep an eye on what's in the input and send _that_ to our `addTodo` function? You guessed it, another directive!

But first, let's think of it like this: we're going to be adding a new to-do to our list of existing to-dos and that to-do will be an object just like our others. Something like:

```js
{task: 'whatever we type', done: false}
```

So maybe let's make a `newTodo` object in our controller:

```js
this.newTodo = {task: '', done: false};
```

Now we know that in both the controller, and now, the view, if we access the `.newTodo`, we can share data. This is where another awesome directive comes into play – `ng-model`.

In `index.html`:

```html
<form id='add-todo' ng-submit="todos.add()">
  <input type="text" placeholder='I need to...' ng-model="todos.newTodo.task">
</form>
```

What does `ng-model` do? It binds the data not just from the controller to the view like we saw earlier but the other way around, too. This is possible, because all `ng-model`s are part of Angular's context and are added to the $watch list. As we type in our input, the actual object of `newTodo` changes, specifically the `task` attribute inside that object.

Don't believe me? Let's watch it happen.

```html
<form id='add-todo' ng-submit="todos.add()">
  <input type="text" placeholder='I need to...' ng-model="todos.newTodo.task">
</form>
<p>About to add to-do: <strong>{{todos.newTodo.task}}</strong></p>
```

You can see, it keeps the data synced, nearly in real time. As you are updating the model with each keystroke, the $watch list activates the $digest cycle because angular context has changed, and then, the $digest cycle performs a "dirty-check" updating any model in the UI that has been updated. That's _powerful._

> Inspect Element on the form and check out all the extra classes Angular is adding under the hood.

The last step is to update our `todos.add()` function to utilize this new knowledge. Just like in the view, how do you think we access that newTodo in our controller?

```js
var addTodo = function(){
  this.all.push({task: this.newTodo.task, done: false});
  // this last piece isn't necessary, but nicely resets the task to an empty string, which will clear the textbox because the view is bound to the data
  this.newTodo.task = '';
}
```

##### &#x1F535; YOU DO

1. Add ng-model to your view
2. Add a addTodo function to your controller

<br>

## ng-if Codealong (5 mins)

We're pretty much at capacity for now, but there's one other awesome useful directive you might want to try.

As an example, let's say we think the paragraph that says "About to add to-do: blah blah" only should show when `newTodo` isn't empty. Normally, we'd use some sort of if/else statement...

```html
<form id='add-todo' ng-submit="todos.add()">
  <input type="text" placeholder='I need to...' ng-model="todos.newTodo.task">
</form>
<p ng-if='todos.newTodo.task'>About to add todo: <strong>{{todos.newTodo.task}}</strong></p>
```

ngIf removes or recreates a portion of the DOM tree based on its value which is an expression. If it evaluates the expression (i.e. `todos.newTodo.task`) to be false, it will remove the element from the DOM, otherwise a clone of the element is reinserted into the DOM.

***note:***

Other ngDirectives, such as `ngHide`, can also be used to "hide" elements in the DOM, but the key difference is that `ngIf` actually removes the element where `ngHide` plays on the css property display.


##### &#x1F535; YOU DO

Add ng-if to your view

<br>

## Angular filters

Angular filters format a value from within the view. It's just for presentation purposes and does not alter data. Don't format data within the model/controller.

1. `{{todo.task | uppercase}}`
	- uppercases string
1. `{{todo.task | limitTo:8}}`
	- truncate a string
1. `{{product.price | currency }}`
	- format as money
1. `{{'1388123412323' | date:'MM/dd/yyyy @ h:mma'}}`
	- format a date
1. order by
	- sorting an array in the view!
	
```html
<li ng-repeat="todo in todos.all | orderBy:'-task'">
```

##### &#x1F535; YOU DO

Add a filter to your view

<br />

## More Directives Matey!
Let's look at more examples of Angular directives. We'll add a new `MateyController` for this section.

```js
// js/todosController.js - add a new controller to our 'todoApp`
angular.module('todoApp')
    .controller('TodosController', TodosController)
    .controller('MateyController', MateyController);

// controller function
function MateyController(){
  this.hello = 'Hey-o Matey!!';
  this.hideDiv = false;
  this.showDiv = true;
  this.imgSrc = 'http://images6.fanpop.com/image/photos/37900000/-sweet-Jack-Sparrow-captain-jack-sparrow-37974096-400-274.jpg';
  this.makeAlert = function(){
      alert("Hello World");
    };
}
```

And add some CSS and HTML to our `index.html`

```html
<!-- add to the head -->
<style>
.red {
  background-color: red;
}
</style>

<!-- add to the body below our todos code-->
<br>
  <div ng-controller="MateyController as matey">
    <div ng-bind="matey.hello"></div>
    <div ng-hide="matey.hideDiv">Hide Me</div>
    <div ng-show="matey.showDiv" ng-class="{ red:matey.showDiv }">Show Me</div>
    <img ng-src="{{matey.imgSrc}}" />
    <button type="button" ng-click="matey.makeAlert()">Click Me</button>
  </div>
<br>
```

1. ng-bind
	- binds the contents of the element to whatever is specified
1. {{}}
	- same as ng-bind, but not an attribute
1. ng-click
    - same as the onclick attribute 
1. ng-class
	- binds the class of an element to the result of an "expression"
		- an expression is just some code that gets evaluated
	       - `matey.showDiv`
		- if `matey.showDiv` evaluates to true, the class of the element will be 'red'
	       - `ng-class="{ red:matey.showDiv }`
1. ng-repeat
    - we saw this earlier
1. ng-if
	 - we saw this earlier
1. ng-show/hide
	- like ng-if, but it hides it (`display: none`), not remove it from the DOM
1. ng-src
	- `<img ng-src="{{ctrl.imgsrc}}" />`
	- sets the src of an img to the result of an expression


<br>

## Angular Nested Controllers

```js
// js/todosController.js

angular.module('todoApp')
    .controller('TodosController', TodosController)
    .controller('MateyController', MateyController)
    .controller('ParentController', ParentController)
    .controller('ChildController', ChildController);

function ParentController(){
  this.property1 = 'fun';
}

function ChildController(){
  this.property1 = 'awesome';
}
```
Add some more code to your `index.html` file.

```html
<div ng-controller="ParentController as parent">
  <span>{{child.property1}}:{{parent.property1}}</span>
  <div ng-controller="ChildController as child">
    <span>{{child.property1}}:{{parent.property1}}</span>
  </div>
</div>
```

- Note the way we've structured our controllers. The child controller can access parent properties and methods since it's nested, but a parent cannot access child properties. There _are_ ways to implement this, but it's outside of the scope of this lesson.
- You can try this with our Todos/Matey controllers also.
- We'll use this nesting technique to maintain our `currentUser` object. Controllers re-instantiate each time yuo refresh the page.
	
<br>

##### &#x1F535; YOU DO

Add nested controllers to your app

<br>

## Conclusion (5 mins)

Now, in the next lab, you're going to practice this and hopefully, learn a few extra included directives along the way.

- How do we add a function to a controller?
- How do we iterate over an array of items?
- How do we submit a form?



