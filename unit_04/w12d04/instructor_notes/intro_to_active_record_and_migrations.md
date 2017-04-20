[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Rails Active Record Intro

***

### **Framing: What is an ORM and why do we need it?**
You know how to manipulate a database with SQL, and you know how to manipulate objects in Ruby.

But Ruby objects don't persist. How do we store data from a Ruby object to an SQL table? How do we pull SQL data into a Ruby object?

[Object Relational Mapping](https://en.wikipedia.org/wiki/Object-relational_mapping)  - _What was Mongoose?_

<br>

**Learning Objectives**

  _Be able to create SQL tables and perform CRUD operations on them using ActiveRecord._

  <details>

  <summary></summary>

  - Use Rails generators to create models and migrations.
  - Run generated migrations to create tables in SQL.
  - Seed the db using ActiveRecord's `.create` method.
  - Perform CRUD operations on objects using ActiveRecord's methods.
  </details>



## SQL vs ActiveRecord

Given the SQL table below, how would you perform the following CRUD operations?

|Animals||||
|--|--|--|--|
|**id**|**name**|**age**|**type**|
|1 |Garfield|35 |Cat |
|2 |Brian|7 |Dog |
|3 |Scooby Doo|134 |Dog |
|4|Nibbler|100034|Niblonian|


#### Create
Add a new row to the table.

<details>

<summary>
  **SQL**
</summary>

  ```
  INSERT INTO animals (name, age, type) VALUES ('Snowball 2', 12, 'Cat');
  ```
</details>

<details>

<summary>
  **ActiveRecord**
</summary>

  ```ruby
  Animal.create(name: 'Snowball 2', age: 12, type: 'Cat')
  ```
</details>

***

#### Read
Get the row with an ID of 2.

<details>

<summary>
  **SQL**
</summary>

  ```
  SELECT (*) FROM animals WHERE id = 2;
  ```
</details>

<details>

<summary>
  **ActiveRecord**
</summary>

  ```ruby
  Animal.find(2)
  ```
</details>

***

#### Update
Change Scooby Doo's age to 14.

<details>

<summary>
  **SQL**
</summary>

  ```
  UPDATE animals SET age = 14 WHERE name = 'Scooby Doo';
  ```
</details>

<details>

<summary>
  **ActiveRecord**
</summary>

  ```ruby
  Animal.find_by(name: 'Scooby Doo').update(age: 14);
  ```
</details>

***

#### Delete
Delete Garfield.

<details>

<summary>
  **SQL**
</summary>

  ```
  DELETE FROM animals WHERE name = 'Garfield';
  ```
</details>

<details>

<summary>
  **ActiveRecord**
</summary>

  ```ruby
  Animal.find_by(name: 'Garfield').delete;
  ```
</details>

<details>

<summary>
  _Note_
</summary>

  ```ruby
# Why not do this?
Animal.where(name: 'Garfield').destroy;
  ```

<details>

<summary></summary>

  ```ruby
  Animal.where(name: 'Garfield') # => returns a collection
  Animal.find_by(name: 'Garfield') # => returns the first match
  ```
</details>
</details>

<br>

## What is ActiveRecord?
_ActiveRecord is to SQL as Mongoose is to Mongo_

It allows you to work with Ruby objects in Ruby code, while persisting the data in an SQL database.


| Person ERD | \\ | People Table | | | |
| --- | - | ---- | ---- | --- | --- |
| **Name:** String | \\ | **id** | **name** | **age** | **occupation** |
| **Age:** Integer | \\ | 1 | Terry | 54 | Pilot |
| **Occupation:** String | \\ | | | | |

<br>

### Accessing attributes
Using ActiveRecord in a model is super simple, it just needs to inherit `ActiveRecord::Base`.
```ruby
class Person < ActiveRecord::Base
end
```

ActiveRecord will assume that the table name is the plural version of the model name.

```ruby
Person.find(1)
# => SELECT (*) FROM people WHERE id = 1;

Person.where(age: 50, occupation: 'Chef')
# => SELECT (*) FROM people WHERE age = 50 AND occupation = 'Chef';

Person.count
# => SELECT COUNT(*) FROM people;

Person.where(occupation: 'Chef').select(:age)
# => SELECT people.age FROM people WHERE people.occupation = 'Chef'
```

ActiveRecord handles mapping the data from columns in the SQL table to attributes on the Ruby object.

```ruby
terry = Person.find(1)

puts terry.name # => 'Terry'
puts terry.age # => 54
puts terry.occupation # => 'Pilot'
```

Remember Inheritance? When a model inherits from ActiveRecord::Base, it gets a lot of methods that allow it to interface with your SQL database. It provides getters and setters for all the columns in your table.

<br>

### Changing data from Ruby

There are a couple ways to deal with creating, updating, and deleting.

```ruby
# Creating
Person.create(name: 'Someguy', age: 25)

dude = Person.new
dude.name = 'Someguy'
dude.age = 25
dude.save
```

```ruby
# Updating
Person.find_by(name: 'Someguy').update(name: 'Barry')

barry = Person.find(2)
barry.name = 'Barry'
barry.save
```

```ruby
# Deleting
Person.find_by(age: 25).delete

dude = Person.find(2)
dude.destroy
```

<br>

### Creating Tables
ActiveRecord provides Migrations to allow us to create and edit our database schema. Rails provides us with command line generators to quickly create Migrations for us.

```
$ rails generate migration CreatePeople name:string age:integer occupation:string
```

This creates a Migration file that looks like this:
```ruby
class CreatePeople < ActiveRecord::Migration[5.0]
  def change
    create_table :people do |t|
      t.string :name
      t.integer :age
      t.string :occupation
    end
  end
end

```
Because we passed in the name `CreatePeople` to the generator, ActiveRecord makes the assumption that this migration is meant to create a table called 'people'.

Migrations essentially describe a change to the database schema. In this example, that change is the creation of a new table called 'people'.

The equivalent SQL might look something like this:
```
CREATE TABLE people (
  id INT SERIAL PRIMARY KEY,
  name VARCHAR,
  type INT,
  occupation VARCHAR
);
```
Notice that the SQL example has a primary key called `id`. ActiveRecord automatically creates a primary key called `id` and makes it serial.

We can run our Migrations by calling:
```
$ rake db:migrate
```






## Doing stuff with ActiveRecord
Install Rails.
```
gem install rails
```
Create a new Rails app.
```
rails new active_record_intro
```
Create a model.
```
rails g model ModelName attribute:type attribute:type...
```
Rails' model generator creates a model file and a migration with one command. After running the migration, we can now start creating data to save in our new table.

```ruby
ModelName.create()
```

So far we've only seen how to create tables with ActiveRecord, what happens when we need to add or remove columns from an existing table?

Sometimes you'll need to use raw SQL along with ActiveRecord to get what you want:

```ruby
Author.joins("JOIN books ON books.author_id = author.id")
```

## Exercise
[Libary SQL](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/tree/master/unit_04/w11d04/student_labs/library_sql) but with ActiveRecord.

[Basic Queries](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/blob/master/unit_04/w11d04/student_labs/library_sql/basic_queries.sql)

[Advanced Queries](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/blob/master/unit_04/w11d05/instructor_notes/sql_advanced_sol.sql)



## Step by step
If starting a Rails app from scratch, you can create a boilerplate Rails app with:
```
$ rails new project_folder_name
```

You can use a Rails generator to create your model and migration files with one command.
```
$ rails g model Animal name:string age:integer is_alive:boolean
```

You should see it output something like this:
```
  invoke  active_record
  create    db/migrate/20170419171600_create_animals.rb
  create    app/models/animal.rb
```

The file `db/migrate/20170419171600_create_animals.rb` is your migration file, it should look something like this:
```ruby
class CreateAnimals < ActiveRecord::Migration[5.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.integer :age
      t.boolean :is_alive

      t.timestamps
    end
  end
end
```
[Read more about migrations here](http://guides.rubyonrails.org/active_record_migrations.html)

The file `app/models/animal.rb` is your model file. It should look like this:
```ruby
class Animal < ApplicationRecord
end
```

You can run your new migration with:
```
$ rails db:migrate
```

If it runs successfully, you should see this output:
```
== 20170420132333 CreateAnimals: migrating ====================================
-- create_table(:animals)
   -> 0.0047s
== 20170420132333 CreateAnimals: migrated (0.0048s) ===========================
```

Now you should be able to open up a rails console with `rails c` in your command line.
Try creating a new Animal like so:
```ruby
2.2.2 :001 > Animal.create(name: 'Rex', age: 4, is_alive: true)
```
