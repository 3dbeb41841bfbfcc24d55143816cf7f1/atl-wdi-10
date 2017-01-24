var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js')

router.get('/signup', function(req, res){
});

router.post('/', authHelpers.createSecure, function(req, res){
});

module.exports = router;
