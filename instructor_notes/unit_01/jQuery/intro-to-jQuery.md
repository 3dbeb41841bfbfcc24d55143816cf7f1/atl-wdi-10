---
title: Intro To jQuery
type: lesson
duration: "1:25"
creator:
    name: Gerry Mathe, Elie Schoppik
adapted for WDIr by: Colin Hart
---


# Intro To jQuery

### Objectives
*After this lesson, students will be able to:*

- Describe jQuery and the context to use it
- Include jQuery in your projects
- Practice using jQuery selectors
- work with Forms


### Preparation
*Before this lesson, students should already be able to:*

- Use vanilla JavaScript to manipulate the DOM
- Use a text editor
- Explain CSS selectors

## jQuery - Intro (5 mins)

#### What is jQuery?
jQuery is a 3rd-party library that is intended to make front-end development tasks — particularly those involving DOM manipulation — easier and faster

##### But wait, what do we mean by 'library'?

**A `library`** is just a collection of reusable methods that serve a particular purpose.

They can just be extra helper methods that someone else wrote or it can be a DSL (domain specific language). DSL's are a language written in another language, almost like a dialect. jQuery is just Javascript but some aspects of it are going to feel a little different.

#### So, as a library, what does jQuery offer us?

jQuery helps us manipulate the DOM, allowing us to perform complex manipulations using less code with less hassle.  jQuery's syntax was developed to mimic CSS selector syntax, making code easier to develop, read, and manage; also, the syntax is more concise, and jQuery solves many cross-browser compatibility issues for us.

Basically, it's going to replace Vanilla JS for us. It's much simpler and much less verbose.

## Using jQuery - Demo (5 mins)

#### Installation
jQuery is a client side library, which means we need to include it in our HTML. To do this, we have two options:

1. Reference jQuery from a server on the internet:

    - Directly from jQuery's website (http://code.jquery.com/)
    `<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>`

2. Download a copy of jQuery to host on your own server:

