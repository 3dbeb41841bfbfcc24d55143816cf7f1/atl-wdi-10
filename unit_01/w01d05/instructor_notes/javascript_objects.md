---
title: JavaScript Objects
type: lesson
duration: 1hr
creator:
  name: Colin Hart
  campus: WDIR
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


## Opening

### What is an object?

* Objects are a type of data structure that is nearly universal across programming languages, although they may have different names in different languages (in Python they're called a dictionary, in Ruby they're called a hash)
* Like arrays, objects can hold multiple pieces of data of varying types; but unlike arrays, objects use named keys rather than ordered indices to order and access those pieces of data
* In JavaScript, an object is a type of key-value store, or a way to group many pairs of keys and values together

Example: A car has properties, a type of engine, a color, a certain number of seats etc. Following the same logic, a JavaScript object may have **properties** and **values** for these properties.


<!-- Primitives are values, they have no properties. In JavaScript there are 5 primitive types: undefined , null , boolean , string and number. **Everything in JavaScript is an object**.


EXERCISE: Run the following commands. Is this what you expected? Respond in slack why or why not?

```
typeof new Number(5)
typeof new String('jekyl')
```


SideNote: this is a little misleading because we have see that string and number both of helper methods `string.length` and `(number).toString()` for example. For now, just know that javascript is doing a bit of coercion here to allow us to run the following:

```
var ten = new Number(5) + 5
var show = new String('jekyl') + '& mr hyde'
``` -->

### Collections of name-value pairs

#### Object literal syntax

Strings are 'quotes', arrays are ['square braces'], objects follow the same lexical pattern but use `{curlyBraces: 'and are structured as pairs'}`, the `key` is before the colon, the `value` is after the colon.
Like arrays, these key-value pairs will be comma separated!

```javascript
var myObject = {};
```

## Object Properties

Objects in JavaScript **always** have properties associated with them.

You can think of a property on a JavaScript object as a type of variable that contains a value. The properties of an object can be accessed using "dot notation":

```javascript
var person = {
  name: "Colin"
}

person['name']
=> "Colin"
```

You can define or re-assign a property by assigning it a value using `=` as you would a normal variable.

```javascript
var person = {
  name: "Colin"
}

person['name']
=> "Colin"

person['name'] = "Brendzel"
person['name']
=> "Brendzel"
```

## Creating an object with properties

We are going to create an object `classroom` that contains properties `name` and `campus`:

```javascript
var classroom = {};
=> undefined

classroom['name']= "WDIr";
=> "WDIr"

classroom['campus'] = "The World!";
=> "The World!"

classroom
=> Object {name: "WDIr", campus: "The World!"}
```

#### Dot notation

There is another way to set properties on a JavaScript object.

```javascript
classroom.name   = "WDIr";
classroom.campus = "Your house";
```

This syntax can also be used to read properties of an object:

```javascript
console.log(classroom.name);
=> "WDIr";
```

For more details see [MDN's Documentation on Property Accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors).


#### Deleting properties

If you want to delete a property of an object (and by extension, the value attached to the property), you need to use the [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator:

The following code shows how to remove a property:

```javascript
var classroom = {name: "WDIr", campus: "Everywhere!", start: "12/05/2016"};
delete classroom.start;
classroom
=> {name: "WDIr", campus: "Everywhere!"}
```

## Object methods

As we've said before, the value of a property can be anything in JavaScript, means we can also attach functions to objects properties. When a function is attached to a property, this function becomes a `method`. Methods are defined the exact same way as a function, except that they have to be defined as the property of an object.

Think back to our morning lecture with functions: remember our last example?

```javascript
var classroom = {
  name: "WDIr", // key: value,
  campus: "Everywhere!", // key: value,
  start: "12/05/2016",
  students: ['Alejandra', 'Sophia', 'Alan', 'Audrey', 'David']
  sayHello: function() {
    console.log("Hello");
  }
};
```

EXERCISE: How do we ask for values in an object? How do we call functions?

To call the method, we add a pair of parentheses to execute it:

```javascript
classroom.sayHello();
=> Hello

// OR

classroom['sayHello']()
=> Hello
```

#### Assigning a previously-defined function

We can attach regular functions to objects as methods, even after they are created.

```javascript
var sayHello = function() { console.log("Hello"); }

classroom.sayHello = sayHello;  

classroom.sayHello()
=> Hello
```

##`this` for object references

In JavaScript, `this` is a keyword that refers to the current object. When used in a method on an object, it will always refer to the current object.


```javascript


var classroom = {
  name: "WDIr",
  campus: "Everywhere!",
  start: "5/16/2016",
  students: ['Alejandra', 'Sophia', 'Alan', 'Audrey', 'David']
  sayHelloToEveryone: function() {
    console.log("Hello " + this.students);
  },
  sayHelloToOne: function(studentIndex) {
    console.log('Hi ' + this.students[studentIndex])

    // console.log(`Hi ${this.students[studentIndex]}`)

    // or we could get fancy!
    // console.log(this.students[this.students.indexOf(student)])
  },
  classInfo: function(){
    console.log("This is " + this.name + " and the class starts on " + this.start);
  }
};
```

#### Enumerating properties of an object

There are three native ways to list the properties of an object we're just going to explore the `for ... in loop`:

* **for...in loops** This method traverses all enumerable properties of an object and its prototype chain
* **Object.keys(o)**  This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o.
* **Object.getOwnPropertyNames(o)** This method returns an array containing all own properties' names (enumerable or not) of an object o.

**Loop over an objects properties**

You can use the bracket notation with for...in to iterate over all the enumerable properties of an object.

If you're confused by the difference between `==` and `===` review MDN's notes on [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_()) and [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity_strict_equality_())

## Independent Monkey Exercise (20 minutes)

- Create a `monkey` object, which has the following properties:

  - `name`
  - `species`
  - `foodsEaten`

  And the following methods:

  - `eatSomething(thingAsString)`
  - `introduce`: producers a string introducing itself, including its name, species, and what it's eaten

- Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

- Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes for retrieving properties (dot notation and brackets).

## Conclusion (5 mins)

We will use objects in JavaScript every day, and you will have plenty of time to practice creating and using objects in Javascript. There are a lot of resources available on the web for you to dive deeper, but the most detailed and understandable one is probably MDN.

- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Intro to Object-Orientated Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- [Objects in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
