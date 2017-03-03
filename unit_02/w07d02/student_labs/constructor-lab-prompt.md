# Javascript - Constructor Functions

The video for this work can be found [here](https://www.youtube.com/watch?v=jtTVJb1qa-k&list=PLw1xVKFboueks5UMLogE01mdThRU577oa&index=31)

## Conceptual Questions

1. What is the difference between the constructor function and an actual instance of that specific constructor function?
2. What are all the steps that occur when the theoretical `new ConstructorFunction()` is called?

## Exercises

1. Create a constructor function called `Cat` that takes 4 parameters ~ name, age, color, and a boolean that determines whether or not the cat is hungry. 
2. Inside the constructor function, include a method called `feedCat` that sets the the boolean value of whether or not the cat is hungry to `false`.


# Javascript - Prototypes

The video for this work can be found [here](https://www.youtube.com/watch?v=mfXWe4BIZjE&list=PLw1xVKFboueks5UMLogE01mdThRU577oa&index=32)

## Conceptual Questions

1. What is a prototype (in the context of javascript).
2. What is one problem that arises from including a method inside every constructor function?

## Exercises

1. Using the `Cat` object from the previous exercise, refactor your code so that the `feedCat` method is set to the `Cat` prototype instead of inside the `Cat` object.
2. Create a new method called `meow` that returns a message of the cat meowing. Be sure to incude the cat's name in the message. Be sure the method is added to the `Cat` prototype. 
3. Call these methods and make sure they work properly!

# Javascript - Closures

The video for this work can be found [here](https://www.youtube.com/watch?v=qnoS8ZxURtY&list=PLw1xVKFboueks5UMLogE01mdThRU577oa&index=33)

## Conceptual Questions

1. What is a closure?
2. How might this be an alternative to .bind()? 

## Exercises 

1. Lets re-work our `feedCat` method a bit.  
2. Inside the `feedCat` function, after setting the hungry value to `false`, trigger a new anonymous function that sets the value of whether the cat is hungry to `true` after 10 seconds. *(hint: be mindful of `this`!, and utilize something we learned in one of our previous homeworks)*
3. Create an instance of the `Cat` object and pass in the corresponding values. 
4. Check the value of if the cat is hungry or not.
5. Call the `feedCat` method and check on the whether the cat is now hungry again. Check again in 10 seconds.
