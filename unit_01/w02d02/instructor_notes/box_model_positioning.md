---
title: Box Model and Positioning
type: Lesson
duration: 2hrs
creator:
  name: Adapted from Matt Huntington by Colin Hart
  campus: WDIR
competencies: Front-end Development
---

# CSS - The Box Model and Element Spacing

## Lesson Objectives

1. Define elements of standard layout and why they don't work on the web
2. Diagram the box model
3. List and define the different ways to display an element
4. Differentiate between units of measure in layout
5. Describe some common techniques used in layout
6. List the different ways an element can be positioned

<br>

## Define elements of standard layout and why they don't work on the web (10m)

### The standard elements of layout

In traditional layout programs like photoshop, we typically give an element two properties:

1. Dimensions (height and width)
2. Position (top and bottom)


### Why can't we simply use dimension and position in layout?

The issue with traditional layout properties is that elements on a page are dynamic, meaning they can change.

1. Content of an element might change (different sized news feeds on FB)
2. Elements may be added to, removed from, or manipulated within the DOM (adding items to your Amazon cart)

If we used traditional layout properties, when elements were added/changed they could collide with each other.

<br>

## Diagram the box model (15m)

We can instead define different properties of elements so that they won't collide with each other.

![box-model](http://s6.postimg.org/gi8r6c341/css_box_model.png)

_From [www.theslate.org](http://www.theslate.org)_


**I DO:** On the whiteboard, draw out the box model and how you must take padding, border and margin into account.
    - a piece of content may be N x N, but you must add in the others to calculate the total size of an element.

**WE DO:** Let's take a look at the box model in the Google Chrome Dev Tools. Goto [General Assembly](https://generalassemb.ly/) to demo.

### standard properties

1. border
	- border around the content
	- _the picture frame_
2. padding
	- space between the content and the border
	- usually used to create space between an element and its children
	- _the matte for a picture frame_
3. margin
	- space surrounding the border
	- usually used to create space between sibling elements
	- if two elements with top and bottom margins are placed on top of each other, the space between the two elements will be that of the larger margin
	- _the space between pictures on the wall_
<br>

![We Do](http://i.imgur.com/ylb6WX9.gif)

&#x1F535; **(Activity 15m)**

We're gonna set up a project in `w02d02/student_labs` to work on the next few sections.

1. mkdir css_lesson    
2. From the Terminal, `touch css_lesson/index.html css_lesson/style.css`
3. Link the CSS file in the `head` of your HTML

Create an element with the following:

- some short random content
- background-color #00bcd4
- 5px solid red border
- 25px padding
- 25px margin
- view the page


### additional properties (10m)

1. height/width
	- can explicitly define the height and width of the content area of an element
	- if the width of an element is too small to fit content all on one line, the content will wrap to create multiple lines, increasing the element's height
2. box-sizing
	- content-box
		- width/height refers to the width/height of just the content
	- border-box
		- width/height refers to the width/height of the content + the padding + the border
3. overflow
	- if height is set, and content is too large for element, it will flow outside of the element
	- visible
		- default.  The content is displayed outside of the element
	- hidden
		- the content is cropped outside of the element
	- scroll
		- scroll bars appear on the element allowing you to scroll within the element
	- auto
		- like scroll, but only if there is too much content.  If the content fits within the element, scroll bars are hidden

![We Do](http://i.imgur.com/ylb6WX9.gif)

&#x1F535;  **(Activity 15m)** On your previous element

1. set height to 50px
2. set width to 50px
3. view page
4. set box-sizing to border-box
5. refresh page
6. add a lot of content to the element
7. set overflow to hidden
8. refresh page
9. set overflow to auto
10. refresh page

<br>

## Calculating the actual size of an element
**Width:** width + padding-left + padding-right + border-left + border-right
**Height:**	height + padding-top + padding-bottom + border-top + border-bottom

With `box-sizing: border-box;` "the padding and border press their way inside the box rather than expand the box. The result is a box the exact width you set it to be and can count on."

## List and define the different ways to display an element (15m )

An element can be placed on the page in many ways using the `display` property

1. block
	- the element takes up an entire line.  No other elements can be placed before/after it on that line.
	- width defaults to 100%
	- _create 2 divs with text inside_
2. inline
	- the element is placed on the same line as its other inline siblings
	- width defaults to the width of the content
	- width and height properties are ignored
	- only horizontal margin and padding are respected (not top/bottom margin/padding)
		- text must flow normally on the next line in a paragraph
		- _add a `display: inline` rule to all div tags_
		- _add `margin: 30px`_
		- _add an `img` tag below the divs_
3. inline-block
	- very similar to inline, but height, width, and top/bottom padding/margin work
	- height and top/bottom padding/margin can create space between current line and previous/next lines
	- _change to `display: inline-block` and notice the margin change_
4. none
	- remove the element from DOM completely

<br>

![We Do](http://i.imgur.com/ylb6WX9.gif)

&#x1F535;  **(Activity + Breaktime 15m / 12:20-12:35pm)**


1. create two `span` tags with
	- short random content
	- 1px solid black border
	- 10px padding
	- 10px margin
2. view page
3. add filler text after your span tags so that you have many lines of text
4. refresh the page
5. change both span tags to be inline-block elements
6. refresh the page
7. change both span tags to be block elements
8. refresh the page
9. change both span tags to have `display:none`
10. refresh the page

<br>

## Differentiate between units of measure in layout (10m)

1. px
	- pixels.  most basic unit
2. em
	- a proportion of the element's font size
  - default font size is 16px
	- e.g. if the element's font-size is 16px, 0.5em is 8px
3. rem
	- a proportion of the browser's font size (or html)
	- each browser has a default font-size, usually set on the body or html tag
4. %
	- can be a percent of different attributes, depending on the property it is assigned to
		- height: % of parent's height
		- width: % of parent's width
		- padding: % of parents's width
			- even for top/bottom padding
		- border: doesn't even work
		- margin: like padding


<br>

![We Do](http://i.imgur.com/ylb6WX9.gif)

&#x1F535;  **(Activity 5 min)**


1. create a p tag with
	- short random content
	- 1px solid black border
	- 10px padding
	- 10px margin
	- _you can get rid of any earlier `p` tag declarations if you wish_
2. view the page
3. set padding/margin to 1em
4. refresh the page
5. increase the font size to 34px
6. refresh the page
7. set padding/margin to 1rem
8. refresh the page
9. set width to 50%
10. refresh the page
11. resize browser window

<br>

## Describe some common techniques used in layout (5 min)

1. fluid layout
	- use % widths so that content scales with the width of the browser
	- great for making sites look good on all screens
	- use % widths on images
2. using spacing in ems
	- if a user increases the font size in their browser, using pixels for spacing can be problematic
	- Use ems instead so that elements scale properly
	- proportional
3. using ems and rems
	- can define a font-size for a "module" on the page using rems
	- look at the body copy font size for that module to determine what this size will be
	- spacing for everything within that module is done using ems
	- this way a module's spacing is independent of their parent's font-size
4. use rems/ems for vertical spacing. use % for horizontal spacing
	- a good rule of thumb

<br>

## List the different ways an element can be positioned (15 min)

Sometimes we do want elements to overlay each other.  In this case we can use the `position` property in conjunction with top/left properties to define layout the traditional way.

1. static
	- default
	- top/left/bottom/right do not affect the element
2. relative
	- element is positioned relative to its parent
3. absolute
	- element is positioned relative to the whichever ancestor is positioned relative
	- Example: A number or text on top of an image
	- if no ancestor is positioned relative, it is positioned relative to the browser window
4. fixed
	- like absolute, but does not move when user scrolls down/up the page
5. z-index
	- a simple integer used to determine which element is layered on top of another
	- elements with a higher z-index are stacked on top of elements with a lower z-index


<br>
![We Do](http://i.imgur.com/6Kce0ca.png)

**CODE ALONG:** Here's some HTML code for this section

```html
<div id="container">
    <div id="square1"></div>
    <div id="square2"></div>
    <div id="square3"></div>
    <div id="square4"></div>
</div>
```

And the CSS

```css
#container {
    height: 500px;
    width: 500px;
    background-color: gray;
}
#square1 {
    background-color: red;
    height: 100px;
    width: 100px;
}
#square2 {
    background-color: blue;
    height: 100px;
    width: 100px;
}
#square3 {
    background-color: green;
    height: 100px;
    width: 100px;
}
#square4 {
    background-color: black;
    height: 100px;
    width: 100px;
}
```


#### Relative Positioning

Declaring `position:relative` allows you to position the element top, bottom, left, or right relative to where it would normally occur.  Let's add some CSS and see what happens:

```css
#square1 {
    background-color: red;
    height: 100px;
    width: 100px;
    position:relative;
    top: 0;
    left: 40px;
}
```

#### Static Positioning

HTML elements are positioned static by default. A "static positioned" element is always positioned according to the normal flow of the page and are not affected by the top, bottom, left, and right properties.

Again, the default positioning for all elements is static. This means that no positioning has been applied and the elements occurs where they normally would in the document.

If we revisit our squares from earlier in class:

```css
#container {
    background-color: gray;
    position: static;
    height: 500px;
    width: 500px;
}
```

You rarely explicitly declare `position:static` like this because it is the default.

#### Fixed Positioning

An element with fixed position is positioned relative to the browser window.  It will not move even if the window is scrolled, so a fixed positioned element will stay right where it is creating an effect a bit like the old school "frames" days.

Try it out:

```css
#square2 {
    position: fixed;
    width: 100px;
    height: 100px;
    background-color: blue;
    top: 0;
    left: 0;
}
```


#### Absolute Positioning

Specifying `position:absolute` _removes the element from the document_ and places it exactly where you tell it to be.

```css
#square1 {
    background-color: red;
    height: 100px;
    width: 100px;
    position:absolute;
    top: 0;
    right: 0;
}
```

#### Z-index

Add `z-index: 1;` to your `#square1` selector

<br>

![We Do](http://i.imgur.com/ylb6WX9.gif)

&#x1F535;  **(Activity 20 min)**


1. create a p tag with
	- short random content
	- 1px solid black border
	- 10px padding
	- 10px margin
2. add a lot of filler text (enough to fill up more than the screen)
3. view page
4. for the p tag
	- set position to relative
	- set top to 20px
	- set left to 20px
5. refresh the page
6. set the p tag's position to absolute
7. refresh the page
8. set the p tag's position to fixed
9. refresh the page
10. scroll down

<br>

## Independent Practice
- [Wendy Bite](../student_labs/wendy_bite_starter/)
- [CSS Review](https://github.com/ATL-WDI-Exercises/css-review)

<br>

## Additional Resources

- CSS Reset

    - Make all browsers style elements the same by default
    - [Eric Meyer reset](http://meyerweb.com/eric/tools/css/reset/)
    - [Shay Howe's HTML/CSS Guide](http://learn.shayhowe.com)
    - [LearnLayout.com](http://learnlayout.com/)
        - An great interactive tutorial that details CSS' many properties and quirks.
