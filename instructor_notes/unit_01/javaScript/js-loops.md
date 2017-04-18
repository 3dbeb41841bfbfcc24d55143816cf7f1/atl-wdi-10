---
title: Loops and iterating over Arrays
type: Lesson
duration: 1hr
creator:
  name: Colin Hart
  adapted for WDI ATL 9 by: Maren Woodruff
  campus: WDI ATL 9
competencies: Programming
---

# Looping and Iterating over Arrays

## Lesson Objectives

  - Explain what does it means to iterate or loop
  - Write a for loop
  - Describe the pieces of a for loop

## What does it mean to iterate or loop

When I am trying to learn a new guitar song, I will play the song over and over again, repeatedly.  I want to get it right.  I want to not have to think about the chords or the lyrics when I am playing.  I want to feel it in my bones.

Iterating in programming is a way of incrementally repeating a task.

If I wanted to console.log something 5 times, how would I do that without a loop?

**Exercise:** (2m) In your own words, define a loop and what a loop does. (It does not need to be technical).

---

## Iterating through an array - Codealong (10m)

Iterating through the elements of an array, one at a time, is a very common practice in programming.

We can use a `for` loop to iterate over the elements of an array like this:

```javascript
var newArray = [1, 2, 3, 4, 5];

for (var i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}
```

<br />

### Elements of a for loop

The for loop starts with the `for` keyword. `for` takes three arguments:

1. **initialization**:
  `var i = 0;` the loop starts at zero. `i` is the **counter**, a way to keep track of how many times we have looped, as well as a way to keep track of where we are in the array.
2. **condition**:
  `i < newArray.length;` this is the condition that indicates whether the loop is completed or if it should keep going. In this case, we could say that if the variable `i` is less than the length of the array, keep looping.
3. **increment**:
  `i++` this syntax is going to add `1` to the variable. Each time the loop runs, it is going to _increment_ `i` by one.

For each iteration, it will run the code in the code block. A **code block** refers to the `{ }`

**Exercise:** Take two minutes and write everything you could do with the variable `i` in a for loop.

```js
var movies = ['The Five Obstructions', 'The Triplets of Belleville', 'About Time', 'Two Weeks Notice'];
for (var i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}
```

Code is creative.

JavaScript arrays have several advanced **iterator methods**- like forEach, map, reduce, and filter. These methods require that a function be supplied as an argument to the iterator method, and that the code that you write in the function will be called on _each_ item in the array, individually. We will touch on these in the coming weeks. For now, you can either stick to the `for loop` or explore these methods on your own!

**Independent practice:** (3m)

1. loop over an array of numbers and console.log `i`.
2. loop over an array of names and console.log each name.

<br />

## Iterating over an object

We have explored how and why we would need to iterate through an array earlier, but how would we do the same for objects?

Let's think back for a second. What are the differences between arrays and objects?  Arrays are ordered lists.  Objects are unordered.  You can access items within objects, via their keys.

EXERCISE: Knowing this, what is the pitfall here in terms of iterating over an object?

Because objects are unordered, it makes them more tricky to loop through. Arrays are ordered, and we can therefore keep track of the counter and use it as a placeholder for the index.

We have two different ways of looping through an object.

The first is `for ... in`

```javascript
var ourObj = { one: 'Danny', two: 'Maren', three: 'Josh', four: 'John', five: 'Lisa' };

for (eachKey in ourObj) {
  console.log(eachKey);
}

```

Which items in the object are returned? And which are missing?

We only see the keys returned, right?  So, can you think of a way to access the values?

```javascript

var ourObj = { one: 'Danny', two: 'Maren', three: 'Josh', four: 'John', five: 'Lisa' };

for (var eachKey in ourObj) {
  console.log(ourObj[eachKey]);
}

```

<br />

## While and Do-While Loops (5m)

JavaScript has `while` loops and `do-while` loops. A `while` is a loop statement that will run **while** a condition is true. It is good for basic looping, but there is a possibility that the loop will never run. Using a `do-while` loop makes sure that the code block is executed at least once, because the `while() expression` is not evaluated until after the block of code runs.

Meaning that we can choose to run the expression before or after the block of code in the loop, executes.

```javascript
while (true) {
  // an infinite loop! Be careful! Thanks for the demo today.
}
```

```javascript
  var input = 0;
  do {
    console.log(input++);
  } while (input < 10);
```

This second will run 0 through 9 times.
