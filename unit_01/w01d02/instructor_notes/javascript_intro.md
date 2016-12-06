---
title: Data Types, Variables, and Arrays
type: lesson
duration: '1:25'
creator:
    name: Alex Chin, Gerry Mathe
    Adapted for WDIr: Colin Hart, Marc Wright
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

## YOU DO

Take 10 minutes and read through this:

http://eloquentjavascript.net/01_values.html

**Give me a thumbs up in Slack when you're done.**

<br>

## <a name="data-type">What is a data type? Intro (5 mins)</a>

**QUESTION: In your own words, what is a data type? What are some examples. Type your answers into Slack.**

From the [Wikipedia](https://en.wikipedia.org/wiki/Data_type):


_In computer science and computer programming, a data type or simply 'type' is a classification identifying one of various types of data that determines the possible values for that type, the operations that can be done on values of that type, the meaning of the data, and the way values of that type can be stored._  

Data types are really similar across different languages:

What this means is that being confident in working with these concepts critically will enable you to walk into any programming language with some base knowledge that is translatable.

| Data Type | Description | Example |
| --- | --- | --- |
| Strings | Single words or sentences or characters, surrounded by double or single quotes.  | `'lots of kittens'` |
| Integers | Whole numbers. | `42`, `1024` |
| Floats | Decimals. | `3.14`, `3.0` |
| Booleans | Represents either true or false | `true`, `false` |

We'll elaborate on all of these - except Booleans, for now. We'll talk about how they behave in JavaScript, show you some helper methods to work with each type, and then practice these helper methods to manipulate data using JavaScript.


## <a name="running-javascript">Two ways to Javascript - Code along (20mins)</a>


We have two ways to run Javascript... by running a script or by entering the `node` environment in the Terminal. _We're going to introduce two more ways to do it in Chrome next week._

#### Running Javascript from the `node` environment in the Terminal

In your terminal run `brew install node`

For this lesson, we're going to use the Node REPL in the terminal.

1. $ `brew install node`
2. Once you have node installed you can run $`node` and it will open up a JavaScript REPL
3. ^C (control + C) twice to exit.


#### Running a Javascript file

1. `cd ~/Desktop`
1. `touch test.js`
2. `atom test.js`
2. Add the line `console.log('hello world!')`
3. Save that file.
4. Run `node test.js` in the Terminal.

Node is running the file `test.js` and the function `console.log()` will log whatever value is passed in to the console (the terminal).

(Project non-specific binaries can be run from any directory!)

#### <a name="typeof">typeof()</a>

To get an idea of the type of data we're working with, we can use [`typeof()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).  Let's try it out in the console with the following:

```js
typeof 37
=> 'number'

typeof 37 === 'number';
=> true

typeof 'hi there'
=> string

typeof 'hi there' === 'string';
=> true

```

`typeof()` returns a string with the type of the operand, or expression of the object you're looking at.  


#### <a name="numbers">Numbers</a>

In more low-level languages, numbers are divided into two datatypes objects:

* Integers

```js
   ..., -1,0, 2, 3, 4, 5, ...
```

* Floats (or Decimal numbers)

```js
2.718, 3.14, .5, .25, etc
```
<br>



#### <a name="operators">Arithmetic Operators</a>

Operators are used to work with data in JavaScript. The standard [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators) - that you've been learning since grade school - are supported, including addition, subtraction, modulus (or remainder) multiplication and so forth.  Check it out:

```js
1 + 2
=> 3

2 - 5
=> -3

5 / 2
=> 2.5

6 * 2
=> 12
```
<br>
![Imgur](http://i.imgur.com/ylb6WX9.gif)

**EXERCISE**: Take 5 minutes to play with your arithmetic operands in the Node repl ((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators)). Try the operators we just covered but don't limit yourself to just single digits. See if you can break it or get unexpected behavior.

#### <a name="special-operators">Special Number Operators</a>

We've seen that JavaScript allows us to perform simple arithmetic functions but what about more complex functions like square roots or exponents?




* Taking a number to some `power`? Then just use `Math.pow`

```js
// 3^2 becomes
Math.pow(3,2)
=> 9

// 2^4 becomes
Math.pow(2,4)
=> 16
```

* Taking a square root

```js
// √(4) becomes
Math.sqrt(4)
=> 2
```

* Need a `random` number? Then use `Math.random`.

```js
// The following only returns a random decimal
Math.random()
=> .229375290430
/*
The following will return a
random number between 0 and 10
*/
Math.random()*10
```

* Since Numbers can be **Floats** or **Integers** we often want to get rid of remaining decimal places, which can be done using `Math.floor`.

```js
// Remove the decimal
Math.floor(3.14)
=> 3
Math.floor(3.9999)
=> 3
```

<br>
![Imgur](http://i.imgur.com/ylb6WX9.gif)

**EXERCISE**: Take 3 minutes to look at the [Math documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) and pick a function to quickly explain to the class. We'll popcorn around the room each person will get 30 seconds to explain what their function is/does. Don't worry if you chose the same one as someone else. Repetition leads to retention!

1. Goto [Math documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
2. Pick out a Math method that we didn’t cover
3. Paste your example into Slack. Come back and share!

#### <a name="strings">Strings</a>

Strings are collections of letters and symbols known as *characters*, and we use them to deal with words and text in JavaScript. Strings are just another type of **value** in Javascript.

```js
'John'
'Jane'
'123'
```

**SIDENOTE**: When do we want to use double quotes vs single quotes?

#### <a name="string-helper-methods">String helper methods</a>

To find the length of a string, access its [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) property:

```js
'hello'.length;
=> 5
```

Strings have other [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods) as well that allow you to manipulate the string and access information about the string:

```js
'hello'.charAt(0);
=> 'h'

'hello, world'.replace('hello', 'goodbye');
=> 'goodbye, world'

'hello'.toUpperCase();
=> 'HELLO'
```

## <a name="string-concat">String Concatentation and Coercion</a>

What if we want to turn two or more strings into one string?

It's the same as if we'd like to turn two or more numbers into one number i.e.:

- 5 + 5 results in 10
- 'hello' and 'world' resulting in 'hello world'

JavaScript allows us to add our strings together so:

```javascript
'hello' + 'world'
=> 'helloworld'
```

What's wrong with this result?

Well, because strings store text we need to be able to account for spaces. This results in a sort of inelegant solution where we have to remember to add a space in one string.

```javascript
'hello' + ' world' // note the space!
=> 'hello world'
```

The newest version of ES6 gives us a more elegant pattern called string interpolation using a new datatype called `template strings`

Rather than single quotes we use back ticks **`**

```javascript
var firstWord = 'hello'
var secondWord = 'world'

`${firstWord} ${secondWord}`
=> 'hello world'
```
<br>
![Imgur](http://i.imgur.com/ylb6WX9.gif)

**EXERCISE**: Take 3 minutes to concatenate strings using both the `+` method and using template strings


What happens if we add a string to a number? Take 15 seconds and try it in Node.

```javascript
var a = 42;

var b = a + '';         // implicit coercion

var c = String( a );    // explicit coercion
```

#### <a name="string-to-int">Converting Strings to Integers with parseInt() and parseFloat()</a>

You can convert a string to an integer using the built-in [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) function. This takes the base for the conversion as an optional second argument, which you should always provide:

```javascript
parseInt('123');
=> 123

parseInt('010', 10);
=> 10
```

This will be important later when we're taking user input from the web or from the command line and using it on our server or in our browser to do some type of numeric calculation.

Similarly, you can parse floating point numbers using the built-in [`parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) function which uses base 10 always unlike its `parseInt()` cousin.

```javascript
parseFloat('11.2');
=> 11.2
```

You can also use the unary `+` operator to convert values to numbers:

```javascript
+'42';
=> 42
```
<br>
![Imgur](http://i.imgur.com/ylb6WX9.gif)

**EXERCISE**: Let's take five minutes to use `parseInt()` and `parseFloat()` in node

#### <a name="nan">NaN</a>

The `parseInt()` and `parseFloat()` functions parse a string until they reach a character that isn't valid for the specified number format, then return the number parsed up to that point. However the '+' operator simply converts the string to `NaN` if there is any invalid character in it.

A special value called [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) (short for 'Not a Number') is returned if the string is non-numeric:

Username example:

```javascript
parseInt('colin1990');
=> NaN

parseInt('1990colin');
=> 1990
```

You can test for `NaN` using the built-in [`isNaN()`](ttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) function:

```javascript
isNaN(NaN);
=> true
```
JavaScript's numeric operators are `+`, `-`, `*`, `/` and `%` and all work as you expect and should have practiced during your pre-work.

#### Null and Undefined

JavaScript distinguishes between:

- `null` a value that indicates a deliberate non-value
- `undefined` that indicates an uninitialized value — that is, a value hasn't even been assigned yet

## <a name="var-and-keywords">Variables (10 mins)</a>

Variables are used to store data types into the memory of the computer so that they can be referenced later.

#### Always use var!

New variables in JavaScript are declared using the [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var '/en/JavaScript/Reference/Statements/var') keyword.

If you declare a variable without assigning any value to it, its type is `undefined`.

```javascript
var a;
=> undefined
```

So lets try assigning a value to variable:

```javascript
var name = 'Thom';
=> undefined

name
=> 'Thom'
```

Having made some expressions it becomes evident we want to store these values.

```javascript
var myNumber = 1;
```

**SIDENOTES: camelCase... But why?**

The main note to make here is that these variables should always have the `var` keyword and use `camelCase`

#### <a name="ass-ops">Assignment Operators</a>

Values are assigned using `=`, and there are also compound assignment statements such as `+=` and `-=`:

```javascript
var x = 1;
=> 1

x += 5
=> 6
```

You can use `++` and `--` to increment and decrement, respectively. These can be used as prefix or postfix operators.

In Javascript we just discussed two types of values we can use. We call these values objects, which for now just means that in addition to storing some data you also get to use some helpful methods when you are working with them.

* If you want to turn a number into a string you can use a helpful method called `toString`.

```javascript
(1).toString()
=> '1'
/**
be careful though,
since numbers can be floats
javascript might
misunderstand you.
*/
1.toString()
=> Float Error
// but the following works
1..toString()
```


## <a name="conclusion">Conclusion (5 mins)</a>

- Describe use cases of different 'data types'.
- Why is iterating important when working with stored data?

Feel free to read more from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) about JavaScript fundamentals.

## Independent Practice
- Coffee Grinder - http://goal-keeper-snake-48368.bitballoon.com/
- http://eloquentjavascript.net/
