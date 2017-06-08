# Rails Active Record + Models + Migrations + Validations


## Objectives
By the end of today you should be able to...

* Describe Object Relational Mapping and Active Record are and how they are used in Rails.
* Understand how Active Record fits into the Model-View-Controller paradigm.
* Use Active Record models to manipulate data stored in a relational
  database.
* Generate models & migrations in Rails
* Use the rails console
* Add validations to our models

<br>

## Definitions

### Active Record

Active Record is the M in MVC - the
model - which is the layer of the system responsible for representing business
data and logic. Active Record facilitates the creation and use of business
objects whose data requires persistent storage to a database. It is an
implementation of the Active Record pattern which itself is a description of an
Object Relational Mapping system.

Active Record gives us several mechanisms, the most important being the ability
to:

* Represent models and their data
* Represent associations between these models
* Represent inheritance hierarchies through related models
* Validate models before they get persisted to the database
* Perform database operations in an object-oriented fashion.

###ORM
**ORM** stands for object relational mapping. ORM describes a software system that maps SQL queries and results into objects. **Active Record** is the ORM system that is used in Rails.

Object-Relational Mapping is
a technique that connects the rich objects of an application to tables in a relational database management system. Using ORM, the properties and relationships of the objects in an application can be easily stored and retrieved from a database without writing SQL statements directly and with less overall database access code.

###Models
**Models** are Ruby classes. They talk to the database, store and validate data, perform the business logic and otherwise do the heavy lifting.

### Naming Conventions

By default, Active Record uses some naming conventions to find out how the
mapping between models and database tables should be created. Rails will
pluralize your class names to find the respective database table. So, for
a class `Book`, you should have a database table called **books**. The Rails
pluralization mechanisms are very powerful, being capable to pluralize (and
singularize) both regular and irregular words. When using class names composed
of two or more words, the model class name should follow the Ruby conventions,
using the CamelCase form, while the table name must contain the words separated
by underscores. Examples:

* Database Table - Plural with underscores separating words (e.g., `book_clubs`)
* Model Class - Singular with the first letter of each word capitalized (e.g.,
`BookClub`)

| Model / Class | Table / Schema |
| ------------- | -------------- |
| `Post`        | `posts`        |
| `LineItem`    | `line_items`   |
| `Deer`        | `deer`         |
| `Mouse`       | `mice`         |
| `Person`      | `people`       |


###Migrations
A **migration** is a set of database instructions. Those
instructions are Ruby code, which migrates our database from one state
to another. Essentially they describe database changes.

Migrations are a way for us to manage the creation and alteration of our database tables in a structured and organized manner.

Each migration is a seperate file, which Rails runs for us when we instruct it. Rails keeps track of what's been run, so changes don't get attempted more than once.

We describe the DB changes using Ruby, and it doesn't matter which DB engine we use - Rails has connectors for each different DB engine we might use, which translates the ruby structure into the appropriate DB commands.

###Validations
**Validations** are used to ensure that only valid data is saved into your database. For example, it may be important to your application to ensure that every user provides a valid email address and mailing address.

<br>

##Let's get started!

Please type all this by hand so you're not blindly copying & pasting and you remember it better.

- Generate a new Rails project:

`rails new models_example --database=postgresql -T`

- This command tells Rails to use `postgresql` and adds the `pg` gem to our `Gemfile`. Otherwise, Rails uses `SQLite3` out of the box. The `-T` tells Rails to `--skip-test-unit` and skip a test suite installation.

- Enter your app's directory.

`cd models_example/`

- Create our database using a `rake` command.

`rake db:create`

<br>

## Generate a Model & a Migration

**WE DO:**

- Create a new model called `User` with `first_name` and `last_name`
properties that are strings. The convention is from Models to be capitialized which is why we did it here. Look at the output and try to decifer what files it just made for you:

