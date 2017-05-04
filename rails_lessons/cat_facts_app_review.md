# Rails App from Scratch -- Cat Facts
## Initialize
```ruby
$ rails new cat_facts -d postgresql
$ rails db:setup
$ rails db:migrate
```
Now create the repo on GitHub and go through the commands to push it up.

## Facts

We want to be able to see a list of cat facts. Who doesn't, amirite?

The above statement implicitly tells us that we need a `facts#index`, so let's build that.

`rails g controller Facts index`

How are we going to populate our app with facts? Josh and Gerry only know a combined 241 cat facts, but that's not enough! Let's use a 3rd party API.

When using a 3rd party API, it's best to wrap that over a model that you have control over. Think about the code you _want_ to write to make this work!

```ruby
# FactsController
def index
    # What we WANT to write
    @facts = Fact.load_a_ton

    # or
    @facts = Fact.get(50)
end
```

Thinking about what you _want_ to write is a great way to level-up your ability of both naming things and file/code organization.

In this case, we need a `Fact` model. If we did not plan on storing any data, we could just make our own model and not create a respective table. 

However, in this case we _do_ want to store facts (so that we can do a favoriting system). We can use the Rails model generator to generate both this model file and the table for this.

But before we generate it, we need to know what type of data to store. Let's examine [our API](http://catfacts-api.appspot.com/api/facts?number=50) for how this might work.

All it provides is content, so let's just store that. Note: The content has the chance to be over 255 characters, so use `text` instead of `string`!

`rails g model Fact content:text`

Now let's actually make the HTTP call to the Cat Facts API and check our results.

```ruby
models/fact.rb
def self.get_cat_facts(num = 30)
    cat_facts = HTTParty.get("http://catfacts-api.appspot.com/api/facts?number=#{num}")
    binding.pry
    parsed = JSON.parse(cat_facts)["facts"]
end
```

<details>
    <summary>What is `self` here? </summary>
    `self` here is how we write it as a _class_ method. This way we can write `Fact.get_cat_facts(20)`. See how the method is called _directly on the class_?
</details>

<details>
    <summary>What does `num = 30` in the arguments mean? </summary>
    `self` here is how we write it as a _class_ method. This way we can write `Fact.get_cat_facts(20)`. See how the method is called _directly on the class_?
</details>

<details>
    <summary>Why didn't this work? </summary>
    We need to install the gems `httparty` and `pry`.
</details>

Let's open up `rails c` to see it in action.

Now that it's working, let's set up the `facts#index` action and its respective view to actually show them.

<details>
    <summary>What are the big picture steps needed to create a page that lists all the found facts? </summary>
* **Router** -- set it so that `/facts` goes to the `facts#index`
* **Controller** -- load in all the facts, set to instance variable
* **View** -- iterate over `.each` fact and display it
</details>

```ruby
# router.rb
get '/facts' => 'facts#index'
```

```ruby
# FactsController
def index
    @facts = Fact.get_cat_facts
end
```

```html
<h2>Facts</h2>
<ul>
    <% @facts.each do |fact| %>
        <li><%= fact %></li>
    <% end %>
</ul>
```

## Bootstrap

Let's make our app look purrty.

```ruby
# Gemfile
gem 'bootstrap-sass'
gem 'bootswatch-rails'
```

To load it in, create a new file: `app/assets/stylesheets/custom.scss`

```css
// custom.scss
@import "bootswatch/journal/variables";
@import "bootstrap";
@import "bootswatch/journal/bootswatch";
```

<details>
    <summary>What is `journal` in the lines above? </summary>
    `journal` is referencing one of the Bootswatch themes called Journal. Changing both of those to `lumen` will switch to the Lumen theme.
</details>

Refresh the server and the page meow!

## (Favorites lead to) Users

We want to be able to favorite different facts. But who is "we"? "We" are users -- so let's generate users.

```ruby
# Gemfile
gem 'devise', '4.2.1'
```

```bash
bundle install
rails g devise:install
```

Let's refer to the previous [Devise lesson](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/blob/master/rails_lessons/devise.md) for install instructions.

