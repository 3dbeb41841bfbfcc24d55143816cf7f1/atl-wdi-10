---
title: Front-end Routing with UI-Router
type: Lesson
duration: "1:25"
creator:
    name: Micah Rich
    city: LA
adapted by:
    name: Marc Wright
    city: WDIR
competencies: Front-end MV*
---

# Front-end Routing with UI-Router

### Objectives
- Build a SPA with multiple pages
- Describe when to consider server-side routing and when to consider front-end routing

### Preparation

- Build a basic Angular app
- Interact with an API
- Download the stater code in your student_examples folder

## Intro (5 mins)

Routing, as you've seen in our last unit, is adding in the ability to render different pages in an application based on the url – but in a single-page app, how can we have multiple pages? In Angular, it comes down to storing all of our views on our main page and turning them on and off as we need.

But what's the benefit? Why even make it single page? Why add that complexity? The main use case for front-end frameworks is added speed – by loading everything upfront, and just switching sections on and off, our page will seem wonderfully speedy because we'll be skipping quite a few steps that a more traditional framework has to run through.

Now, Angular comes with a basic routing mechanism, `ngRoute`, which you can read about [here](https://docs.angularjs.org/api/ngRoute/service/$route)

But today we're looking at an even more beefed up router: a third-party plugin called `ui-router`: https://github.com/angular-ui/ui-router

Let's walk through it.

## Seven Steps to UI-Router - Codealong (40 mins)

#### Step One: UI-Router

We'll need the UI-Router source. It's not an official, core library, and it's not hosted on Google's site. CDNJS [has the file](https://cdnjs.com/libraries/angular-ui-router), or you can download it from GitHub and include it yourself.

Assuming the latter, let's make sure our script tag is _after_ including Angular, and before we try to use it.

In public/index.html

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>

<!-- new router script -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js"></script>
<!-- end new router script -->

<script src="js/app.js"></script>
<script src="js/todosController.js"></script>
```

#### Step Two: Adding a Dependency

Because we're adding in a new library, it'll be a dependency – we'll need to make sure Angular knows about our library, so we can use it. If you haven't used any external libraries yet, rejoice in that we're finally going to put _something_ in those empty brackets in our `app.js`.

```javascript
// in app.js
angular
  .module('todoApp', ['ui.router']);
```

`'ui.router'` just happens to be what the library is called in it's source. Most libraries will tell you what to write here in their documentation, and if you need more than one, just list them like any array.

#### Philosophically, what is routing?

A route, in general, is just the path you take to get somewhere. That's not specific to web development, but it's one of those words we've latched on because it's a good description – when you're changing URL, when that location bar changes, you're on a new route.

Our router just sets up which routes we want to exist and points our code where to make it happen.

This means our Angular app can simulate having multiple pages, which gives us the ability to make more complex applications...which is awesome!

Let's open up our `app.js` and add some routes.

#### Step Three: Add Some Configuration

In `app.js`, we had this:

```javascript
// in app.js
angular
  .module('todoApp', ['ui.router']);
```

Let's add on to it:

```javascript
// in app.js
angular
  .module('todoApp', ['ui.router'])
  .config(MainRouter);
```

Of course, now we need a `MainRouter()` function, so let's build one:

```javascript
MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function MainRouter($stateProvider, $urlRouterProvider) {
  // ROUTE
}
```

The arguments in the function are necessary parts for our router to do its work, however, we're specifically injecting using the `$inject` syntax to ensure that the file will work after minification.

#### Step Four: Add Some Routes

When using Angular, we're not really changing locations (single-page apps, here), lets, instead of calling them _routes_, call them **states**. Same idea as routes, but we're just trying to be more descriptive. We're changing the current _state_ of the app, as in a snapshot of the stuff we're looking at and working with, at a particular moment.

```javascript
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home.html",
    });
}
```

That weird `$stateProvider` argument comes from our library, and it allows us to add a state to our application.

We define a **name** for the state. This is important because it's how we can refer to it later.

We also define a **relative url** for each state to tell the browser how to simulate navigating different pages. A `/` here says it'll be the default homepage, basically.

And finally, we add a **templateURL**, which is sort of a partial HTML file. We'll fill a partial with _just_ the code we'd need to change on the page, here.  Remember, it's just a part of a larger HTML page with parts that we can hide.

Now, before our route can work, we've got to extract some of our view into that partial. Let's do that.

#### Otherwise

Let's also add a catch-all to ensure that we route to the home if a state is not found:

```javascript
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
    });

    $urlRouterProvider.otherwise('/');
}
```

#### Step Five: Building Partials

Go over to our `index.html`. What we want to do is to take everything inside our `<main>` tag:

```html
<main>
	... ALL INSIDE HERE ...
