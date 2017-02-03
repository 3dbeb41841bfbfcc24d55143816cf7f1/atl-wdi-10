# SPA with Angular

![image](https://media.giphy.com/media/jKcZoEyfReNYQ/giphy.gif)

In this weekend assignment, you'll have a chance to work with a Single Page App (SPA) that uses 3 states using ui-router: a home page, a Ron Swanson quote generator, and a Netflix movie poster generator. You'll be making calls to 2 external APIs, along with our own back-end.



## Exercise Objectives
- gain meaningful experience with `ui-router` with multiple states on a single page app
- gain more practice making `$http` calls to 3rd party APIs and our back-end
- gain more practice setting up Angular apps with 2 controllers and directives like `ng-repeat`, `ng-click`, `ng-if`, `ng-model`
- gain more practice with CRUD and Angular

## Setup

- In the `angular-ui-router` folder,  run `npm install` to install and save all of the app's dependencies.

- Your app is set up for you. You will be writing your code in:

|   |Filename |   Content|  
|---|---|---|---|---|
|  **Server-side Controllers** | `controllers/quotes.js`  |  This is where you will write your CRUD routes for the quotes state |   
|   | `controllers/netflix.js`  |  This is where you will write your CRUD routes for the Netflix state  |  
|  **Front-end Scripts** |  `public/js/router.js` |  Set up your ui-router here. |
|  |  `public/js/quotesController.js` |  Set up your Angular controller here for the quotes state |   
|  |  `public/js/netflixController.js`|  Set up your ui-router here. |   
|    **Front-end Views**|  `index.html` |  This is where you will bootstrap Angular to the app. All views will render within `<ui-view></ui-view>` |
|  |  `partials/home.html`|  This is your home page view. |  
|  |  `partials/quotes.html`|  This is your Quotes view. |   
|  |  `partials/netflix.html`|  This is your Netflix page view. |    

## Directions

1. Set up your app with Angular. Add `ng-app="myApp"` to the `<html>` tag `index.html`.

2. Set up your router for the following states: `home`, `quotes`, `netflix` using the information provided above.

3. Follow the specs for each of the following states and build the **controller** and **view** for each of them:

### State 1: The Home Page

- When the page loads `localhost:3000/` the view simply renders "This is the homepage!" Clicking on the `Home` tab will also show this view. There is no controller associated with this view.
- :dart: Commit often!

### State 2: Ron Swanson Quote of the Day

- Clicking on the `Quotes` tab will render the Quotes partial.
- Clicking on the `Get Swansonized` button will make an $http call to http://ron-swanson-quotes.herokuapp.com/v2/quotes . The quote in the response will show in the page where the bullet point is. Each time you click, a new quote will render.
- Once a quote is generated, a button `Save Me!` will also render on the page.
- Clicking on the `Save Me!` button will save the quote to your local database. (Check out the quote Schema)
- Clicking on the `<h3>See All my saved quotes</h3>` will show a list of all our saved quotes.
- This list of quotes will also have a form to edit each quote with an `Edit` button.
- Clicking on the Edit button will update the quote in the database and on the page.
- This list of quotes will also have a `<p>Delete Quote</p>`. When clicked, the quote is removed from the local database and removed from the page.
- :dart: Commit often!

### State 3: Netflix Movie Poster

- Clicking on the `Netflix` tab will render the Quotes partial.
- Clicking on the `Gimme the Poster!` button will make an `$http` call to http://netflixroulette.net/. Check out [their API docs](http://netflixroulette.net/api/) to see how to query for a movie using a movie title.
- When a response returns, show the movie title + poster image in the page underneath the search bar. Each time you query, a new response will render.
- Once a poster is generated, a button `Save Me!` will also render on the page.
- Clicking on the `Save Me!` button will save the movie title and movie poster url to your local database. (Check out the netflix Schema)
- Clicking on the `<h3>See All my saved movies</h3>` will show a list of all our saved Netflix movies.
- Each movie will also have a `<p>Delete Movie</p>`. When clicked, the quote is removed from the local database and removed from the page.
- :dart: Commit often!

### Reach Goals

- Add a 4th state with a 3rd party API of your choice!

## Submitting Your Work

  When you're ready to submit your work,

  1.  Add, commit, and push your code to your fork of the class repo.
  2.  File an issue on the class repo titled "Your Name -- wXXdXX".

  The issue should include:

  -   A link that points back to your fork.

  -   A 'comfort' score on how you feel about the material, from 1 (very
      uncomfortable) to 5 (very comfortable)
