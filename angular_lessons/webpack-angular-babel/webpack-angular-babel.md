# Webpack, Angular, and Babel

--- 

## Lesson Objectives:
#### In this lesson, we will learn to...
- Use Webpack to require JavaScript dependencies in our client-side code
- Use Webpack to bundle our JavaScript into a single file
- Use `webpack --watch` along with `nodemon` to automatically compile our assets during development
- Use loaders to add additional features to Webpack
- Use the Babel loader to write ES2015 JavaScript for any browser
- Use Webpack with Angular to create a new Controller

---
---
---
npm installs and webpack config sample for reference:

// npm i -D babel-core babel-loader babel-preset-env webpack
require('webpack');
module.exports = {
    context: __dirname,
    entry: {
        scripts: __dirname + '/client/javascripts/scripts.js',
        app: __dirname + '/client/app.js'
    },
    output: {
        path: __dirname + '/public/javascripts',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};

---
---
---

## Why Webpack?

- talk about DRY - we want modular code, but even then we end up with big files
- so we split into more files
- talk about large files
- talk about many import statements
- talk about how we solve this on the back-end
- wouldn't it be great if we could use that same require syntax on the front-end?
- enter Webpack

---

## Getting started:

- We've created a sample Express / Angular app called `movies`

- Inside the app, we should see a basic Angular app containing a `MoviesController`. This 
`MoviesController` displays a basic list of movies.

- From the `movies` folder, run `npm install`

- Now let's start up our server with `npm start` and verify that everything is working. When we 
visit `localhost:4000` in our browser, we should see a list of movie titles along with the 
year each movie was released.

--- 

## Now let's add some Reviews to our movies:

- Now we want to display some `Reviews` along with each movie.

- Let's create a new file in our `controllers` folder called `reviewsController.js`:

    `$ touch public/js/controllers/reviewsController.js`

- Great! Now let's build out the controller like this:

    ```javascript
    angular
        .module('moviesApp')
        .controller('ReviewsController', ReviewsController);
    
    function ReviewsController() {
        this.reviewList = [
            {content: 'It was good.'},
            {content: 'Meh.'},
            {content: 'Did not like it.'},
        ]
    }
    ```
    
- ...and we'll want to show the Reviews now in our `index.html`:

    ```
    <!DOCTYPE html>
    <html ng-app="moviesApp">
    <head>
        <meta charset="utf-8">
        <title>Movies</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>
        <script src="js/app.js"></script>
        <script src="js/controllers/moviesController.js"></script>
    </head>
    <body>
    
    <div ng-controller="MoviesController as movies">
        <h1>Movies:</h1>
        <div ng-repeat="movie in movies.movieList">
            <h3>Title: {{movie.title}}</h3>
            <h3>Year: {{movie.year}}</h3>
            <div ng-controller="ReviewsController as reviews">
                <h3>Reviews:</h3>
                <ul>
                    <li ng-repeat="review in reviews.reviewList">{{review.content}}</li>
                </ul>
            </div>
            <br>
        </div>
    </div>
    
    </body>
    </html>
    ```
    
- Let's refresh the page..........

- Our reviews aren't showing up! We forgot to add the new controller to our `<script>` tags!

- Let's add the new `<script>` tag:

    ```html
    <script src="js/controllers/reviewsController.js"></script>
    ```

- When we refresh the page, everything should be working fine. Isn't it unfortunate though that 
to add a new `controller`, we'll have to add a new `<script>` tag to our already-cluttered HTML file? 
Right now we only have two controllers, so it doesn't look so bad. What if we added another one though? 
10 more? What if we had 50 of them?
- That doesn't sound fun. Wouldn't it be much better if we could just require all of 
our Javascript once?

## Enter Webpack!

- Let's use Webpack to wrap up all of our JavaScript in one nice, easy to import file!
- First, we'll have to install it. Fortunately there's a nice, neat `npm` package already made for us.
Let's install it into our `development` tools, since we won't need to run in in a browser:

    `$ npm install --save-dev webpack`
    
- We'll need to install one more helper tool as well. `Glob` will let us easily grab all of the files 
in a folder. We'll see why this is useful in just a moment: 

    `$ npm install --save glob`

- Now let's configure our Webpack environment with a `webpack.config.js`. First, let's create it 
in our `movies` directory:

    `$ touch webpack.config.js`
    
- Great! Now let's load our `webpack.config.js` up with some default options:

    ```javascript
    require('webpack');
    var glob = require('glob');
    
    module.exports = {
        context: __dirname,
        entry: {
            app: glob.sync(__dirname + '/public/js/**/*.js')
        },
        output: {
            path: __dirname + '/public/js',
            filename: '[name].bundle.js'
        }
    };
    ```
    
- We'll break this down in just a second, but first let's run it and see what it does:

    `$ webpack`

- Let's look in our `public/js` folder. There is now a file called `app.bundle.js`. 
When we open the file, we see that it contains all of the code we've written 
in our `app.js`, `/controllers/moviesController.js`, and `/controllers/reviewsController.js` files! 
That's all of our JavaScript, now included in a single file.

- If we change our `index.html` to now include only one script, our `app.bundle.js` file, we will 
now see that all of our JavaScript is available to the page using only one `<script>` tag. 

    ```html
    <script src="js/app.bundle.js"></script>
    ```

- What do we think would happen now if we were to add a new `Controller` and then run `webpack` again?

## Breaking down the config file...

- Let's take another look at our `webpack.config.js`:

    ```javascript
    require('webpack');
        var glob = require('glob');
        
        module.exports = {
            context: __dirname,
            entry: {
                app: glob.sync(__dirname + '/public/js/**/*.js')
            },
            output: {
                path: __dirname + '/public/js',
                filename: '[name].bundle.js'
            }
        };
    ```
    
- There are two important pieces we'll want to talk about with a basic webpack config such at this.

    1. `entry` - The `entry` object tells Webpack where our JavaScript is located. In this case, 
    we are using the `glob` tool to tell Webpack "include all of the `.js` files you find in 
    the `public/js` folder, or any of its subdirectories." In other words, as long as we put all of 
    our future JavaScript inside of the `public/js` directory, Webpack will bundle all of it up. We 
    are giving this path the name `app`, which will be used by the `output` object that follows.
    
    2. `output` - The `output` object tells Webpack where we want to put our bundled JavaScript. In 
    this case, we are telling Webpack to use the name we provided in the `entry` element ('app') to 
    build a new file called `app.bundle.js`. Had we called our `app` path in the `entry` object 
    `banana` instead, this would create a new file for us named `banana.bundle.js`. This is just 
    one small example of how flexible and powerful Webpack can be.
    
- refactor app to require controllers in app.js

## Let's try out a new file structure...

If we look closely at our shiny new Webpack set-up, we have one glaring problem: Our newly 
bundled `app.bundle.js` file lives inside our `public/js` directory along with all of our 
other JavaScript. We need it to be there so we send it to the browser with all of our HTML, but 
if we were to run `webpack` again, it will now be detected along with all of our other JavaScript 
and bundled up again. Our nice, clean bundle file would get larger and larger with each pass 
through Webpack and it would include hundreds of lines of duplicated code!

Because we want our bundled JavaScript to live next to our `index.html`, it looks like we'll 
have to move the rest of our code out of the `public` directory. Let's try out a new folder 
structure, and see if it simplifies things for us:

- Create two new directories called `server` and `client` in your `movies` folder:

    `$ mkdir server`
    
    `$ mkdir client`

- Let's move our `app.js` and `controllers` files out of the `public/js` directory and into our shiny, 
new `client` directory. We should end up with a structure that looks like this: 

    ```text
    movies
      server.js
      __client
          app.js
          __controllers
              moviesController.js
              reviewsController.js
      __server
      __public
          __js
              app.bundle.js
    ```
    
    - `$ mv public/js/app.js client`
    - `$ mv public/js/controllers client -r`

- If we had any `routes` available, or any back-end code, we could also move those files 
 into the `server` folder to give us a nice, clear separation between our server-side and 
 client-side code. 
 
- Now let's update our `webpack.config.js` to look in our `client` folder for new JavaScript:

    ```javascript
    require('webpack');
    var glob = require('glob');
    
    module.exports = {
        context: __dirname,
        entry: {
            app: glob.sync(__dirname + '/client/**/*.js')
        },
        output: {
            path: __dirname + '/public/js',
            filename: '[name].bundle.js'
        }
    };
    ```
    
- When we run `webpack` again, we should see our `app.bundle.js` file only includes the code
 in our `client` folder. Problem solved.
 
## Using `require` in our client-side code!

- Now that we have Webpack, we can use the same `require()` statements we've come to love 
in our server-side code on the front-end!

- Let's try it out by removing Angular from our `<script>` tags! Take a look at our `index.html`:

    ```html
    <!DOCTYPE html>
    <html ng-app="moviesApp">
    <head>
        <meta charset="utf-8">
        <title>Movies</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>
        <script src="js/app.bundle.js"></script>
    </head>
    <body>
    
    <div ng-controller="MoviesController as movies">
        <h1>Movies:</h1>
        <div ng-repeat="movie in movies.movieList">
            <h3>Title: {{movie.title}}</h3>
            <h3>Year: {{movie.year}}</h3>
            <div ng-controller="ReviewsController as reviews">
                <h3>Reviews:</h3>
                <ul>
                    <li ng-repeat="review in reviews.reviewList">{{review.content}}</li>
                </ul>
    
            </div>
            <br>
        </div>
    </div>
    
    </body>
    </html>
    ```
    
- We are pulling Angular into our app form a CDN in the first `<script>` tag. This works fine 
for now, but what happens when we want to upgrade Angular to a newer version? `npm upgrade` 
works great for our server-side dependencies, wouldn't it be nice if we could just do the same 
on the front-end?

- We can! With Webpack, we can require `npm` packages into our code, and they will be bundled 
automatically just like our own JavaScript.

- Let's use npm to install the Angular package:

    `$ npm install --save angular`

- ...and now we can use `require()` to include Angular in our `app.js`!

    ```javascript
    const angular = require('angular');
    
    angular.module('moviesApp', []);
    ```

- Let's delete the Angular `<script>` tag from our `index.html`.

- Now if we run `webpack` again and start our server, everything should be working as before!

## Using Webpack in our development workflow:

- Webpack is great! We can clean up our `<script>` tags significantly and pull `npm` packages 
directly into our front-end code! But now every time we want to see a change in our 
front-end javascript, we have to run `webpack` first. On the server-side we have `nodemon` to 
refresh our server automatically. Wouldn't it be great if Webpack could do the same thing for
our front-end changes?

- Enter `webpack --watch`! If we run Webpack with the `--watch` flag, it will now automatically 
bundle up our front-end JavaScript for the next time we refresh the page. This makes for a much 
more efficient development workflow, but there are a few caveats we'll need to consider.

    - Right now, 

- Update controller to add some data
- Did the data update on the page?
- No, because we have to re-compile our assets
- Enter webpack --watch
- Show controller updates
- Do we want to reload if server side code changes? Do we want nodemon to reload if client-side code changes?
- No, let's refactor into client and server directories
- Add ignores to Webpack and Nodemon configs (ignore public dir in both)
- We have a workflow! (maybe talk about iTerm)
- Gitignore public dir?


## Using ES6 safely with Babel:
- We have lets and consts and all of this ES6 stuff
- We already know this isn't compatible with browsers, but wouldn't it be nice if we could use it anyways
- Enter Babel - show transpiled code in browser
- npm install babel stuff
- add loader to webpack config
- now we can safely write ES6 js