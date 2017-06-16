# Intro to Ruby

## Lesson Objectives

- Compare/contrast Ruby and Javascript as programming languages
- Identify specific differences between Ruby and Javascript in the following areas...
  - Variables
  - Fundamental Data Types
  - Data Collections
  - Conditionals
  - Methods (Functions)
  - Data Immutability
- Advanced Ruby argument discussion
- Explain and apply Ranges
- Interact with symbols and explain their significance
- Concretize scope in Ruby by interacting with different variables

## Intro   (10/10)

Ruby is a server-side scripting language written on top of C.

It was written by Yukihiro "Matz" Matsumoto, in 1995, who now works as the lead Ruby architect at Heroku.

His philosophy in building Ruby was not about simplicity, but making programming in Ruby feel natural in a way that mirrors life.

This brought about a motto that is common among the Ruby community.

> "Matz Is Nice And So We Are Nice"

> "Programmers often feel joy when they can concentrate on the creative side of programming, so Ruby is designed to make programmers happy." — Yukihiro "Matz" Matsumoto

Performing everyday tasks, while intricate and complex, come to you naturally.

> "Ruby is simple in appearance, but is very complex inside, just like our human body." — Yukihiro "Matz" Matsumoto

### You Do: Ruby vs. JavaScript
Think back to the [homework you started yesterday](https://github.com/ATL-WDI-Curriculum/atl-wdi-10/tree/master/homework/unit_04/ruby/ruby-intro/1_Learn_Ruby_the_Hard_Way).

With a partner, discuss and write down the following:
* 3 differences between JavaScript and Ruby.  
* 3 similarities between JS and Ruby.
* Any opinions on Ruby so far?


## Why Use Ruby?

Ruby and JavaScript each have unique features that you may find useful or ineffective.  At the end of the day, you'll find that they share many qualities.

Here are some unique features in Ruby:

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

```ruby 
  number = 3
  # => 3

  if( number == 3 ) # with parens
    puts( "It's a 3!" )  
  end  
  # It's a 3!
  # => nil

  if number == 3 # without parens
    puts "It's a 3!"  
  end  
  # It's a 3!
  # => nil
```

#### Frameworks

We're going to learn Ruby on Rails early next week. It's a application framework for Ruby similar to Express but 10x more robust.

Ruby has a smaller framework called Sinatra, which syntactically is _very_ similar to Express, which you could easily learn on your own.
 
Find out more about Sinatra [here](https://github.com/sinatra/sinatra).

## Ruby Basics (15/25)

### Variables

We no longer need to precede new variables with var. Just use the name of the variable!

* Variables are instantiated as they are used
* Written in snake_case. That means all lower case with words separated by underscores.
* Variable names should still be semantic
* Variables are still assigned using a single equals sign ( = )

```ruby
my_favorite_animal = "flying squirrel"
# => "flying squirrel"
```

Although we don't use var, there is still syntax to designate whether a variable is local or global.

* @ creates an instance variable (see below)
* Undesignated implies local (e.g., my_number)
* All-caps implies that your value is constant. Ruby will give you warnings if you try to change the value (e.g., PI = 3.14).

### Instance Variable

An instance variable (lower_snake_case) is a variable that is usable within in an instance of an object. That's not meant to be a fancy term - an instance is just an example of an object.  This is used often when writing classes. (We'll see this more later)

```ruby
@some_variable = "donuts" # "donuts"

def some_method
  @some_variable
end

@some_variable # => "donuts"
some_method # => "donuts"
```

### puts

puts (short for "put string") is the equivalent of Javascript's console.log()

```ruby
puts "Hello, Ruby!"
# Hello, Ruby!
# => nil
```

### gets

Ruby also allows us to easily accept inputs from the command line using gets
```ruby
user_input = gets
# => "My input\n" (Note that this line was typed by the user in the terminal)

user_input
# => "My input\n"
```
Some notes about gets...

Usually gets is followed by .chomp, which removes the new line generated by the user hitting return
If you need to convert your value to a number, add .to_i to the end of the method
Let's test gets by using it in a Ruby file...
```ruby
# Run this code in app.rb

# Asks for and stores a command line input into the variable as a string.
puts "How old are you?: "
user_input = gets.chomp.to_i
if user_input > 10
  puts "You are older than ten"
end
# In the terminal from in the same directory as app.rb

$ ruby app.rb
# => How old are you?:
20
# => You are older than ten

$ ruby app.rb
# => How old are you?:
```
## Data Types (20/45)

Spend 15 minutes reading through everything up until the bang method.

>Why do we have to read all this ourselves?
>
>While we could re-teach you what numbers, strings, conditionals, etc. are like in Ruby, you know enough about programming languages from your experience with Javascript to pick up on this information yourself pretty quickly.
>
>Because of this, the peculiarities of Ruby will be apparent. These are the things you need to be aware of in the next few classes.


### Everything Is An Object!

Everything in Ruby is an **object**.
* By "object" we mean that everything has its own set of properties and methods
* Not a new concept. Some data types in Javascript had their own properties and methods (e.g., `string.length`)
* You will learn more about this when you dive into Ruby OOP next week

### Numbers

Ruby uses same arithmetic operators as Javascript
* `+`, `-`, `*`, `/`, `%`
* Same order of operations too: P.E.M.D.A.S.  

```rb
1 + 2 # Addition
# => 3

6 - 5 # Subtraction
# => 1

5 * 2 # Multiplication
# => 10

30 / 5 # Division
# => 6

31 / 5 # Note: integer division
# => 6

30 % 5 # Modulo (remainder)
# => 0

31 % 5
# => 1

3 ** 2 # Exponentiation
# => 9
```

> Notice the use of `**` to perform exponential operations in Ruby. We don't have this shortcut [in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow).

### Strings

Words, just like in Javascript.
* Surrounded by single or double-quotes
* Ruby uses similar escape characters
  - [Here is a list of them](http://www.java2s.com/Code/Ruby/String/EscapeCharacterslist.htm)
  - Must instantiate string with double-quotes for escape characters to work

```rb
name = "John"
# => "John"

full_name = "John\nDoe"
# => "John\nDoe"

puts full_name
# John
# Doe
# => nil
```

Not only can you concatenate strings, now you can multiply them too! Remember we couldn't do that in Javascript?

```rb
# Concatenation
"Hello " + "there!"
# => "Hello there!"

# Multiplication
"Hello there! " * 3
# => "Hello there! Hello there! Hello there! "
```

#### String Interpolation

Sometimes you will want to print out a string that incorporates a variable. For example...

```rb
my_name = "Jamie"
# => "Jamie"

puts "Hi my name is: " + my_name
# Hi my name is: Jamie
# => nil
```

This works fine. Things aren't so simple when that variable is of a different data type. Like a number...

```rb
class_number = 984
# => 984

puts "I am teaching WDI " + class_number
# TypeError: no implicit conversion of Fixnum into String from (pry):26:in `+'
```

In cases like the above, you either need to convert the variable to a string using `.to_s` or use something called "interpolation."
* Surround the non-string variable with a hashtag and curly brackets: `#{variable}`. **If you choose this option, you must use double quotes otherwise the interpolation will not work.**
* No Javascript equivalent [(until ES6 came along)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

```rb
class_number = 984
# => 984

puts "I am teaching WDI #{class_number}"
# I am teaching WDI 984
# => nil
```

### Booleans

Still `true` and `false`.
* We'll be using them in conditionals and comparisons just like in Javascript

Comparison operators in Ruby are nearly identical to Javascript. However, the check for equality is always for both value and data type.
* `<`, `>`, `<=`, `>=`, `==`, `!=`

> Don't worry about `===` in Ruby for now. It [does not](http://mauricio.github.io/2011/05/30/ruby-basics-equality-operators-ruby.html) have the same application as in Javascript.  

Logical operators are also similar.
* `!`, `&&`, `||`

"Truthiness" and "falsiness" are a lot less complicated in Ruby.
* The only falsey values in Ruby are `nil` and `false`

### Nil

Ruby's "nothing".
* The equivalent of Javascript's `null`
* You will usually see it when something does not have a return value (e.g., a `puts` statement)
* Like in Javascript, `nil` is falsey

Need to check if something is `nil`? Use `.nil?`  

> **NOTE:** Any method that ends with a `?` means it will return a boolean value.  

```rb
something = "A thing"
# => "A thing"

something.nil?
# => false

something = nil
# => nil

something.nil?
# => true
```

### Conditionals

Pretty similar to Javascript, with some differences.

- No parentheses or curly brackets required
- Begin blocks using if, elsif (no second "e"!) and else
- We close the whole loop using end
    - This will be used throughout Ruby when dealing with code blocks (e.g., method/function)
Here's an example where we check for height at a roller coaster...

```ruby
puts "Welcome to the Iron Rattler! How tall are you (in feet)?"
height = gets.chomp.to_i

if height < 4
  puts "Sorry, you'll fly out of your seat if we let you on."
elsif height < 7
  puts "All aboard!"
else
  puts "If you value your head, you should not get on this ride."
end
```

### The Bang Symbol (!)

All of the Ruby data types we have discussed so far are mutable.

We can not only change what variables are pointing to in memory, but we can directly modify those values stored in memory as well.
Methods with an ! attached to the end of them usually mean that they will modify the value in memory they are being called on.

Things can get tricky when you have multiple variables pointing at the same value. For example...
```ruby
a = "cheeseburger"
# => "cheeseburger"

b = a
# => "cheeseburger"

b.upcase!
# => "CHEESEBURGER"

a
# => "CHEESEBURGER"
```

### Predicate Methods (?)

This is similar to adding the bang to the end of a method. Predicate methods using `?` returns a boolean value.
```ruby
  5.odd?
  # true
  5.even?
  # false
  something = "A thing"
  # => "A thing"
  something.nil?
  # => false
```
### Symbols

Symbols are immutable, constant values. That means they contain the same value through the entirety of a program and cannot be changed.

- Kind of like a string that never changes
- Syntax: variable_name = :symbol_name
- No Javascript equivalent (until ES6 came along!))

```ruby
favorite_animal = :dog
# => :dog

favorite_animal.upcase!
# NoMethodError: undefined method `upcase!' for :dog:Symbol
# Did you mean?  upcase
```
#### When/why would you use symbols?

* Most common use is as keys in hashes, the Ruby equivalent of objects (more on that later)
* Make sure values that need to be constant stay constant
* Enhance performance, use less memory

Every string you create is unique and takes up space on your computer, even if they're the same value! When we're busy looking up key/value pairs, we don't want to be wasting memory - we want it to be fast!

#### Let's watch:
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
## You Do: Data Type Exercise/Break (15/60) 
Complete the exercises in [this repo](https://github.com/ga-wdi-exercises/ruby-basics-exercises/blob/master/data-types.md
)


## Data Collections (20/80)
Spend 10 minutes reading through everything up until Hashes.

### Arrays

An ordered collection of related values. Same syntax as Javascript arrays.

- Square brackets
- Values separated by commas
- Zero-indexed

```ruby
numbers = [1, 2, 3]
# => [1, 2, 3]

animals = ["dog", "cat", "horse"]
# => ["dog", "cat", "horse"]

animals[0]
# => "dog"

animals[1] = "elephant"
# => "elephant"

animals
# => ["dog", "elephant", "horse"]
```

Another super cool Ruby feature is that you can perform arithmetic operations on arrays!

```ruby
numbers = [1, 2, 3]
# => [1, 2, 3]

more_numbers = [4, 5, 6]
# => [4, 5, 6]

lots_of_numbers = numbers + more_numbers
# => [1, 2, 3, 4, 5, 6]

lots_of_numbers - [4, 5, 6]
# => [1, 2, 3]

numbers * 3
# => [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

#### Array Methods

Ruby is very nice. It provides us with an extensive library of array methods we can use to traverse and manipulate arrays.

- [The Ruby documentation for `Array` is a great resource for learning more about these methods](http://ruby-doc.org/core-2.4.1/Array.html)
- Can't go over them all, but chances are if you could do it in Javascript then you can do it in Ruby.

**IMPORTANT**: You DO NOT need to memorize these. The following is just a sample of array methods available to you. You'll come to be more familiar with these as you need them and look them up in documentation.

`tl;dr: The more you Google them, the better you'll remember them.`

#### Push/Pop

These Javascript methods also exist in Ruby and are used the same way.

```ruby 
numbers = [1, 2, 3, 4, 5]
# => [1, 2, 3, 4, 5]

numbers.push(6)
# => [1, 2, 3, 4, 5, 6]

numbers.push(7, 8, 9)
# => [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.pop
# => 9

numbers
# => [1, 2, 3, 4, 5, 6, 7, 8]
```

#### Sort

Organizes array values from lowest to highest. Numbers and strings.
Compare this to how Javascript handles `sort()`

```ruby
numbers = [3, 1, 5, 2, 4]
# => [3, 1, 5, 2, 4]

numbers.sort
# => [1, 2, 3, 4, 5]
```

#### Delete

- Removes an argument from an array. If there are multiple instances of that argument, it will delete them all
- Look up: .delete_at(), .slice()

```ruby
numbers = [3, 1, 2, 2, 4]
# => [3, 1, 2, 2, 4]

numbers.delete(2)
# => 2

numbers
# => [3, 1, 4]
```

### Hashes

A Ruby hash is an unordered, dictionary-like collection organized by key-value pairs. 

`tl;dr A hash is very similar to a Javascript object.`

```ruby
wdi_class = {
  teacher: "Jamie",  
  students: ["Yacko", "Wacko", "Dot"],  
  classroom: 2,  
  in_session: true,  
  schedule: {  
    morning: "Ruby Basics",
  }
}  
# => {:teacher=>"Jamie", :students=>["Yacko", "Wacko", "Dot"], :classroom=>2, :in_session=>true, :schedule=>{:morning=>"Ruby Basics"}}
```

Accessing hash values...

```ruby
wdi_class[:teacher]
# => "John"
```
Modifying hash values...

```ruby
wdi_class[:teacher] = "Jack"
# => "Jack"
```

You can also use strings as hash keys... 

```ruby
wdi_class = {
  "teacher" => "John",  
  "students" => ["Yacko", "Wacko", "Dot"],  
  "classroom" => 2,  
  "in_session" => true,  
  "schedule" => {  
    "morning" => "Ruby Basics",
    "afternoon" => "Enumerables"
  }
}  
```
Then can access in this way...

```ruby
wdi_class["teacher"] = "John"
# => "John"
```

And modify...
```
wdi_class["teacher"] = "Jack"
# => "Jack"
```

**Note the use of => (or "hash rockets") instead of : when using strings as keys.**

#### Hash Methods

Like arrays, Ruby also provides us with a library of hash methods.

 * [Again, the Ruby documentation is a great resource](http://ruby-doc.org/core-2.4.0/Hash.html)
 * As mentioned with arrays, do not worry about memorizing these methods. Just know how to look them up should the need arise.

#### Keys

Returns an array with all the keys in a hash.

```ruby
wdi_class.keys
# => [:teacher, :students, :classroom, :in_session, :schedule]
```

#### Merge

Combines two hashes. If both of your hashes have the same key, the one in the hash you set as the argument in the parameters will take precedence.

```ruby
classroom = {
 room: 1  
}  
# => {:room=>1}

locations = {
 location_one: "DC",  
 location_two: "NY",  
 location_three: "Boston"  
}  
# => {:location_one=>"DC", :location_two=>"NY", :location_three=>"Boston"}

silly_hash = classroom.merge(locations)
# => {:room=>1, :location_one=>"DC", :location_two=>"NY", :location_three=>"Boston"}

classroom
# => {:room=>1}

locations
# => {:location_one=>"DC", :location_two=>"NY", :location_three=>"Boston"}

silly_hash
# => {:room=>1, :location_one=>"DC", :location_two=>"NY", :location_three=>"Boston"}
```

#### Ranges

Use ranges to quickly generate arrays of data types.

Parentheses
Min and max value, separated by two periods
Generate array using .to_a method

```ruby
(1..5).to_a
# => [1, 2, 3, 4, 5]

("a".."z").to_a
# => ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
```

## You Do: Data Collection Exercise (20/100)
Complete the exercises on [this repo](https://github.com/ga-wdi-exercises/ruby-basics-exercises/blob/master/data-collections.md)

## Methods (20/120)

As stated before, everything in Ruby is an object so there is no distinction in this language between functions and methods. Under the hood, even seemingly stand-alone functions are in fact associated with an object. The convention, however, is to call these methods.

**We use the word `method` in Ruby, never `function`. If we do it's mostly out of habit.**

A method is made up of a few components. Take a look at the following method.
```ruby
def double( number )
   doubled_number = number * 2
   return doubled_number
end  

double( 3 )
# => 6

double 3
# => 6
```

This method has several components to point out: 
 - def - the Ruby equivalent of function
 - double - the method name in the below example
 - number - the argument name in the below example
 - end - closes the method

Passing arguments in Ruby works fairly similar to how to does in JS. They get passed as comma separated values after the method name

```ruby
def hello(name, salutation, small_talk, punctuation)
  "#{greeting} #{name}, #{small_talk}#{punctuation}"
end
```

Lets think back to the behaviors of arguments in JS.  Remember how lenient it is?

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
def drink_milk(thirsty = true)
  return "I'm not thirsty" unless thirsty

  "mmmmmm... milk...."
end
```

#### Woah, that return statement?

In Ruby, returns are implicit by design. Ruby will always assume that the last line of the method will be returned. So why the first return?

Can you read it in English? One of Ruby's biggest benefitsis that it reads pretty closely to English

Additionally, you can add the statements `if` and `unless` to your return statement, which acts similarly to an if block.

```javascript
function apiCall(err, data){
  if (err){
    return err;
  } 
  //Do stuff
}
```

vs.

```ruby
def api_call(err, data)
  return err if err
  #Do Stuff
end
```


