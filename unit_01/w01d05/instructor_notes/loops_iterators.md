---
title: Loops and iterating over Arrays
type: Lesson
duration: 1hr
creator:
  name: Colin Hart
  campus: WDIR
competencies: Programming
---

## Lesson Objectives

  - Loop over an object using `Object.keys`
  - Loop over an object with `for ... in `
  - Describe the difference between` Object.keys` and `for ... in`

## Iterating over an object

We explored how and why we'd need to iterate through an array earlier but what about objects?

EXERCISE: Let's think back for a second: What are the differences between arrays and objects?

EXERCISE: Knowing this what is our pitfall here in terms of iterating over an object?

Because Objects are unordered it makes them tricky to loop through. Where arrays we can just keep track of a counter and use it as a placeholder for the index.

We have two different ways of looping through an object.

First is `for ... in`

```javascript
var ourObj = { one: 'Alejandra', two: 'Sophia', three: 'Alan', four: 'Audrey', five: 'David' }

for (eachKey in ourObj) {
  console.log(eachKey)
}

```

Which pieces of the object are returned here? And which pieces are missing?

How can we access the missing pieces in our loop?



```javascript

var ourObj = { one: 'Alejandra', two: 'Sophia', three: 'Alan', four: 'Audrey', five: 'David' }

for (eachKey in ourObj) {
  console.log(ourObj[eachKey])
}

```

## While and Do-While (5 mins)

`while` is a loop statement that will run **while** a condition is true.

JavaScript has `while` loops and `do-while` loops. The first is good for basic looping, but there's a possibility it will never get run. Using a `do-while` loop makes sure that the body of the loop is executed at least once, because `while()` isn't evaluated until after the block of code runs.

Meaning we can run the truth evaluation before or after the code in the loop executes

```javascript
while (true) {
  // an infinite loop!
}
```

```javascript
  var input = 0;
  do {
    console.log(input++);
  } while (input < 10);
```
