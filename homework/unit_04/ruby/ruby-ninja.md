# Ruby Ninja: Mastering the Basics

![img](https://41dmav17y2a239wj1k1kd0yt-wpengine.netdna-ssl.com/monitor/wp-content/uploads/sites/3/2016/04/365-Ninja.png)

Tonight you're going to get the basics down and put your Ruby skills to the test.

## Setup

Include all of your code in the file called ```ninja_skills.rb```.  You can run the file by typing in ```ruby ninja_skills.rb``` in your terminal. You may comment out pieces of code when you're not using them.

Try messing around with the Ruby REPL, IRB.  You can run IRB by typing ```irb``` in your terminal.

## Directions

Get to the end of the challenges and be crowned Ruby Ninja Warrior.

Follow each instruction one by one. Each instruction's code should go on its own line.

If you're not sure about something, be comfortable searching the `Ruby Docs` and feel free to Google!

## Challenge 1: Booleans
1.  Create a variable `a` and set it equal to `true`
2.  Create a variable `b` and set it equal to `false`
3.  Write a statement using `a` and `b` that evaluates to `false`
    - puts the result to the terminal
4.  Write a statement using `a` and `b` that evaluates to `true`
    - puts the result to the terminal
5. :dart: Commit -m "1. Boolean Skills"

## Challenge 2: Nil
1.  Create a variable of your choosing and set it equal to Nil
    - p the value of the variable to the terminal
    - puts the value of the variable to the terminal concatenate the string "nil was here".
    - print the value of the variable to the terminal
    - puts the class of the value of the variable to the terminal.  Use the .class method.  Look up this method on Google.
2. :dart: Commit -m "2. Nil skills."

## Challenge 3: Integers
1.  Create a variable `d` and set it equal to a Fixnum
    -  puts the value of `d`  to the terminal
2.  Create a variable `e` and set it equal to a Float
    -  puts the value of `e`  to the terminal
3.  Set `d` equal to `e` on another line
    -  puts the value of `d` to the terminal
4. :dart: Commit -m "3. Integers Skills"

## Challenge 4: Strings
1.  Create a variable `christine` and set it equal to the string "Hi, I'm Christine"
2.  Create a variable `likesTo` and set it equal to the String "long walks on the beach, kinda."
3.  Using string interpolation and the variables `tims` and `likesTo` puts the following string to the terminal:
    `"Hi, I'm Christine and I like long walks on the beach, kinda."`
4.  Create a variable `g` and set it equal to the string "2"
5.  Create a variable `gToNumber` and set it equal to the Integer 2
6.  puts the value of `g + gToNumber` in the terminal.  What happens?  How can you fix this?  
7. :dart: Commit -m "4. String skills "


## Challenge 5: Input and Output
-  Create a small program that asks the user to input an Integer and multiplies the number by two.  

-  Create a small program that does the following
    -  Asks the user for their name
    -  Asks the user what they like to do
    -  Prints out the user's name and what they like to do in a sentence.
- :dart: Commit -m "5. Input/Output skills"

## Challenge 6: Arrays
-  Create a variable ```myFirstArray``` and set it equal to an empty array
-  Set the variable ```myFirstArray``` to an array with five Strings and four Integers
-  Using ```myFirstArray``` puts the last value of the array to the terminal
-  Using ```myFirstArray``` puts the first value of the array to the terminal
-  Set the second value of ```myFirstArray``` to the String ```"Joe"```
-  Set the third value of ```myFirstArray``` to the Integer ```3```
-  Push the String Boolean ```true``` into ```myFirstArray```
-  Puts the class of the fourth value in ```myFirstArray```
- :dart: Commit -m "6. Arrays skills"

## Challenge 7: Hashes
-  Create a variable called myFavoriteAnimals and set it equal to a Hash with five animals.  The animal name as the keys and the species as the values.  You must include one animal with a name of "Edgar" and the value "Donkey"
-  Change value of Edgar to be "Bear"
-  Create a variable ```favoriteMovie``` and set it equal to a new, empty Hash.
-  Edit the ```favoriteMovie``` hash and add a ```movie``` key with a value of your choosing.
- :dart: Commit -m "7. Hashes skills"

## Challenge 8: Ranges
-  Create a variable ```firstRange``` and set it equal to a Range from one to ten including ten.
-  Convert ```firstRange``` to an array.
-  Create a variable ```secondRange``` and set it equal to a Range from one to one thousand excluding the Number one thousand.  
-  Convert ```secondRange``` to an array
-  Create a For loop that changes every value in ```firstRange``` to a String and using a p statement print those values out to the terminal
- Create a variable ```x``` and set it equal to zero
- Create a While loop that prints every value in ```secondRange``` while x < 50.
- Using .each multiply every other value in ```firstRange``` by two and push those values into a new Array.  Print that array to the terminal.
- Using .map and if/else statements, iterate through ```firstRange``` and change every even value to a string.  If the value is odd, don't change the value to a string.
- :dart: Commit -m "8. I'm a Ninja Warrior. Bow down to me."

## Challenge 9: Sum of Natural Numbers
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000 using Ruby.

## The Final Challenge: Prime Numbers

Write a method called `check_prime?` that will test whether a number is Prime. The method will return true if Prime, false if not.

Write another method called `get_primes` that will print all the Primes up to an arbitrary limit. For example, if you invoke your method with `get_primes(100)`, it will print all the Prime numbers up to and including 100.

This method can call on the previous `check_prime?` method.


> A Prime number is a number that is not evenly divisible by another number except 1 and itself.

> To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

Check out Ruby's `Prime` class: http://ruby-doc.org/stdlib-1.9.3/libdoc/prime/rdoc/Prime.html

## Ninja Warrior Status
![img](http://img.blogduwebdesign.com/benjamin-sanchez/578/couvRubyNinja.jpg)

## Submitting Your Work

  When you're ready to submit your work,

  1.  Add, commit, and push your code to your fork of the class repo.
  2.  File an issue on the class repo titled "Your Name -- wXXdXX".

  The issue should include:

  -   A link that points back to your fork.

  -   A 'comfort' score on how you feel about the material, from 1 (very
      uncomfortable) to 5 (very comfortable)
