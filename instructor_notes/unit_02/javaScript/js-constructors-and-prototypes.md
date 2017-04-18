---
title: Constructors and Prototypes
type: lesson
duration: "1:25"
creator:
    name: Alex Chin
    city: London
adapted:
    name: Marc Wright
    city: WDIR
competencies: Programming
---

# Constructors and Prototypes

### Objectives
*After this lesson, students will be able to:*

- Identify the properties that are inherited by an object's prototype
- Use the `new ` operator with one or more arguments to set initial properties on a newly-constructed object

### Preparation
- Specify a new object's prototype using the `Object.create` method
- Describe the prototype inheritance chain

*Before this lesson, students should already be able to:*

- Write JavaScript functions
- Describe the difference between functions and methods in JavaScript
- Describe how functions work with variables in JavaScript

<br>
## &#x1F535; **You Do**

Read this article: https://blog.pivotal.io/labs/labs/javascript-constructors-prototypes-and-the-new-keyword

<br>

## Intro (10 min)

> Prototype-based programming is a style of object-oriented programming in which behavior reuse (known as inheritance) is performed via a process of cloning existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming. Delegation is the language feature that supports prototype-based programming. - wikipedia

As we develop more programs we run into the concept of DRY, short for _Don't Repeat Yourself_. With DRY, we begin practicing the declaration of variables whose values range from arrays to functions, all for the purpose of being able to refer to and reuse these already defined values. However, what do we do when we want to go beyond reusing a value which may just be a primitive or an object containing some key/value data? What if instead we want to clone an object that has _behaviors_ we seek to reuse?

For example, say we are developing a revamped version of the video game Street Fighter. Each character may have their own unique fighting tricks, but in general, all character objects should have at least the same kick and punch abilities. With DRY in mind, when we develop a new fighter object we know we would want to avoid recreating any of these general behaviors and instead code a solution that clones them. This solution is performed with prototypal inheritance.

<br>

## Object Orientated Programming in Javascript - Intro (5 mins)

#### Review

When we talk about classes in Object Oriented Programming, we're describing a way of organizing your code and schema to model real world problems and data structures in our applications.  In essence, We use classes to "model" the world around us.

