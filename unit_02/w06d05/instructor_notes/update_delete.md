---
title: Express - Update and Delete
type: lesson
duration: '2:00'
creator:
    name: Matt Huntington, adapted by Maren Woodruff
    class: ATL-WDI-9
---

# Express - Update and Delete

## Lesson Objectives
1. Create a Delete Route
2. Make the index page send a DELETE request
3. Create an edit route
4. Create a link to the edit route
5. Create an update route
6. Make the edit page send a PUT request

## Recap

CRUD

REST

MVC

Acronyms galore. But let's quickly revisit what these are, and how we have applied them thus far.

### Exercise: Steps to Create a Node App

### Naming Conventions

1. controller files (plural)

2. routes (plural or singular depending)

3. views dir (plural)

4. view files (index, new, show, edit)

### Create a Delete Route

Inside of our `controllers/todos_controller.js` file, add a DELETE route:

```javascript
router.delete('/:id', function(req, res) {
	data.seededTodos.splice(req.params.id, 1); // remove the item from the array

	res.redirect('/todos');  // redirect back to the index route
});
```

### Make the index page send a DELETE request

In our `controllers/todos_controller.js` file, make sure that your index route looks something like this:

```javascript
router.get('/', function(req,res) {

  res.render('todos/index', {
    todos: data.seededTodos
  });
});

```

Inside of our `index.hbs` file, add a form with just a delete button.

```html
<h1> Todos </h1>
<ul>
  {{#each todos}}
    <li>Description: {{description}}</li>
    <li>Urgent: {{urgent}}</li>
    <br>
    <form action="/todos/{{@index}}">
      <input type="submit" value="DELETE"/>
    </form>
  {{/each}}
</ul>

```

When we click "DELETE" on our index page (index.hbs), the form needs to make a DELETE request to our DELETE route.

Click the button and watch your server logs in the terminal. Where did the request go?

The problem is that forms can't make DELETE requests.  Only POST and GET requests.  There is a way around this fact.  First, we need to install an npm package called `method-override`.

```
npm install method-override --save
```

Now, in our `server.js` file, add:

```javascript
// include the method-override package
var methodOverride = require('method-override');
//...
// after the app has been defined
// use methodOverride.  We will be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
```

Now, go back and set up the delete form to send a DELETE request to the appropriate route

```html
<form action="/todos/{{@index}}?_method=DELETE" method="POST">
```

### Why do we use a POST request with method override?

Several reasons:

1. When HTML and HTTP were first specked out there wasn't a real user story around Updating and Deleting, or even Posting content. Updates and deletions were made by the authors of the content, not by external users. Initially, HTTP was simply a GET method.

2. As the internet developed into something closer to what we understand it to be now now, HTTP added PUT and DELETE methods in 1997 (HTTP/1.1). HTML was not updated to handle them, so developers created work arounds to allow web users to still make PUT and DELETE requests using POST as the thoroughfare.

3. These workarounds are now so ubiquitous (often included by default in frameworks) that providing a solution in HTML has become redundant.

You can read the conversation about adding PUT and DELETE form functionality to HTML5 here https://www.w3.org/Bugs/Public/show_bug.cgi?id=10671

4. A more technical reason does exist, if it gives you any solace.
  - A PUT request wouldn't look any different than a post, the data still needs to be sent in the body vs. the header. Therefore, the server would still need some kind of flag to differentiate between a PUT and POST request, otherwise the requests look the same and provide a similar output.
  - A DELETE request, doesn't have any data or content in the body. Forms add data to the body of an HTTP request, so making an HTML form have DELETE functionality also doesn't really make sense.

<br />

## Update

### Create an Edit Route

In our `controllers/todos.js`, create a GET route that will display an edit form for a single todo item.

```javascript
router.get('/:id/edit', function(req, res){
  res.render('/todos/edit', {
    todo: {
      description: data.seededTodos[req.params.id].description,
      urgent: data.seededTodos[req.params.id].urgent,
      id: req.params.id
    }
  });
});
```

Now create a very basic form for editing in the `views/edit.hbs`.

```html
<h1>Edit</h1>
<form>
  <input type="text" name="description" value="{{todo.description}}" />
  <input type="text" name="urgent" value="{{todo.urgent}}" />
  <input type="submit" value="Submit Changes"/>
</form>
```

### Create a Link to the Edit Route

Inside our `index.hbs` file, add a link to our edit route that passes in the index/id of that item in the url

```html
<h1> Todos </h1>
<ul>
  {{#each todos}}
    <li>Description: {{description}}</li>
    <li>Urgent: {{urgent}}</li>
    <br>
    <div><a href="/todos/{{@index}}/edit">Edit</a></div>
    <form action="/todos/{{@index}}">
      <input type="submit" value="DELETE"/>
    </form>
    <hr>
  {{/each}}
</ul>

```

### Create an Update Route

In order to UPDATE an item, we use the HTTP verb **PUT**.

Inside the `server.js` add the following:

```javascript
router.put('/:id', function(req, res) {
  var todoToEdit = data.seededTodos[req.params.id];

  todoToEdit.description = req.body.description;
  todoToEdit.urgent = req.body.urgent;

  res.redirect('/todos');
})
```

### Make the Edit Page Send a PUT Request

Check the server logs. What happens when we submit our changes?

When we click on the "Submit Changes" button on our edit page (edit.hbs), the form needs to make a PUT request to our update route.

```html
<form action="/todos/{{todo.id}}" method="">
  <div class="">
    <label for="description">description:</label>
    <input type="text" name="description" value="{{todo.description}}">
  </div>
  <div>
    <label for="urgent">urgent:</label>
    <input type="text" name="urgent" value="{{todo.urgent}}">
  </div>
  <input type="submit" name="" value="Submit Changes">
</form>

```

The problem is that forms can't make PUT requests.  Only POST and GET requests.  So we need to use method-override again.

Now go back and set up our edit form to send a PUT request.

```html
<form action="/todos/{{todo.id}}?_method=PUT" method="POST">
```

<br />

## Independent/Group Exercise (1hr)

Documentation!

I am going to share a link to a repo with the source code of this basic CRUD application.

I'd like you to document this application as robustly as possible using three types of issues:

```
- [documentation]
- [syntax question]
- [process question]
```

You are going to open issues on the repo, formatting the title with the name of the file, the line you are starting from and ending at, and a small description of what you are describing.

```
  Issue Example 1: [documentation] server.js, lines 33-35, app.listen + callback
  
  Issue Example 2: [documentation] views/edit.hbs, line 2, form action w/ method override

  Issue Example 3: [syntax question] views/index.hbs, line 6, {{#each todos}}

  Issue Example 4: [process question] views/edit.hbs, lines 2,5,9, how to pass data to the view?
```

It might be a multi-line function or maybe just what a piece of Middleware is doing, or several different lines about configuring the Express Router, etc.

You also might open issues on lines of code that you don't understand. Your fellow students or myself will respond.

At the end of this exercise, we should hopefully have most, if not all, of this application documented with one or more explanations of what each piece is doing.

This repo can then be used as a resource!

*(NOT AS A PLACE TO COPY + PASTE FROM)*
