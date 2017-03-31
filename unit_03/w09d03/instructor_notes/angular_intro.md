---
title: Intro to Angular - Setup, Controller, 2-way binding
type: Lesson
duration: "1:25"
creator:
    name: Micah Rich
    city: LA
adapted by:
    name: Marc Wright
    city: WDIR
competencies: Front-end frameworks
---

# Intro to Angular: Setup, Controller, 2-way binding

### Objectives

- Describe why learning Angular is important
- Set up an Angular app and test that it works
- Build a very basic controller with fake data
- Render basic controller data in the view
- Bind basic data with a controller variable
- Explain the differences and similarities between $scope and controllerAs

### Preparation

- Have a thorough understanding of JS
- Know how to build JS constructor functions

## Intro - What is AngularJS and Why Should You Learn it? (20 mins)


Angular is an open source JS framework maintained by Google. It was created nearly 8 years ago, and its longevity is a testament to its capability and usefulness.  AngularJS is one of the most widely adopted MVC JS frameworks in use today, and is a valuable job skill to put on your resume. Further, it was built upon jqLite, so it goes hand-in-hand with jQuery!

AngularJS provides the following benefits when used to develop web apps:

- Enables us to organize and structure Single Page Apps using the popular MVC design pattern.
- Makes us more productive when developing web apps because it provides features, such as data binding, that requires less code from the developer.
- Was designed with testing in mind.

### The Components of AngularJS

