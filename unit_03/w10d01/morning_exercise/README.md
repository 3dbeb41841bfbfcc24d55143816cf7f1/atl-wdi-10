# Fun Fun Functions

Let's keep your Javascript fundamentals skills in tip-top shape with these morning exercises.

## Directions

Write your code in `script.js`. You can run your code with `node script.js` or use a repl site like [repl.it](https://repl.it/)

### Challenge 1: Triangles

Write a function named `makeTriangle` that takes 1 parameter, a number (let's, say 5). Invoking the function will `console log` a triangle with 5 rows of asterisks.

Example:
```
var makeTriangle = function(num){
  //your code here
}

//invoke the function
makeTriangle(5);

//Expected Output:
*
**
***
****
*****
```

### Challenge 2: Product of an Array

Write a function named `findProduct` that `returns` the product of an array, as follows:

Example:
```
var numbers = [1, 2, 5, 8, 9, 19, 20, 44] ;

var findProduct = function(array){
  //your code here
}

//invoke the function
findProduct(numbers)

//Expected Output:
12038400
```

#### Challenge 2.5: Product of an Array

Now, refactor your previous function and calculate the product of an array using the `.reduce` function. Check out the docs [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### Challenge 3: Removing "scrub" Values from an Array

Write a function named `noScrubs` that takes an array as an argument. Invoking the function will `return` the same array, but without any "scrub" strings.

Example:
```
var words = ["I", "don't", "want", "no", "scrub", "a", "scrub", "is", "a", "guy", "that", "can't", "get", "no", "love", "from", "me"]

var noScrubs = function(words){
  //your code here
}

//invoke the function
noScrubs(words);

// Example Output:
["I", "don't", "want", "no", "a", "is", "a", "guy", "that", "can't", "get", "no", "love", "from", "me"]
```

### Challenge 4: Special Triangle

Same as Challenge 1, the side of the triangle is aligned to the right. Make a function named `rightTriangle` that takes in 1 argument (number) and `console logs` a triangle of asterisks as follows:

```
var invertedTriangle = function(num){
  //your code here
}

//invoke the function
makeTriangle(5);

//Expected Output:
    *
   **
  ***
 ****
*****
```
