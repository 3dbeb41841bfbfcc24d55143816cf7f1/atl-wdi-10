# Objectives
* Review MVC
* Create a new Rails application with PostgreSQL
* Make our first static RCV (Route-Controller-View)
* Describe similarities between Express routing and Rails routing
* Create methods for a RESTful controller
* Create a Model with ActiveRecord associations and validations

## Draw MVC

Everyone pick a spot on the wall and draw the MVC diagram.  Use _solid lines_ for the parts of the diagram that must talk to each other, and _dotted lines_ for the parts where it is not required to talk to each other.

## Our first Rails App

```ruby
gem install rails
```

```ruby
rails new todos -d postgresql
```

This is the first command you will make when creating a new Rails application.  This command will give us a bunch of folders to get us started.


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

This is a lot.  Here's the top level folder view.

``` bash
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

This seems really intimidating at first. But in fact, most of these files are 'plumbing': they make up the foundation of the Rails framework, and are unchanged from app to app. The directories you will most regularly access and change are app, config, and db.

* app : 90% of the web app code will be here, including all of our model, view, and controller files.

* config : This directory holds top-level configuration settings for your Rails app. This includes credentials for the database and other 3rd party services, settings for deployment, and instructions to the server program ('Puma' is Rails's new default) about how to serve this app over HTTP.

* db : This directory primarily holds three things:
  * <b>schema</b> - file laying out the structure of the database
  * <b>migrations</b> - which are scripts that auto-generate the schema
  * <b>seed</b> file - which loads whatever starter data is necessary for your app to run when in production.


## First static RCV

OK, so we've done our `rails new` command.  Let's start our server.

``` bash
$ rails s
```

Oh no! We got an error :(

`FATAL: database "todos_development" does not exist`

CFU: Why are we getting this error?

Let's go ahead and setup our database.

`$ rails db:setup`

`$ rails db:migrate`


* Create the route in our routes.rb

``` ruby
get 'todos' => 'todos#index'
```

* Create the `todos_controller.rb` controller

``` ruby
rails generate controller Todos index
```

This is Rails magic at work.  Not only will it create a `todos_controller.rb` with an `def index` action, but it will also create a `index.html.erb` in our view folder.

The `.erb` on the end of our view file stands for _embedded ruby_.  It allows us to insert Ruby code into our views by using these characters.

* `<%=` will designate where your Ruby code begins
* `%>` will designate where your Ruby code ends

Here's an example:

``` ruby
<%= @user.name %>
```

* Add a message instance variable to our `todos_controller.rb`

```ruby
class TodosController < ApplicationController
  def index
    @message = "Hello World"
  end
end
```

* Embed `@message` in our `index.html.erb`

```ruby
<h1>Todos#index</h1>
<p>Find me in app/views/todos/index.html.erb</p>
<br/>
<h1><%= @message %></h1>
```

* Make sure the server is running and go to `http://localhost:3000/todos`

And there it is! Our first "Hello World" in Rails.  Next we have to create a Model for our todos.

* Create the `todo.rb` model

```ruby
rails generate model Todo
```

We should see this in our terminal.

```bash
$ rails generate model Todo
Running via Spring preloader in process 86639
      invoke  active_record
      create    db/migrate/20170418162709_create_todos.rb
      create    app/models/todo.rb
      invoke    test_unit
      create      test/models/todo_test.rb
      create      test/fixtures/todos.yml
```

Look at all the awesome stuff we auto-magically get when we generate a new model.  That one command will create

1) A new migration file that will auto-generate the Schema.

2) A new Model file - `todos.rb`

3) A test file for our new Model - `todo_test.rb`


Let's open our schema.rb before we run this next step.

* Run the migration file

```bash
$ rails db:migrate
```

We automatically get our `created_at` and `updated_at` fields in our table.

CFU: What did we have to do for this functionality when using Mongoose?

* Add a column to the Todos table

```bash
$ rails generate migration AddContentToTodos content:text
```

