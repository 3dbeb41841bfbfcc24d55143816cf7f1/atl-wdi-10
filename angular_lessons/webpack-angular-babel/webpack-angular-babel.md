# Webpack, Angular, and Babel

--- 

## Lesson Objectives:
#### In this lesson, we will learn to...
- Use Webpack to bundle our JavaScript into a single file
- Use Webpack to require `npm` packages in our client-side code
- Use `webpack --watch` along with `nodemon` to automatically compile our assets during development
- Use loaders to add additional features to Webpack
- Use the Babel loader to write ES2015 JavaScript for any browser

## Why Webpack?

We've learned a lot about client and server-side code at this point! We're full-stack 
developers, and that means we'll have to deal with both worlds, equally. Even though 
Node allows us to use JavaScript as our main language on both sides of the fence, 
there are still some key differences between our front-end and back-end workflows 
and the tools available to us. Wouldn't it be great if we could make our Angular 
workflow on the front-end feel as smooth and powerful as our `npm`-powered 
back-end workflow?

This is just one of the many problems Webpack can solve for us. In today's lesson we 
are going to take a couple of steps closer to having a single, unified development 
workflow across the entire stack of an application!

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
more efficient development workflow, but there are is an important caveat we'll need to consider...

- Right now, when any code in our application changes, `nodemon` refreshes our server. This is 
great when we are making server-side changes, but we don't want it to happen when we update 
client-side changes. So let's add a little bit more configuration, this time for `nodemon`.

- First, let's make a `nodemon.json` file in our `movies` directory:

    `$ touch nodemon.json`
    
- Now, let's tell `nodemon` to ignore our `client` and `public` directories:

    ```json
    {
      "ignore": [
        "./public/*/*.js",
        "./client/*/*.js"
      ]
    }
    ```
    
- And there we go! Now we can have `nodemon` running in one terminal session while `webpack 
--watch` runs in another! All of our front-end code will auto-reload for us during development.

## Using ES2015 safely with Babel:

- One final thing... Let's take a look at our `client/app.js`:

    ```javascript
    const angular = require('angular');
    
    angular.module('moviesApp', []);
    ```
    
- We are defining `angular` as a `const`, instead of a `var`. This is certainly a good 
practice, but it will not run safely in all browsers because this is a feature of ES2015!

- Enter Babel! Babel is a _transpiler_ that automatically re-writes your ES2015 JavaScript 
into a browser-safe version of itself. There are several ways to use Babel, but for us 
the easiest will be with a **Webpack loader**. Webpack loaders are essentially plugins 
for Webpack that allow us to drop in special functionality to our _pipeline_. 

- Let's add the `babel loader` to our `webpack.config.js`!

- First, we'll have to install the `babel-loader` and its' dependencies:

    `$ npm install --save-dev babel-core babel-loader babel-preset-env`

- Now we'll add the `babel-loader` to our `webpack.config.js` as a **module**:

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
    ```
    
- With this loader in place, all of our ES2015 JavaScript will run safely across 
browsers! It's like magic!

# Going Forward, you can use this gist to set up your Webpack config: https://gist.github.com/dphurley/f94813ab20e7baf8b325867a6f1179f1

