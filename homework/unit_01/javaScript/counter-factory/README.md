[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Homework : Counter Factory

<!-- MATERIALS METADATA -->
<!--
  title: 'Counter Factory'
  type: homework
  creators: Matt Brendzel
  competencies: javascript, dom manipulation, event handling
-->

## Setup

Make sure that you are on the `master` branch of your `wdi-remote-...` repo.
Then run `git pull upstream master` to pull the latest materials from the
instructors' repository. You shouldn't hit a merge conflict here, but if you do,
flag down an instructor right away.

## Instructions

For this assignment, you will be creating a 'Counter Factory' web app -- this
tool will allow users to create counters and count with them using button
clicks.

Every time that you click the 'New Counter!' button, a new counter will be
created, and a new corresponding UI component for the counter will get added to
the bottom of the div with the id 'counter-list'. Each counter UI component in
the page needs to have the following format:

```html
<div class='counter' data-index='2'>
  <h3>Count: <span>0</span></h3>
  <button class='increment'> + 1 </button>
</div>
```

When the `<button>` is clicked, the number inside the `<span>` element should
increase by one.

  >  Formalizing the description above as a feature spec might produce something like this:
  >  1. When the 'New Counter!' button is clicked, a new counter appears on the
  >     page, containing:
  >     *  a visible count value
  >     *  a +1 (i.e. 'increment') button
  >  2. When the 'increment' button for a given counter is clicked, the count value
  >    shown on the counter increases by 1.

The `data-index` thing is a _**data attribute**_ -- it's a property of an
element that we can use to store relevant data. All such properties can be
accessed by grabbing the element from the DOM and referencing its `dataset`
property; specifically, to get the value in `data-counter-id`, we would need to
access a sub-property of `dataset` called `.counterId`.

> Data attributes can take any name you want to given them, so we could equally
> have called this property `data-banana` (and accessed it via
> `.dataset.banana`). But that would be silly, which is why we didn't do it.

This app is comprised of several standalone parts, each with different jobs that
they focus on. `CounterCollection` is a data model representing the underlying
data of our counters; in addition to storing the counter data, it is also
responsible for performing CRUD behaviors on the counters -- it can create new
counters, destroy existing ones, and either retrieve or update a given counter's
count value. `Presenter` is responsible for making changes to the DOM --
creating new HTML, modifying existing HTML code, etc. Finally, `AppController`
sits on top of the rest of the application, acting like the air traffic
controller or traffic cop; when new events occur, `AppController` responds and
moves relevant data from one place to another within the program. A more
detailed set of specifications can be found in the `spec` directory.

As you can see by looking inside `hw.js`, `CounterCollection` has already been
completed; your job tonight is to build `Presenter` and `AppController` in
accordance with the specs.

### Reach Targets

> NOTE: Do not attempt until **all** requirements are met.

-   Change the structure of a counter by adding a delete button beneath the
    '+ 1' button. When this button is clicked, it should delete _that specific_
    _counter_ from the page, and not interfere with the functionality of any
    other counters.

    > Look to the setup for the 'increment' buttons as a reference.

-   Add a form field to go with the 'new counter' button, and use it to assign
    each counter a descriptive title!

    > This will involve making some tweaks to `CounterCollection` as well as the
    > UI, since you will presumably be storing the title of each counter.

## Submitting Your Work

When you're ready to submit your work,

1.  Git add, commit and push your code to your fork of the class repo.
2.  Add the url to of repo to Schoology.

The issue should include:

-   A link that points back to your fork.

-   A 'comfort' score on how you feel about the material, from 1 (very
    uncomfortable) to 5 (very comfortable)
