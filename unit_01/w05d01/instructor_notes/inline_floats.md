# CSS - Advanced Inline Layout (2:30-4:30pm)

## Lesson Objectives

1. Explain the float property
1. Describe how to use calc

<br>

## Explain the float property (20m / 2:30-2:50pm)

Imagine we had an image, and we wanted to have text wrap around it, like in a newspaper.  The float property was originally created to handle exactly this.

### Original use

The `float` property has two values

1. left
1. right

If you want to force text to begin on the line below the floated element (i.e. stop floating), you can use the `clear:left`, `clear:right`, `clear:both`


<br>

![WEDO](http://i.imgur.com/6Kce0ca.png)

1. Create a page with an image on it
2. Add some placeholder text
3. Have the placeholder text flow around the right side of the image (image is on the left side of the page)
4. Reverse it, so the image is on the right side of the page, with the text flowing around the image's left side

<br>

### Alternative use for layout

You can use `float` to line up `block` elements, one next to another.

WE DO: **Nav Bars!**

##### Issues with this technique

1. All elements in the line must have widths that do not add up to more than their container, or they will wrap.
2. If you have a container with nothing but floated elements for content, the height of the container will be 0, even though the floated elements take up space
	- This is problematic if the container has a background color/image
	- To fix this, you have many options:
		- put an empty div with `clear:both` after all the floated elements
		- add `overflow:auto` to the container
		- many others...

![WEDO](http://i.imgur.com/6Kce0ca.png)

1. Create four div tags (with content), each 25% of the screen.  Use `float` to have them line up on the same line as each other
2. Surround these `div` tags with a `section` tag that has a background color and a padding of 1em
3. Fix it so you can see the background color of the `section` tag

<br>

##### Compare this technique with inline-block

Inline-block elements are often preferable to a line of floated block elements, but inline-block elements have a problem too:

If you have inline-block elements next to each other, there is often space between each element.  This is caused by the browser rendering the line breaks between each tag as a single space.

To fix this:

- reformat code so that there is no space between each tag
- Set the `font-size` of the container to be 0 and then reset it for each element
- https://css-tricks.com/fighting-the-space-between-inline-block-elements/

<br>

![WEDO](http://i.imgur.com/6Kce0ca.png)

1. Create four div tags (with content), each 25% of the screen.  Use `display:inline-block;` and some css hackery to have them line up on the same line as each other.

<br>

## Describe how to use calc

The `calc` property is used when you want to combine two units of measure together.  This is especially useful when the units of measure are different.

Example:
If you have a fixed width element (e.g. a logo) in line with an element that has a % width

<br>

![WEDO](http://i.imgur.com/6Kce0ca.png)

1. Create a nav with a logo on the left and four links to the right of the logo
2. As you resize the window, the logo should remain a fixed width, but the space for the four links should grow and shrink appropriately.

## Labtime
- [Check out your Student Labs Folder](../student_labs/css/README.mkd)
- [Layout games](https://github.com/ga-wdi-exercises/layout-games)
- [Craigslist Grid layout](https://github.com/ga-wdi-exercises/craigslist_grid)
