# Intro to Rails Asset Pipeline

## Learning Objectives
By the end of this lecture you should be able to...

- Review Rails philosophy
- Explain the Asset Pipeline
- Add Bootswatch to your Rails app


## Rails Philosophy

Rails values...

* DRYness
* Separation of Concerns & Modularity
* Abstraction & encapsulation
* Convention over configuration

### Separation of Concerns

In writing a large application it is important to establish something known as **Separation of Concerns**, *writing modular code that focuses on one aspect within the application.* The benefit of this is similar to idea of **compartmentalization** with respect to a production line, which allows for *more rapid development* by being able to **divide and conquer** the construction of a product. Compartments can focus on one task and optimize functional concerns far outside the scope of other compartments, but still work together to achieve the same product.  Ultimately it reduces the headache of debugging and controlling a large application that can ultimately grow to a level of complexity that no one person could ever fully comprehend (nor want or need to). 

### Organizational Principles

In order to manage the development of emerging aspects within a project it is important to construct a guideline that will shape how things are separated, a **design pattern**, which everyone can use to maintain **consistent** organization of different aspects. This is a *conventional* choice that helps to understandably scale a project. Part of the role of a developer is to become familiar with using design patterns, but this takes time (and trust), as different patterns emphasize an array of qualities: scalability, modularity, security, performance, et cetera.


<br>

## MVC

Rails uses an __MVC__ architecture

<b>M</b>odel - The model refers to the data objects that we use. It's the object oriented approach to design. The data in our database will be the most common type of object that we'll put there.

<b>V</b>iew - The view is the Presentation layer. It's what the user sees and interacts with, essentially the web pages. The HTML, the CSS and the JavaScript. The controller processes and responds to user events, such as clicking on links and submitting forms. 

<b>C</b>ontroller - The controller will make decisions based on the request and then control what happens in response. It controls the interaction with our models and with our views. 

(Ref: [Hartl MVC](https://www.railstutorial.org/book/toy_app#fig-mvc_detailed))

![MVC Diagram](https://softcover.s3.amazonaws.com/636/ruby_on_rails_tutorial_3rd_edition/images/figures/mvc_detailed.png)

## Railstaurant Metaphore
The **client** is a customer eating in the restaurant, the **server** is the waiter, the **router** is waiter who hands off orders, the **controller** is the kitchen, the **database** is the giant walk-in refrigerator with ingredients, the **model** is the person fetching ingredients from the refrigerator, the **view** is the chef who makes the meal look pretty and relays it back to the customer.

<br>



## Rails File Structure

![Rails File Structure](http://i.imgur.com/whOL4DQ.png)

- **app** - most important directory
    - models, views, controllers are all in here
    - helpers is where you put helper code for views
    - mailers - for sending emails
    - assets -> where we put static files
- **bin** 
    - bundle, rails, our binary files
- **config**
    - Application configuration, set config files for routes, db and environments
- **db**
    - store code related to db - Migrations go here!
- **gemfile/gemfile lock**
    - Gems are like NPM packagess. You have to put any gem you want to use in your Gemfile. You have to run bundle anytime you change your Gemfile. Your rails server needs to be restarted after any changes to your Gemfile.
- **doc** - Documentation for the application
- **lib** - Library modules
- **log** - Application log files
- **public** - simple html files here (anything here will be visible to the public), 
    - Data accessible to the public (e.g., web browsers), including images and cascading style sheets (CSS)

- **test** for testing
- **tmp** - temp files for rails to store stuff
- **vendor** - Third-party code such as plugins and gems, much less used because of gems
- **README** - A brief description of the application
- **Rakefile**  - Utility tasks available via the rake command


## Asset Pipeline

[Launchschool Article](https://launchschool.com/blog/rails-asset-pipeline-best-practices)

- Allows for pre-processors such as Coffee, Sass, and ERb
- Minifies JS and CSS files
- Combines them all into one, so there are less requests to the server
- Browsers allow 10 parallel requests at any time, so if you have 15+ JS/CSS files, it can become a serious hindrance to load time

***How it works in a Nutshell***

- Your Javascript files and CSS files all get compressed into 2 files: application.js and application.css. 
- Those compressed files get sent down to the public/assets directory and are served up for your viewing pleasure. 
- Your images and other files in app/assets get sent down the pipe to public/assets as well and are served from there.

***Three Features***

- Concatenation
    - Rails uses Sprockets, a fancy term for puppetmaster, to take all your Javascript files and merge it into one single .js file. It does the same thing for CSS. This is brilliant because serving up less files means load times are that much faster.  
    - 15 Javascript or CSS files take longer than 1 Javascript or CSS file to load.

- Compression
    - Once those files have been merged together, they undergo a metamorphosis and are shrunk down to a more manageable size. Extra whitespace and comments are removed. 
    - When we code, our CSS files are formatted in a way to make things look pretty and visually appealing. But when you’re a machine, you don’t need comments or pretty indents and spaces. You’re a machine! And all this equates to faster loading times, since it’s less bits being transferred.

- Precompilation (of high-level languages)
    - Some of the best things about being a web developer right now is being able to use handy new next-gen higher-level languages. No longer do we have to survive by actually writing out every. single. HTML tag by hand. No longer do we have to write out lines and lines of code and make sure you get every bracket, comma, and semi-colon right. 
    - Now we have meta-languages like Coffeescript, Sass, ERB, HAML, and the list goes on! At this stage, our Rails Coffeescript and Sass files get converted – precompiled – to vanilla Javascript and CSS.



## Making our app look even better using Bootswatch

It's time to start paying attention to how our app looks. We've been learning and using Bootstrap for a little while now, so let's style our application! There is a wonderful resource called bootswatch that lets us use free templates which means we can use bootstrap and not have our app look like every other bootstrap page! 

#### Getting Started

We need to include a couple gems in order to get started. In our Gemfile let's include 

```ruby
gem 'bootstrap-sass'
gem 'bootswatch-rails'
```

After running `bundle` in the terminal, let's create a new file in our `app/assets/stylesheets` folder named `custom.css.scss` so that we can include our scss extentions. Now paste in the following code

```ruby
# The following will import variables, bootstrap itself, then the bootswatch style

@import "bootswatch/journal/variables";
@import "bootstrap";
@import "bootswatch/journal/bootswatch";

# If you want to import your own styles just use 

@import "name_of_scss file"

# Here are the free themes you can use:

// Amelia
// Cerulean
// Cosmo
// Cyborg
// Darkly
// Flatly
// Journal
// Lumen
// Paper
// Readable
// Sandstone
// Simplex
// Slate
// Spacelab
// Superhero
// United
// Yeti
```
