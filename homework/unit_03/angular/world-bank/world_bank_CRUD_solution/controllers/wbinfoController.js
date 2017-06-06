var express = require('express'),
  router  = express.Router();

var Wbinfo = require('../models/wbinfo.js');

// get count of all documents in collection
router.get('/count', function(req, res) {
	Wbinfo.count(function(err, count) {
		res.send(count.toString());
	});
});

// // get all region names excluding duplicates
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

// // index of all records for testing after seeding (redirected from seed route)
// // or to get ids for cURL operations
// router.get('/', function(req, res) {
// 	Wbinfo.find(function(err, data) {
// 		res.send(data);
// 	});
// });

// // create record
router.post('/', function(req, res) {
	Wbinfo.create(req.body, function(err, info) {
		res.send(info);
	});
});

//edit record
router.put('/:id', function(req, res){
// console.log("this is the req.body", req.body);
	Wbinfo.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, info){
		// console.log("this is the info it found: ", info)
		res.send(info);
	});
});

//delete record 
router.delete('/:id', function(req, res){
  // console.log("this is req.body: " + req.body)
  Wbinfo.findById(req.params.id, function(err, info) {
    info.remove();
    // console.log("This record got removed: ", info)
    res.send(info);
  });
});

module.exports = router;
