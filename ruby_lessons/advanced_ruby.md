# Objectives

* Questions and response using `gets.chomp`
* Instance Variables
* Pry gem

## gets.chomp

This command will issue a prompt in the terminal.  The entered answer can be set to a vairable.  The `gets` will prompt the user, and the `.chomp` will remove the 'return' separator.

```ruby
puts "Hey what's your name?"
name = gets.chomp

puts "Hey #{name}! Nice to meet you!"
```

Let's use it in a script and run it!

## Types of Variables

Let's talk about the different types of variables you'll encounter in Ruby. You'll need to use all of them at some point, but some more than others.

In these examples, we'll define a variable, and then we'll write a tiny quick method that just spits that variable out, to see if it works.

### Local Variable

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

### Instance Variable

An instance variable (lower_snake_case) is a variable that is defined in an instance of an object. That's not meant to be a fancy term - an instance is just an example of an object.  A Table Class will create instances of tables.

```ruby
@some_variable = "donuts" # "donuts"

def some_method
  @some_variable
end

@some_variable # => "donuts"
some_method # => "donuts"
```

Remember that it works this way, because when we get to Objects/Classes later this week, you'll see that instance variables let us store a variable once and use it however many methods we need inside an Class.

```ruby
class Person
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name    
  end
  
  def full_name
    "#{@first_name} #{@last_name}"
  end
end

josh = Person.new("Josh", "Kushner")

josh.full_name # => "Josh Kushner"
```


## Gems and Bundler

Gems are similar to npm packages that we used in our NodeJS projects.  Gems are libraries created by other developers in the Ruby community.  There are two ways to install gems.

`gem install pry`

OR

We install Bundler.  Bundler is a gem that allows us to manage other gems in Ruby.  It's similar to how we installed multiple packages from an `npm install` when we kept different packages in our `package.json`

`gem install bundler`

Then we create our Gemfile in our app directory

`touch Gemfile`

```ruby
source 'https://rubygems.org'

gem "pry"
```

`bundle install`


## pry

In Ruby, gems are libaries we can use in our Ruby code.

`pry` is a super helpful tool for debugging.

Pry can be invoked in the middle of your code and it starts a 'Pry Session'.  You can then check variable values, run other methods, etc. at that specific point in your program.

Here's the documentation: <a href="https://github.com/pry/pry">Pry Documentation</a>

And here's how we use it in the code.

`binding.pry`

Let's see how it work in our script.


# Shopping List Lab

Now you know how to use Ruby iterators, arrays, conditionals, and so many other awesome Ruby tools.  Let's put them to use and create our first shopping list script!

<b>Two things:</b><br>
1) Use `pry` when you get stuck!

2) Don't be afraid to use Ruby documentation to figure it out.  Some of these questions require some googling.


<br>
In a directory of your choice, `touch shopping_list.rb`

Run the file by using the ruby command: `ruby shopping_list.rb`

```ruby
shopping_list = ['peanuts', 'pretzels', 'coffee', 'pretzel sticks', 'fruit snacks', 'pretzel nuggets']
```

Do these exercises in order:

* Add an item to the shopping list based on prompt response
* Remove from our shopping list based on prompt response
* Replace the second item on your list with `ice cream`
* Iterate and `puts` each item from the shopping list in reverse
* Iterate and `puts` a numbered shopping list

```ruby
1. peanuts
2. pretzels
3. coffee
...
```
HINT: use ruby's <a href="https://apidock.com/ruby/Enumerator/each_with_index">`.each_with_index`</a> iterator

* Find the word length of the 1st item in the shopping list and square it. Then, prompt the user for a number.  Take the user's response and add it to the squared number.
* Take the length of the shopping list and return a boolean value if the length is an even number.
* Take the first letter of the 2nd item and if it is the letter "a" then
  * `puts` "The second item starts with the letter A!".

  If not, then

  * `puts` "Nope, starts with a different letter"
  

# Actual Interview Question Lab

### FizzBuzz

HINT: Use Ruby Range

1) Create a method that will count to 20.  It should `puts` each number on the terminal.
2) Now for every number divisible by 3, the method should `puts` "Fizz" instead of the number.
3) Now for every number divisible by 5, the method should `puts` "Buzz" instead of the number.
4) Now for every number divisible by 3 AND 5, the method should `puts` "FizzBuzz" instead of the number.
5) Refactor if needed.



### Bonus
Use Ruby methods to clean up your code in the Shopping List lab! Each exercise in the Shopping List lab should have it's own method.  Don't forget to use instance variables to communicate values within and outside of methods.
