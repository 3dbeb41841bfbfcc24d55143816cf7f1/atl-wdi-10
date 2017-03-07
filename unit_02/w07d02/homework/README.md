# Tamagotchi Time

![image](http://old.computerra.ru/pubimages/78659.gif)![image](http://old.computerra.ru/pubimages/78659.gif)

In this assignment, you will be constructing interactive Tamagotchis from your very own Tamagotchi Constructor Function!

Unless you make the reach goal happen, this will be a console-based exercise, so make sure you have your developers console open and test frequently.

## Exercise Objectives
- gain deeper experience with writing Constructor functions
- gain practice creating new objects with the `new` keyword
- Use `this` and pass arguments to a constructor function
- gain deeper insight into object-oriented programming


## Setup
1. Make sure that you are on the `master` branch of your `atl-wdi...` repo.
Then run `git pull upstream master` to pull the latest materials from the
instructors' repository. You shouldn't hit a merge conflict here, but if you do, flag down an instructor right away.
- Note that the `tamagotchi` and `player` objects are in their own files so they can be more manageable.

## Directions:

* You will be writing and invoking new Tamagotchis in `tamagotchi.js`. Follow the steps in order below. You can comment out code you're not using so it doesn't clutter your console, but keep the code you do need..!

* `index.html` is already loaded with your scripts. Take note of the load order.

* You'll be making commits after each Part.


### RECAP: What is a Constructor Function?

A constructor function is a **template** for creating objects according to specification.

To build our family of Tamagotchis, we could write out a lot of entirely new tamagotchi objects. **OR** we could make a _template_ with which to automate the construction of our Tamagotchi objects.

We would need only to write the constructor once, and with it, we could simply construct an indefinite amount of Tamagotchi objects without having to write them out one by one.

A constructor function is a _function_, not an object. We use it to **generate** objects.

We do not write key-value pairs inside our constructor like we do with objects, instead, we just assign values to variables.

We refer to the properties that will exist within that generated object by using the keyword `this`:

### Part 1: Create the Constructor Function

* Write a constructor function for a Tamagotchi
* Using `this.propertyName = value`, add `foodInTummy`, `restedness`, and `health` as properties and set each of the values to 10.
* Add in a method called `cry`. The `cry` function should reduce `foodInTummy` by 1, console.log the new value of `foodInTummy`, and console.log "WAHH!!!".
* Make two `new` tamagotchis
* Invoke each tamagotchi's `cry` method
* :dart: Git add, and commit -m "part 1: created Tamagotchi constructor"

<details><summary>.. Stuck? </summary>

  ```
  var Tamagotchi = function() {

    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;

    this.cry = function() {
        this.foodInTummy--;
        console.log("The Tamagotchi is crying!!! WAAAH!!!!!!");
        console.log('current food in tummy: ' + this.foodInTummy);
    };
  };

  //create a new Tamagotchi with `new`
  var constructedObject1 = new Tamagotchi();
  var constructedObject2 = new Tamagotchi();

  //console log the new Objects to check them out
  console.log(constructedObject1);
  console.log(constructedObject2);

  //Invoke methods on the constructed objects:
  constructedObject1.cry();
  constructedObject2.cry();
  ```

</details>


### Part 2: Add Arguments

We can give our constructed objects unique values by providing arguments to our constructor function. In the same way that regular functions can take input (parameters), so can our constructor functions, and they can put those input values into the constructed object.

* In `tamagotchi.js`, add parameters to your constructor function: `name` and `creatureType`
* Make it so that the constructor function will add the values of `name` and `creatureType` to the constructed object. variables _hint:_ `this.propertyName = parameterValue` within the function.  
* Make it so that the `cry` method will console.log the Tamagotchi's name and the cry.

* Create `new` Tamagotchis each with different names and creatureTypes
* Invoke each Tamagotchi's `cry` method
* :dart: Git add, git commit -m "part 2: added arguments to Tamagotchi"

### Part 3: More Methods

* Add a method called `puke`. The `puke` function should:
  - reduce the Tamagotchi's `foodInTummy` by 1
  - console.log the new value of `foodInTummy` + a crying sound
* Add a method called `yawn`. The `yawn` function should:
  - reduce the Tamagotchi's `restedness` by 1
  - console.log the values "[Tamagotchi's name] has current restedness of: [restedness]"
* Make new Tamagotchis and test the methods work and that they console.log the Tamagotchis' name as well as the altered values.
* :dart: Git add, git commit -m "part 3: added new methods"

### Part 4: Make it a Game with Player

* Take a look at `player.js`. It's already built out. This is a `player` object, which has a name, and 3 methods `feedTamagotchi`, `medicateTamagotchi`, and `knockOutTamagotchi` where each take in a tamagotchi as an argument.

* Underneath `player`, invoke each of player's action separately and pass in a Tamagotchi you made earlier in Part 1.

  * _Hint:_ You can pass a tamagotchi object (ie. tamagotchi1 or tamagotchi2, etc) as an argument to the player's feedTamagotchi function: `player.feedTamagotchi(tamagotchi1)`

* :dart: Git add, git commit -m "part 4 added new methods"

### Part 5: Start and Stop

Add in the `start` and `stop` methods to your Tamagotchi constructor:

- The method `start` will kick off three timers (console.log the Tamagotchi's name):
   - `hungerTimer` invokes the Tamagotchi's cry method every 6 seconds
   - `yawnTimer` invokes the Tamagotchi's yawn method every 10 seconds
   - `sickTimer` invokes the `puke` method every 20 seconds

Hint: use  [setInterval](http://www.w3schools.com/jsref/met_win_setinterval.asp)

- The method `stop` will stop the `hungerTimer`, `yawnTimer`, and `sickTimer`.
- :dart: Git add, git commit -m "part 4 added new methods"

Make some new Tamagotchis and try running multiple of them, and turning them on and off.

### Reach Goals

We want it so that our player can just click buttons on the page rather than type in the commands to feed the Tamagotchi, etc.

* Write three buttons into your index.html: 'feed', 'rest', 'medicate'.
* When the buttons are clicked, they should invoke the respective player object methods to give a tamagotchi what it needs.

* Write a button that will `start` the tamagotchi

### Super Reach Goals

* Add a form to `index.html` so that when it's submitted, it creates a new Tamagotchi and takes the name that was submitted.

* Dynamically create a div for your new tamagotchi that has its own set of `feed`, `rest`, and `medicate` functions.

* In addition to console.logs, have the messages appear in the div.

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit and push your code
  2. Add a link that points to your repo in the hmwork slack channel/theme. Including the name and date.
  3. Add a comfort score for the material

  <!-- 1.  Add, commit, and push your code to your fork of the class repo.
  2.  File an issue on the class repo titled "Your Name -- wXXdXX".

  The issue should include:

  -   A link that points back to your fork.

  -   A 'comfort' score on how you feel about the material, from 1 (very
      uncomfortable) to 5 (very comfortable) -->
