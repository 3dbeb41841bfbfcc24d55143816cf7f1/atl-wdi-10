---
title: Rails Active Record Intro
type: lesson
duration: 60 min
creator:
    name: Marc Wright
    city: WDIR
competencies: Programming

---

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)




# Rails API Intro

**Objectives**

-   Create a new Rails application with PostgreSQL
-   Describe similarities between Express routing and Rails routing
-   Create methods for a RESTful controller
- Create a Rails API to serve JSON data only (no views)
- Test our REST-ful endpoints using Postman

## Prerequisites

*You should already be able to:*

-   Execute ruby code in `irb` or `pry`
-   Explain the difference between HTTP request/request
-   Explain MVC
-   Describe SQL

<br>

##Intro
Over the next few lessons we're gonna dive into databases, Active Record associations and basic CRUD on 2 models (Artists and Songs). We're gonna create a Rails app called Muse and incorporate what we've learned. You can [check out the app here](https://wdir-muse.herokuapp.com/).

<br>

## "What is Rails?"

<!-- Estimate : 10 mins -->

Rails was created in 2003 by David Heinemeier Hansson (DHH),
while working on the code base for Basecamp,
a project management tool by 37signals.
David extracted Ruby on Rails and officially released it
as open source code in July of 2004.
Despite rapid iteration of the Rails code base throughout the years,
it has stuck to three basic principles:

-   Ruby Programming Language
-   Model-View-Controller Architecture
-   Programmer Happiness

Rails was created with the goal of increasing programmers'
happiness and productivity levels.
In short, with Rails you can get started with a full-stack web application by
quickly creating pages, templates and even query functions.

Rails heavily emphasizes "Convention over Configuration."
This means that a programmer only needs to specify and code out
the non-standard parts of a program.
Even though Rails comes with its own set of tools and settings,
you're certainly not limited to library of rails commands and configurations.
Developers are free to configure their applications however they wish,
though adopting conventions is certainly recommended.

<br>

## Rails as a REST-ful API

In Unit 4 we're gonna learn how to create and consume an API using Angular on the front-end. This is essentially what we did in Unit 3 with our Node/Express back-end. This Rails app will have no views, however, we'll test our API endpoints using Postman.

> The original idea behind Rails API was to serve as a starting point for a version of Rails better suited for JS-heavy apps. As of today, Rails API provides: trimmed down controllers and middleware stack together with a matching set of generators, all specifically tailored for API type applications.

<br>

## Code-Along : Creating a Rails API App

<!-- Estimate: 30 mins -->

For this introduction, we'll look at how to create a simple app: an app that tracks Artists and Songs.
The specs for this app are as follows:

-   Display a list of all Artists
-   Create new Artists and edit existing Artists
-   Delete Artists
-   Create Songs that belong to an Artist

To begin, we can just run the following command.

```bash
rails new muse-rails-api-backend --api -T -d postgresql
```

This command generates a new Rails app.
By default, Rails creates an application using a (rather flimsy) database called
SQLite; when using SQLite, Rails stores your application's data in a text file
inside the Rails app. This is not ideal.
However, because we added the option `-d postgresql`, this app will be
configured to use a different database, Postgres, which is much more powerful
and fully featured.
We will be using Postgres for every Rails application in this course, so
get in the habit of adding that `-d` option.

Let's go into the project folder:

```bash
cd muse-rails-api-backend
atom .
```

Here's a list of all the files and folders that were magically created
by the `rails new` command:

