---
title: Functions Lab
type: lab
duration: "1:25"
creator:
  name: Gerry Mathe, Alex Notov
  city: London, San Francisco
competencies: Programming
---

# Functions Lab

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Let's practice writing some functions! 

## Exercise

#### Requirements

Follow the requirements in the list below:

1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some Googling to figure this out if you forget how conditionals work.
2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
3. Write a function `isCharacterAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.
4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
5. Write a function that returns the number of arguments passed to the function when called.
6. Define a function `reverseString` that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
7. Write a function `findLongestWord` that takes an array of words and returns the length of the longest word in the array.
8. Write a function `filterLongWords` that takes an array of words and a number `i` and returns a new array of words that are longer than `i` characters long.


**Bonus**

1. Attach the function `reverseString` (from question 6) to the object String so that it is possible to call: `"General Assembly".reverseString()`.

2. Write a function that takes a string as an argument and returns an object where:

  - the keys are the characters that occur in the string
  - the values are the number of occurrences for each letter, regardless of the case

For example, calling the function with the string "General Assembly" will return:

```javascript
{
  a: 2,
  b: 1,
  e: 3,
  g: 1,
  l: 2,
  m: 1,
  n: 1,
  r: 1,
  s: 2,
  y: 1
}
```

#### Starter Code

Open the file `functions.js` - all the function names are already inside the file.  You just need to implement the functions by adding code inside each one.

Use the Chrome dev tools console to practice executing your code.


## Additional Resources

- [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
