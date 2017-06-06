---
title: Intro to Ruby
type: lesson
duration: "2:00"
creator:
    name: Colin Hart
    campus: WDIR
competencies: Programming
---

# Lesson Objectives

- Accurately compare JS syntax to Ruby
- Build equivalency of understanding of foundational Ruby to JS
- Advanced Ruby argument discussion
- Explain and apply Ranges
- Interact with symbols and explain their significance
- Concretize scope in Ruby by interacting with different variables

# Intro

Ruby is a server-side scripting language written on top of C.

It was written by Yukihiro "Matz" Matsumoto, in 1995, who now works as the lead Ruby architect at Heroku.

His philosophy in building ruby was not about simplicity, but making programming in Ruby feel natural in a way that mirrors life

> “trying to make Ruby natural, not simple,”

Performing everyday tasks, while intricate and complex, come to you naturally.

> Ruby is simple in appearance, but is very complex inside, just like our human body.

#### Flexibility

Ruby is flexible making it ideal for scripting. What this means is that there are no* blackboxes in Ruby. You can open up the number class or the nil class and define whatever methods you want on it.

For example. The representation of `null` in Ruby is `nil` which is, in fact an object.

```
nil.class
=> NilClass
```

If you wanted nil to have a method called `.hello` you can just add it to the class

```ruby
class NilClass
 def hello
   return "Hey Booo"
 end
end

nil.hello
```

This is an extreme example to make the openness and flexibility of Ruby clear. But perhaps you can imagine how this could be a powerful tool in the hands of a skilled Rubyist.

#### Readability

Ruby is hyper readable the lack of `;`, `()`, `{}`, keywords like `var`, `return`, `function` mean that your semantic naming of methods and variables combined with the semantic nature of the core library methods result in code that feels more like English than a programming language.

#### Frameworks

We're going to learn Ruby on Rails early next week. It's a application framework for Ruby similar to Express but 10x more robust.

Ruby has a smaller framework called Sinatra, which syntactically is _very_ similar to Express, which you could easily learn on your own.
 
