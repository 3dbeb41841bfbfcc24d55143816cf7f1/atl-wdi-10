# Hyrule Potion Shop

All the flexbox properties have been removed from `holygrail.css`. Fill in the blanks to make the website look nice and responsive again!

(`styles.css` contains all the styling not relevant to flexbox. Feel free to look at it, but don't modify it!)

It should follow the concept of the [Holy Grail layout](https://mdn.mozillademos.org/files/3760/HolyGrailLayout.png).

What we mean by "filling in the blanks" is taking this:

```css
div{
  /*background-color:*/
}
```

...and turning it into this:

```css
div{
  background-color:blue;
}
```

Feel free to take a look at our solution at the link below -- but only peek at the CSS if you're really stuck!

Here's one solution: http://ga-wdi-exercises.github.io/hyrule_potion_shop/

<br>

## The Holy Grail Layout

![holy grail layout](https://mdn.mozillademos.org/files/3760/HolyGrailLayout.png)

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

[Codepen Example](http://codepen.io/takeradi/pen/MyYqKX)