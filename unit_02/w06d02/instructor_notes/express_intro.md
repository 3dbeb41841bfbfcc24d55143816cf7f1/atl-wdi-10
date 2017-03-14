---
title: Intro to Express
type: lesson
duration: '2:00'
creator:
    name: Colin Hart, adapted by Maren Woodruff
    class: ATL-WDI-9
---


# Intro to Express

## Learning Objectives

- Understand Express
- Use `npm` to manage project dependencies
- Use `require` to organize code
- Install Nodemon
- Understand request/response
- Understand dynamic segments



<br />

## What are we Learning Today?

Today, we are going to learn about how to set up and configure a server that will listen for HTTP requests from the browser.

<br />

## Intro
How many of you, prior to this course, had heard of the MEAN stack?  Today, we are jumping in.  We will be talking about [ExpressJS](https://expressjs.com/) the "E" in the MEAN stack. Which incidentally, is super buzz wordy right now. Express is a "Fast, unopinionated, minimalist web framework for Node.js".

> Node.js is not a framework. It is an application runtime environment that allows you to write server-side applications in javascript. Javascript that does not depend on a browser.

Some frameworks, like Rails, are very opinionated frameworks- meaning that it follows convention over configuration.  A Rails developer can go into any other Rails app, and understand the basic layout, because all Rails applications are built in the same way, with the same structure.  

Express, as we stated before, is much less opinionated. We have a lot of freedom in how we structure our application (folders and files, how to load different files, how to manage dependencies, etc).

<br />


## Recap

&#x1F535; **YOU DO: 5 minutes**

With you buddy, discuss the following questions:

- What are the **HTTP verbs** and how are they used?
- What are the different parts of a URL and what is the purpose of each?
- Explain a request/response

<br />

## What is npm?

&#x1F535; **YOU DO:** Take 5 minutes to read and watch this [video] (https://docs.npmjs.com/getting-started/what-is-npm)

> Summary: **npm**, short for node package manager. Allows us to install dependencies for our Node.js application.

<br />

## Hello World - Express

I am going to move through three steps over the next ten minutes. I will share my screen first and then I will give you some time to do the steps on your own. Don't overthink it, it is just configuration and setup. You are going to need to become very familiar with this process.

I **HIGHLY** recommend that you take notes on this process, and write the commands down, as well as try to remember that these steps are also listed in the instructor folder:

<br />



### STEP 1 - Initialize a Simple Hello World Express Application.

In the terminal:

```bash
$ mkdir hello-express
$ cd hello-express
$ npm init
// make sure that when you get to 'entry point' that you change 
that to 'server.js'.
// if you make a mistake, you can always type 'no' when it asks
you whether this is 'ok' at the end of the questions/set up
$ subl .
```

- `$ npm init` will initialize a new Node.js application. Upon initialization, it will prompt you for your input in order to update the `package.json`.


- If we hit enter and use all of the default values (except for the `server.js`) and we take a look at the contents of the `package.json` file, we'll see something like this:


![](https://i.imgur.com/mP6KyeW.png)


- The `package.json` file contains meta data about your app or module. More importantly, it includes the list of dependencies to install from npm when running npm install. **We** certainly don't want to keep track of them!  This makes it really easy for other people to work on the same app.  All they need to do is clone your repo, and then npm install all of the dependencies in order to start working on the app.


> **Pro Tip**: `npm init -y` is a shortcut that will select all the defaults for your `package.json` for you.

<br />

&#x1F535; **YOU DO: 2 minutes**

1. Walk through STEP 1 above to instantiate your `hello-express` app.

<br />

### STEP 2 - Install Express

1. Let's install the express node module using `npm`. In the terminal type:

    ```bash
$ npm install --save express
```

    > The `--save` flag allows us to update the `package.json` to include the dependency that you just installed. In the terminal, run `$ cat package.json` to observe these changes. We could have also entered express manually- to the dependencies list in our package.json file.  If we added Express this way, we would need to run npm install afterwards in order to install it. 
    
 As we saw during `npm init`, the default file for a node app is `index.js`.  If your package.json still uses this as the default, you should update it to `server.js`.

<br />

&#x1F535; **YOU DO: 1 minute**

1. Walk through STEP 2 above, and add Express to your `hello-express` app.

<br />

### STEP 3 - Create an `server.js`

2. Let's make a new file `$ touch server.js` and add the following contents:

    ```javascript
    var express = require('express'); // Loading the express module on our server
    var app = express(); // Create a new instance of express on our server
    

    app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
    });

    var port = process.env.PORT || 3000; // tells the server where to listen for requests

    app.listen(port, function() {
    // tells the server where to listen for requests on port 3000

      console.log('hello-express is listening on port 3000');
}); // actualizing the line above
```

<br />

### What does all that mean??

#### `require()`

`require()` is a JS keyword with which we are going to become very, _very_ familiar. It is a Node.js feature that loads modules. We are "requiring" the Express module and saving all of that code to the variable `express` on line one. 


#### `var app = express()`

Requiring Express isn't quite enough. We have required and assigned all of Express's code to the `express` variable, but Express is an application that needs to be invoked. 

When we invoke express, we get an instance of all of the functionality that Express provides.  We then save that instance to a variable called `app`.

#### `app.listen(port, callback)`

With express invoked and running, we now have access to various functions and properties that allow us to configure and set up our application. The first one that we are going to use is the `listen()` function. It tells express and node to listen for HTTP requests on whatever port is passed in.

<br />

&#x1F535; **YOU DO:**

1. Walk through STEP 3 above and create a `server.js`.

<br />

## Let's Run our App

If we run the application (`$ node server.js`) we can see our console.log in the terminal `hello-express is listening on port 3000`. This means that our server is running on port 3000. Let's try going to the localhost of that port number. What happens?

#### OH NOES, what's going on here?

Basically, we have told the server what port to listen to (3000), but we have not specified what to do if a user goes to the `"/"` or root/home route. 
    
1. Use `ctrl + c` to stop the server.
    
2. Let's update the `server.js`:

    ```javascript
    app.get("/", function(req, res){
      // display 'Hello World!'
      res.send('Hello World!');
    });
```
With the script above, we are telling the app that when a user goes to our home route at localhost:3000 (their request), that we will send back a response of 'Hello World!'    
    
1. Let's restart the server (`$ node server.js`) and reload the browser. You should now see `Hello World`.

<br />

&#x1F535; **YOU DO: 2 minutes**

1. Walk through the section above to make "Hello World" render in the browser.

<br />

## Nodemon

This is grrrrrrreat! (You can't not love Tony the Tiger.)  But it is kind of a pain to have to restart the server every time we make changes to our files... 

[Nodemon](http://nodemon.io/) is a very helpful npm module that will automatically restart your server when a file changes.

```bash
$ npm install --global nodemon
```

> When using the `--global` flag (-g for short), we are specifying that nodemon will be installed "globally" (not per project) so that we can utilize nodemon across all of our node applications.

<br />

After installing, we start up our application a little bit differently. In the terminal type:

```bash
$ nodemon server.js
```

Instead of `node server.js`. 
<br />
Pretty easy, eh?

<br />

&#x1F535; **YOU DO: 1 minute**

1. Install Nodemon globally and restart your server with the new nodemon command.

<br />

## RECAP - What have we done so far?

We just built the foundation for our server and for your first web application!

- We created a file (`server.js`) that contains instructions for the server (Node).
	- **Node** is our server software that we have configured to run on a port to listen for incoming HTTP requests from the browser.
- We installed **Express**, which is our lightweight JS framework, and was built to help simplify the job of building an application that can interact with HTTP requests coming from the internet.
- We defined a single root/home route (`/`). When Node receives a request via `http://localhost:3000`, it will serve "Hello World" as a response. All of our local routes for this app will start with `http://localhost:3000`, as we have set our default port to 3000.
- We also installed Nodemon which will automatically restart our node server whenever a change is detected, so we don't have to manually stop/restart our server every time a file changes.W

<br />

&#x1F535; **YOU DO (15 minutes)**

Get together with your buddy. Remember: We are here and you can still ask questions! Spend the next 15 minutes on this exercise.

http://expressjs.com/en/starter/basic-routing.html

1. Write a second route underneath the first that listens for `/greeting` and responds with `'HEY, WDI 9!'`

1. Write a third route underneath the that one that listens for `/rihanna` and responds with `"Work work work work work"`

<details>
<summary>SOLUTION</summary>

```javascript
app.get('/greeting', function(req, res) {
  res.send('HEY, WDI 9!');
});

app.get('/rihanna', function(req, res) {
  res.send("Work work work work work");
});
```
</details>

**Stretch Goal**: Implement `req.query` functions in one of your routes explanation [here](http://expressjs.com/en/api.html#req.query)

<br />
---

# Break Time

<br />

## Request and Response

#### The 'req' Argument

The [req](https://expressjs.com/en/api.html#req) argument is an object that contains information about the incoming HTTP **request**:

- req.route
- req.query
- req.params
- req.body (see bodyParser below)

> You can also use `request`, but we use `req` for brevity.

#### The 'res' Argument

The [res](https://expressjs.com/en/api.html#res) argument is another object that contains information about the **response** we want to send to the server.

We initially started with using `res.send` to just send text to the browser, when using handlebars however, we can use `res.render` to render an html or hbs file.

We can also use `res.redirect` to trigger another route before sending a response back to the browser

> You can also use `response`, but we use `res` for brevity.

<br />

You can check out the Request and Reponse headers in the Network tab in your Chrome dev tools. They contain a lot of key/value pairs that we will discuss and use throughout the course.

![](https://i.imgur.com/DIA7MR4.png)

<br />

## URL Params

**Params** (short for "parameters") is an object attached to each `request` to the server. We can send params via the URL. Let's update the `server.js` to include:

```javascript
app.get("/:name", function(req, res){
  console.log(req.params);
  res.send(`Hello, ${req.params.name}!`);
});
```
Try this URL: `http://localhost:3000/schmitty`. What is returned?

**CFU:** How many routes do we currently have? What are they?

<br />

#### Why are params important?

Eventually, we will use "wildcard" params to grab specific information from our app. For example, if we were builing a Facebook replica, and we wanted to grab a specific friend of a specific user, we might build a route that looks like this:

`http://localhost:3000/users/:user_id/friends/:friend_id`

Then, we can send a request like this:

`http://localhost:3000/users/1/friends/2`

<br />

&#x1F535; **YOU DO: 2 minutes** 

1. Create a route that uses 'food' as a parameter
2. The route should return a string that includes the food (e.g.- "I really love pizza").

Did anyone run into any issues?

<br />


## Query Parameters

Our base route is a fixed path to a specific resource (like an html page, a piece of data in our database, an image, etc.) and we can augment or support that path by providing parameters.

The query parameter pattern should be familiar, it is essentially a key and a value:

```javascript
?q=blah&foo=bar
```

The `?` tells the server that all of the text that follows, should be interpreted and parsed as query parameters, with `q` as the key and `blah` as the value. Unlike arguments in functions, or key/value pairs in JS objects, query parameters are not comma separated but separated by an `&`, so our second query parameter key is `foo` and it's value is `bar`. 

A `console.log()` of our query parameters would look something like this:

```js
{
    q:   "blah",
    foo: "bar"
}
```

Let's make our `/:name` route more dynamic by adding a 'first_name' query parameter!

```js
app.get("/:name", function(req, res){
  console.log(req.params);
  console.log(req.route);
  console.log(req.query);
  res.send(`Hello, ${req.params.name}. My name is ${req.query.first_name}.`);
});
```

**Try this example:** `http://localhost:3000/schmitty?first_name=maren`

If we wanted to be formal, we could add a 2nd query parameter of 'last_name':

```js
app.get("/:name", function(req, res){
  console.log(req.params);
  console.log(req.route);
  console.log(req.query);
  res.send(`Hello, ${req.params.name}. My name is ${req.query.first_name} ${req.query.last_name}.`);
});
```

**Try this example:** `http://localhost:3000/schmitty?first_name=maren&last_name=woodruff`

<br />

#### Again we ask, why are these important?

You actually use query parameters all the time on Amazon, Ebay, Airbnb, etc. - anytime you search or 'query' an app. For example, the query to search for Rihanna tickets on Atlanta's Craigslist looks like this:

`http://atlanta.craigslist.org/search/tia?query=rihanna`

<br />

&#x1F535; **YOU DO: 5 minutes**

1. Write a route at `/sightings` that takes a query parameter of `state` and `sights` and responds with an object that looks like this:

    ```javascript
{
        state:`<the state passed in>`, 
        sights: `<how many ufo sightings you think there are in that state>`
}
```
Also, send a response that asks 'How many ufo sightings do you think there are in `the state`? `the answer`.'

2. Write a `/bigfoot` route that takes a query paramater of `blurry` and...
   - If blurry is true, send the response: `"It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside. Run! He's fuzzy! Get out of there!"` 
   - If blurry is false, respond with:  `"A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence."`


<details>
    <summary>SOLUTION</summary>

```javascript
app.get('/sightings', function(req, res){
  console.log(req.route); //just to checkout the server logs
  console.log(req.query); //just to checkout the server logs
  res.send(`How many ufo sightings you think there are in that ${req.query.state}? ${req.query.sights}.`);
});

app.get('/bigfoot', function(req, res){
  console.log(req.route); //just to checkout the server logs
  console.log(req.query); //just to checkout the server logs
  if (req.query.blurry == "true") {
    res.send("It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside! Run! He's fuzzy! Get out of there!");
  } 
  else {
    res.send("A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence.");
  }
});
```
</details>

<br />

## Dynamic Segments

We do have another way that isn't one that we have previously discussed.  We often use dynamic segments and query parameters. For example:

	/hello/:name?human=true
	
What would this route look like?	

```javascript
app.get('/hello/:name', function(req, res) {
  res.send({params: req.params, queries: req.query});
});
```

Try this route: `http://localhost:3000/hello/schmitty?human=true`

<br />

&#x1F535; **YOU DO: 5 minutes**

1. Build a route at `/favorite/:noun` where `:noun` can be any favorite 'thing' (e.g. - color, food, song, movie, jeans)

2. The route will return the parameter `:noun` in the string `I have a favorite <insert :noun here>.`

3. Add the expectation of query parameters, so that hitting the following route: `/favorite/color?color=red` will return to the browser the string `I have a favorite color, it is red.`

<details>
    <summary>SOLUTION</summary>

```javascript
app.get('/favorite/:noun', function(req, res) {
  if (req.query[req.params.noun]) {
    res.send(`I have a favorite ${req.params.noun}, it is ${req.query[req.params.noun]}.`);
  } else {
    res.send(`I have a favorite ${req.params.noun}.`);
  }
  console.log({params: req.params, queries: req.query});
});
```
</details>

<br />

## Order Matters

Keep in mind that when Express recieves a request, it checks each route in order until it finds a pattern match. 

For example, if you order your routes like this:

```js
app.get('/:name', function(req, res){
    ...
});

app.get('/greeting', function(req, res){
    ...
});
```

and you send a request to the URL `http://localhost:3000/greeting` which route will Express think you want? In this example, you want to make sure your "wildcard" `/:name` route comes **AFTER** `/greeting` so that Express will pattern match these correctly.

<br />

## Lab Time


1. Make routes for  `add, subtract, multiply, divide` that will take two numbers as query parameters `num1` and `num2` and perform the operation specified in the rout,e and send those answers to the browser.

    For example, this will send the number `15` to the browser:

    ```javascript
/add?num1=5&num2=10
```

2. Add a fifth route `/math/:operator`

3. Create a route that can do all four math operations using control flow. For example:

    ```javascript
    if req.params.operator === 'add' 
        then add num1 and num2 
    else if 
        etc etc...
```

