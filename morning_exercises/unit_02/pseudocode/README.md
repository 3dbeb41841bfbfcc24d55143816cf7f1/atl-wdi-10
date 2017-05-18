# Pseudocode to Code

Previously, we took word problems and managed to break them down into smaller chunks of pseudocode. Your mission this morning is to take the pseudocode and translate them into functioning code. Pseudocode is provided for you, but feel to reference yours or jump straight to the problem.

<!-- ## Setup
- Run `npm install` -- this will download any exercise-specific JavaScript dependencies into to a directory called `node_modules`. -->


## EXERCISES
- You will be writing 3 functions in `script.js`.

## BARRELS O' RUM

Captain Henry Morgan hosts an annual shindig. For his party, he ordered 2 small barrels of rum and 5 large barrels of rum, which cost 825 dubloons.  The party was going so well, he managed to buy 1 more small barrel of rum, which cost a total of 60 dubloons.

#### Directions

Write a `barrel` function that calculates and returns the price of a large barrel of rum as an integer. `barrel` takes in 3 arguments: the number of small barrels, the number of large barrels, and the total price. Unit of currency is negligible.


```
var barrel = function(small, large, total){
  //your code here
};

barrels(2,3,825) => 141
```


#### The Pseudocode:
```
- Find the cost of a small barrel:
  - We know 1 small barrel costs 60 right off the bat
- Find the cost of the large barrel:
  - First find the cost of all large barrels
    - To do that, grab the total cost (825)
    - Subtract the small barrels from the total
      - calculate the small barrels total price (2 * 60 = 120)
    - The remainder amount is the total cost of large barrels
    - Divide total cost of large barrels by number of barrels
```


## 2. SAILING THE SEAS

 How much would it cost to sail straight around the earth's circumference, assuming the Earth is rotating at 1000 mph, and assuming the eco-friendly ship's fuel costs $3 per gallon, and the ship gets 12 miles to the gallon.

#### Directions

Write a `shipFuelCost` function that calculates and returns the total cost as a number. `shipFuelCost` takes in 2 arguments: the cost of fuel per gallon, miles per gallon. Unit of currency is negligible.

```
var shipFuelCost = function(fuelPrice, milesPerGallon){
  //your code here
};

shipFuelCost(3, 12) => 6225.25
```

#### The Pseudocode:
```
- Find the distance of the earth circumference in miles
- Calculate the # of gallons used to travel around the earth
  - circumference / MPG (miles per gallon)
- Calculate the cost:
  - total gallons used * cost of fuel
```

## 3. GROG

 Blackbeard's famous slog recipe of 3 gallons of Costco's fruit punch and 2 gallons of Kirkland fruit punch. Costco's fruit punch contains 20% pure fruit juice and Kirkland's fruit punch contains 55% pure fruit juice. What percent of slog is pure fruit juice?

#### Directions

Write a `calcFruitJuice` function that calculates and returns the total percentage of pure fruit juice as a decimal. `calcFruitJuice` takes in 4 arguments:
> (# gallons Costco juice, % pure fruit juice Costco, # gallons Kirkland juice, % pure fruit juice Kirkland)


```
var calcFruitJuice = function(a, b, c, d){
  //your code here
};

calcFruitJuice(3, 20, 2, 55) => 0.34
```

#### The Pseudocode:
```
- Find the total amount of pure fruit juice (gal)
  - Total of Costco pure fruit juice:
    - percentage pure fruit juice * number of gallons
  - Total of Kirkland pure fruit juice:
    - percentage pure fruit juice * number of gallons
  - Add Costco pure fruit juice total + Kirkland pure fruit juice total
- Find the total amount of juice (gal):
  - Total of Costco juice + Total of Kirkland Juice
- Calculate (total pure fruit juice) / (total juice)
```
<!-- 
### Testing Your Work

A set of automated tests, written in the (Mocha.js)[https://mochajs.org/] testing framework, has been provided for you with this exercise. To run these tests, open up a new tab `ctrl + t` and type `npm test` into the console from the `morning_exercise` directory of this repo. Test your work regularly, and read the feedback from the tests carefully -- it may give you a clue about what to do next. -->
