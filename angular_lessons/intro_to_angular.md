# Intro to Angular

## Objectives

* Understand why FE frameworks exist
* Describe when to and not to use them
* Recite the benefits of Angular
* Recap: MVC
* Intro to Single Page Application (SPA) architecture
* Draw the Angular architecture


## Understand why FE frameworks exist

### Hook

One of the benefits of FE frameworks is that we don't have to refresh on every interaction.

Imagine how annoying it'd be on Facebook that **every** Like would refresh the page. Challenge: I'm going to Like the first thing on my Facebook whatever it is.

Or every time you drag something in Trello it refreshes. _Show real example. Trello may fail._

Get with a partner and write down three websites that would have a terrible UX if the page reloaded on every click. Also, write down three where it'd be OK. For example, a news website. You can't use the examples I gave though.

### Reasons

* Do not want to have to refresh on every interaction
* Performance -- only want to transfer the minimum amount of information
  * Companies need less servers
  * Users have a better UX
* Solve common problems (write these down)
  * Looping through a list of items (possibly coloring alternate rows)
    * `ng-repeat="item in itemsArray"`
  * Filter an array of items
    * `<input ng-model="termToFilterBy">` `ng-repeat="item in itemsArray | filter:termToFilterBy"`
  * Immediate form validation
    * `ng-pattern="/^\S+@\S+$/"`
  * Hiding and showing different divs depending on the state (user is logged in, hide buttons for Log In and Sign Up)
    * `ng-show="user.isLoggedIn()"`
  * Real time interactions (like Uber's map of cars near by)
    * Not Angular-specific, but WebSockets are easy in FE framworks
  * Add things to a shopping cart
    * `ng-click="addToCart(item)"` `{{ allItems.length }}`


## Describe when to and not to use them

### When To Use FE Frameworks

* High level of interaction (like Facebook, Trello, Gmail) -- y'know _real_ web apps
* Filling out a form (https://admin.lawn.com/get_a_quote)
* Lots of view logic depending on the state
* Anything real time!

### When NOT To Use FE Frameworks

You'll see soon that FE frameworks add a level of complexity

* Content heavy (https://www.mitsubishipro.com/) or no interaction
  * Drill down heavy on this -- delays because it has to hit the server and there's no loading indicator
* Minimal interaction
  * "This app doesn't need to use a front-end framework." "Oh, you mean like most apps?"


## Recite the benefits of Angular

* Mimics MVC design pattern -- which we're going to recap soon
* Provides a lot of solutions to these common problems out of the box
  * On the list of common problems, write out a bit of Angular code that solves it
* Strong with TDD -- can test everything!
  * Before Angular, testing was a 2nd thought. Angular made FE framework testing the standard


## Recap: MVC

Look at this code side-by-side with the image below.

```javascript
// WHAT YOU'VE DONE SO FAR
const User = require('./models/user')

router.get('/users', function (req, res) {
  User
    .find({})
    .exec(function (err, users) {
      res.render('users/index')
    })
})
```

![mvc_architecture](http://i.imgur.com/BgLRBo0.png)

```javascript
// SAME THING BUT BROKEN OUT INTO MVC (PLUS R)
const User = require('./models/user')

// (R)
router.get('/users', usersControllerIndexAction)

// (C)
function usersControllerIndexAction(req, res) {
  // (M)
  User
    .find({})
    .exec(function (err, users) {
      // (V) to be returned
      res.render('users/index')
    })
}
```


## Intro to Single Page Application (SPA) architecture

Single Page Applications (SPA) are all the rage today. SPA means the client (browser) makes one request to our server for the initial view (emphasize this), then Angular will manipulate that single view without having to load anymore html.  The single page aspect of a SPA refers to a single page coming from the server, such as our _index.html_ page.  Once that one page is loaded, when we click a link, Angular will essentially hide the old HTML and show the new HTML -- not loading anything, just hiding the old and showing the new.  The different sets of HTML are called _templates_.

![spa_architecture](https://cloud.githubusercontent.com/assets/25366/8970635/896c4cce-35ff-11e5-96b2-ef7e62784764.png)

Client-side routing requires something known as a _router_.  A router in AngularJS, at a minimum, is used to define our routes, specify the template for that route, and specify which controller to attach to that view.


## Draw the Angular architecture
![angular_architecture](http://i.imgur.com/bHZmdjO.png)
