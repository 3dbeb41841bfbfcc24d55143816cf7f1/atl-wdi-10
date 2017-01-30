# MegaMovie App

![image](https://media.giphy.com/media/WoYwgrfZP4yw8/giphy.gif)

You will create a single-page, full CRUD MEN movies app, featuring client-side rendering with jQuery! We will use [OMDb Api](http://www.omdbapi.com), where you can search and save any movie from their mega list of movies.

## Exercise Objectives

- gain practice making third-party API calls to [OMDB Api](http://www.omdbapi.com)
- gain practice with jQuery AJAX calls to our own server
- dynamically manipulation the DOM using jQuery

## Setup

- In the `movies_ajax_app` folder,  run `npm install` to save all dependencies.

- Your app is set up for you. You will only be writing in `controllers/movies.js` and `public/scripts/app.js` and will not be modifying the other files.


## Directions

You will write your front-end jQuery scripts in `public/scripts/app.js` and your back-end routes for in `controllers/movies.js`. Your html is already provided for you in `index.html`, where you will use jQuery to manipulate the DOM.

#### App features:

- Search a movie by title using [OMDb Api](http://www.omdbapi.com) using . If a movie exists, display the movie title, poster, year, and description. Also, add a button named "Save Movie".

<details><summary>Hint..</summary>
This will be your only AJAX call to OMDb's API. The calls below will be querying our local database.
</details>

- Clicking on the "Save Movie" button will save the movie title, poster, year, and description to our local database AND display them dynamically in the div labeled `movie-container`. Each movie displayed will also have an "Edit" and "Delete" button.

- Clicking on the Edit button will hide all HTML elements and just show the edit form (which is hidden when the page initially loads).

- Clicking on the "Update me!" button will update our movie in the local database and show all our movies again with the updated movie.

- Clicking on the "Delete" button will delete the movie from the database.



#### Reach Goals
- Add an extra property to the `Movie` schema: `rating`. Make it so that the user can enter in a number rating between 1 - 10 when the movie is updated.

- When displaying movies, sort by: Year, title, and rating.


## Submitting Your Work

  When you're ready to submit your work,

  1.  Add, commit, and push your code to your fork of the class repo.
  2.  File an issue on the class repo titled "Your Name -- wXXdXX".

  The issue should include:

  -   A link that points back to your fork.

  -   A 'comfort' score on how you feel about the material, from 1 (very
      uncomfortable) to 5 (very comfortable)