</main>
```

Now, let's make a _new_ file. You can call it whatever you like but make it obvious. For this exercise, we'll call it `home.html`

```bash
$ touch public/home.html
```

And paste all that view code inside. Now you've got a partial, and all we have left to do is tell our `index.html` where we want to put it.

In that `<main>`, on our `index.html`, we'll add a new directive: `ui-view`.

```html
<main ui-view></main>
```

And since our route is a default route at `/`, and our `templateUrl` is already `home.html`, it should actually work!

#### Step Six: One More State!

Of course, that's exactly what we were looking at before, but _now_, we have the ability to switch out that view with different partials, depending on our _state_.

So let's make things interesting and add another state in here. Let's make a state for when we're looking at an archived list. In `app.js`:

```javascript
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
    })
    .state('archive', {
      url: '/archive',
      templateUrl: 'archive.html',
    });

  $urlRouterProvider.otherwise('/');
}
```

We'll need another partial for `archive.html` and for that one, instead of listing all our todos, let's just list the completed ones.

`touch public/archive.html`

Our new partial will be almost exactly the same as our last so **duplicate the `home.html` file**. Inside, find our `ng-repeat`:

```html
<li ng-repeat="todo in todos.remainingTodos()">
```

...and switch that sucker out:

```html
<li ng-repeat="todo in todos.completedTodos()">
```

We're 10 seconds away from seeing something awesome. We need one more thing.

#### Step Seven: A Navbar!

In order to jump between one view and the other, we need _links_! But not normal links because we're not changing pages. Luckily, `ui.router` gives us a custom directive. Inside your `index.html`, underneath `header` - let's add a `nav` with a few `a`'s

```html
<header><!-- stuff --></header>
<nav class="tabs">
  <a ui-sref="home">My List</a>
  <a ui-sref="archive">Archives</a>
</nav>
```

That custom directive, `ui-sref` is like `href`, but referencing _states_ instead. That came with our library, and **the text we're putting in there is just the names of the states we defined**.

You already have a little CSS in your `style.css` to make it look nice, something like:

```css
nav.tabs {
  background: #4d5d70;
  max-width: 55%;
  margin: 0 auto;
}
nav.tabs a {
  display: inline-block;
  background: rgba(255,255,255,0.7);
  color: black;
  padding: 10px 20px;
  margin-right: 1px;
}
```

Check it out. Click through and jump from page to page. Super awesome, yeah?

#### Helpful Extra - Which state am I on?

`ui.router` actually gives us another really useful custom directive. Throw it on whichever links are using `ui-sref`:

```html
<nav class="tabs">
  <a ui-sref-active="active" ui-sref="home">List</a>
  <a ui-sref-active="active" ui-sref="archive">Archive</a>
</nav>
```
This is a really nice helper that will apply the class of "active" (or whatever you put in quotes) to the link that's currently active, depending on what state you're looking at.

And suddenly, your interface makes a ton more sense. Super helpful.

#### Get rid of the hash bang in the URL

Browsers have a difficult time keeping track of browsing history when dealing with state so they insert an extra `#` into the URL. To clean that up, we'll inject `$locationProvider` into our Main Router.

```js
//public/js/app.js
MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {

...

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
}
```

Here we're setting html5mode to true and telling Angular we don't need to specify a base tag (`/`) in the head of our html. Read more about it [here](https://docs.angularjs.org/error/$location/nobase)


## Independent Practice (15 minutes)

Having multiple states is really useful, obviously – we can start making a much more complex Angular application.

**What other states would be good to add to your app?** Try adding an about page to start, or even crazier, maybe adding an extra state to be able to _edit_ a todo. Take the next 15 minutes to try.

## Conclusion (5 mins)
- What's a router? What's it for?
- How do we add routes to our Angular application?
