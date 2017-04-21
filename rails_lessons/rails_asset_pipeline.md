# Objectives
* Review of design principles in Rails
* Discuss the advantages of using SCSS
* Explain the Rails Asset Pipeline
* Use SCSS to @import a bootswatch theme

## Draw MVC

Everyone pick a spot on the wall and draw the MVC diagram.  Use _solid lines_ for the parts of the diagram that must talk to each other, and _dotted lines_ for the parts where it is not required to talk to each other.

## Review design princles of Rails
Rails values...

* DRYness
* Separation of Concerns & Modularity
* Abstraction & encapsulation
* Convention over configuration

### Separation of Concerns

In writing a large application it is important to establish something known as **Separation of Concerns**, *writing modular code that focuses on one aspect within the application.* The benefit of this is similar to idea of **compartmentalization** with respect to a production line, which allows for *more rapid development* by being able to **divide and conquer** the construction of a product. Compartments can focus on one task and optimize functional concerns far outside the scope of other compartments, but still work together to achieve the same product.  Ultimately it reduces the headache of debugging and controlling a large application that can ultimately grow to a level of complexity that no one person could ever fully comprehend (nor want or need to).

### Organizational Principles

In order to manage the development of emerging aspects within a project it is important to construct a guideline that will shape how things are separated, a **design pattern**, which everyone can use to maintain **consistent** organization of different aspects. This is a *conventional* choice that helps to understandably scale a project. Part of the role of a developer is to become familiar with using design patterns, but this takes time (and trust), as different patterns emphasize an array of qualities: scalability, modularity, security, performance, et cetera.

## Discuss the advantages of using SCSS

* Organization
* DRY CSS
* Readability
* Maintainability

#### What's the difference between SASS and SCSS?

To answer this question, let's look at what the SASS documentation has to say about it.

<i>There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension.

The second and older syntax, known as the indented syntax (or sometimes just “Sass”), provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties. Files using this syntax have the .sass extension.</i>

Let's jump into four examples of how SCSS makes our lives easier.

#### Variables

SCSS give us the ability to assign specific variables with styling attributes.  Look at the example below, how would this be advantageous if we were to change our primary color?

```css
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
_RESULTS_

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

#### Nesting

Nesting gives us the ability to write organized and DRYer CSS code.  Look at the example below, how is our code DRYer?

```css
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```
_RESULTS_

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

#### Import

We can import other CSS files with easy syntax `@import`.  We're going to show why this is so useful later on in the lesson.

```css
// _reset.scss

html,
body,
ul,
ol {
   margin: 0;
  padding: 0;
}
```

```css
// base.scss

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

#### Mixins

Mixins almost act like private methods in our SCSS file.  Since CSS can be a bit tedious at times when creating design compatible with multiple browsers, we might use a Mixin to make DRYer and more readable code.

```css
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```
_RESULTS_

```css
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

<br>
## Rails Asset Pipeline

[Launchschool Article](https://launchschool.com/blog/rails-asset-pipeline-best-practices)

- Allows for pre-processors such as Sass and ERb
- Minifies JS and CSS files
- Combines them all into one, so there are less requests to the server
- Browsers allow 10 parallel requests at any time, so if you have 15+ JS/CSS files, it can become a serious hindrance to load time

***How it works in a Nutshell***

- Your Javascript files and CSS files all get compressed into 2 files: application.js and application.css.
- pplication.js and application.css get sent down to the public/assets directory and are served up for your viewing pleasure.
- Your images and other files in app/assets get sent down to public/assets as well and are served from there.

***Three Features***

- Concatenation
  - Rails uses Sprockets, a fancy term for puppetmaster, to take all your Javascript files and merge it into one single .js file. It does the same thing for CSS. This is brilliant because serving up less files means load times are that much faster.
  - 15 Javascript or CSS files take longer than 1 Javascript or CSS file to load.

- Compression
  - Once those files have been merged together, they undergo a metamorphosis and are shrunk down to a more manageable size. Extra whitespace and comments are removed.
  - When we code, our CSS files are formatted in a way to make things look pretty and visually appealing. But when you’re a machine, you don’t need comments or pretty indents and spaces. All this equates to faster loading times, since it’s less bits being transferred.

- Precompilation (of high-level languages)
  - Some of the best things about being a web developer right now is being able to use handy new next-gen higher-level languages. No longer do we have to survive by actually writing out every. single. HTML tag by hand. No longer do we have to write out lines and lines of code and make sure you get every bracket, comma, and semi-colon right.
  - Now we have meta-languages Sass, ERB, and the list goes on! At this stage, Sass files get converted – precompiled – to CSS.

<br>


## Making our app look even better using Bootswatch

It's time to start paying attention to how our app looks. We've been learning and using Bootstrap for a little while now, so let's style our application! There is an awesome resource called bootswatch that lets us use free templates which means we can use bootstrap and not have our app look like every other bootstrap page!

#### Getting Started
Let's use `intro_to_rails_todo_app` for this exercise.

I'm going to a import bootswatch theme first, and then you'll get a chance to implement your own theme.

We need to include a couple gems in order to get started. In our Gemfile let's include

```ruby
gem 'bootstrap-sass'
gem 'bootswatch-rails'
```

After running `bundle` in the terminal, let's create a new file in our `app/assets/stylesheets` folder named `custom.css.scss` so that we can include our scss extentions. Now paste in the following code

```ruby
# The following will import variables, bootstrap itself, then the bootswatch style

@import "bootswatch/journal/variables";
@import "bootstrap";
@import "bootswatch/journal/bootswatch";

# If you want to import your own styles just use

@import "name_of_scss file"

# Here are the free themes you can use:

// Amelia
// Cerulean
// Cosmo
// Cyborg
// Darkly
// Flatly
// Journal
// Lumen
// Paper
// Readable
// Sandstone
// Simplex
// Slate
// Spacelab
// Superhero
// United
// Yeti
```
