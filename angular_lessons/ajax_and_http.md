# AJAX and `$http`

## Objectives

* Review RESTful routes
* Review AJAX
* Draw out the connection FE to BE
* Review Promises
* Introduce Angular's `$http`
* Go through example of full FE to BE


## Review RESTful

RESTful routes bring a standard to web APIs.

### Non-RESTful, horrible API example

* `/new-user`
* `/u/edit/current`
* `/view-single-user/:userId`
* `/:userId/:articleId/:commentId`

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


## Review AJAX

AJAX (Asyncronous Javascript And Xml) is the term to describe getting data from a server without doing a full-page refresh.

In a [previous lesson](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/blob/master/unit_03/w09d01/instructor_notes/ajax_with_jquery.md) you used AJAX calls to grab GIFs.

``` javascript
var ajax = $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
```

AJAX calls are the way Single-Page Apps (SPAs) communicate with the Server.

To see one in action, go to Twitter and load up the Network panel.


## Draw out the connection FE to BE

![Angular to the Server and Back](http://i.imgur.com/wCLFscr.png)

Let's redraw the diagram on the board and run through an example of creating a new user. Afterwards, we'll have you go to the board and draw up an example of updating an existing user.


## Review Promises

When using Angular, AJAX calls are done via Promises, so let's do a quick review.

AJAX in Angular are done via Promises so let's do a quick review.

Promises in JS work similar to real-life Promises.

When I order food at McDonald's, I get a receipt and a promise: "Go stand over there and I promise you I'll give you your food". When the cook completes (aka resolves) that promise, I am given my food then can continue to sit down and eat.

`orderFood.then(grabFood).then(sitDown).then(eatFood).catch(complainToManager);`


## Introduce Angular's `$http`

Angular makes AJAX calls through its `$http` service. This is Promise based!

Note: Since it's not _technically_ a Promise under-the-hood, the name for it is a "`.then`able". In other words, it has a `.then()` function on it.

```javascript
// Basic building block
$http
  .get('/api/users')
  .then(function parseResponse(response) {
    console.log(response.data);
  });


// Putting that basic building block into a controller
// Note: Typically don't want $http in your controller, but for learning purposes we're going to put the AJAX call there for now.
// After we cover Services tomorrow, you'll want to put it there.
function PresidentsController($http) {
  var vm = this;
  
  vm.allUsers = [];
  vm.createUser = createUser;
  vm.isLoadingUsers = true;
  vm.newUserFormData = {};
  
  activate();
  
  function activate() {
    $http
      .get('/api/users')
      .then(function parseResponse(response) {
        vm.allUsers = response.data;
        vm.isLoadingUsers = false;
      });
  }
}
```

### Dependency Injection

To use `$http`, we just put it as an argument into our controller. The technical name for "put it in as an argument" is called Dependency Injection -- we inject only what we need and make it explicit.

```javascript
angular
  .module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http', 'SomeOtherThing'];

// Order matters!!
function PresidentsController($http, SomeOtherThing) {
  // ...
}
```


## Go through example of full FE to BE

We have created some [starter code](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/blob/master/unit_03/w09d04/student_labs/presidents-app-starter-code-single-app-version) that includes a RESTful API MEN stack back-end and a basic Angular front-end.

Together, we will re-create presidents#index, #new, and #create. Then we'll have a lab where you'll work in pairs to do presidents#destroy. If you finish early, do #edit and #update.

### Server set up

Navigate to that directory in Terminal and run:

```bash
node config/seeds.js
npm start
```

Then head over to `localhost:3000`.

Sanity check: Go to `localhost:3000/presidents` and you should see an array of Presidents. Bonus: Download JSON Viewer Chrome extension to prettify the results.

### Code Along

Now that we know we have access to a JSON API, let's link it up.

End result for presidents#index:

```javascript
angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);
  
PresidentsController.$inject = ['$http'];

function PresidentsController($http) {
  var vm = this;

  vm.addPresident = addPresident;
  vm.all = [];
  vm.newPresident = {};
  
  activate();
  
  function activate() {
    $http
      .get('/presidents')
      .then(function setAll(response) {
        console.log(response.data);
        vm.all = response.data.presidents;
      });
  }

  // TODO: Hook up presidents#create to backend
  function addPresident(){
    this.all.push(this.newPresident);
    this.newPresident = {};
  }
}
```

Now let's link up presidents#create

```javascript
angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);
  
PresidentsController.$inject = ['$http'];

function PresidentsController($http) {
  var vm = this;

  vm.addPresident = addPresident;
  vm.all = [];
  vm.newPresident = {};
  
  activate();
  
  function activate() {
    $http
      .get('/presidents')
      .then(function setAll(response) {
        console.log(response.data);
        vm.all = response.data.presidents;
      });
  }

  function addPresident() {
    $http
      .post('/presidents', newPresident)
      .then(function addToAll(response) {
        vm.all.push(response.data.president);
        vm.newPresident = {};
      });
  }
}
```

### Your turn -- presidents#destroy

Big picture:

* Create a `X` or `(delete)` in the view
* On clicking the remove button/text, fire a function defined in the controller
* The `removePresident(president)` function makes an AJAX call to the server
  * Look at the backend API code to see what you need to pass to tell the server _which one to destroy_
* On success, it sets the `all` array to the original minus the one removed (Pro: Use [Array Prototype's filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### Bonus -- presidents#update

* Create a `(edit)` in the view
* On clicking, toggle the fields to switch to inputs rather than text, add `(save)` link
* Similar steps to presidents#create and presidents#destroy
* On success, toggle the field back to normal text

### Major Bonus -- Think async!

Currently our actions are almost instantaneous -- this is because the client, the server, and our DB are all on the same server (aka our computer).

In the real world, the client is a visitor's computer, the server is hosted on Heroku (probably in Virginia), and our DB's server location could be another datacenter. Long story short, assume each request takes 4 seconds to respond.

What this means is that we need loading indicators! We need a `vm.isLoadingAll` and a spinny GIF (or some other indicator). Also, for presidents#update we will want to set the input fields to disabled so they can't multi-click.

You also have to consider presidents#create -- disable that submit button until it's done!

### All-Star Bonus -- Think defensively!

Currently we assume that our code is flawless and that the server will always be running. This is only true about 98% of the time, but we must consider that 2%.

`.then`ables include a way to handle errors. Let's check out an example.

```
$http
  .get('/presidents')
  .then(function handleSuccess(response) {
    // ...
  }, function handleError(response) {
    // ...
  });


// Refactored for readability
$http
  .get('/presidents')
  .then(handleSuccessFn, handleErrorFn);

function handleSuccessFn(response) { /* ... */ }
function handleErrorFn(response) { /* ... */ }
```

For `$http` to acknowledge an error, you'll have to modify your server to return a 404. Once that's set up, show error messages! You'll want to make sure that error messages get reset after the next request, though or they'll be weirdly persisting.
