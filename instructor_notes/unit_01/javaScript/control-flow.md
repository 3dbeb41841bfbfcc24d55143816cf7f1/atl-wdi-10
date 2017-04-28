---
title: Mastering Control Flow
type: lesson
duration: "1:25"
creator:
    name: Gerry Mathe
    city: London
competencies: Programming

---

# Mastering Control Flow

### Objectives
*After this lesson, students will be able to:*

- Differentiate between true, false, 'truth-y', and 'false-y'
- Use if/else conditionals to control program flow based on boolean conditions
- Use switch statements to control program flow based on explicit conditions
- Use comparison operators to evaluate and compare statements
- Use boolean logic (!, &&, ||) to combine and manipulate conditionals

### Preparation
*Before this lesson, students should already be able to:*

- Create Variables in javascript
- Use a text editor

---

## Hook (5m) 
[The Road Not Taken](https://www.poetryfoundation.org/resources/learning/core-poems/detail/44272), by Robert Frost

Life is made up of choices.  
- What should I wear today?
- What should I eat for breakfast?
- Should I go for a run this morning or attend that dance class later?

You made a choice to stop what you were doing for a career, and join this class.  And cheers to you for making that decision.

Our computers, however, do not have the ability to reason on their own.  We have to think about how we are going to fit the pieces together.  And tell our programs exactly what they need to do.

Much like a cookie recipe, we can add all of the ingredients together without beating the sugar and butter for 5 minutes, without sifting the dry ingredients, or without chilling the batter before we bake our cookies, but they won't turn out as delicious.  Maybe they are too crunchy, or too hard.  There are certain steps/processes that we need to take in order to have people ask for the recipe. [Here are some tips for better cookie making](https://www.craftybaking.com/learn/baked-goods/cookies/problems-and-solutions), but for now, we will get back to programming.

When we create programs, we need to code specific instructions that tell our program what to do should a certain sitation arise.  **Control Flow statements**- like if/else statements, switch statements, while or do-while loops, are what we use in JavaScript to help our programs make choices and follow the correct path.  

<br />

---

## Logical operators and control flow (10m)

JavaScript supports a compact set of statements/control flow statements, that you can use to incorporate a great deal of interactivity and decision making into your application.

**YOU DO:** 

Take 10 minutes and read this: 

http://eloquentjavascript.net/02_program_structure.html

**Give me a thumbs up in Slack when you're done.**

<br />

---

### What is Control Flow?

<br />

![control flow diagram](https://dhhmzgirqh63s.cloudfront.net/1952.gif)
<!-- ![Funny Flow Chart](https://www.laserfiche.com/content/uploads/2014/03/engineering-flow-chart.png) -->

[Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) is a fundamental concept in programming that allows you to dictate how your code runs under different conditions or until a certain condition is met. 

### Block Statements

**Block statements** group together statements that are meant to be executed after a control flow expression. These statements are wrapped between a pair of curly braces:

```javascript
{
  console.log("hello");
  console.log("rawr");
}
```

### Block scope

We have seen that the scope in JavaScript changes often. In the case of **block statements**, there is no scope.  Therefore, if you use a variable with the same name in and outside of your block, the variable will be overwritten, as seen in the example below.

```javascript
var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2
```

Only **functions** introduce scope in Javascript.  Does everyone understand what [scope](https://scotch.io/tutorials/understanding-scope-in-javascript) means?  It is basically the accessibility of variables.

---

## Conditional Statements (10m)

**Conditional statements** are a way of essentially skipping over a block of code if it does not pass a boolean expression/if that expression is not true. JavaScript supports two conditional statements: `if`...`else` and `switch`.

### if...else statement

##### if...else basic syntax
```javascript
if (expression) { 
    // code to execute
}
else {
    // code to execute
}
```

which means: run the first block of `code` if the `expression` is `true`, else, run the second block of code.  Notice that you don't add an expression after an `else`.  It is the default, and will be run if all other conditions fail.

```javascript
var name = "Maren";

if (name === "Maren") {
    console.log("hi, " + name);
}
else {
    console.log("bye");
}
//=> hi, Maren
```

When you need to test more than one expression/conditional, you can use an `else if` statement:

```javascript
var favoritePet = "puppies";

if (favoritePet === "puppies") {
  favoritePet += "!!!";
} else if (favoritePet === "kittens") {
  favoritePet += "!!";
} else {
  favoritePet = "My favorite pet is not a kitten or a puppy.";
}

alert(favoritePet);
//=> 'puppies!!!'

favoritePet === "puppies!!!";
//=> true
```

**PRO TIP**: Always finish your if statements with an else.  You never know when you will need it, and it could save you.  Even if you never expect to hit that else, it should be there.

Can anyone explain why we used three equal signs in the example above?  What is the difference between three equal signs, and two?

**WARNING**: It is highly recommended that you **do not** assign variables in the conditional expression, because the assignment of a value to a variable, like this:

```javascript
if (student = "Jamie") {
    console.log("Jamie");
}
else {
    console.log("This student is not Jamie.");
}
//=> "Jamie"
```

will **always** be true.  

The expression above will return the value (as shown on the second line). If you assign a truthy value inside of a conditional statement, then the condition will always be true, and no other conditions will ever be tested.  If you assign a variable something undefined, it will make the conditional statement false (because undefined is falsey). 

The example above is an illustration of **WHAT NOT TO DO**, in general.

### Ternary Operator

JavaScript also has a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) for conditional expressions. You can think of the ternary operator as a concise "if-else statement, on one line":

```javascript
expression ? this will run if it is true: this will run if it is false;

true ? console.log("it is true"): console.log("it is false");
//=>  "it is true"
false ? console.log("it is true"): console.log("it is false");
//=> "it is false"

var age = 12;
//=> undefined

var allowed = (age > 18) ? "welcome to the club" : "try again when you are over 18";
//=> undefined

allowed;
//=> "try again when you are over 18"
```

<br />

---

### YOU DO - Exercises (10m)

Goto [repl.it](https://www.repl.it/) to complete the following exercises.  Click on the 'Search for a Language' section and choose JavaScript, and it should open up a new repl in that same window.

1. Write a script that prompts the user for their current mood. If the user inputs `happy`, print 'Yay me too!' to the console, `sad` print 'Aw cheer up', else print 'So moody!'.


2. Use conditionals to check if a hardcoded number is `odd` or `even`, and then `console.log` the number is `odd` or `even` with the numbers value.

```javascript
// write a number here
var num = ;

// write your conditions here
```

3. Use conditionals to check if a hardcoded number is divisible by `2` or  `3` and then `console.log` that the number is divisible by two or three.

```javascript
// write a number here
var num = ;

// write your conditions here
```

4. Use conditionals to check if a hardcoded `quantity` is `1` or greater than one. If the `quantity`  is one or greater `console.log` either `1 pet` or `quantity + " pets"` respectively.

```javascript
// write a number here
var quantity = ;

// write your conditions here
```

(There are solutions at the bottom of this lesson.)

<br />

---

## Truthy & Falsey (10m)

### Falsey in JavaScript
All of the following become false when converted to a Boolean

- `false`
- `0`
- `""` (empty string)
- `NaN` (not a number)
- `null`
- `undefined`

### Double negative in JavaScript

There is a simple way of verifying the truthiness or falsiness of a value. When you add `!` in front of a value, the returned value will be the inverse of the value in a boolean. So if you add two `!` then you'll get the boolean value of the original one:

```javascript
!!true
//=> true

!!1
//=> true

!!-1
//=> true

!!false
//=> false

!!0
//=> false

!!""
//=> false

!![]
//=> true

!!{}
//=> true
```

A double bang(!!) may be used in development to change a variable into a boolean.

<br />

## Boolean/Logical Operators (5m)

[Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

Logical operators will always return a boolean value `true` or `false`.

There are two "binary" operators that require two values:

- **AND**, denoted `&&`
- **OR**, denoted `||`

A third "unary" operator requires only one value:

* **NOT**, denoted `!`

#### && (AND)

The `&&` operator requires both left and right values to be `true` in order to return `true`:

```javascript
true && true
//=> true
```

Any other combination is false.

```javascript
true && false
//=> false

false && false
//=> false
```

#### || (OR)

The `||` operator requires just one of the left or right values to be `true` in order to return true.

```javascript
true || false
//=> true

false || true
//=> true

false || false
//=> false
```

Only `false || false` will return `false`

The `!` takes a value and returns the opposite boolean value, i.e.

```javascript
!(true)
//=> false

!(false)
//=> true
```

The `&&` and `||` operators use short-circuit logic, which means that executing their second operand depends on whether the first is true of false. This is useful for checking for null objects before accessing their attributes:

##### The And `&&` operator

```javascript
var yourName = prompt('What is your name?');

var name = yourName && (yourName === "Princess Leia");
// If the user doesn't answer your prompt with 'Princess Leia', the variable name will be false.
// If the user's name is 'Princess Leia', the variable name will be true
```

As stated above, when using the `&&` operator, the expression will be true only if both operands are true.  If either operand is false, when using the `&&` operator, the whole expression will be false.  The expression is basically saying "we already know the whole `&&` expression is false, because `yourName` is truthy. Why bother dealing with the second operand?" 

So, if your user enters a name, and it is not equal to 'Princess Leia', the variable name will be false.  If the name that your user enters is 'Princess Leia', the variable name will be true.

##### The Or `||` operator can be used to set default values:

```javascript
var yourName = prompt('What is your name?');

var name = yourName || "Princess Leia";
// if your user doesn't type anything into the prompt, the variable name will default to 'Princess Leia'
// otherwise, the variable name will be set to yourName
```

If you use the `||` operator, the expression will be false, only if both operands are false.  If either operand is true, when using the `||` operator, the expression will be true.

So, if the first operand `yourName` is false, then the variable name will be set to "Princess Leia". If `yourName` is truthy (e.g. it contains a value), the variable name will be set to the value of yourName, and the second expression won't get evaluated. 

The expression is basically saying "we already know the whole `||` expression is true, because `yourName` is truthy. Why bother dealing with the second operand?"

---

## Comparison Operators (10m)

[Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`. These work for both strings and numbers. This is both useful, and can be the source of frustration for some developers as most languages do not implicitly convert strings to numbers the way that JavaScript does.

```javascript
12 > "12";
//=> false

12 >= "12";
//=> true
```

#### Equality Operator `==`

Equality is a bit more complex. There are 2 ways in JavaScript to verify equality, with a double equals(==) or a triple equals(===).

When verifying equality using the double equal sign(`==`), JavaScript does a lot of the "type coercion" in the background. Like we mentioned above, if the operands have a different type (i.e.: the number `12` and the string `"12"`), JavaScript will try to change the type of both operands to check whether they are equal. This means that a lot of times, expressions will return equal more easily than if we were stricter about what things were equivalent. Some examples:

```javascript
"dog" == "dog";
//=> true

12 == "12";
//=> true

true == "true";
//=> true
```

#### Equality Operator `===`

To avoid type coercion and measure equality more strictly, **use the triple-equals operator**. Because `===` measures strict equality, we will use this far more often when checking whether two things are, in fact, the same thing.  It makes sure that the operands are the same, and also that the type is the same.  It is a best practice to use strict equality.

> **Note:** "Sameness" and "equality" have various definitions and can be somewhat "fuzzy". They can also differ in programming languages. Because you will often be measuring whether two things are equal, you should investigate the way this works carefully.

Some examples:

```javascript
"dog" === "dog";
//=> true

12 === "12";
//=> false

true === "true";
//=> false
```

However, there are some times when this will not do what we expect, for example when working with empty objects or arrays:

```javascript
{} === {}
//=> false

[] === []
//=> false

[1,7] === [1,7]
//=> false
```

**Explanation**

The examples above fail equality tests because both **object literals** and **arrays** are objects, and not just "primitive" values like strings, numbers, and booleans. Objects and arrays are complex collections of values, and when we refer to them, we are actually referencing where they live in memory. That is why we call them "reference types," while things like strings and numbers are "value types."

What this means is that when we compare two objects or arrays with `===`, JavaScript doesn't care if they look like similar collections. It only compares whether or not they are the exact same object in memory. In each of the cases above, when checking for equality, we're actually comparing two objects that are in two different places in memory. They are not exactly "the same", and will therefore return false when compared.

#### != and !==

There are also `!=`(not equal) and `!==`(strict not equal) operators, which are the negative versions of `==`(equals) and `===`(strict equals).

** If you are still confused by the difference between `==` and `===` review MDN's notes on [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_()) and [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity_strict_equality_())**

---

## Switch Statement (5m)

The **switch statement** should be used, instead of an if/else statement, if you are comparing multiple things (more than three or more than four):

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.

```javascript
var food = "apple";

switch(food) {
  case 'pear':
    console.log("I like pears.");
    break;
  case 'apple':
    console.log("I like apples.");
    break;
  case 'chocolate cake':
    console.log("I like beautiful chocolate cake.");
    break;
  default:
    console.log("I'm more of a strawberry shortcake fan myself.");
}
//=> I like apples
```

In this case, the `switch` statement compares the variable `food` to each of the "cases" (`pear` and `apple`), and evaluates the expressions beneath them if there is a match. It uses `===` to evaluate equality.

The default clause is optional, but just like an else statement, it is highly recommended.
<!-- #### Example

The .getDay() method returns the weekday as a number between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 ..)

Use the weekday number to calculate the weekday name:

```js
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        console.log("Waldo, you shouldn't be here.");
}
``` -->

- When the JavaScript code interpreter reaches a "break" keyword, it breaks out of the switch block.

- This will stop the execution of case testing inside of the block.

- When a match is found, the job is done, and it's time for a break.
There is no need to do more testing.

#### What is faster a switch statement or an if/else statement?

Note that for an if-else statement, the variable being checked is reloaded for the comparison every single time. The switch-case structure loads the variable one time, and proceeds to perform the series of comparisons. 

Use 'if' instead of 'switch' when:

- You want to test for the truthiness of an expression.
- You only have a single affirmative test.

For further discussion: http://www.blackwasp.co.uk/SpeedTestIfElseSwitch.aspx

---

## Conclusion (5m)
These are some of the foundational tools you will use in the majority of your applications. You will probably need to go over the syntax a few times before you memorize it, but it is important to be able to remember these core "control flow" concepts, in general, because they will come up in pretty much every programming language you will ever encounter.

- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [While](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

---

## Independent Practice
- [Choose Your own Adventure](https://github.com/ATL-WDI-Curriculum/atl-wdi-10/blob/master/labs/unit_01/javaScript/choose-your-own-adventure)

- [Control Flow Lab](https://github.com/ATL-WDI-Curriculum/atl-wdi-10/blob/master/labs/unit_01/javaScript/control-flow-practice.md)

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

---

## Solutions to the **YOU DO** exercises

#### 1.
```js
var mood = prompt("What is your mood?");

if (mood === 'sad') {
    console.log('hrmph');
} else if (mood === 'happy') {
    console.log('YOWZA!');
} else {
    console.log('not impressed');
}
```

#### 2. 
The only difference is that I used prompts instead of hard coded values.

```js
var num = prompt("Please type in a number");

if (num % 2 === 0) {
    console.log("The number " + num + ", is even.");
} 
else {
    console.log("The number " + num + ", is odd.");
}
```

#### 3. 
```js
var num = prompt("Please type in a number");

if (num % 2 === 0 || num % 3 === 0) {
    console.log("The number " + num + ", is divisible by 2 or 3.");
} 
else {
    console.log("The number " + num + ", is not divisible by 2 or 3.");
}
```

OR

```js
var num = prompt("Please type in a number");

if (num % 2 === 0 && num % 3 === 0) {
    console.log("The number " + num + ", is divisible by 2 and 3.");
} 
else if (num % 2 === 0) {
    console.log("The number " + num + ", is divisible by 2.");
} 
else if (num % 3 === 0) {
    console.log("The number " + num + ", is divisible by 3.");
} 
else {
    console.log("The number " + num + ", is not divisible by 2 or 3.");
}
```

#### 4. 
```js
var quantity = parseInt(prompt("Please type in a number"));

if (quantity === 1) {
    console.log("1 pet");
}
else {
    console.log(quantity + " pets");
}
```

**TIP**: You need to parseInt() the prompt because it will return a string. The parseInt() method turns a string into a number.  Otherwise, you would need to check that `quantity === "1"` or `quantity == 1`.  

How would you turn a number into a string?
