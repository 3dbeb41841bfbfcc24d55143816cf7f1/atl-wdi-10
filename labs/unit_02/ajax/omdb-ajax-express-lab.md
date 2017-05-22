# Netflix Lab

### Let's build a new Express app!

### API string for searching: http://www.omdbapi.com/?apikey=d31f1a94&s=starwars

##### Remember to include a few things:

- Remember to require Express in every file that needs it!
- We will need to use Handlebars as our View Engine.
- Remember to build controller for each of your resources.
- Remember to include and configure `method-override`
- Remember to include and configure `body-parser`
- Remember to wire up your static assets through a `public` folder.
- Listen on port 3000.

##### Build a Movie Search Page 


- The user should be able to type a movie search query into a box, and then see that movie's information displayed in a `<div>` below the box. We should display the movies' `title`, `year`	. 
- BONUS: Display the movie's `poster`.

##### Add a Favorites Option to your Site

- When I have searched for a movie (or a group of movies), I should be able to click a `Favorite` button on each movie, and save it to my "database". 
- If I click a `Favorites` link at the top of my page, I should be able to view the list of movies I have "favorited."
	- Inside the `Favorites` page, I should be able to click on any movie I've favorited, and see its information.
	- I should be able to click a `Delete` button on any movie I have favorited, and it should be removed from my favorites.
	- I should be able to click `Comment` on any of my movies, and I should be able to add comments to it.