var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');

router.post('/', function(req, res){
  console.log("POSTEINNGN");
  console.log(req.body);

  User.findById(req.session.currentUser._id).exec(function(err, user){
    console.log("THE USER:", user);
    var list = new List(req.body);

    user.list.push(list);
    user.save();

    console.log(user);
    res.json({ user });
  });
});

router.put('/:listId', function(req, res) {
  console.log("PUDDINGs");
  console.log(req.body);
  User.findById(req.session.currentUser._id).exec(function(err, user){
    console.log("THE USER:", user);
    if (err) { console.log(err); };
    var list = user.list.id(req.params.listId);

    list.name = req.body.name;
    list.complete = req.body.complete;
    user.save();
    res.json({ user });
  });
});

router.delete('/:listId', function(req, res) {
  User.findById(req.session.currentUser._id).exec(function(err, user){
    user.list.id(req.params.listId).remove();
    user.save();
    res.json({ user });
  });
});

module.exports = router;
