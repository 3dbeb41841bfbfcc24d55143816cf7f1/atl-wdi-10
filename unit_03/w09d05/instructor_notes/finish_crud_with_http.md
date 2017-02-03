---
title: Finishing Up CRUD with UI Router
type: Lesson
duration: "1:25"
creator:
    name: Colin Hart
    city: WDIR-Matey
competencies: Front-end Frameworks
---

# Building our Giphy app with Angular and UI-Router

### Objectives

- Implement CRUD $http actions
- Manage states/templates with ui-router $state.go
- Pass url params using $state.go

### Preparation

- Build a basic Angular app
- Interact with an API

## Intro (5 mins)

For the rest of the day we're going to rebuild the giphy app from earlier in the week with Angular and ui-router


## Create a GiphyController

app.js
```js
angular.module('giphyAngularApp')
  .controller('GiphyController', GiphyController)

  function GiphyController($http) {
    var self = this;

  }
```

## Define and export CRUD functions

#### getGif

- 3rd party

app.js
```js
angular.module('giphyAngularApp')
  .controller('GiphyController', GiphyController)

  function GiphyController($http, $state, $scope, getSavedGifs) {
    var self = this;

    function getGif() {
      console.log('get gif')
    }

    self.getGif = getGif;
  }
```

#### saveGif
- post to our backend

app.js
```js
angular.module('giphyAngularApp')
  .controller('GiphyController', GiphyController)

  function GiphyController($http, $state, $scope, getSavedGifs) {
    var self = this;

    function getGif() {
      console.log('get gif')
    }

    function saveGif() {
      console.log('save gif')
    }

    self.getGif = getGif;
    self.saveGif = saveGif
  }
```

#### editGif
- put to our backend

app.js
```js
angular.module('giphyAngularApp')
  .controller('GiphyController', GiphyController)

  function GiphyController($http, $state, $scope, getSavedGifs) {
    var self = this;

    function getGif() {
      console.log('get gif')
    }

    function saveGif() {
      console.log('save gif')
    }

    function updateGif() {
      console.log('update gif')
    }

    self.getGif = getGif;
    self.saveGif = saveGif;
    self.updateGif = updateGif;
  }
```

#### getSavedGifs
- get to our backend index

app.js
```js
angular.module('giphyAngularApp')
  .controller('GiphyController', GiphyController)

  function GiphyController($http, $state, $scope, getSavedGifs) {
    var self = this;

    function getGif() {
      console.log('get gif')
    }

    function saveGif() {
      console.log('save gif')
    }

    function updateGif() {
      console.log('update gif')
    }

    function getSavedGifs() {
      console.log('get saved gifs')
    }

    self.getGif = getGif;
    self.saveGif = saveGif;
    self.updateGif = updateGif;
    self.getSavedGifs = getSavedGifs;
  }
```

#### deleteGif

app.js
```js
angular.module('giphyAngularApp')
  .controller('GiphyController', GiphyController)

  function GiphyController($http, $state, $scope, getSavedGifs) {
    var self = this;

    function getGif() {
      console.log('get gif')
    }

    function saveGif() {
      console.log('save gif')
    }

    function updateGif() {
      console.log('update gif')
    }

    function getSavedGifs() {
      console.log('get saved gifs')
    }

    function deleteGif() {
      console.log('delete gif')
    }

    self.getGif = getGif;
    self.saveGif = saveGif;
    self.updateGif = updateGif;
    self.getSavedGifs = getSavedGifs;
    self.deleteGif = deleteGif;
  }
```

## Implement getGif

1. Look at where the controllers are defined in `index.html`. HomeController on the Body, and GiphyController on the inner div. We won't be using the HomeController but have added it since it's a pattern you should be aware of. We can communicate between controllers using the standard JS scope logic seeing up but not down.

  `<div ng-controller="GiphyController as giphy">`

2. Add an ng-click directive on the get-gif button that calls the get-gif function in our controller

  `<button ng-click="giphy.getGif()" class="get-gif">GET GIF</button>`

  Test and make sure the controller is console.logging the string `'get gif'`

3. Add the http request to our getGif function

  We're going to save the response to a key value pair on the controller object. `self`

  ```js
  function getGif() {
      $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
        .then(function(giphyResponse) {
            console.log(giphyResponse)
        })
    }
  ```

  Let's examine that response. What's in it?

4. Save the data to the controller (aka: `this` aka: `self`)


  `self.gifUrl = giphyResponse.data.data.image_url;`

5. Create the partial

  So we've saved the data to the controller, but we don't have an actual view set up to display it.

  touch a partial called `gif.html`

  partial
  ```html
  <div class="image-container">
    <div>
    <input ng-model="giphy.name" placeholder="name your gif" type="text">
  </div>
    <img class="image-jumbotron" src="{{giphy.gifUrl}}" alt="">
  </div>
  ```
  We can access our stored gif by accessing the key set on the controller with that data. `{{giphy.gif}}`

  But what about giphy.name? We need to store that data on something else. Let's just bind it to the controller .

  `self.name = '';`

6. Set the state in the router

  ```js
  .state('gif', {
    url: '/gif',
    templateUrl: '/partials/gif.html'
  })
  ```

