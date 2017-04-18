# CSS Selectors

## Learning Objectives
* Use CSS selectors to style an HTML page
* Explain the concept of CSS specificity
* Use CSS specificity to apply CSS rules to `specific` HTML elements
* Define "cascading" in the context of CSS specificity

Since `html` elements can have both a type (the tag) and several attributes (such as an id, a class, or a set of classes), we can use these types and attributes to *select* a specific DOM node or a set of specific DOM nodes.

Let's look at an example:

```html
<body>
  <h1>Hello world!</h1>
  <p>This is some fake dummy content. It doesn't matter what it is! Whatever you want! Smelly fish create beautiful works of art in order to achieve world peace.</p>
  <p class="red">This paragraph has a class of "red"</p>
  <p class="red" id="green">This paragraph has an id of "green"</p>
  <div class="red">This div has a class of "red"</div>
</body>
```

In the above HTML we have the following inside the body section:

* an `h1` element
* 3 `p` elements:
  - 2 have the the CSS class of `"red"`
  - 1 has an id value of `"green"`
* a `div` with the CSS class of `"red"`


First let's make all elements with a class of "red" have a background of red:

```css
.red {
  background: red;
}
```

Awesome, but I think I want just the `<p>` elements with that class name to have a background of red:

```css
p.red {
  background: red;
}
```

Finally to select an element with an id we use the _id_ selector (`#`). Let's set the background color of the p element that has a class of "green":

```css
p.red {
  background: red;
}
#green {
  background: green;
}
```

The above example can be found at this [codepen](http://codepen.io/drmikeh/pen/mEXQZr?editors=1100#0).

---

## CSS Specificity

If I change the css selector from `p.red` back to `.red` you'll notice that the paragraph element with the id of green is still green. This is because of CSS Specificity. While CSS cascades from top to bottom. The CSS that is applied depends on Specificity as well. Take the following example:

```css
#green {
  background: green;
}
.red {
  background: blue;
}
.red {
  background: red;
}
```

In this example the elements that have the class red, will ultimately have a background of red even though blue was set first because it takes the last declared property. However, even though the `#green` selector was written first, it has a higher specificity and therefore overides the following background properties.

---

## Common Selectors

The following list of selector types is by increasing specificity:

| CSS Selector   | Syntax         | Example HTML                               | Example CSS                          |
|:--------------:|:--------------:|:------------------------------------------ |:------------------------------------ |
| universal      | *              | `<p>A short paragraph</p>`                 | * { color: black; }                  |
| type           | p              | `<p>A short paragraph</p>`                 | p { color: blue; }                   |
| class          | .              | `<h1 class="weather">Today's Weather</h1>` | .weather { color: red; }             |
| attribute      | [key="value"]  | `<button type="radio">Click Me!</button>`  | [type="radio"] { color: green; }     |
| Pseudo-classes | :hover         | `<div>Hover Over Me!</div>`                | :hover { background-color: purple; } |
| id             | #              | `<h1 id="weather">Today's Weather</h1>`    | #weather { color: red; }             |
| Inline style   |                | `<p style="color: magenta">Hello</h1>`     |                                      |

### The Descendant Selector and the Adjacent Selector

Multiple selectors can be combined in different ways. For example, given the following `HTML` code:

```html
<p class="news">News</p>
<article class="weather">
  <p>Today's Weather</p>
  <button>Radar Map</button>
  <button>Weather Alerts</button>
</article>
```

If we apply the following CSS:

```css
p.news {
  color: blue;
}
article p {
  color: green;
}
button {
  color: white;
  background-color: blue;
}
button + button {
  margin-left: 20px;
}
```

We have selected the following:

* the 1st paragraph is selected using both the `type` selector and the `class` selector
* the 2nd paragraph is selected using the `descendant` selector
* the 2nd button is selected using the `adjacent` selector


The above example can be found at this [codepen](http://codepen.io/drmikeh/pen/WxrYKW?editors=1100#0)

---

## Exercise - CSS Diner

Play [CSS Diner](http://flukeout.github.io/) to learn more about CSS Selectors. See if you can finish all 26 levels.

---

## Resources
* [30 CSS Selectors You Must Memorize](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
* [Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)
* [CSS Specificity Calculator](http://specificity.keegan.st)
* [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)


## Sample Quiz Questions

* What is specificity?
* What has higher specificity, the `id` or the `class` selector?
* what does the `!important` directive do in CSS?
