//TESTS FOR SCRIPTS.JS

var expect = require("chai").expect;

var barrels = require("../script.js").barrels;
var shipFuelCost = require("../script.js").shipFuelCost;
var calcFruitJuice = require("../script.js").calcFruitJuice;


describe('Pseudocode to Code', function(){
    it('barrels(2,3,825) should return `141`', function(){
      expect(barrels(2,5,825)).to.equal(141);
    });
    it('shipFuelCost(3, 12) should return `6225.25`', function(){
      expect(shipFuelCost(3, 12)).to.equal(6225.25);
    });
    it('calcFruitJuice(3, 20, 2, 55) should return `0.34`', function(){
      expect(calcFruitJuice(3, 20, 2, 55)).to.equal(0.34);
    });
});
