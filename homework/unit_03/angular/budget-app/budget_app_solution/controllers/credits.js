var Credit = require('../models/credit');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    Credit.find(function(error, credit) {
      if(error) res.status(404).send(error);
      res.status(200).send(credit);
    });
});

// POST: ADD A NEW BUDGET AMOUNT
router.post("/", function(req, res){
  var credit = new Credit(req.body);
  console.log(credit);

  credit.save(function(error) {
    if(error) res.status(500).send(error);
    res.status(201).send(credit);
  });
});


module.exports = router;
