[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Example Patterns

Here are a few example patterns that often come up in problems. The names are
completely arbitrary -- they're just general descriptions.

## Iteration

**Objective**:
Go through every element in a collection and perform some operation.

**Example** :
Print every string in a list of strings.

**Template Psuedocode** :

```plaintext
for each element in someCollection:
  // do something involving the element
```

**Template JS Implementation** :

```js
// Using a for loop
for (var i = 0; i < someCollection.length; i++){
  someFunction(someCollection[i]);
}

// Using the .forEach method
someCollection.forEach(function(element){
  // Do something using `element`
});
```

## Reduction

**Objective** :
Produce some new object or value based on the properties of the elements
in a collection. i.e. 'reduce' it to a single value.

**Example** :
Get the sum of all elements in an array of numbers.

> This will almost always involve a practice called "memo-ization" : creating
> some sort of 'memo' value, outside of the loop/iteration, that can be modified
> from one iteration to the next.

**Template Pseudocode** :

```plaintext
define a memo value
for each element in someCollection:
  use this element to modify the memo value
```

**Template JS Implementation** :

```js
// Using a for loop
var memo;
for (var i = 0; i < someCollection.length; i++) {
  // use someCollection[i] to modify memo
}

// Using the .reduce method
someCollection.reduce(function(memo, currentElement){
  // modify memo using currentElement
  return memo;
});
```

## Comparison

> This is a very common sub-pattern of Reduction.

**Purpose** :
Compare every element in a collection to find the "X-est" element in the
collection.

**Example** :
Find the largest/smallest number in an array.

**Template Pseudocode**:

```plaintext
define a memo value (representing the X-est element)
for each element in someCollection:
  if this element is more X than the previous X-est element,
    make this element the new X-est element
```

**Template JS Implementation**:

```js
// Using a for loop
var memo;
for (var i = 0; i < someCollection.length; i++) {
  if (!memo || someCollection[i].someProperty > memo.someProperty) { // or less, depending on what you want
    memo = someCollection[i]
  }
}

// Using the .reduce method
someCollection.reduce(function(memo, currentElement){
  if (currentElement.someProperty > memo.someProperty) { // or less, depending on what you want
    memo = currentElement;
  }
  return memo;
})
```

## Transformation

> Another very common sub-pattern of reduction.

**Objective** :
Take a collection, and create some other kind of collection based on it.
Usually takes the form of either 'mapping' (elements in memo map one-to-one to
the original elements), 'filtering' (elements in memo are a sub-set of the
original elements), or some combination of the two.

**Example** :
Translate a collection of words from English to French.

**Template Pseudocode** :

```plaintext
// mapping
define a memo value that's a collection
for each element in someCollection:
  // mapping : apply a transformation to the element, and add the result to memo
  // filtering : add element to memo if it meets/doesn't meet some condition
```

**Template JS Implementation** :

```js
// Using a for loop
var memo = [];
for (var i = 0; i < someCollection.length; i++) {
  /// mapping
  memo.push(someFunction(someCollection[i]));
  /// filtering
  if ( /* some condition */ ) {
    memo.push(someCollection[i])
  }
}

// Using methods
someCollection.map(function(element){
  // return result of transforming element
})
someCollection.filter(function(element){
  // return 'true' to add element to the returned collection,
  // or false to not add it
})
```

## Sorting

Sorting is a **huge** topic in CS. There are many different patterns for sorting
a collection. Some of the most well-known are:

-   ['bubble sort'](https://en.wikipedia.org/wiki/Bubble_sort)
-   ['insertion sort'](https://en.wikipedia.org/wiki/Insertion_sort)
-   ['selection sort'](https://en.wikipedia.org/wiki/Selection_sort)
-   ['merge sort'](https://en.wikipedia.org/wiki/Merge_sort)
-   ['quicksort']()

We'll learn more about how these actually get implemented later on in the
course. For pseudo-code purposes, it's usually sufficient to just say:

```plaintext
sort someCollection according to someRule
```

since in most programming languages, a function or method will exist to sort
collections for you (usually pretty efficiently).

## Searching

Searching is _also_ a huge topic. Though there are many different searching
algorithms, of varying efficiency, for pseudo-code purposes it's usually
sufficient to iterate through a collection one by one until you find a match.
In other words, you can just treat it as a special case of reduction.

[< Back](README.md)
