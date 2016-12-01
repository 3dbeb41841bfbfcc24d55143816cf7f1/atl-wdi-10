---
title: Express - Using Express Router from the Get-Go
type: lesson
duration: '1:00'
creator:
    name: Colin Hart
    class: WDIr-R2D2
---

# Express - Using Express Router from the Get-Go

### The file structure

Create a directory called `controllers` -- plural cause it will have many controllers.

Create the controller file you need. If it's going to hold routes for todos call the file `todos.js` if it is going to hold routes for recipies call it `recipies.js`. Again, plural, because the file will hold many routes.

### What goes in the router file?

In your router file (`todos.js`, `recipies.js` etc.) youll need to require express and invoke the router, and export the router as a module.

```js
var express = require('express')
var router = express.Router()

// and at the bottom of the file you need to export the module

module.exports = router;
```

If your routes are reliant on data, you'll need to require that file/module as well.

### What goes in the server file?

Assuming that your router is dealing with todos:

We need the following two lines in our server file

```js
var todosController = require('./controllers/todos.js');


app.use('/todos', todosController);
```

Remember that the second line in the code block above, _MUST_ go below the other middlewares. Meaning underneath app.use bodyparser and app.use method override.

### You build your routes SLIGHTLY differently

1. Your routes start with `router.get` instead of `app.get`.
2. The beginning of the route is implicit.

Meaning we said in the server file that all routes coming in at `/todos` will use the todosController. So the router files `todos.js` that all routes already have `/todos` implicitly. This means we don't need to write the full route in `router.get`

**NOTE** `res.redirects` _do_ require the full route.