```ruby

# This creates a models/User.rb and a db/migrations folder.
rails g model User first_name:string last_name
```
- **Note**... if we don't specify a data type Rails will assume `String` by default
- **Also**... if we made a mistake we can press the up arrow and run `rails d model User first_name:string last_name` to 'delete' the last migration.

- Next, we run `rake db:migrate` 
    - This command will run all the migration files in the migrations folder. It will migrate our database to create the **users** table and populate our `db/schema.rb`. The schema represents the current state of the database.
    - Migration files are timestamped



<br>

## Familiarize yourself with the Rails Console

**WE DO:**

To enter, go to terminal and in the root of your rails app type

`rails console` or `rails c`

(This is IRB with your rails app loaded in.)

Inside of your Rails console, instantiate a new User object. Note that the new object does not yet have an `id`. Why is this?

`irb(main):001:0> albert = User.new`

Set the name of the user.

```ruby
irb(main):002:0> albert.first_name = "Albert"
irb(main):002:0> albert.last_name = "Einstein"
```

Save your user to the database.

`irb(main):003:0> albert.save`

***Why doesn't `User.new` save the object to the database?***

Retrieve all of the users in the database and store then in a users variable.

`irb(main):004:0> users = User.all`

Exit the console.

`exit`

**YOU DO:** Add a new `User` to the database using the Rails console.



<br>

##Modify the existing DB with another Migration


- Rails gives us some help to generate migration files - we can list the fields and their types in the generate command, and if we name the migration appropriately, Rails even guesses the name of the table.

- by putting Add....To.... Rails knows we are adding these columns to which table, and the migration can be written automatically

- Let's also store a user's age along with their names. Generate a new migration file named `AddAgeToUsers`:

`rails g migration AddAgeToUsers age:integer`

- This will create a migration file in our `RAILS_ROOT/db/migrate` folder. The purpose of this file is to describe what actions we want to take to move our DB schema from its current state to the new state, and also, what would need to happen to move the migration back to the old state again (should we need to).



*How does Rails keep track of the order of our migrations and when they were created?*
> Note the timestamp in the filename. Also, the files are run from top to bottom (oldest to most recent).

- available column types:

```ruby
:binary
:boolean
:date
:datetime
:decimal
:float
:integer
:primary_key
:string
:text
:time
:timestamp
```

Run the migration so that the column is added to the table.

`rake db:migrate`

We can check that the migration ran successfully.

`rake db:migrate:status`

<br>
## Schema.rb

When migrations run, Rails also updates the `schema.rb` file - it contains the migration commands combined into each table.

The schema is the snapshot of your current database tables and fields.

<br>


#CRUD the users in the Console

#### Create
```ruby

# CREATE USERS
user = User.create(first_name: "Abraham", last_name: "Lincoln")
user = User.create(first_name: "Abraham", last_name: "Maslow")

# READ all your users with: 
User.all
```
* Note that `create` combines the `new` and `save` actions.

***Why do we need two actions to persist an object to the database?***


#### Update

```ruby
# READ - the number '1' passed into the find method corresponds to the id of the user it will find
user = User.find(1)

# SET then SAVE
user.first_name = "Taco"
user.save

**or**

# FIND
user = User.find(1)

# UPDATE... SET and SAVE with one method: 
user.update_attributes(first_name: "Taco")
```

#### Delete
```ruby
# FIND
user = User.find(1)

# DESTROY
user.destroy

# COUNT
User.all.count
```

#### More Finding
```ruby
User.all                            #=> returns an array of all the Users
User.find_by_last_name('Lincoln')   #=> returns the first user that meets the criteria
User.where(first_name: 'Abraham')   #=> returns an array of users that meet the criteria
User.first                          #=> finds first user
User.last                           #=> finds last user
```

**YOU DO:**

Add 2 new users to your database via new/save and 2 via create.

<br>



## Let's add another column to our Users table via Migration

