# Devise and Basic AuthZ

## Objectives

* Review Auth
	* Authentication (authN)
	* Authorization (authZ)
* Setup Devise
* Implement Devise via User model
* Apply Devise methods
* Setup basic Authorization
* Bonus: Devise views

## Review Auth

"Auth" is made up of two major pillars: Authentication and Authorization.

Authentication (_authN_ for short) is validating that a person is who they are.  

Authorization (_authZ_ for short) is validating what a person has access to.

Real world example: When going to a bar, the bouncer first authenticates you by looking at your face then at the photo. Afterward, he lets you in if you're over 21 -- he is authorizing you to come in.

Code example: Signing in checks that email and password combination with the one stored in the database -- this is authenticating you. Now that you're signed in, if you're an admin, you can delete data -- you're authorized to do so.

We use Devise in Rails for authN. For authZ, we use CanCan.

## Setup Devise

### Create new project

```bash
cd ~/rails_projects
rails new devise_cancan -d postgresql
rails db:setup
rails db:migrate
```

### Contrived example pages

We want to test that our authN and authZ functionality is working. We'll do this by making up a contrived example. The specs are:

* Anyone can visit Home
* Home will have links for
	* Home
	* About
	* FAQs
	* Sign Up
	* Sign In
	* Sign Out
* Only logged in users can visit
	* About
	* FAQs
	* Sign Out
* Only non logged in users can visit
	* Sign Up
	* Sign In
* Only valid links will show up in our navbar

Let's set up some basic pages by running: `rails g controller StaticPages home about faqs`

In our `routes.rb`, let's delete the auto-generated routes and create our own.

```ruby
get 'home' => 'static_pages#home'
get 'about' => 'static_pages#about'
get 'faqs' => 'static_pages#faqs'
```

Sanity check: Start your server then visit `localhost:3000/about` -- it should should show the default text there!

Next, let's create a navbar.

```html
<!-- app/views/layouts/application.html.erb -->
<!-- Just below <body> -->

<ul>
	<li><%= link_to "Home", home_path %></li>
	<li><%= link_to "About", about_path %></li>
	<li><%= link_to "FAQs", faqs_path %></li>
</ul>
```

You can see the routes available to you by running `rails routes`.

Let's run that now so we can compare with what's available after we install Devise.

### Install the Devise gem

```ruby
# Gemfile
gem 'devise', '4.2.1'
```

```bash
bundle install
```

### Install Devise in your app

```bash
rails g devise:install
```

This command prints out the next steps for us.

```
Some setup you must do manually if you haven't yet:

  1. Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:

       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

     In production, :host should be set to the actual host of your application.

  2. Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"

  3. Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>

  4. You can copy Devise views (for customization) to your app by running:

       rails g devise:views
```

We'll do some slight modifications to these.

Step 1:

```ruby
# Bottom of config/environments/development.rb, before final `end`

# Mailer setup (required for Devise)
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

Step 2:

```ruby
# routes.rb
root "static_pages#home"
```

We'll hold off on making a `StaticPagesController` and `home` action for now. If we need it, we can add it in later.

Step 3: This goes above the `<%= yield %>`

```html
<!-- app/views/layouts/application.html.erb -->

<!-- Devise messages -->
<% if notice %>
	<p class="alert alert-success"><%= notice %></p>
<% end %>
<% if alert %>
	<p class="alert alert-danger"><%= alert %></p>
<% end %>
```

Step 4: Hold off on this for now. If we need it, we'll do it later.


## Implement Devise via User model

```bash
rails g devise user
```

Look at the files it generates! Let's inspect each of these.

Let's update our database with the new migration created from Devise.

```bash
rails db:migrate
```

Make sure to restart your server!

## Apply Devise methods

### Hiding pages for only signed in users

Devise does a _ton_ for us. However, there are two main components: methods that we can use in our controller and methods that we can use in our views.

Let's first make sure our controller does not allow the user to view FAQs unless they are signed in. Once that's done, we can set it so that they _don't even see the link_ unless they're signed in.

Let's visit FAQs. Right now we're NOT logged in but we can see this page. Let's fix that.

```ruby
# static_pages_controller.rb
before_action :authenticate_user!, only: [:faqs]
```

Now refresh the page. It renders the sign in form!

Signed out users can not longer see FAQs _BUT_ they still have the link for it. Let's hide that if they're not signed in.

```html
<!-- app/views/layouts/application.html.erb -->

<!-- In our navbar area -->
<% if user_signed_in? %>
	<li><%= link_to "FAQs", faqs_path %></li>
<% end %>
```

Refresh the page. No more link!

### Enable users to sign up and sign in

So far we've blocked FAQs so only authenticated users can see it.

Let's do the reverse -- only signed out users can see links for Sign Up and Sign In. _We'll make these actually work in a second, but let's first show these links._

Preface: use `rails routes` to see which paths we can link to

```
<!-- app/views/layouts/application.html.erb -->

