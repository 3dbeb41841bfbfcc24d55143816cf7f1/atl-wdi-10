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
