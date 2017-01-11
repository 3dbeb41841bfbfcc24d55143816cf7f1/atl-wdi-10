// Problem 1:
// Barrels O' RUM
var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (totalCost - (small * smallBarrel)) / large;

  return largeBarrel;
};
// Problem 2:
// Sailing the SEAS

var shipFuelCost = function(fuel, miles){
  var circumference = 24901;
  var mpg = miles;

  var totalGallons = circumference / mpg;
  var totalCost = totalGallons * fuel;

  return totalCost;
};

console.log(shipFuelCost(3, 12));

// Problem 3:
// Grog
var calcFruitJuice = function(a,b,c,d){
  var costco = (b / 100) * a;
  var kirkland = (d / 100) * c;
  var totalJuice = a + c;
  var totalPFJ = costco + kirkland;

  var finalAnswer = totalPFJ / totalJuice;
  return finalAnswer;
};

console.log(calcFruitJuice(3, 20, 2, 55));

module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
