# UI Router

## Objectives

* Review: Routing
* Explain why we need a router
* Identify the puzzle pieces of UI Router
* Use UI Router with Webpack
* Use UI Router with Components
* Leverage `$stateParams`

## Final Checks for Understanding

* I will import UI Router via npm
* I will have static components (`home`, `about`, `faqs`) that are called in specific routes (`/home`, `/about`, `faqs`)
* I will have dynamic routes (`/user/:id`, `/articles/:id/edit`) and their corresponding components

## Hook

So far we've had one page. What websites do you go to daily that only has _one page_ that doesn't change with interaction?

Comparatively, how many websites do you go to daily that have multiple pages (aka views)?

## Review: Routing

Routing in a nutshell: When we hit a URL, what happens? 

Routing is the server's way of saying "When you hit `<SOME URL HERE>`, call `<SOME CONTROLLER CODE HERE>`"

```javascript
router.get('/', function homeAction(req, res) {
	res.render('home');
});
```

When a request comes in that matches `'/'`, call `homeAction`.

## Explain why we need a router

We want to have multiple pages! And we don't want to have a bunch of `<div ng-show="isOnHomePage">...</div>`, `<div ng-show="isOnAboutPage">...</div>` -- this is terrible and makes me sad. :(

Using a router with a FE framework is how we can simulate a multi-page application but just load HTML, CSS, and JS once. Once those are loaded _just once_, every time we change pages it'll be lightning quick.

All that a FE router does is toggle what page to show. This is much faster than having to reload the HTML, CSS, and JS every time.

To better understand, let's check out the puzzle pieces.

## Identify the puzzle pieces of UI Router

Note: Angular comes with its default router called `ngRouter`. However, the community realized there was a lot missing so they made their own solution. Enter in UI Router!

Let's navigate to [an example CodePen](http://codepen.io/rgpass/pen/XMGvOL/#/) so we can play around.

It may be helpful for you to signup for CodePen then Fork this CodePen. This way you can take notes on your copy.

Bonus: `ui-sref-active='active'`

Showcase your skills: Add a new route and link to it.

* Load up the CodePen
* Sign up if you haven't already
* Fork the pen
* Add a state called `aboutState`
* Add a link to it on the home page
* If the link is not showing up as a hyperlink, you may have a typo

## Use UI Router with Webpack

Let's load up [a Webpack-ready project](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/tree/master/angular_lessons/labs/criminals-ui-router-starter).

The name of the `npm` package is `angular-ui-router` so let's install that and `--save` it to our dependencies.

```bash
npm i angular-ui-router --save
```

Now inside our main JavaScript file (often times called `app.js`, `main.js`, or `index.js`), let's `require` the UI Router module then inject it as a dependency (aka tell Angular that we depend on this module).

```javascript
require('angular-ui-router');

angular.module('myApp', ['ui.router']);
```

Now we're _almost_ ready to rock! We just need to add the couple of pieces mentioned in the CodePen above.

Let's recreate the code that we used in CodePen but this time in our project. This way we can have a sanity check that it's working.

## Use UI Router with Components

Review: What are components? Why do we use them?

```javascript
$stateProvider
	.state('home', {
		url: '/',
		template: '<home></home>'
	});
```

Let's make a couple of static pages as components. For example, let's make `home`, `about`, and `contact`.

I'll make a `home` page and a route. Together we'll make an `about` page and route. Then you'll make a `contact` page on your own.


## Leverage `$stateParams`

Static pages are great, but we're going to want to do more with our app. When we have more CRUD info, we will have to pull info from the URL.

Remember RESTful routes? Where `users#show` is accessed by going to `/users/:userId`?

UI Router acknowledges RESTful standards and the fact that we need to get values from the URL, such as `/:userId` or `/:articleId`. It makes it easy to use in our code.

It makes this available in the controller as an injectable `$stateParams` object.

**Note:** Some docs will mention `$state.params` -- this is _the exact same object_. UI Router just added `$stateParams` for readability.

```javascript
$stateProvider
	.state('usersShow', {
		url: '/users/:userId',
		template: '<users-show></users-show>'
	});

// Inside the users-show component's controller
UsersShowController.$inject = ['$stateParams'];
function UsersShowController($stateParams) {
	console.log($stateParams);
}
```

Now if we were to go to `url.com/#/users/1`, the following would be `console.log`ged:

`{ userId: '1' }`

Let's add it to our code to see it in action.

Using the Criminals app that already has a RESTful API, create a `users-show` template, add a route for it, and load it.

## Homework

Create a `users-edit` component and route. Upon saving, it should redirect to the `users-show` route.

What you'll need:

If you inject `$state` into your controller, you can tell UI Router to navigate to a specified state _inside your JavaScript_.

```javascript
UsersEditController.$inject = ['UsersService', '$state'];
function UsersEditController(UsersService, $state) {
	var vm = this;

	vm.thisUser = {};
	vm.updateUser = updateUser;

	activate();
	
	function activate() {
		loadThisUser(); // to be defined by you!
	}
	
	function updateUser() {
		UsersService
			.updateUser(vm.thisUser) // this fn to be defined by you as well
			.then(function goToUsersShow() {
				var thisUsersId = vm.thisUser._id;
				
				$state.go('usersShow', {  userId: thisUsersId });
			});
	}
}
```
