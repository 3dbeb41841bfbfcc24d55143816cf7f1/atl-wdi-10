// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";

const expect = require('chai').expect;
const responses = require('../diagnostic.js');

describe("Question Six", function(){
  it("sum the numbers from 0 to 1000 (exclusive)", function(){
    expect(responses.six).to.equal(499500)
  });
});
describe("Question Seven",function(){
  it("produce a string of numbers and words, per FizzBuzz guidelines", function(){
    expect(responses.seven).to.equal(
      '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32')
  });
});
describe("Question Eight",function(){
  it("do not change the size of the two-dimensional array", function(){
    expect(responses.eight.length).to.equal(2);
    expect(responses.eight[0].length).to.equal(5);
  });
  it("double the value of each element in the two-dimenaional array", function(){
    expect(responses.eight).to.deep.equal([
      [2, 4, 6, 8, 10],
      [12, 14, 16, 18, 20]
    ])
  });
});
