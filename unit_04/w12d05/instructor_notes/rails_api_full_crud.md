---
title: Rails Routes, Views, Controllers, Forms
type: lesson
duration: 60 min
creator:
    name: Marc Wright
    city: WDIR
competencies: Programming

---

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Rails API Routes + Controllers

## Objectives
- Add index, show, new, create to our app

## Prerequisites

- Understand and use `rails console`


##Intro

In the previous lessons we created `Artist` and `Song` models and relationships. Up to this point we did all of our work in `rails c`. 
Up to this point in our Muse app, we've worked with the **Model** or data layer. Now we're gonna add some **Controllers** to request/respond with JSON data via our API.

### Set-up

Make sure to `cd` into your Muse App directory. Some starter code is [here](https://github.com/marcwright/muse-wdir) if you want to clone. Be sure to pull the `song-model` branch. That's the starting point for this lesson.

<br>

## Rails API Resource Routes

http://guides.rubyonrails.org/routing.html

First, we need to add some routes so our Angular front-end can communicate with our rails back-end. Here are the routes we'll need for an Artist:

- **Index (GET)** - Renders all of the artists
- **Show (GET)** - Renders one artist
- **Create (POST)** - Saves the artist to the database then redirects. Create has no view. 
- **Update (PATCH)** - Updates the artist we just edited. Update has no view.
- **Destroy (DELETE)** - Deletes an artist

Note that we don't need `new` or `edit` routes since they merely contain a form in a view. We only need the 5 routes above for our CRUD API. Now, we could write our all of our routes manually, but Rails give us a really handy helper called `resources` that will generate the routes above auto-magically. Let's add `resources :artists` to the `config/routes.rb` file.

```rb
Rails.application.routes.draw do
  resources :artists
end
```

This tells Rails to build 5 CRUD routes for the artists resource. If you run `rails routes` in the Terminal you can view the details.

<br>

![](https://i.imgur.com/IuZt4e4.png)

As you can see, each route consists of:

- an **HTTP Verb**
- a **path**
- a **controller** 
- the specific **action** (or method) inside the controller that manages that route

<br>

## Rails API Artists Controller

Now that we have our routes squared away, let's create a controller to manage the artist data. We could create the file manually, but Rails has a helpful command to bootstrap the file for us:

`rails g controller artists`

This will create an `app/controllers/artists_controller.rb` file. You'll see this inside:

```rb
class ArtistsController < ApplicationController
end
```

We're gonna start filling in the controller with our API methods.

<br>

## ArtistsController Index Method

Earlier we ran `rails routes` to check out the details of our 5 routes. We know that to get all the artists, we'll send a HTTP `GET` request to our app at "/artists" which will direct us to the `ArtistsController` and the `index` action.

```ruby
class ArtistsController < ApplicationController
    
    def index 
    	artists = Artist.all  
    	
    	render json: artists
    end
    
end
```

Can you guess what this code is doing? We're using the active record method `.all` to query the database for all the artists and assigning them to an `artists` variable. Then, we're responding with the artists json data.

Fire up your server with `rails s`, open Postman to test out the `localhost:3000/artists` endpoint.

<br>

![](https://i.imgur.com/xv57Vbt.png)

<br>

## ArtistsController Show Method

Let's add a `show` method to `artists_controller.rb`. We also need to grab the artists songs. How did we do this in `rails c`?

```ruby
def show
    artist = Artist.find(params[:id])

    render json: artist
end
```

Test it out in Postman

<br>

## ArtistsController Create Method

```ruby
# POST /artists
  def create
    artist = Artist.new(artist_params)

    if artist.save
      render json: artist, status: :created, location: artist
    else
      render json: artist.errors, status: :unprocessable_entity
    end
  end
  
  ...
  
  private
  
    # Only allow a trusted parameter "white list" through.
    def artist_params
      params.require(:artist).permit(:name, :hometown, :img, :albums)
    end
```

Rails takes security very seriously. For the create method we'll create a private method `artist_params`. Rails will expect an artist object and will only permit the params we pass in.

No view for this action! Why?

Test it out in Postman.

<br>

## ArtistsController Update Method

```ruby
# PATCH/PUT /artists/1
def update
   if artist.update(artist_params)
     render json: artist
   else
     render json: artist.errors, status: :unprocessable_entity
   end
end
```

<br>


## ArtistsController Delete Method


```ruby
def destroy
	artist = Artist.find(params[:id])
	artist.destroy
	artists = Artist.all
	
	render json: artists    
end
```

<br>

## ArtistsController Create Song Method
We're not gonna add full CRUD to our `Song` resource (we'll leave that to you). However, we are gonna give a user the ability to create a new `Song` for an `Artist`.

Let's create our songs new route in `routes.rb`

```ruby
post '/artists/:id/songs', to: 'artists#new_song'
```

We'll add this custom method in our Artist Controller

```ruby
class ArtistsController < ApplicationController

 def new_song
    puts params
    artist = Artist.find(params[:id])
    new_song = artist.songs.create({title: params[:title]})

    songs = artist.songs

    render json: {artist: artist, songs: songs}
  end

end
```

<br>

![Imgur](http://i.imgur.com/wPefQjh.png)
## Conclusion (5 mins)

Hooray! So over the past 4 lessons we've accomplished the following:

- Installed Postgresql
- Created a new Rails app and added the Materialize gem
- Created Artist and Song models
- Set up a one-to-many relationship between Artist and Song
- Practiced our Active Record methods rails console with our seeded data
- Created 7 REST-ful routes for our Artist resource
- Created view partials
- Started REST-ful routes on our Song model

<br>

![Imgur](http://i.imgur.com/WzTTdIe.jpg)

## Labtime

- Go back and fix our navbar links
- Finish adding full CRUD to `Song`



