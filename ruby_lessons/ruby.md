# Ruby

## Objectives

* Review any questions
* Ruby topics
	* String interpolation
	* Number of arguments (too little or too many)
	* Splat operator
	* Default argument values
	* Iterators
	* Special characters in method names (`!` and `?`)
	* Conditionals (normal and inline)
	* Symbols and Hashes
	* Methods
	* While/Until Loop

## Ruby Topics

Because of Ruby's intuitive nature and excellent documentation, it's easiest to learn the Ruby language by code examples and reading through the docs.

### String Interpolation

Ruby allows you to easily pass in variables to strings.

```ruby
# Concatentation (bad)
name = "Josh"
puts "Hello, " + name

# Interpolation (good)
name = "Gerry"
puts "Hello, #{name}"
```

### Number of Arguments

Ruby requires you to put in the exact number of arguments when calling a method.

```ruby
def only_one(arg1)
	puts arg1
end

only_one	# => ArgumentError: wrong number of arguments (given 0, expected 1)
only_one("hello")	# => "hey"
only_one("hello", "world")		# => ArgumentError: wrong number of arguments (given 2, expected 1)
```

### Splat operator

You can pass in multiple arguments if you use the splat operator.

```ruby
def sum(*nums)
	total = 0
	nums.each { |n| total += n }
	total
end

sum(1, 2, 3) 	# => 6
```

### Default argument values

Ruby methods allow you to set default values for each argument.

```ruby
def my_logger(msg = "Hello")
	puts "My message: #{msg}"
end

my_logger("This is my message") # => My message: This is my message
my_logger # => My message: Hello
```

### Iterators

Iterating (aka enumerating) over arrays (and objects) is powerful and incredibly readable. The only challenge is choosing _which_ iterator to use to write the cleanest code.

The most common ones are: `.each`, `.map`, `.select`, and `.find`.

```ruby
# .each is used when you DO NOT care about the return value
instructors = ['Josh', 'Gerry', 'Danny']

instructors.each do |instructor|
	puts instructor.reverse
end


# .map is used when you DO care about the return value
nums = [1, 2, 3, 4]

nums_squared = nums.map { |n| n**2 }
nums_squared 	# => [1, 4, 9, 16]


# .select is used to pick out only certain values based on some sort of condition
# This condition needs to return true
nums = [1, 2, 3, 4]

evens = nums.select do |n|
	return n.even? # return is unnecessary, but may be more readable
end
evens 	# => [2, 4]


# .find returns the FIRST value that meets a given conditional
nums = [1, 2, 4, 0, 1, 8]

nums.find { |n| n >= 3 } # => 4
```

You'll notice that we've written these in two different styles. The rule to determine if it should be the inline style (`{ |n| n >= 3 }`) or multi-line style `nums do |n| ... end` is if the command exceeds 80 characters.

You can turn on a ruler in your text editor to show a line at 80 characters.

### Special characters in method names (`!` and `?`)

Ruby will sometimes use `!` and `?` in method names. These _technically_ are valid characters that aren't special, but they're _always_ used in a special way.

`!` means that it alters the original! This should be seen as a _"Danger!"_.

`?` means that it will return a boolean. Name your own questions with a `?` if it always returns a boolean.

```ruby
nums = [1, 2, 3]

# Not ! version -- does not alter the original
nums.map { |n| n**2 } # => [1, 4, 9]
nums # => [1, 2, 3]

# But once we use the ! version, it modifies the original array
nums.map! { |n| n**2 } # => [1, 4, 9]

# Now nums has been changed
nums # => [1, 4, 9]
```

`!` methods are often used as a shortcut.

```ruby
# These two do the same thing
nums.map! { |n| n**2 }
nums = nums.map { |n| n**2 }
```

```ruby
# Ruby has some built in ? methods
3.even? # => false
3.odd? # => true

# When you define a method that will always return a boolean, use the ?
def can_drink?(person)
	person.age >= 21
end

# The reason is that our if statements will read smoothly
if can_drink?(person)
	invite_to_bar
end
```

### Conditionals

There are two ways to style conditionals.

```ruby
num = 3

# Style 1
if num.odd?
	puts "This number is odd!"
end

# Style 2
puts "This number is odd!" if num.odd?
```

There are two different syntaxes as well! Use whatever reads easiest.

```ruby
# Style 1
if num.even?
	puts "It's even"
end

unless num.even?
	puts "It's odd"
end
```

### Symbols and Hashes

A hash is similar to a JavaScript object. They are made up of key-value pairs.

```ruby
scruff = {
	name: 'Scruff McGruff',
	address: 'Chicago, IL 60652',
	slogan: 'Help take a bite out of crime!',
	species: 'Anthropomorphic animated dog',
	birth_year: 1980,
	communication_mediums: [
		'television',
		'newspaper',
		'billboards',
		'radio'
	],
	friends: [
		'Smokey the Bear'
	],
	:owner => 'Jack Keil'
}
```

Notice that last line. That's called a _hash rocket_. It's the same thing as above.

To access attributes in `scruff`, we use Symbols. Symbols are similar to Strings but they are immutable.

```ruby
"pied piper".object_id
=> 70288511587360
"pied piper".object_id
=> 70288504327720
 
:pied_piper.object_id
=> 539368
:pied_piper.object_id
=> 539368
```

Accessing the data from `scruff`

```
scruff[:name] # => 'Scruff McGruff'
```

### Methods

We've defined some methods above. But let's define some methods that call other methods.

```ruby
def first
	puts 1
end

def second
	first
	puts 2
	third
end

def third
	puts 3
end

second # => 1  2  3
```

One major difference from JavaScript is that functions _are not_ hoisted.

```ruby
print_stuff # => NameError: undefined local variable or method `print_stuff'

def print_stuff
	puts "stuff"
end
```

### While/Until Loop

`while` loops allow you to run something while a condition is `true`. `until` will run until it is `false`.

These are rarely used because you can cause infinite loops if typed incorrectly! 

```ruby
# These two are the same

val = 0
while val < 3
	puts val
	val += 1
end # => 0  1  2

val = 0
until val >= 3
	puts val
	val += 1
end
```
