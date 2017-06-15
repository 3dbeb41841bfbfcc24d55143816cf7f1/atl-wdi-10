---
title: Objects & Methods in Ruby
type: lesson
duration: "1:25"
creator:
    name: Micah Rich, adapted by Colin Hart for WDIR
    city: LA
competencies: Programming
---

# Objects & Methods in Ruby

### Objectives

- Describe objects and how they differ from a JS objects
- Define object properties and methods
- Write getter methods and setter methods to retrieve and set a property's value
- Explain the phrase "everything is an object" – including abstract things, basic data types, and objects we make up ourselves
- Explain how an object's properties are only accessible with getter methods
- Write a methods that takes no parameters, multiple necessary parameters, and optional parameters
- Demonstrate & explain instantiation

### Preparation

*Before this lesson, students should already be able to:*

- Explain JS objects, conceptually
- Write simple Ruby methods

## Intro (15 mins)

## What is OOP?

Ruby is an object-oriented language. That means it's based on the idea that you'll build your application with objects in mind.

As you learned earlier in the class, an object is a collection of related attributes (properties) and methods (behavior). You can think of an object as a little machine: it has displays you can read and buttons you can push.

When you write an object-oriented application, the idea is that you write the blueprints for these machines, and then you write a sequence of events your users can initiate in which these machines interact with each other.

Much of the code you see today will be very similar to what you encountered when reviewing OOP in the past. That's because classes are a concept that have been around for decades! Use this pre-existing knowledge to your advantage in today's class!


## OOP Design
We've talked quite a bit about object oriented programming as a paradigm, but we haven't talked much about how to break a problem down into object components.

Example: Monopoly 
> "Monopoly is a game where players try to accumulate wealth through property ownership and money"
* Game Board
* Players
* Game Tokens
* Property Cards
* Money

Spend 10 minutes working with a partner to come up with at least three types of objects that you might define when creating the following examples. We'll go over your answers as a class.

* Amazon
* A Homework Grading App
* An Attendance Taking App
* Lyft

> A helpful approach might be to take the "nouns" involved in the application and say they are objects.

<!--WIP-->
## Structure of a Class

What were the key components of a constructor function in javascript?

- semantic naming with capitalization.
- saving properties passed as arguments as pieces of state like name, age etc.
- designing methods that exist on the object by default
- using the new keyword to instantiate a new instance of that object

```js
var Person = function(name, age) {
  this.name = name;
  this.age = age;

  this.howOld = function() {
    console.log(`Im ${this.age} old.`)
  }
  this.whatsYourName = function() {
    console.log(`My name is ${this.name}.`)
  }
}

```


## Codealong - Creating an instance of the Object Class (20 mins)

Let's start with something fun & simple so you can get the hang of it.

```ruby
class BananaStand
end
```

There's no real information in there yet, but now that we've defined it, exists. How do we make a new Banana, then?

```ruby
my_banana = BananaStand.new
```

> Nice, that's called initializing a new _instance_. When thinking in objects, we consider this _class_ kind of like a blueprint for all other bananas (or objects) we make, and an _instance_ is a clone of that class.

> For example, you'd consider the chair you're in now a single _instance_ of _a_ chair - it was created using the known traits of a chair. You would consider the concept of a chair, in general, the class.  All chairs are create using the known traits of the Chair Class, or the concept of a chair.

Using code, let's see if we can find a way to describe what bananas are all about. How would we do this if it were a hash? Maybe something like:

```rb
my_hashed_banana_stand = {
  color: "yellow",
  opened_in: 1953,
  manager: "George Michael",
  money: true
}
```

Those are all excellent properties, let's see how we'd make those into _attributes_ of our object.

```ruby
class BananaStand
  def color
    "yellow"
  end
  def opened_in
    2003
  end
  def manager
    "George Michael"
  end
  def capital
    true
  end
end

my_banana_stand = BananaStand.new
my_banana_stand.color # => yellow
my_banana_stand.manager # => George Micael
my_banana_stand.money #=> True
# etc.
```

