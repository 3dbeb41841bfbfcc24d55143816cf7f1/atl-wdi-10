[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Homework : Tic Tac Toe

## Setup

Make sure that you are on the `master` branch of your `wdi-remote-...` repo.
Then run `git pull upstream master` to pull the latest materials from the
instructors' repository. You shouldn't hit a merge conflict here, but if you do,
flag down an instructor right away.

## Instructions

For this assignment, you will be implementing an app for playing a simple
turn-based game:
[Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/200px-Tic_tac_toe.svg.png)

For those not familiar, Tic Tac Toe is a game in which players take turns
placing symbols (X / O) onto a board, trying to align three of their symbol
along a row, column, or central diagonal. You will be constructing this game so
that it can be played by with two players, both playing on the same machine. A
full feature spec for how this should be implemented in the app can be found in
`feature-spec.md`, inside the `spec` directory.

The architecture that was chosen for this application is as follows:

-   `GameEngine`: Responsible for storing and manipulating the 'game state', the
set of all data describing the game as it currently stands. Here is where things
like players, moves, and victory conditions live.
-   `ViewEngine`: Responsible for showing and updating the 'view' that the user
sees while playing the game. Methods responsible for DOM manipulation live here.
-   `GameController`: Responsible for handling user input (in the form of
events), using that input to drive the behavior of `GameEngine`, and displaying
output to the user via `ViewEngine`.

Detailed specifications for each unit of this application can be found in the
`unit-spec_*.md` files inside the `spec` directory.

### Reach

Assuming that you meet all standard requirements given in the feature spec,
here are some reach targets that you can shoot for:

#### "Ooooh Pretty"

A nice UI can go a surprisingly long way. Tweak, enhance, and customize this UI
to your satisfaction.

#### "I'm sorry, Dave; I'm afraid I can't do that."

Create an AI so that the game can be played in single-player mode! The AI can be
as complex (e.g. exploring all possible combinations and estimating odds for
success) or simple (make a random valid move) as you like.

## Submitting Your Work

When you're ready to submit your work,

1.  Push your code to your fork of the class repo.
2.  File an issue on the class repo titled "Your Name -- w02d05".

The issue should include:

-   A link that points back to your fork.

-   A 'comfort' score on how you feel about the material, from 1 (very
    uncomfortable) to 5 (very comfortable)
