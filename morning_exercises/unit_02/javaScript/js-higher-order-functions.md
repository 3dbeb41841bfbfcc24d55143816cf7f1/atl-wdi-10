# Javascript Higher Order Functions:
## Part 1: forEach()

A Higher Order Function is a fancy term for *functions* that operate on other *functions*, either by taking them as arguments or by returning them.

Javascript iterators are like loops. They step (or iterate) over each item in an **array**. Iterators perform operations according to conditions specified in a callback.

[MDN Docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

#### forEach Syntax:
```
Array.forEach(function(current_value, index, initial_array) {})
```

`forEach()` is the basic iterator, all it does is loop through each element of an array and runs a function on each value. `forEach` is a good alternative for the `for loop`, and it _abstracts_ a lot of the work a for loop does.

### Example:

Increment each element in the array `arr` by 1. Console log an array with the new values.

#### Solution 1 with new array
```
var arr = [8, 8, 8, 8, 8, 8, 8, 8];

var answer = [];

arr.forEach(function(n) {
  answer.push(n + 1);
});

console.log(answer)

=> [ 9, 9, 9, 9, 9, 9, 9, 9 ]

```

#### Solution 2 using all of forEach's arguments
```
arr = [8, 8, 8, 8, 8, 8, 8, 8];

arr.forEach(function(n, index, arr) {
  arr[index] = n + 1;
});

console.log(arr)

=> [ 9, 9, 9, 9, 9, 9, 9, 9 ]

```

### Exercises:

Touch a file `forEach_exercise.js`, practice using `forEach` with the following exercises. Run your script by typing `node forEach_exercise.js` in terminal. Comment out code as you work on the next one.


1. Log each word in `words` in upper case using `forEach`.

  ```
  words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

  => logs ["HO", "CHI", "MINH", "CITY", "WAS", "ONCE", "KNOWN", "AS", "PREY", "NOKOR"]
  ```

2. Log each number in `squareMe` square value in the array using `forEach`.

  ```
  var squareMe = [0, 1, 10, 24, 595]

  => logs [0, 1, 100, 576, 354025]
  ```

3. Log the average as a Number for the numbers in the `numbers` array using `forEach`.

  ```
  var numbers = [5,7,9,12,20]

  => logs 10.6
  ```

### forEach: iterating an array of objects


```
var products = [
  { name: 'flower vase',   price: 75 },
  { name: 'lamp',  price: 85 },
  { name: 'jar of honey',   price: 95 },
  { name: 'seashell frame', price: 65 },
  { name: 'lumber',  price: 55 }
];
```
For the following 3 questions, use the `products` array above.

1. Log an array of each products' price using `forEach`. Upgrade this array so that the prices are in ascending order.

  Expected Output:
  ```
  //each products' price
  =>logs [ 75, 85, 95, 65, 55 ]
  //in ascending order
  =>logs [55, 65, 75, 85, 95 ]
  ```

2. We're having a clearance sale, everything's 1/2 off! For each object, add a new key value pair for `discount` and assign it a value of that object's price at 50% off.

  Expected Output:
  ```
  => logs [ { name: 'flower vase', price: 75, discount: 37.5 },
  { name: 'lamp', price: 85, discount: 42.5 },
  { name: 'jar of honey', price: 95, discount: 47.5 },
  { name: 'coil', price: 65, discount: 32.5 },
  { name: 'lumber', price: 55, discount: 27.5 } ]
  ```

3. Sales were so good for our top-of-the-line products that we are extending the sale! Only odd-indexed products are going to be on sale though. The rest will not have a discounted price.

  Expected output:
  ```
  [ { name: 'flower vase', price: 75 },
  { name: 'lamp', price: 85, discount: 42.5 },
  { name: 'jar of honey', price: 95 },
  { name: 'coil', price: 65, discount: 32.5 },
  { name: 'lumber', price: 55 } ]
  ```

### nested forEach

```
var myOrder = [
   ["beef", "turkey", "chicken", "veggie"],
   ["cheese", "pickles", "lettuce", "onion"],
   ["coke", "sprite", "iced tea", "water"]
];
```

1. Use a nested forEach to console.log the element in index position 1 in the inner arrays.

  Expected Output:
  ```
  turkey
  pickles
  sprite
  ```

#### Resources
[Higher Order functions](http://eloquentjavascript.net/05_higher_order.html)