Find out more about Sinatra [here](https://github.com/sinatra/sinatra).

## Methods, Arguments, and blocks

We use the word `method` in Ruby, never `function`. If we do it's mostly out of habit.

> Functions are defined outside of classes, while Methods are defined inside of and part of classes.

In Ruby we define methods using the keyword `def` and `end`

In JavaScript you can define anonymous functions and pass them as arguments. Effectively saving a function to a variable. Ruby does have some powerful metaprogramming and functional programming features that you can learn. But these features are not the initial highlight of the Ruby language

TLDR:

Methods **always** require a name in Ruby.

```ruby
def hello
end
```

Passing arguments in Ruby works fairly similar to how to does in JS. They get passed as comma separated values after the method name

```ruby
def hello(name, salutation, small_talk, punctuation)
  "#{greeting} #{name}, #{small_talk}#{punctuation}"
end
```

Well that looks pretty similar, is there any behavior differences?

First, define the behaviors of arguments in JS

In Ruby, if you specify a number of arguments, the function must take that number of arguments. No more, No less. 

#### Less
```ruby
$ hello("Jamie", "Hark", "frickin' cold eh")

=> ArgumentError: wrong number of arguments (given 3, expected 4)
```

#### More
```ruby
$ hello("Jamie", "Hark", "frickin' cold eh", ".", "Forsooth, ye yonder pilgrim is quite the bespoke son of a tailors daughter, ai?")

=> ArgumentError: wrong number of arguments (given 5, expected 4)
```

SIDENOTE: Ruby's errors are amazing. Use them!

There are some fun ways to play with arguments and define further behavior:

#### Splat

```ruby
def add(*numbers)
  puts numbers.class
  sum = 0
  numbers.each do |num|
    sum += num
  end
  sum
end
```

```ruby
$ add(5,5,5,5,5)
Array # our puts statement
=> 25
```

#### Default arguments

```ruby
def drink_milk(thirsty=true)
  return "I'm not thirsty" unless thirsty

  "mmmmmm... milk...."
end
```

#### Woah, that return statement?

In Ruby, returns are implicit by design. Ruby will always assume that the last line of the method will be returned. So why the first return?

Can you read it in English? One of Ruby's biggest benefitsis that it reads pretty closely to English


## Bang methods and predicate methods
#### bang methods
Ruby is filled with sigils. A sigil in programming refers to a symbol that implies something about the code but doesn't actually have behavior.

`!` on it's own has some behavior and isn't a sigil on it's own

For example `!true` is going to return `false` because bang is a boolean evaluator that returns the opposite, sometimes called `not`

Bang methods like `.upcase!` the bang in this context is a sigil, meaning it's just a character. The implied behavior of a method ending in `!` is that it mutates the data it was called on.

For example:

```ruby
temp = "it's hot"

temp.upcase
=> "IT'S HOT"

temp
=> "it's hot"

temp.upcase!
=> "IT'S HOT"

temp
=> "IT'S HOT"
```

#### predicate methods

This is another sigil method. Predicate methods in a `?` the implication of the sigil is that the method returns a boolean value.

```
5.odd?
=> true
5.even?
=> false
```

## Variables - Codealong (25 mins)

Just like JavaScript (and literally every programming language), **we're gonna need some variables to hold stuff.**

_Unlike_ JavaScript, Ruby's variables don't need to be declared.

Where you're now used to:

```js
var genius;

genius = "me";
```

We can skip right to the good stuff:

```ruby
genius = "me"
```

Important to know how to use 'em. But that's only one type of variable, and there are a few.

### Types of Variables

Variables, of course, are just placeholders.

Let's talk about the different types of variables you'll encounter in Ruby. You'll need to use all of them at some point, but some more than others.

In these examples, we'll defined a variable, and then we'll write a tiny quick method that just spits that variable out, to see if it works.

#### Local Variable

A local variable (lower_snake_case) is a quick placeholder, and gets forgotten as soon as your method or function is over.

```ruby
some_variable = "donuts"

def some_method
  some_variable
end

some_variable # => "donuts"
              # because we're using it in the same place we defined it

some_method   # Run our method, when it was defined outside that method –
              # NameError: undefined local variable [blah blah blah]
```

These are great when you just need to temporarily store something or quickly give something a readable variable name, but won't need it later.

#### Instance Variable

An instance variable (lower_snake_case) is a variable that is defined in an instance of an object. That's not meant to be a fancy term - an instance is just an example of an object, one thingy in the great world of things.

```ruby
@some_variable = "donuts" # "donuts"

def some_method
  @some_variable
end

@some_variable # => "donuts"
some_method # => "donuts"
```

Remember that it works this way, because when we get to Objects/Classes later this week, you'll see that instance variables let us store a variable once and use it however many methods we need inside an Class.


## Loop syntax: Differences between JS and Ruby

Loops work almost exactly the same as JS, but use a slightly different syntax.

What are some different ways that you can loop in JavaScript?


### .each is going to be your go to

It works on both Arrays and Hashes (what we've been calling objects in JS)

```ruby
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

alphabet.each do |letter|
  puts letter
end
```

The big distinction here is the `do`, `end`, and the `|pipes|`

#### Do and end

These signify blocks, a block of code refers to a collection of statements. In JS you used blocks as a core part of defining functions.

```js
function drinkMilk(thirsty) {
  if (!thirsty) return "I'm not thirsty"

  return "mmmmmm... milk...."
}
```

The curly braces in the JS function represent a block.

Where is the block here?

```ruby
array.each do |letter|
  puts letter
end
```

We could also write it like this:

```ruby
array.each { |letter| puts letter }
```

In Ruby, you can use either `do end` or curly braces. However, per the style guide you only use curly braces for statements that can fit on one line. A line is defined as *less than 80 characters*. Otherwise, use `do` and `end` and multi-line.

#### Pipes

The pipes are how define the place holder in a loop.

Think back to JS, what would this function look like hint think .forEach?

```ruby
alphabet.each do |letter|
  puts letter
end
```

In JS `letter` would be defined as the argument in the anonymous function passed to the forEach method.

## Control Flow syntax: Differences between JS and Ruby

Is the most similar behavior wise.

Syntax differences:

- No parenthesis
- No Curly braces
- `elsif` instead of `else if`
- `if` statement closes with the key word `end`

```ruby
if variable < 10
  puts "I'm less than ten"
elsif variable > 10 && variable < 20
  puts "I'm less than 20"
else
  puts "I'm greater than 20"
end
```

#### Fun stuff with control flow

one line `if` and `unless` statements

```ruby
return "I'm not thirsty" unless thirsty
# synonymous
return "I'm not thirsty" if !thirsty

```

## Data Types in Ruby

**Question:** What data types have you guys been using in JavaScript? Let's write them on the board.

- **Booleans** are written as `true` and `false`
- **Numbers** are written as `12` or `9.45`
- **Strings** are written as `"awesome"`
- **Arrays** are written as `['x','y','z']`
- **Objects** are written as `{key: 'value', thing: true, stuff: [1,2,3]}`

Now, let's see which of those are similar in Ruby, and which are different.

- `true` or `false` are still booleans _(technically **TrueClass** / **FalseClass**)_
- `nil`, the equivalent of _nothing_ _(technically **NilClass**)_
- there's no Undefined object. _If something is undefined it'll just say so._
- `16.2` is a **Float** and`1` is an **Integer** _(technically a FixNum, but you can consider it the same thing)_
- `"hello world"` is still a **String**
- `[1,2,3,4]` is still an **Array**
- `{keys: ['some', 'values'] }` is called a **Hash**, but works the same

Most importantly, **in Ruby, _everything_ is an object**. We'll talk about that in more detail later, but that means that each of the above data types have methods & properties just like our JS objects did.

#### Let's recap our data types in Ruby:

- **Booleans** are written as `true` and `false`
- **Integers** are written as `12`
- **Floats** are written as `9.45`
- **Strings** are written as `"awesome"`
- **Arrays** are written as `['x','y','z']`
- **Hashes** are written as `{key: 'value', thing: true, stuff: [1,2,3]}`

Two new ones
- **Symbols** are written with the `:` sigil :i_am_a_symbol
- **Ranges** are written with `..` or `...` syntax as `1..5` or `1...5`

#### Duck-typing

Unlike JavaScript, Ruby has both and Integer and a Float class. This creates some interesting results! Let's take a look in IRB:

What happens if we do:

```ruby
5 / 2
#=> 2
```

Have we broken Ruby? No, we have given ruby two Integers (numbers with no decimal places) so ruby gives us an Integer back.

However, if we divide an Integer by a Float:

```ruby
5 / 2.0
#=> 2.5
```

This is called "Type Coercion" also known as "Duck Typing"; Ruby now knows that we want a Float back.

If an object quacks like a duck (or acts like a string), just go ahead and treat it as a duck (or a string).

#### Converting between data-types

If we want to convert one data type to another in Ruby, there are some built-in methods that we can use. We'll take a look at built-in methods in more detail in a later lesson, however for the minute let's use them and see the result:

```ruby
# Converting an Integer to a String
1.to_s
#=> "1"

# Converting a String to an Integer
"10".to_i
#=> 10
```

These type-conversion methods usually start with `.to_`.


## Working with Arrays - Demo (20 mins)

Just as a refresher – what are arrays for? What do they do? **They're for holding a collection of values**, that's it.

#### Making Arrays, Adding to Arrays

So, let's start simple – we make arrays in Ruby the same as we did in JS. Nothing unexpected here.

```ruby
numbers = [1,2,3,4] # I'm obviously an array
```

Then, once you've created an array, how do you imagine you add to an array?

```ruby
numbers.push(5) # dun, dah nun dun dun dun, push it
# => [1,2,3,4,5]
```

Similarly, we've got another old favorite – the shovel.

```ruby
numbers << "six" # there no shovel puns to see here
# => [1,2,3,4,5,"six"]
```

#### Removing From Arrays

Now, obviously it's possible to mix data types (Ruby does not care), but why would we want to? That'll be weird. Let's get rid of one.

```ruby
numbers.delete("six") # give it the value you want to get rid of
# => [1,2,3,4,5]
```

#### Useful Array Miscellany

There are so many great array methods - here are a few you'll probably use from time to time.

```ruby
# how many values are there?
numbers.length # => 5, of course

# just as you'd expect, get's the value at nth index
# remember, and indexes start at 0!
numbers[3] # => 4

# a handy method equivalent to numbers[0]
numbers.first
# also a handy method equivalent to numbers[numbers.length-1]
numbers.last

# and what if we need to rearrange? so useful!
numbers = [3,2,4,1,5]
numbers.sort # [1,2,3,4,5]
numbers.sort.reverse # => [5, 4, 3, 2, 1]
```

#### You'll be trying this soon, but first – iterating!

Now the good stuff – looping through our array and doing something with each value.

**How did we iterate over an array in JS?** It was pretty convoluted:

```js
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
};
```

We can do for loops in Ruby, too, but we've got something _much_ nicer:

```ruby
numbers.each do |number|
  puts "i am number #{number}"
end

# i am number 1
# i am number 2
# i am number 3
# i am number 4
# i am number 5

```

Isn't that just so incredibly readable?

#### Extra Detail: Dem Blocks Tho!

That `do`/`end` thing you're messing with is called a _block_, and it just runs the code in between, almost like a little function without a name - like anonymous functions in JavaScript or lambdas in Python.

You'll see blocks all the time, and you'll use `.each` like it's your job. It just loops through each value in your array and assigns a local variable (that you decide) to each object. You come up with what you want it called in the "pipes", aka those tall neighbors surrounding the variable: `|a_variable_of_my_choosing|`.


## Arrays - Independent Practice (10 minutes)

Alright, practice time. Quick solo challenge, we'll be setting a timer for 10 minutes!

- Given the following list of student names, **iterate over them**, **prepending** "A+ " if their name includes an "A" in it. Make a new array if you need to
- Then, **sort the students** so that A+ students come first
- Next, **select just the students with A+** in their names. Look it up in the Ruby docs if you need to.
- Finally, **count how many A+ students you have**

```ruby
students = ['Suzy', 'Daniel', 'James', 'Mary', 'Phillip', 'Siegfried']
```

## You're Ready to Move On to Hashes - Codealong (20 mins)

We use hashes constantly. Hashes, like JS objects, are a great way to store related data of all different kinds, in a way that's super readable.

The key to hashes is that they always house key/value pairs. **The key describes the properties, the value is the information relating to or describing the property.**

#### Creating a Hash

To see it in action, let's pick something random in the room and try to describe it.

> **Note:** just to prove hashes can hold all kinds of great data, let's see how many different data types we can describe our object with!

For example, let's describe a fan in the room.
```ruby
fan = {
  type: 'freestanding',
  blades: 5,
  speeds: ['low', 'medium', 'high'],
  rotating: false,
  height: {
    measurement: 100.4,
    unit: 'cm'
  }
}
```

Nice! Good work.

Now, based on what you know about how JS objects work, how would you guess we grab data out of here? Let's say we want to know how many blades it has.

```ruby
fan[:blades] # => 5
```

#### Symbols Are For Memory

> _"Hold up, what's the colon? In JavaScript, we'd use ``fan['blades']``, why does that not work?"_ - Roughly half the classroom, in their brains

Well, young padawans, that's because our keys up above are symbols, not strings.

Symbols are basically just like strings, except they save computer memory.  Every string you create is unique and takes up space on your computer, even if they're the same value! When we're busy looking up key/value pairs, we don't want to be wasting memory - we want it to be fast!

Let's watch:

```ruby
"Your Name".object_id
#=> a number

"Your Name".object_id
#=> a different number

:your_name.object_id
#=> a number

:your_name.object_id
#=> the same number!
```

Symbols on their own don't do much, but they work great as keys. There are two ways to write them:
```ruby
{
  # from older ruby versions, still totally work
  :the_old_way => 'some value',

  # from newer ruby versions, which is just shorter
  the_new_way: 'some value'
}
```

Either are fine; you'll see both a lot. Use the "new way" one if you can help it, just cuz it's nice.

For the record, strings as keys _are_ possible – we just try not to use them.

#### Adding to our hash

Real quick – what if we forgot a key/value pair, or want to add one in after the fact?

```ruby
fan[:color] = 'silver'

# {
#   type: 'freestanding',
#   blades: 5,
#   speeds: ['low', 'medium', 'high'],
#   rotating: false,
#   height: {
#     measurement: 100.4,
#     unit: 'cm'
#   },
#   color: 'silver'
# }
```

#### Guess how to get rid of a key/value pair?

Given we just learned to do this with arrays, it's okay to be unsurprised.

```ruby
fan.delete(:color)
```

## Ranges

In pry run:

$`(1..5).to_a`
$`(1...5).to_a`

And ridiculously:

$`("a"..."z").to_a`

```ruby
alphabet = ("a"..."z").to_a

alphabet.each do |letter|
  puts letter
end
```
