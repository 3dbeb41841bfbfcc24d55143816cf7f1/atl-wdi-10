var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js')

router.post('/login', authHelpers.loginUser, function(req, res){
  console.log('sessions', req.session.currentUser)
  res.json({status: 200, data: req.session.currentUser})
});

router.delete('/', function(req, res){
  req.session.destroy(function() {
    res.json({status: 204, message: 'destroyed'})
  })
})

module.exports = router;