CFU: What's our next command in the terminal?

<br>
<br>

* Run db:migrate to update the table with the new column

```bash
$ rails db:migrate
```

**Always restart your server after a migration!**

If you want to create a model with specific fields, then you would use a command similar to this.

```bash
$ rails generate model Todos content:text priority: number
```

* Access Rails console and create a new Todo

```bash
rails c
```
```ruby
Todo.create(content: "Go to GA")
Todo.create(content: "Learn some Rails")
```

CFU: How would I show all the todos in our `index.html.erb`?

<br>
<br>

* Set an instance variable `@todos` equal to all the todos

```ruby
class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end
end
```

* Iterate through the todos in our view

```html
<% @todos.each do |todo| %>
  <h1>TODO: <%= todo.content %></h1>
<% end %>
```


## ActiveRecord Associations and Validations

We have a full working app, but we would like to store these todos in their own categories.  We need to create a new model and associate it with todos.

CFU: What command do we use to create a new model?

<br>
<br>

* Create a new model Category, and run the migration

```bash
$ rails generate model Category name:string
$ rails db:migrate
```

In this case, we want to store todos in specific categories.  So, **Category has many Todo, and Todo belongs to Category**.

CFU: What field do we need to add to Todo?

<br>
<br>

* Add a `category_id` to the todos table

```bash
$ rails generate migration AddCategoryIdToTodos category_id: string
$ rails db:migrate
```

* Restart the server after running a migration!

```bash
$ rails s
```

* Create a seed file in `seeds.rb`

```ruby
Todo.delete_all
Category.delete_all

grocery_category = Category.create(name: "grocery store")
sports_category = Category.create(name: "sports")

Todo.create(content: "Grab some milk", category_id: grocery_category.id )
Todo.create(content: "A dozen bananas", category_id: grocery_category.id)

Todo.create(content: "Play soccer", category_id: sports_category.id)
Todo.create(content: "Shoot hoops", category_id: sports_category.id)
```

* Run `seeds.rb`

```bash
$ rails db:seed
```

### Associations

* Add ActiveRecord Associations to our models

```ruby
class Category < ApplicationRecord
  has_many :todos
end
```

```ruby
class Todo < ApplicationRecord
  belongs_to :category
end
```

Let's go through some cool examples with associations

```ruby
category = Category.first
category.todos
category.todos.create(content: "wow a new todo!")
```

```ruby
todo = Todo.first
todo.category
todo.category.update_attributes(name:"Changing the category name!")
```

### Validations

Let's add some validations to our models.  It will allow us to restrict what information is allowed in our database.  For example, `content` presence is required when we create a new todo.

* Only allow todos to be created if the content (1) is present and (2) is equal to or more than 5 characters long.

```ruby
class Todo < ApplicationRecord
  belongs_to :category

  validates :content, presence: true, length: { minimum: 5 }
end

```


## Finishing Up


Now that we have categories associated with todos, we can create a index page for categories.  When we click on a category it will lead to an index page for todos under that category.

* Create a new route for `categories#index`

```ruby
get 'categories' => 'categories#index'
```

* Create `categories_controller.rb` with an index method

```bash
$ rails generate controller Categories index
```

* Set an instance method equal to all categories in the controller

```ruby
class CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end
end
```

* Iterate through the categories in the view, use `link_to` instead of `<a></a>` tags.  Pass the category id to `todos#index`

```ruby
<h1>Categories</h1>

<% @categories.each do |category| %>
  <p><%= link_to category.name, todos_path(category_id: category.id) %></p>
<% end %>
```

* Update the todos#index action

```ruby
class TodosController < ApplicationController
  def index
    @category = Category.find(params[:category_id])
    @todos = @category.todos
  end
end
```

* Update `todos.html.erb`

```ruby
<h1><%= @category.name.capitalize %> Todos</h1>

<% @todos.each do |todo| %>
  <h1>TODO: <%= todo.content %></h1>
<% end %>
```