```bash
.
├── Gemfile
├── Gemfile.lock
├── README.md
├── Rakefile
├── app
│   ├── assets
│   │   ├── config
│   │   │   └── manifest.js
│   │   ├── images
│   │   ├── javascripts
│   │   │   ├── application.js
│   │   │   ├── cable.js
│   │   │   └── channels
│   │   └── stylesheets
│   │       └── application.css
│   ├── channels
│   │   └── application_cable
│   │       ├── channel.rb
│   │       └── connection.rb
│   ├── controllers
│   │   ├── application_controller.rb
│   │   └── concerns
│   ├── helpers
│   │   └── application_helper.rb
│   ├── jobs
│   │   └── application_job.rb
│   ├── mailers
│   │   └── application_mailer.rb
│   ├── models
│   │   ├── application_record.rb
│   │   └── concerns
│   └── views
│       └── layouts
│           ├── application.html.erb
│           ├── mailer.html.erb
│           └── mailer.text.erb
├── bin
│   ├── bundle
│   ├── rails
│   ├── rake
│   ├── setup
│   ├── spring
│   └── update
├── config
│   ├── application.rb
│   ├── boot.rb
│   ├── cable.yml
│   ├── database.yml
│   ├── environment.rb
│   ├── environments
│   │   ├── development.rb
│   │   ├── production.rb
│   │   └── test.rb
│   ├── initializers
│   │   ├── application_controller_renderer.rb
│   │   ├── assets.rb
│   │   ├── backtrace_silencers.rb
│   │   ├── cookies_serializer.rb
│   │   ├── filter_parameter_logging.rb
│   │   ├── inflections.rb
│   │   ├── mime_types.rb
│   │   ├── new_framework_defaults.rb
│   │   ├── session_store.rb
│   │   └── wrap_parameters.rb
│   ├── locales
│   │   └── en.yml
│   ├── puma.rb
│   ├── routes.rb
│   ├── secrets.yml
│   └── spring.rb
├── config.ru
├── db
│   └── seeds.rb
├── lib
│   ├── assets
│   └── tasks
├── log
├── public
│   ├── 404.html
│   ├── 422.html
│   ├── 500.html
│   ├── apple-touch-icon-precomposed.png
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   └── robots.txt
├── test
│   ├── controllers
│   ├── fixtures
│   │   └── files
│   ├── helpers
│   ├── integration
│   ├── mailers
│   ├── models
│   └── test_helper.rb
├── tmp
│   └── cache
│       └── assets
└── vendor
    └── assets
        ├── javascripts
        └── stylesheets

```

Wow, that's a lot of stuff.
For reference, here's a list of just the top-level folders:

```bash
├── app
├── bin
├── config
├── db
├── lib
├── log
├── public
├── test
├── tmp
└── vendor
```

This seems really intimidating at first.
But in fact, most of these files are 'plumbing': they make up the foundation of
the Rails framework, and are unchanged from app to app.
The directories you will most regularly access and change are `app`, `config`,
and `db`.

-   `app` : 90% of the web app code will be here,
    including all of our model, view, and controller files.

