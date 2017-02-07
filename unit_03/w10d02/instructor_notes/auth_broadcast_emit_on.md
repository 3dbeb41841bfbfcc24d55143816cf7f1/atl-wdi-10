---
title: Authentication in Angular with PubSub
type: Lesson
duration: "4:25"
creator:
    name: Colin Hart
    city: WDIR-Matey
competencies: Front-end Frameworks
---

# Authentication in Angular with PubSub

### Objectives
- Communicate between controllers by way of nesting
- Communicate between controllers using Angular's PubSub architecture
- Implement Authentication in Angular
- Describe loose coupling vs. tight coupling

### Preparation

- Build a basic Angular app
- Interact with an API


# Intro

Today we're going to implement authentication using that nested controller pattern that's been sitting around doing nothing AND Angular's implementation of a PubSub architecture.

[What is Pub Sub:](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)

> In software architecture, publish–subscribe is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers, but instead characterize published messages into classes without knowledge of which subscribers, if any, there may be. Similarly, subscribers express interest in one or more classes and only receive messages that are of interest, without knowledge of which publishers, if any, there are.

> Publish–subscribe is a sibling of the message queue paradigm, and is typically one part of a larger message-oriented middleware system. Most messaging systems support both the pub/sub and message queue models in their API, e.g. Java Message Service (JMS).

> This pattern provides greater network scalability and a more dynamic network topology, with a resulting decreased flexibility to modify the publisher and the structure of the published data.

I like to think of PubSub as the equivalent of sending signal flares when you're stuck or lost in the woods.

Stuck over in one valley you need to get some message out to another valley. Rather than having to march all the way down one valley and around the mountain you shoot a message straight up, and someone listening in the other valley can see that message remotely.

If you think of our controllers as those valleys and scoping as the mountains that divide them, then that is in effect what PubSub is solving.

## Why does this problem even exist?

Angular can lead to fairly tight coupling, particularly when you're not yet fully comfortable with _all_ of the tools in your Angular tool belt ( a la: Services and Custom Directives).

We'll hopefully have time to cover custom directives in Unit 4, and you've seen a little bit how you can use services.

#### Aiya... tight coupling? Loose coupling? (30min)

