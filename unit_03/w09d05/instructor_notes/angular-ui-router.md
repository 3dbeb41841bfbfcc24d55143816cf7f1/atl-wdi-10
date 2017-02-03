---
title: Front-end Routing with UI-Router
type: Lesson
duration: "1:25"
creator:
    name: Colin Hart
    city: WDIR-Matey
competencies: Front-end Frameworks
---

# Front-end Routing with UI-Router

### Objectives
- Configure ui-router
- Distinguish between backend routing and front end routing
- Render "views", called partials or templates, using ui-srefs to ui-view
- Describe the complications of state management

### Preparation

- Build a basic Angular app
- Interact with an API

## Intro (5 mins)

Routing, as you saw in our last unit, is the process of constructing a system that renders different pages in an application based on the url.

We can think about displaying views to the user in jQuery, and even in angular, by showing and hiding different parts of the DOM. The problem with this is that users can't really navigate through your application, share urls, bookmark parts of your website etc.

So we need a solution. A way to maintain our Single Page architecture while giving the illusion that the user is navigating to different pages.

This all comes down to storing our views on our main page and turning them on and off as we need.

But what's the benefit? Why even make it single page? Why add that complexity? The main use case for front-end frameworks is added speed – by loading everything upfront, and just switching sections on and off, our page will seem wonderfully speedy because we'll be skipping quite a few steps that a more traditional framework has to run through.

Now, Angular comes with a basic routing mechanism, `ngRoute`, which you can read about [here](https://docs.angularjs.org/api/ngRoute/service/$route)

But today we're looking at an even more beefed up router: a third-party plugin called `ui-router`: https://github.com/angular-ui/ui-router

Let's walk through it.

## Seven Steps to UI-Router - Codealong (40 mins)

#### Step One: UI-Router

We'll need the UI-Router source. It's not an official, core library, and it's not hosted on Google's site. CDNJS [has the file](https://cdnjs.com/libraries/angular-ui-router)

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>
```

Make sure your script tag is _after_ including Angular, and before you try to use it.

In public/index.html

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>

<!-- new router script -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js"></script>
<!-- end new router script -->

<script src="js/app.js"></script>
```

#### Step Two: Adding a Dependency

Because we're adding in a new library, it'll be a dependency – we'll need to make sure Angular knows about our library, so we can use it.

We're going to touch a new file called `router.js` inside of our public directory
```javascript
// in router.js
angular
  .module('giphyAngularApp', ['ui.router']);
```

`'ui.router'` just happens to be what the library is called in it's source. Most libraries will tell you what to write here in their documentation, and if you need more than one, just list them like any array.

#### Philosophically, what is routing?

A route, in general, is just the path you take to get somewhere. That's not specific to web development, but it's one of those words we've latched on because it's a good description – when you're changing URL, when that location bar changes, you're on a new route.

Our router just sets up which routes we want to exist and points our code where to make it happen.

This means our Angular app can simulate having multiple pages, which gives us the ability to make more complex applications...which is awesome!

Let's open up our `app.js` and add some routes.

#### Step Three: Add Some Configuration

In `router.js`, we had this:

```javascript
angular.module('giphyAngularApp', ['ui.router'])
```

Let's add on to it:

```javascript
angular.module('giphyAngularApp', ['ui.router'])
  .config(GiphyRouter);
```

Of course, now we need a `GiphyRouter()` function, so let's build one:

```javascript
GiphyRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function GiphyRouter($stateProvider, $urlRouterProvider) {
  // ROUTE
}
```

The arguments in the function are necessary parts for our router to do its work, however, we're specifically injecting using the `$inject` syntax to ensure that the file will work after minification.

#### Step Four: Add Some Routes

When using Angular, we're not really changing locations (single-page apps, here), lets, instead of calling them _routes_, call them **states**. Same idea as routes, but we're just trying to be more descriptive. We're changing the current _state_ of the app, as in a snapshot of the stuff we're looking at and working with, at a particular moment.

```javascript
function GiphyRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('routingTest', {
      url: "/test",
      templateUrl: "/partials/test.html",
    });
}
```

That weird `$stateProvider` argument comes from our library, and it allows us to add a state to our application.

We define a **name** for the state. This is important because it's how we can refer to it later.

We also define a **relative url** for each state to tell the browser how to simulate navigating different pages. A `/` here says it'll be the default homepage, basically.

And finally, we add a **templateURL**, which is sort of a partial HTML file. We'll fill a partial with _just_ the code we'd need to change on the page, here.  Remember, it's just a part of a larger HTML page with parts that we can hide.

#### Otherwise

Let's also add a catch-all to ensure that we route to the home if a state is not found:

```javascript
function GiphyRouter($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('routingTest', {
      url: "/test",
      templateUrl: "/partials/test.html",
    });
}
```

#### Step Five: Building Partials

Before our route can work we actually need to create the partial we're trying to render, just like in server side rendering.

1. Create a directory called `partials` in your public directory
2. Inside of that directory create a file called `test.html`
3. Add an h1 with the content `HELLO WORLD`

#### Where do we render the partial

When you implemented server side rendering last unit you had a layout file and you called `{{{body}}}` to inject all of your views in that space.

We'll implement a similar pattern!

Add a `ui-view` tag in the body of our html

```html
<ui-view></ui-view>
```

#### How to trigger our partial?

1. Let's first initialize the html as an angular application.
2. Let's add a button above `ui-view` called test.
3. Finally we're going to implement a state reference directive that behaves sort of similar to a click event

`ui-sref="routingTest"`

sref stands for state reference. We pass it the name of the state we'd like to load.

When the element is clicked, it's going to look at our router.js file find the state that matches the name routingTest, change the url to what we configured in the router, and then load the relevant partial *INSIDE* the ui-view tag


## High Level

That very, very simply is how to route on the front end in Angular.

*Take Aways:*

1. It is *NOT* backend routing.

  They do not interact, they have no knowledge of each other, they do not communicate. They are completely isolated from the other.

  It's called routing because it looks kind of like routing, so what else are we going to call it?

2. There is a TON you can do with routing.

  We'll get into redirecting to different views from your controller later. You can pass parameters via a thing called $stateParams.

  This is the minimum you need to know, but don't let us stop you from reading the ui-router docs and learning more about it. It's a very powerful and useful tool.

3. What the eff is that hashbang thing in our url?

  Don't worry about it for now. Remember that we're creating the illusion of routes for the user. We also need to trick the browser a little so it doesn't accidentally try to make requests to our backend for html that doesn't exist.

  In order to escape that front-end routing will preface all of our paths with that `#` so the browser doesn't get confused and just treats our nice looking routes as decoration rather than commands to make HTTP GET requests.




  #### The Docs:

  https://github.com/angular-ui/ui-router/wiki/URL-Routing

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
