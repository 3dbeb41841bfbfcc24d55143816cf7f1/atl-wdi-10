[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Homework : Progress Bars

## Setup

Make sure that you are on the `master` branch of your `atl-wdi-9` repo.
Then run `git pull upstream master` to pull the latest materials from the
instructors' repository. You shouldn't hit a merge conflict here, but if you do, flag down an instructor right away.

Next, navigate to the homework directory for today(unit1/w02d02/`homework` directory, and run `npm install` -- this will download any assignment-specific JavaScript dependencies into to a directory called `node_modules`.

As you work through this assignment, you should make commits regularly.
In particular, since there are automated tests built into this assignment, we
recommend that you make a commit every time that you pass a new test, in
addition to any other time you feel might be appropriate (e.g. just before
trying out something new).

## Instructions

You are going to help complete a simple website that counts down from 100 down
to 0, at a rate of one number per second. As it does this, the site will display
the progress of the countdown clock through several different
_**display components**_,
each of which will be governed by a function that you create.
These functions will be methods of an object called `timerUI`, inside `hw.js`;
they will each be called _once per second_ by the code inside
`countdown.js`, and they will each be given the current value of the countdown
clock as an argument.

### Display Components

#### 1. The Numeric Display

  Your first priority will be to show the current value left on the clock.
  Every time the countdown value updates, the numeric display will need to
  update as well. The function you'll be writing to implement this is
  `drawNumericDisplay(timerValue)`.

#### 2. The Progress Bar

  The progress bar is a rectangle (with class `progress-bar`) inside the
  element with id `progress-bars`. As the timer counts down from 100
  to 0, the progress bar should expand its width from `0%` to `100%` of the
  width of its parent element, the `progress-bars` component.
  The function responsible for implementing this is
  `drawProgressBars(timerValue)`.

#### 3. The Lit Fuse

  This one's a little cutesy. Similar to to the progress bar, the lengths of the
  `.burnt` and `.unburnt` divs will need to change over time as the counter runs
  down. Specifically. `.unburnt` will need to go from 98% of the width of the
  component (since the `.flame` div also takes up some space) to 0% of the width
  as the timer runs down, while `.burnt` does the reverse. The function
  responsible for implementing this is `drawLitFuses(timerValue)`.

#### 4. The Crawler

  If you thought the last one was cutesy, hoo boy. The crawler will make its
  way from left to right across the screen, at a rate of 10 pixels per second.
  Additionally, as the crawler makes its way across the screen, it should move
  back and forth (i.e. up and down) by 10 px with each step. The function
  responsible for implementing this behavior is `drawCrawlers(timerValue)`.

> Under what conditions will the crawler make it all the way across the screen?

### Testing Your Work

A set of automated tests, written in the [Mocha.js](https://mochajs.org/)
testing framework, has been provided for you with this assignment.
To run these tests, navigate to the `homework` directory and type `npm test`
into the console. Test your work regularly, and read the feedback from the tests
carefully -- it may give you a clue about what to do next.

### Reach Targets

> NOTE: Do not attempt until **all** requirements are met and all standard
> tests are passing.

#### Lots of Components

  Edit the HTML so that there are multiple progress bars, fuses, and crawlers.
  Then, update your methods so that all of them are animated in sync with each
  other.

  Tests for this feature are already accounted for in the test suite, so there's
  no need to change the tests.

#### The Final Countdown

  Once the countdown clock reaches the last ten seconds, the numbers on the
  numerical display should turn red and begin to get larger and larger (5% at
  a time) as the timer gets closer to zero.

  > Hint: Look up the default font size for H2

  Tests for this feature do exist, but they are currently disabled. To enable
  them, go into [hw-spec.js](./spec/hw-spec.js) and remove the `x` in front of
  the `context` keyword on line 48.

## Submitting Your Work

  When you're ready to submit your work,

  1.  Run the command `npm test` and take a screenshot of the output in your
      terminal.
  2.  Push your code to your fork of the class repo.
  3.  Add a link to the theme for today in the hmwork slack channel.

  The issue should include:

  -   A link that points back to your fork.

  -   The screenshot you took.

  -   A 'comfort' score on how you feel about the material, from 1 (very
      uncomfortable) to 5 (very comfortable)
