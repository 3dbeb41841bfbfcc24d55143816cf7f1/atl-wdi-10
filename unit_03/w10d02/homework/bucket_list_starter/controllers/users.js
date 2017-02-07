var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js')

router.get('/', function(req, res) {
  User.find({})
  .exec(function(err, users){
    if (err) { console.log(err); }
    res.json({
      users: users,
      currentUser: req.session.currentUser
    })
  });
})

router.get('/:id', authHelpers.authorize, function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log(user);
    res.json({ user });
  });
})

router.post('/', authHelpers.createSecure, function(req, res){
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    password_digest: res.hashedPassword
  });

  user.save(function(err, user){
    if (err) console.log(err);

    console.log(user);
    res.json({ status:201, message: "created" });
  });
});

module.exports = router;
