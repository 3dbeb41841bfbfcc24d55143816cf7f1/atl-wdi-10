---
title: Intro to Express
type: lesson
duration: '2:00'
creator:
    name: Colin Hart, adapted by Marc Wright
    class: WDIr-R2D2
---



# Intro to Express

## Learning Objectives

- Understand Express
- Use `npm` to manage project dependencies
- Use `require` to organize code
- Install Nodemon
- Understand request/response
- Understand dynamic segments



<br>

## What are we learning today?

Today we're going to learn how we set up and configure a server that will listen for HTTP requests from the browser.

<br>

## Opening Framing
Today we'll be talking about ExpressJS (https://expressjs.com/)
the "e" in the MEAN stack. Which incidentally is super buzz wordy right now. Express is a "Fast, unopinionated, minimalist web framework for Node.js"

> Node.js is not a framework. It is an application runtime environment that
allows you to write server-side applications in javascript. Javascript that
does not depend on a browser.

Some frameworks, like Rails, are very opinionated frameworks. 

Today, we'll be learning about Express, which is much less opinionated. We have a lot of freedom in how we structure our application (folders/files, how to load different files, managing dependencies, etc)

<br>


## Recap

&#x1F535; **YOU DO: 5m breakout rooms**

Discuss the following questions:

- What are the HTTP verbs and how are they used?
- What are the parts of a url and what is the purpose of each?
- Explain request/response

<br>

## What is npm?

&#x1F535; **YOU DO:** Take 5 minutes to read and watch the video here (https://docs.npmjs.com/getting-started/what-is-npm)

> Summary: npm, short for node package manager. Allows us to install dependencies for our nodeJS application.

<br>

## Hello World - Express

I'm going to move through three steps over the next ten minutes. I'll share my screen first and then I'll give you some time to do it on your own. Don't overthink it, it's just configuration and setup. You're going to need to become very familiar with this process.

I **HIGHLY** recommend you take notes on this process, and write the commands down, as well as remember that these steps are listed in the instructor folder:

<br>



### STEP 1 - Initialize a simple hello world express application.

In the terminal:

```bash
$ mkdir hello-express
$ cd hello-express
$ npm init
$ atom .
```

- `$ npm init` will initialize a new NodeJS application. Upon initialization it will prompt you for some user input to update the `package.json`.


- If we hit enter and use all of the default values and we take a look at the contents of the `package.json` file, we'll see something like this:


