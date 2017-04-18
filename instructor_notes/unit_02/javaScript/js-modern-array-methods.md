<!--
This file is auto-generated from a 'template.md'
file using the 'md-process' script.
Therefore *DO NOT* edit this file directly!
Instead edit the template file and then run 'md-process'.
-->

# JavaScript Modern Array Methods

## Table of Contents

* [The 5 Methods](#the-5-methods)
  * [indexOf](#indexof)
  * [filter](#filter)
  * [forEach](#foreach)
  * [map](#map)
  * [reduce](#reduce)
* [Summary](#summary)
* [Resources](#resources)

## The 5 Methods

### indexOf

You can use `Array.indexOf` to find the index of a value in an Array. Array.indexOf can find either primitive values or JavaScript objects. If the value is not found, `Array.indexOf` will return -1.

Here is an example using `indexOf`:

```javascript
var fruit = ['apple', 'orange', 'banana', 'peach', 'pear'];
var peachIndex = fruit.indexOf('peach');
if (peachIndex !== -1) {
  console.log('we have a peach at index =', peachIndex);
}
else {
  console.log('we have no peach.');
}
```

And the output is:

```
we have a peach at index = 3
```

### filter

The `filter` method creates a new array with all elements that pass the test implemented by the provided function.

Here is an example using `filter`:

```javascript
var values = [1, -5, -2, 3, 12, -14, 0, 23, -1, 8];

var negValues = values.filter( function(v) {
  return v < 0;
});

console.log('The negative values are:', negValues);
```

And the output is:

```
The negative values are: [ -5, -2, -14, -1 ]
```

### forEach

The `forEach` method executes a provided function once per array element. Thus we can _iterate_ over an Array without needing an `index` variable (like we had with the classic for loop of `for(var i=0; i<arr.length; i++)`.

Here is an example using `forEach`:

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.forEach(function(item) {
  console.log(item);
});
```

And the output is:

```
1
2
3
4
5
6
7
8
```

### map

The `map` method creates a new array with the results of calling a provided function on every element in the array. You can think of `map` as _mapping_ the elements of one Array to the elements of a new Array using a mapping function that you provide.

---

Remember `domain` and `range` from Algegra? This is basically what the `map` function does.

![Domain and Range](images/domain-range-codomain.gif
)

---

Here is an example using `map`:

```javascript
var values = [1, 2, 3, 4, 5];

var squares = values.map(function(v) {
  return v * v;
});

console.log('here are some squares:', squares);
```

And the output is:

```
here are some squares: [ 1, 4, 9, 16, 25 ]
```

### reduce

The `reduce` method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value. You can think of `reduce` as reducing an Array to a single value using the function you provide.

Here is an example of using `reduce`:

```javascript
var values = [1, -5, -2, 3, 12, -14, 0, 23, -1, 8];

let sum = values.reduce(function(accumulator, v) {
  return accumulator + v;
}, 0);              // zero is the initial value of the accumulator

console.log('The sum is', sum);
```

And the output is:

```
The sum is 25
```

## Summary

Each of these methods provides an easy way to iterate over an Array doing a:

* search - `indexOf`
* filter - `filter`
* basic iteration - `forEach`
* transformation - `map`
* reduction - `reduce`

Note that none of these methods alter (mutate) the original Array. Rather they each return a value or Array of values. The approach of returning new values and not altering the original Array is a part of what is known as _Functional Programming_.

## Resources

* [5 Array Methods That You Should Use Today](http://colintoh.com/blog/5-array-methods-that-you-should-use-today)