<!-- In our navbar area -->
<% if user_signed_in? %>
	<li><%= link_to "FAQs", faqs_path %></li>
<% else %>
	<li><%= link_to "Sign Up", new_user_registration_path %></li>
	<li><%= link_to "Sign In", new_user_session_path %></li>
<% end %>
```

Refresh the page. Now those links we'll show up.

### Sign out

Actually sign up. Once that's done, we'll see the navbar has changed.

However, we're missing the ability to sign out. All we need is to add this to our navbar code.

```html
<li><%= link_to "Sign Out", destroy_user_session_path, method: "delete" %></li>
```

The default HTTP method for links is `GET`, but signing out is a `DELETE`. This is why we need to explicitly define which `method`.

### Other useful helpers

Other helpers we can use in our code:

```
# Prints the current_user
current_user
```

Try these out by installing the `pry` gem and dropping in `binding.pry` in your code!

For future reading, check the [Devise documentation](https://github.com/plataformatec/devise).

## Setup basic Authorization

### Spectrum Overview

Devise gave us authentication which it does well. Now, we need to set up authorization.

Authorization can get _incredibly_ complex, from role-based authorization (project owners, team members, task creator) to object-based (this specific document, these specific users can edit, these specific users can delete).

For small apps the easiest thing to do is a column on our `users_table` called `is_admin`.

For large apps that use role-based authZ, the most common tool is [CanCan(Can)](https://github.com/CanCanCommunity/cancancan). And for object-based authZ, the solution is to typically roll your own as they require significant customization.

### Adding an admin column

Let's add a `is_admin` column for our users. This should default to false.

```bash
rails g migration AddIsAdminToUsers is_admin:boolean
```

Now in our newly created migration file, how do we set a default? Google it!

### Changing a user to admin

This doesn't _have_ to be done through the Rails Console, but it is _the easiest_ way and the most secure.

```bash
rails c
```

```ruby
@this_user = User.find(1)
@this_user.is_admin?
@this_user.update(is_admin: true)
@this_user.is_admin?
```

Pro Tip: To access the Rails Console on Heroku, you run `heroku run rails console`.

### Setting logic

Let's create a new static page called `super_secret` and link to it in the navbar. Then we'll set it so that it's only reachable by admins. After that, we'll hide it from view unless the user is an admin.

CFU: How do we make the page?

CFU: How do we add a link to this page?

Now let's go to the Super Secret page. Anyone can see it! Whether we're logged in or not. Let's fix it so that only admins can see it.

First, we'll write it just to make it work, then we'll refactor it to a better file and make it more readable.

```ruby
# StaticPagesController

before_action :redirect_unless_admin, only: [:super_secret]

# ...

private

  	def redirect_unless_admin
  		unless user_signed_in? && current_user.is_admin?
  			redirect_to :home
  		end
  	end
```

Now let's make sure we're signed out and try to go to `http://localhost:3000/super-secret` -- it redirects us to our Home page. Try signing in as an admin, what happens?

Right now our `is_admin` code is only useable inside our `StaticPagesController`, but this is something that we're going to use everywhere. Let's move this code so we can use it everywhere.

```ruby
# Will need to create this file:
# app/helpers/sessions_helper.rb

module SessionsHelper
	def redirect_unless_admin
		unless user_signed_in? && current_user.is_admin?
			redirect_to :home
		end
	end
end
```

```ruby
# app/controllers/application_controller.rb

include SessionsHelper
```

Refreshing the page shows that it works! Now we can use `redirect_unless_admin` anywhere.

Now let's add the logic into our navbar so that only admins can see the link for `Super Secret`.

Pre-req: Sign in as an admin.

```html
<% if current_user.is_admin? %>
	<li><%= link_to "Super Secret", super_secret_path %></li>
<% end %>
```

Refreshing the page shows the link. However, what happens if we sign out?

Let's fix this.

```html
<% if user_signed_in? && current_user.is_admin? %>
```

With this implementation, we have created a simple authZ setup!

Bonus: How can we DRY up our `SessionsHelper` and navbar?


## Bonus: Devise views

As we've seen, the Sign Up and Sign In views generated by devise are ugly. How can we change that?

```bash
rails g devise:views
```

Which files will we care about?

We will talk more about how to edit CSS (via Sass!) in Rails apps in the next lesson. But for now, we can easily edit the HTML of these views.

## Lab

Create a new Rails app with four pages:

* Home (anyone can see)
* Welcome -- Only visitors (aka unauthenticated users) can see
* Support -- Only authenticated users can see
* Configure -- Only admins can see

Bonus:

* Create a `users#index` that only authenticated users can see
* Add a delete button next to each user if the user is an admin
* Do not allow users the ability to delete themselves
* Create a Todos model that belongs to a user, when visiting `/todos` it shows just the current user's todos
