---
title: The DOM and JS in the Browser
type: lesson
duration: "1:30"
creator:
  name: Colin Hart
edited: 
  name: Marc Wright
competencies: Programming
---

## Learning Objectives

* Access elements in the DOM using Vanilla JS
* Add and remove elements to the DOM using Vanilla JS
* Manipulate existing elements in the DOM using Vanilla JS
* Conceptualize load order in the Browser and how we account for it


<br>

## Document Object Model (5 min)

The [**D**ocument **O**bject **M**odel](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
is a programming interface for HTML.

> The DOM provides a representation of the document as a structured group of nodes and objects that have properties and methods. 

An HTML *document* is available for us to manipulate as an object, and this object is structured like a tree:

Like this:

![](http://www.tuxradar.com/files/LXF118.tut_grease.diagram.png)

Or this:

```
html
└── head
│   ├──title
│   ├──meta
│   ├──link[rel="stylesheet"]
|   └──script[type="text/javascript"]
|
└── body
    ├── header
    │   ├── h1
    │   └── nav
    └── section.simplicity
    |   └── h2
    │   └── article
    ├── section.life
    |   └── h2
    │   └── article
    │       └── block_quote
    │       └── block_quote
    └── footer
```

Let's create a web page and begin to inspect its structure.

<br>

![](http://i.imgur.com/ylb6WX9.gif)

- Open Terminal
- `cd` to your `dev` folder
- Create a new `mkdir dom_intro_lesson`
- `cd` and create a new file `touch index.html` 
- Open the file in Atom
- Copy this code into the file then open in Chrome:

```html
<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Sample HTML5 Page</title>
  <meta name="description" content="Sample HTML Page">
  <meta name="author" content="Marc Wright">
</head>

<body>
  <section id="main">
    <h1>The DOM Rocks!</h1>
    <p>When this document gets loaded into the browser's memory, it is transformed from a static HTML document to a dynamic DOM tree. At this point we can use JavaScript to inspect and manipulate the nodes in the DOM tree.</p>
  </section>
</body>
</html>
```

Here is the DOM tree for the above HTML document:

![DOM Tree](https://i.imgur.com/8goR1EO.png)

<br>

## Accessing the document (10 min)

Each web page loaded in the browser has its own `document` object. The Document interface serves as an entry point to the web page's content.

**WE DO:** In the console, type `document.` and check out the available methods.

- `document.head`
- `document.body`
- `document.lastModified`
- `document.title`

##### What is the Window Object?

- Each browser window or tab
- Location property is the URL of the page.
- In the console, type `window.` an check out the available methods.
- Demo `window.location`. Also, point out local storage.


### Everything is a Node
In the HTML DOM (Document Object Model), everything is a node:

* The document itself is a document node
* All HTML elements are element nodes
* All HTML attributes are attribute nodes
* Text inside HTML elements are text nodes
* Comments are comment nodes

<br>

![YOU DO](http://i.imgur.com/ylb6WX9.gif)

### Doc Dive (15m)
Each group researches the four methods they were assigned on MDN. 

Each group will work inside of breakout rooms. You'll research and test each method in the Chrome developer tools and write a brief explanation about what each method does. 

We'll then come back together as class. Each group will briefly demo and explain what each method does. 

* **Search** (Aaron, Adam, Adam, Brad)
  * document.getElementById
  * document.getElementsByClassName
  * document.getElementsByName
  * document.querySelector
* **Creation** (Dana, Eric, Farooq, Jason)
  * document.createElement
  * node.style
* **Traversal** (Jesse, Pedro, Rachel, Sean)
  * node.childNodes
  * node.children
  * node.firstChild
* **DOM editing** (Tom, Zach, Zarela)
  * node.appendChild
  * node.removeChild
  * node.innerText
  * node.setAttribute
* **Node editing** (JJ, Kelly, Richard)
  * node.innerHTML
  * node.id
  * node.classList


<br>

## How can we run JS in the browser?

#### Inside the `<head>`

We can run JS inside of `<script> </script>` tags in the `<head>` tag of an html document.

##### Exercise: 10 min I'll demonstrate in front of you first, and then you can try on your own.

Open up the HTML file from earlier. Inside of the `<head>` tag write a script tag with the following JS inside of it.

	
```html
<script>
  alert(`Hi! What's your favorite food?`);
  var response = prompt();
  alert(`I wish I liked ${response} too. It's sad being a computer :( `);	
</script>	
```

To run this code open index.html in Chrome. You can click and drag. Or, in the same directory as index.html, you can run open index.html.

<br>

#### Link an external JS file, similar to how we linked our css.

Instead of `<link>` we'll keep using our script tag. And we're also going to move our script tag out of the `<head>` and put it just before our last `</body>` tag.

#####Exercise: 10 min

1. touch a file called script.js
2. let's move the JS code that you wrote inside of the script tag in index.html to your script.js file. However, we're change it up a bit and add the message to the DOM via a new Element like so:

    ```javascript
    alert(`Hi! What's your favorite food?`);
    var response = prompt();
    alert(`I wish I liked ${response} too. It's sad being a computer :( `);

    var newElement = document.createElement("P");
    newElement.textContent = `I wish I liked ${response} too. It's sad being a computer :( `;
  document.body.appendChild(newElement);    
```
    
3. In the `head` of `index.html` change your script tag to look like this:
	
	```html
	<script src='script.js'></script>
	```
   This is going to load our js file into the browser.
4. Move your script tag to the line just above the closing `</head>` tag

What error are we getting? Why?

`Uncaught TypeError: Cannot read property 'appendChild' of null`

<br>

#### load order

Here's what happens when a browser loads a website:

1. It makes a request for and fetches the HTML page (e.g. index.html)
2. Starts parsing the HTML i.e. building the dom.
3. The parser sees a `<script>` tag referencing an external script file.
4. The browser makes a second request for the script file. Meanwhile, the parser stops and and waits. This called Blocking.
5. Once the script is downloaded and executed the parser continues parsing the rest of the HTML document.

There are several more advanced techniques for loading our JS but for now we can just make sure our script tag is at the end of the html so the DOM loads before our script runs.

<br>

#### window.onload

There is a pattern we can follow to help our page load properly and execute in the right order.

We can surround our Javascript in a function called `window.onload = function() {}`. This function will wait until the entire window/dom is loaded before allowing any of our Javascript to run.

In your `script.js` file, wrap your Javascript code in the following function:

```js
window.onload = function() {
  // alerts and prompts
  // go in here!
}
```

Refresh your window and make sure your script is still running!

<br>


![Labtime](http://i.imgur.com/WzTTdIe.jpg)

## Independent Practice

##### Exercise #1 - GA DOM Mod

[GA Dom Instructions (using Vanilla Javascript)](../student_labs/ga_dom.md)

##### Exercise #2 - Vanilla JS

Now that you've seen all of these methods and have a since of what the Vanilla JS can do! Open up the directory `/student_labs/ex_vanilla_dom`. Follow the prompt.md to Write the vanilla JS methods necessary to complete each `alert` step in js/script.js

## References

* [DOM Reference](https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference)
* [DOM CheatSheet](http://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf)