Excellent, we call those "getters" or "getter methods", because they're getting information from inside our object, but the problem _here_ is that our info is hardcoded.

Imagine we're making multiple instances of the model - we want a lot of banana stands - we might need to change who the manager is for each instance of the banana stand.

This is where we start mixing in what we know about variables.  Specifically, instance variables.

```ruby
class BananaStand
  def color
    "yellow"
  end

  def opened_in
    2015
  end

  def capital
    500
  end

  # getter for "manager"
  def manager
    @manager # this could, for the record, be named whatever you like, but it's best to keep it obvious & simple
  end

  # setter for "manager"
  def manager=(the_name_of_my_manager)
    @manager = the_name_of_my_manager
  end
end
```

That's interesting – it's sort of just a normal method with one argument, it just happens to have an = in the name. `manager=` instead of just `manager`

Let's see it in action.

```ruby
my_banana_stand = BananaStand.new
my_banana.manager # => nil, we haven't set it
my_banana.manager = "Tobias" # hey, look manager=, just with a space
my_banana.manager # => "Tobias"
```

That's fantastic. Now if we made another, separate instance, we could have two different banana stands, both _instances_ of our blueprint _class_.

## Independent Practice (15 minutes)

Define a class called RocketShip

After instantiation you should be able to set the name of the pilot, the co-pilot, and the ships destination.

## Some important details – Codealong (10 minutes)

#### Faster Coding Getters/setters

Now that you're experts on getters & setters, you should know that you don't always have to code them by hand. Ruby comes with a shortcut to make using them faster:

```ruby
class BananaStand
  attr_accessor :color, :opened_in, :manager, :money
  # there's also just attr_reader for getters & attr_writer for setters
end
```

That gives you getters & setters for each of those attributes. A little faster, yeah?

## the initialize method

We've been building our classes from in the inside out, hardcoding values and then manually setting values after instantiation. But how do you set values on instantiation? `def intialize`

```ruby
class BananaStand
  attr_accessor :color, :opened_in, :manager, :money

  def initialize(color, opened_in, manager, money)
    @color = color
    @opened_in = opened_in
    @manager = manager
    @money = money
  end

end

new_stand = BananaStand.new('red', 2017, 'Jamie', -500)
```

The `initialize` method is called immediately right after `.new` is called on a class.

By this point you should be recognizing this pattern:

```js
var BananaStand = function(color, openedIn, manager, money) {
  this.color = color;
  this.openedIn = openedIn;
  this.manager = manager;
  this.money = money;
}

var myStand = new BananaStand('Zebra stripes', 2017, 'Jamie\'s Evil Twin', 500)
```

Back to Ruby for a second:

```ruby
class BananaStand
  attr_accessor :color, :opened_in, :manager, :money

  def initialize(color, opened_in, manager, money)
    @color = color
    @opened_in = opened_in
    @manager = manager
    @money = money
  end

end

new_stand = BananaStand.new('red', 2017, 'Jamie', -500)
```

# Instance variables and methods

As you should remember instance variables are defined by adding the `@` sigil as the first character of a variable name.

Instance variables have an expanded scope so that they can be seen anywhere within the object they were defined in.

In our examples yesterday they were defined globally. Now they're defined inside of Banana stand so they can be seen inside an `instance` of BananaStand but not outside.


## Conclusion (5 mins)

Later on, we'll see some libraries that use this sort of stuff behind the scenes – we'll be creating _models_, which are just fancy word for classes, in a larger application, that we can use to instantiate objects and save to a database.

For now, playing around and creating regular old Ruby objects, initializing them & creating instances, and writing getters & setters will give us a good foundation for creating more advanced models down the road.

- How do you define a Ruby object from scratch?
- What's a getter for? What's a setter for?
- What sort of variable do you use inside an object to share information between methods?
- What's initializing? What's an instance?
