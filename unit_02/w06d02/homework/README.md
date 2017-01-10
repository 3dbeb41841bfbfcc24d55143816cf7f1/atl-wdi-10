[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Homework : Pizza Express

In this assignment, we will create a Pizza Express app, serving up pizzas in a jiffy! Create the pizza of your dreams.

## Setup

Make sure that you are on the `master` branch of your `wdi-remote-...` repo.
Then run `git pull upstream master` to pull the latest materials from the
instructors' repository. You shouldn't hit a merge conflict here, but if you do,
flag down an instructor right away.

## Exercise Objectives

- gain practice installing [Express](http://expressjs.com/) and [Handlebars](http://Handlebarsjs.com/)
- gain practice setting up an `express` application from scratch
- gain meaningful experience with routing and views


## Directions

### Part 1: Installing & Setting up our Express app

1. In the terminal: `mkdir pizza-express` in the `homework` directory
2. `cd` into the `pizza-express` folder
3. Initialize npm with `npm init`
  - Hit enter to accept the defaults
4. Install Express `npm install express --save`
5. Verify express was installed locally by checking `package.json`:

   ```json
   "dependencies": {
     "express": "^4.13.4"
   }
   ```

6. `touch app.js` in `pizza-express` directory. We will be writing our code here.
7. Create your server in `app.js`:

  ```javascript
  // app.js

  //require express package
  var express = require('express');
  //save an express module as 'app'
  var app     = express();
  // assigning 3000 as our port
  var port    = 3000;

  // tells the server to listen for requests on port 3000
  app.listen(port, function(){
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
  });
  ```

8. In terminal, run your server with `node app.js` and confirm on your terminal you are connected. Visit `localhost:3000` on your browser.

9. git add, and git commit with the message "set up express server"

### Part 2: Express Routing
On `app.js` we will create 3 routes.

1. Make a GET route for `"/"` root route. When a user visits this route on `localhost:3000/` they will see the string "Welcome to Pizza Express!"

2. Make a GET route for `/topping` that has 1 variable destination for the type of topping. When a user visits this route on `localhost:3000/topping/pepperoni`, they will see the string "`pepperoni` pizza! Good choice." The syntax for the route will look like this:

  ```
  app.get('/topping/:type', function(req, res, next) {

      res.send( // something );
  });
  ```

3. Make a GET route for `/order` that has 2 variable destinations (# of pizza, pizza size). When a user visits this route on `localhost:3000/order/10/medium`, they will see "Your order for `10` `medium` pizzas will be ready in 1 minute!" The syntax for the route will look like this:

  ```
   app.get('/order/:amount/:size', function(req, res, next) {

       res.send( // something );
   });
  ```

4. git add, and git commit with the message "completed GET routes"

<details><summary>.. Stuck?</summary>
- If you're running your app with `node app.js`, don't forget to restart your terminal to view new changes. You can do this with `ctrl + c` to close node, and run `node app.js` again.

- To avoid the manual shutting on/off of your node server, you can use nodemon. Just make sure your javascript file in `package.json` matches with `app.js`

- You will be sending a string ex: `res.send("Some message")`

- Don't forget you can debug by console.logging inside your routes. All server-side console.logs are visible in the terminal only.
</details>

### Part 3: Express Views & Handlebars
We are going to add views to your Pizza Express app and spice things up.

1. In the `pizza-express` directory, install and set up Handlebars: `npm install --save hbs`
2. Double check package.json to make sure it was installed
3. In `app.js` require hbs + set up the view engine:

  ```
  var hbs = require('hbs');

  app.set("view engine", "hbs");
  app.set('views', './views');
  ```

4. Create a `views` folder in `pizza-express`. We are going to create 4 view (Handlebars) files, 1 for each route + 1 layout file. Make sure these are INSIDE the `views` folder:
  - layout.hbs
  - index.hbs
  - toppings.hbs
  - order.hbs

5. git add, and git commit with the message "set up hbs views"

<details><summary>.. Stuck?</summary>
- Make sure you installed Handlebars properly with `npm install hbs --save` in the correct (current working) directory `pizza-express`

- Make sure your folder structure is correctly set up. It should look something like this:

  ```
  > pizza-express
    > node_modules
    > views
       - layout.hbs
       - toppings.hbs
       - order.hbs
    - app.js
    - package.json

    // Note:
    // > denotes directory
    // - denotes file
  ```

- Check your file extension names. It should be `.hbs` not `.html`

- Did you save your files after making changes?

- Did you restart your server after making changes?
</details>



### Part 4: Tie it together
Now we have to connect our routes with our views and pass data to the client by modifying the routes and adding handlebar syntax.

Our outcome will LOOK the same on the client, but we'll change things "under the hood".

1. Edit the 3 routes so that instead of sending a string with `res.send("Some String Message")`, you are now passing an OBJECT with data using `res.render(.....)`.

  <details><summary>Super Hint Example:</summary>
  ```js
  //app.js

  app.get("/test/:someValue", function(req, res, next){
    res.render("index.hbs", {
      message: req.params.someValue
    });
  });

  //index.hbs
  <h1>My test message</h1>
  My message is {{message}}, woohoo!
  ```
  </details>



2. Set up your Handlebars page with Handlebars. You will want to begin with `layout.hbs` and fill out the rest of the hbs pages. The pages will still display the same messages.

3. git add, and git commit with the message "refactored routes and added views"

<details><summary>.. Stuck?</summary>
- Make sure Parts 1-3 are airtight.
- Refer to the lesson's markdown for syntax and double check your syntax
- Did you restart your server after making changes?
</details>


### Reach Goals
1. Add a 4th "catch" route. This will be a "404 Page Not Found" route in which if the user visits any route besides "/", "/toppings", or "/order", the server will "catch" the user is trying to access a non-existant route, and the user will see a "404 Page Not Found" message. For example, a request to `localhost:3000/pizza` will respond with a 404 message instead of "Cannot GET /pizza"

2. Add Static Assets. Our app works! But it looks pretty sad. Spruce it up with CSS:
   - Make the background with [this image, tiled](https://s-media-cache-ak0.pinimg.com/originals/36/10/06/3610062ed612bf558fc08ed252fe6241.jpg)
   - Choose a [Google Font](https://fonts.google.com/)
   - Make the font size 36px

3. Create header and footer [Handlebars partials](http://handlebarsjs.com/partials.html) and call them in all your view files. Handlebars allows for template reuse through partials. Partials are normal Handlebars templates that may be called directly by other templates.

## Submitting Your Work

  When you're ready to submit your work,

  1.  Add, commit, and push your code to your fork of the class repo.
  2.  File an issue on the class repo titled "Your Name -- wXXdXX".

  The issue should include:

  -   A link that points back to your fork.

  -   A 'comfort' score on how you feel about the material, from 1 (very
      uncomfortable) to 5 (very comfortable)
