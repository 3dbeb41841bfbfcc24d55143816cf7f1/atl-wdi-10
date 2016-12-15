[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Homework : Stopwatch

## Setup

Make sure that you are on the `master` branch of your `wdi-remote-...` repo.
Then run `git pull upstream master` to pull the latest materials from the
instructors' repository. You shouldn't hit a merge conflict here, but if you do,
flag down an instructor right away.

## Instructions

For this assignment, you will be helping to build an in-browser stopwatch
app! Its specified behavior is as follows:

```markdown
1.  When the 'START' button is clicked,
    a.  and the stopwatch is not currently running,
      i.    the stopwatch will begin running.
      ii.   the numbers of minutes, seconds, and (tens of) milliseconds elapsed
            will show up in the browser, updated once every 10 milliseconds, in
            the format `MM:SS:ss` (e.g. `100:01:34`, `05:01:10`).
    b.  and the stopwatch is already running,
      i. nothing will happen.
2. When the 'LAP' button is clicked,
    a.  and the stopwatch is running,
      i.    a new lap record will appear on the list of laps at the
            bottom of the page.
    b.  and the stopwatch is not running,
      i.   nothing will happen.
3.  When the 'STOP' button is clicked,
    a.  and the stopwatch is running,
      i.   the stopwatch will stop running.
      ii.  the numbers of minutes, seconds, and (tens of) milliseconds in the
           display will stop updating.
    b.  and the stopwatch is not running,
      i.   the time on the stopwatch will be reset.
      ii.  the display will reset to `00:00:00`.
      iii. the list of laps will be erased.
```

This is what's known as a _**feature spec**_ -- it describes the intended
behavior of the app, without any implementation-specific details.

The team who started working on this app have already developed, and started
working on, an intended implementation based around four separate objects,
`Stopwatch`, `ViewEngine`, `ViewHelpers`, and `AppController`, each of which is responsible for
handling a different part of the application.

`Stopwatch` holds the actual business logic and data of the stopwatch:
(a) maintaining a 'state' (i.e.  running vs not running),
(b) managing the 'time' on the stopwatch, and performing basic actions like
    starting and stopping the timer,
and
(c) keeping track of and creating 'lap' records.

`ViewEngine` is responsible for showing the data managed by `Stopwatch` in the
browser by changing the time display and the lap list. `ViewHelpers` holds helper methods used by `ViewEngine` as part of its work.

`AppController`, as the name suggests, sits on top of and controls the
application as a whole -- it handles UI events and moves data from one
component to another. Its methods will get attached as event handlers to
different elements in the DOM (which is why they have names like `handleClickStart`,
`handleClickStop`, etc).

Detailed specifications for each of these components (also known as
_**unit specs**_) can be found in the [`spec`](./spec) directory. Unlike the
feature specs, these specifications are very detailed, and refer to actual
methods on the objects.

As you can see in the starter code, one method has been provided for you:
`tickClock`. This method's job is to call itself every ten milliseconds,
as long as the stopwatch is running, and to call methods on `Stopwatch` and `AppController` each
time. _**Please do not alter this method.**_. Doing so could cause the
entire application to break.

### MVP Requirements

Satisfy all feature specs related to starting and stopping the watch (but
_**NOT**_ those related to recording laps).

### Reach

Implement all features given in the spec, _including_ recording laps.

## Submitting Your Work

When you're ready to submit your work,

1.  Push your code to your fork of the class repo.
2.  File an issue on the class repo titled "Your Name -- wXXdXX".

The issue should include:

-   A link that points back to your fork.

-   A 'comfort' score on how you feel about the material, from 1 (very
    uncomfortable) to 5 (very comfortable)
