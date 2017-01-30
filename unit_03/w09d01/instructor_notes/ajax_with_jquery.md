---
title: AJAX with jQuery: intro to client side rendering
type: Lesson
duration: "2:30"
creator:
    name: Colin Hart
    city: WDIR-Matey
competencies: Client side rendering
---
# AJAX with jQuery: intro to client side rendering

### Objectives

- Distinguish between Server Side rendering and Client side
- Diagram server side rendering architecture
- diagram client side rendering architecture
- Implement a jQuery AJAX client for a simple REST service
- Reiterate the benefits of separation of concerns – API vs. Client
- Make requests to third party API's
- Make requests to an internal API (i.e. an express server)

### Preparation

- Understand basics of JS and Server side rendering
- Understand what jQuery is and how to use it for DOM manipulation
- Understand HTTP verbs & the concept of RESTful JSON APIs

## Exercise: Model server side rendering architecture (10 mins)

With your partner, spend ten minutes diagraming the following two things:

1. What does the directory structure of a server side rendered application look like?  (5m)
  (Server side rendering is the pattern we used in Node/Express in Unit 2)

2. Diagram the request response cycle of a server rendered application (5m)
  (From making a GET request from the browser to the server and sending a view back to the browser.)


## Difference between Server Side and Client Side rendering



## What is AJAX? Introduction (20 mins)

AJAX (Asynchronous JavaScript and XML) is a method of building interactive applications for the Web that processes user requests immediately, without re-rendering a whole page.

> **Example:** A weather forecasting site could display local conditions on one side of the page as soon as a user finishes typing in a zip code. The temperature could refresh every minute, without the user having to hit a refresh button.

In general, the process looks like this – use JavaScript on the client side to hit an API (without reloading a page), then use the pure data you get back to manipulate the DOM somehow if you need to. This DOM manipulation can take the form of rendering a template or just changing a number on the page.

In simple terms, it's a tool to make HTTP requests and receive data responses without the browser reloading

### Advantages

- __Faster__ - This is the most obvious reason for using AJAX on your front-end: AJAX allows easier and quicker interaction between user and website as pages are not reloaded for content to be displayed.  The server doesn't have to get data, render HTML, and then spit it out, it just has to get data, and your already-loaded front-end does the rest.

- __Compact__ - With AJAX, several application features can be handled using a single web page. That means we modularize our app into smaller bits, and it becomes easier to work with.

- __Backend Separated from Front-end__ - Applications that use AJAX-heavy front-ends means developers don't have to work on both sides of the stack at the same time. Some developers roles focus on building API's that just serve data, and others can focus on consuming that data and building interfaces.


### Disadvantages

- _The back and refresh button are rendered useless_ - Since things are loaded dynamically on a page, without that page reloading (or more importantly a URL being changed), clicking the back or refresh button don't work the way you're used to. That's actually a pretty big deal – UX designers are very familiar with the fact that users are _accustomed_ to being able to hit back when they need to. Some advanced front-end frameworks have tried to solve this issue with clever workarounds, but that's not always the case and not always accurate.

- _You have to consider the UX, even more, _ - While UX is crucial for _any_ application, the fact that a page doesn't refresh means you have to be even more considerate of what a user is experiencing. If something in your JavaScript goes wrong, your AJAX breaks, and you don't have failsafes thoughtfully built in, your user might be clicking a button and seeing absolutely nothing happen. Most common users won't have their consoles open to notice any errors.

### Why are we learning it?

In Unit 2 you learned to build APIs and render HTML from the server side (server side rendering with hbs). In Unit 3 and 4 we learn and use client-side rendering. We consume APIs in the browser and use jQuery or Angular to build the DOM.

## Setup - Codealong (5 mins)

While we have already learned the ins-and-outs of building APIs in Unit 2, let's use an already-made API for the first part of the afternoon and finish up by making requests to our express app.

We're going to build a giphy gif saving application using the Giphy API and our express application.

EXERCISE: Take 5 minutes to read through the docs: https://github.com/Giphy/GiphyAPI.

EXERCISE: Take another 5 minutes to read through the starter code.

We've also already included jQuery, though we won't use that for the first few minutes.

## GET Requests - Code along (30 mins)

#### jQuery GET Requests to local server

Since we've already included jQuery in our HTML's head, let's try doing the same AJAX GET request with jQuery, together.

Remember `$` refers to jQuery and the ajax methods are the standard HTTP verbs!

```js
  var ajax = $.get('/')
```

Let's look at what our `ajax` variable holds now.

That's some awesome info. What's this `responseJSON`? Looks useful:

```js
  ajax.responseJSON
```

Well isn't that just exactly what we need? How handy!

What did this do? Without refreshing the page, we hit an external API – a totally different URL that's rendering JSON data instead of views – and brought that data back into our page.

#### jQuery get requests to Giphy's API
```js
  var ajax = $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
```

```js
  ajax.responseJSON
```

### A little more programmatically now

While that's great, it's not exactly asynchronous. How do we build this so that it `console.log`'s the response when an AJAX request actually succeeds, instead of when we type it in the console?

```js
  $.get('/')
    .done(function(data){
      console.log(data);
    });

  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
    .done(function(data){
      console.log(data);
    });
```

Type that with me, and hit enter. If there's any luck, our connection will be a little slow, and you'll see the pause between when we hit enter & when it spits out our JSON result.

In jQuery's documentation you can find all the chain-able callback function possibilities – the three you'll probably use a lot are `.done`, `.fail`, and `.always`.

EXERCISE: Read the jQuery Ajax Docs!

1. Write click event to request cats from giphy.
  - Write a clickEvent on `.get-gif` that calls a function that executes the following ajax request:

  ```
  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
    .done(function(data){
      console.log(data);
    });
  ```


2. Display that data in the DOM using jQuery
  - In the JSON response there is an image_url key. Add that url to the src attribute of the img tag with a class of `.image-jumbotron`

3. Add click event to the `.save-gif` button
  - The save button will trigger an ajax POST request to *our* backend sending the URL for the gif to save it to our database.

4. Add a click event to the `.saved-gifs` button to make an ajax GET request to our backend for all the gifs we've saved

  - render each gif to the page by looping over the response using a for loop or a forEach loop. Create a div with a nested image tag for each gif and append it to the `.all-gifs-container`

#### Extra Reading
- [`No 'Access-Control-Allow-Origin' header is present on the requested resource` – WTF?](https://jvaneyck.wordpress.com/2014/01/07/cross-domain-requests-in-javascript/)
- [What is Cross Origin Resource Sharing (CORS)?](https://www.maxcdn.com/one/visual-glossary/cors/)
- [Using CORS with Express](http://enable-cors.org/server_expressjs.html)
