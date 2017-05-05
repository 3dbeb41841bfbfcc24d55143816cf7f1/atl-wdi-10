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

#### Condensed timeline:

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

<details>
<summary>Who is Brendan Eich?</summary>

He is the creator of JavaScript, which he created in 10 days!  He co-founded Mozilla.  And he is the CEO of Brave Software, an internet security company. [Learn More](https://en.wikipedia.org/wiki/Brendan_Eich)

</details>

<br />

## You Do
Take 20 minutes to read through this article: [Getting Started with ECMAScript 6](http://blog.teamtreehouse.com/get-started-ecmascript-6) from the Treehouse blog.  If you have time leftover, you can read about the differences between [Understanding ES5, ES2015 and TypeScript](https://johnpapa.net/es5-es2015-typescript/).

<br />

## Support Modern Browsers

Make sure that if you are using Chrome, you enable the experimental javascript flag by going to Chrome Flags (chrome://flags), and clicking on the 'Experimental JavaScipt link' in order to enable it. And then relaunch Chrome.

<br />

## New Features

### Block Scope

<details>
<summary>What does the concept of scope refer to in JS?</summary>

In short, it is the notion of which variables are available and where.

</details>

<details>
<summary>So far in class, what is the primary way to control scope in JS?</summary>

If you wanted block level scope in ES5, you would need to use a function.

</details>

<br />

#### `let`

[Let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let): ES2015 introduces the concept of block scoping, which allows us to limit the scope of a variable declared with `let` to a given block of code `{ ... }`. It also avoids variables hoisting, as a variable is only declared/assigned where it exists within our code.

Scope in ES5:

```js
// ES5
var num = 1;
{
  var num = 2;
  console.log(num);
}
console.log(num);

// will print out 2, 2
```

Scope in ES2015:

```js
// ES2015
var newNum = 1;
{
  let newNum = 2;
  console.log(newNum);
}
console.log(newNum);

// will print out 2, 1
```

You are more likely to see `let` declarations inside an `if` or `for` block because of the block scoping capability:

```js
// ES5
for(var i = 0; i < 10; i++) {
  console.log(i);
}
console.log("outside loop:", i);
// still have access to i outside of the loop
```

```js
// ES2015
for(let j = 0; j < 10; j++) {
  console.log(j);
}
console.log("outside loop:", j);
// throws an error
// because of block scope, j will not be available outside of the for loop
```

<br />

#### `const`

[Const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const): ES2015 introduces another keyword for declaring variables called `const`. `const` is an identifier for variables that can not be reassigned and are considered read only variables. It is not a constant variable, but a **constant reference** to a variable.

In ES5, if you want to declare a variable that should remain constant, it is a common practice to write the name in all uppercase letters.  However, this will not prevent the variable from being reassigned. It is used more as a note to other developers about your intention for that variable.

```js
const num1 = 1;
num1 = 2;
// Throws a type error- assignment to constant variable

const num1 = 2;
// throws a syntax error- identifier has already been declared

var num1 = 2;
// throws a syntax error- identifier has already been declared
```

<br />

### Default Parameters

[Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters): With ES2015, we now have the option to set default values for any of our functions' parameters.

In ES5, we had to use the 'or' expression in order to create a default.

```js
// ES5
function hello(name){
    name = name || "stranger";
    console.log("Hello, " + name);
}

hello(); // Hello, stranger
hello("Danny"); // Hello, Danny
```

In ES2015, you can set a default within your function's parens.

```js
// ES2015
function helloAgain(name = "stranger"){
    console.log("Hello again, " + name);
}

helloAgain(); // Hello again, stranger
helloAgain("Danny"); // Hello again, Danny
```

The ES2015 way is generally better because it keeps your code more concise- you won't have 'or' expressions all over your code.

<br />

### Destructuring

[Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment): The destructuring assignment makes it possible to extract data from complex data types (arrays and objects) into distinct variables:

```js
let [num1, num2] = [1, 2];
num1; 
//= 1
num2; 
//= 2

let nums = [1, 2, 3, 4, 5];
let [first, second, third] = nums;
first; 
//= 1
second; 
//= 2
third; 
//= 3
```

What is on the left([num1, num2]), looks like an array literal, but you are actually working with individual variables, and surrounding them with square brackets because you are **destructuring the array**. You are telling the first value in the array (1) to assign itself to 'num1', and the second value (2) to assign itself to 'num2'.

Destructuring also applies to objects:

```js
var congressionalCandidate = {
    id: 1,
    name: "Jon",
    age: 30,
    profile_url:  "http://www.myajc.com/rf/image_medium/Pub/p8/MyAJC/2017/02/27/Images/newsEngin.17889157_House_Election_Georgia_5058.jpg",
    location: "Atlanta"
}

// ES5
function greetPolitician(congressionalCandidate) {
    console.log("Hello, " + congressionalCandidate.name + ". How is the race going in " + congressionalCandidate.location + "?");
}
greetPolitician(congressionalCandidate);
=> Hello, Jon. How is the race going in Atlanta?


// In ES2015:
function greetNewPolitician({ name, location })  {
    console.log("Hello, " + name + ".  We hope you win the " + location + " race!");
}
greetNewPolitician(congressionalCandidate);
=> Hello, Jon. We hope you win the Atlanta race!
```

If you are destructuring an object, you would surround the desired variables/parameters with curly braces, which will make it look like you are creating an object literal, but you are really just building a destructuring assignment statement.  You will be allowed to pick off specific properties in the object.

<br />

### Concise Object Properties and Methods

[Property Shorthand](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer): ES2015 allows us to use **property shorthand** to shorten method definitions.  For functions within objects, you can leave out the `function` keyword, and just add parens to the `key`, like in the **drive()** example below.

```js
// ES5
var car = {
  drive: function() {
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
var num1 = 1;
var num2 = 2;

var obj = {num1:num1, num2:num2};
```

```js
// ES2015
let num3 = 3;
let num4 = 4;

let newObj = {num3, num4};
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

console.log("Hello. My name is " + name + ". You killed my " + killee +". Prepare to " + prepareTo + ".");

// Or if you wanted to write it on multiple lines.
console.log(
  "Hello.\n" + 
  "My name is "+ name + ".\n" + 
  "You killed my " + killee +".\n" + 
  "Prepare to " + prepareTo + "."
);
```

In ES2015, we can interpolate variables using template literal syntax: '(`)' (backticks), and replace the long-winded ES5 string concatenation code.

```js
// ES2015
let newName = "Inigo Montoya";
let newKillee = "father";
let newPrepareTo = "die";

console.log(`Hello. My name is ${newName}. You killed my ${newKillee}. Prepare to ${newPrepareTo}.`);

// A template literal can also be on multiple lines and it would still be valid!
console.log(`
  Hello. 
  My name is ${newName}. 
  You killed my ${newKillee}. 
  Prepare to ${newPrepareTo}.
`);
```

<br />

### Arrow Functions

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions): Arrow functions are the new shorthand syntax for defining anonymous functions.  Arrow functions gets its name from its syntax `=>`, which in other languages, is knows as: the fat arrow, the rocket or the Lamda operator.

```js
// ES5
var favoriteFoods = ["indian", "ice cream", "grilled cheese"];
favoriteFoods.forEach(function(favoriteFood) {
    console.log("I love " + favoriteFood);
});
```

```js
// ES2015
let healthyFavoriteFood = ["salad with lemon, olive oil and Maldons", "yogurt with honey", "strawberries"];
healthyFavoriteFood.forEach((healthyFave) => {
  console.log(`I love ${healthyFave}`);
});
```

You can get access to each element in this array using a `for` loop.  However, the forEach() method is a method on an array that will iterate through the array.  You pass in a function to the forEach method, and tell it what you would like to do with each item (via the param - (healthyFave, in this case)) in the array.

```js
// ES5- with a for loop
let newFavoriteFood = ["thai", "sushi", "Little Tart croissants"];
for(var i = 0; i < favoriteFood.length; i++) {
    console.log("I love " + foods[i]);
}
```

If your arrow function is short, you can write the whole arrow function on one line, and if you only have one parameter, you don't even have to put it in parens.  Check out this even more concise syntax:

```js
// ES2015
let newHealthyFavorites = ["salmon with honey and basil", "pineapple", "dark chocolate"];
newHealthyFavorites.forEach(newHealthyFave => console.log(`I love ${newHealthyFave}`));
```

If there is more than one parameter in the function, make sure to wrap them in parens:

```js
let foodFaves = ["pizza from Little Star in SF", "pop tarts from Star Provisions", "hard tacos from Superica"];
// you need to add 1 to the index because it will start at 0
foodFaves.forEach((food, i) => console.log(`My number ${i + 1} favorite food is ${food}`));
```

**[SIDE NOTE]** Arrow functions also have the benefit of not changing the value of `this`.

Additionally, the `return` statement is not needed with single line arrow functions. There is an **implicit return**.

```js
//ES5
function addNum(num1, num2) { return num1 + num2; }

addNum(1, 2);
=> 3
```

```js
// ES2015
let addNewNum = (num1, num2) => num1 + num2;

addNewNum(2, 3);
=> 5
```

If the function is on multiple lines, you will need to **explicitly return**:

```js
// ES2015
let addNewestNums = (num1, num2) => {
  let total = num1 + num2;
  return total;
}

addNewestNums(3, 4);
=> 7
```

<br />

## Legacy Browser Support

Support for ES2015 is growing! - https://kangax.github.io/compat-table/es6/

If you need to support a legacy browser (depending on your user), check out the following transpilers.  A transpiler will convert one language into another.  In this case, it will convert your ES2015 code back into ES5.
- [Traceur](https://github.com/google/traceur-compiler/wiki/Getting-Started)
  - project ran by google, which takes ES2015 code and compiles it to ES5.
  - it doesn't support all of ES2015.
  - [Traceur repl](https://google.github.io/traceur-compiler/demo/repl.html#)
- [Babel](https://babeljs.io/) - one of the most popular
- [Addy osmani ES6 Tools](https://github.com/addyosmani/es6-tools)


- [Plnkr](https://plnkr.co/) - great place to try out your code
  - make sure to add the traceur from the search packages.
    - will add traceur.js and bootstrap.js
    - if you have an external js file, just make sure to add a type="module" to the tag

**You always need to make sure that you are supporting the browsers that your users are using. If they can't use your site because it is 'too modern' you will lose them.**

<br />

## Bonus

### Spread Operator

[Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator): The spread operator `...` allows an expression (like an array) to be expanded into multiple elements.

This makes separating an array into individual elements incredibly simple. In ES5, you would need to use the index of each array item in order to get access to that value or to send in that value as an argument.

```js
// ES5
var dimensions = [10, 5, 2];
var volume = function(height, width, length) {
  return height * width * length;
}

volume(dimensions[0], dimensions[1], dimensions[2]);
```

In ES2015, you can just use the spread operator, which keeps your code DRY and makes it easier to understand.

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
var nums = [4, 5, 6];
var newNums = [1, 2, 3, nums, 7, 8, 9];

newNums;
=> [1, 2, 3, [4, 5, 6], 7, 8, 9]
```

Notice that without the spread operator (in ES5), the array doesn't just add in the values from the 'a' array.  It actually imports the whole array (at index 3) within the nums array, creating an array within an array.

The spread operator will seamlessly add the two arrays together.

```ES2015
let nums1 = [4, 5, 6];
let newestNums = [1, 2, 3, ...nums1, 7, 8, 9];

newestNums;
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
