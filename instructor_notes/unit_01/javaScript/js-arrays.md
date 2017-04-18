---
title: Arrays
type: Lesson
duration: 1hr
creator:
  name: Colin Hart
  adapted for WDI ATL 9 by: Maren Woodruff
  campus: WDI ATL 9
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

“It is only in the world of objects that we have time and space,” T. S. Eliot wrote. Think of the mark that things — the wheel, the crucifix, the credit card or the computer chip — have made on civilization.  What objects or collection of items tell the story of your life?  Think about 5 items that define you.

On Friday, we reviewed basic datatypes in Javascript. Strings, Integers, variables, etc. These are the building blocks of most programming languages. But you are limited in how much you can build without a good way of storing those datatypes. This is where 'data structures' or collections like **Arrays** and **Objects** are invaluable.

---

## Arrays (5m)

An **array** is syntactically defined with opening and closing square brackets `[ ]`. Between those braces, we will add pieces of data separated by commas.

Arrays are used for:

* Storing data in a particular order
* Enumerating over data, i.e. using a zero-based index to find them
* Quickly reordering data

An array is ultimately, a data structure, similar in concept to a comma separated list. Each item in an array is called an element, and the collection can contain data of the same or different types. In JavaScript, arrays can dynamically grow and shrink in size.

```javascript
var friends = ['Moe', 'Larry', 'Curly'];
=> ['Moe', 'Larry', 'Curly']
```

Items in an array are stored in sequential order, and indexed starts at `0` (zero-based index) and ends at `length - 1` (since the length is not zero-based, length starts counting at 1, so it is always 1 more than the largest index in the array).

```javascript
// First friend
var firstFriend = friends[0];
=> 'Moe'

// Get the last friend
var lastFriend = friends[2];
=> 'Curly'

// An alternative way to get the last friend
var lastFriend = friends[friends.length - 1];
=> 'Curly'
```

We can even use strings like arrays: (literally array-like)

```javascript
var newFriend = 'bobby bottleservice';
//=> undefined

// pick out first character
newFriend[0];
//=> 'b'

newFriend.length;
//=> 19
```
<br />

## Working with Arrays - Codealong (15m)

Using the JavaScript `new` keyword, is one way of creating arrays:

```javascript
var a = new Array();
=> undefined

a[0] = 'Bali';
=> 'Bali'

a[1] = 'Argentina';
=> 'Argentina'

a[2] = 'Greece';
=> 'Greece'

a
=> ['Bali', 'Argentina', 'Greece']

a.length;
=> 3
```
- You can add or change items in an array via their index.  Call the array followed by the desired index in square brackets.

A more convenient notation is to use an array literal:

```javascript
var a = ['Bali', 'Argentina', 'Greece'];

a
=> ['Bali', 'Argentina', 'Greece']

a.length;
=> 3
```

### Length property

The `length` method works in an interesting way in Javascript. It is always one larger than the highest index in the array.

So `array.length` isn't necessarily the number of items in the array. Consider the following:

```javascript
var a = ['Bali', 'Argentina', 'Greece'];
a[100] = 'Egypt';
a.length; // 101
```
**Remember**: the length of the array is one more than the highest index.

**EXERCISE**: Take the next 2 minutes to create an array of the five items that define you and save them to the variable `myLife`


### Getting data from an array

If you query a non-existent array index, it will return `undefined`:

```javascript
var a = ['Bali', 'Argentina', 'Greece'];
=> undefined

typeof a[1];
=> 'string'

typeof a[90];
=> undefined
```

<br />

**EXERCISE**: Take 10 minutes, to get these values in your array: the first item in your array, the last item in your array. Bonus: Can you print out all of the items in your array?  Can you come up with a way of getting a random item/index (whole number) between zero and the length of your array? HINT: Math.random() and Math.floor()

### Array helper methods

Arrays come with a number of helper methods. Here is a list of some popular helpers:

- `a.toString()` - Returns a string with the `toString()` of each element separated by commas.

- `a.pop()` - Removes and returns the last item in your array.

- `a.push(item1, ..., itemN)` - `.push()` adds one or more items to the end of your array.

- `a.reverse()` - Reverses the array.

- `a.shift()` - Removes and returns the first item in your array.

- `a.unshift('item')` - Prepends items to the beginning of your array.

Remember, though, you will never remember _every_ method.  Explore the [full documentation for array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and other helper methods given to you for particular objects.
