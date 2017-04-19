---
title: Rails Model Associations
type: lesson
duration: 60 min
creator:
    name: Marc Wright
    city: WDIR
competencies: Programming

---

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


### Objectives

_After this lesson, students will be able to:_

- Create a `one-to-many` relationship between 2 models
- Perform CRUD actions on two models using `rails console`
- Describe primary and foreign keys

### Preparation
*Before this lesson, students should already be able to:*

- Access and use `rails console`
- Perform CRUD actions on one model


## Framing: Review One-to-Many Relationships (5 min)


Previously, we created a Rails app using an `Artist` as our model. In this lesson, we're gonna add a `Song` model that will belong to the `Artist`. Since an `Artist` typically has many songs we're gonna create a One to Many Relationship between the two models.

**YOU DO**- What are some other examples of one-to-many relationships that you can think of?

* A `Post` has many `Comments`
* A `Album` has many  `Songs`
* A `Movie` has many `Actors`

In our Muse app, an `Artist` will have many instances of  `Song`.
We need a way to represent this type of many to many relationship!

## Primary and Foreign keys

Here is an example of a one-to-many relationship from the Rails Docs. 


![](screenshots/rails-has-many-diagram.png)
<br>

Note that both authors and books each have their own `id` field. These are primary keys. 

Now, how can we relate the books that belong to a given author? We add an `author_id` field, or foreign key, to the books table. The `author_id` will be the `id` of the author who wrote  the book.


<br>

### Generating the Model / Migration (5 min)

We can generate the `Song` model just like our `Artist` model! If we specify the attributes (i.e.
columns on the command line, Rails will automatically generate the correct migration for us.)

**YOU DO** - Based on what we covered this morning in creating an `Artist` model... what would be the rails command to create a `Song` model with title, genre, and length attributes?

1. From the command line, generate the `Song` model:

    ```bash
    rails g model Song artist:references title genre
    ```
    - We'll see shortly that `artist:references` will add a foreign key field of `artist_id` to our songs table


2. Run `rails db:migrate`. This will generate a Song model, with `artist_id`, `title`, and `genre` columns. We can look at `db/schema.rb` file to confirm:

    ![](screenshots/schema.png)



<br>
### Adding the Active Record Relationships (5 min)

We need to update our models to indicate the associations between them. For Muse, our models should look like so:

```ruby
# app/models/artist.rb
class Artist < ApplicationRecord
  has_many :songs
end

# app/models/song.rb
class Song < ApplicationRecord
  belongs_to :artist
end
```

Adding `has_many :songs` will complete the one-to-many relationship.

#### Dependent Destroy

What happens if we delete an `Artist`? The songs remain. This doesn't make sense right? If we delete an Artist then their Songs should be deleted too? Rails has a way to add this functionality:

```ruby
# models/artist.rb
class Artist < ApplicationRecord
  has_many :songs, dependent: :destroy
end
```


<br>

## Seed some Songs

Cool, like before, let me give you some song data to seed your database with songs:

1. Add this above your Artist seeds in db/seeds.rb:

    ```ruby
    Artist.destroy_all
```

1. Add this below your Artist seeds in db/seeds.rb:

    ```ruby
    Song.create(artist_id: 1, title: "Umbrella", genre: "Pop")
Song.create(artist_id: 2, title: "Shake It Off", genre: "Pop")
Song.create(artist_id: 3, title: "Pressure", genre: "Rock")
Song.create(artist_id: 4, title: "Hotline Bling", genre: "Rap")
Song.create(artist_id: 5, title: "Lemonade", genre: "R&B")
```
3. `rails db:seed`

4. Cool, let's go into `rails c` and make sure that our database has our Songs:

    ```ruby
    Song.all

    # Let's checkout  all of Rihanna's songs
    rihanna = Artist.first
    rihanna.songs
    ```
5. get add and `git commit -m "added has_many songs to artists and seeded the songs"`

<br>

![wedo](http://i.imgur.com/6Kce0ca.png)

CRUD: Let's try it on our Song model
------------------------------

## Create

### `.new` + `.save`

The cool thing about Active Record relationships is that now we can create a new `Song` directly through the `Artist` it belongs to:

```ruby
# Let's add the song Diamonds to Rihanna's songs array
rihanna = Artist.first
diamonds = rihanna.songs.new
diamonds.title = "Diamonds"
```
To save our instance to the database we use `.save`:

```ruby
diamonds.save
rihanna.songs
```


<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

Create your a Song for an Artist of your choice using `.new` and `.save`.
<br>

### `.create`
The `create` method will both instantiate and save a new record into the database:

```ruby
rihanna.songs.create(title: "Work")
```
The coolest part of this is that Active Record will add the appropriate **foreign key** `artist_id` field into the Song.

Also, what if you don't know the id of the Artist?

```ruby
only_girl = Song.create(artist_id: rihanna.id, title: "Only Girl")
```

<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

Add a Song to your Artist using `.create`

<br>

## Read

```ruby
# return a collection with all songs for an Artist
rihanna.songs
```

```ruby
# return the rihanna song titled "Diamonds"
rihanna.songs.find_by_title("Diamonds")

or

rihanna.songs.find_by(title: "Diamonds")
```

Or, what if we know the song title and want to find out who the Artist is?

```ruby
Song.find_by_title("Diamonds").artist.name
#=> Rihanna
```

Note... when we want to return all the artists or songs we use uppercase, as in `Song.all`. This is because we're asking for all the instances of the `Song` model/class.

When we want to access the songs for a given artist we use lowercase and plural, as in `rihanna.songs`.

<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

- Find the Artist that sings "Shake It Off"


You can learn more about querying an Active Record model in the [Active Record
Query Interface](http://guides.rubyonrails.org/active_record_querying.html) guide.

<br>

## Update

```ruby
rihanna = Artist.first
diamonds = rihanna.songs.first
diamonds.update(genre: "Gospel")
```
<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

- Choose a Artist and update the attributes of a Song
<br>


## Delete

Likewise, once retrieved, an Active Record object can be destroyed which removes it from the database. 

Let's delete a `Song`:

```ruby
diamonds = rihanna.songs.first
diamonds.destroy
rihanna.songs   #=> confirm that the song has been deleted
```

Remember the code `dependent: :destroy` that we added to the `Artist` model? That bit of code tells Active Record that if we delete an `Artist` it should also delete all the songs that belong to that `Artist`.

Let's see it in action. When we delete Rihanna all of her songs are deleted also.

```ruby
Artist.find_by_name("Rihanna").destroy

Artist.count
Song.count
```

Check out your `rails c` and note that Active Record is deleting both the Artist and her Songs.
<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

- `delete` an Artist


<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)
## Independent Practice (15 mins)

Using Active Record Associations:

- Create 3 new Songs for an Artist of your choice
- Update a song's attribute
- Delete a song you created


<br>

![Imgur](http://i.imgur.com/wPefQjh.png)
## Conclusion (5 mins)

In this lesson we:

- Created a `Song` model for our Muse app
- Established a one-to-many relationship between `Artist` and `Song`
- Practiced CRUD with Active Record associations

<br>

![Imgur](http://i.imgur.com/WzTTdIe.jpg)

## Labtime

Add onto the `books-app` you started yesterday that was based on the previous lessons. Go through this lesson and instead of `Song` add a `Book` model to your app.
