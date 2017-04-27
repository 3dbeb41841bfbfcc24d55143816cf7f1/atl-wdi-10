---
title: Data Types, Variables, and Arrays
type: lesson
duration: '1:25'
creator:
    name: Alex Chin, Gerry Mathe
    Adapted for WDIr: Maren Woodruff
    city: London
    competencies: Programming    
---

# JS Data Types

### Table of Contents

- [What is a data type?](#data-type)
    - [Two ways to Javascript - Code along](#running-javascript)
    - [typeof](#typeof)
    - [Numbers](#numbers)
    - [Arithmetic Operators](#operators)
    - [Special Number Operators](#special-operators)
    - [Strings](#strings)
    - [String Helper Methods](#string-helper-methods)
- [String Concatentation and Coercion](#string-concat)
    - [Converting Strings to Integers with parseInt() and parseFloat()](#string-to-int)
    - [NaN](#nan)
- [Variables - Codealong](#var-and-keywords)
    - [Assignment Operators](#ass-ops)
- [Conclusion](#conclusion)

### Objectives
*After this lesson, students will be able to:*

- Describe the concept of a 'data type' and how it relates to variables
- Describe use cases of different 'data types'
- Declare, assign to, and manipulate data stored in a variable
- Describe how arrays are used to store data
- Manipulate values in an array

### Pre-requisites
*Before this lesson, students should already be able to:*

- Have basic understanding of Javascript
- Completed WDI fundamentals
- Construct and verbalize the syntax of the datatypes covered today
- Be comfortable with a text editor

## Hook- The puzzle pieces fall in place. (2m)

![Klimt's, The Kiss](https://i.imgur.com/1EOSuCm.jpg)

<br />

<!-- I am a huge [Gustav Klimt](https://i.imgur.com/1EOSuCm.jpg) fan.  I actually created a reproduction of this piece, _The Kiss_, by Klimt for our turquoise living room wall.  I also love puzzles.  This is part of why I love development, as I think of every problem as a puzzle and work on bite-sized pieces as I go along.  My family gave me this puzzle for Christmas, combining two of my loves. -->

Today, we are going to look at **primitive** data types in JavaScript, of which there are 6- 
    - strings
    - booleans
    - numbers
    - null
    - undefined
    - symbols (new in ES2015- we will discuss ES2015 next Friday) 
We will continue onto **complex** data types on Monday.

<br />

## YOU DO (10m)

Take 10 minutes and read through the first chapter of Eloquent JavaScript:

http://eloquentjavascript.net/01_values.html

**Give me a thumbs up when you're done.**

<br />

## <a name="history">JavaScript- A History (3m)</a>

**The Browser Wars**
In 1995, Netscape and Microsoft were warring for best browser.  In order to combat this, Brendan Eich, a Netscape employee, created JavaScript in 10 days.  The goal was to create a lightweight, interpreted language for non-programmers.  In order to keep up with the times, Microsoft later adopted the language, but called it JScript.

By 1997, JS was used in every browser, and by millions of people.  But there were no standards in place, or even an overriding language. Each browser rendered JavaScript/JScript differently, and therefore every website differently.  This made it extremely time consuming and costly to try to make your site render the same on every browser. 

JavaScript/ECMAScript 3 was standardized and released in 1999 by **ECMA International** (the European Computer Manufacturers Association), which is a foundation that creates standards in technology and on the web.  Netscape and Microsoft agreed to call JavaScript, ECMAScript, and you will hear the two used interchangeably.

<br />

## <a name="data-type">What is a data type? Intro (5m)</a>

**QUESTION: In your own words, what is a data type? What are some examples?**

From the [Wikipedia](https://en.wikipedia.org/wiki/Data_type):

_In computer science and computer programming, a data type or simply 'type' is a classification identifying one of various types of data that determines the possible values for that type, the operations that can be done on values of that type, the meaning of the data, and the way values of that type can be stored._  

Data types are very similar across different languages:

This means that being confident in working with these concepts critically, will enable you to walk into any programming language with some base knowledge that is translatable.

| Data Type | Description | Example |
| --- | --- | --- |
| Strings | Single words or sentences or characters, surrounded by double or single quotes.  | `'lots of kittens'` |
| Integers | Whole numbers. | `42`, `1024` |
| Floats | Decimals. | `3.14`, `3.0` |
| Booleans | Represents either true or false | `true`, `false` |

We will elaborate on all of these - except Booleans, for now. We will talk about how they behave in JavaScript, show you some helper methods to use with each type, and then practice these helper methods to manipulate data using JavaScript.  

---

## <a name="running-javascript">Two ways to Javascript - Code along (20m)</a>

We have two ways to run Javascript... by running a script or by entering the `node` environment in the Terminal. _We're going to introduce two more ways to do it in Chrome next week._

### Running Javascript from the `node` environment in the Terminal

In your terminal run `brew install node`

For this lesson, we're going to use the **Node REPL** in the terminal.
    - Does everyone know what REPL means?
    - It stands for, read-evaluate-print-loop.  It is a programming environment that takes user input, evaluates it and returns the result.

1. `$ brew install node`
2. Once you have node installed you can run `$ node` and it will open up a JavaScript REPL
3. Type ^C (control + C) **twice** to exit. **This is important to remember!!**


### Running a JavaScript file

1. `cd ~/Desktop/ga/class-exercises`
2. `mkdir intro-to-javascript`
3. `cd intro-to-javascript`
4. `touch test.js`
5. `subl .` (Make sure to click on the file on your left hand tab before adding step 6).
6. Add the line `console.log('Hello, friends!');`
7. Save that file.
8. Run `node test.js` in the Terminal. (You need to be in the intro-to-javascript folder in your terminal).

With this command, node will run the file `test.js` and the function `console.log()` will log whatever value is passed into the console (the terminal).

#### <a name="typeof">typeof()</a>

To get an idea of the type of the data types we are working with, we can use the [`typeof()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) method.  Let's try it out in the console with the following:

```js
typeof(37);
=> 'number'

typeof(37) === 'number';
=> true

typeof('hi there');
=> string

typeof('hi there') === 'string';
=> true

```

**The `typeof()` method returns a string with the type of the operand, or expression of the object to which you are looking.**


#### <a name="numbers">Numbers</a>

In some languages, numbers are divided into two data type sets:

* Integers (or whole numbers)

```js
   ..., -1,0, 2, 3, 4, 5, ...
```

* Floats (or decimal numbers)

```js
2.718, 3.14, .5, .25, etc.
```

In JS, both Integers and Floats are of type Number.

<br />

### <a name="operators">Arithmetic Operators</a>

**Operators** are used to work with data in JavaScript. The standard [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators) - that you have been learning since grade school, are supported- including addition(+), subtraction(-), modulus (or the remainder)(%), multiplication( * ), exponents( ** ) and division(/).  

Try these statements in your console:

```js
// Addition
1 + 2
=> 3

// Subtraction
2 - 5
=> -3

// Division
5 / 2
=> 2.5

// Multiplication
6 * 2
=> 12

// Modulus
6 % 2
=> 0

5 % 2
=> 1
```

<br />

![Imgur](http://i.imgur.com/ylb6WX9.gif)
(That is a super fancy way of saying 'you do')

**EXERCISE**: Take 5 minutes to play with your arithmetic operands in the Node REPL (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators). Try the operators we just covered, but don't limit yourself to just single digits. See if you can break it or get unexpected behavior.

<br />

---

## <a name="special-operators">Special Number Operators</a>

We have seen that JavaScript allows us to perform simple arithmetic functions, but what about more complex functions like square roots or exponents?

* Like taking a number to some `power`? You can just use [Math.pow(x, y)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow).

```js
// 3^2 becomes
Math.pow(3, 2);
=> 9

// 2^4 becomes
Math.pow(2, 4);
=> 16
```

* Taking a square root- [Math.sqrt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)

```js
// √(4) becomes
Math.sqrt(4);
=> 2
```

* Need a `random` number? You can use [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

```js
// The following only returns a random decimal between 0 and 1.  It is inclusive of 0 and not inclusive of 1.
Math.random()
=> .229375290430

/*
The following will return a
random number between 0 and 10
*/
Math.random() * 10;
```

* Since JavaScript Numbers can be **Floats** or **Integers** we often want to get rid of remaining decimal places, which can be done using [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).  Math.floor will always round down to the nearest whole number.

```js
// Remove the decimal
Math.floor(3.14)
=> 3

Math.floor(3.9999)
=> 3
```

<br />

![Imgur](http://i.imgur.com/ylb6WX9.gif)

**EXERCISE**: Take 3 minutes to look at the [Math documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) and pick a function to quickly explain to the class. We will then popcorn around the room. Each person will get 30 seconds to explain what their function is/does. Don't worry if you chose the same one as someone else. Repetition leads to retention!

1. Go to the [Math documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
2. Pick out a Math method that we didn’t cover.
3. Come back and share!

<br />

---

### <a name="strings">Strings</a>

[Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) are collections of letters and symbols known as *characters*, and we use them to handle words and text in JavaScript. Strings are a data type in Javascript.

```js
'John'
'Jane'
'123'
```

**SIDENOTE**: When do we want to use double quotes vs single quotes?

- For the most part, it doesn't matter.  Most developers use single quotes because we type all day, and we are lazy.  The only time you might think about it is when you are using a contraction.  You can either use double quotes for the string and single quotes inside, or you have to escape (\) the single quote in your contraction.

#### <a name="string-helper-methods">String helper methods</a>

To find the length of a string, use the [str.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) property:

```js
'hello'.length;
=> 5
```

Strings have other [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods) as well, that allow you to manipulate the string and access information about that string like:

- [str.charAt(index)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [str.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [str.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

```js
// .charAt() returns the character at the specified index in a string
'hello'.charAt(0);
=> 'h'

// .replace() will replace the first string with the second string
'hello, world'.replace('hello', 'goodbye');
=> 'goodbye, world'

// .toUpperCase() will make the entire string uppercase
'hello'.toUpperCase();
=> 'HELLO'
```

## <a name="string-concat">String Concatentation and Coercion</a>

What if we want to turn two or more strings into one string?  We use the same operator for turning two or more numbers into one number, i.e. the addition sign:

- 5 + 5 results in 10
- 'hello ' + 'world' results in 'hello world' (notice the space after hello)

JavaScript allows us to add two strings or variables together like so:

```javascript
'hello' + 'world';
=> 'helloworld'
```

```javascript
var greeting = 'greetings';
var earth = 'earth';
greeting + earth;
=> 'greetingsearth'
```

What is wrong with this result?

The strings store text, but we also need to be able to account for spaces. This results in a sort of inelegant solution, where we have to remember to add a space to one of our strings.

```javascript
// note the space!
'hello,' + ' world'; 
=> 'hello, world'
```

OR

```javascript
var greeting = 'greetings';
var earth = 'earth';

// note the space!
greeting + ", " + earth;
=> 'greetings, earth'
```

The newest version of **ES6** gives us a more elegant pattern for **string interpolation** using a **template strings**.

Rather than single quotes, we use back ticks **(`)**, which can be found in the top left hand corner of your keyboard, under your tilda.

```javascript
var greeting = 'greetings'
var earth = 'earth'

`${greeting}, ${earth}.`;
=> 'greetings, earth.'
```

```javascript
var salutations = 'salutations';
var name = prompt("Please tell me your name."); // Maren

`${salutations}, ${name}.`
=> 'salutations, Maren.'
```

- With template strings, you can add your variables into this interpolated syntax-  ${variable}, and JavaScript will interpret it.  Template strings also allow you to mix strings and variables without having to use multiple plus signs.

<br />

![Imgur](http://i.imgur.com/ylb6WX9.gif)

**EXERCISE**: Take 2 minutes to concatenate strings using both the concatentation/`+` method and using template strings.

What happens if we add a string to a number? Take 15 seconds and try it in Node.

```javascript
var a = 42;

var b = a + '';       // implicit coercion

var c = String(a);    // explicit coercion
```

- In JavaScript, when you add a string and a number together, JavaScript automatically converts the number into a string (implicit coercion).  

<br />

---

## <a name="string-to-int">Converting Strings to Integers with parseInt() and parseFloat()</a>

### parseInt()

You can convert a string to an integer using the built-in [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) method. This takes the 'base' for the conversion as an optional second argument:

```javascript
parseInt('123');
=> 123

parseInt('010', 10);
=> 10
```

This will be important later when we are taking user input from the web or from the command line and using it on our server or in our browser to do numeric calculations.

### parseFloat()

Similarly, you can parse floating point numbers using the built-in [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) function which always uses base 10, unlike its `parseInt()` cousin.

```javascript
parseFloat('11.2');
=> 11.2
```

You can also use the [unary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators) `+` operator to convert values to numbers:

```javascript
+'42';
=> 42
```
<br />

![Imgur](http://i.imgur.com/ylb6WX9.gif)

**EXERCISE**: Let's take three minutes to use `parseInt()` and `parseFloat()` in our node REPL.

<br />

---

### <a name="nan">NaN</a>

The `parseInt()` and `parseFloat()` functions parse a string until they reach a character that is not valid for the specified number format, then return the number parsed up to that point. However the **'+'** operator simply converts the string to `NaN` if there is an invalid character in it.

A special value called [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) (short for 'Not a Number') is returned if the string is non-numeric:

Username example:

```javascript
parseInt('colin1990');
=> NaN

// be careful when using parseInt() because if JS sees a number, it will only parse the number part of your string, and disregard the rest.
parseInt('1990colin');
=> 1990
```

You can only test for `NaN` using the built-in [`isNaN()`](ttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) function:

```javascript
isNaN(NaN);
=> true
```

JavaScript's numeric operators are `+`, `-`, `*`, `/` and `%`. All of these operators work as you expect and should have practiced during your pre-work.

<br />

### Null and Undefined

JavaScript distinguishes between:

- `null` is a value that indicates a deliberate non-value.  In JavaScript, null is nothing.  But if you checked the type of null, it would be an object.  This is one of JavaScript's quirks.

- `undefined` indicates an uninitialized value — that is, a value/variable hasn't even been assigned yet.  If you wrote `var greeting;`, because you have not assigned it a value yet, it would equal `undefined`.

---

## <a name="var-and-keywords">Variables (10m)</a>

Variables are used to store data types in the memory of the computer, so that they can be referenced later.

### Always use var!

New variables in JavaScript are declared using the [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var '/en/JavaScript/Reference/Statements/var') keyword.

If you declare a variable without assigning any value to it, its type is `undefined`.

```javascript
var a;
=> undefined
```

So, let's try assigning a value to variable:

```javascript
var name = 'Maren';
=> undefined

name;
=> 'Maren'
```

Having created a few expressions, it becomes evident that we need to store these values.

```javascript
var myNumber = 1;
```

**SIDENOTES: Always Use camelCase**

The main takeaway here is that new variables should always start with the `var` keyword and that names should always use `camelCase`.  Without using the var keyword, you will create global variables.

<br />

### <a name="ass-ops">Assignment Operators</a>

Values are assigned using `=`. 

<br />

Compound assignment statements are also available, such as `+=` and `-=`.  Compound operators make your code more concise and more dry:

```javascript
var x = 1;
=> 1

x += 5;
=> 6
```

The long way of writing this without the compound operator would be:

```javascript
var z = 1;
=> 1

z = z + 5;
=> 6
```

You can also use `++` and `--` to increment and decrement variables, respectively. These can be used as prefix or postfix operators.  The difference is this:

```javascript
var a = 1;
=> 1

var b = a++;
=> 1

a;
=> 2

b;
=> 1
```

OR

```javascript
var c = 1;
=> 1

var d = c--;
=> 1

c;
=> 0

d;
=> 1
```

If you add the increment/decrement after the assignment/postfix, it will only change the/increment first variable.  The assignment happens before the increment happens.  If you add the increment/decrement before the assignment, both variables will change.

```javascript
var e = 1;
=> 1

var f = ++e;
=> 1

e;
=> 2

f;
=> 2
```

OR

```javascript
var g = 1;
=> 1

var h = --g;
=> 1

g;
=> 0

h;
=> 0
```

In Javascript, when you are working with different data types, you also have access to helpful methods.

* If you want to turn a number into a string you can use a method called [toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).

```javascript
(1).toString()
=> '1'

/**
be careful though,
since numbers can be floats
javascript might
misunderstand you.
*/

1.toString();
=> SyntaxError

// but the following works
1..toString();
```

<br />

## <a name="conclusion">Conclusion (5m)</a>

- Describe use case for each primitive 'data types'.
    - strings
    - numbers
    - booleans
    - null
    - undefined

- Why is iterating important when working with stored data?

Feel free to read more from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) about JavaScript fundamentals.

---

## Independent Practice
- Coffee Grinder - http://goal-keeper-snake-48368.bitballoon.com/
- http://eloquentjavascript.net/

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
