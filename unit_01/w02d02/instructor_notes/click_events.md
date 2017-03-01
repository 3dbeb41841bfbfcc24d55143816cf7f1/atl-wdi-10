---
title: Callbacks, Click events and Game objects
type: lesson
duration: 1hr
creator:
    name: Colin Hart
edited:
    name: Maren Woodruff
competencies: Programming
---

## Learning Objectives

<!-- * Window onload -->
* Describe the syntax and use of functions
* Conceptualize function references
* Pass function references to other functions as arguments (callbacks)
* Implement callbacks in the DOM using Click Events
* Think about JS as a system
* Solidify the process of application design

<!-- ## DOM Load Order

Here's what happens when a browser loads a website:

1. It makes a request for and fetches the HTML page (e.g. index.html)
2. It starts parsing the HTML, i.e. building the dom.
3. The parser sees a `<script>` tag referencing an external script file.
4. The browser makes a second request for the script file. Meanwhile, the parser stops and and waits. This is called **Blocking**.
5. Once the script is downloaded and executed the parser will continue parsing the rest of the HTML document.

There are several more advanced techniques for loading our JS, but for now we can just make sure our script tag is at the end of the html so the DOM loads before our script runs.

<br />

## window.onload

There is a pattern we can follow to help our page load properly and execute in the right order.

We can surround our Javascript in a function called `window.onload = function() {}`. This function will wait until the entire window/dom is loaded before allowing our Javascript to run.

In your `main.js` file, wrap your Javascript code in the following function:

```js
window.onload = function() {
  // code
}
```

Refresh your window and make sure your script is still running!

It is fired after the entire page loads, includ­ing its con­tent (images, css, scripts, etc.) -->

## Review — functions

### The syntax

A function is written using the `function` keyword, a function name (optional: dependent on whether you are writing a named or anonymous function), followed by a pair of parenthesis `()` with optional arguments, and a code block `{}`.

There are actually three ways we can write functions:

```javascript
// anonymous functions, which get passed as arguments
function() {
  console.log('hi');
}

// a named function or function declaration.
function newFunction() {
  console.log('hi');
}

// saved to a variable or a function expression
var newFunction = function() { 
  console.log('hi');
}

```

These functions all behave the same way, and are merely written slightly differently.

**Exercise**: (5m) Write a function using the three different patterns mentioned above. The function should take two arguments, `num1` and `num2`, and log the sum of the two numbers to the console.

**[NOTE]**: Even though you can declare an anonymous function you can't actually call it. Only named functions and those saved to variables can be invoked with a parens `()`.

So, why would we even want to write a function without a name? We are building up to this. Keep it in the back of your head for a moment.

### Function References

Function references are what is returned when we ask for a function without invoking it.

We have defined several functions already. Let's call them without invoking them and see what the response is.

### Passing a function as an argument (CALLBACKS!!!)

Functions can be passed as an argument by way of a function reference to other functions. 

Let's define a function called `sayHello()`. It will to take one argument called name, and it will return a string that says `hello, <name>`

```javascript
var sayHello = function(name){
  return 'hello, ' + name;
}
```

Let's now define a second function called shout().

```javascript
var shout = function(a, callback) { // the argument 'callback' here is expected to be a function reference
  alert(callback(a)); // the function reference, stored in the argument 'callback', is getting invoked with a parens
}

shout('world!', sayHello);
// alert box says "hello world!"
```

```javascript
var performMath = function(num1, num2, callback) {
    callback(num1, num2);
}

var add = function(num1, num2) {
    console.log(num1 + num2); 
}

var subtract = function(num1, num2) {
    console.log(num1 - num2);
}

performMath(5, 5, add);

performMath(10, 5, subtract);

```

## Click Events

You have used `<a href="">` tags to make links that users can click on. But this method is only a tiny portion of the functionality we experience online.  The rest of our experience boils down to JS click events.

You can think about click events as follows:

> A click event essentially ties a function (as a callback) to an HTML DOM element and specifies what action needs to happen in order to trigger/call/invoke that function (callback). In this case, it's a click!

This pattern is called an **event listener**. Events can be clicks, hovers, scrolls etc. It requires that we have a DOM node saved to a variable. We can then call `node.addEventListener()` and pass it two arguments, a string with the type of event we are listening for, and a second argument that is a function with an event argument.

This could be either an anonymous function or a function expression/declaration written elsewhere— like in an object *hint hint hint COUGH*

```javascript
var button = document.querySelector("button");

button.addEventListener("click", function(event){
  console.log("Executed in the callback function.");
});
```

## Let's break this down for a second

- `.addEventListener` is a function we can call on nodes.
- The **event listener** function takes two arguments, a string and an anonymous function.
- the anonymous function takes an argument `event`... whatt?

An `event`, is another magical object!

- `this` in the context of event listeners is the node that triggered the event- in this case the node that was clicked.
- `event` is the event object that has all kinds of information, we can also ask for the node by using `event.target`.

What is the difference?

Exercise: (20m) Look at the starter code <a href="https://github.com/ATL-WDI-Curriculum/atl-wdi-9/tree/master/unit_01/w02d02/student_labs/in_class_click_events">here</a>. There are three buttons. Add event listeners to all of three buttons.

1. Button one, when clicked, should trigger an alert saying `"you have clicked button one"`
2. Button two, when clicked, should trigger a function that creates a `<p>` with the following string:

   >A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).

   and appends it to the DOM in the `<div id="information">`.
3. Button three, when clicked, should remove the `p` tag from the DOM

<br />

![Labtime](http://i.imgur.com/WzTTdIe.jpg)

## Independent Practice

##### Exercise #1 - Independent Click Events

[Independent Click Events](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/tree/dev/unit_01/w02d02/student_labs/independent_click_events)

##### Exercise #2 - Wendy Bite

[Wendy Bite](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/tree/master/unit_01/w02d02/student_labs/wendy_bite)
