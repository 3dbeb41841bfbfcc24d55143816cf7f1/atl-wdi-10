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

## Hook (5 mins)

Routing, as you saw in our last unit, is the process of constructing a system that renders different pages in an application based on a RESTful url.

So far, we have only dealt with a single page. What websites do you go to daily that only has _one page_ and doesn't change with interaction?

Comparatively, how many websites do you go to daily that have multiple pages (aka views)?

We still need a solution. A way to maintain our Single Page Architecture (SPA) while giving the illusion that the user is navigating to different pages.  That's where UI-Router comes in.  But before that...

## Review: Routes

Routing in a nutshell: When we hit a URL, what happens? 

Routing is the server's way of saying "When you hit `<SOME URL HERE>`, call `<SOME CONTROLLER CODE HERE>`"

```javascript
router.get('/', function(req, res) {
  res.render('home');
});
```

When a request comes in that matches `'/'`, send your request and get your response from the server through the callback function.

## Explain why we need a router

We want to have multiple pages! And we don't want to have a bunch of `<div ng-show="isOnHomePage">...</div>`, `<div ng-show="isOnAboutPage">...</div>` -- this is terrible and makes me sad. :(

Using a router with a front-end framework is how we can simulate a multi-page application, but just load HTML, CSS, and JS once. Once those are loaded (just that one time), every time we change pages it will be lightning fast. Our router just sets up which routes we want to exist and points our code where to make it happen. It makes AJAX (Asynchronous JavaScript and XML) calls to the backend for any other data/views that it needs). 

All that a front-end router does is toggle which page to show. This is much faster than having to reload the HTML, CSS, and JS every time.

To better understand this, let's walk through the puzzle pieces. 

## Identify the puzzle pieces of UI Router

Note: Angular comes with its default router called `ngRouter`.

