# Javascript Higher Order Functions:
## Part 2: map()

A Higher Order Function is a fancy term for a function that operate on other functions, either by taking them as arguments or by returning them.

Javascript iterators are the functional approach to loops. They step (or iterate) over each item in an **array**. Iterators perform operations according to conditions specified in a callback.

[MDN Docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### Why use map?

You have an array of items and want to transform each of them. The result is a new array of the exact same length containing the manipulated items.

#### map Syntax:
```
var newArray = array.map(function(current_value, index, initial_array) {})
```

`map()` is similar to `forEach()` in that it calls a provided callback function once for each element in an array, in order.

#### The Return value:

It is important to note that `map`  **constructs a new array** from the results.

`map` returns a new array with each element being the **result** of the callback function (keyword: `return`)!

### Example:

Increment each element in the array `arr` by 1. Console log an array with the new values.

#### Solution 1 with new array
```
var arr = [8, 8, 8, 8, 8, 8, 8, 8];

var newArray = arr.map(function(num){
  return num + 1
});

console.log(newArray)

=> [ 9, 9, 9, 9, 9, 9, 9, 9 ]

```


### Exercises:

Touch a file `forEach_exercise.js`, practice using `map` with the following exercises. Run your script by typing `node map_exercise.js` in terminal. Comment out code as you work on the next one. Also, feel free to use codepen or repl.it.


1. Log an array with each word in `words` in upper case using `map()`.

  ```
  words = ["A", "flock", "of", "crows", "is", "known", "as", "a", "murder"];

  => logs ["A", "FLOCK", "OF", "CROWS", "IS", "KNOWN", "AS", "A", "MURDER"]
  ```

2. Log an array with each number doubled in value from `doubleMe` using `map()`.

  ```
  var doubleMe = [-1, 0, 5, 20, 43, 235];

  => logs [-2, 0, 10, 40, 86, 470]
  ```

3. Loop through the `numbers` array using `map` and log an array with boolean values: `true` if the number is even, and `false` if it's odd.

  ```
  var numbers = [2, 5, 7, 9, 33, 25, 66, 70]

  => logs [true, false, false, false, false, false, true, true]
  ```

### map: iterating an array of objects


```
var character = [
  { name: 'Mario',  hatColor: 'red', health: 30},
  { name: 'Luigi',  hatColor: 'green', health: 25},
  { name: 'Toad',   hatColor: 'mushroom', health: 25},
  { name: 'Wario', hatColor: 'yellow', health: 30 },
  { name: 'Yoshi',  hatColor: null, health: 35}
];
```

For the following 4 questions, use the `character` array above.

1. Log an array of the character's names using `map`. Log another array of the character's hatColor.

  Expected Output:
  ```
  Names:
  =>logs ["Mario", "Luigi", "Toad", "Wario", "Yoshi"]
  Hat Color:
  => logs ["red", "green", "mushroom", "yellow", null]
  ```

2. Using `map` add one more key to each object `attack` and set its value equal to 1/2 of the character's health.  Log an array of each character's `attack` values.

  Expected Output:
  ```
  => logs [15, 12.5, 12.5, 15, 17.5]
  ```

  Bonus: sort the array directly above in ascending order (doesn't have to use `map`)!
  Bonus 2: sort the array above in descending order (doesn't have to use `map`).

  ```
  Ascending
  => [12.5, 12.5, 15, 15, 17.5]
  Descending
  => [17.5, 15, 12.5, 12.5, 15]
  ```

3. Log an array of the 3rd letter of each character's name.. capitalized.

  Expected output:
  ```
  ["R", "I", "A", "R", "S"]
  ```

### Bonus: map temperature converter

Convert Fahrenheit temps to Celsius and return an array of Celsius temperate.
_Hint_: To convert Fahrenheit to Celsius: Deduct 32, then multiply by 5, then divide by 9

```
var fahrenheit = [0, 32, 42, 55, 88, 120, 209];

=>[-18, 0, 6, 13, 31, 49, 98]
```

### Bonus: map and reduce

Reduce is another higher order function that reduces the array into a single value.

[reduce on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

Using both .map and .reduce, find the total number of `pokemonCount`:

```
var players = [
    {
        name: "Christine",
        age: 100,
        pokemonCount: 120
    },
    {
        name: "Koty",
        age: 12,
        pokemonCount: 320
    },
    {
        name: "Marc",
        age: Infinity,
        pokemonCount: 22
    },
    {
        name: "Colin",
        age: 54
        pokemonCount: 97
    }
];

Expected Output:
=> 559
```



#### Resources
[Higher Order functions](http://eloquentjavascript.net/05_higher_order.html)
