---
title: JavaScript Objects
type: lesson
duration: 1hr
creator:
  name: Alex Chin, Gerry Mathe, Sean Shannon
  adapted for WDI ATL 9 by: Maren Woodruff
  city: London, DC
competencies: Programming
---

# JavaScript Objects

### Objectives
*After this lesson, students will be able to:*

- Compare objects and key-value stores to arrays as data structures
- Explain the difference between object properties and methods
- Create empty objects and objects with multiple properties and methods using object literal syntax
- Compare adding and retrieving properties to an existing object using the dot and bracket notations
- Access properties of an object using keys and helper methods (.hasOwnProperty)
- Iterate over the keys of an object to return and manipulate values

### Preparation
*Before this lesson, students should already be able to:*

- Create and manipulate variables with JavaScript
- Create and manipulate arrays in JavaScript
Objects in JavaScript

## Intro

### What is an object? (5m)

In the last lesson, I asked you to think about 4 objects that define you.  You added these items to an array and were able to iterate over them/console.log them.  But we just wrote the name of the item, there weren't any details given.  Objects can help us out with that.

* Objects are a type of data structure that is nearly universal across programming languages, although they may have different names in different languages (in Python they are called a dictionary, in Ruby they are called a hash).
* In JavaScript, an object is a type of key-value store, or a way to group pairs of keys and values together
* Like arrays, objects can hold multiple pieces of data of varying types; but unlike arrays, objects use named keys rather than ordered indices to access those pieces of data.

For example, a puppy has properties that define it, like a name, a breed/type, the color of his/her fur, a size, a demeanor etc. This would look like:

```javascript
var puppy = {
  name: "Diesel",
  breed: "Malchi",
  color: "white",
  size: "small",
  demeanor: "old, grouchy man"
}
```

This JavaScript object will have **keys/names/properties** for the item we are defining, and **values** for each property.

<br />

### Collections of name-value pairs

#### Object literal syntax

Strings are defined in 'quotes', arrays are in ['square bracets'], objects follow the same lexical pattern but contain key value pairs, like this `{key: value}`.  The `key` comes before the colon and the `value`, after the colon.  Like arrays, these key-value pairs are comma separated!

```javascript
var myObject = {};
```

## Object Properties

Objects in JavaScript **always** have properties associated with them.

You can think of a property on a JavaScript object as a type of variable that contains a value. The properties of an object can be accessed using **dot notation** or **bracket notation** which will be discussed in a minute:

##### Dot Notation

```javascript
var person = {
  name: "Danny"
}

person.name;
=> "Danny"
```

You can define or change a property by assigning it a value using the assignment operator `=` as you would a normal variable.

```javascript
var person = {
  name: "Danny"
}
=> undefined

person.name;
=> "Danny"

person.name = "Maren";
=> "Maren"

person.name;
=> "Maren"
```

## We Do: Create an object with properties

We are going to create an object called `classroom` that contains the properties `name` and `campus`:

```javascript
var classroom = {};
=> undefined

classroom.name = "WDI ATL 10";
=> "WDI ATL 10"

classroom.campus = "Atlanta!";
=> "Atlanta!"

classroom;
=> Object {name: "WDI ATL 10", campus: "Atlanta!"}
```

### Bracket Notation

The other way to set properties on a JavaScript object, call the object, followed by square brackets- inside of the square brackets is the key/properties, and you assign it the value.

```javascript
classroom["name"] = "WDI 10 Rocks!";
classroom["campus"] = "Ponce City Market!";
```

This syntax can also be used to read the properties of an object, as well as create new ones:

```javascript
console.log(classroom["name"]);
=> "WDI 10 Rocks!";

classroom.size = 10;

console.log(classroom["size"]);
=> 10;
```

- You can use dot notation or bracket notation to set or change your properties.

