---
title: Arrays
type: Lesson
duration: 1hr
creator:
  name: Colin Hart
  campus: WDIR
competencies: Programming
---

# Arrays, Objects and Loops

## Lesson Objectives

  - Declare array literals
  - Interact with and manipulate arrays
  - Loop over arrays using a `for` loop
  - Declare object literals

# Hook
In 2009, the **BBC** and the **British Museum** collaborated on a hugely successful radio series and book called “A History of the World in 100 Objects.” In 2014, the **Smithsonian** followed up with its “History of the World in 1,000 Objects.”  You can listen to the podcasts later, here: http://www.bbc.co.uk/programmes/b00nrtd2/episodes/downloads

“It is only in the world of objects that we have time and space,” T. S. Eliot wrote. Think of the marks that things — the wheel, the crucifix, the credit card or the computer chip — have made on civilization.  What objects or collection of items tell the story of your life?  Think about 5 items that define you.

On Friday, we reviewed basic datatypes in Javascript. Strings, Integers, variables, etc. These are the building blocks of most programming languages. But you are limited in how much you can build without a good way of storing those datatypes. This is where `data structures` or collections like Arrays and Objects are invaluable.

---

## Arrays - Demo (5 mins)

An array is syntactically defined with an opening and close square brace `[ ]`. Between those braces we'll have pieces of data separated by commas.

Arrays are used for:

* Storing data in a particular order
* Enumerating data, i.e. using an index to find them
* Quickly reordering data

Arrays, ultimately, are a data structure that is similar in concept to a comma separated list. Each item in an array is called an element, and the collection can contain data of the same or different types. In JavaScript, they can dynamically grow and shrink in size.

```javascript
var friends = ['Moe', 'Larry', 'Curly'];
=> ['Moe', 'Larry', 'Curly']
```

Items in an array are stored in sequential order, and indexed starting at `0` and ending at `length - 1`.

```javascript
// First friend
var firstFriend = friends[0];
=> 'Moe'
// Get the last friend
var lastFriend = friends[2]
=> 'Curly'
```

We can even use strings like arrays: (literally array-like)

```javascript
var friend = 'bobby bottleservice';
// pick out first character
friend[0]
//=> 'b'
friend.length
```

## Working with Arrays - Codealong (15 mins)

Using the JavaScript Keyword `new`, is one way of creating arrays:

```javascript
var a = new Array();
=> undefined

a[0] = 'dog';
=> 'dog'

a[1] = 'cat';
=> 'cat'

a[2] = 'hen';
=> 'hen'

a
=> ['dog', 'cat', 'hen']

a.length;
=> 3
```

A more convenient notation is to use an array literal:

```javascript
var a = ['dog', 'cat', 'hen'];

a.length;
=> 3
```

#### Length property

The `length` method works in an interesting way in Javascript. It is always one more than the highest index in the array.

So `array.length` isn't necessarily the number of items in the array. Consider the following:

```javascript
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
```
**Remember**: the length of the array is one more than the highest index.


EXERCISE: Make an array of your own with 6 items and save it to a variable `myArray`


#### Getting data from an array

If you query a non-existent array index, you get `undefined`:

```javascript
var a = ['dog', 'cat', 'hen'];
=> undefined

typeof a[90];
=> undefined
```

<br>

EXERCISE: 10 minutes As for the 90th value in your array. Ask for the first item in your array. Ask for the last item in your array. Bonus: Can you come up with a way of asking for a random index (whole number) between zero and the length of your array? HINT: Math.random and Math.floor


#### Array helper methods

Arrays come with a number of methods. Here's a list of some popular helpers:

> Note: You might want to demonstrate a few of these.

- `a.toString()` - Returns a string with the `toString()` of each element separated by commas.

- `a.pop()` - Removes and returns the last item.

- `a.push(item1, ..., itemN)` - `Push` adds one or more items to the end.

- `a.reverse()` - Reverse the array.

- `a.shift()` - Removes and returns the first item.

- `a.unshift([item])` - Prepends items to the start of the array.

Remember, though, you'll never remember _every_ method.  Explore the the [full documentation for array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and other helper methods given to you for particular objects.
