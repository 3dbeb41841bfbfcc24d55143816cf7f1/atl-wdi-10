[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Making Change

Write a function that can make correct change, given a purchase price and an
amount paid.

## Setup

Make sure that you are on the `master` branch of your `atl-wdi-9` repo.
Then run `git pull upstream master` to pull the latest materials from the
instructors' repository. You shouldn't hit a merge conflict here, but if you do,
flag down an instructor right away.

Next, navigate to the directory for today, go into the `morning_exercse`
directory, and run `npm install` to install dependencies.

Mocha.js tests have been provided for this exercise, so feel free to use them
as you work.

## Instructions

Write a function called `makeChange`, which will take two arguments,
a purchase price and an amount of money tendered; it will return an array of the
quantities of quarters, dimes, nickels and pennies that it must give back
in order to make proper change (without giving too many smaller coins).

Here's an example of how this should work.
Say we want to buy something for $5.60, and we pay $6.00;
we should get back 1 quarter, 1 dime, and 1 nickel. If the item was, instead,
$5.62, we would get back 1 quarter, 1 dime, and 3 pennies.

```js
makeChange(5.60, 6.00) // => [1, 1, 1, 0]
makeChange(5.62, 6.00) // => [1, 1, 0, 3]
//                            Q, D, N, P
```

> HINT: It would make things much easier if we were to work in terms of cents
> rather than in terms of fractional dollars. We can do this by multiplying by
> 100. Use `Math.round` to deal with any rounding issues.

### Reach Target : Arbitrary Denominations

Suppose that your function might be passed an array of coin denominations as an
optional extra argument. Refactor your function so that if this optional
argument is given, you can give out the correct change in the coins of those
denominations. Assume that the denominations will be sorted from largest to
smallest, and that all denominations will be in (non-zero) whole numbers of
cents.

```js
// Dollars, Half-dollars, Nickels, Pennies
makeChange(5.39, 6.00, [100, 50, 5, 1])
// => [0, 1, 2, 1]
//
// Quarters, Pennies
makeChange(5.39, 6.00, [25, 1])
// => [2, 11]
//
// Quarters, Dimes, Nickels, Pennies
makeChange(5.39, 6.00, [25, 10, 5, 1])
// => [2, 1, 0, 1]
//
```

If for whatever reason it is not possible to make exact change given the
denominations that were passed in (for instance, if the smallest denomination
is 5 cents, and you need to give our 3 cents worth of change), 'round down' by
giving the maximum amount of change _without going over_.

```js
makeChange(5.39, 6.00, [25, 10])
//                       Q,  D
// => [2, 1], or 60 cents in change, rather than 61
```
