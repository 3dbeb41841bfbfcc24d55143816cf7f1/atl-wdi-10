# Part One — Headfirst into Node and HTTP

Touch a file called `server.js` and paste the following code into that file

```js
var http = require('http');

var server = http.createServer().listen(3001);

console.log('I\'m listening on port: 3001');

server.on('request', function(request, response) {
  console.log(request.url);

  response.writeHead(200, {'Content-Type': 'text/html'});

  response.write('<html>Cool Story Bro');
  response.write('<script>console.log(\'Heyooo\');</script>');
  response.write('</html>');
  response.end();
});
```

1. cd into the directory containing `server.js` and run the file using `$ node server.js`

2. After running the file, makea get request to your server using cURL `$ curl localhost:3001` and examine the response and compare the response to the code in server.js. Take notes on what you think is happening.

3. Next, open your browser and make a get using the browser. Go to http://localhost:3001, open your chrome dev tools and compare the response you see in the browser to the response you saw in the terminal after curling and to the code in server.js

## What's actually happening here?

I'm going to go line by line and walk you through what's happening here.

Node is comprised of many different tools called packages. We'll be using many of these over the next two units. They're just libraries of code, similar to when you required jQuery using a CDN, these packages are just Node flavored.

In `server.js` we're requiring one package called `http`, which is built into node, given what you've learned about http so far you might be able to guess what it does. It allows us to create a server that lives on our local machine, it can listen for requests and send responses. Our server is not deployed to the internet so it can only be accessed locally.

Using the `require` method we save the library to the variable `http`, which gives us access to all the methods and behaviors built into the package. You can read it's documentation [here](https://nodejs.org/api/http.html).

The next line `var server = http.createServer().listen(3001);` calls the `createServer` method built into `http` and then calls `.listen` passing it the number `3001` as an argument. Reads like English a little doesn't it?

> Create an HTTP server that listens for requests at port 3001 and save the resulting created server to the variable `server`

We're going to skip the console.log and go straight to `server.on`. We're now calling the `.on` method on our create server and passing it two arguments, a string `'request'` and a callback that has two arguments, `request` and `response`.

> When the server receives a request invoke the callback.

The callback is responsible for building and sending the response back to the client when the server receives a request.

You could modify the code in `server.js` to inspect what the argument request holds, `console.log(request)` but it's just a Javascript object that holds all of the information received in the request.

`response` is also an object. We call the `response.writeHead()` function to build the header we're going to send back to the client. We then use the `response.write()` method to add text to the body, in this case we're adding lines of html to send back to the client.

Finally, we call `response.end()`. This tells the server the the response is built and ready to be sent back to the client. The `http` package handles the rest.

## Part Two — Control flow based on routes

Make sure your server file is running, and add different paths (also called routes) after `http:://localhost:3001`

1. `http:://localhost:3001/fun-times`
2. `http:://localhost:3001/movies`
3. `http:://localhost:3001/portfolio`

Notice the servers response for each is exactly the same. We know though, as people that interact with the web, when we add different resources we should see different content. So let's add that functionality to our server!

Add the following line underneath the line where we require `http`

```js
var urlParser = require('url'); // Adds urlParser
```

Inside your callback add the following lines of code:

```js
var urlObj  = urlParser.parse( req.url ); //
var pathname = urlObj.pathname; // parsing our the important info in the url

console.log("requested: " + pathname);
```

Start your server back up and try those routes again, watch you terminal where you are running your server and look at what gets logged to the console.

1. `http:://localhost:3001/fun-times`
2. `http:://localhost:3001/movies`
3. `http:://localhost:3001/portfolio`

You should see:

```bash

/fun-times
requested: /fun-times

/movies
requested: /movies

/portfolio
requested: /portfolio

```

SIDENOTE: You will also see requests for /favicon don't worry about that for now!

We can now keep track of the different routes asked for, but we're not yet handling them.

Handling them is straight forward actually it's an if/else statement or switch statement same as you've used for the last three weeks.

If the variable `pathname` is `/fun-times` build x response
else if the variable `pathname` is `/movies` build y response
else if the variable `pathname` is `/portfolio` build z response
else build a `404` response

Write the necessary if or switch statement to listen for these three routes.

1. /fun-times will send a response with:
- an h1 of `Fun Times`
- a ul with li elements containing what you do for fun.

2. /movies will respond with:

- an h1 of `Favorite Movies`
- a ul with li elements containing your favorite movies

3. /portfolio will respond with

- an h1 of `coming soon`

HINT: This control flow will happen inside of the callback


## Part 3 — BONUS: Build an interface for a pseudo-database

Add the following three lines to your `server.js` file and the `cruise_data.json` file to the same directory that has your `server.js` file to create an app that displays all the Tom Cruise movies!

```js
var fs           = require('fs');
var cruiseDBText = fs.readFileSync("cruise_data.json", "utf8");
var cruiseDB     = JSON.parse(cruiseDBText);
```

Tips to get started:

Use `console.log(cruiseDB)` to determine how the data is formatted.

Create routes that semantically match the data you're showing. i.e. if the page should show all of the movies use the route `/movies`

If you want to apply filters to show the data more creatively, like you want to filter all the movies by year, `/movies/by-year` or you could use query parameters, `/movies?filter=chronological`

You can access the query parameter using `urlObj.query` instead of `url.pathname` and build more complex or nested control flow logic.
