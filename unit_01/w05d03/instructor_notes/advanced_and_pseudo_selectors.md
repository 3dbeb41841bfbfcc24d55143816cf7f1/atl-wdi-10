---
title: Advanced and Pseudo-selectors
type: lesson
duration: '1:30'
creator:
    name: Robin Thomas
    city: DC
adapted:
    name: Marc Wright
    city: WDIR
competencies: CSS

---


# Advanced and Pseudo-selectors

## Lesson Objectives
- Describe what "pseudo" means in the context of CSS
- Describe how to select even and odd elements on a page
- Make a page multi-paginated without using Javascript
- Create custom radio buttons and drop-down menus using CSS
- Explain why we need advanced selectors
- List advanced selectors

<br>

## Advanced Selectors

Advanced selectors help eliminate extra classes.  They provide no new functionality, but they make your code cleaner. Some examples are:

- family selectors 
    - `* {}` selects everything
- attribute selectors 
    - `a[href="http://www.google.com"] {}` selects any `a` element with an `href` value of "http://www.google.com"

<br>

## Pseudo-selectors

`:nth-child()` is one. More specifically, it's a pseudo-*class*. They let us do all sorts of things we had to use jQuery to do back in the day.

#### What does "pseudo" mean?

It's Latin (or Greek or something) for "false". `:nth-child()` is a "false class" because it doesn't really select an element; it selects a specific *state* of an element.

Pseudo-selectors all start with a colon. So if I wanted to select every `div` that was the 4th child of its parent, I'd write `div:nth-child(4)`.

<br>

![](http://i.imgur.com/ylb6WX9.gif)

## Pscavenger Hunt

There are lots of CSS advanced and pseudo-selectors, and they're really useful. Look up each of the selectors below, write down what it does and provide an example. Each group will come back and share what they learned.

For reference, http://www.w3schools.com/cssref/css_selectors.asp

- **Group 1 (David + Alejandra)**
  - `:hover`
  - `:visited`
  - `:active`
  - `:first-letter`
  - `:first-line`
  - `:nth-child`
  - `~`
- **Group 2 (Kiran + Alan)**
  - `:disabled`
  - `:checked`
  - `:focus`
  - `:target`
  - `:only-child`
  - `+`
  - `>`
- **Group 3 (Matt + Sophia)**
  - `:empty`
  - `:not`
  - `:after`
  - `:before`
  - `:last-child`
  - `[attribute]`
  - `[attribute^=value]`
- **Group 4 (Audrey + Michael)**
  - `:first-of-type`
  - `:last-of-type`
  - `:only-of-type`
  - `:nth-of-type`
  - `:first-child`
  - `[attribute*=value]`
  - `[attribute~=value]`
 

<br>

## WE DO - Whee, math!

Open up a new Codepen.io and add the following:

#####HTML

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
</ul>

<div>I'm a div</div>
```

#####CSS

```css
li:nth-child(3n) {
  color: red;
}
```


You can do **very simple math** in these pseudo-selectors. If I wanted to select every third element, I'd write `li:nth-child(3n)`.

`n` is the number of the current element. So when CSS looks at the first `li`, it multiples `3 * 1`, and actually selects the 3rd `li`. When CSS looks at the second `li`, it multiplies `3 * 2`, and actually selects the 6th `li`.

If I wanted to select the first 4 `li`, I'd use `li:nth-child(-n + 4)`. When the browser looks at the first `li`, it evaluates `-1 + 4`, and selects up to the 4th `li`. 

### Odds and evens

You *could* do `:nth-child(2n)`, but you can also just use the words "odd" and "even", as in `:nth-child(odd)` and `:nth-child(even)`.

Here's a handy site for demonstrating all this:

https://css-tricks.com/examples/nth-child-tester/

### Getting really crazy

You can treat pseudo-selectors just like any other selector in that you can chain them together:

If I wanted to select all the elements between 2 and 5, I'd use `li:nth-child(n + 2):nth-child(-n + 5)`.

There are probably more interesting things you can select, but my brain starts to hurt after thinking about it after a while.


<br>

## Forms

HTML checkboxes and radio buttons are virtually impossible to style, just because of the way browsers are built.

### Radio buttons

It's easy to make your own with CSS using `this+that`, which indicates "any `that` preceded immediately by a `this`":

```html
<input type="radio" name="country" value="USA" id="countryUSA" />
<label for="countryUSA">USA</label>

<input type="radio" name="country" value="UK" id="countryUK" />
<label for="countryUK">Britain</label>

<input type="radio" name="country" value="USSR" id="countryUSSR" />
<label for="countryUSSR">Mother Russia</label>
```

```css
input[type=radio]{
  width:1px;
  height:1px;
  overflow:hidden;
  position:absolute;
  opacity:0.01;
}
input[type=radio]+label{
  display:block;
  background-color:#eee;
  color:#369;
}
input[type=radio]:checked+label{
  background-color:#369;
  color:#eee;
}
```

Why go to all that trouble on the radio button?

I'd use `display:none`, but in some (dumb) browsers, `display:none` means the element isn't included in form submissions.

<br>

## Pagination

We've used some Javascript to make single-page apps appear to have multiple views. But you can do the same thing with the `:target` selector in CSS.

You've probably seen URLs like this:

```
http://something.com/index.html#aboutMe
```

The `#` at the end indicates an anchor (or jump-tag, or jump-to). The browser is going to look for an element with the ID of `aboutMe`, and if it exists, it'll try to scroll to that element such that it's aligned with the top of the screen. If you click on a jump-tag referencing an element on the current page, it will *not* reload the page. This is handy for jumping around sections. (See any Github readme.)

The element indicated by the jump-tag is then considered "targeted", meaning we can select it with `:target`.

*This* means we can do stuff like show only the element that has been targeted, creating the illusion of having separate pages.

Here's an example (the orange flash):

http://stackoverflow.com/questions/11227809/why-is-processing-a-sorted-array-faster-than-an-unsorted-array/17782979#17782979

```html
<nav>
  <a href="#aboutMe">About me</a>
  <a href="#contact">Contact</a>
</nav>

<section id="aboutMe">
  <h2>About me</h2>
</section>

<section id="contact">
  <h2>Contact</h2>
</section>
```

```css
section{
  display:none;
}
section:target{
  display:block;
}
```

<br>

## Pseudo-selector translation

#### What does this select, in English?

`nav a:nth-of-type(odd):active`

> "Inside every `nav`, select every odd-numbered anchor that is currently being clicked upon."

<br>

![](http://i.imgur.com/ylb6WX9.gif)

In groups, write out *in English* what each of the following is selecting:

- `*:first-letter:after`
- `input:checked+label:hover`
- `input:not([type=text]):disabled`
- `p:last-of-type:after`
- `div:nth-of-last-type(3n+3)+*:hover`
- `input.title:focus+div`
- `a.button.delete:hover:after`
- `button.active.edit#update`
  - What's "wrong" with this selector?

<br>

## Lab 1 - Make CSS proud to be American

Look in today's student labs folder for `murican_css`

Let's use CSS to take an HTML table and make it look like the American flag. I've provided the table. However, there are no classes or IDs on any of the elements. Nonetheless, your goal is to accomplish this *without* touching the HTML at all -- just the CSS.


<br>


## Lab 2 - CSS Color Box

Look in today's student labs folder for `css_color_box`

## Extra Resources
Additional GA YouTube content is here: https://www.youtube.com/playlist?list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J
