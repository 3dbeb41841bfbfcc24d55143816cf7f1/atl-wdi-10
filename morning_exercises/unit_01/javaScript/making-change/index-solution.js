// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  var changeLeft = Math.round(100*payment - 100*price);
  if (changeLeft < 0) {return [0,0,0,0]};
  var results = [], quantity;
  [25, 10, 5, 1].forEach(function(val){
    quantity = Math.floor(changeLeft/val);
    changeLeft -= quantity * val;
    results.push(quantity);
  });
  return results;
  //// alternate implementation, using .map
  // var quantity;
  // return [25, 10, 5, 1].map(function(val){
  //   quantity = Math.floor(changeLeft/val);
  //   changeLeft -= quantity * val;
  //   return quantity;
  // });
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
