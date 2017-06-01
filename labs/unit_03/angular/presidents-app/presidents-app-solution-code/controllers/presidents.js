var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser') //parses information from POST
var methodOverride = require('method-override') //used to manipulate POST
var President = require('../models/President');

// INDEX Route
router.get('/', function(req, res) {
  President.find(function(error, presidents) {
    if(error) res.json({message: 'Could not find any president'});

    res.json({presidents: presidents});
  });
});

// CREATE Route
router.post('/', function(req, res) {
  console.log('in POST');
  console.log('body:',req.body);

  var president = new President(req.body);

  president.save(function(error) {
    if(error) res.json({messsage: 'Could not ceate president b/c:' + error});

    res.json({president: president});
  });
});

// SHOW Route
router.get('/:id', function(req, res) {
  var id = req.params.id;

  President.findById({_id: id}, 
    function(error, president) {
      if(error) res.json({message: 'Could not find president b/c:' + error});

      res.json({president: president});
    });
});

// UPDATE Route
router.patch('/:id', function(req, res) {
  var id = req.params.id;

  President.findById({_id: id}, 
    function(error, president) {
      if(error) res.json({message: 'Could not find president b/c:' + error});

      if(req.body.name) president.name = req.body.name;
      if(req.body.start) president.start = req.body.start;
      if(req.body.end) president.end = req.body.end;

      president.save(function(error) {
        console.log(error);
        if(error) res.json({messsage: 'Could not update president b/c:' + error});

        res.json({message: 'President successfully updated', president: president});
      });
    });
});

// DELETE Route
router.delete('/:id', function(req, res) {
  var id = req.params.id;

  President.remove({_id: id}, 
    function(error) {
      if(error) res.json({message: 'Could not delete president b/c:' + error});

      res.json({message: 'President successfully deleted'});
    });
});


module.exports = router;
