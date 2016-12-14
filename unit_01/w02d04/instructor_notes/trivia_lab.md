

Yesterday in class you had the opportunity to start building a full system in JS, that system took the image of a memory game.

We have to think about what the view (the rendered HTML) should do regarding functionality and then think about what the Javascript should do to achieve that.

The link below displays the end-result of what we'll build over the next two hours.

http://colintherobot.github.io/trivia

## Step 1 — How do we start (25min)

When the DOM loads the very, very first thing we need to build is the ability to start the game. We can see that there are two buttons already provided, `start` and `reset`.

>  EXERCISE: (5m) Look at our finished trivia game, write a paragraph about what the start button and only the start button does from the perspective of the user.

1. add a jQuery eventListener to the the start button on the screen
2. the eventListener should listen for a click event
3. the click should invoke the start function

> EXERCISE: (5m) Think about what the start function itself should do. Think about what the start of a game should look like based on what you wrote in the first paragraph!

We don't know what the load question function is going to do yet. But we can do the first part.

> EXERCISE: (5m) Use jquery to select the node with a class of `.score` and set it's inner text to `Score: ${this.score}`

## Step 2 — loadQuestion function (40min)

When we click the start button, the initial score renders at the top of the screen. We also need to give the user their first question and the possible answers.

> EXERCISE: (5m) Think about what the loadQuestion function needs to do to display the question and possible answers to the user. Similarly, consider the triviaGame.triviaQuestions data structure and the role it will play in this function.

The function needs to use the triviaGame.triviaQuestions object to display the right question.

Then the function needs to loop over that data structure to access the answers to that question. In the process of looping, it should build divs for each answer.

Those answers need something else. How are our users going to interact with those answers?

They're going to click them! So each answer is going to need a click event.

I'll build this function out with you, cause there are some new methods and concepts in here.

- HTML `data-` attribute (5m)
- storing data in the DOM (5m)
- complex looping through a data structure (5m)


## Step 3 - Check for an answer (30min)

> EXERCISE: (5m) When the user clicks an answer: What should the user experience? What does the program need to do to make that happen? Write a paragraph.

So our click event in our loop should probably call `triviaGame.checkAnswer()`. If we look at our game template, we can see that checkAnswer takes the answerNode as an argument.

What do you think that means?

- `this` vs `$event` inside of an eventListener (10m)

> EXERCISE: (10m) Remember that we're now storing data in the DOM. In the `triviaGame.checkAnswer()` function write the Javascript necessary to check if the answerNode passed to the function contains the correct answer,

1. if it does then add 1 to `this.score`  and change the correct answers background color to `green`
2. if not then change the wrong answers background color to `red`
3. finally add 1 to `this.progress` to keep track of where the user is in the game, we can call this `Game State`

## Step 4 - Next Question (30min)

> EXERCISE: (5m) Same as the others folks, we've verified that the question that user clicked is either right or wrong, and we've incremented the score to reflect that. So what's the next feature the user should experience? Can you guess what function needs to be called to initiate that?

We'll build this nextQuestion feature together

- setTimeout (5m)
- self vs. this (5m)

We get some weird behavior now with our scores. They don't seem to be incrementing? Does anyone know why?

- Remember DRY? (5m)

## Step 5 — Last two pieces!

> EXERCISE: (5m) We only have two pieces of functionality remaining. Use the working example and your example to determine our missing pieces.

We need two functions for the win state; we need to check if the game has ended. We have two data points we can compare to see whether or not the game has ended. Take a couple of minutes and see if you can't suss out what those two data points are.

We'll go ahead and add this function

Our triggerWinState function is just going to alert the user to their score, how well they did and then reset the game.

> EXERCISE: Build the final `triggerWinState` method and the `reset` method.
