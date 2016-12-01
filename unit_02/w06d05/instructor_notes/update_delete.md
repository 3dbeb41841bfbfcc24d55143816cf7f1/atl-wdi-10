---
title: Express - Update and Delete
type: lesson
duration: '2:00'
creator:
    name: Matt Huntington, adapted by Colin Hart
    class: WDIr-R2D2
---

# Express - Update and Delete

## Lesson Objectives
1. Create a Delete Route
2. Make the index page send a DELETE request
3. Create an edit route
4. Create a link to the edit route
5. Create an update route
6. Make the edit page send a PUT request

## Delete

### Recap

CRUD

REST

MVC

Acronyms galore. But let's quickly revisit what these are and how we've applied them thus far. 

###

### Create a Delete Route

Inside our server.js file, add a DELETE route:

```javascript
app.delete('/todos/:id', function(req, res){
	data.seededTodos.splice(req.params.id, 1); //remove the item from the array
	res.redirect('/todos');  //redirect back to index route
});
```

### Make the index page send a DELETE request

In our `server.js` file, make sure your index route looks something like this:

```javascript
app.get('/todos', function(req, res){
	res.render( 'todos/index', {
      todos: data.seededTodos //pass in the entire todos array
 });
});
```

Inside our `index.hbs` file, add a form with just a delete button.

```html
<h1> You have {{ todos.length }} Todos </h1>
<ul>
  {{#each todos}}
    <li>Description: {{description}}</li>
    <li>Urgent: {{urgent}}</li>
    <br>
    <form>
      <input type="submit" value="DELETE"/>
    </form>
  {{/each}}
</ul>

```

When we click "DELETE" on our index page (index.hbs), the form needs to make a DELETE request to our DELETE route.

Click the button and watch your server logs in the terminal. Where did the request go?

The problem is that forms can't make DELETE requests.  Only POST and GET.  We can , though.  First we need to install an npm package called `method-override`

```
npm install method-override --save
```

Now, in our server.js file, add:

```javascript
//include the method-override package
var methodOverride = require('method-override');
//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
```

Now go back and set up our delete form to send a DELETE request to the appropriate route

```html
<form action="/todos/{{@index}}?_method=DELETE" method="POST">
```

### [SIDENOTE] Why can't we send PUT and DELETE from html?

Why a POST request with method override?

Several reasons:

1. When HTML and HTTP were first speced out there wasn't a real user story around Updating and Deleting  or even Posting content. Updates and deletions were made by the authors of the content not by external users. Initially, HTTP was simply GET.

2. As the internet developed into something closer to what we understand the internet to be now now, HTTP added put and delete in 1997 (HTTP/1.1). HTML wasn't updated to handle them so developers created work arounds to allow web users to make PUT and DELETE requests using POST as a tunnel.

3. These workarounds are now so ubiquitous (often included by default in frameworks) that providing a solution in HTML has become redundant.

You can read the conversation about adding PUT and DELETE form functionality to HTML5 here https://www.w3.org/Bugs/Public/show_bug.cgi?id=10671

4. A more technical reason does exist, if it gives you any solace.
  - A put request wouldn't look any different than a post, the data still needs to be sent in the body vs. the header thus the server would still need some kind of flag to differentiate between a put and post cause otherwise the requests look the same and have a similar result.
  - A delete request, doesn't have any data or content in the body. Forms add data to the body of an http request, so making an HTML form Delete functionality also doesn't really make sense

## Update

### Create an edit route

In our `server.js`, create a GET route which will just display an edit form for a single todo item.

```javascript
app.get('/todos/:id/edit', function(req, res){
  res.render('/todos/edit', {
    todo: {
      description: data.seededTodos[req.params.id],
      urgent: data.seededTodos[req.params.id].urgent,
      id: req.params.id
    }
  });

});
```

Now create a very basic form for editing in `views/edit.hbs`

```html

<h1>Edit</h1>
 <form>
  <input type="text" name="description" value="{{todo.description}}" />
  <input type="text" name="urgent" value="{{todo.urgent}}" />
  <input type="submit" value="Submit Changes"/>
</form>


```

### Create a link to the edit route

In our `server.js` file, make sure your index route looks something like this:

```javascript
app.get('/todos', function(req, res){
	res.render('todos/index.hbs',
		{ todos: data.seededTodos } //pass in the entire todos array
	);
});
```