For more details see [MDN's Documentation on Property Accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors).


### Deleting Properties

If you want to delete a property in an object (and by extension, the value attached to the property), you need to use the [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator:

The following code shows how to remove a property:

```javascript
classroom;
=> {name: "WDI 10 Rocks!", campus: "Ponce City Market!", size: 10};
delete classroom.size;

classroom;
=> {name: "WDI 10 Rocks!", campus: "PCM!"}
```

<br />

## Object Methods

As we have stated before, the value of a property can be anything in JavaScript, which means that we can also attach functions to object properties. When a function is attached to a property, this function becomes a `method`. Methods are defined the exact same way as a function, except that they are assigned to a key, and are the property of an object.

We will be discussing functions in more detail tomorrow.  

```javascript
var classroom = {
  name: "WDI 10 Rocks!", // key: value,
  campus: "Ponce City Market!", // key: value,
  size: 10,
  start: "04/24/2017",
  instructors: ['Danny', 'Maren'],
  sayHello: function() {
    console.log("Hello, all of you crazy cats!");
  }
};
```

**How do we ask for values in an object? How do we call functions?**

To call the method, we add a pair of parentheses at the end of our key's name, in order to execute it:

```javascript
classroom.sayHello();
=> Hello, all of you crazy cats!
```

### Assigning a previously-defined function

We can attach regular functions to objects as methods, even after they are created.

```javascript
var goodbye = function() {
  console.log("See ya later!");
}

classroom.sayGoodbye = goodbye;  

classroom.sayGoodbye();
=> See ya later!
```

## This keyword in objects

In JavaScript, the `this` is a keyword that refers to the current object. When used in a method on an object, it will always refer to the current object.

```javascript
var classroom = {
  name: "WDI 10 Rocks!", // key: value,
  campus: "Ponce City Market!", // key: value,
  start: "04/24/2017",
  instructors: ['Danny', 'Maren'],
  sayHello: function() {
    console.log("Hello, all of you crazy cats!");
  },
  sayGoodbye: function() {
    console.log("See ya later!");
  },
  sayHelloToOne: function(instructorIndex) {
    console.log('Hi, ' + this.instructors[instructorIndex] + ".");
  },
  classInfo: function() {
    console.log(this.name + " It is located at " + this.campus + " The class started on " + this.start + ".");
  }
};
```

<br />

### Enumerating properties of an object

There are three native ways to list the properties of an object we are just going to explore the `for ... in` loop:

* [for...in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) This method traverses all enumerable properties of an object and its prototype chain.

```javascript
for (var eachKey in classroom) {
  console.log(eachKey);
}
```

Which items in the object are returned? And which are missing?

We only see the keys returned, right?  In order to see the values returned, we need to use bracket notation.

```javascript
for (var eachKey in classroom) {
  console.log(classroom[eachKey]);
}
```

You can use the **bracket notation** with for...in to iterate over all of the enumerable properties of an object.

Other methods to access the keys/values of an object.

* [Object.keys(classroom);](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)  This method returns an array with all of the enumerable property's names/the keys of the object classroom.
* [Object.getOwnPropertyNames(classroom);](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) This method returns an array containing all of the enumberable property's names/the keys of the object classroom.
* [Object.values(classroom);](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

<br />

## Independent Dream Vacation Exercise (15m)

- Create a vacation object, which has the following properties:

  - `city` // a string
  - `country` // a string
  - `local_phrase` // a string

  And the following methods:

  - `summary`: produces a string the summarizes the vacation, including it's city, country, and a local phrase.

- Create 2 dream vacations. Make sure that both objects have all of the same properties and methods defined. (You might set them to variables that describe the vacation via city, instead of just typing vacation and vacation_01.)

- Practice using dot notation and bracket notation for retrieving these properties.

**We will discuss constructor functions in a few weeks.  Constructor functions will help, in terms of you not having to create a new object every time that you would like to create a new dream vacation.**

## Conclusion (5m)

We will continue to use JavaScript objects every day, and you will have plenty of time to practice creating and using objects in JavaScript. There are a lot of resources available on the web for you to dive deeper, but the most detailed and easily understood one is probably on MDN- Mozilla Developer Network.

- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Intro to Object-Orientated Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- [Objects in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

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

##### Exercise Solution

```javascript
var cinque_terre = {
  city: "Cinque Terre",
  country: "Italy",
  local_phrase: "Bonjourno",
  summary: function() {
    console.log('I would love to go to ' + this.city + ', ' + this.country + '. And learn a phrase other than ' + this.local_phrase );
  }
}

var oaxaca = {
  city: "Oaxaca",
  country: "Mexico",
  local_phrase: "Hola",
  summary: function() {
    console.log('I would love to go to ' + this.city + ', ' + this.country + '. And learn a phrase other than ' + this.local_phrase );
  }
}
```