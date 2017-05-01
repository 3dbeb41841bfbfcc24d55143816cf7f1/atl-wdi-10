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

```javascript
var num = 999;
=> undefined

for(var i = 0; i <= num; i++) { 
    console.log(i);
}
```

## 2

Write a *for* loop that iterates in *reverse*. Console.log a countdown from 999 to 0.

```javascript
var num = 999;
=> undefined

for(var i = num; i >= 0; i--) { 
    console.log(i);
}
```

## 3

```
var directors = ["Michelangelo Antonioni", "David Lynch", "Yasujiro Ozu", "Ingmar Bergman", "Federico Fellini", "Martin Scorcese", "Michael Bay"];
```

Write a for loop that iterates over the directors array and console.logs each director.

```javascript
for(var i = 0; i < directors.length; i++) { 
    console.log(directors[i]);
}
```

## 4

Write another for loop that iterates over the directors array but also adds the string "Hi, " to the beginning of the name.

```
=> "Hi, Michelangelo Antonioni"
=> "Hi, David Lynch"
```

```javascript
for(var i = 0; i < directors.length; i++) { 
    console.log("Hi, " + directors[i]);
}
```

## 5

etc.

Write a function `isCool` that accepts one parameter, `name` as an argument. The function should return a string that outputs the name and a message saying that the person is super cool.

```
console.log(isCool("Thom"));

=> "Thom is super cool";
```


```javascript
function isCool(name) {
    console.log(name + " is super cool");
}
```

## 6

Write a function `twoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

```javascript
// example usage
twoLengths("Hank", "Hippopopalous");
// => [4, 13]
```

#### Using nested for loops

```javascript
function twoLengths(param1, param2) {
    var paramsArray = [param1, param2];
    var countArray = [];
    var count = 0;
    for(var i = 0; i < paramsArray.length; i++) {
        for(var j = 0; j < paramsArray[i].length; j++) {
            count += 1;
        }
        countArray.push(count);
    }
    console.log(countArray);
}
```

#### Using .map()

```javascript
function twoLengths(param1, param2) {
    var paramsArray = [param1, param2]
    var countArray = paramsArray.map(function(val) {
        return val.length;  
    });
    
    console.log(countArray);
}
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

```javascript
function transmogrifier(num1, num2, num3) {
    var total = (num1 * num2) ** num3;
    console.log(total);
}
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

```javascript
function fizzBuzz(num) {
    for( var i = 0; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizzbuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
```

## 9

Write a function `wordReverse` that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

```
console.log(wordReverse("Ishmael me Call"));

=> "Call me Ishmael"
```

```javascript
function wordReverse(param1) {
    var stringsArray = param1.split(" ");

    stringsArray.reverse();
    
    var reversedStringsArray = stringsArray.join(" ");

    console.log(reversedStringsArray);
}
```

## 10

Write a function `longestWord` that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

```
newArray = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];
console.log(longestWord(newArray));

=> "Peanutbutter"
```

```javascript
function longestWord(arrayOfStrings) {
  var longestLength = 0;
  var longWord;
  
  for(var i = 0; i < arrayOfStrings.length; i++){
    
    if (arrayOfStrings[i].length > longestLength) {
        longestLength = arrayOfStrings[i].length;
        longWord = arrayOfStrings[i];
    }
    else if (arrayOfStrings[i].length === longestLength) {
        longWord;
    }
  }
  console.log(longWord);
}
```


## 11

Write a function `digitSum` that accepts a number and returns the sum of its digits using a `for` loop.

```
console.log(digitSum(42));
=> 6;
```

```javascript
function digitSum(num) {
  var newNum = num.toString().split('');
  var sum = newNum.reduce(function(previousNum, currentNum) {
      return parseInt(previousNum) + parseInt(currentNum);
  });
  console.log(sum);
}
```

## 12

Write a function `insertDash` that accepts a number as a parameter and returns the parameter with a dash inserted between 2 odd numbers.

```
console.log(insertDash(454793));
=> 4547-9-3
```

```javascript
function insertDash(num) {
  var num1 = num.toString().split('');
  var num2 = [];
  
  for (var i = 0; i < num1.length; i++) {
      num2.push(num1[i]);
      if ((num1[i] % 2 === 1) && (num1[i + 1] % 2 === 1)) {
          num2.push("-");
      }
  }
  
  var num_dash = num2.join("");
  return num_dash;
}
```

#### Want more?
Have a look at https://projecteuler.net/archives
