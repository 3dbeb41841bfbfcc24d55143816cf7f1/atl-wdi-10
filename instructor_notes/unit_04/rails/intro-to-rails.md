[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro to Rails

<!--
  title: Intro to Rails
  type: lesson
  duration: "6:25"
  creators: Colin Hart, Matt Brendzel
  competencies: Server Applications
-->

## Objectives

*When this session is finished, you will be able to:*

-   Create a new Rails application with PostgreSQL
-   Describe similarities between Express routing and Rails routing
-   Create methods for a RESTful controller
-   Create views

## Prerequisites

*You should already be able to:*

-   Execute ruby code in `irb` or `pry`
-   Explain the difference between HTTP request/request
-   Explain MVC
-   Describe SQL

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

### Code-Along : Creating a Rails App

<!-- Estimate: 30 mins -->

For this introduction, we'll look at how to create a simple app: a cookbook!
The specs for this app are as follows:

-   Display a list of all recipes
-   Create new recipes and edit existing recipes
-   Delete recipes

To begin, we can just run the following command.

```bash
  rails new cookbook -d postgresql
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

Let's go into the cookbook folder:

```bash
  cd cookbook
```

Here's a list of all the files and folders that were magically created
by the `rails new` command:

```text
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

```text
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

#### Code-Along : Building Views and Controllers

<!-- Estimate: 30 mins -->

Run `rails server` (or `rails s`, for short) to start the server.
Open up `localhost:3000` in your browser of choice.

You should get an error message. Read it -- what does the first line say?

1.  `database "cookbook_development" does not exist`

    We got this error because our app doesn't have a database yet.
    We can create a new database by running `rails db:create`.

    > **{ Common Pitfall }**
    >
    > If `rails db:create` fails, it's probably because your database server
    > isn't running. If you're using the Postgres app, just make sure it's on
    > by checking for the blue elephant on your menu bar.

    Let's check the server again. What do we have now?

    What we just did is affectionately known as **EDD**, or
    "Error-Driven Development".
    Because Rails has such detailed and descriptive error messages,
    we can usually follow a thread from error to error,
    with each error telling us what to do next,
    until our feature is fully-functional.

    Some general rules for errors:

    -   **Don't** freak out when you get an error

    -   Pay attention to the first few lines --
        that's usually the part of the error that tells you what the problem is.

    -   Once you've found the important part of the error, don't just skim it;
        read it carefully, and make sure you understand what it's saying.
        Googling your error messages is good, but it's no substitute for
        actually reading the error.

    Let's see this in action.
    We're going to use the Rails errors to build a route, a controller,
    and a view.

    Go to `localhost:3000/recipes` to kick things off

2.  `Routing Error : No route matches [GET] "/recipes"`

    Let's take a minute to read the *entire* error, together.

    1.  `Routing Error`

        We have an error with our route.

    2.  `No route matches [GET] "/recipes"`

        The route we asked for (GET request at "/recipes") doesn't exist.

    3.  `Routes match in priority from top to bottom`

        OK, some nice general advice...

    4.  `You don't have any routes defined!`

        Ah hah! Maybe that's the issue -- we need to create some routes.

    5.  `Please add some routes in config/routes.rb`

        Can't get any plainer than that.

    6.  `For more information about routes, please see the Rails guide ...`

        Last is a reference to a rather excellent guide on routing in Rails,
        ["Rails Routing From The Outside In"](http://guides.rubyonrails.org/routing.html)

    OK, clearly we need to add a route.
    Let's open up the file mentioned in the error, `config/routes.rb`,
    and add a new route.
    For reference, this file is where we define all of a Rails app's routes.

    Add this line inside the `do` block:

    ```ruby
    get '/recipes', to: 'recipes#index'
    ```

    Refresh localhost. What's the error now?

3.  `Routing Error : uninitialized constant RecipesController`

    This error might feel a little confusing, but that's only because we've just
    started learning Rails.

    `uninitialized constant RecipesController` means that Rails was expecting to
    find a `RecipesController` class, but it hasn't been defined yet.

    By Rails convention, this class should be defined in a file called
    `recipes_controller.rb` inside the `app/controllers` directory.

    Let's fix this error.

    1.  Create `recipes_controller.rb`

    2.  In that file, define a class called `RecipesController`.

    3.  Make this new Controller class inherit from a predefined Controller
        class called `ApplicationController`; `ApplicationController` defines
        the default Controller configuration for your application, and
        itself inherits from the baseline Controller class, `ActionController`.

    > **{ Common Pitfall }**
    > Both the filenames and the class names must be PLURAL for Controllers

    Refresh localhost. We should have another error...

4.  `The action 'index' could not be found for RecipesController`

    RecipesController exists, but Rails is looking for an action
    (read: instance method) called 'index'. Why is that?

    Remember what we wrote in the routes file earlier?

    ```ruby
    get '/recipes', to: 'recipes#index'
    ```

    The pattern for writing routes is

    ```ruby
    http_verb 'url path', to: 'controller_name#method_name'
    ```

    Therefore, what we wrote earlier means that if Rails receives
    a `GET` request (such as the one made by a browser when it requests a page)
    at the relative URL `/recipes`,
    it should invoke the `index` method of `RecipesController`.

    Define an empty method in the RecipesController class called `index`

    Refresh the browser again.

5.  `ActionController::UnknownFormat in RecipesController#index`

    "AAAAAACHHH so much red!"

    Unknown format? What? ActionController? Wat....

    It's cool, read the next line.

    ```html
    RecipesController#index is missing a template for this request format and variant.
     request.formats: ["text/html"]
     request.variant: []
    NOTE! For XHR/Ajax or API requests, this action would normally respond with
    204 No Content: an empty white screen.
    Since you're loading it in a web browser, we assume that you expected
    to actually render a template, not… nothing, so we're showing an error
    to be extra-clear. If you expect 204 No Content, carry on.
    That's what you'll get from an XHR or API request. Give it a shot.
    ```

    As mentioned earlier, Controller methods attempt to render View templates
    as soon as they finish executing. In this case, Rails wasn't able to find
    a file called `index.html.erb` (the template for an `index` method) at the
    path `views/recipes`.

    Make a new `recipes` directory inside the `views` directory.

    > **{ Common Pitfall }**
    > View directories are PLURAL, just like Controllers.

    Then, create a new file inside it called `index.html.erb`.

    > `.html.erb` means "html with embedded ruby" -- in other words, Ruby code
    > interspersed with HTML code. If you've worked with `.ejs` in Express, the
    > idea is the same.

    Let's add some HTML to this new file: `<h1>HELLOO WORLDD</h1>`

    Refresh the browser -- everything should be working now!

6.  Now that everything's rendering, let's make a modification to the Controller
    and View to bring it closer to how things will actually work in Rails.

    Instance variables (`@...`) in the Controller are visible to their
    respective views, so instead of hard-coding "HELLOO WORLDD" in the View,
    let's pull it out into the Controller and store it in an instance variable,
    which we can then access from the View.

    ```ruby
    def index
      @example_data = "HELLOO WORLDD"
    end
    ```

    ```html
    <%= @example_data %>
    ```

    So that's the core of creating routes and rendering views.

    Let's review the flow of what we just did:

    1.  A http request comes in from the browser

    2.  Rails first checks the routes.rb file to see if the path and verb match
        anything written in there.

    3.  When it finds a match it directs the http request to the controller
        and method specified.
        i.e. `recipes#index` directs to the `index` method of RecipesController

    4.  Rails then looks in the views directory for a directory name that
        matches the name of the controller and subsequently for a file
        that matches the name of the method. i.e. `recipes/index.html.erb`

    5.  Rails creates an HTML page by rendering the embedded Ruby and variables
        in the View, if any, and sends that page back to the browser.

    The last part of MVC is the Model, but we'll come back to that after
    practising routing.

#### Pair Work : Jokes App

<!-- Estimate: 30 mins -->

You're going to begin creating a new Rails app that helps people log their
favorite jokes. When you're finshed, you should have:

1.  A Jokes controller

2.  Routes for new, index and show actions on that controller.
    (they all follow the exact same pattern as what we just did for
    `recipes#index`)

3.  A Jokes views directory

4.  Three html.erb files associated with new, index, and show

Go step by step.
Even if you remember what to do exactly, use our EDD process;
not only will it help you familiarize yourself with Rails errors
and what causes them, but it's also just a good habit to get in!

> **{PROTIP}**
> run $ rails routes to see the routes that exist in config/routes.rb

### Adding the Data Layer

Real Rails applications use some sort of database to manage their data.
The primary tools Rails uses to manage the database are **Models** and
**Migrations**. We'll look at Migrations first.

#### Pair Work : Read the Rails Guide (Again)

<!-- Estimate: 10 mins -->

Take 10 minutes to [read about migrations](http://guides.rubyonrails.org/active_record_migrations.html)
in the Rails guides.
DO NOT TRY TO MIGRATE YET. We need to set up our migrations first.

#### Code Along : Add a Data Layer to Recipe App

<!-- Estimate: 30 mins -->

1.  Set up a migration for Recipes.

    Like almost every part of Rails, migrations can be generated from the
    command line.

    `rails g migration CreateRecipes`

    > Make sure when generating migrations you use the right naming
    > The name of the migration should be in camelcase, start with the name
    > of what your script does, and end with the (plural) name of your resource.
    >
    > BAD <br/>
    > `rails g migration users` <br/>
    > `rails g migration AddUser` <br/>
    > `rails g migration CreateUser` <br/>
    > GOOD <br/>
    > `rails g migration CreateUsers` <br/>
    > `rails g migration AddFieldToUsers` <br/>
    > `rails g migration RemoveFieldFromUsers` <br/>

    We can see from the output that it has created a new directory, `migrate`,
    and a file for us inside of the `db` directory. This file is a migration
    file, and it contains a script which will be executed on the database.

    If we look inside the file, it's clear that there's a very specific syntax.
    One might say that it's an example of a **Domain-Specific Language**,
    or DSL. Rails has many such examples, as we saw in the routes file.

    ```ruby
    def change
      create_table :recipes do |t|
        t.string :title
        t.text :description
        t.boolean :made_it_yet, default: false

        t.timestamps
      end
    end
    ```

    Fundamentally, a migration represents a change to the structure
    of the database -- anything that involves adding/modifying/deleting
    columns, or dropping or creating new tables.

    Once you've created a migration file, you can execute it by running the
    command `rails db:migrate` in the console. To *undo* the last completed
    migration, run `rails db:rollback`.

    [Read more about migrations here](http://edgeguides.rubyonrails.org/active_record_migrations.html)

    You can look at the database using `rails db`, and if you wanted, you could
    create new Recipes by hand by writing SQL code.
    But Rails, of course, has a simpler way : Models

2.  Inside `app/models`, create a new file called `recipe.rb`. Inside it, define
    a class called `Recipe`; have it inherit from `ApplicationRecord`, just like
    how we had `RecipesController` inherit from `ApplicationController`.

    > {**Common Pitfall**}
    > Although Controllers and Views use plural names, Models use SINGULAR
    > names.

    The Recipe **class** represents the entire table of Recipes.
    You can call `.new` on the class to create new Recipe **instances**,
    each of which represents one recipe in the table.

    By inheriting from `ApplicationRecord`, we not only have a Ruby way of
    representing our SQL entities but we also have access to a set of functions
    for all the basic DB CRUD functions *and* for querying.
    Here are a few examples.

    -   `.all` returns a collection of Recipe instances, one representing each
        entry in the `recipes` table.

    -   `.find(id)` takes an id, and returns a Recipe instance for the row in
        in the `recipes` table for which the `id` field equals the id passed in.

    -   `.where(query)` allows you to pass in a search query, and returns a
        a collection of matching records.

#### Independent Work : Explore Rails Models

<!-- Estimate : 10 mins -->

Let's play around with the Model using the Rails console, a Ruby REPL
run from within Rails. To open the console, type `rails c`.

Read through [this section in the docs](http://guides.rubyonrails.org/active_record_basics.html#crud-reading-and-writing-data)
and try out some of these commands/patterns with our Recipe model.
(The docs use User, just replace that with Recipe)

#### Pair Work : Add a Data Layer to Jokes App

<!-- Estimate : 30 mins -->

Go back through the steps in the code-alone in pairs, and use the instructions
to create a `jokes` table in the database, and make it accessible using a `Joke`
model. A Joke should have:

-   a setup ("Why did the chicken cross the road?")

-   a punchline ("To get to the other side!")

-   a "dad score" indicating how lame the joke is
    (0 to 10, with 10 being super-lame)

Test your work in the Rails console.

### Showing Data in the View

In the last exercise,
you created some new recipes in the database using the Recipe model.
Models are all accessible from every part of the Rails application,
which means that you can write Ruby scripts that use models to perform CRUD.
This also means that we can access the models from *controller methods*, and tie
incoming requests to CRUD actions on the database.

#### Code Along : Show All Recipes

<!-- Estimate : 10 mins -->

Let's trying doing this from within the `index` method of our RecipesController.
We can use the `.all` method to get a collection of Recipes.
If we then take that collection and put it in an instance variable, it will
become accessible from the View!

```ruby
def index
  @recipes = Recipe.all
end
```

In `recipes/index.html.erb`, we can add `<%= @recipes %> ` to the page.
If we go to `localhost:3000/recipes` in the browser, we'll see... something.

According to the Rails console, we're retrieving a list of all recipes.
But it's not showing up in a meaningful format.

Fortunately, because it's an `.erb` file, we can write Ruby code to loop through
the collection of recipes and show some snippet of HTML for each one.

```html
<% @recipes.each do |recipe| %>
  <ul>
    <lh><%= recipe.title %></lh>
    <li><%= recipe.description %></li>
    <li><%= recipe.made_it_yet %></li>
  </ul>
<% end %>
```

And voila! Our recipes are visible on the page.

#### Pair Work : Show All Jokes

<!-- 20 mins -->

Modify the controller and views in your Joke app so that `/jokes` shows a list
of all jokes. You can lay them our as a table or as items in a list, but please
make all the properties human-readable on the page.

### Creating New Data From the View

Now that we've taken data from the database and shown it on a view, let's go
the opposite way, and use HTML forms to take data from the view back to the
model and the database.

#### Independent Work : Form Helpers

<!-- Estimate: 10 mins -->

Take a quick skim through the [form helpers documentation](http://guides.rubyonrails.org/form_helpers.html)
and try to answer the following questions:

1.  What's the difference between `form_tag` and `form_for`?
2.  How do you create a text field within a form?
3.  How do you create a 'submit' button for a form?

#### Code Along : Form for Creating Recipes

<!-- Estimate: 30 mins -->

We're going to use the `form_for` helper to build a form for creating new
Recipes, and then wire it up to the controller and model so that we can actually
alter the database.

1.  Add routes for two new actions, `new` and `create`.
    The standard convention would be for `recipes#new` to be triggered by
    a `GET` request at `/recipes/new`, and for `recipes#create` to be triggered
    by a `POST` request at `/recipes`.

2.  Make two new methods on `RecipesController`: `new` and `create`.

3.  Create a view for the `new` method inside `/views/recipes/new.index.html`.
    This view should use the `form_for` helper to bind the form to the instance
    variable `@recipe`, which we will soon make available from the controller.

    ```html
    <%= form_for @recipe do |f| %>
      <div>
        <%= f.label :title %>
        <%= f.text_field :title %>
      </div>
      <div>
        <%= f.label :description %>
        <%= f.text_area :description %>
      </div>
      <div>
        <%= f.label :made_it_yet %>
        <%= f.check_box :made_it_yet %>
      </div>
      <%= f.submit "New Recipe" %>
    <% end %>
    ```

    By default, submitting the form will trigger the associated `create` action.
    But first, let's take care of the `new` action.

4.  The view we just created will render after the `new` method runs.
    It is looking for an instance variable `@recipe`, which will hold a blank
    recipe. We'll need to provide this in the controller method.

    ```ruby
    def new
      @recipe = Recipe.new
    end
    ```

    With this done, the form should load in the browser.

5.  Lastly, let's handle the `create` method.
    Ever controller has a special method called `params` which returns,
    as a hash, a bunch of keys and values related to the current request.

    ```ruby
    def create
      puts params
    end
    ```

    When the form we just made gets submitted, `RecipesController` will receive
    a `POST` request; when it does, this hash will include, along with all
    normal properties, a property called `recipe`, with `title`, `description`,
    etc as sub-properties.

    ```ruby
    # This is what the 'params hash' looks like.
    {
      ...
      :recipe => {
        :title => 'some title',
        :description => 'some description',
        :made_it_yet => false
      }
    }
    ```

    We want to keep only the parts of the hash pertaining to the recipe.
    Let's define a private method called `recipe_params` to do that.
    Inside, we can use two helper methods, `require` and `permit`, to define
    (respectively) the root key and the sub-keys that we want to keep.

    ```ruby
    private
    def recipe_params
      params.require(:recipe).permit(:title, :description, :made_it_yet)
    end
    ```

    Why limit the sub-keys? It's possible that soemone might maliciously try to
    muck with our app by changing properties that we may not want them changing
    (timestamps, for instance). This approach is called using "strong params",
    and it's a very simple security measure that every Rails app should use.

    Now let's use these "curated" parameters to create a new recipe.

    ```ruby
    def create
      @recipe = Recipe.new(recipe_params)
      if @recipe.save
        redirect_to recipes_url
      else
        redirect_to new_recipe_url
      end
    end
    ```

    This highlights a very important point. Although the model represents the
    data in the table, **it isn't the same thing**. Modifying a model instance
    *does not automatically modify the underlying table*. Instead, you'll need
    to invoke the `save` method for them to sync.

    If we can save this recipe successfully, our app will redirect the user to
    `recipes_url` (a shortcut for `/recipes`); if it does not save successfully,
    it will send them to `new_recipe_url` (`/recipes/new`), i.e. the original
    form.

    > {**PROTIP**}
    > You can see a list of all routes (including request type, URL,
    > controller name, action name, and prefixes for the shortcut names)
    > by running `rails routes`.

    When we complete the form, we can see our new recipe show up on the list!

#### Pair Work : Form for Creating Jokes

<!-- Estimate : 30 mins -->

As we did in the code along section, create `new` and `create` actions for
`JokesController`, set up the appropriate routes, and add a form to your
`new.html.erb` view. Finally, link up the form to the controller, add a
"strong params" method, and wire up `create` so that you can make new jokes by
filling out the form.
