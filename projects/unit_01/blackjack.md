# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

## Overview of `blackjack`

![](http://upload.wikimedia.org/wikipedia/commons/4/4b/Blackjack_board.JPG)

### The game

[Blackjack](http://en.wikipedia.org/wiki/Blackjack) is a one player game where people down on their luck generally transform their lives.  It's probably a thing in your universe, but feel free to read up on the rules if you have to.

## Project Details

### MVP - minimum viable product

Your game of Blackjack must have at minimum:

1. A way to keep track of the current player bankroll (a player should be able to play consecutive hands and the bankroll should reflect wins and losses)
2. A way for the player to make a bet
3. A way for the player to get more cards, or declare themselves happy with their current hand
4. A way for the player to bust
5. A way for the player to win
6. Game logic for the dealer to hit until a certain point

### Recommended features

1. A way for the Ace card to have its value determined as either 1 or 11 in accordance with the rules
2. Blackjack! Player wins with an ace and royal card
3. A way for the player to tie with the dealer
4. A button on `game over` to reset the game back to initial state

Additionally you should use CSS to ensure a reasonable amount of styling to keep your project presentable.


###  Advanced features

Going above and beyond the basic implementation is desirable, should you have the time.  Feel free to enhance your project with any of the following features:

1. A way for players to 'split' a hand
2. A way for players to 'double down' on a hand
3. Appropriate handling of 'insurance' and dealer blackjack
4. Display the odds based on the player's cards and what the dealer is showing. Recommend whether the player should hit/fold/double/split


## Implementation

### Technologies

You will be expected to use the following technologies to implement this project:

- **HTML**  
  Your HTML should be semantic.

- **CSS**  
  Your game should be stylish.

- **JavaScript & jQuery**  
  Your game should be playable.


## Expectations

### You

As a student you should be doing the following things:

- **Code Planning**

  Plan out your project before you begin. Pseudo-code your project thoroughly! What data structures will you need (objects, arrays)? How will you organize your code? Pseudo-code out any thorny issues you might already anticipate.

- **User Experience planning** What **layout** will your project have on the page (wireframes)? Check out `https://wireframe.cc/` for an in-browser wireframer, or just make a sketch and upload the image somewhere. Write *user stories* from the perspective of the user: "As a user I want to be able to click on x and have y happen". Sign up for Trello `https://trello.com/`, a handy to-do list style project planner.

- **Version Control**  
  Use **git** and **github** for version control, and make frequent incremental commits to prevent large scale implosions. Make a fresh repo outside the class repo for your project.

- **Hosting [OPTIONAL]**  
  Host your application on **githubpages**, or something similar so the class and instructors can use it. Your game must be in its own repo (not in the class repo) in order to have it hosted.

  Documentation / walkthrough [here](https://pages.github.com/). In the first step select the `Start from scratch option` instead of ~`Generate a site`~.

### Us

Since your instructors will be assessing your work, they will look for the following things:

- **Project Workflow**  
Did you you plan your project before you started? Did you use source control as expected for the phase of the program you’re in (detailed above)?

- **Technical Requirements**  
Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

# Deliverables

By the time the project is over, we will expect the following from you:

* A **working game, built by you**,
* A **link to your hosted working app** [Optional]
* A **git repository hosted on Github**  NOT inside your wdi-remote repository. Frequent commits dating back to the very beginning of the project
* **A `readme.md` file** with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.

Most importantly a **technical demonstration** of your app which:

* Is 5 minutes in length
* Shows off all features of the app
* Explains the technical details
* Explains the technical challenges
* Explains which improvements you might make


<br>
<hr>

### Suggested Ways to Get Started
​
​
* **Wireframe** Make a drawing of what your app will look like in all of the stages of the game (what does it look like as soon as you log on to the site? What does it look like while the player is playing? What does it look like when the player wins / loses?).

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems

* Work through the lessons in class for help and inspiration! Think about adding relevant code to your game each day - you are given 5 days so that you can work on it in small chunks, COMMIT OFTEN. We will be looking at your commit dates and comments are part of your scoring.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.

* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.
