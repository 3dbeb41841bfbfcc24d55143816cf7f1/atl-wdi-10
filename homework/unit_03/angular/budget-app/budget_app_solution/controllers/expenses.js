var Expense = require('../models/expense');
var express = require('express');
var router = express.Router();

//Grab all expenses
router.get('/', function(req, res){
    Expense.find(function(error, expense) {
      if(error) res.status(404).send(error);
      res.status(200).send(expense);
    });
});

// POST: ADD A NEW Expense AMOUNT
router.post("/", function(req, res){
  console.log("New Expense Coming  Through");
  var expense = new Expense(req.body);
  console.log(expense);

  expense.save(function(error) {
    if(error) res.status(500).send(error);
    res.status(201).send(expense);
  });
});

module.exports = router;
