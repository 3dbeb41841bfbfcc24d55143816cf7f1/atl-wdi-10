# SPA with Angular

![image](https://media.giphy.com/media/jKcZoEyfReNYQ/giphy.gif)

In this assignment, you'll have a chance to work with a Single Page App (SPA) that uses 3 states using ui-router: a home page, a Ron Swanson quote generator, and a Netflix movie poster generator. You will be making calls to 2 external APIs, along with our own back-end.



## Exercise Objectives
- gain meaningful experience with `ui-router` with multiple states on a single page app
- gain more practice making `$http` calls to 3rd party APIs and our back-end
- gain more practice setting up Angular apps with 2 controllers and directives like `ng-repeat`, `ng-click`, `ng-if`, `ng-model`
- gain more practice with CRUD and Angular

## Setup

- cd into the `atl-wdi-10/homework/unit_03/angular/ron-swanson/angular-ui-router` folder,  run `npm install` to install and save all of the app's dependencies.

#### To add on what you did yesterday
- I have run `npm install --save-dev webpack`
- I have run `npm install --save glob`
    - this will easily grab all of the files within a folder
- I have run `npm install --save-dev html-loader`
    - this will allow you require your component html files
- I have run `npm install --save angular`
    - now we don't have to add that script to the index.html page
    - remember that when you do this, you have to require angular (just like in our express apps), in our app.js (which I have done for you)
- I have run `npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-es2015`
    - now we can use ES2015 in our app and babel will transpile it for us
- I have run `npm install angular-ui-router --save`
    - now we don't have to add the script to the index.html page

**You should be able to see all of these npm packages in your package.json after you run npm install**

Here is the [gist](https://gist.github.com/dphurley/f94813ab20e7baf8b325867a6f1179f1) for setting up webpack if you would like to reference it

- Use `npm start` to run nodemon
    - I have added the nodemon.json for you, so that nodemon doesn't restart when we make client-side changes
- Run `npm run build` to build out your webpack
- In another tab run `npm run build:dev` which will have webpack watch for changes on the client-side

<br />

## Your app is set up for you!!!

You will be writing your code in:

### Server-side Routes

- `/server/routes/quotes.js`  
    - This is where you will write your CRUD routes for the quotes state 
- `/server/routes/netflix.js`  
    - This is where you will write your CRUD routes for the Netflix and quotes state- with express + ajax

### Front-end Scripts 
- `/client` folder
    - Set up your components and ui-router here. 

#### For Your Home page
- `/client/components/home.component.js` 
- `/client/components/home.html`
    - Set up your home.html state here

#### For Swanson Quotes
- `/client/components/quotes.component.js` 
- `/client/components/quotes.controller.js`
    - Set up your Angular controller here for the quotes state 
- `/client/components/quotes.html`
    - Set up your quotes.html state here

#### For Netflix
- `/client/components/netflix.component.js` 
- `/client/components/netflix.controller.js` 
    - Set up your ui-router here 
- `/client/components/netflix.html` 
    - Set up your netflix.html state here

### Front-end Views
- `index.html`
    - This is where you will bootstrap Angular to the app. All views will render within `<ui-view></ui-view>`

<!-- `partials/home.html` -->
- `<home></home>`
    - This is your home page view.

<!-- `partials/quotes.html` -->
- `<quotes></quotes>`
    - This is your Quotes view.

<!-- `partials/netflix.html` -->
- `<netflix></netflix>`
    - This is your Netflix page view.

<br />

## Directions

1. Set up your app with Angular. Add `ng-app="myApp"` to the `<html>` tag `index.html`.

2. Set up your router for the following states: `home`, `quotes`, `netflix` using the information provided above.

3. Follow the specs for each of the following states and build the **component** with the **js** and **view** for each of them.

### State 1: The Home Page

- When the page loads `localhost:3000/` the view simply renders: "This is the homepage!" In the navbar, clicking on the `Home` tab will also show this view. There is no controller associated with this view, however, it is a best practice to always add one, and add an activate function, even if it is empty.
- :dart: Make sure to Commit Often!

### State 2: Ron Swanson Quote of the Day

- In the navbar, clicking on the `Quotes` tab will render the Quotes partial.
- In the navbar, clicking on the `Get Swansonized` button will make an $http call to http://ron-swanson-quotes.herokuapp.com/v2/quotes . The quote in the response will show in the page where the bullet point is. Each time you click, a new quote will render.
- Once a quote is generated, a button `Save Me!` will also render on the page.
- Clicking on the `Save Me!` button will save the quote to your local database. (Check out the quote Schema)
- Clicking on the `<h3>See All my saved quotes</h3>` will show a list of all our saved quotes.
- This list of quotes will also have a form to edit each quote with an `Edit` button.
- Clicking on the Edit button will update the quote in the database and on the page.
- This list of quotes will also have a `<p>Delete Quote</p>`. When clicked, the quote is removed from the local database and removed from the page.
- :dart: Commit often!

### State 3: Netflix Movie Poster

- Clicking on the `Netflix` tab will render the Netflix partial.
- Clicking on the `Gimme the Poster!` button will make an `$http` call to http://netflixroulette.net/. Check out [their API docs](http://netflixroulette.net/api/) to see how to query for a movie using a movie title.
- When a response returns, show the movie title + poster image in the page underneath the search bar. Each time you query, a new response will render.
- Once a poster is generated, a button `Save Me!` will also render on the page.
- Clicking on the `Save Me!` button will save the movie title and movie poster url to your local database. (Check out the netflix Schema)
- Clicking on the `<h3>See All my saved movies</h3>` will show a list of all our saved Netflix movies.
- Each movie will also have a `<p>Delete Movie</p>`. When clicked, the quote is removed from the local database and removed from the page.
- :dart: Commit often!

<!-- ### Reach Goals

- Add a 4th state with a 3rd party API of your choice! -->

<br />

## How to succeed

Work together, help each other, and also use the debugging slack channel.

You can use the criminals app as your guide: https://github.com/ATL-WDI-Curriculum/atl-wdi-10/tree/master/angular_lessons/labs/criminals-ui-router-starter

## :bug: Bug Report

You will come across a ton of bugs and error messages. Don't forget to submit a bug report through Github Issues.    

## Submitting Your Work

  When you're ready to submit your work,

  1.  Add, commit, and push your code to your fork of the class repo.
  2.  Add your submission to schoology.

  The submission should include:

  -   A link that points back to your fork.

  -   A 'comfort' score on how you feel about the material, from 1 (very
      uncomfortable) to 5 (very comfortable)
