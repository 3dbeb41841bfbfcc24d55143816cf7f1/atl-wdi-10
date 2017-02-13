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

# Rails Active Record Intro

## Objectives

_After this lesson, students will be able to:_

- Describe Active Record and ORMs
- Describe database tables and migrations
- Explain primary and foreign keys
- Understand how to query a database using Active Record
- Perform CRUD actions on one model using `rails console`
- Create migrations to change the database schema

## Preparation
*Before this lesson, students should already be able to:*

- Understand Rails routing
- Describe the Rails framework

<br>

## Finished App - WDIR MUSE
Over the next few lessons we're gonna build an app that tracks Artists and Songs. Here's a deployed version of [WDIR Muse](https://wdir-muse.herokuapp.com/)

<br>
## Concepts + Definitions

### Turn and Talk (15 min)
In groups, do a Google search the following topics:

- Relational Databases
- SQL (Structured Query Language)
- Postgresql
- ORM (Object Relational Mapper)
- Active Record

I'll ask each group to explain one in their own words to the class.

### Relational Databases (RDBMS)
RDBMS stand for __relational database management system (RDBMS)__. You can think of a relational database as a fancy Excel spreadsheet. Here's what our **Artist** Model will look like:


![](https://i.imgur.com/hFKvfDB.png)

- In this example, each **Model** in our app would have it's own tab in the spreadsheet called a **Table**.
- Each **Row** in the spreadsheet is an **instance** of the Model and is assigned an `_id`.
- The `_id` is called a **Primary Key**. No record may have the same `_id`. We'll talk more about Primary and Foreign Keys in our associations lesson. 
- Each **column** is a **Field** for that Model.

**NOTE** - Database tables are **plural** (e.g.- "artists") because they contain multiple records/instances of the **singular** `Model`.


<br>
### SQL (Structured Query Language)
Relational Databases are also commonly referred to as **SQL** databases. [**SQL**](https://en.wikipedia.org/wiki/SQL), or Structured Query Language is a special-purpose programming language designed for managing data held in a relational database management system (RDBMS)

**QUESTION** - Can you name some other Relational or SQL Databases? 

Writing SQL queries can be pretty confusing, but luckily, we have a tool that will manage the SQL database queries for us. We'll actually be able to observe the SQL queries that Active Record builds for us in our Rails server console.

<br>

### ORM (Object Relational Mapper)
- *Official* [wikipedia definition](https://en.wikipedia.org/wiki/Object-relational_mapping). A programming technique for converting data between incompatible type systems in object-oriented programming languages.

> Thats sounds like a lot of 5 dollar words, but what does it really mean?

We need a way to encapsulate our databases into objects that we can talk to on our server. ORM's serve that purpose. Remember those tables we created in SQL? Well, its an object represented on our server now. That's what ORM's do.

More concretely ORM's:

- 'Map' (translate) objects to rows in our DB (and vice versa)
- **Conventions**:
  - 1 table per Model/Class/Entity
  - table name is model name pluralized
  - each column is an attribute for that model
- Table associations are handled using foreign keys

It just so happens you will be learning one of the best ORM's on the market (Active Record). It has some of the best documentation and best syntax(because ruby is awesome) the industry has to offer.

<br>
### What is Active Record?

http://guides.rubyonrails.org/active_record_basics.html

**CFU** -  What does MVC stand for?

**Active Record** is the **M** in **MVC** - the Model - which is the layer of the system responsible for representing business data and logic. In Rails, a Model is a fancy word for a Class. 

Active Record will be a "translator" between what data the user requests and our database. It'll generate the complex SQL queries for us.

To use a restaurant metaphor:

- The user is the customer
- Active Record is the waiter that takes our request to the kitchen
- The kitchen is the database. It contains the ingredients (data) for the order we've requested

<br>
### Migrations and Schema

Rails and Postgresql are separate entities that live in different locations on your computer.

Our `schema.rb` file represents the current state of our database. It's a way to see what our database looks like under the hood (tables, fields, datatypes).

Anytime we want to change or update something in our database we need to run a **migration** which will update our **schema.rb** file and our database. For example, we'd do this when:

- We add a new Model to our app
- We want to add, rename, or delete a field.
- If we want to change a datatype.

<br>

![wedo](http://i.imgur.com/6Kce0ca.png)

## Create our `Artist` Model

Let's kick the tires with Rails, Postgresql and Active Record. We'll start building the data layer of our Muse app by creating an `Artist` model.

1. Make sure to `cd` into your Muse App directory. Some starter code is [here](https://github.com/marcwright/muse-wdir) if you want to clone. Be sure to pull the `muse-setup` branch. That's the starting point for this lesson.


2. `rails g model Artist name hometown img albums:integer`
	- This command will create a **migration file** that will let the database know about our new Model
3. Run `rails db:migrate`
	- This command will write the **migration** file information to our `schema.rb`. It'll tell our Postgresql database to create an `artists` table with the appropriate fields.


### Seed our database with artists

Let's seed our database with some Artists so we have some data to work with.

1. Copy and paste this data into your `db/seeds.rb` file:

	```ruby
  Artist.create(name: "Rihanna", albums: 6, hometown: "Barbados", img: "http://mccarthyamp.com/wp-content/uploads/2016/02/23445669273_bfc7c4062b_b.jpg")
Artist.create(name: "Taylor Swift", albums: 8, hometown: "Nashville", img: "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png")
Artist.create(name: "Billy Joel", albums: 14, hometown: "Long Island", img: "https://images-na.ssl-images-amazon.com/images/I/81RgoBLQOKL._SY355_.jpg")
Artist.create(name: "Drake", albums: 4, hometown: "Toronto", img: "http://images.complex.com/complex/image/upload/t_in_content_image/drake-thank-me-later-album-cover_o6ek33.jpg")
Artist.create(name: "Beyonce", albums: 6, hometown: "Houston", img: "http://www.fuse.tv/image/571c26a6017704456e00001b/816/545/beyonce-lemonade-album-cover-full.jpg")
```

2. Run `rails db:seed` from the command line to populate your database

3. Open a new Terminal tab and enter `rails c` to confirm that we have some data to work with.

    > `rails c` is shorthand for Rails Console. It's a Ruby environment that includes the Rails app code.
 
4. In `rails c`, type in `Artist.count` and confirm that you have 5 Artists.

![](https://i.imgur.com/OoyerVE.png)

Check out the SQL query that's built for us. That's Active Record magic.


<br>

![wedo](http://i.imgur.com/6Kce0ca.png)

CRUD for our Artist Model
------------------------------
<details>
<summary>What does CRUD stand for?</summary>
<br>
**CRUD** is an acronym for the four verbs we use to operate on data: **C**reate,
**R**ead, **U**pdate and **D**elete. **Active Record** automatically creates methods
to allow an application to read and manipulate data stored within its tables.

</details>

Before we create the controllers and views of our app we're gonna take a look at what Active Record is doing under the hood with our models. We're gonna take a look at the exact same code we're gonna put into our Rails controllers later on.


## Create

### `.new` + `.save`
Let's create an instance of the `Artist` object on the ruby side, but that does not save originally. Note the syntax for creating a `new` instance.

```ruby
adele = Artist.new(name: "Adele", hometown: "London", albums: 3, img: "https://pbs.twimg.com/profile_images/657199367556866048/EBEIl2ol.jpg")

adele.name 		#=> "Adele"
adele.hometown 	#=> "London"
```
To save our instance to the database we use `.save`:

```ruby
adele.save

adele
# We know that the Artist has been saved because it now has id:, created_at: and updated_at: fields.
```

<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

Create your a Artist using `.new` and `.save` and add to the database.

<br>

### `.create`
**YOU DO** - The `create` method will both instantiate and save a new record into the database:

```ruby
Artist.create(name: "Sia", albums: 5, hometown: "Sydney", img: "https://pbs.twimg.com/profile_images/692921625801592833/sny-shV1.png")
```

<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

Add an Artist to your database using `.create`

<br>

## Read

Active Record provides a rich API for accessing data within a database. Below
are a few examples of different data access methods provided by Active Record.

```ruby
# return a collection of all students
artists = Artist.all
```

```ruby
# return the first student
first_artist = Artist.first
```

```ruby
# return the first user named Adele
adele = Artist.find_by_name('Adele')

# or
adele = Artist.find_by(name: 'Adele')

# or find by id
taylor = Artist.find(2)

# '.where' will return all artists named Adele who live in London
adele = Artist.where(name: 'Adele', hometown: 'London')
```

<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

- Find the Artist with 14 albums
- Find the Artist with an `id` of 4


You can learn more about querying an Active Record model in the [Active Record
Query Interface](http://guides.rubyonrails.org/active_record_querying.html) guide.

<br>

## Update

Once an Active Record object has been retrieved, its attributes can be modified
and it can be saved to the database.

```ruby
britney = Artist.find_by_name('Adele')
britney.name = 'Britney'
britney.save
```

A shorthand for this is to use a hash mapping attribute names to the desired
value, like so:

```ruby
adele = Artist.find_by_name('Britney')
adele.update(name: 'Adele')
```
<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

- Choose a Artist and update their `name` and `hometown` attributes

<br>


## Delete

Likewise, once retrieved an Active Record object can be destroyed which removes it from the database.

```ruby
adele = Artist.find_by_name('Adele')
adele.destroy
Artist.all 	#=> confirm she's been deleted
```
<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

- `delete` an Artist

## Independent Practice (15 mins)

- Create 3 new Artists
- Update an Artist's attribute
- Delete an Artist you created

<br>

## `git commit`
	
- `git add -A`
- `git commit -m "created the artist model seeded the database"` 

<br>

##Migrations
A **migration** is a set of database instructions. Those
instructions are Ruby code, which migrates our database from one state
to another. Essentially they describe database changes.

Migrations are a way for us to manage the creation and alteration of our database tables in a structured and organized manner.

Each migration is a seperate file, which Rails runs for us when we instruct it. Rails keeps track of what's been run, so changes don't get attempted more than once.

We describe the DB changes using Ruby, and it doesn't matter which DB engine we use - Rails has connectors for each different DB engine we might use, which translates the ruby structure into the appropriate DB commands.


<br>

#### Modify the existing DB with another Migration

Rails gives us some help to generate migration files - we can list the fields and their types in the generate command, and if we name the migration appropriately, Rails even guesses the name of the table.

- by putting Add....To.... Rails knows we are adding these columns to which table, and the migration can be written automatically
- Let's add an `on_tour` column to our artists table. Generate a new migration file named `AddOnTourToArtists`

`rails g migration AddOnTourToArtists on_tour:boolean`

- This will create a migration file in our `RAILS_ROOT/db/migrate` folder. The purpose of this file is to describe what actions we want to take to move our DB schema from its current state to the new state, and also, what would need to happen to move the migration back to the old state again (should we need to).

> As a rule, we don't ever modify schema.rb manually. We always create a migration to change the schema



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

`rails db:migrate`

We can check that the migration ran successfully.

`rails db:migrate:status`


#### Schema.rb

When migrations run, Rails also updates the `schema.rb` file - it contains the migration commands combined into each table. The schema is the snapshot of your current database tables and fields.

#### Rename a column

Create the migratioin file:

```ruby
rails g migration RenameOnTourToTouring
```

Update the file like so:


```ruby
# rename_column :table_name, :old_name, :new_name
def change
  rename_column :artists, :on_tour, :touring
end
```

Run `rails db:migrate`

#### Removing columns from tables

We can use the same naming convention as create to automatically generate the migration file:

```ruby
rails g migration RemoveTouringFromArtists touring:boolean
```

#### Rollbacks

We can undo the previous migration with:

`rails db:rollback`

  - Beware:
    - don't rollback migrations which have been run on other machines (essentially, if they're in source code control)
    - instead, write a new migration to undo (remove) the changes

- We can rollback to a specific migration like so:
 
`rails db:migrate VERSION=20170209211353`

- Run `rails db:migrate` to get back to the current version of your schema. This command will run all the migrations on the migration folder.

_Why not just delete the migration file directly?_

<br>

![Imgur](http://i.imgur.com/wPefQjh.png)

## Conclusion (5 mins)

In this lesson we dove into some dense topics:

- Relational Databases
- SQL (Structured Query Language)
- Postgresql
- ORM (Object Relational Mapper)
- Active Record

We also created an `Artist` model for our Muse app. In the next lessons we're gonna add a second model (`Song`) and create an Active Record association with `Artist`. We'll also add views and forms to our Rails app so that we can perform CRUD operations in the  browser.


<br>

![Imgur](http://i.imgur.com/WzTTdIe.jpg)

## Labtime

Let's practice what we just did! You're gonna create an app using `Author` and `Book` as the models. 

- Walk back through the previous [Muse Set-up Lesson](../../w09d01/instructor_notes/rails-muse-app-setup-and-deploy.md) and this lesson. 
- Create a new Rails app called `books-app`. Instead of `Artist` you'll create an `Author` model. 
- Come up with 4 fields that you want your author table to have (e.g.- publisher, genre, birthdate, first_name, last_name, pen_name)
- You'll need to create your own seed data for your authors.