7. So how do we actually load that state??

  We could set an sref on the button but we actually have another method.

  - Inject `$state` into our controller

  - add this line in your .then `$state.go('gif');`

  ```js
  function getGif() {
      $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
        .then(function(giphyResponse) {
          self.gifUrl = giphyResponse.data.data.image_url;

          $state.go('gif');
        })
    }
  ```

## implement saveGif

We're going to repeat a variation of those above steps a lot today.

1. Add an ng-click on the save gif button that calls `giphy.saveGif()`

  test that it console.logs what we expect


3. Implement $http post method to send the url and name to the backend.

  Remember the name and url are coming from two different places. The url is being passes as an argument, and the name is bound to the controller as a property `gifUrl`

  ```js
  function saveGif(url) {
    $http.post('/gifs', { url: self.gifUrl, name: self.gifName} )
      .then(function(giphyResponse) {
        console.log(giphyResponse)
      })
  }
  ```

4. Patterns for managing state

  Take a couple minutes to read the router.post method in our backend controller.

  Notice how it returns the gif that we just created.

  Why do you think we need to do that?

5. Updated savedGifs with the updated state!


  We'll just push that new gif onto our array of gifs
  ```js
  self.savedGifs.push(giphyResponse.data.data);

  $state.go('savedGifs')
  ```

## implement getSavedGifs


```js

function getSavedGifs() {
  $http.get('/gifs')
    .then(function(response) {
      self.savedGifs = response.data.gifs

      $state.go('savedGifs')
    })
}
```

```html
<button ui-sref="savedGifs" ng-click="giphy.getSavedGifs()" class="saved-gifs">See Saved Gifs</button>
```
partial
```html
<div class="all-gifs-container">
  <div ng-repeat="gif in giphy.savedGifs">
    <div>
      <h4>{{gif.name}}</h4>
      <img src="{{gif.url}}" alt=""></img>
    </div>
  </div>
</div>
```
```js
.state('savedGifs', {
  url: '/saved-gifs',
  templateUrl: '/partials/saved_gifs.html'
})
```
## implement deleteGif

1. Add the code below, to the deleteGif function.
  ```js
  function deleteGif(id) {
    $http.delete(`/gifs/${id}`)
      .then(function(response) {
        self.savedGifs.pop($filter('filter')(self.savedGifs, {_id: id}))
      })
  }
  ```

2. Fancy filter method
  Inject `$filter` into the GiphyController

  This built in filter method will take an array of objects and the thing you want filter on. So we can find an individual object in our array.

  `$filter('filter')(self.savedGifs, {_id: id})`

  We'll then just pop it out of the array to update our state


3. add the click event to the saved_gifs partial
  ```js
  <button ng-click="giphy.deleteGif(gif._id)">Delete</button>
  ```
to the show all gifs partial

## implement update gif

Let's ponder the action we're going to build for this.
  - we need an edit form to appear
  - that edit form should be populated with the gif data so we know what we're editing
  - the edit form should trigger the $http request to put the data

1. Add a click event to the edit button

  It's going to call a function we haven't built yet called populateFormData and will take the whole gif object as an argument

  `<button ng-click="giphy.populateFormData(gif)">Edit</button>`

2. Build and export that function on the controller, and then console.log the gif argument. We always want to test, so let's make sure we're passing the gif object correctly.

3. So let's consider what this populateFormData function needs to do.

  ```js
  function populateFormData(gif) {
    self.url = gif.url
    self.name = gif.name

    $state.go('updateGif', { gifId: gif._id })
   }
  ```

4. $stateParams

  This is more super cool ui-router stuff. We can actually pass data to the router by passing an object.

  router.js
  ```js
  .state('updateGif', {
    url: '/update-gif/:gifId',
    templateUrl: '/partials/update_gif.html'
  })
  ```

  In passing `{ gifId: gif._id }` as a second argument to $state.go it's going to find a param that matches. In this case the :gifId dynamic segment.

  Why would we do this?

  Well, for one it follows our restful routing conventions which is nice.

  Two, it's one less piece we need to keep track of in the dom. I'm sure all of you have been bending your brains trying to keep track of what gets stored in the DOM, what gets saved on the controller etc. etc. By putting the id in the url we can just pull it straight from there using `$stateParams`

5. Build the partial in `update_gif.html`

```html
<div>
  <form ng-submit="giphy.updateGif()">
    <div>
      <label for="name">name</label>
      <input ng-model="giphy.name" name="name" type="text">
    </div>
    <div>
      <label for="url">url</label>
      <input ng-model="giphy.url" name="url" type="text">
    </div>

    <button type="submit"> Update Gif</button>
  </form>
</div>
```

6. Inject $stateParams into the controller

  We can use `$stateParams` to access parameters passed to the router. `$stateParams.gifId`

  Then we can access name and url from where they're defined on the controller on self.

  ```js
  function updateGif() {
    $http.put(`/gifs/${$stateParams.gifId}`, { name: self.name, url: self.url } )
      .then(function(giphyResponse) {
        self.savedGifs = giphyResponse.data.gifs;

        self.url = '';
        self.name = '';

        $state.go('savedGifs')
      })
  }
  ```
