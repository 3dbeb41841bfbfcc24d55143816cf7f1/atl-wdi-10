---
title: The DOM and JS in the Browser
type: lesson
duration: "1:30"
creator:
  name: Colin Hart
edited: 
  name: Maren Woodruff
competencies: Programming
---

## Learning Objectives

* Access elements in the DOM using Vanilla JS
* Add and remove elements to the DOM using Vanilla JS
* Manipulate existing elements in the DOM using Vanilla JS
* Conceptualize load order in the Browser and how we account for it

<br />

## Document Object Model (5m)

The [**D**ocument **O**bject **M**odel](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
is the in browser representation for your HTML document.

> The DOM provides a representation of the document as a structured group of nodes and objects that have properties and methods. 

The DOM makes the HTML *document* available for us to manipulate as an object, and this object is structured like a tree:

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

<br />

![](http://i.imgur.com/ylb6WX9.gif)

- Open Terminal
- `cd` into your `ga` folder
- Create a new `mkdir dom_intro_lesson`
- `cd` and create a new file `touch index.html` 
- Open the file in Sublime
- Copy this code into the file then open it in Chrome:

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

<br />

### Everything is a Node
In the HTML DOM (Document Object Model), everything is a node:

* The document itself is a document node
* All HTML elements are element nodes
* All HTML attributes are attribute nodes
* Text inside HTML elements are text nodes
* Comments are comment nodes

<br />

![YOU DO](http://i.imgur.com/ylb6WX9.gif)

### Doc Dive (15m)
Each group researches the four methods they were assigned on MDN. 

Each group will work inside of breakout rooms. You'll research and test each method in the Chrome developer tools and write a brief explanation about what each method does. 

We'll then come back together as class. Each group will briefly demo and explain what each method does. 

* **Search** 
  * document.getElementById
  * document.getElementsByClassName
  * document.getElementsByName
  * document.querySelector
* **Creation** 
  * document.createElement
  * node.style
* **Traversal** 
  * node.childNodes
  * node.children
  * node.firstChild
* **DOM editing** 
  * node.appendChild
  * node.removeChild
  * node.innerText
  * node.setAttribute
* **Node editing** 
  * node.innerHTML
  * node.id
  * node.classList

<br />

## What are the ways that we can run JS in the browser?

#### Inside the `<head>` tag

We can run JS inside of `<script> </script>` tags before the closing `</body>` tag of an html document.

#### Exercise: (10m) I'll demonstrate this in front of you first, and then you can try on your own.

Open up the HTML file from earlier. At the end of the `<body>` tag write a script tag with the following JS inside of it.
	
```html
<script>
  var response = prompt("Hi! What's your favorite food?");
  alert(`I wish I liked ${response} too. Sometimes, it is sad to be a computer. :( `);	
</script>	
```

To run this code open the index.html in Chrome. You can click and drag it. Or, in the same directory as index.html, you can right click to open the index.html.

<br />

#### Link to an external JS file, similar to how we linked our css.

Instead of `<link>` we'll keep using our script tag. 

##### Exercise: (10m)

1. Touch a file called main.js
2. Let's move the JS code that you wrote inside of the script tag in the index.html, to your main.js file. However, we will change it up a bit and add our message to the DOM via a new Element:

    ```javascript
    var response = prompt("Hi! What's your favorite food?");
    alert(`I wish I liked ${response} too. Sometimes, it is sad to be a computer. :( `);

    var newElement = document.createElement("p");
    newElement.textContent = `I wish I liked ${response} too. Sometimes, it is sad to be a computer. :( `;
    document.body.appendChild(newElement);    
```
    
3. Before the closing `body` tag in the `index.html`, change your script tag to look like this:
	
	```html
	<script src='main.js'></script>
	```
   This is going to load our .js file into the browser.

4. Move your script tag to the line just above the closing `</body>` tag

<br />

### Load Order

Here's what happens when a browser loads a website:

1. It makes a request for and fetches the HTML page (e.g. index.html)
2. It starts parsing the HTML, i.e. building the dom.
3. If the script tag is in the head of your html document, the parser sees a `<script>` tag referencing an external script file.
4. The browser makes a second request for the script file. Meanwhile, the parser stops and and waits. This is called **Blocking**.
5. Once the script is downloaded and executed, the parser continues parsing the rest of the HTML document.

There are several advanced techniques that load our JS, but for now we can just make sure that our script tag is at the end of our html so that the DOM loads before our script runs.  You should therefore put the script tags just before your closing body tag.

<br />

### window.onload

There is a pattern we can follow to help our page load properly, and execute it in the right order.  Although we should still keep the script tags just before the closing body tag.

We can surround our JavaScript in a function called `window.onload = function() {}`. This function will wait until the entire window/dom is loaded before allowing any of our JavaScript to run.

In your `main.js` file, wrap your JavaScript code in the following function:

```js
window.onload = function() {
  // code
}
```

Refresh your window and make sure your script is still running!

<br />

<!-- ![Labtime](http://i.imgur.com/WzTTdIe.jpg)

## Independent Practice

##### Exercise #1 - GA DOM Mod

[GA Dom Instructions (using Vanilla Javascript)](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/blob/master/unit_01/w02d01/student_labs/ga_dom.md) -->

## References

* [DOM Reference](https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference)
* [DOM CheatSheet](http://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf)