In your breakout rooms read this [reddit post](https://www.reddit.com/r/learnjavascript/comments/30mnra/tight_vs_loose_coupling_examples/) together and discuss the concept of tight coupling vs. loose coupling:

Think about where you see this in Angular, and where you might see more of it in our lesson today.

## Our Solution is PubSub!

We'll inject `$scope` `$rootScope` into our controllers to `broadcast`, `emit`, and `listen` for messages (those signal flares we were talking about earlier) in our controllers.

Take another 30 min to read through this [post](https://medium.com/@martindidiego/broadcasting-and-emitting-events-to-different-controllers-in-angularjs-4f86cf78cec5#.94x6egl12)

Set up the `pub_sub` node app in `student_labs` for a working example of `broadcast`, `emit` and `on` from the first two examples in the post. Talk with your team about what's happening.

Comment the code in student labs with your explanations of what the code is doing.

Extra reading: https://toddmotto.com/all-about-angulars-emit-broadcast-on-publish-subscribing/

# Authentication

### Signup

1. Add li to index page under Auth controller

  ```html
  <ul>
    <li ui-sref="signup">signup</li>
  </ul>
  ```

2. Create the signup partial

  ```html
  <div ng-controller="AuthController as auth">
    <form ng-submit="auth.signup(userPass)">
      <div>
        <label for="name">name</label>
        <input type="text" ng-model="userPass.name">
      </div>
      <div>
        <label for="email">email</label>
        <input type="text" ng-model="userPass.email">
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" ng-model="userPass.password">
      </div>
      <button type="submit">Signup!</button>
    </form>
  </div>
  ```

  Why are we defining a controller in the partial?

  What about that ng-model userPass business?

3. define the signup method in the auth controller

  ```js
  function AuthController($http, $state, $scope, $rootScope) {
    var self = this;

    function signup(userPass) {
      $http.post('/users', userPass)
        .then(function(response) {
          $state.go('login');
        });
    }
  }
  ```
4. set the state router up for signup and login

  ```js
    .state('login', {
      url: '/login',
      templateUrl: '/partials/login.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/partials/signup.html'
    })
  ```

5. Create the login partial

  ```html
  <div ng-controller="AuthController as auth">
    <form ng-submit="auth.login(userPass)">
      <div>
        <label for="email">email</label>
        <input type="text" ng-model="userPass.email">
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" ng-model="userPass.password">
      </div>
      <button type="submit">login</button>
    </form>
  </div>
  ```

6. create the auth.login method

  ```js
  function AuthController($http, $state, $scope, $rootScope) {
    var self = this;

    function signup(userPass) {
      $http.post('/users', userPass)
        .then(function(response) {
          $state.go('login');
        });
    }

    function login(userPass) {
      $http.post('/sessions/login', userPass)
        .then(function(response) {
          $state.go('gif');
      });
    }
  }
  ```

7. Now we want to store the logged in user not on the auth controller, Because we want ALL child scopes to have the current user.

  1. What is the most parent controller?

  2. How do we send things across controllers?

8. Add emit pubsub sender/receiver function to login and HomeController

  ```js
    $scope.$emit('userLoggedIn', response.data.data);
  ```


  ```js
  function HomeController($scope, $http) {
    var self = this;

    $scope.$on('userLoggedIn', function(event, data){
      self.currentUser = data;
    });
  }
  ```

9. Now that we have the currentUser stored on the HomeController let's see how we use it. I've implemented it for most of the functions but we're going to add it into one function that's not built yet, which is the save Gif function.

  ```html
  <button ng-click="giphy.saveGif(giphy.gifUrl, home.currentUser)">SAVE GIF</button>
  ```

  ```js
  function saveGif(url, currentUser) {
    console.log(currentUser)
    $http.post(`/users/${currentUser._id}/gifs`, { url: url, name: self.name } )
      .then(function(serverResponse) {
        self.savedGifs.push(serverResponse.data.gif);
        self.name = '';
        self.gifUrl = '';

        $state.go('savedGifs', { userId: currentUser._id })
      })
  }
  ```

10. Implement this pattern above on your own for `getSavedGifs` (30min)



## Finishing up auth!

1. Add this listener for logout on the homeController
  ```js
  $scope.$on('userLoggedOut', function(event, data) {
    self.currentUser = null;
    });
  ```
2. Add the logout function to the auth controller

  ```js
  function AuthController($http, $state, $scope, $rootScope) {
        var self = this;

        function logout() {
          $http.delete('/sessions')
            .then(function(response) {
              $scope.$emit('userLoggedOut');
                $state.go('index');
            });
        }

        this.logout = logout;
      }
  ```

3. Add ng-ifs to show and hide navs based on whether the user is logged in

  ```html
  <ul>
    <li ng-if="!home.currentUser" ui-sref="signup">signup</li>
    <li ng-if="!home.currentUser" ui-sref="login">login</li>
    <li ng-if="home.currentUser" ng-click="auth.logout()">logout</li>
  </ul>
  ```
  *AND add*

  ```html
    <div ng-if="home.currentUser">
  ```
  On the div containing the giphy nav bar

## Extra FUN THINGS

### Populate State?
  Add the following line to your login function:

  ```js
  $rootScope.$emit('fetchData', response.data.data);
  ```

  Which will trigger the following code in your Giphy Controller.
  ```js
  $rootScope.$on('fetchData', function(event, data) {
    populateInitialState(data)
  });

  function populateInitialState(currentUser) {
    $http.get(`users/${currentUser._id}/gifs`)
      .then(function(response) {
        self.savedGifs = response.data.gifs
      })
  }
  ```
  Do your remember what problem a variation on this pattern was solving on Friday?

### {mergeParams: true} in backend Router

Look at where the GifsController is required in server.js on line 29

  ```js
  app.use('/users/:id/gifs', gifsController)
  ```
We've defined the controller restfully so our router can start with the nice and simple `/` the problem with this configuration is `req.params` in the router won't have access to `:id` since it's defined in the server.

We can fix this easy peasy though by just adding `{mergeParams: true}` to our Router initialization at the top of the gifs.js controller file

```js
  var router = express.Router({mergeParams: true});
```