![](https://i.imgur.com/mP6KyeW.png)


- The `package.json` file contains meta data about your app or module. More importantly, it includes the list of dependencies to install from npm when running npm install. **We** certainly don't want to keep track of them!


> Pro Tip... `npm init -y` is a shortcut that will select all the defaults

<br>

&#x1F535; **YOU DO:**

1. Walk through STEP 1 above to instantiate your `hello-express` app.

<br>

### STEP 2 - Install Express

1. Let's install the express node module using `npm`. In the terminal:

    ```bash
$ npm install --save express
```

    > the `--save` flag allows us to update the package.json to include the dependency you just installed. In the terminal, run `$ cat package.json` again to observe. We could've also entered manually. 
    
 As we saw during `npm init`, the default file for a node app is `server.js`.  We can certainly change this, but we'll use the default for now.

<br>

&#x1F535; **YOU DO:**

1. Walk through STEP 2 above and add Express to your `hello-express` app.

<br>

### STEP 3 - Create an `server.js`

2. Let's make a new file `$ touch server.js` and place the following contents. In `server.js`:

    ```javascript
    var express = require('express'); // Loading the express module on our server
    var app = express(); // Create a new instance of express on our server
    

    app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
    });

    var port = process.env.PORT || 3000; // telling the server where to listen for requests

    app.listen(port, function() {
    // telling the server where to listen for requests on port 3000

      console.log('hello-express is listening on port 3000');
}); // actualizing the above line
```

<br>



### What does all that mean??

#### `require()`

`require` is a JS keyword we're going to become very, _very_ familiar with. It's a feature of Node.js that loads modules. We're "requiring" the express module and saving all of that code to the variable `express`. 


#### `var app = express()`

Even requiring express isn't quite enough. We've now required all of Express's code in the server but Express is an actual application that needs to be invoked. 

When we invoke express we get an instance of all the functionality express provides and we save it to a variable called `app`.


#### `app.listen(port, callback)`

With express invoked and running we now have access to various functions and properties that allow us to configure and set up our application. The first one we're going to use is the `listen ` function. It tells express and node to listen for HTTP requests on whatever port is passed in.

<br>

&#x1F535; **YOU DO:**

1. Walk through STEP 3 above and create an `server.js`.

<br>

### Run our App

If we run the application (`$ node server.js`) we can see in the terminal `app listening on port 3000`. This means our server is running. Let's try going to the localhost of that port number. What happens?


#### OH NOES, what's going on here?

Basically we've told the server what port to listen on (3000), but we didn't specify what to do if a user goes to the `"/"` (root) route. 
    
1. Use `ctrl + c` to stop the server.
    
2. Let's update `server.js`:

    ```javascript
    app.get("/", function(req, res){
      //display 'Hello World!'
      res.send('Hello World!');
      
      //write will work also
      res.write('<h1>Hello World!</h1>');
    });
```
    
1. Let's try restarting the server (`$ node server.js`). You should now see `Hello World`



   <br>


&#x1F535; **YOU DO:**

1. Walk through the section above to make "Hello World" render in the browser.

<br>

## Nodemon

Cool, but it's kind of a pain that we have to restart the server every time we make an update to our files... 

[Nodemon](http://nodemon.io/) is an excellent npm module that will automatically restart your server upon a file change.

```bash
$ npm install --global nodemon
```

> When using the `--global` flag (-g for short), we're specifying that nodemon
will be installed "globally" (not per project) so we can utilize nodemon across
all of our node applications.

<br>

Then we start up our application a bit differently now. In the terminal:

```bash
$ nodemon server.js
```

<br>

&#x1F535; **YOU DO:**

1. Install Nodemon and restart your server.

<br>

## RECAP - What have we done so far?

We, and actually you, just built the foundation of a server and your first web application!

- We created a file (`server.js`) that contains instructions for the server (Node).
- **Node** is our server software that we've configured to run on a port to listen for incoming HTTP requests from the browser.
- We installed **Express** which is our lightweight JS framework built to help simplify our job of building an application that can interact with HTTP requests coming from the internet.
- We defined a single root route (`/`). When Node hears a request to `http://localhost:3000` it will serve "Hello World" as a response. All of our local routes for this app will start with `http://localhost:3000`
- We installed Nodemon which will automatically restart our node server whenever a change is detected.

<br>

&#x1F535; **YOU DO**

Breakout rooms, groups of two. Remember: We're still here and you can still ask questions in Slack! We'll spend 15 minutes on this exercise and then I'll bring you all back to the main room.

http://expressjs.com/en/starter/basic-routing.html

1. Write a second route underneath the first that listens for `/greeting` and responds with `'HEYY WDI Remote!'`

1. Write a third route underneath the that one that listens for `/rihanna` and responds with `"Work work work work work"`

<details>
<summary>SOLUTION</summary>

```javascript
app.get('/greeting', function(req, res) {
  res.send('HEYY WDI Remote!');
});

app.get('/rihanna', function(req, res) {
  res.send("Work work work work work");
});
```

</details>


**Stretch Goal**: Implement `req.query` functions in one of your routes explanation here: http://expressjs.com/en/api.html#req.query


<br>

## BREAK

<br>


## Request and Response

#### req argument

The `req` argument is an object that contains information about the incoming HTTP **request**:

- req.route
- req.query
- req.params
- req.body (see bodyParser below)

> You can also use `request`, but we use `req` for brevity.

#### res argument

the `res` argument is another object that contains information about the **response** we want to send to the server.

We initially started with using `res.send` to just send text to the browser, when using handlebars however, we can use `res.render` to render an html/hbs file.

We can also use `res.redirect` to trigger another route before sending a response back to the browser

> You can also use `response`, but we use `res` for brevity.

<br>

You can check out the Request and Reponse headers in the dev tools Network tab. They contain a lot of key/value pairs that we'll discuss and use throughout the course.

![](https://i.imgur.com/DIA7MR4.png)

<br>



## URL Params

Params (short for "parameters") is an object attached each `request` to the server. We can send params via the URL. Let's update `server.js` to include:

```javascript
app.get("/:name", function(req, res){
  console.log(req.params);
  res.send(`hello ${req.params.name}`);
});
```
Try this URL: `http://localhost:3000/schmitty`. What's returned?

**CFU:** How many routes do we currently have? What are they?

<br>

#### Why are these important?

Eventually we'll use these "wildcard" params to grab specific info from our app. For example, if we were builing a Facebook type of app and wanted to grab a specific friend of a specific user, maybe we'd build a route that looks like this:

`http://localhost:3000/users/:user_id/friends/:friend_id`

Then, we could send a request like this:

`http://localhost:3000/users/1/friends/2`

<br>

&#x1F535; **YOU DO** 

1. Create a route that uses food as a parameter
2. The route returns a String that includes the food (e.g.- "I really love pizza").



<br>


## Query Parameters

Our route is a fixed path to some resource (an html page, a piece of data in our database, an image etc.) and we can augment or support that path by providing parameters.

The the query parameter pattern should be familiar, it's essentially a key and a value:

```javascript
?q=blah&foo=bar
```

The `?` tells the server that all text following should be interpreted and parsed as query parameters. `q` being the key and `blah` being the value. Unlike arguments in functions, or key/value pairs in JS objects, query parameters are not comma separated but separated by an `&` so our second query parameter is `foo` and it's value is `bar`. 

A `console.log()` to our server log would look something like this:

```js
{
    q:   "blah",
    foo: "bar"
}
```


Let's make our `/:name` route more dynamic!

```js
app.get("/:name", function(req, res){
  console.log(req.params);
  console.log(req.route);
  console.log(req.query);
  res.send(`hello ${req.params.name} say ${req.query.first_name}`);
});
```

**Try this example:** `http://localhost:3000/schmitty?first_name=marc`

Let's add a 2nd query param

```js
app.get("/:name", function(req, res){
  console.log(req.params);
  console.log(req.route);
  console.log(req.query);
  res.send(`hello ${req.params.name}, my name is ${req.query.first_name} ${req.query.last_name}`);
});
```

**Try this example:** `http://localhost:3000/schmitty?first_name=marc&last_name=wright`

<br>

#### Why are these important?

You use these all the time on Amazon, Ebay, Airbnb, etc. (basically anytime you search or query an app). For example, the query to search for Rihanna tickets on Atlanta Craigslist looks like so:

`http://atlanta.craigslist.org/search/tia?query=rihanna`

<br>


&#x1F535; **YOU DO**

1. Write a route at `/sightings` that takes a query parameter of `state` and `sights` and responds with an object like this example:

    ```javascript
{
        state:`<the state passed in>`, 
        sights: `<how many ufo sightings you think there are in that state>`
}
```

2. Write a `/bigfoot` route that takes a query paramater of `blurry` and...
   - If blurry is true send the response: `"It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside. Run, he's fuzzy, get out of here."` 
   - If blurry is false respond with:  `"A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence."`


<details>
    <summary>SOLUTION</summary>

```javascript
app.get('/sightings', function(req, res){
  console.log(req.route); //just to checkout the server logs
  console.log(req.query); //just to checkout the server logs
  res.send(req.query);
});

app.get('/bigfoot', function(req, res){
  if (req.query.blurry == "true") {
    res.send("It's not the photographer's fault.");
  } else {
    res.send("A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence.");
  };
});
```
</details>

<br>

## Dynamic Segments

We do have a second way that isn't one or the other, we often use both dynamic segments and query parameters. For example:

	/hello/:name?human=true
	
What would this route look like?	

```javascript
app.get('/hello/:name', function(req, res) {
  res.send({params: req.params, queries: req.query});
});
```

Then try this route: `http://localhost:3000/hello/schmitty?human=true`

<br>

&#x1F535; **YOU DO**

1. Build a route at `/favorite/:noun` where `:noun` can be any thing that you might have a favorite of (e.g. - color, food, ... fabric?)

2. The route will return the parameter `:noun` in the String `I have a favorite <insert :noun here>`

3. Add the expectation of query parameters, so that hitting the following route: `/favorite/color?color=red` will return to the browser the String `I have a favorite color, it is red`

<details>
    <summary>SOLUTION</summary>

```javascript
app.get('/favorite/:noun', function(req, res) {
  if (req.query[req.params.noun]) {
    res.send(`I have a favorite ${req.params.noun}, it is ${req.query[req.params.noun]}`);
  } else {
    res.send(`I have a favorite ${req.params.noun}`);
  }
  console.log({params: req.params, queries: req.query});
});
```
</details>

<br>


## Order Matters

Keep in mind that when Express recieves a request it checks each route in order until it finds a pattern match. 

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

<br>


## Labtime


1. Make routes for  `add, subtract, multiply, divide` that will take two numbers as query parameters `num1` and `num2` and perform the operation on them specified in the route and send those answers to the browser.

    For example, this will send the number `15` to the browser:

    ```javascript
/add?num1=5&num2=10
```



2. Add a fifth route `/math/:operator`

3. Create a route that can do all four math operations using control flow. For example:

    ```javascript
    if req.params[operator] == 'add' 
        then add num1 and num2 
    else if 
        etc etc...
```

