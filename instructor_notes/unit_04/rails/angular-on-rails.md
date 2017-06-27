# Angular On Rails

## Learning objectives

- Give an example of when and why one might choose to put an Angular app on Rails.
- Explain whether a given file should be placed in `app/assets`, `lib/assets`, `vendor/assets`, or `public/`.
- Describe the difference between putting a static file in the asset pipeline versus in the `public` folder.
- Cause a certain Rails controller action to respond differently to both HTML and JSON requests.

## Framing

### Rails vs Angular

So far we've seen Angular apps with a limited back-end, and Rails apps with no front-end framework. Now we're going to combine the two and make a Rails app that uses Angular on the front-end.

We *have* made Angular apps that use *someone else's* back-end: APIs. This is different. We're going to create an Angular app that is "served" from the same server that provides the data. Our app will be using itself as the API.

### Why?

In a typical Rails app the user interacts with data through some combination of links, forms, and Javascript.

![Typical Rails](images/request-normal.png)

In an Angular-on-Rails app the user interacts with data just through Javascript.

![Angular and Rails](images/request-angular.png)

This means they have a "single point of contact" with your data. This has two advantages: the user experience may have more consistency (AJAX vs page refreshes), and you have fewer moving parts to worry about.

The trade off here is the need to write more JS.

### Getting Started
Lets start out by setting up our environment.

```bash
rails new tunr_ang_rails -d postgresql
cd tunr_ang_rails
```

This sets up our Ruby on Rails project and generates our file structure.  Notice that in Rails 5, an empty `package.json` is created when you start a project.  Since this is already created, we can run the following `npm install` commands to get webpack set up.

```bash
npm install --save webpack
npm install --save glob
npm install --save babel-core babel-loader babel-preset-env babel-preset-es2015
npm install --save html-loader
npm install --save angular
```

Create a `.babelrc` file and add the following snippet
```json
{ "presets": [ "es2015" ] }
```

Finally create a `webpack.config.js` file and copy this webpack config we've created for you.
```js
require('webpack');
var glob = require('glob');

module.exports = {
    context: __dirname,
    entry: {
        app: glob.sync(__dirname + '/client/**/*.js')
    },
    output: {
        path: __dirname + '/app/assets/javascripts',
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

Take a look at the `entry` and `output` path.  This shows us some important details about what our webpack config is doing.  In the entry object, we see that webpack is going to grab every `.js` file within the `client` folder.  It will then bundle all of the code up into an `app.bundle.js` and place it in the `/app/assets/javascripts` folder.  This means that the Asset Pipeline is able to take our bundled JavaScript and serve it without having to jump through any extra hoops!

Let's add a `client` folder that we will use to generate our Angular project. We'll also create an app.js file to serve as our root of the Angular application.

```bash
mkdir client
touch app.js
```

```js
//within app.js
const angular = require('angular');
angular.module('TunrApp', []);
```

Now if we run the `webpack` command, we should see that it successfully bundles the application and inserts it into our `app/assets/javascripts` directory.

With that, we can now start building Angular-On-Rails!

## Back-End: Ruby on Rails

### Model Set-Up and Seed
Now that we have our project properly set up, lets work on creating and seeding our data and serving it as an API for our Angular project to consume.

```bash
  rails g model Artist name photo_url nationality
  rails g model Song title album preview_url artist:references
```

Let's seed our database with our old tunr data. Copy the code for our seeds from this gist. [Tunr Seed Data](https://gist.github.com/king0120/a465fe25558c63bcb6d2a8091da1cea4)

Now let's create, migrate, and seed our database.  Then we can test and make sure that ActiveRecord can fetch the data we need

```bash
    rails db:create db:migrate db:seed
```

Finally, we'll add a has_many relationship to Artist
```ruby
# app/model/artist.rb
class Artist < ApplicationRecord
  has_many :songs, dependent: :destroy
end
```

### Create Routes
Let's use the resources command to generate nested routes for our two models
```ruby
# config/routes.rb
Rails.application.routes.draw do
  resources :artists do
    resources :songs
  end
end
```

### Generate Controllers
We now need to create controllers that can serve information from Postgres to our Angular front-end through an API call.  In order to do that, we need to take a slightly different approach than we have taken in the past.


### Single-Page on Multi-Page

The app we're creating today will be a single-page app that could fit into a greater multi-page app, not unlike Google Maps and Google.

We'll cover how to make specific assets -- stylesheets and Javascripts -- apply to specific pages. Until now, every page in your Rails apps used the same stylesheet.

## [Walkthrough: Inventory Tracker](walkthrough.md)

Today, we will be building off of Inventory Tracker, the angular app we built in the intro.

<details>
<summary>
**Q**. Thinking back, what was missing from or application when we left off?
</summary>
<br>
```
Data Persistence
```
</details>

<br>

We are going to take that same app, really not change anything, but just have our data come from and persist to our Rails app. This will make sure that when we refresh the page in the browser, the updated data will still be there.

For the structure of this walkthrough, I'm going to ask that you watch me code a few steps, without worrying about following along, then you'll have an opportunity to catch-up and build out the application. Then we'll bring it back as a group and discuss any questions after each step.

## Closing

Independently, take 3 minutes to jot down use-cases and reasons when you would:

 - Build an Angular app by itself
 - Build a Rails app by itself
 - Build an Angular and Rails app

### Quiz Questions

- Should Grumblr be a Rails-only app or a Angular-on-Rails app? Defend your answer.
- You decide to use D3 in your Rails app, and you decide to download it rather than use a CDN. In which one of the following do you put `d3.js`, and **why**?
  - `app/assets`
  - `vendor/assets`
  - `public/assets`
  - `lib/assets`

### Screencasts

- WDI8
  - [Part 1](https://youtu.be/EP1RO_AX9kE)
  - [Part 2](https://youtu.be/efQoUcQwyLY)
  - [Part 3](https://youtu.be/4Kc5AwEc028)
  - [Part 4](https://youtu.be/KElJ2nhYoOg)
  - [Part 5](https://youtu.be/KqHFxIWGXIE)
  - [Part 6](https://youtu.be/a21SsRQFKIo)