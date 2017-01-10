---
title: Server Side Rendering in Express
type: lesson
duration: '2:00'
creator:
    name: Colin Hart, adapted by Marc Wright
    class: WDIr-R2D2
---

# Views in Express

##Objectives

- Set up Handlebars with Express
- Create and render views in an Express application
- Render views dynamically (Server side rendering)
- Link to static assets in an Express application
- Understand layouts and templating

<br>

## Views in Express - Intro


#### What is server side rendering?

- **Server Side** rendering is like a traditional restaurant (Chilis!!). 
    - You place an order (request) and the waiter delivers it to the kitchen for assembly
    - Ingredients (data) are combined and placed into an oven (Node/Express/Handlebars) 
    - The fully baked dish (HTML) is then delivered to your table via the waiter (response)
- **Client Side** rendering is like a Hibachi restaurant. 
    - All of the ingredients (data) are delivered to your table initially (browser) and ready to go
    - Each dish (web page view) is assembled by the chef (AngularJS) in real time as requested

<br>

#### What are handlebars?

![](https://i.imgur.com/gMD515j.png)

http://handlebarsjs.com/

Handlebars allows us to embed JS variables inside of our HTML and render it as text. Our server injects the variables into the HTML document before sending it to the client.

The client/brower will never see the variables or the handlebars syntax, only the values. The HTML document is "fully baked" when the browser receives it.

A similar concept: remember string templates? If we use the `${}` syntax inside of our string template it lets us run JS, e.g. call a function, input a variable, add some numbers whatever. For example:

```js
var name = "Marc";

console.log(`Hi, my name is ${name}`);
// Hi, my name is Marc
```

Handlebars gives us a similar functionality but instead of injecting JS into a string, it allows us to inject js into our html page.

There are certainly other template engine options out there such as Pug (https://pugjs.org/api/getting-started.html) and Embedded Javascript (http://www.embeddedjs.com/). 

Handlebars is fun and one of the easiest to use. It also closely resembles the syntax we'll use for AngularJS which is another reason we're using it.

<br>

## Setting up our app to use Handlebars

For this lesson we're gonna build on to the `hello-express` app from this morning. Watch me walk through the following steps below. Then you'll have time to practice them yourself. I suggest you keep your `nodemon` server running in one tab and open a 2nd tab for commands.

1. To install handlebars into our node application enter the following in the terminal:

    ```bash
$ npm install --save hbs
```

    > What does `--save` do for us again?

1. We need to require the hbs module in `server.js`. (should be around line #3, below `var express` and `var app`):

    ```js
var express = require('express'); // Loading express on our server
var app = express(); // install express on our server
var hbs = require('hbs');
```

    > What does `require()` do?

2. Then we need to set Express's view engine to be handlebars inside of `server.js`. We'll also tell our app where to find our views. We're using the Express method `.set`:

    ```javascript
app.set("view engine", "hbs"); //tells Express what to use for rendering templates
```
    > NOTE: `.set()` is used to configure Express. 
    
    > NOTE: Express will look for view templates in a folder named `views`
    
    > https://expressjs.com/en/guide/using-template-engines.html

1. Create a directory called `views` and let's make a view for our first `/greeting` route. We're also gonna create a layout file (more on that soon!). We'll do this in the root directory of our application. In the terminal:

    ```bash
$ mkdir views
$ touch views/greeting.hbs
$ touch views/layout.hbs
```

    The Handlebars extension is `.hbs`. This tells our server that this file contains Handlebars code and that it should be converted to HTML.

<br>

&#x1F535; **YOU DO**

Follow the 4 steps above and add Handlebars to your app.

<br>



## How do we use Handlebars?

Everything we've done so far has been in order to configure handlebars with our application. You'll need to go through these steps every time you need to make a new express application.

1. Remember how we used query parameters earlier? We can use those just as before but rather than sending them we can pass them to our view and render it as html.

    ```javascript
    app.get('/greeting', function(req, res) {
        console.log(req.query);
        
        res.render('greeting', {
		  data: req.query.saying
        });
});
```

    So instead of sending a string directly to the response of that get request, we instead want to render a view. The `.render` function takes two arguments here. 

    - The first is the view we want to render. 
    - The second argument is an object. We can use the keys in this object inside the view to access the values in these
key-value pairs.

1. When we go to `http://localhost:3000/greeting?saying=hii!` our view is empty! Let's go ahead and change that now. In
`views/layout.hbs`:

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Hello Express</title>
            <link rel="stylesheet" type="text/css" href="/css/styles.css">
        </head>
        <body>
            <h6>NAV BAR GOES HERE AND WILL APPEAR ON EVERY VIEW</h6>
         
            {{{ body }}}
         
            <h6>FOOTER GOES HERE AND WILL APPEAR ON EVERY VIEW</h6>
        </body>
    </html>
```


    The layout acts as a picture frame for all of our views. It's a way to DRY up our code. For example, if we want a nav bar or a footer on every page we would include it here.
    
    The `{{{ body }}}` is where each individual view (depending on the route) will be inserted into the HTML.

2. Then in `views/greeting.hbs`

    ```html
    <h1> Here is our greeting route response!</h1>
    <p>{{ data }}</p>
```

4. Try this URL `http://localhost:3000/greeting?saying=hii!`


> Inspect the body in the dev tools. There is no trace of `{{}}`. Why?

<br>

&#x1F535; **YOU DO**

Walk through the steps above in the "How do we use Handlebars?" section to add on to your app.

<br>

## One step further...

What if we had an array for our favorite foods in `server.js` and we wanted to render them into a view?

1. Create a new file in views:

    ```bash
touch views/favorite-foods.hbs
```

2. Let's create a new route for favorite foods and add an array of faves.

    ```javascript
    app.get('/favorite-foods', function(req, res) {
        var favoriteFoods = ["Reese's Peanutbutter Cups", 'Taco Soup', 'Grape Nuts', 'Beer', 'Whatever Blue Apron brings me'];

        res.render('favorite-foods', {
		      data: ____
        });
    });
```

    What would the value of data need to be in order to render the array in our `greeting.hbs`?

    ```javascript
    app.get('/favorite-foods', function(req, res) {
        var favoriteFoods = ["Reese's Peanutbutter Cups", 'Taco Soup', 'Grape Nuts', 'Beer', 'Whatever Blue Apron brings me'];
        
        res.render('favorite-foods', {
		      data: favoriteFoods
        });
    });
```

3. Our `foods.hbs` file is going to need the same code as in our `greeting.hbs` file:

    ```html
    <h1>My Favorite Foods</h1>
    <p>{{ data }}</p>
```

    Refresh the page in your browser. What is the output? Handlebars converted our array into text with commas, actually very similar to when we call `toString()` on an array.

<br>

&#x1F535; **YOU DO**

Walk through the steps above in the "One step further..." section to add on to your app.

<br>

## Handlebars Loops 

But what if we wanted to to display this Array data in a `<ul>` with `<li>` tags? How have we accomplished this in the past... Vanilla JS or jQuery.

<br>

&#x1F535; **YOU DO**

Read through the Handlebars built in helpers documentation (http://handlebarsjs.com/builtin_helpers.html). Try to render the Array of foods as a `<ul>` with `<li>` tags like so:

<br>

![](https://i.imgur.com/uVzMiGU.png)

<br>

<details>

<summary>Solution for Handlebars Loops</summary>

We can iterate over a list using the Handlebars built-in `each` helper. Inside the block, you can use `this` to reference the element being iterated over.

In `foods.hbs`, replace your `<p>` tags with the following:

```javascript
<ul>
  {{#each data}}
    <li>{{this}}</li>
  {{/each}}
</ul>
```

1. We start our loop with `#each` and pass in the object (`data`)  that we want to loop over
1. `{{this}}` is the iterator for each item in the array so we surround it with `<li>` tags
1. We close our loop with `{{/each}}`

You can check out more [Handlebars Built In Helpers here](http://handlebarsjs.com/builtin_helpers.html)

</details>


<br>

## Add Static Assets

This is also a great time to note how we serve static assets. Notice that we linked a stylesheet in our layout file. Let's create a folder named `public` in our main `hello-express` directory. This allows our app to utilize CSS, JS, Fonts, Images, 3rd party library files, etc.

Let's add an external stylesheet:

1. In our `server.js`, let's add:  

    ```javascript
app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'
```

    > `.use()` is another method that Express make available to us. It's called "Middleware". Middleware gives us the ability to do stuff between the request and response like authentication, log info to our server logs, etc.

1. Create a public directory: `mkdir public` 
1. Create a css directory inside: `mkdir public/css`
1. Create a `styles.css` file: `touch public/css/styles.css`
1. Add a CSS rule to test it out:
    
    ```css
    body {
      background-color: red;
      font-family: Georgia;
    }
``` 

<br>

&#x1F535; **YOU DO**

Walk through the previous steps and add static assets to your app.

<br>

## LABTIME

For labtime you're gonna create a new Express app from scratch that will render your favorite tv shows. Essentially, you're gonna walk back through the two lesson readme files from today and practice what you've learned.

1. Create a new Express App. Here are a few steps to get you started.
    
    ```bash
$ mkdir shows_app
$ cd shows_app
$ npm init
$ npm install --save express
$ npm install --save hbs
$ touch server.js
```

1. Create the necessary variables and require the appropriate modules in `server.js`

1. Set up your server and port using `app.listen()`

1. In `server.js`, create an `app.get()` route for `/shows`.  
1. Create an array called `var favShows` and add your faves.
2. Test out your route using `res.send` before dealing with views.

1. Update your route to render a view for `views/shows.hbs`. (Remember to create a `views` folder and include a `views/layout.hbs` file)

1. Add `{{}}` to your `shows.hbs` file that will render the shows inside an `<ol></ol>` using `<li></li>` tags

1. Add the code to `.use()` static assets.
2. Add a css file to your app for styling

**BONUS**

1. Add a javascript click event to your app in a separate JS file..
2. Add a proper nav bar
3. Add a proper footer
4. Add images to your `/public` directory
3. If you finish, walk back through the appropriate steps above and add another favorites resource to your app (e.g.- movies, songs, artists, comics).
    

<br>

## Extra Exercises

2. [99 Bottles](https://github.com/ga-dc/99_bottles_express)
3. [Ultimate Compliment](https://github.com/ga-wdi-exercises/compliment-express)