Inside our `index.hbs` file, add a link to our edit route which passes in the index of that item in the url

```html
<h1> You have {{ todos.length }} Todos </h1>
<ul>
  {{#each todos}}
    <li>Description: {{description}}</li>
    <li>Urgent: {{urgent}}</li>
    <br>
    <form action="/todos/{{@index}}?_method=PUT" method="POST">
      <input type="submit" value="EDIT"/>
    </form>
    <div><a href="/todos/{{@index}}/edit">Edit</a></div>
    <hr>
  {{/each}}
</ul>

```

### Create an update route

In order to UPDATE, we use the http verb PUT.

Inside server.js add the following:

```javascript
app.put('/todos/:id', function(req, res){ //:id is the index of our todos array that we want to change
	todos[req.params.id] = req.body.description; //in our todo array, find the index that is specified in the url (:id).  Set that index to the value of the "description" input in our edit form
	res.redirect('/todos'); //redirect to the index page
});
```

### Make the edit page send a PUT request

Check the server logs, what happens when we hit submit changes?

When we click "Submit Changes" on our edit page (edit.hbs), the form needs to make a PUT request to our update route

```html
<html>
	<body>
		<h1>Edit</h1>
		<!-- add action -->
		<form action="/todos/{{todo.id}}">
			<input type="text" name="description" value="{{todo.description}}" />
			<input type="submit" value="Submit Changes"/>
		</form>
	</body>
</html>
```

The problem is that forms can't make PUT requests.  Only POST and GET.  So we need to use method-override again


Now go back and set up our edit form to send a PUT request

```html
<form action="/todos/{{todo.id}}?_method=PUT" method="POST">
```

## All code

index.js
```javascript
/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var methodOverride = require('method-override');
var data        = require('./data.js');
var bodyParser = require('body-parser');
  /* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;

/* set up the application params*/

/*  Middleware */
app.use( logger('dev'));
app.use(express.static(__dirname + '/public'))
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));

/*Views*/
app.set('view engine', 'hbs');

 /* HOME */
 app.get('/', function(req,res) {
   res.send('This is our Home Page');
 });

  /* INDEX TODOS */
 app.get('/todos', function(req,res) {
  res.render('todos/index', {
    todos: data.seededTodos
  });
 });

 /* NEW TODO */
 app.get('/todos/new', function(req, res){
   res.render('todos/new');
 });

 /* GET UPDATE FORM TO EDIT TODO */
 app.get('/todos/:id/edit', function(req, res) {
   res.render('todos/edit', {
     todo: {
       description: data.seededTodos[req.params.id].description,
       urgent: data.seededTodos[req.params.id].urgent,
       id: req.params.id
     }
   });
 });

 /* UPDATE TODO */
 app.put('/todos/:id', function(req, res) {
   console.log(req.body)
   data.seededTodos[req.params.id].description = req.body.description
   data.seededTodos[req.params.id].urgent = req.body.urgent
   res.redirect('/todos');
 });

 /* DELETE TODO */
 app.delete('/todos/:id', function(req, res) {
   console.log('hey')
   data.seededTodos.splice(req.params.id, 1)

   res.redirect('/todos');
 });

  // Start server
 app.listen(port, function() {
   console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date())
 });
```

package.json
```json
{
  "name": "express_update_delete",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.15.2",
    "express": "^4.14.0",
    "hbs": "^4.0.1",
    "method-override": "^2.3.6",
    "morgan": "^1.7.0"
  }
}
```

edit.hbs
```html

<h1>Edit</h1>
 <form action="/todos/{{todo.id}}?_method=PUT" method="POST">
  <input type="text" name="description" value="{{todo.description}}" />
  <input type="text" name="urgent" value="{{todo.urgent}}" />
  <input type="submit" value="Submit Changes"/>
</form>

```

index.hbs
```html
<h1> You have {{ todos.length }} Todos </h1>
<ul>
  {{#each todos}}
    <li>Description: {{description}}</li>
    <li>Urgent: {{urgent}}</li>
    <br>
    <form action="/todos/{{@index}}?_method=DELETE" method="POST">
      <input type="submit" value="DELETE"/>
    </form>
    <div><a href="/todos/{{@index}}/edit">Edit</a></div>
    <hr>
  {{/each}}
</ul>

```
