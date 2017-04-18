# jQuery 3.0 Promises, Deferred, + Animate

## Exercise Objectives
- visual exercise to understand Promises + Asynchronous behavior
- understand Promises through jQuery Promises + Deferreds
- use jQuery's Animate to understand asynchronous behavior

## Why promises?
Promises is the solution for asynchronous operations to let us know when they are done, letting us work in a more synchronous way. When x is done, do y.

Other options:
- callback hell (done inside of done, inside of a done, inside of a done..)

![image](http://icompile.eladkarako.com/wp-content/uploads/2016/01/icompile.eladkarako.com_callback_hell.gif)

## What is a promise?
- A promise is an **object** that represents a one-time event, typically the outcome of an async task.
- A promise represents a value that may not be available yet.

### What is a jQuery Promise?
- Together with the Promise object, `Deffered` represents the jQuery implementation of promises. A **jQuery promise** is actually a subset of a [deferred object](https://api.jquery.com/category/deferred-object/). This means `.promise()` is one of many methods of `Deferred`, and the promise will execute when the deffered collection is complete.
- Conceptually: Promise is a result that is not yet known, and a deferred is work that is not yet finished.
- A deferred object is an object than can create a promise and lets the owner change its state to resolved or rejected.


![image](https://m.popkey.co/a11cb1/g3yQ6_s-200x150.gif)

### Why Deferred AND Promises?!
- Deferreds are used under the hood in Ajax -- no need to memorize this stuff, just know it exists and understand some behavior.

- A Defer has two important methods `resolve`, `reject`, and a property called `promise`.

jQuery provides a number of methods for the promise object including:

- $.done() = promise is resolved
- $.fail() = promise is rejected
- $.when() = for waiting on multiple deferreds to resolve
- $.then() = the core of ES6 promises, most commonly used method for promises outside of jQuery

![image](http://i1.wp.com/www.vasanthk.com/wp-content/uploads/2015/03/promises1.png)

![what](https://2.bp.blogspot.com/-UniMKjKV0t8/VGEPY4bdcqI/AAAAAAAAFos/sNvgsIhQDZE/s1600/Blink.gif)
> .......... WHAT?


## Instructions

### Part 1: Understanding Deferred

Confusing?? Let's make sense of these concepts. Let's get to understand the behavior of the Deferred and Promises objects, beginning with Deferred.

1. In `promises.js`, in line 9, replace `deferred.resolve()` with `deferred.reject()`. Save your file, and refresh your browser at `promises.html`. Click the `button 1`. What happens?

  > Button 1 Answer

2. Where is this alert coming from? (What line from `promises.js`?)

  > Button 1 Answer

3. Now let's test Button 2: In `promises.js`, change line 9 to `deferred.reject("Oops something happened.")`. Save your file, refresh your browser at `promises.html`. Click button 2. What happens?

  > Button 2 Answer

4. Where is the console log coming from? (what line?)

  > Button 2 Answer

5. Now, comment out line 9 completely: `//  deferred.reject();`. Save your file, and refresh your browser at `promises.html`. Click either button. What happens? Why do you think that is?

  > Answer Here

6. Let's restore line 9 back to `deferred.resolve()` and save.

7. In `promises.js` in line 13 comment out `return deferred.promise()`. Save your file and refresh your browser at `promises.html`. What's the error message? What line is the error pointing to?

  > Answer Here

What does `return deferred.promise()` do?

  > Answer Here (hint: literally what it says)

### Part 2: Understanding Promises

1. In `promises.js`, switch lines 46 and 48 (`animateBox2` and `animateBox3`). What do you think will happen? Save your file, and refresh your browser. Click button 1. What happens? Is it what you thought?

  > Answer Here

2. In `promises.js`, line 56, remove `, animateBox3()`. What do you think this will do? Save your file and refresh your browser. Click button 2. What happens? What does `$.when()` seem to do?

  > Answer Here

3. Modify the function inside `.then()` on lines 57-58 so that the 3rd box will animate AFTER the first two finishes animating. Remove the alert.

4. In lines 45-49, change all the `.then` to `.done`. Save your file, and refresh the browser. Click button 1. What happens?

  > Answer Here

### Part 3: Your Turn!

REPS: It's your turn to play around with jQuery animate, deferred, and promises. In `script.js`, you are provided with
  - animateBox(): animates Box 1 and returns a promise
  - executeAfterAnimation(): simply pops an alert window
  - animateBox() is invoked as soon as the page loads

Write your code in `script.js` so that the boxes move in the following order, only after the previous has finished:
  - Box 1, Alert, Box 6, Box 4, Alert, Box 5, Box 2, Box 3
  - include a `catch` that logs "Error!" in case there's an error
  - **Have fun** with the animate to get a better feeling about async + jQuery (doesn't have to be left: 500px, or 3000ms timing)


#### Resources:
[jQuery deferred objects](https://www.sitepoint.com/introduction-jquery-deferred-objects/)
