# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Functions and Scope



### Objectives

*After this lesson, students will be able to:*

- Describe how parameters and arguments relate to functions
- Create and call a function that accepts parameters to solve a problem
- Define and call functions defined in terms of other functions
- Return a value from a function using the return keyword
- Define and call functions with argument-dependent return values
- Determine the scope of local and global variables
- Create a program that hoists variables

### Preparation
*Before this lesson, students should be able to:*

- Use conditionals to control program flow
- Differentiate between true, false, 'truth-y', and 'false-y'
- Use Boolean logic (!, &&, ||) to combine and manipulate conditionals

---
<a name="opening"></a>
## Introduction to Functions (25 min)

![Imgur](http://i.imgur.com/ylb6WX9.gif)

&#x1F535; Take 15 minutes and read this:

http://eloquentjavascript.net/03_functions.html

Make a note of anything that "clicks" for you. 

<br>

**QUESTION:** In your own words, what is a function? Put your answers into Slack.

A function is a reusable statement, or a group of reusable statements, that can be called anywhere in the program. This avoids the need to rewrite the same statement over and over. Functions enable the software developer to segment large, unwieldy applications into smaller, more manageable pieces.

A critical component of programming, functions address a key tenet of engineering: Don't Repeat Yourself, or DRY. Our goal is to create programs with as little code as possible, while maintaining complete clarity.

Another important trait of functions is that they are similar to objects or strings. Functions can be passed into other functions as an argument (they're called Higher Order Functions), and they can also be used like any other object we've been working with.

---
<a name="codealong1"></a>
## Function Declaration (30 min)

Before we call, or "use", a function, we must define it. In JavaScript, functions can be defined in several ways. Two common methods are __function declarations__ and __function expressions__.

__Function Declarations:__

```javascript
function speak (words) {
  console.log(words);
}
```

__Function Expressions:__

```javascript
var speak = function (words) {
  console.log(words);
}
```

While both methods share some similarities, only function declarations define functions that can be used anywhere in the scope where they're defined (using **hoisting**). In other words, you can call a function that is defined using function declaration before the part of the code where you actually define it:

```javascript
speak('hello, world!');

function speak(words) {
  console.log(words);
}

// DOES NOT RESULT IN ERROR
```

Function expressions, however, must be defined before they are called:

```javascript
speak('hello, world!');

var speak = function (words) {
  console.log(words);
}

// RESULTS IN ERROR:
// TypeError: undefined is not a function
```

#### Function Declaration Syntax

A function declaration always has the following:

* A name
* An optional list of parameters (i.e., the names of arguments to be "passed" into the function, or information the function will use); this is defined by the parenthesis before the opening curly brace
* Statements inside the function (the code executed every time the function is called)

In our example above, the function name is `speak`. The parameter is `words`. (Note: multiple parameters would be indicated by a comma-separated list inside the parentheses, such as `(words, num)`.) And the statement is `console.log(words);`

And this makes up a basic function declaration!

#### Calling Functions

Calling, or invoking, a function executes the code defined inside this function.

But defining and calling a function is different. A function will not be called when it's defined.

You call a function by using parenthesis after the function's name `()`:

```javascript
function hello () {
  console.log("hello there!")
}

hello();

//=> hello there!
```

JavaScript functions are often defined as methods on objects. To call a function as a method:

```javascript
var person = {
  name: 'Rihanna',
  speak: function () {
    console.log('Work, work, work, work, work');
  }
};

person.speak();

//=> 'Hello, World!'
```

<br>

![Imgur](http://i.imgur.com/ylb6WX9.gif)

&#x1F535; **Activity (4 min)**

* Write a function that logs "I come from out of a function!" to the console.
* Invoke the function
* **Give me a thumbs up in Slack when you're done**


&#x1F535; **Activity (4 min)**

* Write a function that logs the sum of 2 + 2
* Invoke the function
* **Give me a thumbs up in Slack when you're done**

&#x1F535; **Activity (2 min)**

EXPERIMENT

* Can you invoke a function _before_ you have defined it? Try placing the invocation for one of your functions above the function definition. Try it out!

<br>
---
<a name="codealong2"></a>
## Parameters (25 min)

If a function did the same thing every time it was called, it wouldn't be a very powerful codebase. We would also have to write a new function for each new feature in order to enable additional behaviors in our application:

```javascript
// Bad idea...
function helloMarc () {
  console.log('hello, Marc');
}

function helloRihanna () {
  console.log('hello, Rihanna');
}
```

> __Question:__ Why is writing such specific functions a bad idea?

Parameters remedy this problem by allowing us to call, or invoke, the same function with different values:

```javascript
function sayHello (name) {
  console.log('Hello ' + name);
}

sayHello('Marc');
=> 'Hello Marc'

sayHello('Rihanna');
=> 'Hello Rihanna'
```

In this example, the function `sayHello` is declared with one parameter, `name`. To write functions with **more than one parameter**, use a comma-separated list: `(param1, param2, param3, param4)`. In JavaScript, functions can accept up to 255 parameters!

```javascript
function sum(x, y, z) {
  console.log(x + y + z);
}

sum(1, 2, 3);
=> 6
```

JavaScript is a loosely typed language. Therefore, there is no need to specify the data-type (string, number, etc.) of the function's parameters when writing functions. While this reduces the amount of code you must write, it increases the possibility of type errors, when a value is not of the expected data type. This is because in JavaScript, function definitions do not perform type checking on arguments passed into the functions.

>Note: Parameters vs Arguments. Though often used interchangeably, the terms __parameters__ and __arguments__ have different meanings.

__Parameters__ refer to variables defined in the function's declaration; __arguments__ refer to the actual values passed into the function when the function is called. For example:

```javascript
// Parameter
function doSomething (parameter) {
  // does something
}

// Argument
doSomething(argument);
```

<br>
![Imgur](http://i.imgur.com/ylb6WX9.gif)

&#x1F535; **Activity (5 min)**

* Write a function that takes a parameter. The function should simply console.log() the value of the parameter.
* Invoke the function with an argument.
* **Give me a thumbs up in Slack when you're done**

<br>

**Multiple parameters (5 mins)**

We can also use multiple parameters in our functions. A function can take any number of parameters.

```js
var multiply = function(num1, num2) {
	console.log(num1 * num2);
};
```
When you invoke the function, you generally want to supply the right number of arguments.

```js
multiply(4, 4);

=> 16
```

<br>

![Imgur](http://i.imgur.com/ylb6WX9.gif)

&#x1F535; **Activity (15 min)**

**In Pairs**

Write the following functions and test to make sure they work:

* Write a function called `calculateArea` that takes two parameters `width` and `length` and multiplies them. This will give us the area of a rectangle.
* Invoke the function a couple of times with different arguments each time
* Write a function that takes three parameters (numbers), sums them, and converts the sum into a string (eg. `"123"`)
* Invoke the function a couple of times with different arguments each time

EXTRA:

* Write a function that takes two parameters (strings) and console.logs whether the two strings are identical

EXPERIMENT

* What happens if you supply more arguments than there are parameters?
* What happens if you supply fewer arguments than there are parameters?

**Give me a thumbs up in Slack when you're done**

<br>
---
<a name="codealong3"></a>

## The Return Statement (25 min)

Sometimes we don't want to print to the console or update the DOM, rather, we want to update a variable or even call another function. This requires a `return` statement. When we return something, it ends the function's execution and "spits out" what we are returning. We can then store this returned value in another variable...

```javascript
function sum (x, y) {
  return x + y;
}

var z = sum(3, 4);
=> 7
```
... or pass it to another function:

```javascript
function sum (x, y) {
  return x + y;
}

function double (z) {
  return z * 2;
}

var num = sum(3, 4)
=> 7
var numDbl = double(num);
=> 14

// This can also be written:
var num = double(sum(3,4));
=> 14
```

Note that the `return` statement will completely stop a function's execution. Any statements following the `return` statement will not be called:

```javascript
function speak (words) {
  return words;

  // The following statements will not run:
  var x = 1;
  var y = 2;
  console.log(x + y)
}
```

By default, JavaScript functions will return an `undefined` value. To test this, use Node to define and run a function __without__ a return value. A `return` value "overwrites" this default value.

![Imgur](http://i.imgur.com/ylb6WX9.gif)

&#x1F535; **Activity (20 min)**

**In Pairs**

PROBLEM SOLVING

* Write a function `toThePower` that takes two parameters (numbers). The function should `return` the first number raised to the power of the second number.

* Write another function after `toThePower`. This function should be called `plusOne`. `plusOne` should take the return value of toThePower and add 1 to the result.

* Write a function `Palindrome` that checks whether a string is a palindrome. A palindrome is the same forwards as it is in reverse. The function should return either `true` or `false`.

* **Give me a thumbs up in slack when you're done**


<br>

---
<a name="introduction1"></a>

## Introduction to Scope (25 min)

Scope is the set of variables you have access to. As we learned in the beginning of this class, JavaScript reads from top to bottom. Sometimes, however, we declare variables inside functions (just like arguments), which aren't accessible in other parts of our code. This is the concept of scope.


#### Global Scope

Before you write a line of JavaScript, you're in what we call the `Global Scope`. When a variable is declared outside a function, it is public—referred to as GLOBAL—and has a global scope. Any script or function on the page can then reference this variable.

For example, when you declare a variable right away, it's defined globally:

```javascript
var name = 'Marc';
```

Global scope can be confusing when you run into namespace clashes. You don't want to use global scoping for all your variables--because using it correctly is highly complex--but every Javascript program uses the global scope in one way or another, so it’s important to be familiar with it.

> Note: If time permits, briefly explain what [namespace](http://www.codeproject.com/Articles/829254/JavaScript-Namespace) means in JavaScript.

#### Local Scope

Conversely, if a variable is declared inside a function, it is referred to as LOCAL, and has a local scope.

A variable with local scope cannot be referenced outside of that function.

---

<a name="codealong4"></a>

## Local and Global Scope Usage (25 mins)

Take a look at the code below:

```javascript
var a = "this is the global scope";

function myFunction() {
  var b = "this variable is defined in the local scope";
}

myFunction();

console.log(b);
```

In this case, the console log will send a reference error because the variable `b` is not accessible outside the scope of the function in which it is defined.

In the logic defined above, the fact that a variable cannot be accessed by the parent scope works only in one way.

A function can access variables of the parent scope. In other words, a function defined in the global scope can access all variables defined in the global scope.

```javascript
// Global Scope
var a = "Hello";

// This function is defined in the global scope
function sayHello(name) {
    return `${a} ${name}`;
}

sayHello("JavaScript");
=> "Hello JavaScript";
```

### Nested Function Scope

When a function is defined inside another function, it is possible to access variables defined in the parent from the child:

```javascript
var a = 1;

function getScore () {
  var b = 2,
  c = 3;

  function add() {
    return a + b + c;
  }

  return add();
}

getScore();
=> 6
```

---

### `this` - Codealong (5 mins)



A function's `this` keyword is always referring to the current context

#### This in the Global context

In the global scope, this refers to the global object:

```javascript
this === window
=> true

this.document === document
=> true

this.aValue = "WDI";
=> "WDI"

console.log(window.aValue);
=> "WDI"
```

#### As an object method

If a function is part of an object (we then call it a method), `this` refers to the object that has been defined and called:

```javascript
var wdi = {
  name: "WDI",
  whatsTheName: function() {
    return this.name;
  }
};

wdi.whatsTheName();
=> "WDI"
```

## Independent Practice #1 - Write some functions (20 mins)

Work through as many as these exercises as you can within the next 15 mins - use the `js-independent-practice starter-code` provided in your student_labs folder!

1. Write a function `lengths` that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

    ```javascript
var words = ["hello", "what", "is", "up", "dude"]
lengths(words)  
# => [5, 4, 2, 2, 4]
```

2. Write a Javascript function called `transmogrifier`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

    The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

    For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the power of 2` is 225. Use your function to find the following answers.

    ```javascript
transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)
```


3.  Write a function `wordReverse` that accepts a single argument, a string. The
method should return a string with the order of the words reversed. Don't worry
about punctuation.

    ```javascript
wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"
wordReverse("Put Hans back on the line")
# => "line the on back Hans Put"
```

<br>

## Independent Practice #2 - JS Functions Lab (40 min)

[js-functions-lab](../student_labs/js-functions-lab) in student labs folder

I'll put you into groups. Each group will be responsible for sharing the solution to their assigned problem.

<br>

<a name="lab1"></a>
## BONUS Independent Practice #3 - Rolling Dice: Lab (40 min)

For this lab, you'll be creating a page that displays a random update of two dice every time the user hits the "Roll Dice" button. To get started, open the [app.js file](../student_labs/starter-code/dice/js/app.js). Use the HTML and CSS code included in the starter code folder.

![](https://i.imgur.com/EEORrtk.png)

Before creating code, be sure to write down the pseudocode for the exercise!

>Note: We haven't covered DOM Manipulation yet, but students will need some familiarity with [document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) to complete this exercise. Be sure to tell them this and/or provide a short intro.


<a name="conclusion"></a>

## Conclusion (5 mins)

The only way to master JavaScript scope is to practice. You'll have a lot of confusing errors with the JavaScript you write at the beginning of your journey into programming! This will force you to name variables and functions the right way to make sure there is no conflict.

- Describe a function.
- Explain what happens before JavaScript code is executed.
- Explain the difference between local and global scope.

For more details about functions and scope [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).