[CDNJS](http://www.cdnjs.com), [Google Hosted Libraries](https://developers.google.com/speed/libraries/), and the [jQuery site](http://www.jquery.com) will all allow you to download a copy of jQuery to include in your projects.

#### What's with the 'min.js' in the name of the jQuery file?

If you look carefully at the filenames of the jQuery versions you download, or just look at the URL in the "src" attribute for each script tag above, you'll notice something at the end of each file name — namely, that they end in 'min.js'. This means the JavaScript code has been minified.

## Minified? Did I read that right? Discussion (10 mins)

Yep. You did. Minification is the process of making a JavaScript file smaller by, among other things, removing all line breaks and whitespace, reducing the length of variable and function names, and stripping out all comments. Minification can significantly reduce the size of a JavaScript file, and in turn, significantly decrease the time it takes our browsers to load the file into memory.

In jQuery's 1.11.1's case, the original unminified code is about 276 kilobytes, whereas the minified code is only 94 kilobytes. That makes the minified version **one-third** the size of the original - not bad!

Minified scripts can be difficult to read, so most servers that host jQuery and other libraries will also offer the original (non-minified) version of the code so developers can understand the code.

**Even if you don't fully understand the code, it's a good exercise to visit code.jquery.com and take a look at minified and non-minified jQuery.**

EXERCISE: Take 20 minutes to explore the jQuery documentation. The first step in understanding any new language or tool is to familiarize yourself with the documentation.

http://learn.jquery.com/using-jquery-core/
https://api.jquery.com/

I'd like all of you to come back in 20 minutes with one thing to share about jQuery.

## DOM manipulation with jQuery - Intro (40 mins)

Before we get into jQuery, let's just think about how we would perform the following tasks:

  - `select` a DIV and change it's content
  - `append` a new DIV with some content to a web page
  - `listen` for events on a collection of DIVs or other HTML elements



#### First, let's talk about some differences in jQuery syntax

Four things to keep in mind:

1. jQuery always starts with a `$` this might seem weird, but it's really just a variable. jQuery is essentially a giant object with a ton of methods and at the beginning it says:

    ```javascript
    var $ = jQuery = {
        // all of the jquery sourcecode!
    }
    ```

2. Every response in jQuery is returned inside of `jQuery object` that looks like this

    ```
    $('h1'); // query for all <h1> tags
    => [ <h1>first h1</h1>, <h1>second h1</h1> ]
    ```

    In order to call jQuery methods on a node. It must be wrapped in a jquery object `[ ]`

3. jQuery objects look like arrays! Sorry all, they're close to arrays, they're almost arrays, they're array-like. But in jQuery land they're not arrays... they're jQuery objects.

4. Final thing to keep in mind is that when we create variables that hold jQuery objects we always preface the variable with a `$`

```
var $everyH1 = $('h1'); // query for all <h1> tags
I
$everyH1

=> [ <h1>first h1</h1>, <h1>second h1</h1> ]

```

This is just a good practice to help distinguish our jQuery code from our regular Javascript.

Why is this good practice? Because every node created or queried using jQuery, is returned in a jQuery object, which looks like an array but is not an array.


#### let's just talk about selecting an element with jQuery

To select an element in the DOM, we use the global jQuery function:

```
// This is the basic syntax for jQuery selections
$(' ')

// To select a particular element by tag, you do
$('h2') // selects all h2 elements

// To select by ID, you use the same syntax as CSS selectors
$('#someID') // Would select the element with id="someID"

// To select all elements of a particular class, use CSS syntax again
$('.someClass') // Selects all elements of the class "someClass"

// And you can use more complicated CSS selectors as well
$('p.anotherClass') // Selects all <p> tags that also have the class "anotherClass" (<p class="anotherClass")

```

If you use variable assignment when doing a selection, a "jQuery" object is returned

```

// We prepend '$' to variable names when a variable is going to be a jQuery object to help us remember what that variable is for.
var $jqObject = $('p'); // Returns a jQuery object containing all <p> tags on your web page.

// However, we don't have to prepend '$' to our variables. It's just so we can remember what a variable is being used for.
var jqObject = $('p'); // This is functionally identical to the version above that includes the '$' in front of jqObject.

```

**Exercise:** (5m) 
Do the first two prompts in [student_starter](https://github.com/ATL-WDI-Curriculum/atl-wdi-10/tree/master/labs/unit_01/jQuery/in-class-exercises)

#### Selecting a DOM element and changing it's content

In this HTML:


```html
<div id="myDiv">Hello world!</div>
```

```JavaScript
var divToManipulate = document.getElementById('myDiv');
divToManipulate.innerHTML = "Goodbye world!";
```

Now the code above isn't too hard to deal with, but even so, in jQuery, this is a one-liner.

```javascript
$('#myDiv').html("Goodbye world!");
```

If we wanted to **save our selection as a jQuery object**, the code would look like this instead:

- First we select the element we want and save it as a jQuery object

```javascript
var $myDiv = $('#myDiv');
```

- Then we use our jQuery object to perform our task

```javascript
$myDiv.html("Goodbye world!");
```

There are two things about the example above that make jQuery easier to use:

  1. jQuery is using the same syntax as CSS to select elements

  2. jQuery allows us to chain methods together to accomplish our goals (i.e., $().html(...) ), making code shorter and easier to understand


#### Appending a DOM element to a web page

If we had the following HTML page...

```
<html>
    <body>
        <div id="container"></div>
    </body>
</html>
```

  If we want to add a new DIV that provides a nice greeting, our vanilla JavaScript would have to be:

```
    var myDiv = document.getElementById('container');
    var newP = document.createElement('p');

    newP.innerHTML = "Hello complicated, multi-step world of adding an element to the DOM!";
    myDiv.appendChild(newP);
```

And in jQuery, it looks like this:

```
    $('#container').append("<p>").append("Hello simple insertion using jQuery chaining");

```

In the jQuery code example above, we first select the DIV with `id="container"`, then we append a new paragraph element (automatically created using core jQuery selector function), and then we append the text we want to insert to the new paragraph element we just created. In effect, the new HTML looks like this after the jQuery is run:

```
  <div id="container">
      <p>Hello simple insertion using jQuery chaining</p>
  </div>
```

**Exercise:** Do the next two prompts in [student_starter](https://github.com/ATL-WDI-Curriculum/atl-wdi-10/tree/master/labs/unit_01/jQuery/in-class-exercises)


#### Modifying Styles (CSS) Using jQuery

You can do more than select elements and modify content. You can also create or update CSS style attributes in jQuery using the .css() method

```
$("#myDiv").css("color", "red");
```

The code above will change the color of all text inside the DIV with id="myDiv" to red.

Or, if we have a bunch of elements that all have the same class (in this example, it's class="myClass"), we can use the class selector to modify the color of all of them at once:

```js
$(".myClass").css("color", "blue");
```


But that seems kind of boring. I mean, what if we want to do something with less hard-coding using jQuery.

[Here's a repeat of the last example](http://jsbin.com/wevoti/1/edit?htm,output) that sets the text in all elements of class="myClass" to a random color. Try to understand how it works before moving on:

```
var randColorValue = function() {
    return Math.floor( Math.random() * 255 );
}

var randColor = function() {
    var red = randColorValue();
    var green = randColorValue();
    var blue = randColorValue();

    return "rgb(" + red + "," + green + "," + blue + ")";

}

$(".myClass").css("color", randColor() );
```

#### Adding and Removing Elements Using jQuery

Sometimes in a dynamic web application, user-input is meant to trigger the addition or removal of content or functionality. Using jQuery, we can easily create new DOM elements and insert them into the DOM, or remove existing elements (and any content they contain) from the DOM.

So, let's imagine we have a web page with the following content on it:

```
<body>
  <div id="outerContainer">
      <div class="innerItem innerItemHeader">Enjoy some hipster ipsum:
      </div>
      <div class="innerItem">
        Aesthetic migas paleo McSweeney's, pork belly Kickstarter Echo Park sriracha keytar disrupt viral drinking vinegar fanny pack typewriter.
      </div>
   </div>
</body>

```

Let's say we want to add some more hipster ipsum to the page. Something like:

```
    <div class="innerItem">
        Farm-to-table Godard roof party bespoke, fashion axe mustache vinyl.
    </div>
```


To add this DIV, and our hipster ipsum content using jQuery, we'd do the following:

Define a new DIV and assign jQuery object to $newDiv

```

$newDiv = $('<div>');

// Add hipster ipsum content
$newDiv.html("Farm-to-table Godard roof party bespoke, fashion axe mustache vinyl.");

// Set it's class to innerItem
$newDiv.addClass("innerItem");

// Append our new element  
$('#outerContainer').append($newDiv);

```

## Forms

I'm going to briefly talk about forms, default functionality, and how to use jquery to use the text a user input.

So, say we have the following form:

```html

<form>
  <input type="text">
  <button> add </button>
</form>
```

1. Add a jQuery click event to the button that sends an alert that a button was clicked.
2. query for the input field and save it to a variable.
3. use .val() on the input node to extract the text and use `alert` to display the input text to the user.



## Conclusion

- jQuery makes JavaScript super friendly and easy to write. a lot of websites are using jQuery, soon you will too.  Remember that it's always good to know how to use what is called vanilla JavaScript, or JavaScript without a library.

- Please spend some time reviewing [the documentation](https://api.jquery.com/).
