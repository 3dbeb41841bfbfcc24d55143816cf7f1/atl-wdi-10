---
title: Intro to the Internet and Node
type: lesson
duration: '2:00'
creator:
    name: Colin Hart
    class: WDIr-R2D2
---

# Intro to the Internet and Node

## Objectives
*After this lesson, students will be able to:*

- Describe how information is sent from point A to point B over the internet
- Discuss how the request response cycle works from a conceptual perspective
  - nodes
  - clients/servers
- Discuss how the request response cycle works from a technical perspective
  - HTTP verbs
  - Status Codes
- Articulate what Node is and why it's popular

- Create a simple server using http module
- Send responses to the client on receiving any request
- Send responses to the client based on specific routes using control flow and the url module

## How does the internet work? (20 min)

Take five minutes to answer the following question:

In your own words, as well as using what you've learned about html/css/js, describe how the internet works?

I'm going to call on a couple of you, but would also like you all to type your own answer into Slack as we discuss!


### The Conceptual

The internet as a concept, ignoring all the layers and layers of technical knowledge, is actually pretty straight forward and we can approach it from three different angles to demystify it.

**ONE:** We can think of it as clients and servers, i.e. the web:

![](https://upload.wikimedia.org/wikipedia/commons/c/c9/Client-server-model.svg)

A client, your browser, makes a *request* through the internet to a server for a webpage, a song, an image, some sort of _Resource_

What makes up a web page?

**TWO:** We can think of it as network of nodes. When your client makes a request it knows the address but not exactly how to get there. The request literally propagates across the network asking each server if it holds the webpage in question/if it knows where it is. It will always try to find the fastest route and thus a request won't take the exact same path.

> In the early days of the internet a server had a bug that caused it to think it could relay http requests in negative time. What this meant was that eventually this information propagated across the network where more and more traffic was getting sent through this one node, slowing it down more and more.

SIDENOTE: Ethics — The Web is built on trust. And you as new developers are entering that world.

> I want to tie in one other example of network propagation.

> Back in 2008 the Pakistani government, in response to a video posted on YouTube, asked their ISP's to block YouTube. They accomplished this by changing the IP address in their local DNS so any traffic initiating in Pakistan would see the wrong IP and be served a page saying YouTube was not available by redirecting traffic from that IP to a Pakistani website.

> YouTube, like many large websites, has a number of IP addresses and spread the traffic between them. Requests get directed to whichever one is least burdened — in essence, it tells people to go to Madison Square Garden. Once your packets get there, they are then told which entrance to the Garden is least crowded.

> But the Pakistani announcement said that YouTube was located at 123 Censorship Row, Suite 305, Lahore, Pakistan — which looks to be far more specific and thus more useful information than “Madison Square Garden.”  And since the internet’s architecture still relies on trust, most networks — especially big ones — trust each other’s info without testing it. - From Wired


**THREE:** Finally, when thinking about requests and responses the really mind bending thing is recognizing and accepting that it's all simply text. Nothing more mystical or magical than plain old characters.

#### how people think the internet works:
![](http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/images/sec3_magic.jpg)
PHOTOGRAPHER: ASGER CARLSEN FOR BLOOMBERG BUSINESSWEEK; SET DESIGN: DAVE BRYANT

Think back to what programming felt like on day one or as you were deciding to take WDI. The concepts of string manipulation, looping, variables and so on were likely very magical seeming. I know they were to me, but ultimately, you're just making rules about recieved input and appropriate output.

#### What the internet actually looks like:

*The image below comes from the Chrome developer tools, kinda neat! This is what an actual request looks like:*
![](headers.png)

Open Chrome dev tools, go to network, refresh the page, and you can see all of the requests for content made. You can see it's a _lot_ more than just html and css. If you click one of those requests you can then see the headers for it.


## The Technical

But we're not in this class to _just_ demystify we are here to learn how to send, receive, and interpret requests and responses to deliver something of value to our users!

#### HTTP verbs (10m)

To do this we'll be learning to speak the language the internet speaks, HTTP. Requests and responses as we've been talking about are a part HTTP and it's actually super straight forward.

> EXERCISE: Take three minutes to think about interactions (hint: think of *verbs*) you use to engage with the internet that result in a persisted change. Meaning, you do something on a website, turn your computer off, and come back to the website the following day and you see or expect that your change will still exist in the site.

> Write your responses into Slack.

HTTP is made up of seven *HTTP verbs*, though we'll just focus on four and we'll only work with one today.

- GET, POST, PUT, DELETE
- Create(POST), Read(GET), Update(PUT), Delete(DELETE) — (CRUD)

If we think about this in terms of a blog we can ask to see a blog post, we can create blog post and save it, we can then go and edit that blog post, and finally if we're embarrassed we can delete it.

During Unit 1 you likely inadvertently used GET verb during the first unit. Can you guess in what context you used it?


#### Request-Response Cycle

So let's get our hands dirty: what's the easiest way you can come up with to make a GET request?

EXERCISE: Look in student_labs directory and read through the explanation of cURL and work through the exercises: (15 minutes)

> Side note: What happens if you put 146.115.8.93 instead of www.google.com?

Exercise: 5 min breakout session! With your partner work together to come up with an explanation, in your own words, of how the internet works, HTTP verbs, and the request response cycle.


### The Web as _Resources_

 So, what if I wanted to go across the web (or to the grocer) and GET some resource (chili oil)? I could find the unique IP address of that computer and make the request, or I could LOCATE its RESOURCES UNIVERSALLY by its URL (Uniform Resource Locator):

 ![resource diagram](https://cloud.githubusercontent.com/assets/25366/8561247/75b73966-24d7-11e5-896a-06506648c4fe.png)

#### Elements of a URL

URL stands for Uniform Resource Locator, and it's just a string of text characters used by Web browsers, email clients and other software to format the contents of an internet request message.

Let's breakdown the contents of a URL:



```
    http://www.example.org/hello/world/foo.html?foo=bar&baz=bat#footer
    \___/  \_____________/ \__________________/ \_____________/ \____/
  protocol  host/domain name        path         query-string     hash/fragment
```

Element | About
------|--------
protocol | the most popular application protocol used on the world wide web is HTTP. Other familiar types of application protocols include FTP, SSH, GIT, FILE, HTTPS
host/domain name | the host or domain name is looked up in DNS to find the IP address of the host - the server that's providing the resource
path | web servers can organize resources into what is effectively files in directories; the path indicates to the server which file from which directory the client wants
query-string | the client can pass parameters to the server through the query-string (in a GET request method); the server can then use these to customize the response - such as values to filter a search result
hash/fragment | the URI fragment is generally used by the client to identify some portion of the content in the response; interestingly, a broken hash will not break the whole link - it isn't the case for the previous elements

<br>
_The Schema above is from [Tuts +](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)_


When someone types `http://google.com` in a web browser, a new cycle resulting in an HTTP  Request/ Response is initiated.  Essentially, your browser is saying:

_"Hey, give me the information located at the web address 'google.com/'"_

# Framing

## What is Node?

Node is a low-level, non-blocking, event-driven platform which allows you to write JavaScript on the server.

while it's possible to build web applications and APIs in straight Node, we'll actually be using a framework on top of Node called Express. 

## Why do people love Node!?

It's new and hot in the industry. And as you will all discover programmers love new to the point of insanity. ...

Developers and companies are excited because it allows fast, scalable APIs and sites in JavaScript. Okay... so what?

There are really two big points here: We're _familiar_ with JS and being able to use it on the backend gives us the option to use a single programming language throughout an entire full-stack application. So when we get to Rails, you'll have to use two ruby on the backend and js, html and css on the front. and when you actually work on a full code base, Rails backends are frequently optimized with Lua which is a db scripting language, or Rust. so now you have two or three back end languages. plus a front end language, and maybe you run a framework too, so now it's not just only JS but a flavor of JS.

###### Async

We won't dive too far into this and will talk about this much more in detail later. BUT, the other big difference is that Node.js is designed to be _event-driven_ and _asynchronous_. The opposite of this are servers that can only do one thing at a time, Node purposefully sends nearly everything to the background and keeps going.

So in layman's terms:

Imagine a paper delivery boy riding on his bike delivering papers every morning. Imagine he stops at each house, throws the paper on your doorstep, and waits to make sure you come out & pick it up before moving on to the next house. That would be what we'd call _blocking_ – each line of code finishes before moving on to the next line of code.

Now imagine the paperboy throwing the newspaper on your porch but never stopping his bicycle; never stopping, he just keeps throwing papers on porches, so that by the time you pick it up he'll be 3 or 4 houses down. That would be _non-blocking input/output (I/O)_, or _asynchronous_. This is an extremely awesome ability of node since I/O tends to be very "expensive."

## Packages — What is NPM

npm is Node's package manager. It's used to manage dependencies.

Node is made up of packages that exist inside and outside of the Node standard library.

Does anyone know what standard library refers to? You've interacted with standard library content and non standard library content already.

Today, we're just going to stick with standard library, but the rest of this unit we'll be installing many different packages to build our backend and front-end in Node.


## Routes / Paths / API

Anything in the url that comes after the domain extension is called a route, path, or api, including the path `/` i.e. `.com/`

We want to tell our server to listen for certain _routes_ and send some kind of response back.

Let's open up the `node_lab` in students lab.
