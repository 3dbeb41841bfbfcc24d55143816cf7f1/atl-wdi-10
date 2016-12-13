---
title: Callbacks, Click events and Game objects
type: lesson
duration: 1hr
creator:
    name: Colin Hart
competencies: Programming
---

## Learning Objectives

* Window onload
* Describe the syntax and use of functions
* Conceptualize function references
* Pass function references to other functions as arguments (callbacks)
* Implement callbacks in the DOM using Click Events
* Think about JS as a system
* Solidy the process of application design



## DOM Load Order

Here's what happens when a browser loads a website:

1. It makes a request for and fetches the HTML page (e.g. index.html)
2. Starts parsing the HTML i.e. building the dom.
3. The parser sees a `<script>` tag referencing an external script file.
4. The browser makes a second request for the script file. Meanwhile, the parser stops and and waits. This called Blocking.
5. Once the script is downloaded and executed the parser continues parsing the rest of the HTML document.

There are several more advanced techniques for loading our JS but for now we can just make sure our script tag is at the end of the html so the DOM loads before our script runs.

<br>

## window.onload

There is a pattern we can follow to help our page load properly and execute in the right order.

We can surround our Javascript in a function called `window.onload = function() {}`. This function will wait until the entire window/dom is loaded before allowing any of our Javascript to run.

In your `script.js` file, wrap your Javascript code in the following function:

```js
window.onload = function() {
  // alerts and prompts
  // go in here!
}
```

Refresh your window and make sure your script is still running!

It is fired when the entire page loads, includ­ing its con­tent (images, css, scripts, etc.)

## Review — functions

#### The syntax

A function is written using the `function` keyword, `()` parenthesis, a name (optional), and a block `{}`.

There are actually three ways we can write functions:

```javascript
// anonymous functions, which get passed as arguments
function() {
  console.log('hii')
}

// a named function or function declaration.
function name() {
  console.log('hii')
}

// saved to a variable or a function expression
var name = function() {
  console.log('hii')
}

```

These functions all behave the same way, and are merely written a little differently.

Exercise: (5 min) Write a function using the the three different patterns above. It should take two arguments, `num1` and `num2`, and logs the sum of the two numbers to the console.

[NOTE] Even though you can declare an anonymous function you can't actually call it. Only named functions and those saved to variables can be invoked with `()`

So why would we even want to write a function without a name? We're building up to it. Keep it in the back of your head for second.

#### function references

Function references are what is returned when we ask for function without invoking it.

We've defined several functions already. Let's call them without invoking them and see what the response is.

#### Passing a function as an argument (CALLBACKS!!!)

Functions can be passed as an argument by way of the function reference to other functions by. Let's define a function called `sayHello`. It's going to take one argument called name and it's just going to return a string that says `hello <name>`

```javascript
var sayHello = function(name){
  return 'hello '+ name;
}
```

Let's now define a second function called show

```javascript
var shout = function(a, callback) { // the argument callback here is expected to be a function reference
  alert( callback(a) ); // the function reference stored in the argument callback is getting invoked with ()
}

shout('world!', sayHello);
// alert box that says "hello world!"
```

```javascript
var performMath = function(num1, num2, callback) {
    callback(num1, num2)
}

var add = function(num1, num2) {
    console.log(num1 + num2)
}

var subtract = function(num1, num2) {
    console.log(num1 - num2)
}

performMath(5, 5, add)

performMath(10, 5, subtract)

```

## Click Events

You've used `<a href="">` tags to make links that users can click on. But this method is only a tiny portion of the functionality we experience online and the rest of it boils down to JS click events.

You can think about click events as follows:

> A click event essentially ties a function (as a callback) to an HTML DOM element and specifies what action needs to happen to trigger/call/invoke that function (callback). In this case a click!

This pattern is called an eventListener. Events can be clicks, hovers, scrolls etc. It requires that we have a DOM node saved to a variable. We can then call `node.addEventListener` and pass it two arguments, a string with the type of event we're listening for and a second argument that is a function with an event argument.

This could be either an anonymous function or function expression/declaration written somewhere else—like in an object *hint hint hint COUGH*


```javascript
var button = document.querySelector("button");

button.addEventListener("click", function(event){
  console.log("Executed in the callback function.");
})
```

## Let's break this down for a second

- `.addEventListener` is a function we call on nodes.
- The event listener function takes two arguments, a string and an anonymous function.
- the anonymous function takes an argument `event`... whatt?

`event`, is another magical object! Let's `console.log(this)` and `console.log(event)`.

- `this` in the context of eventListeners is the node that triggered the event, in this case the node that was clicked.
- `event` is the event object that has all kinds of information, we can also ask for the node by using `event.target`

What's the difference between the two responses?

Exercise: (20m) Look at the starter code in the `student_labs` directory. There are three buttons. Add event listeners onto all three buttons.

1. Button one, when clicked, should trigger an alert saying `"you've clicked button one"`
2. Button two, when clicked, should trigger a function that creates a `<p>` with the following string:

   >A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).

   and appends it to the DOM in `<div class="information">`
3. Button three, when clicked, should remove the p tag from the DOM


## Using Objects to store our game logic!

The final concept we're going to talk about today is how we can construct a game! You all have a ton of new skills! Between all of your new layout and css skills, your knowledge of the DOM, and your burgeoning knowledge of Vanilla JS and logic, you have the ability to start making your own small games.

I'm going to build a small trivia game in front of you that you'll be able to reference as you move into tonights homework and your weekend assignment!
