# WDI-9

<hr>
Title: 99 Problems<br>
Type: Lesson<br>
Duration: 1hr 30m<br>
Creator: Thom Page<br>
Topics: datatypes, conditionals, loops, functions <br>
<hr>

# 99 PROBLEMS

#### Subjects covered.

- Creating functions
- Iteration and nesting
- Functions on numbers, strings, arrays


## 1

Write a for loop that will console.log the numbers 0 to 999.

## 2

Write a *for* loop that iterates in *reverse*. Console.log a countdown from 999 to 0.

## 3

```
var directors = ["Michelangelo Antonioni", "David Lynch", "Yasujiro Ozu", "Ingmar Bergman", "Federico Fellini", "Martin Scorcese", "Michael Bay"]
```

Write a for loop that iterates over the directors array and console.logs each director.

## 4

Write another for loop that iterates over the directors array but also adds the string "Hi, " to the beginning of the name.

```
=> "Hi, Michelangelo Antonioni"
=> "Hi, David Lynch"
```

## 5

etc.

Write a function `isCool` that accepts one parameter, `name` as an argument. The function should return a string that outputs the name and a message saying that the person is super cool.

```
console.log(isCool("Thom"));

=> "Thom is super cool";
```

## 6

Write a function `twoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

```javascript
// example usage
twoLengths("Hank", "Hippopopalous");
// => [4, 13]
```

## 7

Write a Javascript function called `transmogrifier`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
power of 2` is 225.

Use your function to find the following answers.

```
console.log(transmogrifier(5, 3, 2));

=> 225
```

## 8

Fizz Buzz! Write a loop that will iterate through numbers from 1 to 100 and log each number in the console.

- In the loop, every time a number is divisible by 3, the word "Fizz" should appear instead of the number.

- If the number is divisible by 5, the word "Buzz" should appear instead of the number.

- If the number is divisible by both 3 and 5, then the word "Fizzbuzz" should appear.

Hint: Use modulus `%`

```
=>

1
2
Fizz
3
4
Buzz
6
7
8
Fizz
Buzz
11
Fizz
13
14
Fizzbuzz
etc...

```

## 9

Write a function `wordReverse` that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

```
console.log(wordReverse("Ishmael me Call"));

=> "Call me Ishmael"
```

## 10

Write a function `longestWord` that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

```
newArray = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];
console.log(longestWord(newArray));

=> "Peanutbutter"
```


## 11

Write a function `digitSum` that accepts a number and returns the sum of its digits using a `for` loop.

```
console.log(digitSum(42));
=> 6;
```

## 12

Write a function `insertDash` that accepts a number as a parameter and returns the parameter with a dash inserted between 2 odd numbers.

```
console.log(insertDash(454793));
=> 4547-9-3
```

#### Want more?
Have a look at https://projecteuler.net/archives
