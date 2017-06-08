---
title: Classes and Inheritance
type: lesson
duration: "1:25"
creator:
    name:  Colin Hart
    campus: WDIR
competencies: Programming
---

# Classes & Inheritance in Ruby

### Objectives

  - Create your own classes.
  - Define object properties and methods
  - Write getter methods and setter methods to retrieve and set a property's value
  - Explain the phrase "everything is an object" – including abstract things, basic data types, and objects we make up ourselves
  - Explain how an object's properties are only accessible with getter methods
  - Write a methods that takes no parameters, multiple necessary parameters, and optional parameters
  - Demonstrate & explain instantiation


## Intro

What is inheritance?

Inheritance is a pattern we can implement where one class inherits behavior from another class.

Some languages offer multiple inheritance, meaning a class can inherit from many sources. In ruby the inheritance chain is perfectly linear. Each class can only have one parent, but have many children.

Where do we see the inheritance chain already?

Call `.ancestors` on any object in ruby.

```
String.ancestors
Array.ancestors
self.ancestors
Symbol.ancestors
```

As we can see inheritance is not just something useful to know it's also occurring all the time in the Ruby language itself.

## Is there any other reason why we might want to know about inheritance?

One, it's just a good thing to be aware of in terms of it's existence. Is it a vital skill that you need to be able to implement on a moments notice like iterating over an array. No.

Is it a pretty ubiquitous pattern that is foundational in many languages. Sure is.

Two, it's how we'll hook into Rails. In express we just required a module and called methods on it like `.get`,`.put` or accessed the Express Router with `.Router`

In Rails we'll build classes that inherit behavior of a controller, a model, a router.


## build a Pet class

 - Should start with
   * house_trained as boolean
 - initialized with
   * age as an integer
   * sex as a string
   * disposition as a string

 - a method called sleep on the couch that logs something

 - method called beg for food that logs something

 - add attr_accessor to all attributes

## build a Cat class

  - should be initialized with:
    * breed as a string
    * snark as a boolean

  method meow => logs "meoww"

  - add attr_accessor to all attributes

## build a Dog class

  - should be initialized with:
    breed as a string
    happy always true

  method bark => logs "woof woof"

  - add attr_accessor to all attributes

# Inheritance

Add: `< Pet` to the Cat and Dog class:

```ruby
class Cat < Pet
  [...]
end

class Dog < Pet
  [...]
end

```

Add these classes to pry and initialize a new Cat and a new Dog class.

Ask for the ancestors of each instance `.ancestors`, you'll see that each inherits from Pet. Cat & Dog  have all the state and behavior that belongs to the pet class as well as their own.

## Key word super

The super keyword can be used to call a method of the same name in the superclass of the class making the call.

A simple example first:

```ruby

class SongPartA
  def work
    puts "\tWork, work, work, work, work, work"
    puts "\tsay me have to"
    puts "\tWork, work, work, work, work, work!"
  end
end

class SongPartB < SongPartA
  def work
      puts "\tHe see me do me"
      puts "\tDirt, dirt, dirt, dirt, dirt, dirt!"
      puts "\tSo me put in"
      puts "\tWork, work, work, work, work, work"
  end
end
```

1. No super
2. Add super at the end of the work method
3. Add super at the beginning of the work method

What does super do?

How about a slightly more relevant example?

```ruby
class Bicycle  
  attr_reader :gears, :wheels, :seats  

  def initialize(gears = 1)  
    @wheels = 2  
    @seats = 1  
    @gears = gears  
  end  
end  

class Tandem < Bicycle  
  def initialize(gears)  
    super  
    @seats = 2  
  end  
end  
t = Tandem.new(2)
```
