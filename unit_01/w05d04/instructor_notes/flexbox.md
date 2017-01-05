# Flexbox

Screencasts

- [Part 1](http://youtu.be/wBlBTO7mqoI)
- [Part 2](http://youtu.be/_I58MXDnBEs)

## Learning Objectives

- Give an example of a problem solved by Flexbox.
- Given a desktop-first webpage, make it look presentable on mobile devices (and vice-versa) with as little CSS as possible.
- Contrast flex containers and flex items.
- Explain what is meant by the "Holy Grail Layout".


## Intro

![](https://camo.githubusercontent.com/5d81007fece17219ff6ece0ed8da9920b6a2cc55/687474703a2f2f692e696d6775722e636f6d2f796c62365758392e676966)

Read these: 

- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- https://css-tricks.com/centering-in-the-unknown/

<br>

## Framing

Check out this GIF

<br>
![](http://2.bp.blogspot.com/-41v6n3Vaf5s/UeRN_XJ0keI/AAAAAAAAN2Y/YxIHhddGiaw/s1600/css.gif)

<br>
Developers used to feel that way all the time defining page layout using CSS. Why is that?

HTML was created as a document-oriented language. CSS emerged as a way to make an HTML file appear more document-like. Literally, like something you would make in Microsoft Word.

So layout wasn't much of a concern in the beginning. But as the web has evolved, so have the design needs of developers. Unfortunately, it takes a while for CSS -- and by that we mean the CSS Working Group -- to catch up with those needs.

> It's difficult to establish new CSS standards. The [CSS Working Group](https://en.wikipedia.org/wiki/CSS_Working_Group) has a hard time agreeing on anything, especially cross-browser standards.

Fortunately, Flexbox, a layout mode introduced with CSS3, has slowly but surely become a standard over the past few years. It's designed to ensure that elements on a page behave predictively on varying screen sizes and devices.  

## Problem 1: Vertical Alignment (15 minutes / 0:15)

Let's start out by talking about a problem that anybody who has written CSS has had to deal with:

**I have a `div`. I would like to center it vertically and horizontally on my page.** The end result should look something like this...

![centered div](http://i.imgur.com/2jbrXMp.png)

#### You Tell Me: What Should I Try?

Open up a new Codepen.io and copy the starter code below. Try to center the div.

```html
<body>
  <div>This is my div!</div>
</body>
```

```css
html {
  height: 100%;
}

body {
  min-height: 100%;
  background-color: #ccc;
  margin: 0 auto;
}

div {
  width: 100px;
  height: 100px;
  outline: 1px solid red;
}
```

<details>
  <summary><strong>These might work...</strong></summary>

  > **Padding**: The simplest approach would be to set equal padding on the top and bottom of the element. We would need to know the exact height of the element and container in order to get this exactly right. This can also get tedious when there is more than one element in a container.
  >
  > **Margin**: Similarly, we could add some margin to the element we are trying to center. The same issues remain.
  >
  > **Absolute Positioning**: You could use properties like `top` and `left` to position an element in the center. This, however, removes it from the document flow.

</details>

<details>
  <summary><strong>These could work in other scenarios...</strong></summary>

  > **`line-height`**: When vertically centering a single line of text, you can set the line-height to that of the whole container.
  >
  > **`vertical-align`**: Used to align words within a line of text (e.g., superscript, subscript).

</details>

> The tough part is that how to vertically center a element depends on its context. Depending on your situation, one or more of the above techniques could work. [Here's an enlightening post on the matter](https://css-tricks.com/centering-in-the-unknown/).

### Flexbox to the Rescue

```css
html {
  height: 100%;
}

body {
  min-height: 100%;
  background-color: #ccc;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

div {
  width: 100px;
  height: 100px;
  outline: 1px solid red;
}
```

## How It Works (10 minutes / 0:10)

![flexbox diagram](img/flexbox-diagram.jpg)

When you declare `display: flex` on a container, it becomes a **flex container**.

First, you use `flex-direction` to indicate whether you want the items in the container -- the **flex items** -- to "read" left-to-right (`row`), right-to-left (`row-reverse`), top-to-bottom (`column`), **or** bottom-to-top (`column-reverse`).

When you specify a flex-direction, you can think of it as placing an axis in that direction across your flex container. So if you use `flex-direction: row` or `row-reverse`, this **main axis** will be the same as the X-axis (horizontal) on a graph. Otherwise, it'll be the Y-axis.

Then, you determine how you want to align or **justify** the items along this main axis using the `justify-content` property. It'll do nice things for you like let you put even spacing between all the items (`space-between` and `space-around`).

Finally, you control how you align the items along the axis that goes across the main axis -- the **cross axis**, if you will -- with the `align-items` property. If you have `flex-direction:row`, the main axis is the X-axis, and the cross-axis is the Y-axis.

Lastly, you can also do nice things like control how you want things to line up across the cross-axis by using `align-content`, such as `space-between` and `space-around`.

### In Summary...

| Property | What's It Do? | Examples |
|----------|---------------|----------|
| **display**  |               | `flex`   |
| **[flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)** | Sets the directional flow of flex items | `row`, `column` |
| **[justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)** | Align along flex-direction (main axis) | `center`, `space-between` |
| **[align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)** | Align along not-flex-direction (cross axis) | `flex-start`, `center` |

> That's a lot of CSS properties! Don't worry, you're not expected to memorize all of them. Us instructors need to look them up all the time! [Here's a great resource](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

## Problem 2: Make the Footer Stick (10 minutes / 0:35)

I want my footer to lie along the bottom of my page.

#### You Tell Me: What Should I Try?

```html
<body>
  <header>This is my header.</header>
  <main><p>Blah blah blah blah blah...</p></main>
  <footer>This is my footer!</footer>
</body>
```

```css
html {
  height: 100%;
}

body {
  min-height: 100%;
  background-color: #ccc;
  margin: 0 auto;
}

footer {
  width: 100%;
  height: 50px;
  background-color: #888;
}
```

Making the footer lie against the bottom of the screen is pretty easy: just use absolute or fixed positioning. However, using absolute or fixed positioning means everything else on the page ignores my footer. The text of `<main>` could easily run under the footer. We want the text to "push" the footer to the end of the page.

### Flexbox to the Rescue

```css
html {
  height: 100%;
}

body {
  min-height: 100%;
  background-color: #ccc;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

footer {
  width: 100%;
  height: 50px;
  background-color: #888;
}
```

<details>
  <summary><strong>What's the main axis on here? What about the cross axis?</strong></summary>

  > Main: y-axis. Cross: x-axis.

</details>

## You Do: More Flexbox Properties (25 minutes / 1:00)

Time for you to research some more Flexbox properties. You will be split into groups and assigned one of the following flex properties...

- `align-content` **(David + Alejandra)**
- `flex-grow` **(Kiran + Alan)**
- `flex-wrap` **(Matt + Sophia)**
- `order` **(Audrey + Michael)**
- `flex-basis` **(everyone check this one out)**

Your task is to...

* Come up with [ELI5 ("Explain Like I'm 5")](https://www.reddit.com/r/explainlikeimfive) definition for the property.
* List the different values this property can take.
* Create [a Codepen](http://codepen.io) demonstrating the property's usage.
* If possible, practice using some of the flex properties we covered in the previous section.

> You will need to create a Codepen account in order to save your pen and share the link.

If you finish early, try exploring some of the [other flexbox properties](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) not assigned in this exercise.

#### Some Helpful Resources

- [CSS Tricks' Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Visual Guide to CSS Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
- [Solved by Flexbox](http://philipwalton.github.io/solved-by-flexbox/)
- [Flexplorer](http://bennettfeely.com/flexplorer/)

### Recap

<details>
  <summary><strong><code>align-content</code></strong></summary>

  > How multiple rows or columns are spaced along the cross-axis. Takes the same properties as justify-content.
  >
  > [Example](http://codepen.io/asim-coder/pen/WrMNWR)

</details>

<details>
  <summary><strong><code>flex-grow</code></strong></summary>

  > If the flex container is too big for all the flex bases, the proportion a particular flex item will occupy
  >
  > [Example](https://codepen.io/raphaelgoetter/pen/yyMOOp)

</details>

<details>
  <summary><strong><code>flex-wrap</code></strong></summary>

  > Defines item behavior if they expand beyond a single line.
  >
  > [Example](https://codepen.io/raphaelgoetter/pen/yyMOOp)

</details>

<details>
  <summary><strong><code>order</code></strong></summary>

  > The order in which you want flex items to appear along the main access. The default is 0. Negative numbers are allowed.

</details>

<details>
  <summary><strong><code>flex-basis</code></strong></summary>

  > How big the flex items "want" to be
  >
  > [Example](https://codepen.io/raphaelgoetter/pen/yyMOOp)

</details>

## Break (10 minutes / 1:10)

## The Holy Grail Layout (5 minutes / 1:15)

![holy grail layout](img/holy-grail-layout.png)

This is something you know well, even if you don't recognize the term. It describes a webpage with a header bar, a footer bar, and three columns along the middle: a wide "main" column, a navigation column on the left, and an advertisement, site map, or extra info column along the right.

Obviously, this layout won't work on tiny screens, unless you really like super-skinny columns. It's common to stack things on top of each other for mobile views to make one single column.

Before flexbox, this involved a lot of pushing and shoving with dimensions and positioning. You would essentially have to write two completely separate stylesheets: one for mobile, and one for desktop.

With flexbox, just change the `flex-direction` for smaller screen sizes, and you're pretty much done!

```css
body {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 480px){
  body {
    flex-direction: column;
  }
}
```

> A layout so holy, [it has its own Wikipedia article](https://en.wikipedia.org/wiki/Holy_Grail_(web_design)).

[Example](http://codepen.io/takeradi/pen/MyYqKX)

## Lab #1: [Hyrule Potion Shop](../student_labs/hyrule_potion_shop)
## Lab #2: http://flexboxfroggy.com/
## Lab #3: [Airbnb](../student_labs/css-airbnb) 



## Resources

* [The Ultimate Flexbox Cheatsheet](http://www.sketchingwithcss.com/samplechapter/cheatsheet.html)
* [CSS Tricks Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
* [Solved by Flexbox](http://philipwalton.github.io/solved-by-flexbox/)
* [Flexplorer](http://bennettfeely.com/flexplorer/)
* [Holy Grail Layout - Solved By Flexbox](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)

## Further Reading

* [The CSS `grid` Module](https://css-tricks.com/snippets/css/complete-guide-grid/)
