# Devise for Rails
Adding authentication

|Objectives|
|----------|
|Understand the need for authentication|
|Install and Configure Devise for Rails|
|Create views for registration process|
|Register a new user|


Adding authentication and authorization is extremely vital to any modern web application.  The need for basic security and authenticaiton is essential for good data and customer experience.  We will spend today adding the 'Devise' gem to our Tunr appliction.  This is a program that will help us integrate the tools needed to authenticate and authorize users.  With this gem we will not need to write the complicated code needed to add security to our pages.


## Add devise gem

Open up your Gemfile and add this line
```rb
gem 'devise'
```
and run
```rb
bundle install
```

## Set up devise in your app

Run the following command in the terminal.
```rb
rails g devise:install
```

## Configure Devise

Ensure you have defined default url options in your environments files. Open up config/environments/development.rb and add this line:
```rb
   config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```
before the end keyword.

**Important** Take note that you are adding this to the DEVELOPMENT environment.  You will need to change this for your production environment.

## Add Notices and Alerts

Open up app/views/layouts/application.html.erb and add:

```html
  <% if notice %>
    <p class="alert alert-success"><%= notice %></p>
  <% end %>
  <% if alert %>
    <p class="alert alert-danger"><%= alert %></p>
  <% end %>
```
right above: `<%= yield %>`

At this point we have effectively implemented the 'Devise' gem into the application and we are ready to create our 'User' model and add security to it.


## Setup the User model

We’ll use a bundled generator script to create the User model.
```rb
   rails g devise user
   rails db:migrate
```

### Create your first user

Now that you have set everything up you can create your first user. Devise creates all the code and routes required to create accounts, log in, log out, etc.

Make sure your rails server is running. Navigate to 'localhost:3000/users/sign_up' and create your user account.

**You can test whether the user was registered by going to the rails console and typing 'User.all'.  If your registration was successful you should see the user in the records of the User model**

### Add sign-up and login links

All we need to do now is to add appropriate links or notice about the user being logged in in the top right corner of the navigation bar.

In order to do that, edit app/views/layouts/application.html.erb add:
```rb
  <p class="navbar-text pull-right">
  <% if user_signed_in? %>
    Logged in as <strong><%= current_user.email %></strong>.
    <%= link_to 'Edit profile', edit_user_registration_path, :class => 'navbar-link' %> |
    <%= link_to "Logout", destroy_user_session_path, method: :delete, :class => 'navbar-link'  %>
  <% else %>
    <%= link_to "Sign up", new_user_registration_path, :class => 'navbar-link'  %> |
    <%= link_to "Login", new_user_session_path, :class => 'navbar-link'  %>
  <% end %>
```

Finally, force the user to redirect to the login page if the user was not logged in. Open up app/controllers/application_controller.rb and add:
```rb
  before_action :authenticate_user!
```
after `protect_from_forgery with: :exception.`


## Where we are going next:
Thus far we have implemented two models (one for users's and one for posts).  We have added authentication and authorization.  We have created the routes and the views for all of our actions for the website.  

In our next session we will be implementing Bootstrap styling to really give our website a look and feel that is more professional and pleasing.

### Resources:
https://github.com/plataformatec/devise
http://www.korenlc.com/rails-tutorial-authentication-with-devise/