-   `config` : This directory holds top-level configuration settings for your
    Rails app. This includes credentials for the database and other 3rd party
    services, settings for deployment, and instructions to the server program
    ('Puma' is Rails's new default) about how to serve this app over HTTP.

-   `db` : This directory primarily holds three things: a 'schema' file laying
    out the structure of the database, 'migrations', which are scripts that
    auto-generate the schema, and a 'seed' file, which loads whatever starter
    data is necessary for your app to run when in production.

Rails follow a pattern called "convention over configuration".
This means that Rails expects you to follow specific patterns for how you name
things and where those files 'live' inside the application.
Learning conventions takes time, but they save time in the long run by helping
you avoid having to make those decisions from scratch each time.

### Pair Work : Read the Rails Guide

<!-- Estimate: 5 mins -->

Go to the [official Rails Guide](http://guides.rubyonrails.org/getting_started.html)
and read through descriptions of the Rails file structure.
Try and find answers to the following questions:

1.  Where are the application's Ruby dependencies specified?

2.  Where should you put third-party JavaScript and CSS files?
    What about files you create yourself?

3.  Suppose that you needed to change your application's routes.
    Where would you go to do that?

We'll regroup afterwards to discuss your answers to these questions.

<!-- Estimate : 5 mins for discussion -->

## Building a Rails Application

### The (R)MVC Pattern in Rails and Express

Rails and Express have a lot of similarities, because they were both created
to solve more or less the same problem --
making it easier to quickly build web applications.
## MVC

Rails uses an __MVC__ architecture

<b>M</b>odel - The model refers to the data objects that we use. It's the object oriented approach to design. The data in our database will be the most common type of object that we'll put there.

<b>V</b>iew - The view is the Presentation layer. It's what the user sees and interacts with, essentially the web pages. The HTML, the CSS and the JavaScript. The controller processes and responds to user events, such as clicking on links and submitting forms.

<b>C</b>ontroller - The controller will make decisions based on the request and then control what happens in response. It controls the interaction with our models and with our views.

(Ref: [Hartl MVC](https://www.railstutorial.org/book/toy_app#fig-mvc_detailed))

![rMVC Diagram](http://i.stack.imgur.com/Sf2OQ.png)

> Alternate Diagram:

![MVC Diagram](https://softcover.s3.amazonaws.com/636/ruby_on_rails_tutorial_3rd_edition/images/figures/mvc_detailed.png)


## Railstaurant Metaphore
The **client** is a customer eating in the restaurant, the **server** is the waiter, the **router** is waiter who hands off orders, the **controller** is the kitchen, the **database** is the giant walk-in refrigerator with ingredients, the **model** is the person fetching ingredients from the refrigerator, the **view** is the chef who makes the meal look pretty and relays it back to the customer.

Depending on how it's structured, a web application typically has three jobs:

1.  Respond to incoming requests.
2.  Manipulate underlying data.
3.  Serve up a response.

----

In Rails, the first responsibility is handled by a combination
of the **Router** and the **Controllers**;
Controllers hold methods that 'respond' to incoming requests,
while the Router ensures that requests get passed to the right method
on the right Controller.

The second responsibility is handled by Models (and, indirectly, Migrations),
which provide an interface through which the Rails app can communicate
with the database.
A Model class represents an entire data table, while their instances each
represent individual rows in the table.

Finally, that third responsibility is handled by a combination of Controllers
and **Views**. Views are essentially template HTML files;
however, they also have embedded Ruby code that can auto-generate HTML.
By default, each Controller method will attempt to load and "render"
a similarly-named View as soon as it finishes.

<br>

## Generate the Muse Rails App
1. `cd` into the directory that you want to create your app
1. Run this in your Terminal `rails new muse-rails-api-backend --api -T -d postgresql` to generate a new Rails app called Muse
	- `-T` will tell Rails to not auto-generate a basic test suite
	- `-d postgresql` tells Rails that we want to use a Postgresql database instead of SQLite3 (the default). This adds `gem pg` to our `Gemfile`
2. Be sure to `cd` into the `muse` project folder and open the project in your IDE of choice
3. Add the following lines to `config/env/development.rb`, around line 44
    - The config folder stores your app configurations for different environments- most is done in app.rb
    - This will improve the error responses you receive to JSON requests
    - Will render an html page with debugging information
    - You could use :api instead of default to preserve the response format

    ```rb
    # Add Rails 4.2 serverside rendered errors
    config.debug_exception_response_format = :default
    ```
    
3. In your `Gemfile` uncomment out `gem 'rack-cors'` around line 26. 

5. `bundle install`
4. Inside of `config/initializers/cors.rb`, uncomment the block of code and change `origins` to `*`:

    ```rb
    Rails.application.config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
    
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head]
      end
    end
    ```

    > We're pretty much uncommenting out the code and changing `origins` to `'*'`
    - You don't want to do this in a prod app, but it will be fine for our purposes today
4. Run `rails db:create db:migrate` to initialize our database and create a `db/schema.rb` file
5. Open a new Terminal tab and start the Rails server with `rails s`. You'll want to keep the server running in a seperate window to make your workflow easier.
6. In your browser, navigate to `http://localhost:3000`. You should see the Rails welcome page

    ![](https://i.imgur.com/jES66mm.png)

6. Let's go ahead and make our first `git` commit:
    - `git init` 
    - `git add -A`
    - `git commit -m "first commit - created and migrated database"`

<br>


![Imgur](http://i.imgur.com/wPefQjh.png)

## Conclusion
To recap, here's what we've done so far:

- Generated the **Muse Rails API App**

Now we're gonna hop into databases so we'll have a truly full-stack application!