But, technically speaking, there are no classes in JavaScript - that's because even though JavaScript is object-oriented, it is not a class-based language. Rather, let's describe it as [prototype-based](https://en.wikipedia.org/wiki/Prototype-based_programming). But, we can use JavaScript just like we're used to - as a class-based language - if we think of the constructor functions like classes, like so many people do.


#### Prototypal Inheritance:

Javascript uses objects, function objects (generally everything in Javascript is an object except primitives), to perform inheritance. Javascript has two different features, constructors and prototypes, which accomplish these tasks:

- a _constructor_ function manufactures new objects
- a _prototype_ property defines the behavior of new objects manufactured by the constructor

Now that we know the key differences between a prototype-based and a class-based language, let's take a deeper dive into the mechanics of a constructor and a prototype.

#### Syntax to create an Object - Demo (15 mins)

The syntax for creating Objects in Javascript comes in two forms:

- the **declarative (literal)** form
- and the **constructed** form

The literal syntax for an object looks like this:

```javascript
var myObj = {
  key: value
};
```

The constructed form looks like this:

```javascript
var myObj = new Object();
myObj.key = value;
```

#### What is a constructor function?

A constructor is any Javascript function that is used to return a new object. The language doesn’t make a distinction. A function can be written to be used as a constructor or to be called as a normal function, or to be used either way.

```javascript
function Person(name){
  this.name = name;
}
```

***note:*** Out of convention, just as we would capitalize a class name, we capitalize the name of our constructor function.

#### What about the `new` operator?

The [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) operator in Javascript creates a new instance of a user-defined object type or of one of the built-in object types that has a constructor function.

Now that we have a constructor function, we can use the `new` operator to create a `Person`:

```javascript
var jenny = new Person('Jenny');
// undefined
```

To be sure `jenny` is in fact a `Person`, we can:

```javascript
jenny instanceof Person;
// true
```

Remember, we do this all the time using built in constructors like String, Array, etc:

```javascript
var str = new String("abc") // "abc"
str instanceof String // true
```

<br>

## &#x1F535; **You Do** - Constructor Practice (15 min)

Go into the console of your browser (or Repl.it) to create a few constructor functions like the Person example above. Instantiate a few new objects from each constructor and then assert its reference. 

For example, create constructor functions for `Dog`, `Car`, or `Book` and instantiate new objects from them.

<br>



## Literal vs Constructor Notation - Codealong (15 mins)

Okay - if we can use both literal and constructor syntax to create objects, what should we use and when should we use it? Honestly, they're one in the same. The key difference being when you need multiple instances of your object:

- An object defined with a constructor allows for multiple instances of the object
- Object literals are basically singletons with public variables/methods

  -  _"The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton."_ - dofactory.com

If we created a person with the literal notation:

```javascript
var Person = {
  name: "Schmitty"
}

Person
// Object {name: "Schmitty"}
```

To create another Person, we would need to type this code out again. Or we could use a constructor and do:

```javascript
function Person(name){
  this.name = name;
}

var person1 = new Person("Dave");
var person2 = new Person("John");
```

A constructor acts as a template for all new People in the future. However, it's a little bit more than just a template because of how Prototypical inheritance works, as instances of an Object have links to the object that created them.

#### .constructor

Let's say we wanted to figure out where a "class" came from: we can use use the property [`.constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) to take a look at the function that instantiated a new object:

```javascript
Person.constructor
// Object()
```

A new function is always an example of Object() in Javascript.

Now, if we instantiate the Person class -  with the declarative syntax - we see that the constructor (alex) is now a reference to the custom constructor function (`Person(name)`).

```javascript
function Person(name){
  this.name = name;
}

var alex = new Person("alex");
alex.constructor
// Person(name)
```

We can also use [`Object.getPrototypeOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) to do the same:

```javascript
Object.getPrototypeOf(alex)
// Person {}
```

<br>

## &#x1F535; **You Do** - Model a Hero (15 min)

Suppose we had the following object literal describing a favorite comic book hero:

```js
var batman = {
  name: 'Bruce Wayne',
  alias: 'The Bat-man',
  power: "works out alot",
  usePower: function() {
    return 'Batman works out a lot';
  },
};
```

And now we want another object literal describing a different hero:

```js
var wonderWoman = {
  name: 'Diana Prince',
  alias: 'Wonder Woman',
  power: 'lasso',
  usePower: function() {
    return 'Wonder Woman lasso';
  },
};
```

What features do `batman` and `wonderWoman` share?  Remember to think about
attributes and methods when you're modeling.  Also take note of what differs
between them.

Make a `Hero` constructor function based on the above objects (remember to pass in the appropriate arguments).


<details>
<summary>SOLUTION</summary>

```js
var Hero = function (name, alias, power) {
  this.name = name;
  this.alias = alias;
  this.power = power;
  this.usePower = function(power){
    return `${this.alias} ${this.power}`;
  };
};

var wonderWoman = new Hero("Diana Prince", "Wonder Woman", "lasso");
```
</details>

<br>


## Prototype chains and inheritance - Intro (10 mins)

There is only one construct when it comes to inheritance in JavaScript - objects.

All objects have internal links to other objects - we call these "other objects" prototypes; and that prototype object will have an inherited prototype of its own.  This goes on until we find an object with a `null` prototype. By definition `null` does not have a prototype; it acts as the end of the prototype chain.

For example, lets say we try to call a `.kind` property on a `zack` object: `zack.kind`

![spyqq7jwqubh4oyfvqnnw7g](https://cloud.githubusercontent.com/assets/40461/8396752/737ff1c0-1dab-11e5-83b0-4f380980b2b5.png)

We know that objects are basically key/value pairs. When you ask for a key's value from an object, JavaScript will look, first, to find the value in the instance of the object, and then, if it doesn't exist, it will look to that object's prototype 'default value'. Note that these inheritance chains can go as long as you want, but generally, it's better to keep them short and have your code easier to understand.

For example:

```js
var marc = new String("Marc");
marc.length

=> 4 
```

Where did the `.length` property come from? I didn't explictly define it on `marc`, but it's inherited from `String()`.

```js
marc.constructor
=> [Function: String]

marc instanceof String
=> true
```

Open the Dev Tools and check out the methods available under `__proto__`

I could even add new properties to the `String` object's prototype that will be passed to all instances:

```js
String.prototype.schmitty = "Hey there, my name is Schmitty"

marc.schmitty;
=> "Hey there, my name is Schmitty"


```
<br>

## &#x1F535; **You Do** - Hack the JS String Constructor (5 min)

- Create an instance of a String using the String constructor
- Using the String's `.prototype`, add a property that will return "WDI Rules!"
- Check out the new property on your instance's `__proto__` in the Dev Tools

<br>


## Adding Properties and Methods to Objects - Codealong (15 mins)

Let's revisit the constructor function from earlier, and use it to create two people from the Person class:

```javascript
function Person(name){
  this.name = name;
}

var mum = new Person("mum");
var dad = new Person("dad");
```

Of course, we'll want to add information to our existing objects.  Super easy with dot notation:

```javascript
mum.nationality = "British";
// "British"
```

And dad will be unaffected:

```javascript
dad.nationality
// undefined
```

How about adding a method? Also easy:

```javascript
mum.speak = function() { alert("hello"); }
mum.speak()
```

Again, `dad` will not have this function, only `mum` will have it.


#### What if we wanted to change all instances of the Object?

If we wanted to add a new property to both `mum` and `dad` after they've been instantiated, we can define a property on the shared prototype; and since the `mum` and `dad` objects have the same prototype, they will both inherit that property.

```javascript
Person.prototype.species = "Human";
// "Human"

mum.species
// Human

dad.species
// Human
```

Amazing!


#### Use the Prototype

Using Prototype will enable us to easily define methods to all instances of the instances while saving memory. What's great is that the method will only be applied to the prototype of the object, so it is only stored in the memory once, because objects coming from the same constructor point to one common prototype object.

In addition to that, all instances of Person will have access to that method.

```javascript
function Person(name){
  this.name = name;
}

Person.prototype.speak = function(){
  alert("My name is, " + name);
}

var mum = Person("mum");
var dad = Person("dad");

mum.speak == dad.speak;
// true
```

So if you have methods that are going to be shared by all instances of an Object, they can all have access to them.

<br>

## Create your own - Independent Practice Part 1

You are going to take over the Javascript world with a new army of Soldier objects.

- Create a new soldier constructor function that allows you to create soldiers
- A soldier should be able to have a `name` and `number`
- The default type of a soldier should be `foot-soldier`
- Each soldier in the army should have the same battleCry, an alert of "FREEDOM!"

<br>

## Create your own - Independent Practice Part 2
Create a constructor for playing cards that have the following attributes 

- Suit 
- cardValue

<br>

## Create your own - Independent Practice Part 3

Create a constructor for a BlogPost class.

- The important attributes of a post are title, date, author, and text.
- Implement a method named publish which console.logs the text

When you are done, the following code should create an appropriate object:

```js
var blog = new BlogPost ("Day 4 of WDI! (wutwut)", 'Thursday, October 1', 'Margie EveryStudent', 'Wow, what a week! I love WDI');
```

- Create 3 Blog posts
- Implement a prototype method that will console.log the number of characters in the text.

<br>

## Closure

Thinking of real world problems in this object context is a new challenge. Identify another problem domain and white board the JavaScript representation in an object.

For Example: A bank ATM could use what kind of objects? With what attributes? With what abilities? account user withdraw ...etc.

- Describe the purpose of a constructor function.

<br>

## Further Reading - Multiple inheritance

At the moment, we are only using constructors to create an instance of one Object. You can do multiple inheritance in Javascript using a number of different methods:

#### Creating a prototype chain

Setting a constructor's `.prototype` property to an instance of another constructor function initializes the prototype chain (sets up inheritance), this is done only once since the prototype object is shared by all initialized objects.

```javascript
function Human(){
  this.alive = true;
}

function Person(name){
  this.name = name;
}

// Would normally be a reference to Person {}
// But we are changing it to Human {} to extend the Human {}
Person.prototype = new Human();

var alex = new Person("Alex");
```
![multiple](https://cloud.githubusercontent.com/assets/40461/8397597/a3e08500-1dc9-11e5-9ba2-a911187730bd.jpg)

Instead of doing:

```javascript
Person.prototype = new Human();
```

You can actually use the new [`Object.create`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create) method:

```javascript
Person.prototype = Object.create(Human.prototype);
```

Object.create will not actually run the constructor code, making performance a little better.


#### Object.create

We can also use [`Object.create`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create) to build an object that inherits directly a first object passed as the first argument.

You can create a sort of constructor method to use with Object.create:

```javascript
var person = {
  alive: true
}

function makePerson(name){
  var p = Object.create(person);
  p.name = name;
  return p;
}

makePerson("Alex");
// Object {name: "Alex"}
```

![alex](https://cloud.githubusercontent.com/assets/40461/8397536/ddd90c1c-1dc6-11e5-89f3-546254537061.jpg)
