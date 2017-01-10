![ga](http://mobbook.generalassemb.ly/ga_cog.png)

#Morning Exercise
##Ordinary Ordinals

## Setup
- Navigate to the `ordinal_numbers` directory in `morning_exercises` for today and run `npm install` -- this will download any exercise-specific JavaScript dependencies into to a directory called `node_modules`.

## Pair Programming
You will be pair-programming to solve today's morning exercise. Note that we will be doing this multiple times throughout the cohort, so you will all get a chance to be a driver and an observer. Embrace the position that you have in the moment.

#### Driver
- You will be the person who is typing during this exercise.
- Before you code anything, you should **vocalize** what you are doing and ask your partner for their opinion.
- As you code, tell your partner what you are doing.

#### Observer/Navigator
- You will be watching as your partner writes the code.
- It is your job to be vocal with your ideas, but you won't be dictating the code. You also will not be watching in silence.
- The observer should think about the code at a higher level and ask things like:
  - "How would this piece of code handle this type of input?"
  - "What is this variable holding?"
  - "What are we outputting?"
  - "What are we trying to achieve with this line of code?"

## Directions
In `script.js` write a function `numberToOrdinal` that takes in an integer and returns a string with its correct ordinal suffix. 0 should return `"0"`.

Test Case examples:
```
numberToOrdinal(0) //returns "0"
numberToOrdinal(1) //returns "1st"
numberToOrdinal(2) //returns "2nd"
numberToOrdinal(3) //returns "3rd"
numberToOrdinal(4) //returns "4th"
...etc
```

#### Change Roles
We will switch roles after 20 mins. The driver becomes the observer, and the observer will now pick up where you left off and start coding.

#### Helpful Hints:
- There are 4 suffixes: "st," "nd," "rd," "th"
- There are exceptions to this rule:
  - teen numbers: 13th not 13rd, 14th not 14rd, etc.

### Testing Your Work

A set of automated tests, written in the (Mocha.js)[https://mochajs.org/] testing framework, has been provided for you with this exercise. To run these tests, open up a new tab `ctrl + t` and type `npm test` into the console from the `ordinal_numbers` directory of this repo. Test your work regularly, and read the feedback from the tests carefully -- it may give you a clue about what to do next.
