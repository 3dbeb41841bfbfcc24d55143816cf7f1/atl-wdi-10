// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

/// Short Answer ///
// Please answer each question with a comment. Use your own words when providing
// explanations.

// 1. What is the difference between an absolute path and a relative path? When
//    should your links use one vs the other?

//    Your Answer Here

// 2. How could we list the contents of a grand-parent (i.e. parent's parent)
//    directory using a single command? Give the command as your answer.

//    Your Answer Here

// 3. Why is it necessary to do `git add` before doing a `git commit`?

//    Your Answer Here

// 4. Briefly explain what each of the following Git commands do.
//    a. `git init`
//    b. `git status`
//    c. `git diff`
//    d. `git log`

//    Your Answers Here

// 5. What is the difference between cloning and forking?

//    Your Answer Here

/// Coding Challenges ///

// 6.  The code below was supposed to count from 0 to 1000 (exclusive)
//     and calculate the sum of all of those numbers; however, it seems to be
//     broken. See if you can fix it!
var sum = 0;
for (var i = 0; i <= 1000; i++) {
  sum += i;
}

// 7.  FizzBuzz is a well-known basic programming challenge. The basic idea is
//     to write code that counts from 1 to some number `n` (inclusive) and
//     replaces some of those numbers with words. Specifically:
//     -  numbers divisible by 3 should be replaced with "Fizz",
//     -  numbers divisible by 5 should be replaced with "Buzz",
//     -  numbers divisible by both should be replaced with "FizzBuzz",
//     -  numbers divisible by neither 3 nor 5 should not be replaced
//
//     The code below is an attempt to solve FizzBuzz; in this case, output is
//     appended to a string rather than printed out. However, this code is not
//     producing the correct result. Can you fix it?
var n = 32;
var fizzbuzzString = '';
for (var i = 1; i <= n; i++) {
  if (i%3 === 0) {
    fizzbuzzString += 'Fizz ';
  } else if (i%5 === 0) {
    fizzbuzzString += 'Buzz ';
  } else if (i%3 === 0 && i%5 === 0) {
    fizzbuzzString += 'FizzBuzz ';
  } else {
    fizzbuzzString += `${i} `;
  }
}
fizzbuzzString = fizzbuzzString.slice(0, -1);

// 8. `matrix`, below, is a two-dimensional array -- an array whose elements are
//     all equally-sized arrays. Write code to iterate through the array and
//     double each of the numbers, without changing the size or shape of the
//     two-dimensional array. Make sure that your code is general enough that
//     it could be applied to a matrix of arbitrary dimensions.
var matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
];
// Replace This Comment With Your Code

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  six: sum,
  seven: fizzbuzzString,
  eight: matrix,
};
