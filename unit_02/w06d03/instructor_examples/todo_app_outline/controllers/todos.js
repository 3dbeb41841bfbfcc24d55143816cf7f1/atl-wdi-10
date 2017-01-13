var express = require('express');
var router = express.Router();

// EVERY ROUTE IN THIS FILE IS PREFIXED WITH /todos
// BECAUSE OF LINE 15 IN server.js


//  verb  path     cb    req data  res data
// req and res written in full for clarity*
router.get('/', function(request, response) {
  console.log('HIT /todos');

  response.send('hit /todos');
});

router.get('/:id', function(req, res) {
  console.log('HIT /todos/:id');

  res.send(`hit /todos/${req.params.id}`);
});

router.get('/:id/edit/', function(req, res) {
  console.log('HIT /todos/:id/edit');
  console.log(req.params)
  res.send(`hit /todos/${req.params.id}/edit`)
});


module.exports = router;


// localhost:3000/todos/todos/:id
