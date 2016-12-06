---
title: Loops and iterating over Arrays
type: Lesson
duration: 1hr
creator:
  name: Colin Hart
  campus: WDIR
competencies: Programming
---

# Loops and iterating over Arrays

## Lesson Objectives

  - Explain what does it means to iterate or loop?
  - Write the for loop syntax
  - Describe the order a for loop runs in

## What does it mean to iterate or loop

**Exercise:** In your own words define a loop and an iteration. (Does not need to be technical)

Iterating in programming is a way of incrementally repeating a task.

If I wanted to console.log something 5 times, how would I do that without a loop?

## Iterating through an array - Codealong (10 mins)

Iterating through the elements of an array, one at a time, is a very common practice in programming.

We can use a `for` loop to iterate over the elements of an array like this:

```javascript
var array = [1, 2, 3, 4, 5];

for (var i = 0; i < a.length; i++) {
  console.log(i);
}
```

#### Elements of a for loop

The for loop starts with the keyword `for`. `for` takes three arguments in the parenthesis:

1. **initialization**
  `var i = 0;` the loop starts at zero. `i` is just a counter, a way to keep track of how many times we've looped and a way to keep track of where we are in the array.
2. **condition**
  `i < array.length;` this is the condition that indicates whether the loop is at completion or if it should keep going. In this case, in english we could say this as if the variable i is less than the length of the array keep looping
3. **increment**
  `i++` this syntax is going to add `1` to the variable. Each time the loop runs it's going to _increment_ `i` by one

For each iteration, it will run the code in the block. A block refers to the `{ }`

**Exercise:** Take three minutes and write everything you can do with a pen.

**Exercise:** Take three minutes and write everything you could do with the variable `i` in a for loop.


```js
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 0; i < teams.length; i++) {
  console.log(teams[i]);
}
```

Code is creative.

JavaScript arrays have several advanced _iterator methods_. Like forEach, map, reduce, and filter. These methods require a function be supplied as an argument and the code you write in the function will be called on _each_ item in the array, individually. We'll get to these in the coming weeks, but for now you can either stick to the `for loop` or explore these methods on your own!

Independent practice:

1. loop over an array of numbers and console.log i
2. loop over an array of names and console.log each name


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
