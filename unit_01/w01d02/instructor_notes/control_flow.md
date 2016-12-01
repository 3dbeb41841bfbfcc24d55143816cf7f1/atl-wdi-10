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
- Use if/else if/else conditionals to control program flow based on boolean conditions
- Use switch conditionals to control program flow based on explicit conditions
- Use comparison operators to evaluate and compare statements
- Use boolean logic (!, &&, ||) to combine and manipulate conditionals

### Preparation
*Before this lesson, students should already be able to:*

- Create Variables in javascript
- Use a text editor

## Logical operators and control flow (10 mins)


JavaScript supports a compact set of statements, specifically control flow statements, that you can use to incorporate a great deal of interactivity in your application.

**YOU DO:** 

Take 10 minutes and read this: 

http://eloquentjavascript.net/02_program_structure.html

**Give me a thumbs up in Slack when you're done.**



#### What is Control Flow?

![Funny Flow Chart](https://www.laserfiche.com/content/uploads/2014/03/engineering-flow-chart.png)

Control Flow is a fundamental concept in programming that allows you to dictate how your code runs under different conditions or until a certain condition is met. 

#### Block Statements

Statements meant to be executed after a control flow operation will be grouped into what is called a **block statement**. These statements are wrapped into a pair of curly braces:

```javascript
{
  console.log("hello");
  console.log("roar");
}
```

#### Block scope

We've seen that the scope in JavaScript changes often. In the case of **block statements**, there is no scope created.

```javascript
var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2
```

Only functions introduce scope in Javascript.

## Conditional statements (10 mins)

Conditional statements are a way of essentially skipping over a block of code if it does not pass a boolean expression. JavaScript supports two conditional statements: `if`...`else` and `switch`.

#### if...else statement

`if(expr) { code }`

... means run the `code` block if `expr` is `true`

```javascript
if (1 > 0) { console.log("hi") }
//=> hi
```

When you need to test more than one case, you may use `else if`:

```javascript
var name = "kittens";

if (name == "puppies") {
  name += "!";
} else if (name == "kittens") {
  name += "!!";
} else {
  name = "!" + name;
}
//=> 'kittens!!'

name == "kittens!!";
//=> true
```

**Note**: It is recommended **to not** assign variables in the conditional expression, because the assignment of a value to a variable, like this:

```javascript
student = "Jamie";
//=> "Jamie"
```

The expression above will return the value (as shown on the second line), so if you assign a truthy value inside a conditional statement, then this condition will always be true, or if you assign something undefined, it will make the conditional statement false (because undefined is falsey). Another potential issue with this is that it can be confused with equality(`==`). The example below is the illustration of WHAT NOT TO DO, in general:

```javascript
if (x = 3) {
    console.log("boo");
}
```

#### Ternary Operator

JavaScript has a ternary operator for conditional expressions. You can think about the ternary operator as a concise "if-else in one line":

```javascript
true ? console.log("it is true"): console.log("it is false");
//=>  "it is true"
false ? console.log("it is true"): console.log("it is false");
//=> "it is false"

var age = 12;
//=> undefined

var allowed = (age > 18) ? "yes" : "no";
//=> undefined

allowed
//=> "no"
```

###YOU DO - Exercises

Goto [repl.it](https://www.repl.it/) to complete the following exercises.

1. Write a script that prompts the user for their current mood. If the user inputs `happy`, print 'Yay me too!' to the console, `sad` print 'Aw cheer up', else just print 'So moody!'. (A solution is at the bottom of this lesson:)


1. Use conditionals to check if a hardcoded number is `odd` or `even`, and then `console.log` the number is `odd` or `even` with the numbers value.

	```js
	var num = ;// write a number here
	
	// write your conditions here
	
	```

2. Use conditionals to check if a hardcoded number is divisible by `2` or  `3` and then `console.log` that the number is divisible by two or three.

	```js
	var num = ;// write a number here
	
	// write your conditions here
	
	```

3. Use conditionals to check if a hardcoded `quantity` is `1` or greater than one. If the `quantity`  is one or greater `console.log` either `1 pet` or `quantity + " pets"` respectively.

	```js
	var quantity = ;// write a number here
	
	// write your conditions here
	
	```



## Truthy & Falsey (10 mins)

#### All of the following become false when converted to a Boolean

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

#### All other values become true when converted to a Boolean

Do not confuse the primitive boolean values `true` and `false` with the true and false values of the Boolean object. For example:

```javascript
var b = new Boolean(false);

if (b) { console.log("true") }
//=> true
```

There is a simple way of verifying the truthiness or falsiness of a value. When you add `!` in front of a value, the returned value will be the inverse of the value in a boolean. So if you add two `!` then you'll get the boolean value of the original one:

```javascript
!!1
//=> true

!!0
//=> false

!!-1
//=> true

!![]
//=> true

!!{}
//=> true

!!null
//=> false

!!""
//=> false
```

## Boolean/Logical Operators (5 mins)

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
```

The `&&` and `||` operators use short-circuit logic, which means whether they will execute their second operand is dependent on the first. This is useful for checking for null objects before accessing their attributes:

```javascript
var name = otherName && o.getName();
```

In this case, if the first operand `otherName` is false, then the second operand `o.getName()` will not be evaluated. The expression is basically saying "we already know the whole `&&` expression is false, because `otherName` is falsey. Why bother dealing with the second operand?"

Or for setting default values:

```javascript
var name = otherName || "Marc";
```

In this case, if the first operand `otherName` is false, then we'll see that `"Marc"` will be returned. If `otherName` is truthy (e.g. it contains a value), it will get returned, and the second expression won't even be evaluated. The expression is basically saying "we already know the whole `||` expression is true, because `otherName` is truthy. Why bother dealing with the second operand?"

## Comparison Operators (10 mins)

[Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`. These work for both strings and numbers. This is both useful, and can be the source of frustration for some developers, since most languages do not implicitly convert strings to numbers the way that JavaScript does.

```javascript
"A" > "a"
//=> false

"b" > "a"
//=> true

12 > "12"
//=> false

12 >= "12"
//=> true
```

#### Equality Operator `==`

Equality is a bit more complex. There are 2 ways in JavaScript to verify equality.

When verifying equality using double equal `==`, JavaScript does a lot of the "type coercion" in the background. Like we mentioned above, if the operands have a different type (i.e.: the number `1` and the string `"1"`), JavaScript will try to change the type of both operands to check whether they are equal. This means that a lot of times, expressions will return equal more easily than if we were stricter about what things were equivalent. Some examples:

```javascript
"dog" == "dog";
//=> true

1 == true;
//=> true
```

#### Equality Operator `===`

To avoid type coercion and measure equality more strictly, **use the triple-equals operator**. Because `===` more truly measures actual equality, we'll use this far more often when checking whether too things are, in fact, the same thing.

> **Note:** "Sameness" and "equality" have various definitions and can be somewhat "fuzzy". They can also differ by programming language. Because you'll often be measuring whether two things are equal, you should investigate the way this works carefully.

Some examples:

```javascript
1 === true;
//=> false

true === true;
//=> true

"hello" === "hello"
//=> true
```

However, there are some incidents when it does not do what we expect, for example when working with empty objects or arrays:

```javascript
{} === {}
//=> Uncaught SyntaxError: Unexpected token ===

[] === []
//=> false

[1,7] === [1,7]
//=> false
```

**Explanation**

The examples in the second set fail equality tests because both **object literals** and **arrays** are objects, and not just "primitive" values like strings, numbers, and booleans. Objects and arrays are complex collections of values, and when we refer to them, we're actually referencing where they live in memory. That's why we call them "reference types," while things like strings and numbers are "value types."

What this means is that when we go to compare two objects or arrays with `===`, JavaScript doesn't care if they look like similar collections. It only compares whether or not they are the exact same object in memory. In each of the cases above, when checking for equality, we're actually comparing two objects that are in two different places in memory. They're not exactly "the same."

#### != and !==

There are also `!=` and `!==` operators, which are the negative versions of `==` and `===`.

## Switch Statement (5 mins)

The switch statement can be used for multiple branches based on a number or string:

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.

```javascript
var food = "apple";

switch(food) {
  case 'pear':
    console.log("I like pears");
    break;
  case 'apple':
    console.log("I like apples");
    break;
  default:
    console.log("No favourite");
}
//=> I like apples
```

In this case the `switch` statement compares `food` to each of the cases (`pear` and `apple`), and evaluates the expressions beneath them if there is a match. It uses `===` to evaluate equality.

The default clause is optional.

####Example
The getDay() method returns the weekday as a number between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 ..)

Use the weekday number to calculate weekday name:

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
}
```


- When the JavaScript code interpreter reaches a break keyword, it breaks out of the switch block.

- This will stop the execution of more code and case testing inside the block.

- When a match is found, and the job is done, it's time for a break.
There is no need for more testing.

#####What is faster switch or if/else?

Note that for the if-else structure, the variable being checked is reloaded into a register for comparison every single time. The switch-case structure loads the variable one time, and proceeds to perform the series of comparisons. 

Use if instead of switch when:

- You want to test for the truthiness of an expression.
- You only have a single affirmative test.

## While and Do-While (5 mins)

`while` is a loop statement that will run **while** a condition is true.

JavaScript has `while` loops and `do-while` loops. The first is good for basic looping, but there's a possibility it will never get run. Using a `do-while` loop makes sure that the body of the loop is executed at least once, because `while()` isn't evaluated until after the block of code runs.

```javascript
while (true) {
  // an infinite loop!
}
```

This should be enough to break a browser.

```javascript
var input = 0;
do {
  console.log(input++);
} while (input < 10);
```

## Conclusion (5 mins)
These are some of the foundational tools you'll use in many of your applications. You'll probably need to refresh yourself on the exact syntax a few times before you memorize it, but it's important to be able to remember, these core "control flow" concepts, in general, because they'll come up in pretty much every programming language you'll ever encounter.

- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [While](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

## Independent Practice
- Choose Your own Adventure in today's student labs folder.

##Solution to the `moody` you do exercise

```js
var mood = prompt("What is your mood?");

if (mood == 'sad') {
    console.log('hrmph');
} else if (mood == 'happy') {
    console.log('YOWZA!');
} else {
    console.log('not impressed');
}
```