// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// 'require' external code //
const expect = require('chai').expect;

// HW Responses
const sumOfNums = require('../hw.js').sumOfNums;
const numsGreaterThanTen = require('../hw.js').numsGreaterThanTen;
const allGreaterThanTen = require('../hw.js').allGreaterThanTen;
const wordsWithAtLeastFiveLetters = require('../hw.js').wordsWithAtLeastFiveLetters;
const allStartingWithA = require('../hw.js').allStartingWithA;
const anyStartingWithB = require('../hw.js').anyStartingWithB;
const hasAtLeastNVowels = require('../hw.js').hasAtLeastNVowels;
const wordsWithAtLeastTwoVowels = require('../hw.js').wordsWithAtLeastTwoVowels;
const allHaveAtLeastTwoVowels = require('../hw.js').allHaveAtLeastTwoVowels;
const anyHaveAtLeastTwoVowels = require('../hw.js').anyHaveAtLeastTwoVowels;
const noneHaveTwoOrMoreVowels = require('../hw.js').noneHaveTwoOrMoreVowels;
const buildObjectFromWords = require('../hw.js').buildObjectFromWords;

// Tests
describe('sumOfNums(numsArray)', function(){
  it('takes an array of numbers and returns the sum', function(){
    expect(sumOfNums([1,2,3,4,5])).to.equal(15);
    expect(sumOfNums([0,0,5])).to.equal(5);
    expect(sumOfNums([-1,0,1])).to.equal(0);
  });
  it('returns 0 if `numsArray` is empty', function(){
    expect(sumOfNums([])).to.equal(0);
  });
});
describe('numsGreaterThanTen(numsArray)', function(){
  it('returns those numbers which are greater than ten', function(){
    expect(numsGreaterThanTen([-1, 0, 1, 9, 9.5, 9.99, 10, 11, 20, 100])
    ).to.deep.equal([11, 20, 100]);
  });
});
describe('allGreaterThanTen(numsArray)', function(){
  it('returns `true` if all numbers in numsArray are strictly greater than 10', function(){
    expect(allGreaterThanTen([11, 20, 100])).to.equal(true);
  });
  it('returns `false` if any numbers in numsArray are not strictly greater than 10', function(){
    expect(allGreaterThanTen([9, 100, 299])).to.equal(false);
    expect(allGreaterThanTen([1, 2])).to.equal(false);
    expect(allGreaterThanTen([10])).to.equal(false);
  });
  it('returns `true` if numsArray is empty', function(){
    expect(allGreaterThanTen([])).to.equal(true);
  });
})
describe('wordsWithAtLeastFiveLetters(words)', function(){
  it('returns all words that are at least five letters long', function(){
    expect(wordsWithAtLeastFiveLetters(['alphabet', 'banana', 'carrot', 'doe', 'egg'])
    ).to.deep.equal(['alphabet', 'banana', 'carrot']);
  });
});
describe('allStartingWithA(words)', function(){
  it('returns `true` if all words start with "a" or "A"', function(){
    expect(allStartingWithA(['apple', 'alligator', 'Arkansas'])).to.equal(true);
  });
  it('returns `false` if any words do not start with either "a" or "A"', function(){
    expect(allStartingWithA(['Amy', 'Bob'])).to.equal(false);
  });
  it('returns `true` if array is empty', function(){
    expect(allStartingWithA([])).to.equal(true);
  });
});
describe('anyStartingWithB(words)', function(){
  it('returns `true` if the array contains any words starting with "b" or "B"', function(){
    expect(anyStartingWithB(['Amy', 'Bob'])).to.equal(true);
  });
  it('returns `false` if the array does not contain any words starting with either "b" or "B"', function(){
    expect(anyStartingWithB(['apple', 'alligator', 'Arkansas'])).to.equal(false);
  });
});
describe('hasAtLeastNVowels(word, n)', function(){
  it('returns `true` if there are at least `n` vowels (a/A, e/E, i/I, o/O, u/U) in `word`', function(){
    expect(hasAtLeastNVowels('egg', 0)).to.equal(true);
    expect(hasAtLeastNVowels('egg', 1)).to.equal(true);
    expect(hasAtLeastNVowels('apple', 0)).to.equal(true);
    expect(hasAtLeastNVowels('apple', 1)).to.equal(true);
    expect(hasAtLeastNVowels('apple', 2)).to.equal(true);
    expect(hasAtLeastNVowels('Orange', 0)).to.equal(true);
    expect(hasAtLeastNVowels('Orange', 1)).to.equal(true);
    expect(hasAtLeastNVowels('Orange', 2)).to.equal(true);
    expect(hasAtLeastNVowels('Orange', 3)).to.equal(true);
    expect(hasAtLeastNVowels('DANGEROUS', 0)).to.equal(true);
    expect(hasAtLeastNVowels('DANGEROUS', 1)).to.equal(true);
    expect(hasAtLeastNVowels('DANGEROUS', 2)).to.equal(true);
    expect(hasAtLeastNVowels('DANGEROUS', 3)).to.equal(true);
    expect(hasAtLeastNVowels('DANGEROUS', 4)).to.equal(true);
    expect(hasAtLeastNVowels('uncopywriteable', 0)).to.equal(true);
    expect(hasAtLeastNVowels('uncopywriteable', 1)).to.equal(true);
    expect(hasAtLeastNVowels('uncopywriteable', 2)).to.equal(true);
    expect(hasAtLeastNVowels('uncopywriteable', 3)).to.equal(true);
    expect(hasAtLeastNVowels('uncopywriteable', 4)).to.equal(true);
    expect(hasAtLeastNVowels('uncopywriteable', 5)).to.equal(true);
    expect(hasAtLeastNVowels('uncopywriteable', 6)).to.equal(true);
  })
  it('returns `false` if there are fewer than `n` vowels in `word`', function(){
    expect(hasAtLeastNVowels('egg', 2)).to.equal(false);
    expect(hasAtLeastNVowels('apple', 3)).to.equal(false);
    expect(hasAtLeastNVowels('dangerous', 5)).to.equal(false);
    expect(hasAtLeastNVowels('uncopywriteable', 7)).to.equal(false);
  });
  it('returns `null` if `n` is less than 0', function(){
    expect(hasAtLeastNVowels('banana', -1)).to.equal(null);
  });
});
describe('wordsWithAtLeastTwoVowels(words)', function(){
  it('returns all words that have at least two vowels', function(){
    expect(wordsWithAtLeastTwoVowels(['alphabet', 'bun', 'can', 'doe', 'egg'])
    ).to.deep.equal(['alphabet', 'doe']);
  });
});
describe('allHaveAtLeastTwoVowels(words)', function(){
  it('returns `true` if all words have at least two vowels', function(){
    expect(allHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas'])).to.equal(true);
  });
  it('returns `false` if any words do not have at least two vowels', function(){
    expect(allHaveAtLeastTwoVowels(['Al', 'Barbara'])).to.equal(false);
    expect(allHaveAtLeastTwoVowels(['Al', 'buck', 'can'])).to.equal(false);
  });
  it('returns `true` if array is empty', function(){
    expect(allHaveAtLeastTwoVowels([])).to.equal(true);
  });
});
describe('anyHaveAtLeastTwoVowels(words)', function(){
  it('returns `true` if the array contains any words with at least two vowels', function(){
    expect(anyHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas'])).to.equal(true);
    expect(anyHaveAtLeastTwoVowels(['APPLE', 'bun', 'CAT'])).to.equal(true);
  });
  it('returns `false` if the array does not contain any words with at least two vowels', function(){
    expect(anyHaveAtLeastTwoVowels(['at', 'Bob', 'cup', 'dog'])).to.equal(false);
  });
});
describe('noneHaveTwoOrMoreVowels(words)', function(){
  it('returns `true` if none of the words have at least two vowels', function(){
    expect(noneHaveTwoOrMoreVowels(['Al', 'buck', 'can'])).to.equal(true);
  });
  it('returns `false` if any words do not have at least two vowels', function(){
    expect(noneHaveTwoOrMoreVowels(['Al', 'Barbara'])).to.equal(false);
    expect(noneHaveTwoOrMoreVowels(['apple', 'alligator', 'Arkansas'])).to.equal(false);
  });
  it('returns `true` if array is empty', function(){
    expect(noneHaveTwoOrMoreVowels([])).to.equal(true);
  });
});
describe('buildObjectFromWords(words)', function(){
  it('takes an array of words and returns an object', function(){
    expect(buildObjectFromWords(['a','b','c']).constructor).to.equal(({}).constructor);
  });
  it('adds every word to that object as a key, and sets the value for that key the length of the word', function(){
    expect(buildObjectFromWords(['apple', 'banana', 'cranberry'])
    ).to.deep.equal({'apple': 5, 'banana': 6, 'cranberry': 9});
  });
});
