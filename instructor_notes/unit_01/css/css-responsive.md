# Responsive CSS

## What is a Responsive Website

A responsive website *responds* dynamically to the browser's screen size (or window size) so that the content is always presented in an appealing and easy-to-read layout.

> Author's Note: Much of the material in this lesson has been shamelessly taken from [w3schools](http://www.w3schools.com/css/css_rwd_intro.asp).

---

## Why Responsive

The strongest argument for building _responsive_ websites is that users will visit our site using a multitude of devices each having a different screen size, resolution, and aspect ratio.

You will want to design your website (typically your CSS) to layout your page relative to the size of the browser window.

This is possible via the use of _media queries_!

| Device        | Layout        | Typical Width       |
|:-------------:|:-------------:|:-------------------:|
| Desktop       | ![Desktop](https://i.imgur.com/ha5Hf4e.png) | 1200px and up
| Tablet        | ![Tablet](https://i.imgur.com/n6nVlFS.png)   | 992px and up
| Phone         | ![Phone](https://i.imgur.com/n6nVlFS.png)     | 768px and up


Here is an example that uses floats to create a 12 column grid:

```html
<div class="header">
  <h1>Chania</h1>
</div>
<div class="row">
  <div class="col-3 menu">
    <ul>
      <li>The Flight</li>
      <li>The City</li>
      <li>The Island</li>
      <li>The Food</li>
    </ul>
  </div>
  <div class="col-9">
    <h1>The City</h1>
    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
    <p>Resize the browser window to see how the content respond to the resizing.</p>
  </div>
</div>
```

```css
* {
    box-sizing: border-box;
}
.row::after {
    content: "";
    clear: both;
    display: block;
}
[class*="col-"] {
    float: left;
    padding: 15px;
}
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}
html {
    font-family: "Lucida Sans", sans-serif;
}
.header {
    background-color: #9933cc;
    color: #ffffff;
    padding: 15px;
}
.menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.menu li {
    padding: 8px;
    margin-bottom: 7px;
    background-color :#33b5e5;
    color: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.menu li:hover {
    background-color: #0099cc;
}
```

[Building a Responsive Grid - Part 1](http://codepen.io/drmikeh/pen/NAyZZA?editors=1100#0)

> Notice that the webpage in the above example does not look good when you resize the browser window to a very small width. Let's see how we can fix that using _media queries_.

---

## What is a Media Query?

A _Media Query_ is a CSS technique introduced in CSS3. It uses the @media rule to include a block of CSS properties only if a certain condition is true.

### Example

If the browser window is smaller than 500px, the background color will change to lightblue:

```css
@media only screen and (max-width: 500px) {
  body {
    background-color: lightblue;
  }
}
```

The above _media query_ will be active whenever the following conditions are true:

* we are displaying to a _screen_ (as opposed to a _printer_)
* the viewport is at most 500px

If one of the conditions is not true, then the embedded CSS rules will not be active (the background-color will *not* be `lightblue`).

Here is a simple example: [Gentle Introduction to Media Queries - Part 1](http://codepen.io/drmikeh/pen/XKEXbp?editors=1100)

Let's look at another example:

```html
<p class="small-screen">This is a small screen</p>
<p class="medium-screen">This is a medium screen</p>
<p class="large-screen">This is a large screen</p>
```

```css
.small-screen, .medium-screen, .large-screen {
  display: none;
}
@media only screen and (max-width: 399px) {
  body { background-color: lightblue; }
  .small-screen { display: block; }
}
@media only screen and (min-width: 400px) and (max-width: 767px) {
   body { background-color: lightgreen; }
  .small-screen { display: none; }
  .medium-screen { display: block; }
}
@media only screen and (min-width: 768px) {
   body { background-color: lightyellow; }
  .small-screen { display: none; }
  .medium-screen { display: none; }
  .large-screen { display: block; }
}
```

Here we are using 3 media queries to control both the background color of the `body` *and* which paragraphs are displayed on the page.

Here is the codepen for this example: [Gentle Introduction to Media Queries - Part 2](http://codepen.io/drmikeh/pen/WxzQWB?editors=1100)

## Using a Media Query to Add a Breakpoint (and thus control the layout for different size viewports)

So how do we use _media queries_ to make our CSS more responsive?

Remember this example: [Building a Responsive Grid - Part 1](http://codepen.io/drmikeh/pen/NAyZZA?editors=1100#0)

Let's add a _media query_ to change the layout of the page whenever the viewport is small.
If we add the following CSS then we can change the layout for small viewports:

```css
/* Let's add a break point using a media query */
@media only screen and (max-width: 500px) {
  /* For mobile phones: */
  [class*="col-"] {
      width: 100%;
  }
}
```

Using a _media query_ in this way creates a _breakpoint_, a point at which changing the viewport size affects the layout of the page in a specific way that we have defined.

> We can use _media queries_ to add a breakpoint where certain parts of the layout will behave differently on each side of the breakpoint.


[Building a Responsive Grid - Part 2](http://codepen.io/drmikeh/pen/JKLYxN)

## The _Responsive_ Holy Grail Layout

![Holy Grail](https://i.imgur.com/hzZprf4.png)

The _Holy Grail Layout_ is a common problem in CSS to layout a page. We want to make it _responsive_ as well so that it has the following behavior:

| Device        | Layout        | Typical Width       |
|:-------------:|:-------------:|:-------------------:|
| Desktop       | ![Desktop](https://i.imgur.com/ha5Hf4e.png) | 1200px and up
| Tablet        | ![Tablet](https://i.imgur.com/n6nVlFS.png)   | 992px and up
| Phone         | ![Phone](https://i.imgur.com/n6nVlFS.png)     | 768px and up

Example:

```html
<header><h2>Header</h2></header>
<section>
  <article>
    <h1>Article contents</h1>
    <div class="contents">
      <p>I would not, could not in a tree. Not in a car! You let me be. I do not like them in a box. I do not like them with a fox I do not like them in a house I do mot like them with a mouse I do not like them here or there. I do not like them anywhere. I do not like green eggs and ham. I do not like them, Sam-I-am.
      </p>
    </div>
  </article>
  <nav><h2>Navbar contents</h2></nav>
  <aside><h2>Sidebar contents</h2></aside>
</section>
<footer><h2>Footer</h2></footer>
```

```css
body {
  padding: 2em;
  background-color: #6D899F;
}
h1, h2 {
  text-align: center;
}
p {
  text-align: left;
}
header, footer {
  background-color: #ffa;
  padding: 5px;
}
section {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
article {
  order: 2;
  flex: 3;
  background-color: #BCD39B;
}
nav {
  order: 1;
  flex: 1;
  background-color: #CE9B64;
}
aside {
  order: 3;
  flex: 1;
  background-color: #62626D;
}
article, nav, aside {
  padding: 1em;
}

/* mobile layout */
/* @media (max-width: 480px) { */
@media only screen and (max-width: 480px) {
  section {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  article { order: 1; }
  nav     { order: 2; }
  aside   { order: 3; }
}
```

Here is the above example as a codepen: [Holy Grail Layout with Flexbox](http://codepen.io/drmikeh/pen/NAyVpg?editors=1100)

> TRY THIS: Open the above codepen and click on the "Change View" button to go to the "Full page" view. Then open Chrome's _Dev Tools_ and click on the "Toggle Device toolbar" button to see what the above codepen looks like on different devices and viewport sizes. You can use this tool to test your own web sites to see how responsive they are!

---

## Summary

Responsive layout has become increasingly important as tablets and smart phones have become increasingly popular. We want to design our web site to look great and be UX friendly on any devise. By using modern CSS layout methods (such as _media queries_ and _flexbox_) we can ___finally___ achieve the _Holy Grail_ of web page design!

---

## References

* [Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [Holy Grail Layout - Wikipedia](https://en.wikipedia.org/wiki/Holy_Grail_(web_design))
* [What is a Grid-View?](http://www.w3schools.com/css/css_rwd_grid.asp)
