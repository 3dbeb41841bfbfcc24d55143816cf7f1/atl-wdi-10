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
In 2009, the **BBC** and the **British Museum** collaborated on a hugely successful radio series and book called “A History of the World in 100 Objects.” In 2014, the **Smithsonian** followed up with its “History of the World in 1,000 Objects.”  You can learn more about them on their podcasts: http://www.bbc.co.uk/programmes/b00nrtd2/episodes/downloads

“It is only in the world of objects that we have time and space,” T. S. Eliot wrote. Think of the mark that things — the wheel, the crucifix, the credit card or the computer chip — have made on civilization.  What objects or collection of items tell the story of your life?  Think about 4 items that define you.

On Friday, we reviewed basic data types in Javascript. Strings, Integers, variables, etc. These are the building blocks of most programming languages. But you are limited in how much you can build without a good way of storing those data types. This is where 'data structures' or collections like **Arrays** and **Objects** are invaluable.

---

## Arrays (5m)

An **array** is syntactically defined with opening and closing square brackets `[ ]`. Between those brackets, we will add pieces of data separated by commas.

Arrays are used for:

* Storing any type data in a **particular order**
* Enumerating over data, i.e. using a **zero-based index** to find them
* Quickly reordering data

An array is ultimately, a data structure, similar in concept to a comma separated list. Each item in an array is called an element, and the collection can contain data of the same or different types. In JavaScript, arrays can dynamically grow and shrink in size.

```javascript
var friends = ['Moe', 'Larry', 'Curly'];
=> undefined

friends
=> ['Moe', 'Larry', 'Curly']
```

Items in an array are stored in sequential order, with indexes starting at `0` (zero-based index) and ending at `length -1` (since the length is not zero-based, length starts counting at 1, so it is always 1 more than the largest **index** in an array).

You can set or read items in an array via Bracket Notation.  Inside of the brackets, you add the number of index of the item that you would like to retrieve/set.

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

We can use array-methods, like length and bracket notation on strings. They are literally array-like.

```javascript
var newFriend = 'Veronica Mars';
//=> undefined

// pick out the first character
newFriend[0];
//=> 'V'

newFriend.length;
//=> 13
```
<br />

## Working with Arrays - Codealong (15m)

### Array constructor

Using the JavaScript `new` keyword, is one way of creating arrays.  It will create an empty array that is set to your variable.  You can add items to the array via their index- which is zero-based.

```javascript
var vacations = new Array();
=> undefined

vacations;
=> []

vacations[0] = 'Bali';
=> 'Bali'

vacations[1] = 'Argentina';
=> 'Argentina'

vacations[2] = 'Greece';
=> 'Greece'

vacations
=> ['Bali', 'Argentina', 'Greece']

vacations.length;
=> 3
```

### Array Literal

A more convenient notation is to use an array literal:

```javascript
var newVacations = ['Singapore', 'Russia', 'Belize'];

newVacations;
=> ['Singapore', 'Russia', 'Belize']

newVacations.length;
=> 3
```

### Length property

The `length` method works in an interesting way in Javascript. It is always one larger than the highest index in the array.

So `array.length` isn't necessarily the number of items in the array. Consider the following:

```javascript
var newestVacations = ['Dominican Republic', 'Australia', 'Hong Kong'];
newestVacations[10] = 'Egypt';
newestVacations.length; // 11
```
**Remember**: the length of the array is one more than the highest **index**.

**EXERCISE**: Take the next 2 minutes to create an array of the four items that define you and save them to the variable `myLife`.  When you are done, add your array to slack. (make sure to end your line with a semi-colon!)

### Getting data from an array

If you use the method `typeof` to query a **non-existent array index**, it will return `undefined`:

```javascript
vacations;
=> ['Bali', 'Argentina', 'Greece']

typeof vacations[1];
=> 'string'

typeof vacations[12];
=> undefined
```

<br />

**EXERCISE**: Take 10 minutes, to query these values in your `myLife` array: the first item in your array, the last item in your array. Bonus: Can you print out all of the items in your array?  Can you come up with a way of getting a random item/index (whole number) between zero and the length of your array? HINT: Math.random() and Math.floor().

### Array helper methods

Arrays come with a number of helper methods. Here is a list of some popular helpers:

- `vacations.toString()` - Returns a string with the `toString()` of each element separated by commas.

```javascript
var vacations = ['Bali', 'Argentina', 'Greece'];
=> undefined

vacations.toString();
=> "Bali,Argentina,Greece"

vacations.join(", ");
=> "Bali, Argentina, Greece"
```

- `vacations.pop()` - Removes and returns the last item in your array.

```javascript
vacations
=> ['Bali', 'Argentina', 'Greece']

vacations.pop();
=> ['Bali', 'Argentina']
```

- `vacations.push(item1, ..., itemN)` - `.push()` adds one or more items to the end of your array.

```javascript
vacations;
=> ['Bali', 'Argentina']

vacations.push('Greece');
=> 3

vacations
=> ['Bali', 'Argentina', 'Greece']
```

- `vacations.reverse()` - Reverses the array.

```javascript
vacations
=> ['Bali', 'Argentina', 'Greece'];

vacations.reverse();
=> ['Greece', 'Argentina', 'Bali']
```

- `vacations.shift()` - Removes and returns the first item in your array.

```javascript
vacations;
=> ['Greece', 'Argentina', 'Bali']

vacations.shift();
=> 'Greece'

vacations
=> ['Argentina', 'Bali']
```

- `vacations.unshift('item')` - Prepends items to the beginning of your array.

```javascript
vacations;
=> ['Argentina', 'Bali']

vacations.unshift('Greece');
=> 3

vacations;
=> ['Greece', 'Argentina', 'Bali']
```

Remember, though, you will never remember _every_ method.  Explore the [full documentation for array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and other helper methods given to you for particular objects.

<br />

---

### Some of my favorite JS books
* [A Smarter Way to Learn JS](http://www.cpp.edu/~jcmcgarvey/513_2016/ASmarterWaytoLearnJavaScript.pdf)
* [A Smarter Way to Learn jQuery](https://github.com/JideLambo/javascript-books/blob/master/A%20Smarter%20Way%20to%20Learn%20jQuery%20-%20Mark%20Myers.pdf)
* [JavaScript + JQuery](https://www.dropbox.com/s/05je29f3oxj7oa0/JavaScript%20and%20JQuery%20Interactive%20Front-End%20Web%20Development%202014.pdf?dl=0) - So good! Might be worth buying...
* [JavaScript the Good Parts](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
* [Eloquent JS](http://eloquentjavascript.net/)
* [DOM Enlightenment](http://domenlightenment.com/#1.1)
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
* [You Don't Know ES6](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond)

---

#### Solution to Exercise

var myLife = ['family photo album', 'Seagull parlor guitar', 'journal', 'professional stand mixer', 'Diesel'];

myLife[0];
=> 'family photo album'

myLife[4];
=> 'Diesel'

myLife[Math.floor(Math.random() * 4)];
