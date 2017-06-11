# Rails Routing and Resources

## Learning Objectives (5 min)

* Review the relationship between HTTP requests and controller actions.
* Identify the role a router (`routes.rb`) plays in the Rails MVC model.
* Create routes for individual pages in Rails.
* Use resources to define routes for a RESTful controller.
* Use rake routes to display RESTful routes.
* Implement route names in Rails link helpers.
* Implement nested routes in a Rails application.
* Describe how path helpers work for nested routes.
* Implement form_for to build a form for a nested resource.


## The Router (5 min)

It's our good ol' friend the Rails rMVC diagram!

![https://camo.githubusercontent.com/b17f7f6527eb7d35474e24ed3ff299b8689615a0/687474703a2f2f692e737461636b2e696d6775722e636f6d2f5366324f512e706e67](https://camo.githubusercontent.com/b17f7f6527eb7d35474e24ed3ff299b8689615a0/687474703a2f2f692e737461636b2e696d6775722e636f6d2f5366324f512e706e67)

Q: Who can walk me through the rMVC pattern, highlighting where the router is and what it does?
---

> The router matches an HTTP request to a controller and action.
* The gateway to the rMVC (router / model / view / controller).
* So something like this `get "/artists/2"` is directed to the artists controller show action.
* Returns an error if the HTTP request is unrecognizable and/or does not match a controller action.


## Routes (10 min)

Fork/clone the [tunr_rails_routes_resources repo](https://github.com/ATL-WDI-Exercises/tunr_rails_routes_resources).  This provides starter code for this lesson. This repo also contains a solution branch containing all the code we'll be executing today.

You guys dove into Rails' `config/routes.rb` file in the MVC class and created individual routes for pages.

Q. What does a route to the index page for artists look like?
---

```rb
# index
get "/artists", to: "artists#index"
```

Q. And the show page for a song?
---
```rb
# show
get "/artists/:id", to: "artists#show"
```


## TPS: What happens when we visit "http://localhost:3000/"?  Why? (1/2/2, 5 min)

> A. We see a listing of Artists.

> Why? A "root" route is defined.  When we visit http://localhost:3000/, we trigger the index action in our Artists controller.

```rb
root to: "artists#index"
```


## What Routes? (10 min)

Q: How do we find out what routes our app handles requests for?
---

Rails docs are awesome!  Familiarize yourself with the command and the output.

http://guides.rubyonrails.org/routing.html#inspecting-and-testing-routes

> To get a complete list of the available routes in your application, visit http://localhost:3000/rails/info/routes in your browser while your server is running in the **development** environment. You can also execute the `rake routes` command in your terminal.

Here's some simplified output.  We've removed some data to focus on the HTTP Verb, the URI Pattern, and the Controller Action.
Note the "root" route and the duplication.  A combination of HTTP Verb (or Method) and URI (or Path) are required to identify a specific Controller Action.

```bash
HTTP Verb  URI Pattern       Controller#Action
-----------------------------------------------
GET        /                 artists#index
GET        /artists          artists#index
POST       /artists          artists#create
GET        /artists/new      artists#new
GET        /artists/:id/edit artists#edit
GET        /artists/:id      artists#show
PATCH      /artists/:id      artists#update
PUT        /artists/:id      artists#update
DELETE     /artists/:id      artists#destroy

```

### `rails routes`

* Open up your terminal and, in the same folder as your application, type in `rails routes`.  You should see something like this.

```bash
Prefix        Verb   URI Pattern                 Controller#Action
-----------------------------------------------------------------

artists       GET    /artists(.:format)          artists#index
              POST   /artists(.:format)          artists#create
new_artist    GET    /artists/new(.:format)      artists#new
edit_artist   GET    /artists/:id/edit(.:format) artists#edit
artist        GET    /artists/:id(.:format)      artists#show
              PATCH  /artists/:id(.:format)      artists#update
              PUT    /artists/:id(.:format)      artists#update
              DELETE /artists/:id(.:format)      artists#destroy
songs         GET    /songs(.:format)            songs#index
              POST   /songs(.:format)            songs#create
new_song      GET    /songs/new(.:format)        songs#new
edit_song     GET    /songs/:id/edit(.:format)   songs#edit
song          GET    /songs/:id(.:format)        songs#show
              PATCH  /songs/:id(.:format)        songs#update
              PUT    /songs/:id(.:format)        songs#update
              DELETE /songs/:id(.:format)        songs#destroy
```


## Named Route Helpers

Looking at the output, we see the first column is "Prefix".  Rails provides helpers for referencing these routes in code.  This column provides information about the naming convention for these Named Route Helpers (aka Path Helpers).

### You Do: Research Named Route Helpers (aka Path and URL Helpers) (10 min)

Back to the docs... read about [Path Helpers](http://guides.rubyonrails.org/routing.html#path-and-url-helpers)

Q: What are Helpers, in general, in Rails?  How do Path Helpers fit into that category?  What do they look like?
---

> **Helpers** codify Rails conventions.  They write html using Rails or, in the case of custom Helpers, our project's conventions.

> **Path helpers** are methods which provide the urls (and paths) to a Resource.  We build them using the prefixes from `rails routes`.

Looking at this output from `rails routes`,

```bash
Prefix        Verb   URI Pattern                 Controller#Action
------------------------------------------------------------------

artists       GET    /artists(.:format)          artists#index
              POST   /artists(.:format)          artists#create
new_artist    GET    /artists/new(.:format)      artists#new
edit_artist   GET    /artists/:id/edit(.:format) artists#edit
artist        GET    /artists/:id(.:format)      artists#show
```

Q: What named route helper will return the entire url to list all Artists?

> A. `artists_url`

> This will return 'localhost:3000/artists'

Q: What named route helper will return the path to show an Artist?

> A. `artist_path(@artist)`

> This will return '/artists/**:id**'

Note that to indicate which artist we should show, we need to pass a reference to an artist.


Q: Where do we utilize Path Helpers in Rails?
---

> A.  We use Path Helpers in views, controllers, and helpers.

Q. Why not in models?

> A. Models do not usually know about their place within the request/response cycle.  They are focused on the Business Rules and Persistence, not the User Interaction.


Q. When do we use the `_path` helper? The `_url` helper?
---

> A. We use `_url` helpers when redirecting.  Use `_path` for everything else.


Q. Why?

> A. The web expects it.  https://www.viget.com/articles/rails-named-routes-path-vs-url



### Using Named Route Helpers
---

Using path helpers, we can tidy up the other helpers you guys have already implemented in Tunr.

e.g. [Link Helpers](http://mixandgo.com/blog/how-to-use-link_to-in-rails)

```rb
# views/artists/index.html.erb

# From this...
<h2>Artists <a href="/artists/new">(+)</a></h2>
```

```rb
# ...to this
<h2>Artists <%= link_to "(+)", new_artist_path %></h2>
```

### Review Routes

http://guides.rubyonrails.org/routing.html#generating-paths-and-urls-from-code

Q. What would be in the params hash after we clicked that link (to `/patients/17`)?
---

``` ruby
# params
{  id: "17",
  controller: "patients",
  action: "show"
}
```

ProTip: params values are always strings.  ActiveRecord methods (e.g. #find), will convert it to an integer.  This means you can use this in your url `/artists/1-YeahYeahYeahs`.


## RESTful Routes (5 min)

REST attempts to view everything on the web as a Resource. RESTful resources are expected to be managed via specific routes.  Rails makes it easy to generate RESTful routes, via `resources`.
* Explicitly tells Rails that we will be using RESTful routes.
* Generates path helpers.

```rb
# This is all we need to generate the RESTful routes for a model
resources :artists
resources :songs
```

* `resources` creates routes using a combination of REST and Rails conventions.  It assumes properly named controllers -- in this case, `artists_controller.rb` and `songs_controller.rb` -- and actions.

Review the output of `rails routes`.


## Nested Resources (15 min)

The way our app is currently routed is fine. Songs and artists have their very own resources and doesn't depend on the other. We can, however, change our domain a bit.  We can make Songs depend on their Artist. We indicate, and control this, by nesting our resources. We want to be able to visit urls like this:

`http://www.tu.nr/artists/3/songs/12`

* Currently we can visit an artist show page, which includes a link of all that artist's songs.

Q. What would it mean to have a URL like that? Why do we do it this way?
---

> A.
>  * It concisely reflects our data structure: all songs are dependent on an artist.
>  * Also allows users to access specific information using the URL.

Ultimately, we want to structure our routes so that all Songs exist in the context of a parent Artist.

> The reasons might not be so apparent for routes like show, edit, update and destroy because we have access to a song ID in the url anyway. But by using nested resources, it's easier to create a song because we have the artists id in the url. Or maybe we want the songs index route to be namespaced under an artist. We can **ensure** that a Song is associated with a specific Artist.

> This brings us to another side note. Ultimately your domain model is just that, yours. It's up to you to decide whats the right fit. Which tables make the most sense for the problems that I face in my application. Which associations should I use to best facilitate querying my database. Which resources should I have and under which namespaces? These are the questions developers ask themselves each and every time a new application is being created. We're just here to teach you some tools to answer these questions for yourself.

So our ideal Song index will look something like this...

```rb
# songs#index
get "/artists/:id/songs" to "songs#index"
```

And our show route will look something like this...

```rb
# songs#show
get "/artists/:id/songs/:id" to "songs#show"
```

Q. Given this route `artists/7/songs/14`, what do you think would be in the params hash for this route?
---

> `params = { id:}`
> Um, `:id` is used twice. How do we know which is which?

Exactly!  We need to reference our Artist ID separate from our Song ID.  Our routes need to look something more like this...

```rb
# We rename the first :id to :artist_id to make clear that it is the :id number of the Artist in question.
get "/artists/:artist_id/songs" to "songs#index"
get "/artists/:artist_id/songs/:id" to "songs#show"
```


### YOU DO: Individual routes (3 min)

Docs are your friend: [Nested Resources](http://guides.rubyonrails.org/routing.html#nested-resources)

1. Write out the individual routes for our nested resources model
  * We will not be replacing our resources statements in the `routes.rb` file with this.
  * **DO NOT** check our answers with `rake routes` quite yet...
- Once you have them written out, update "config/routes.rb".  Indicate that the Song resources are nested within an Artist.
- Check your answers above against with `rake routes`.



## BREAK (10 min)

Updates to "config/routes.rb"

```rb
# Going from this...
resources :artists, :songs
```

```rb
# ...to this.
resources :artists do
  resources :songs
end
```


## Let's implement nested routes in Tunr! (60 min)

Okay, so our `routes.rb` file is updated with nested resources. Let's see them in action and fire up our Tunr app!

### Uh oh. It broke...

![First error](https://i.imgur.com/G6vWLOK.png)

That's okay. You're going to spend the next hour fixing it!

### TPS: What do we need to change? (3/2, 5 min)

* Look through your application and think about what we need to change in order to accommodate our new routing system.
* Don't worry about solving the problem immediately. Start by identifying files we need to change.


### Let's look at `rake routes` again...

Q. Has anything changed?
---

* Our HTTP requests (URI Pattern) match the individual nested routes we just talked about (e.g., `:artist_id`).
* Our Song path helpers are now prefixed with artist (e.g., `artist_songs`, `new_artist_song`).
* Our controller actions are the same.

```sh
Prefix            Verb   URI Pattern                                  Controller#Action
root              GET    /                                            artists#index
artist_songs      GET    /artists/:artist_id/songs(.:format)          songs#index
                  POST   /artists/:artist_id/songs(.:format)          songs#create
new_artist_song   GET    /artists/:artist_id/songs/new(.:format)      songs#new
edit_artist_song  GET    /artists/:artist_id/songs/:id/edit(.:format) songs#edit
artist_song       GET    /artists/:artist_id/songs/:id(.:format)      songs#show
                  PATCH  /artists/:artist_id/songs/:id(.:format)      songs#update
                  PUT    /artists/:artist_id/songs/:id(.:format)      songs#update
                  DELETE /artists/:artist_id/songs/:id(.:format)      songs#destroy
artists           GET    /artists(.:format)                           artists#index
                  POST   /artists(.:format)                           artists#create
new_artist        GET    /artists/new(.:format)                       artists#new
edit_artist       GET    /artists/:id/edit(.:format)                  artists#edit
artist            GET    /artists/:id(.:format)                       artists#show
                  PATCH  /artists/:id(.:format)                       artists#update
                  PUT    /artists/:id(.:format)                       artists#update
                  DELETE /artists/:id(.:format)                       artists#destroy
```

Q. Are we going to need to change anything in our app?
---

Having seen this, let's make a To-Do list of things to change in our Rails app so that we can successfully use nested resources.  
  1. Link Helpers  
  2. Form Helpers  
  3. Songs Controller  


## YOU DO: Fix the app!

  For the rest of the class we'll be working to fix the app.  Feel free to follow along, or go at your own pace.

  ### Bonuses
  If you find yourself moving along faster than my pace, try implementing the following...
  * A third model for Genre that has a `belongs_to` relationship with Artists.
  * There are also some advanced topics included in "Additional Reading" at the bottom of the lesson plan.

### Let's take another look at that error...

![First error](https://i.imgur.com/G6vWLOK.png)

Q. How do we fix this?
---

> A. **DELETE IT**.
* The original link took us to a list of all the songs in our application.
* While getting rid of it may be a bad move from a usability standpoint, by implementing nested resources we made the decision that songs will never exist independent from an artist.


### Let's click on an artist...

Another error! What went wrong this time?

![Second error](https://i.imgur.com/VGY3Gnq.png)

Our app does not like the `new_song_path` we used in a link helper in our `artists/show.html.erb` file.

```html
# /views/artists/show.html.erb

<h3>Songs <%= link_to "(+)", new_song_path %></h3>
```

What do we need to replace this path helper with?
* **HINT:** Look at `rake routes`!

```html
# /views/artists/show.html.erb

<h3>Songs <%= link_to "(+)", new_artist_song_path %></h3>
```

By nesting resources, `new_song_path` became `new_artist_song_path` since every song we create is now created in the context of an artist.
* But our app is still giving us an error. WHY?!


![Third error](https://i.imgur.com/heYsY36.png)

You'll notice that we're getting a different error this time that ends with: `missing required keys: [:artist_id]`

Q. What else we have to do to our link helper to fix this?
---

```html
# /views/artists/show.html.erb

# Feed @artist as an argument to the path helper
<h3>Songs <%= link_to "(+)", new_artist_song_path( @artist ) %></h3>
```

We need to feed our `new_artist_song_path` helper an artist as a variable. Now our app knows which artist it is rendering a new song form for.  

And that'll do it. Let's refresh our page...


![Fourth Error](https://i.imgur.com/ouBYeCh.png)

So now what? The link helper for an individual song inside of our .each enumerator isn't working.

```html
# /views/artists/show.html.erb

<ul>
  <% @artist.songs.each do |song| %>
    <li>
      <%= link_to "#{song.title} (#{song.album})", song %>
    </li>
  <% end %>
</ul>
```

Some thoughts:
* We don't have a path helper in the above example. What page are we trying to link to?
* So which path helper do we need to add?
* Do we need to feed it a variable? If so, how many?

```html
# Feed the path helper an argument for @artist
# As well as songs, since each link goes to a particular song
# We use the iteration variable for song since we're in an enumerator
<ul>
  <% @artist.songs.each do |song| %>
    <li>
      <%= link_to "#{song.title} (#{song.album})", artist_song_path( @artist, song ) %>
    </li>
  <% end %>
</ul>
```


From an artist show page, click on a song. You should get an error.
* Try fixing the `songs/show.html.erb` file.
* **HINT:** You might have to add an instance variable to `songs_controller.rb`.
  * Remember, our song routes don't look the same as they did before!


### Form Helpers

Something else we'll need to change are forms. Let's try making a new song.
* From an artist show page, click on the "(+)" next to "Songs".

No immediate error! But it's not working quite yet. Let's try creating a song.

![Seventh error](https://i.imgur.com/mR4a9Tt.png)

Looks like our form is trying to access a `/songs` route.
* Our application does not support that particular route.
* Let's take a look at `songs/new.html.erb` and `songs_controller.rb` and see how we can fix this...

```html
# /views/songs/new.html.erb

<%= form_for @song do |f| %>
  # form contents
<% end %>
```

```rb
# /controllers/songs_controller.rb

# new
def new
  @song = Song.new
end
```

We need to associate each new song with an artist. To do that, we need to provide our `form_for` helpers with both an artist and song as arguments.
* That means we first need to define the artist in question in our controller action. Then we can modify our form.

```rb
# /controllers/songs_controller.rb

# new
def new
  @artist = Artist.find(params[:artist_id])
  @song = Song.new
end
```

Now let's modify our form.
* When feeding multiple arguments to `form_for`, we have to place them inside of an array.
* In this case, we're not only giving it a new song (via `@song`) but also the artist we'll be adding it to (via `@artist`).

```html
# /views/songs/new.html.erb

<%= form_for [@artist, @song] do |f| %>
  # form contents
<% end %>
```


That takes care of the form. Now we need to fix the `create` controller action in `songs_controller.rb` so that we can add songs to artists!
  * We need an artist to add a song to, right? How do we set that up.
  * How should we modify `@song` so that it's saved to the proper artist?
  * Where would it make most sense to redirect to? Let's try the artist show page -- what path should be use?

```rb
# /controllers/songs_controller.rb

# create
def create
  @artist = Artist.find(params[:artist_id])
  @song = @artist.songs.create(song_params)

  redirect_to artist_path(@artist)
end
```


Now you do the rest! Debug the following pages/forms so that they don't generate any errors upon loading/submission.
* `/views/artists`
  * `edit.html.erb`
  * `index.html.erb`
  * `new.html.erb`
* `/views/songs`
  * `edit.html.erb`
  * `index.html.erb`
  * `show.html.erb`

It seems pretty daunting, but you won't have to change anything beyond link helpers, form helpers and controller actions.
* If you feel lost, follow the error.
* Dont worry if you don't get to all of them.
* Strongly encourage you to work with each other on this.
* Me and the support instructor are also here to help.


## BREAK (10 min)


## Additional (Optional) Reading
* [Rails Routing From The Outside In](http://guides.rubyonrails.org/routing.html)
* [The Lowdown On Routes](https://blog.engineyard.com/2010/the-lowdown-on-routes-in-rails-3)
* [Scoping Rails Routes](http://notahat.com/2014/02/05/scoping-rails-routes.html)



Spend the remaining class-time either working on your homework or you can ask me questions on anything you've learned this week.


## Conclusion

- List the routes provided using the `resources :person` method and the associated action for each
- Why would we nest resource routes?
- How can we see the routes our app supports?
