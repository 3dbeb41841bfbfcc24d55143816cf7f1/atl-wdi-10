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

  - Explain what it means to iterate or loop
  - Write a for loop
  - Describe the pieces of a for loop

## What does it mean to iterate or loop

When I am trying to learn a new guitar song, I will play the song over and over again, repeatedly.  I want to get it right.  I want to not have to think about the chords or the lyrics when I am playing.  I want to feel it in my bones.

Iterating in programming is a way of incrementally repeating a task.

If I wanted to console.log something 5 times, how would I do that without a loop?   I would have to write it out 5 times.  Loops are extremely helpful in programming.  We can use them to iterate over arrays or objects.  They allow us to keep our code more DRY- Don't Repeat Yourself.

**Exercise:** (2m) In your own words, define a loop and what a loop does. (It does not need to be technical).  Add your answers into slack.

---

## Iterating through an array - Codealong (10m)

Iterating through the elements of an array, one at a time, is a very common practice in programming.

We can use a `for` loop to iterate over the elements of an array like this:

```javascript
var feist = [1, 2, 3, 4];

for (var i = 0; i < feist.length; i++) {
  console.log(feist[i]);
}
console.log('Tell me that you love me more.');
```

<br />

### Elements of a for loop

A `for` loop starts with the `for` keyword, and takes three arguments- the ititialization, the condition, and the increment:

1. **initialExpression**:
  `var i = 0;` 
    - A loop traditionally starts at zero. 
    - The `i` is the **counter**, a way to keep track of how many times we have looped, as well as how we keep track of where we are in the array.
2. **condition**:
  `i < newArray.length;`
    - This is the expression that decides whether a loop is completed or if it should continue. In this case, we would say that if the variable `i` is less than the length of the array, keep on looping.
3. **incrementExpression**:
  `i++`
    - This syntax is going to add `1` to the variable i, each time the loop runs.

#### Basic `for loop` syntax

```javascript
for(initialExpression; condition; incrementExpression) {
  // code block
}
```

For each iteration through the loop (as long as the condition is true), the loop will run the code in the code block. 

**Reminder** A **code block** refers to the code that will be executed between two curly brackets `{ }`.

**Exercise:** Take 2 minutes and write down everything you could do with the variable `i` in a for loop.  Put your answers in slack.

```javascript
var favoriteMovies = ['The Five Obstructions', 'The Triplets of Belleville', 'About Time', 'Two Weeks Notice'];

console.log('My favorite movies are: ');
for (var i = 0; i < favoriteMovies.length; i++) {
  console.log([i + 1] + ". " + favoriteMovies[i]);
}
```

<!-- Code is creative. -->

JavaScript arrays have several advanced **iterator methods**- like forEach, map, reduce, and filter. These methods require that a function be supplied as an argument to the iterator method, and that the code that you write in the function will be called on _each_ item in the array, individually. We will touch upon these in the coming weeks. For now, you can either stick to the `for loop` or explore these methods on your own!

**Independent practice:** (3m)

1. Create an array of numbers.  Loop over the array of numbers and console.log each number in the array.
2. Create an array of names.  Loop over the array of names and console.log each name.

<br />

<!-- ## Iterating over an object

We have explored how and why we would need to iterate through an array- to access the ordered list, but how would we do the same for objects?

Let's think back for a second. What are the differences between arrays and objects?  Arrays are ordered lists.  Objects are unordered.  You can access the values within objects, via their keys.

Knowing this, what is the difficult when iterating over an object?

Because objects are unordered, it makes them more tricky to loop through. Arrays are ordered, and we can therefore use the counter as a placeholder for the index.

We have two different ways of looping through an object.

The first is `for ... in`, which we discussed earlier.

```javascript
var instructors = { instructorOne: 'Danny', instructorTwo: 'Maren' };

for (instructor in instructors) {
  console.log(instructor);
}
```

Which items in the object are returned? And which are missing?

We only see the keys returned, right?  So, can you think of a way to access the values?

```javascript

var instructors = { instructorOne: 'Danny', instructorTwo: 'Maren' };

for (var instructor in instructors) {
  console.log(instructor[instructor]);
}
```

We can use bracket notation. 

<br /> -->

## While and Do-While Loops (5m)

JavaScript also has loops called `while` and `do-while`. A `while loop` is a loop statement that will only run **while** a condition is true. A while loop is good for basic looping, but if the condition is never true, there is a possibility that the loop will never run. 

```javascript
// while syntax
while (true) {
  // If the expression is always true, it will create an infinite loop! Be careful!
}

var i = 2;
while (i >= 0) {
  console.log(i);
  i--;
}
```

A `do-while` loop makes sure that the code block is executed at least once, because the `while() expression` is not evaluated until after the block of code runs.

```javascript
// do-while syntax
var j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);
```

This loop will run 0 through 10 times.

Choosing between a while and do-while loops means that we can choose to run a expression before or after the block of code in the loop, executes.

---

### Some of my favorite JS books
* [A Smarter Way to Learn JS](http://www.cpp.edu/~jcmcgarvey/513_2016/ASmarterWaytoLearnJavaScript.pdf)
* [A Smarter Way to Learn jQuery](https://github.com/JideLambo/javascript-books/blob/master/A%20Smarter%20Way%20to%20Learn%20jQuery%20-%20Mark%20Myers.pdf)
* [JavaScript + JQuery](https://www.dropbox.com/s/05je29f3oxj7oa0/JavaScript%20and%20JQuery%20Interactive%20Front-End%20Web%20Development%202014.pdf?dl=0) - So good! Might be worth buying...
* [JavaScript the Good Parts](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
* [Eloquent JS](http://eloquentjavascript.net/)
* [DOM Enlightenment](http://domenlightenment.com/#1.1)
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
* [You Don't Know ES6](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond)
