var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js')

router.get('/login', function(req, res) {
  res.render('users/login.hbs')
})

router.post('/login', authHelpers.loginUser, function(req, res){
  console.log(req.session)
  res.redirect('/users')
});

router.delete('/', function(req, res){
  req.session.destroy(function() {
    res.redirect('/users')
  })
})

module.exports = router;
