//======================
// REQUIREMENTS
//======================
//require express, mongoose, Donut schema, user
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Donut = require("../models/donuts.js");


router.get('/newproducts', function(req, res) {

	var newDonuts = [
			{
					name: "Sprinkles",
					description: "A lotta sprinkles, a lotta yum.",
					img: "http://cdn.phillymag.com/wp-content/uploads/2013/09/donut.png",
					price: 5,
					qty: 99
			}, {
					name: "Plain Ole Donut",
					description: "Plain donut for plain people.",
					img: "https://grandmastersensei.files.wordpress.com/2009/06/donut.jpg",
					price: 25,
					qty: 15
		}, {
					name: "Chocolate",
					description: "Chocolate Donut nom nom nom",
					img: "https://deerfieldsbakery.com/images/items/Other/Pastries-Donuts-Chocolate-Iced-Glazed_MD.jpg",
					price: 7000,
					qty: 1
		}, {
					name: "Donut Holes",
					description: "For the snackers.",
					img: "http://sweets.seriouseats.com/images/20110313-142295-Dough-DonutHoles.jpg",
					price: 10,
					qty: 23
		}
	];


  Donut.create(newDonuts, function(err) {
        console.log("SEED: NEW PRODUCTS CREATED!");
        res.redirect('/');
  });

});

//======================
// EXPORTS
//======================
module.exports = router;
