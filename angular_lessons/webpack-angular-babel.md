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

- Movies app
- Build express / Angular structure (maybe give boilerplate)
- Build a movies controller that ng-repeats over a list of movies (maybe make this look good w/ CSS)

--- 

## Now let's add some Reviews to our movies:

- Now we want to add a controller, but we'll have to require it with script tags
- Add the controller
- What if we added another? 10 more? What if we had 50 of them?
- Not fun, wouldn't it be much better if we could just require all of our Javascript once?

## Enter Webpack:

- npm install
- give boilerplate config without custom loaders
- walk through config
- refactor app to require controllers in app.js
- refactor script tags to require just one bundled js file
- now if we add any number of controllers, they will automatically be included
- our dependencies are also included

## Using Webpack in our development workflow:

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