Once that's installed, we'll need to add a column to the users table then we have to [set up Devise to whitelist that new attribute](https://gist.github.com/rgpass/461a29c427e1ce71a7857eb9b5a8a012).

```
rails g migration AddPhoneNumberToUser phone_number:string
```

<details>
    <summary>Why do we use a string for phone numbers?</summary>
    Phone numbers can have a *huge* variety of input characters. Perhaps someone has set up their phone number to be `404-CAT-FACT`. We want to recognize this variety. Also, using country codes requires a `+` so we will need a string. `+14049531234` is a valid US number.
</details>

Remember to double-check the migration before running `rails db:migrate`!

Let's add a navbar to `layouts/application.html.erb`. We can refer to the previous [Devise lesson](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/blob/master/rails_lessons/devise.md) on the best way to toggle navbar option visibility.

Let's drop a `before_action :authenticate_user!, only: [:index]` in our `FactsController` to test that Authentication is working. Navigating to that page when not logged in should redirect to the log in page.

## Favorites

Cool, so meow we have users but the User model and the Fact model are totally independent.
The way we're going to connect them is through a join table called Favorites.

### Table and Associations

```bash
rails g model Favorite user_id:integer fact_id:integer
```

Curious why we generate both the model and migration? We'll see in a second when we add code to `favorite.rb`.

```ruby
# models/user.rb
has_many :favorites
has_many :facts, through: :favorites
# models/fact.rb
has_many :favorites
has_many :users, through: favorites
# models/favorite.rb
belongs_to :user
belongs_to :fact
```

This sets up the ApplicationRecord (formerly known as ActiveRecord) associations.

### View

We need a `+ Add Favorite` button for each fact. Let's see how we can set this up to be created.

We want to assume that the Fact that we're grabbing from our API has _not_ been created in our database. This means that when a user clicks on `Add Favorite`, it does a `POST` to `/facts`.

<details>
    <summary>What controller and action should a `POST` to `/facts` go to?</summary>
    `POST` --> `create` action; `/facts` --> Facts controller
</details>

```html
<ul>
    <% @facts.each do |fact| %>
        <li><%= fact %></li>
        <%= link_to "Favorite", facts_path(content: fact), method: :post %>
    <% end %>
</ul>
```

<details>
    <summary>`facts_path` won't exist yet. How can we test for sure? How do we add it as a valid route?</summary>
    We can see all of our routes by running `rails routes`. This list is generated from `routes.rb` -- so adding a new route to this will create it.
</details>

Now we can test through our UI that our controller works. Let's build that now.

### Controller

```ruby
# FactsController
# Need to make sure that the user is logged in before hitting this!
# Remember, anything on the client can be spoofed. This will check that the user is signed in.
before_action :authenticate_user!, only: [:index, :create]
def create
    fact = Fact.find_or_create_by(content: params[:content])
    fact.add_as_favorite(current_user)

    redirect_to root_path
end
```

In our view, let's add one of these as a favorite then jump into `rails console`.

Yay, now writing `User.first.facts` loads that user's favorited facts.

<details>
    <summary>There is no instance method on the `User` model called `facts`. How was it generated?</summary>
    Rails associations are incredibly powerful! The `has_many` and `has_many ... :through` code gives us the ability to write something like `current_user.facts`. It automagically adds those instance methods!
</details>

## User Profile

The final step is for us to see our own profile with our favorites. Devise does _not_ generate a profile path for us, so we need to create our own.

```bash
$ rails g controller Users show
```

```ruby
# routes.rb
get '/profile' => 'users#show'
```

```
# UsersController
before_action :authenticate_user!
def show
    @favorite_facts = current_user.facts
end
```

<details>
    <summary>What will happen if I don't have `only: [:show]` at the end of the `before_action` line?</summary>
    It will call `authenticate_user!` on _every action_.
</details>


```html
<!-- show.html.erb -->
<h2>Favorites</h2>
<ul>
    <% @favorite_facts.each do |fact| %>
        <li><%= fact.content %></li>
    <% end %>
</ul>
```

# 😸
