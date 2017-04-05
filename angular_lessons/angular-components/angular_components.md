# Angular Components

## Lesson Objectives:
- Describe Web Components
- Explain how Web Components can DRY up our front-end code
- Use Angular to build reusable components

## Why Components?

We've learned a lot about writing clean, modular Angular code at 
this point. Each step we've taken so far has allowed us to DRY 
up our application and (ideally) delete some unused code without 
losing any functionality. Let's explore a new and extremely useful 
feature of Angular 1.5+ that lets us go to even further extremes, 
now that we are powered by Webpack: **Angular Components**.

## What are web components?

Web components are small, simple, re-usable chunks of code that we 
can re-use all over our applications. These re-usable chunks of code 
include both JavaScript and HTML, and allow us to pass functionality, 
along with views, around our application dynamically. Every modern 
front-end framework provides some mechanism for building these components, 
and several smaller tools exist just to accomplish this one thing. 
Today, we'll explore Angular's implementation and discuss some of 
of the benefits we receive.

## Let's clean up our Movies app!

- If we look in the `movies` directory we should see a completed 
version of our Webpack lab.
- The code seems to be working great, and Webpack has certainly cleaned up 
our workflow, but the `index.html` is looking a little cluttered. 
If we were to add one or two more controllers, it might become 
unmanageable.
- Let's explore a way to clean up our HTML files and make the code we 
write even more re-usable: **Angular components!**

## First, let's refactor our Reviews into a component (Codealong):

- We'll want to explore a new file structure as we do this. Let's create 
a new folder in our `client/js` folder and call it `reviews`.

    `$ mkdir client/js/reviews`

- Inside of this folder, we'll then want to create some new files:  
`reviews.component.js`, `reviews.controller.js`, and `reviews.html`

    ```
    $ touch client/js/reviews/reviews.component.js
        
    $ touch client/js/reviews/reviews.controller.js
    
    $ touch client/js/reviews/reviews.html
    ```
    
- We already have the information for two of these files! Let's copy 
the contents of our already-existing `controllers/reviewsController.js` 
file into our new `client/js/reviews/reviews.controller.js`.

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
    
- Great, now let's copy the `Reviews` HTML from our `index.html` file:

    ```html
    <div ng-controller="ReviewsController as reviews">
        <h3>Reviews:</h3>
        <ul>
            <li ng-repeat="review in reviews.reviewList">{{review.content}}</li>
        </ul>
    </div>
    ```

- These will be the two main pieces of a **component**: a 
_controller_ and a _view_.

- Now let's define the component itself!

- In `components/reviews.component.js`, let's enter this code. We'll 
break down what's going here in just a second...

    ```javascript
    let reviewsTemplate = require(__dirname + '/reviews.html');
    let reviewsController = require(__dirname + '/reviews.controller.js');
    
    let ReviewsComponent = {
        template: reviewsTemplate,
        controller: reviewsController
    };
    
    angular.module('moviesApp').component('reviews', ReviewsComponent);
    ```

- Let's break this down! 

- First, we will need to `require()` our template and controller. If we 
think back to our Node back-end code, this means we will have to **export** 
any JavaScript that we want to exclude elsewhere. Let's see what this will 
look like in our `reviews.controller.js` file:

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
    
    module.exports = ReviewsController;

    ```
    
- Pretty simple! We just have to export the `ReviewsController` function 
once we have finished defining it.

- Now, to include our HTML, we'll need to add a new loader to our Webpack 
configuration, the `html-loader`:

    `$ npm install --save-dev html-loader`
    
- ...and let's update our Webpack config to use this loader when requiring 
any **html** files:

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
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                }
            ]
        }
    };
    ```
    
- With this loader available to us, we can directly require HTML files!

- If we look back to our `reviews.component.js`, the only step that 
follows once we have required the **controller* and **view** is to 
register our `.component()` just like any other Angular module!

- We just moved a lot of code around... Why is this useful? Well, 
let's see what happens when we remove the `<div>` containing our 
reviews for each movie and instead add a new `<reviews>` tag...

    ```html
    <!DOCTYPE html>
    <html ng-app="moviesApp">
    <head>
        <meta charset="utf-8">
        <title>Movies</title>
        <script src="js/app.bundle.js"></script>
    </head>
    <body>
    
    <div ng-controller="MoviesController as movies">
        <h1>Movies:</h1>
        <div ng-repeat="movie in movies.movieList">
    
            <h3>Title: {{movie.title}}</h3>
            <h3>Year: {{movie.year}}</h3>
    
            <reviews></reviews>
            <br>
    
        </div>
    </div>
    
    </body>
    </html>
    
    ```

- If we refresh our page, it should look exactly the same! We 
just removed several lines from our `index.html` and replaced 
them with a simple, custom tag. Even better, this tag (and 
all of the JavaScript behind it) is now re-usable on any other 
part of our Angular application!

- Since we've successfully redefined our 
`controllers/reviewsController.js` as a part of our new 
`<reviews>` component, let's delete the old version of it.

    `$ rm client/js/controllers/reviewsController.js`

- That feels pretty good to remove extra code from our 
application. Let's see if there is any other code we can remove...

- If we look at the new `reviews.controller.js` file that we 
have created, we will see that this block of code is at the top:

    ```javascript
    angular
        .module('moviesApp')
        .controller('ReviewsController', ReviewsController);
    ```
    
- This code should be there! We're defining a new controller, so 
shouldn't we tell the app about it? With components and Webpack, 
we no longer have to. Because we are `requiring` the controller 
directly into the **component**, we can remove this block of code 
from our application as long as we only use the controller in 
the context of this component. Let's remove it!

- If we refresh the page now, we will see that our reviews went 
away though... This is because our `reviews.html` is still 
referencing this controller by name as `ReviewsController`. 
Since we are no longer giving this controller a name within our 
app, we will have to reference it in a slightly different way: `$ctrl`.

- Let's update our `reviews.html` to replace any reference to our 
controller with `$ctrl`:

    ```html
    <div>
        <h3>Reviews:</h3>
        <ul>
            <li ng-repeat="review in $ctrl.reviewList">{{review.content}}</li>
        </ul>
    </div>
    ```

- ...and now if we refresh the page, we see that our Reviews are 
once again appearing on the page.

- What did we gain here? For one, we removed the helpful, but clunky 
"controller as" syntax from our view, entirely. For another, we 
no longer have to be sure we are typing out the correct "controller 
as" alias every time we want to reference a variable off of it. How 
many times have you encountered an Angular bug just because you 
mis-typed the name of your controller? Look how much better it is 
when we can always reference this controller as `$ctrl` instead!

## You Do: Refactor the MoviesController into a `<movies>` Component

- For the rest of this lesson, let's pair-program!

- Remember to use `webpack --watch` to easily re-bundle your files.

- Get with a partner and refactor the `controllers/moviesController.js` 
file using this same pattern. 

- Hint: Our `movies.html` should end up looking like this:

    ```html
    <div>
        <h1>Movies:</h1>
        <div ng-repeat="movie in $ctrl.movieList">
    
            <h3>Title: {{movie.title}}</h3>
            <h3>Year: {{movie.year}}</h3>
    
            <reviews></reviews>
            <br>
    
        </div>
    </div>
    ```
    
