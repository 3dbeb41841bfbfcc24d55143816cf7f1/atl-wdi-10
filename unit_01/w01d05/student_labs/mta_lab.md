# MTA - The NYC Subway System

THis afternoon you will build your first interactive command line application.

## Background
There are 3 subway lines:
  - The **N** line has the following stops: *Times Square, 34th, 28th, 23rd, Union Square, and 8th*
  - The **L** line has the following stops: *8th, 6th, Union Square, 3rd, and 1st*
  - The **6** line has the following stops: *Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place*.
  - All 3 subway lines intersect at *Union Square*, but there are NO other intersection points.

## Data structure

In your homework Wednesday you experimented with data modeling different entities. For this assignment the entity is the MTA and we're going to represent three lines within that.

Feel free to use any data structure you find comfortable, but we suggest you use the following

```javascript
var mta = {
  "N": ["Times_Square", "34th", "28th", "23rd", "Union_Square", "8th"],
  "L": ["8th", "6th", "Union_Square", "3rd", "1st"],
  "6": ["Grand_Central", "33rd", "28th", "23rd", "Union_Square", "Astor_Place"]
}
```

## Running functions and passing arguments from the command line using process.argv

Open the mta.js file and **read** through the comments.

**First**, run the file with two arguments and examine the output (the file we want to run and the word hello):

```bash
node mta.js hello
```

**Second**, run the file with three arguments and examine the output (The file, hello, and a name)

```bash
node mta.js hello Colin
```

We'll use this method to act as an interface for our MTA application

## Features

**[HINTS]**
- these functions should be built inside of an object called `mta`
- each function will likely need to console.log the response as well as return the response.
  You would need both because returns won't display in the console, and you can use some of your functions to help you solve some of your other functions!

1. A user can list the available lines.

  ```bash
  node mta.js lines
  => N
  => L
  => 6
  ```

2. A user can see all of the stops for a line.
  ```bash
  node mta.js stops L
  => [ '8th', '6th', 'Union_Square', '3rd', '1st' ]
  ```

3. A user can calculate the total number of stops between two stations.

 ```bash
  node mta.js calculate L union_square 8th
  => 2
 ```

4. A user is notified if they don't provide the correct number of arguments.
  ```bash
  node mta.js calculate sadasd
  => You must provide the 4 arguments - STARTINGLINE STOP ENDINGLINE STOP
  ```

5. A user can calculate the total number of stops between two stations on two different lines

  ```bash
    node mta.js complexCalculate L 8th 6 28th
  ```

  **[HINT]:** Union_Square is a `hub`, all three lines intersect at Union_Square

## Keep in mind
- Break it down and follow your errors! Maybe try getting the program to work for a single train line before trying to tackle multiple lines.
- Reference the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for arrays and objects. How can we grab the index number if we already know the value of an element inside an array?

  ``` javascript
  var greeks = ["euripides", "aesop", "sappho"]
  greeks.indexOf("euripides")
  // 0
  ```


## Bonus
Make your output more informative.

   ```bash
   node mta.js calculate L union_square 6 33rd
   Your trip from the Union Square L station to the 33rd 6 station is 3 stops long.
   You will have to make 1 transfer at Union Square to the 6 line.
   ```


## Bonus 2
- Add the following line without making major modifications to your code:
- The Q line has the following stops: 57th, Herald Square, Union Square, Canal St.
- All lines still only intersect at Union Square!

## Ultra Bonus
Add the S line which has only two stops Times Square and Grand Central. You now have multiple intersections. Can you modify the code to handle this.