As we saw earlier, Rails gives us some help to generate migration files - we can list the fields and their types in the generate command, and if we name the migration appropriately, Rails even guesses the name of the table:


**WE DO:**

- Let's add a `hometown` field to our `User` table:

```ruby
# Create the migration file
rails g migration AddHometownToUsers hometown

# Migrate the new columns to our Schema/Database
rake db:migrate
```
- by putting `Add...To...` Rails knows we are adding these columns to which table, and the migration can be written automatically. We'll also take a look at `Remove...From...`



**YOU DO:**

Add a new column to your `Users` table using a migration (`fav_food`, `nickname`, `pet`). Add the new attribute to each of your Users.

<br>


## Rollbacks

We can undo the previous migration with:

`rake db:rollback`

  - Beware:
    - don't rollback migrations which have been run on other machines (essentially, if they're in source code control)
    - instead, write a new migration to undo (remove) the changes

- We can rollback to a specific migration like so:
 
`rake db:migrate VERSION=20150213144026`

- Run `rake db:migrate` to get back to the current version of your schema. This command will run all the migrations on the migration folder.

**Why not just delete the migration file directly?**


<br>


## Removing columns from tables

We can use the same naming convention as create to automatically generate the migration file:

```ruby
rails g migration RemoveAgeFromUsers age:integer
```

<br>

## Rename a column

Create the migratioin file:

```ruby
rails g migration ChangeColumnName
```

Update the file like so:


```ruby
# rename_column :table_name, :old_name, :new_name
def change
  rename_column :users, :hometown, :pet
end
```

Run `rake db:migrate`

<br>

## Validations


Active Record allows you to validate the state of a model before it gets written
into the database. There are several methods that you can use to check your
models and validate that an attribute value is not empty, is unique and not
already in the database, follows a specific format and many more.

Validation is a very important issue to consider when persisting to database, so
the methods `create`, `save` and `update` take it into account when
running: they return `false` when validation fails and they didn't actually
perform any operation on database. All of these have a bang counterpart (that
is, `create!`, `save!` and `update!`), which are stricter in that
they raise the exception `ActiveRecord::RecordInvalid` if validation fails.
A quick example to illustrate:

```ruby
class User < ActiveRecord::Base
  validates :first_name, presence: true
end

user = User.new(last_name: "Wright")
user.valid?  # => checks validations and returns a boolean
user.save    # => rollback db
user.save!   # => specifies failure

user.first_name = "Marc"
user.valid?
user.save
```

You can learn more about validations in the [Active Record Validations
guide](http://guides.rubyonrails.org/active_record_validations.html).

#### Validate User Model

We set our [validations](http://guides.rubyonrails.org/active_record_validations.html) in our app/models/user.rb model.

Let's make sure each user definitely has a first name and a last name before they're saved.

```ruby
class User < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
end
```

* Type `reload!` into the console to update your model validations.
* Try saving a user with no first or last name and see what error is thrown.
* Try calling `valid?` on a new user.
* Walk through the Rails Docs and show that you can add error messages to your validations (e.g.- `too_short: "must have at least %{count} words"`).

**WE DO:**

Add the following validation to `user.rb`:

```ruby
validates :hometown, :first_name, :last_name, length: { minimum: 3, too_short: "must have at least %{count} words" }
```

or add `numericality` to the name fields:

```ruby
validates :age, numericality: true
```

**YOU DO:**

- Create a new `User` table column and add a validation. 
- Attempt to create a new `User` and make it fail. 
- Make the new `User` pass.


<br>

##Migrations/Validations Exercise
[Can be found here](https://github.com/ATL-WDI-Exercises/rails-active-record-migrations)

##Further Reading

* [Active Record Overview](http://guides.rubyonrails.org/active_record_basics.html)
* [Migrations](http://edgeguides.rubyonrails.org/active_record_migrations.html)
* [Validations](http://guides.rubyonrails.org/active_record_validations.html)
