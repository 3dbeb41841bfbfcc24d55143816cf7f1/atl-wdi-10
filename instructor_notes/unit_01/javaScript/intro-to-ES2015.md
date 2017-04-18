# ES2015

## Learning Objectives

- Explain the history of ES and JS
- Compare/contrast features of ES5 and ES2015
- Explain when to use `var` vs `let` vs `const`
- Use template literals to interpolate variables and strings
- Use deconstruction to extract values from objects and arrays
- Use default parameters and arrow functions

## Framing

Today, we are going to be looking at a new way to write Javascript by playing with some of the new features released in ES2015.

#### JS vs ES

As mentioned previously, the JavaScript standard is officially referred to as [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

As JS is so widely used, there is a body known as [TC39](https://www.ecma-international.org/memento/TC39.htm) or [ECMA International](https://www.ecma-international.org/), which formally approves official versions for its release.

Each version contains features and changes that are added onto the language.

In short, I like to think of ECMAScript as the language, and JavaScript as an implementation of that language.

#### Evolution of JS

> Check out [this awesome visualization](http://shaunlebron.github.io/solar-system-of-js/#0) of the current state of the JS universe

Condensed timeline:

- 1999 - ES3 was released, the first widespread use of the language.
- ES4 was never released, largely due to  political reasons.
- 2009 - ES5 was released, what we have been writing so far in class.
- 2015 - ES6 was published, releasing a wide set of new features and syntax.

#### Why now?

Many plugins, frameworks and modules still use ES5, as browser support for
the new version of the language is [still not universal](http://caniuse.com/#search=es6), but the new syntax and features of ES2015 are increasingly becoming more and more popular among many open-source projects and in the developing world at large. Also, you are very likely to see it pop up in the documentation of some of the technologies we will be using in this course.

Today is all about exploring some of the [new features](https://github.com/lukehoban/es6features) and getting comfortable with
the new syntax.

> For a more complete backstory, we recommend checking out [this talk](https://www.youtube.com/watch?v=PlmsweSNhTw) from Brendan Eich on what he views as the future of JS.

<br />

## You Do
Take 15 minutes to read through this article: [Getting Started with ECMAScript 6](http://blog.teamtreehouse.com/get-started-ecmascript-6) from the Treehouse blog.  If you have time leftover, you can read about the differences between [Understanding ES5, ES2015 and TypeScript](https://johnpapa.net/es5-es2015-typescript/).

<br />

## Support Modern Browsers

Make sure that if you are using Chrome, you enable the experimental javascript flag by going to Chrome Flags (chrome://flags). And then relaunch Chrome.

<br />

## New Features

### Block Scope

<details>
<summary>What does the concept of scope refer to in JS?</summary>

In short, it is the notion of which variables are available where.

</details>

<details>
<summary>So far in class, what is the primary way to control scope in JS?</summary>

If you wanted block level scope in ES5, you would need to use functions- either a regular function or an IIFE (immediately invoked function expression.

</details>

<br />

#### `let`

[Let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let): ES2015 introduces the concept of block scoping, which allows us to limit the scope of a variable declared with `let` to a given block `{ ... }`. It also avoids variables hoisting, as a variable is only declared/assigned where it exists within our code.

Scope in ES5:

```js
// ES5
var a = 1;
function myFunction() {
  a = 2;
  console.log(a);
}
console.log(a);
myFunction();

// will print out 1, 2
```

Scope in ES2015:

```js
// ES2015
var a = 1;
{
  let a = 2;
  console.log(a);
}
console.log(a);
// will print out 2, 1
```

You are more likely to see `let` declarations inside an `if` or `for` block because of the block scoping capability:

```js
// ES5
for(var i = 0; i < 10; i++){
  console.log(i);
}
console.log("outside loop:", i);
// still have access to i outside of the loop
```

```js
// ES2015
for(let j = 0; j < 10; j++){
  console.log(j);
}
console.log("outside loop:", j);
// throws an error
// because of block scope, j will not be available outside of the for block
```

<br />

#### `const`

[Const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const): ES2015 introduces another keyword for declaring variables called `const`. `const` is an identifier for variables that can not be reassigned and are considered read only variables. It is not a constant variable, but a constant reference to your variable.

In ES5, if you want to declare a variable that should remain constant, it is a common practice to write the name in all uppercase letters.  However, this will not prevent the variable from being reassigned. It is used more as a note to other developers about your intention for that variable.

```js
const a = 1;
a = 2;
// Throws an error in chrome

const a = 2;
// throws an error

var a = 2;
// throws an error
```

<br />

### Default Parameters

[Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters): With ES2015, we now have the option to set default values for any of our functions' parameters.


In ES5, we had to use the 'or' expression in order to create a default.  However, in ES6, you can set a default within your function's parens.

```js
// ES5
function hello(name){
    name = name || "Frankie P";
    console.log("Hello, " + name);
}

hello(); // Hello, stranger
hello("Jesse"); // Hello, Jesse
```

```js
// ES2015
function hello(name = "stranger"){
    console.log("Hello, " + name);
}

hello(); // Hello, stranger
hello("Jesse"); // Hello, Jesse
```

The ES2015 way is generally better because you won't have 'or' expressions all over your code.

<br />

### Destructuring

[Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment): The destructuring assignment makes it possible to extract data from complex data types (arrays and objects) into distinct variables:

```js
let [a, b] = [1, 2];
a; //= 1
b; //= 2
let nums = [1, 2, 3, 4, 5];
let [first, second, third] = nums;
first; //= 1
second; //= 2
third; //= 3
```

What is on the left([a, b]), looks like an array literal, but you are actually working with individual variables, and surrounding them with square brackets because you are destructuring an array. You are telling the first value in the array to assign itself to 'a', and the second value to assign itself to 'b'.

Destructuring also applies to objects:

```js
var user = {
    id: 1,
    name: "Bob",
    age: 43 ,
    profile_url:  "http://api.co/users/1",
    location: "DC"
}

// ES5
function greetUser (user) {
    console.log("Hello " + user.name + ", how's the weather in " + user.location + "?");
}

// In ES2015 this becomes:
function greetUser({ name, location })  {
    console.log("Hello " + name + ", how's the weather in " + location + "?");
}
// You would call both by using: greetUser(user);

```

If you are destructuring an object, you would surround the desired variables with curly braces, which will make it look like you are creating an object literal, but you are really just building an assignment statement.  You will want to pick off specific properties in the object.

<br />

### Concise Object Properties and Methods

[Property Shorthand](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer): ES2015 allows us to use property shorthand to shorten method definitions.  For functions within objects, you can leave out the `function` keyword, and just add parens to the `key`, like in the **drive()** example below.

```js
// ES5
var car = {
  drive: function(){
    console.log("vroom vroom");
  }
}
```

to

```js
// ES2015
let car = {
  drive() {
    console.log("vroom vroom");
  }
}
```

And for properties where the key is the same as the variable storing the value:

```js
// ES5
var x = 1;
var y = 2;

var obj = {x:x, y:y};
```

```js
// ES2015
let x = 1;
let y = 2;

let obj = {x, y};
```

<br />

### Template Literals

[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals): Template literals can help you build the string values that you might want to assign to a variable.  

Here is how we previously used variables as placeholders in order to evaluate strings/concatenate variables with strings.

```js
// ES5
var name = "Inigo Montoya";
var killee = "father";
var prepareTo = "die";

console.log("Hello. My name is "+ name + ". You killed my " + killee +". Prepare to " + prepareTo + ".");
console.log("Hello.\n" + 
"My name is "+ name + ".\n" + 
"You killed my " + killee +".\n" + 
"Prepare to " + prepareTo + ".");
```

In ES2015, we can interpolate variables using template literal syntax: '(`)' (backticks), and replace the long-winded ES5 string concatenation code.

```js
// ES2015
let name = "Inigo Montoya";
let killee = "father";
let prepareTo = "die";

console.log(`Hello. My name is ${name}. You killed my ${killee}. Prepare to ${prepareTo}.`);
```

A template literal can also be on multiple lines and it would still be valid! 

```js
// ES2015
let name = "Inigo Montoya";
let killee = "father";
let prepareTo = "die";

console.log(
  `
    Hello. 
    My name is ${name}. 
    You killed my ${killee}. 
    Prepare to ${prepareTo}.
  `
);
// So concise!  
```

As opposed to this:

```js
// ES5
var name = "Inigo Montoya";
var killee = "father";
var prepareTo = "die";

console.log("Hello.\n" + 
"My name is "+ name + ".\n" + 
"You killed my " + killee +".\n" + 
"Prepare to " + prepareTo + ".");
```

<br />

### Arrow Functions

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions): Arrow functions are the new shorthand syntax for defining anonymous functions.  Arrow functions gets its name from its syntax `=>`, which in other languages, is knows as: the fat arrow, the rocket or the Lamda operator.

```js
// ES5
let foods = ["pizza", "mac n cheese", "lasagna"];
foods.forEach(function(food) {
    console.log("I love " + food);
});
```

```js
// ES2015
let foods = ["pizza", "mac n cheese", "lasagna"];
foods.forEach((food) => {
  console.log(`I love ${food}`);
});
```

You can get access to each element in this array using a `for` loop.  However, the forEach() method is a method on an array that will iterate through the array.  You pass in a function to the forEach method, and tell it what you want to do with each item (via the param - (food, in this case)) in the array.

```js
// ES5- with a for loop
let foods = ["pizza", "mac n cheese", "lasagna"];
for(var i = 0; i < foods.length; i++) {
    console.log("I love " + foods[i]);
}
```

You can write the whole arrow function on one line, and if you only have one parameter, you don't have to put it in parens.  Check out this even more concise syntax:

```js
// ES2015
let foods = ["pizza", "mac n cheese", "lasagna"];
foods.forEach(food => console.log(`I love ${food}`));
```

If there is more than one parameter in the function, make sure to wrap them in parens:

```js
let foods = ["pizza", "mac n cheese", "lasagna"];
foods.forEach((food, i) => console.log(`My #${i} favorite food is ${food}`));
```

[SIDE NOTE] Arrow functions also have the benefit of not changing the value of `this`.

Additionally, the `return` statement is not needed with single line arrow functions. There is an **implicit return**.

```js
//ES5
function subtract(x, y) { x + y; }
//undefined in console
```

```js
// ES2015
let add = (x, y) => x + y;
add(2, 3); //5
```

If the function is on multiple lines, you will need to **explicitly return**:

```js
// ES2015
let add = (x, y) => {
  return x + y;
}
add(2, 3);
```

<br />

## Legacy Browser Support

Support for ES2015 is growing! - https://kangax.github.io/compat-table/es6/

If you need to support a legacy browser (depending on your user), check out the following transpilers.  A transpiler will convert one language into another.  In this case, it will convert your ES6 code back into ES5.
- [Traceur](https://github.com/google/traceur-compiler/wiki/Getting-Started)
  - project ran by google, which takes ES6 code and compiles it to ES5.
  - it doesn't support all of ES6.
  - [Traceur repl](https://google.github.io/traceur-compiler/demo/repl.html#)
  - [Plnkr](https://plnkr.co/)
    - make sure to add the traceur from the search packages.
      - will add traceur.js and bootstrap.js
      - if you have an external js file, just make sure to add a type="module" to the tag
- [Babel](https://babeljs.io/)
- [Addy osmani ES6 Tools](https://github.com/addyosmani/es6-tools)

**You always need to make sure that you are supporting the browsers that your users are using. If they can't use your site because it is 'too modern' you will lose them.**

<br />

## Bonus

### Spread Operator

[Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator): The spread operator `...` allows an expression (like an array) to be expanded into multiple elements.

This make separating an array into individual elements incredibly simple. In ES5, you would need to use the index of each array item in order to get access to that value/send in that value as an argument.

```js
// ES5
var dimensions = [10, 5, 2];
var volume = function(height, width, length) {
  return height * width * length;
}

volume(dimensions[0], dimensions[1], dimensions[2]);
```

In ES6, you can just use the spread operator, which makes your code more dry and easier to understand.


```js
// ES2015
var dimensions = [10, 5, 2];
var volume = function(height, width, length) {
  return height * width * length;
}

volume(...dimensions);
```

You can also use the spread operator to add two arrays together. 

```ES5
var a = [4, 5, 6];
var nums = [1, 2, 3, a, 7, 8, 9];

nums;
> [1, 2, 3, [4, 5, 6], 7, 8, 9]
```

Notice that without the spread operator (in ES5), the array doesn't just add in the values from the 'a' array.  It actually imports the whole array (at index 3) within the nums array, creating an array within an array.

The spread operator will seamlessly add the two arrays together.

```ES2015
var a = [4, 5, 6];
var nums = [1, 2, 3, ...a, 7, 8, 9];

nums;
> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

<!-- The spread operator also makes it very easy to create copies of an array in functions where mutation occurs:

```js
var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];

function reversedDays(arr){
  return arr.reverse();
}
console.log(reversedDays(days));
// but now days is no longer in order
console.log(days);

// To deal with this, we can either:

// ES5
function reversedDays(arr){
  var newArray = [];
  for(let i = 0; i < arr.length; i++){
    newArray.push(arr[i]);
  }
  return newArray.reverse();
}
console.log(reversedDays(days));
console.log(days);

// or... (<- pun)

// ES6
function reversedDays(arr){
  return [...arr].reverse();
}
console.log(reversedDays(days));
console.log(days);
``` -->

<br />

## Keep Going

There are a lot of features in ES6 that we have not covered:

- [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Classes](http://es6-features.org/#ClassDefinition)
- [Inheritance](http://es6-features.org/#ClassInheritance)

<br />

## Resources
- [Const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [Const](http://es6-features.org/#Constants)
- [Let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [Let](http://es6-features.org/#BlockScopedVariables)
- [Block Scope](https://www.sitepoint.com/joys-block-scoping-es6/)
- [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Arrow Functions](http://es6-features.org/#ExpressionBodies)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals)
- [Template Literals](http://es6-features.org/#StringInterpolation)
- [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Destructuring](http://es6-features.org/#ArrayMatching)
- [Destructuring](http://www.2ality.com/2015/01/es6-destructuring.html)
- [Property Shorthand](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [Property Shorthand](http://es6-features.org/#PropertyShorthand)
- [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

<br />

## More Resources
- [You Don't Know ES6](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond)
- [More History](https://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/)
- [ES6 Compatibility](https://kangax.github.io/compat-table/es6/)
- [Can I Use](http://caniuse.com/)

<br />

## Articles
- [JavaScript Tips](http://javascriptissexy.com/12-simple-yet-powerful-javascript-tips/)
- [Getting Started with ECMAScript 6](http://blog.teamtreehouse.com/get-started-ecmascript-6)
- [Understanding ES5, ES2015 and TypeScript](https://johnpapa.net/es5-es2015-typescript/).
