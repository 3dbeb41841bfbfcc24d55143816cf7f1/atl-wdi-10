var express = require('express');

var movieSearchController = express.Router();

movieSearchController.get('/', function (request, response) {
  response.render('moviesSearch/index');
});

module.exports = movieSearchController;