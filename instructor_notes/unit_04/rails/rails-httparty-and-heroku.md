# Consuming APIs with HTTParty (+Heroku)

## Learning Objectives
- Describe the usecase for HTTParty
- Make API calls using both `.get` and `class` methods.
- Parse the documentation of basic APIs to get information
- Deploy an Application to Heroku

## Framing 

As you build applications, it's almost innevitable that you will run into a situation to communicate with an API.  Thankfully, there are plenty of Ruby Gems out there to do a lot of work for us, but not every API has a gem associated with it.

In todays lesson, we will go into depth on how to call an API through a gem called HTTParty.  Through this gem, we will be able to easily retrieve data from any kind of API.

**CFU:** What are some API's that you have used in the past?

- [Wikipedia](https://github.com/kenpratt/wikipedia-client)
- [Twitter](https://rubygems.org/gems/twitter)
- [Twitch](https://rubygems.org/gems/twitch)
- And more...

While these gems are extremely useful, they do introduce a 'black box' into your project.  If the API you are using ever updates, your project could break completely and you must wait until the gem maintainers update their gems.


### Turn & Talk 

With a partner, discuss:

1. What are some scenarios where we would want to call our API on the server side?
2. What are tools we used in JS to make API calls?
3. Visit [Programmable Web](https://www.programmableweb.com/category) and find 2 examples of APIs that interest you.

### Join the HTTParty

The easiest way to call an api in Ruby is through a gem called HTTParty.

Let's make a basic api call in Ruby.

1. Install HTTParty
```bash
  gem install httparty
```
2. Create a new file (let's call it api.rb)

3. Let's use API to get a list of Cat Facts.

```ruby
require 'HTTParty'
require 'pp'

response = HTTParty.get('http://www.catfact.info/api/v1/facts.json')

pp response.code, response.message, response.headers.inspect

response.each_with_index do |res, index|
  pp res
end
```

> Hold up, what is require 'pp' supposed to mean?
>
> pp is a pretty-printer that is built into Ruby.  It's not available in the language by default, but you can import it by putting `require 'pp'` at the top of your program

**CFU:** Why would Matz make it required to use `require 'pp'` to get a pretty printer?

Sweet! We're now able to get 25 random facts about cats through just using 10 lines of code!

This can only get us so far though. In order to really see the power of HTTParty, lets use the class syntax to build our api call.

```ruby
require 'HTTParty'
require 'pp'

class CatFacts
  include HTTParty
  attr_accessor :facts

  base_uri 'http://www.catfact.info/api/v1'
  default_params output: :json

  def initialize(facts)
    @facts = facts
  end

  def random_fact
    @facts.sample["details"]
  end
  
  # Class Methods
  def self.fetch(page, per_page)
    response = get('/facts.json', query: { page: page, per_page: per_page })

    if response.success?
      puts "success"
      self.new(response["facts"])
    else
      puts "failure"
      raise response.response
    end
  end
end
```

Notice that writing the request this way allows you to program in a way that aligns well with OOP.  The Class.fetch method tells HTTParty to fetch information from the remote api, and allows the user to define the query params.  In this case it's the page and per_page params.

## Arguments for .get/.post/etc
HTTParty easily allows you to write out query params and set custom headers for your requests.  The second argument after the URL is a hash query params, and there is also a third argument that takes a hash for headers to be sent in the request. This is good to know for when you need to send over API keys, or if your API request has many query parameters.

```ruby
HTTParty.post("http://rubygems.org/api/v1/gems/httparty/owners",
    :query => { :email => "alan+thinkvitamin@carsonified.com" },
    :headers => { "Authorization" => "THISISMYAPIKEYNOREALLY"})
```

## How to Integrate HTTParty with Ruby on Rails

We've seen now that HTTParty makes it easy for us to use a third party API and parse through its data.  But how can we integrate that into Ruby on Rails?  Let's find out by using 2 different api's to answer this question.

"Who would win, Darth Vader or Bulbasaur?"

To do this, we'll be using these 2 easy to set up APIs

- [Star Wars API](http://swapi.co/)
- [Pokemon API](http://pokeapi.co/)

## Codealong

We're going to be building this app from scratch!  Let's get started by going to the directory where we want our app to live and run the rails new command.

```bash
  rails new pokemon_vs_starwars -d postgresql
```

Now let's hop into the Gemfile and add HTTParty and bootstrap for styling.

``` ruby
gem 'httparty'
gem 'bootstrap-sass'
gem 'bootswatch-rails'
```

Now let's think about how to architect our application. 

**CFU:** Spend a couple minutes with a partner and think of what sort of **Data Model** we would need to do the following?

1. Get a random Pokemon from the API
2. Get a random Star Wars character from the API 
3. Make the 2 characters "fight" each other (User clicks a button to choose the winner)
4. Log the victors in the database


For the sake of time, we will only worry about 2 models.  Let's go ahead and create a controller/view for the page where the 2 characters will "fight"

``` bash
  rails g controller Fights index
```

Now, let's create a Model for our Star Wars and Pokemon

``` bash
  rails g model Pokemon name image wins:integer
  rails g model StarWar name image wins:integer
```

Now we run a migration, and now it's time to use HTTParty to fetch data for us instead of relying on our model.  Let's do this for the StarWars model.

```ruby
# app/models/star_war.rb
 
class StarWar < ApplicationRecord
  include HTTParty
  base_uri 'http://swapi.co/api/people'

  def self.generate
    random_number = rand(90)
    response = get("/#{random_number}")

    puts response["name"]
  end
end
```

A few things to notices here. 
  - We don't need to call `require 'HTTParty'` because rails bundles all of the gems in the gemfile within the project when you run `rails s`.  
  - We are adding this generate method within the model that rails generates.  We can also use ActiveRecord methods within here as well. Lets add that in so that we can save our data we retrieve from APIs

```bash
rails g migration AddApiIdToStarWars
```

Now that we have a field for the API ID, lets refactor our code to grab info from our database if available and use HTTParty if it doesn't find anything

```ruby
class StarWar < ApplicationRecord
  include HTTParty
  base_uri 'http://swapi.co/api/people'

  def self.generate(api_id)
    star_war = find_by api_id: api_id
    return star_war unless star_war.nil?

    response = get "/#{api_id}"
    placeholder_image = "https://www.placecage.com/c/#{200 + api_id}/#{200 + api_id}"

    create!(name: response['name'],
            image: placeholder_image,
            wins: 0, 
            api_id: api_id)
  end
end
```

With our generate function working, lets visit the FightController and create an instance variable to get a Star Wars character.  While we're at it, lets add a basic view as well.

```ruby
class FightsController < ApplicationController
  def index
    @star_war = StarWar.generate rand(90)
  end
end
```

```html
<h1 class="align-center">Who Would Win?</h1>

<div class="star-wars">
  <%= image_tag @star_war.image %>
  <h3><%= @star_war.name %></h3>
</div>
```

**YOU DO:** (20 min)
Integrate the [PokeAPI](http://pokeapi.co/) with the model we've already created.  Make the fight controller generate a new random Pokemon and display it's picture and name in the index.html.erb file.

**Adding A Button To Choose a Winner**
Now that we have two random characters being generated through HTTParty and our own database, let's give users the ability to choose who would win.

To do this, we will use the `button_tag` helper method. 

First, lets add a route to update the wins for a Star Wars character
```ruby
patch '/starwars/:id', to: "starwars#update", as: 'update_starwar'
```

Next up we will add the button tag to the fight index.html.erb
```html
<%= button_tag @star_war.name, update_starwar_path(@star_war)%>
```

And finally, we need to add a method within our StarWars controller
```ruby
class StarWarsController < ApplicationController
  def update
    @star_war = StarWar.find(params[:id])
    @star_war.update!(wins: @star_war.wins + 1)
    redirect_to fights_path
  end
end
```

**You Do:** 20min
Add a button for choosing Pokemon as a victor and create an update method within it's controller.

As one final step, lets create a leaderboard and serve it as the index page in the StarWarsController and PokemonController.
```ruby
  def index
    @star_wars = StarWar.order(wins: :desc)
  end
```


## Deploying to Heroku
Now that we have our app, let's deploy to Heroku! Thankfully, since the creator of the Ruby language is the chief Ruby architect at Heroku, it's going to be extremely easy!

- First lets commit our code.
- Next run `heroku create` to create a new application on Heroku
- Push using `git push heroku master`
- Run your migrations through `heroku run rails db:migrate`
- Enjoy!