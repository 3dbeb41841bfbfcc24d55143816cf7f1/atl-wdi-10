We have to think about what the view should do in terms of functionality and then think about the js should do to achieve that.

http://colintherobot.github.io/trivia

## Step 1 — How to start (25min)

When the DOM loads the very, very first thing we need to build is the ability to start the game. We can see that there are two buttons already provided, `start` and `reset`

> Exercise: (5m) Look at our finished trivia game, write a paragraph about what the start button, and only the start button, should do in the context of this game.

1. add an eventListener to the the start button on the screen
2. the eventListener should listen for a click event
3. the click should invoke the start function


>Exercise: (5m) Think about what the start function itself should do. Think about what the start of a game should look like!

So we don't know what the load question function is going to do yet. But we can do the first part.

>Exercise: (5m) Use vanilla JS to select the node with a class of `.score` and set it's inner text to the `this.score`

## Step 2 — loadQuestion function (40min)

So when we click the start button now, the functionality is that it displays the score, but we also need to give the user their first question and their possible answers.

>Exercise: (5m) Think about what the loadQuestion function needs to do in order to display the question and possible answers to the user.

The function needs to use the questions object to display the right question.

Then the function needs to loop over that data structure to access the answers for that question. In the process of looping it should build divs for each answer.

Those answers need something else. How are our users going to interact with those answers?

They're going to click them! So each answer is going to need a click event.

I'll build this function out for you, cause there are some new methods and concepts in here.

- html `data-` attribute (5m)
- storing data in the DOM (5m)
- complex looping through a data structure (5m)


## Step 3 - Check for an answer (30min)

>Exercise: (5m) So when I click an answer: What do I want to happen as a user? And What does the program need to do to make that happen? Write a paragraph.

So our click event in our loop should probably call `triviaGame.checkAnswer()`. If we look at our game template we can see that checkAnswer takes the answerNode as an argument.

What do you think that means?

- `this` vs `event` inside of an eventListener (10m)

>Exercise: (10m) Remember that we're now storing data in the DOM. In the `triviaGame.checkAnswer()` function write the Javascript necessary to check if the answerNode passed to the function contains the correct answer,

1. if it does then add 1 to `this.score`  and change the correct answers background color to `green`
2. if not then change the wrong answers background color to `red`
3. finally add 1 to `this.progress`

## Step 4 - Next Question (30min)

>Exercise: (5m) Same as the others folks, we've verified that the the question that user clicked is either the right answer or not, and we've incremented the score to reflect that. So what's the next feature the user should experience? Can you guess what function needs to be called to initiate that?

I'll build this nextQuestion feature for you because it has some tricky bits and uses a new function.

- setTimeout (5m)
- self vs this (5m)

We get some weird behavior now with our scores They don't seem to be incrementing? Does anyone know why?

- Remember DRY? (5m)

## Step 5 — Last two pieces!

>Exercise: (5m) We only have two pieces of functionality remaining. Use the working example and your own example to determine our missing pieces.

We need two functions for the win state, we need to check if the game has ended. We have two data points we can compare to see whether or not the game has ended. Take a couple minutes and see if you can't suss out what those two data points are.

We'll go ahead and add this function

Our triggerWinState function is just going to alert the user to their score, how well they did and then reset the game.

>Exercise: Build the final `triggerWinState` method and the `reset` method.
