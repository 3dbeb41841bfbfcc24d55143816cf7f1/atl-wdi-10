---
title: Angular $http
type: Lesson
duration: "1:25"
creator:
    name: Micah Rich
    city: LA
adapted:
    name: Marc Wright
    city: WDIR
competencies: Front-end frameworks
---

# Angular $http

### Objectives

- Review RESTful routes
- Review AJAX
- Review Promises
- Use $http to access an API resource, rather than use hard-coded data

### Preparation

- Be able to start up a Node.js app
- Be able to create an Angular app with controllers
- Understand AJAX and RESTful routing

<br />

## Review RESTful

RESTful routes bring a standard to web APIs.

### RESTful

When you see the documentation for an API, when you see "RESTful" you can feel relieved. This means that all you need to know are the names of the resources.

Full CRUD for a Users resource.

| Short Name    | HTTP Method | URL Name            |
|---------------|-------------|---------------------|
| users#index   | GET         | /users              |
| users#new     | GET         | /users/new          |
| users#create  | POST        | /users              |
| users#show    | GET         | /users/:userId      |
| users#edit    | GET         | /users/:userId/edit |
| users#update  | PATCH/PUT   | /users/:userId      |
| users#destroy | DELETE      | /users/:userId      |

Check out [Yelp's API docs](https://www.yelp.com/developers/documentation/v3/get_started) to see a good example of REST in practice.

Note: It's a great sign when a company has RESTful routes. Before interviewing, mess around with the product and check the routes. Keep in mind that sometimes companies will go away from RESTful routes in favor of SEO -- such as `/sign-up`, `/join`, `/login`, `/articles/search`, `/articles/{name of article rather than ID}`.

<br />

## Review AJAX

AJAX (Asyncronous Javascript And Xml) is the term to describe getting data from a server without doing a full-page refresh.

In a [previous lesson](https://github.com/ATL-WDI-Curriculum/atl-wdi-10/blob/master/instructor_notes/unit_02/ajax/ajax-with-jQuery.md) you used AJAX calls to grab GIFs.

``` javascript
var ajax = $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg');
```

AJAX calls are the way Single-Page Apps (SPAs) communicate with the Server.

<br />

## Review Promises

When using Angular, AJAX calls are done via **Promises**, so let's do a quick review.

Promises in JS work similar to real-life Promises.

When I order food at H&F, I get a receipt and a promise: "Go stand over there and I promise you I will give you your food". When the cook completes (aka resolves) that promise, I am given my food then can continue to sit down and eat.

`orderFood.then(grabFood).then(sitDown).then(eatFood).catch(complainToManager);`

<br />

## Codealong Intro

We've only been working with hardcoded data so far. Today that changes, it's time to kick it up a notch.

We're going to learn a little about two different functionalities in Angular that will allow us to start communicating with real data, accessed through an API. You'll need to dust off your knowledge of RESTful routes & AJAX, but hopefully that's a good thing.

Now, since we're going to be interacting with an API, in an ideal world we'd force you to write one first. You totally could. But _because_ you could, and because we'd rather skip to the new stuff, let's use a pre-built backend for this lesson.

We want to make it fast, so we've already made you a sweet little Node API.

Now, real quicklt – we might want a little seed data. 

## Demo of Starter Code (5 mins)

1. `git pull upstream master`
1. cd into `labs/unit_03/angular/presidents-app/presidents-all-starter-code`
1. `npm install`
2. `node config/seeds.js`

```json
[
  {"name": "George Washington", "start": 1789, "end": 1797 },
  {"name": "John Adams", "start": 1797, "end": 1801 },
  {"name": "Thomas Jefferson", "start": 1801, "end": 1809 },
  {"name": "James Madison", "start": 1809, "end": 1817 }
]
```

Once you have some seeds, start your server- `npm start`, open postman, and do a quick `GET` request to `http://localhost:3000/presidents` to make sure that you have a few seeded presidents.

![](https://i.imgur.com/QYHlWfm.png)

##### &#x1F535; YOU DO - Set up your workspace

Run through the steps above, and then add then take a minute to make some POST requests in postman to add some new presidents to our database.

<br />

Okay, so we have included a bunch of starter code that looks quite a bit like the code you have previously written. There's a controller, with some hard-coded data, listing out some of the Presidents in the United States. Hopefully [Wikipedia](https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States) is accurate, because who knows stuff like that off the top of their head?

It's our job to mush together this little API we have, and our Angular application.

We will do this with two different methods ($http and services), and this lesson is the $http lesson.

<img width="752"  src="https://cloud.githubusercontent.com/assets/25366/9017871/7cf4a79e-378e-11e5-85d8-d018f0a7ab21.png">

## Hitting an API with `$http` - Codealong (30 mins)

The simplest starting point will be to switch our hardcoded array of presidents with the one living in our new API.

Step one – **let's delete our hard-coded data.** In `presidentsController.js`:

```js
angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController);

function PresidentsController() {
-  this.all = [
-    {name: 'George Washington', start: 1789, end: 1797 },
-    {name: 'John Adams', start: 1797, end: 1801 },
-    {name: 'Thomas Jefferson', start: 1801, end: 1809 },
-    {name: 'James Madison', start: 1809, end: 1817 }
-  ]
+  this.all = [];
}
```

With a little setup, we will do a GET request to our API, and assign `this.all` to the array we get back. To do that, we are going to have to use an Angular library called `$http`.

### Injecting Dependencies

Angular dependencies – like libraries or plugins that other people have built – are defined first in our module (unless they come with Angular by default), and then _injected_ into any controllers that need to use them.

`$http` happens to come with Angular, so we only need to _inject_ it into our controller. We do that with a simple command, and then by simply passing an argument to our controller function.

In `js/presidentsController.js`:

```js
PresidentsController.$inject = ['$http'];

function PresidentsController($http) {
  // ...
};
```

The first line tells the controller that we intend to use this library called `$http`, the second allows us to pass the in the $http library as an argument. Think of it just like any other argument in a function – because it's the first argument, and we called it $http, we can use it inside our function via that name.

***Side Note:*** The `$inject` method additionally protects from reference loss caused by minification. Woo!

### Using $http is just AJAX!

`$http` is not very different than how we have used AJAX in the past, especially with JQuery. Let's add our index routes, and then walk through it. In `js/presidentsController.js` again:

```js
PresidentsController.$inject = ['$http'];

function PresidentsController($http) {
  var vm = this;
  vm.all = [];

  function getPresidents() {
    $http
      .get('/presidents')
      .then(function(response) {
        console.log(response.data);
        vm.all = response.data.presidents;
    });
  }

  getPresidents();

// ...
}
```

There are a few important things to note. Let's cut it down first just to $http:

```js
function PresidentsController($http){
// ...

  function getPresidents() {
    $http
      .get('/presidents')
      .then(function(response) {
        console.log(response.data);
        vm.all = response.data.presidents;
    });
  }

  getPresidents();

// ...
}
```

We call `$http`, then our favorite HTTP verb, `.get`. There is one for `.post`, too. What's returned from our asynchronous call is a unique object called a **promise**. A promise can have three states: pending, fulfilled or rejected. We will use `.then()` (a method inherent to a promise object) to capture the callback when it's _done_ and the state is either fulfilled or rejected.  Then, we can pass `.then()` a function to overwrite our `.all` array with the response we get back.

When we `console.log(response)`, we see everything that comes back. `.data` is just the data, `.presidents` is the key inside our JSON holding an array of presidents.

That's all we are doing in that function. Afterwords, we literally just run the function, which runs when we first load up the app. Easy.

**Now before you move on and you try it yourself, there's an important detail to note.** 

We've suddenly gone from:

```js
function PresidentsController($http) {
  this.all = [];
  // ...
```

to

```js
function PresidentsController($http) {
  var vm = this;
  vm.all = [];
  // ...
```

**Why?** The answer is because of JavaScript's _scope_. As you have seen in the past few weeks, `this` means different things depending on how many layers deep your code is.

In the previous example, which function is `this` scoped to?

```js
function PresidentsController($http) {
// ...

  function getPresidents() {
    $http
      .get('/presidents')
      .then(function(response) {
        // Where is 'this' scoped to?
        this.all = response.data.presidents;
    });
  }
// ...
}
```

We are 3 functions deep when we call `this.all` – `this` is no longer referring to our controller, it's referring to the function inside `.then`. If you left it that way, you would never see any data, because to see it in the view, that data needs to be attached **directly** to our **controller**.

So, what is a simple way to make sure we are scoped to the right place? A tiny little variable. The variable you choose is up to you, it's just preference, but `vm`, which stands for view model, is a best practice. So if we do:

```js
function PresidentsController($http) {
  var vm = this;
  vm.all = [];
// ...

  function getPresidents(){
    $http
      .get('/presidents')
      .then(function(response) {
        console.log(response.data);
        vm.all = response.data.presidents;
    });
  }

  getPresidents();

// ...
}
```

Now we can trust that we are talking to the right scope (aka the controller scope).

Try refreshing your browser, and let's see if it worked!

<img width="752"  src="https://cloud.githubusercontent.com/assets/25366/9017871/7cf4a79e-378e-11e5-85d8-d018f0a7ab21.png">

## Independent Practice (20 minutes)

Now that we have GETing down, it's up to you to try POSTing and DELETING. Just like any RESTful API, you can add a new president by POSTing to the correct URL. You will need to modify your controller action to send a new president from the form to our API, and probably look at the Angular documentation to figure out how to do it.

## Conclusion (5 mins)
- How do you inject dependencies into an Angular controller?
- How do you use $http to do a GET request?
- Why did we start using `self` instead of `this`?
- How do you do a POST request?
