// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

/// Basic Data Types and Expressions ///
// For each expression below, indicate whether it is 'truthy' or 'falsey'
// by assigning the appropriate variable a value of either `true` or `false`.

// 1. true || false 
//var resOne = true;
var resOne;

// 2. null || ''
//var resTwo = falsey;
var resTwo;

// 3. 'false' && true
//var resThree = true;
var resThree;

// 4. !!0
//var resFour = false;
var resFour;

// 5. !null && !undefined
//var resFive = true;
var resFive;

/// Flow Control ///

// 6. Write a `while` loop that increases `resSix` by 23 until `resSix` is five
//    digits long. (Hint: take a look at the .toString() method)
var resSix = 5;
console.log(resSix.toString().length);

while (resSix.toString().length < 5){
  resSix+=23;
}
console.log(resSix)

// 7. Write a `while` loop that increases `resSeven` by 12 when it's strictly
//    below 95, decreases it by 7 when it's strictly above 105, and stops as
//    soon as `resSeven` equals or falls between those two values.
var resSeven = 65;

do {
  resSeven === 95 || 105; 95<resSeven< 105;
}
while (resSeven < 95){
    resSeven =-7
}
while (resSeven > 105) {
resSeven+=12
}
{
  console.log(resSeven)
}

// 8. Write a `for` loop that counts from 0 (inclusive) to 1857 (exclusive) and
//    calculates the sum of all of those numbers, storing the result in the
//    variable `resEight`.
var resEight;
// Replace This Comment With Your Code

// 9. Using a `for` loop, calculate the sum of all multiples of 7 between 0
//    (inclusive) and 1000 (exclusive); store the result in the variable
//    `resNine`.
var resNine;
// Replace This Comment With Your Code

// 10. Using whatever code you like, calculate n^n for each value from n from 1
//     to 10 (both inclusive), and store the sum in the variable `resTen`.
var resTen;
// Replace This Comment With Your Code

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  one: resOne,
  two: resTwo,
  three: resThree,
  four: resFour,
  five: resFive,
  six: resSix,
  seven: resSeven,
  eight: resEight,
  nine: resNine,
  ten: resTen
}
