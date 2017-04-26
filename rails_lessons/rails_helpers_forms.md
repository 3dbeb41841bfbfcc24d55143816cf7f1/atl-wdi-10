# Objectives

- Describe how Rails' built-in helper methods make our code mode readable and flexible
- Use Rails' path helper methods to generate paths for links and redirects
- Generate links in views using `link_to`
- Generate images in views using `image_tag`
- Generate model forms using the `form_for` helper
- DRY up views using partials.
- Describe what a CSRF attack is
- Explain the purpose of authenticity tokens in Rails forms

## Helpers

Rails comes with a bunch of features _out-of-the-box_.  Not only do we get  an awesome Rails generator, but Rails also provides us with Helpers to make our code DRYer, more readable, and even more secure.

### References

* **Rails Guides**
  * [path helpers](http://guides.rubyonrails.org/routing.html#path-and-url-helpers)
  * [image_tag](http://guides.rubyonrails.org/layouts_and_rendering.html#asset-tag-helpers)
  * [link_to](http://guides.rubyonrails.org/getting_started.html#adding-links)
  * [form_for](http://guides.rubyonrails.org/getting_started.html#the-first-form)


* **API Docs**
  * [image_tag](http://apidock.com/rails/ActionView/Helpers/AssetTagHelper/image_tag)
  * [link_to](http://apidock.com/rails/ActionView/Helpers/UrlHelper/link_to)
  * [form_for](http://apidock.com/rails/ActionView/Helpers/FormHelper/form_for)

## Path Helpers

Rails gives us path helpers that correspond to specific routes in our application.  Each path is attached to a unique URL.  Let's jump into our `intro_to_rails_todo_app` and run a command to see all our routes and paths.

```bash
$ rails routes
```
We might see something like this:

```bash
   Prefix Verb URI Pattern                     Controller#Action
 categories GET  /categories(.:format)           categories#index
todos_index GET  /categories/:id/todos(.:format) todos#index
```
The `Prefix` column holds the _prefix_ for our path helpers.  If we want to hit the CategoriesController index action, we would use this path:

```categories_path```

Our second path `todos_index` requires a category to be passed along to the TodosController index action.  This path would look like this (if were iterating over `@categories`:

```ruby
<% @categories.each do |category| %>
  <li>
    <%= link_to category.name, todos_index_path(category) %>
  </li>
<% end %>
```

These helpers are generated for you automatically for routes created using resources, e.g. resources :categories.

```bash
       Prefix Verb   URI Pattern                    Controller#Action
   categories GET    /categories(.:format)          categories#index
              POST   /categories(.:format)          categories#create
 new_category GET    /categories/new(.:format)      categories#new
edit_category GET    /categories/:id/edit(.:format) categories#edit
     category GET    /categories/:id(.:format)      categories#show
              PATCH  /categories/:id(.:format)      categories#update
              PUT    /categories/:id(.:format)      categories#update
              DELETE /categories/:id(.:format)      categories#destroy
```

```bash
categories_path()         # "/categories"
new_categories_path()     # "/categories/new"

edit_category_path(some_category)   # "/categories/22/edit"
category_path(some_category) # "/categories/22"
```

Note that there are only 4 RESTful path helpers, not 7 like you might expect. That's because path helpers only generate paths, not routes, which must include a verb. The verb (and thus the route) comes from context.

<b>Index vs. Create</b>

A link to `categories_path()` is a `GET "/categories"`, and is thus the index route.

A form to `categories_path()` is a `POST "/categories"`, and is thus the create route.

<b>Show vs. Update</b>

A link to `category_path(some_category)` is a `GET "/categories/22"`, and is thus the show route.

A form to `category_path(some_category)` is a `PATCH "/categories/22"`, and is thus the update route.

Path helpers can be used in controllers & views.


## Link Helpers

The link helper `link_to` generates link (`<a>`) tags. In general, `link_to`
takes two arguments:

1. the 'caption' (i.e. the text the user sees for the link)
2. the path for the link (i.e. the `href` attribute)

Examples:

```
<%= link_to @category.name, category_path(@category) %>
<%= link_to "Edit Category", edit_ category_path(@category) %>
```

Note that Rails has a shortcut for the show path, instead of `category_path(@category)`,
you can just pass in the model object itself.

```
<%= link_to @category.name, @category %>
<%= link_to @category.name, category_path(@category) %>
```

Note that it doesn't have to be in an instance variable, what matters is that
the second object is an instance of an ApplicationRecord Model:

```
<% @categories.each do |category| %>
  <%= link_to category.name, category %>
<% end %>
```

## HTML Options

Almost any helper method that generates HTML tags, can take a set of HTML
options.

This is commonly used to set the `class` and/or `id` attributes, but
can be used to set any attributes.

Example:

```
<%= link_to @category.name, @category, class: "fancy-category" %>
```

For more examples, see the [API Docs for Rails link_to](http://apidock.com/rails/ActionView/Helpers/UrlHelper/link_to)

## Image Helpers
The `image_tag` helper generates an `<img>` tag.

Here's a simple example:

```
<%= image_tag @artist.photo_url %>
```

generates

```
<img src="http://www.athousandguitars.com/wp-content/uploads/2013/04/yeah-yeah-yeahs.jpg" >
```

There are three general ways we can reference an image's src, depending on where the image is:

1) If you pass in a full URL, rails will
link to that URL.

```ruby
<%= image_tag "https://s-media-cache-ak0.pinimg.com/originals/0a/86/95/0a86954e2d01b456f32db4967247385b.jpg" %>
```

2) If you pass in a full path (starting with a "/") the
image will be linked from the public folder.

```ruby
<%= image_tag "/icons/email.png" %>
```

3) If you pass in a simple file name, rails will look for the file
in the assets folder "app/assets/images", and link to that appropriately.

```ruby
<%= image_tag "plus.png" %>
```

The `image_tag` helper takes all the normal HTML Options, plus ones related to
size and alt.

```
<%= image_tag @artist.photo_url, alt: "Photo of #{@artist.name}", size: "400x400" %>
```

## Form Helpers

Rails includes two helper methods to build forms: `form_for` and `form_tag`.

Today, we'll only be looking at `form_for`, which builds forms specifically
for creating / updating our models.

The other helper, `form_tag` is for building generic forms, for example a
search form.

Here's an example of using form_for:

```
<h2>Create Category</h2>

<%= form_for @category do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>

  <%= f.submit "Create new category!"%>
<% end %>
```

Important facts about the `form_for` helper:

* It takes one argument, the object to create / update (it must be an AR object)
  * If the object is **new** (not saved to DB, `object.new_record? == true`), it will create a form to **create**
  * If the object is not new (id exists, `object.new_record? == false`), it will create an form to update (prepopulated)
* Methods to generate labels and inputs take one argument, the name of the attribute
* The submit button takes an optional argument for the text on the button
  * If you omit the argument, it will say either "Create Category" or "Update Category" accordingly (subbing in the name of your model)


## Why use form_for?

The form helpers are useful for a few reasons:

### Cleaner Code

Our new form code is much more consise, easier-to-read and update, and less
prone to errors than the old, more verbose form.

### Reduced Duplication

You may have noticed that our create / update forms are now exactly the same.
This is because Rails can detect whether we're creating a new object or editing
an existing one.

Thus, we can later on use the same view in both contexts. (This approach is
called using **partials**).

## Partials

Partial templates - usually just called "partials" - are another technique to
break down a view into more manageable chunks. With a partial, you can move the
code for rendering a particular piece of a view into a separate file, and
include it in other views. This is especially useful for reducing duplication
in our views.

Partials look just like regular views (using HTML and ERB), only their file
names MUST start with an underscore.

Anywhere we want to include a partial, we "render" the partial in that part in
the view.

There's
a lot of duplication in `views/categories/edit.html.erb` and
`views/categories/new.html.erb`.

Let's create a new partial, and call it `_form.html.erb`:

```bash
touch app/views/categories/_form.html.erb
```

Inside this partial, let's copy / paste the duplicated code:

```
<%= form_for @category do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>

  <%= f.submit %>
<% end %>
```

Now, in our views for `new` and `edit`, let's replace the form code with
rendering the partial:

```
<%= render partial: "form" %>
```

Notice that the underscore is ONLY in the file name, when we refer to the
partial (when rendering it), we OMIT the underscore.

There are more complex ways to use partials, such as passing in variables to
be used by the partial, but most of the time, we don't need such functionality.

In cases where we don't need to set any options when we render the partial, we
can use the shorter syntax and omit the word `partial:`

```
<%= render "form" %>
```

## LAB

* Open up `intro_to_rails_todo_app`
* Create these controller actions and views for category:
  * Create
  * Update
  * Index
  * New
  * Edit
  * Show

* Put the form you use to Create and Update categories in a partial named `_form.html.erb`