![angular_components](https://cloud.githubusercontent.com/assets/25366/8970275/a1ab2ee2-35fd-11e5-8b23-65f4159ff7d6.jpg)

### Modules

Modules are where we write the pieces of our app, containers for related code.  The concept of *modules* is prevalent throughout programming, and here, we can consider it essentially a container for our app.

### Config & Routes

Each AngularJS module has a *config* method that allows us to provide code that runs when a module is loaded.  The *config* method is used most commonly to setup routing.

### Controller

Controllers in AngularJS serve two primary purposes:

- Initialize the data used for the view they are attached to
- Contain the primary code to respond to user events, such as when a user clicks on a button

A controller is a JS constructor function that is instantiated by the _ng-controller_ directive.

### Services & Factories

Services provide a way to organize related code and data that can be shared by controllers and even other services. Unlike controllers, which are instantiated and destroyed as the views they are attached to come into and out of view, services are created once (singletons) and persist for the life of the application.

Services should be used to hold the bulk of your application's logic and data, thus keeping controllers focused on what they are responsible for. Often, you can consider a service or factory something like a model or class.

### Directives

Directives are "markers" in HTML - most commonly as attributes and custom element tags. When processed by AngularJS's HTML compiler, they attach behavior to DOM elements or even transform them and/or their children.


### Filters

Filters are used to transform data. They are very flexible and can be used for formatting text in a view, such as making it all uppercase, or used to filter and sort an array of items.


#### The AngularJS Mindset

Programming a web app with AngularJS requires a different mindset. To use AngularJS effectively, it helps to think of your application being driven by data (and AJAX calls) - you change data and the app responds. We naturally think more procedurally when coding, we attach an event handler and write code to respond.

Let's look at an example of the different approaches.  Say we want an edit form to show when a button is clicked:

- Procedurally, we would attach an event handler to the button.  The handler code would select the element and set its display property to something besides "none".
- Using AngularJS, we declare a click handler on the Button element.  The handler could set a variable named editMode equal to true, and the view would respond automatically.
- Remember, drive your application using data - your data model is the single source of truth!

### SPA Architecture

Single Page Applications (SPA) are all the rage today. A misconception is that a SPA has only a single view - this is far from the truth!  The single page aspect of a SPA refers to a single page coming from the server, such as our _index.html_ page.  Once loaded, the SPA changes views by using _client-side_ routing, which loads partial HTML snippets called templates.

![spa_architecture](https://cloud.githubusercontent.com/assets/25366/8970635/896c4cce-35ff-11e5-96b2-ef7e62784764.png)

Client-side routing requires something known as a _router_.  A router in AngularJS, at a minimum, is used to define our routes, specify the template for that route, and specify which controller to attach to that view. You'll get to see routers in action in a later lesson.


## Basic Setup - Modules, Controllers, Views - Codealong (20 mins)

Create a example Node/Express app for this lesson.

1. `mkdir angular-intro-app` && `cd` into it
2. `npm init -y`
4. `touch server.js`

```js
// server.js
var express = require('express');
var app     = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(4000, function(){
    console.log("app listening on port 4000");
});
```
    
1. `npm install --save express`
1. `mkdir public`
1. `mkdir public/js`
1. `touch public/js/app.js`
1. `touch public/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Intro to Angular</title>
  </head>
  <body>

  </body>
</html>
```
    
1. Your folder structure should look similar to this.

![](https://i.imgur.com/ncMjQme.png)
    
##### &#x1F535; YOU DO

Repeat the steps above to set-up our Angular app.

<br>

## Set Up AngularJS

Like a few frameworks we've seen, there's no particular way to organize your application to make Angular work. We'll have to create our own, but let's try to keep it standard.

First, let's get Angular from [Google's CDN](https://developers.google.com/speed/libraries/#angularjs) and paste into script tag in the ```<head>```.

```html
<head>
  <meta charset="utf-8">
  <title>Intro to Angular</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.js"></script>
</head>
```


Now, we set up a module. Go to your `app.js` file, and all it takes is this little line:

```js
// Define a new module. The first argument is what we want to call our app, the second is an array of dependencies (which we don't need at the moment, so there are none)
angular.module('IntroToAngularApp', []);
```

This sets our app up. It's important to include that array when defining a module, even if there are no dependencies – that tells Angular we're initializing a module.

Now, back in our HTML, make sure your `app.js` is included in a script tag, and add an `ng-app` directive in the `<html>` tag.

```html
<!DOCTYPE html>
<html ng-app="IntroToAngularApp">
  <head>
    <meta charset="utf-8">
    <title>Intro to Angular</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.js"></script>
    <script src="js/app.js"></script>
  </head>
```

Since we defined it in `app.js` with a name of `IntroToAngularApp`, we just reference what we named it here. This tells the HTML to use that module.

Now, let's just check to make sure it worked. If it worked correctly, we should be able to put some simple expression in our HTML, and Angular will render it.

```html
<body>
{{ 1 + 1 }}
</body>
```

If Angular's working, it'll add our numbers together and spit out a 2 on the page – that's how templating works in Angular, inside curly brackets. More specifically, Angular will evaluate any expression within {{}} in the DOM.

Open it up in a browser to check. And remember – if it doesn't work, always check your browser's console for errors!

##### &#x1F535; YOU DO

Add the code above to your index.html


## A Very Basic Controller - Codealong (15 mins)

So, in Angular's flavor of MVC, controllers are intended to primarily:

1. Respond to user actions.
2. Provide data to the view (occasionally referred to the view-model).

Now, let's stub out a new controller and plug it into our module:

```bash
touch public/js/homeController.js
```

```javascript
// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('IntroToAngularApp')
    .controller('HomeController', HomeController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function HomeController() {

}
```

##### &#x1F535; YOU DO

Add a HomeController to your app.

<br>

Now, there are two acceptable methods for defining controllers.  They are commonly referred to as the:

- _$scope_ method
- _controllerAs_ method

Now, they're the same idea – essentially a way to craft a constructor function for each controller you decide to make. Angular started by using $scope (a context reference), which you can see an example of here:

```javascript
// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('IntroToAngularApp')
    .controller('HomeController', HomeController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function HomeController($scope) {
    $scope.awesome = true;
}
```

However, as the industry started using Angular, more and more in production, people started realizing that despite the name, $scope wasn't scoped very well. Primarily, as developers started to have nested controllers in their DOM, context wasn't properly being handled.

A lot of professionals have since moved on to doing it a little differently, and a little simpler.

```javascript
// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('IntroToAngularApp')
    .controller('HomeController', HomeController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function HomeController() {
    this.awesome = true;

}
```

The nice thing is that they're not very different, but that the latter looks far more like a normal constructor function you're used to and most importantly, a controller always has the correct context.

Later, we'll see how you can let controllers just connect models and the views - like we're used to - but since we don't have a model, let's just hard-code some junk in there.

## Independent Practice - Adding data to your Controller (5 minutes)

Take five minutes and add some data into your `HomeController`. Any sort of data will do so just come up with a few different data types to play with.

```js
function HomeController() {
  this.awesome = true;
  this.numbers = [4, 8, 15, 16, 23, 42];
  // etc, etc.

}
```

## Connecting Controller To The View - Codealong (10 mins)

The last step here is to connect our controller to the view. We attach any controllers to some div or HTML tag in our view. But first, make sure to include any newly created JS files.

```html
<html ng-app="IntroToAngularApp">
  <head>
    <meta charset="utf-8">
    <title>Intro to Angular</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.js"></script>
    <script src="js/app.js"></script>
    <script src="js/homeController.js"></script>
  </head>
```

Now:

```html
<body>
  <section ng-controller="HomeController as home">
    {{home.awesome}}
  </section>
</body>
```

When you render the page, it should actually render! That's awesome – that means we're working with data that's coming from our controller, and that's the core building block to more complex apps!

> Note: Keep in mind, while `HomeController` is so named because that's what we called it in the file, the `home` in this example is just a variable we're choosing on the spot. Pick something obvious that makes sense, but it can be anything.


##### &#x1F535; YOU DO

Connect the HomeController to your view and render `home.awesome`

<br>

#### But how does it work?

With Javascript in play, our browser is naturally event-driven. For example, when you have an onClick event listener placed on a button, you also have an event handler that can update the DOM in some way. The 'magic' behind Angular, the way that it seemingly knows to update the DOM when need be, is due to the fact that it extends the traditional js event-loop by extending it with angular context.

Every time you use Angular to bind something in the UI, whether it be via handlebars or any ngDirective, you are telling your related Angular module that they are extensions of your angular context and to watch them for changes by adding them to the $watch list. This event loop is known as the $digest cycle and whenever there is a change in Angular context ($scope), Angular will go through _ALL_ of its context and update any model(s) with a value that has been updated, a concept known as "dirty-checking."

## Independent Practice (10 minutes)

1. In pairs, for the next 10 minutes, work together to take the random data you put into your controllers earlier and show them in the view. 
2. After, experiment with making a new controller from scratch, including it in your HTML, and showing that in the view, too – it'll give you a little practice with all the setup.

## Conclusion (5 mins)
- How do we define a new module when starting an application?
- When you create an example controller from scratch, what type of JS function is this?
- How do we render data in the view? What does the templating look like in Angular?