You can read more about [here](https://docs.angularjs.org/api/ngRoute/service/$route).

However, the community realized there was a lot of missing functionality, so they made their own solution. Enter in [UI Router](https://github.com/angular-ui/ui-router)!

## The Five Steps to UI-Router - Codealong (40 mins)

### Step One: UI-Router

We'll need the UI-Router source. It's not an official, core library, and it's not hosted on Google's site. 

Let's load up a Webpack-ready project-
- cd into `atl-wdi-10/angular-lessons/labs/criminals-ui-router-starter`
- run `npm install`
- run `node config/seeds`
- run `npm start`
- run `npm run build`
- in another tab run `npm run build:dev`

#### To add UI-Router:

The name of the `npm` package is `angular-ui-router`, so we need to install it and `--save` it to our dependencies.

```bash
npm install angular-ui-router --save
```

You will get a warning when you do this about angular-ui-router is deprecated.  Don't worry about it.

### Step Two: Adding a Dependency

Now inside our main JavaScript file (in our `/client/app.js`), let's `require` the UI Router module then inject it as a dependency (aka tell Angular that we depend on this module).

```javascript
require('angular-ui-router');

angular.module('criminalsApp', ['ui.router']);
```

`'ui.router'` is what the library is called at it's source. Most libraries will tell you how to add the dependency in their documentation. If you need more than one dependency, just list them like any array.

Now we're _almost_ ready to rock!

### Step Three: Add Some Configuration

In our `/client/app.js`, this is what we started with:

```javascript
angular.module('criminalsApp', ['ui.router'])
```

We have added on to it:

```javascript
angular.module('criminalsApp', ['ui.router'])
  .config(uiRouterSetup);
```

Of course, now we need a `uiRouterSetup()` function, so let's build one:

```javascript
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
  // ROUTE
}
```

The arguments in the function are the necessary pieces that our router needs in order to do its work, however, we are specifically injecting it using the `$inject` syntax to ensure that the file will work after minification.

### Step Four: Add Some Routes

When using Angular, we are not really changing locations (single-page apps, here), lets, instead of calling them _routes_, call them **states**. States is the same idea as routes, but it is more descriptive. We are changing the current **state** of the app, as in a snapshot the data/view that we are looking at and working with, at any particular moment.

```javascript
$stateProvider
  .state('criminalsShow', {
    url: '/criminals/:criminalId',
    template: '<criminals-show></criminals-show>'
  });

// Inside the criminals-show component's controller
CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
  console.log($stateParams);
}
```

Static pages are great, but we are going to want to do more with our app. When we have more CRUD info, we will have to pull info from the URL.

Remember RESTful routes? Where `users#show` is accessed by going to `/users/:userId`?

UI Router acknowledges RESTful standards and the fact that we need to get values from the URL, such as `/:userId` or `/:articleId`. It makes it easy to use in our code.

UI Router makes this available in the controller as an injectable `$stateParams` object.

#### Pieces of state

We define a **name** for the state. This is important because it's how we can refer to it later, followed by a comma and an object.

In the objecy, we define a **relative url** for each state to tell the browser how to simulate navigating different pages. A `/` here says it'll be the default homepage, basically.

And finally, we add a **templateURL**, which is sort of a partial HTML file. We'll fill a partial with _just_ the code we'd need to change on the page, here.  Remember, it's just a part of a larger HTML page with parts that we can hide.

**Side Note:** Some docs will mention `$state.params` -- this is _the exact same object_. UI Router just added `$stateParams` for readability.

#### Otherwise

Let's also add a catch-all using the .otherwise method, on the $urlRouterProvider, to ensure that we route to the home if a state is not found:

```javascript
function uiRouterSetup($stateProvider, $urlRouterProvider) {
  $stateProvider
    ...
    .state('criminalsShow', {
      url: '/criminals/:criminalId',
      template: '<criminals-show></criminals-show>'
    });

  $urlRouterProvider.otherwise('/');
}
```

#### Looking at that `console.log`ged state

Now if we were to go to `url.com/#/criminals/1`, the following would be `console.log`ged:

`{ criminalId: '1' }`

### Step Five: Building Partials

Before our route can work we actually need to create the component we are trying to render, just like in server side rendering.

1. Look in the `/client/components` directory
2. Open the `/client/components/home` directory check out the `home.html` and home.component.js
3. Also, look at how we are rendering this tab in the HTML view

#### Where do we render the partial

When you implemented server side rendering last unit you had a layout file and you called `{{{body}}}` to inject all of your views in that space.

We will implement a similar pattern!

Add a `ui-view` tag in the body of our `/public/index.html` 

```html
<ui-view></ui-view>
```

#### How to trigger our partial?

You might notice in the nav bar that we have a hrefs that look a little different.  Instead of href, you can use ui-sref.

`ui-sref="home"`

`sref` stands for state reference. We pass this attribute the name of the state that we would like to load.

When the element is clicked, it's going to look at our `/client/app.component.js` file find the state that matches the name home, change the url to what we configured in the router (the first key/value pair in our object), and then load the relevant partial *INSIDE* of the ui-view tag that is on our `/public/index.html`.

## High Level

That very, very simply is how to route on the front end in Angular.

### Take Aways:

1. It is *NOT* backend routing.

  They do not interact, they have no knowledge of each other, they do not communicate. They are completely isolated from the other.

2. There is a TON you can do with routing.

  As you have seen, you can pass parameters via the $stateParams.

  Read the ui-router docs to learn more. UI Router is a very powerful and useful tool.

<!-- 3. What is the hashtag in our url?

  Don't worry about it for now. Remember that we're creating the illusion of routes for the user. We also need to trick the browser a little so it doesn't accidentally try to make requests to our backend for html that doesn't exist.

  In order to escape that front-end routing will preface all of our paths with that `#` so the browser doesn't get confused and just treats our nice looking routes as decoration rather than commands to make HTTP GET requests. -->

### Helpful Extra - Which state am I on?

`ui.router` actually gives us another really useful custom directive. Throw it on any links that are using `ui-sref`:

```html
<nav class="tabs">
  <a ui-sref-active="active" ui-sref="home">List</a>
  <a ui-sref-active="active" ui-sref="archive">Archive</a>
</nav>
```

This directive will apply the class of "active" to the link that's currently active, depending on what state you're looking at.

And suddenly, your interface makes a ton more sense. Super helpful.

### CodePen You Do

Navigate to [an example CodePen](http://codepen.io/rgpass/pen/XMGvOL/#/), so you can play around.

It may be helpful for you to signup for CodePen, and then Fork this CodePen. There are some starter notes there, but take any other notes on your copy and note what is happening.

Bonus: `ui-sref-active='active'`

Showcase your skills: Add a new route and link to it.

* Load up the CodePen
* Sign up if you haven't already
* Fork the pen
* Add a state called `aboutState`
* Add a link to it on the home page
* If the link is not showing up as a hyperlink, you may have a typo

Let's get to it.

### The Docs:

https://github.com/angular-ui/ui-router/wiki/URL-Routing

<!-- #### Get rid of the hash bang in the URL

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

Here we're setting html5mode to true and telling Angular we don't need to specify a base tag (`/`) in the head of our html. Read more about it [here](https://docs.angularjs.org/error/$location/nobase) -->
