var express = require('express'),
  router  = express.Router();

var Wbinfo = require('../models/wbinfo.js');

// get count of all documents in collection
router.get('/count', function(req, res) {
  Wbinfo.count(function(err, count) {
    res.send(count.toString());
  });
});

// get all region names excluding duplicates
router.get('/uniqueRegions', function(req, res) {
  Wbinfo.distinct('region', function(err, info) {
    res.send(info);
  });
});

// only get regions that match the region name sent through in the uri
router.get('/byName/:name', function(req, res) {
  Wbinfo.find({ region: req.params.name }, function(err, info) {
    res.send(info);
  });
});

// create record
router.post('/', function(req, res) {
  Wbinfo.create(req.body, function(err, info) {
    res.send(info);
  });
});

module.exports = router;
