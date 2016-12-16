# CSS Review

## Learning Objectives
- Describe what on a webpage can be modified with CSS, and what cannot
- Identify CSS methods that can replace bad habits in HTML
- Properly separate the concerns of semantics and style
- Identify the components of the box model
- Differentiate between border-box and content-box values for box-sizing

## Framing (10 min)

#### What is CSS?

> Cascading Style Sheets are what make webpages look like more than just words on a page. HTML's only purpose is to say what purpose chunks of content serve; CSS's only purpose is to say what a chunk with a certain purpose should look like.

This lesson is going to be almost entirely you working through some exercises we have prepared for you. You will not turn in these exercises. 

These exercises may use CSS properties with which you're unfamiliar. In fact, you may not be familiar with CSS at all.


#### What should you do if something is unfamiliar?

> 1. Read it like English. CSS is intended to be readable, although sometimes it's more successful than at other times.
> 2. Look it up. If you don't know what `box-sizing` means, Google `css box-sizing`.

The purpose of this class isn't for you to walk away being an expert in all things CSS. That takes months. Rather, it's for you to be exposed to all the things that can be accomplished with CSS. If they're on your radar, you can always look them up later.

Remember: being a good web designer is like being a good artist. We can teach you to hold the paintbrush, but it's on you to create a masterpiece!

## You Do: HTML / CSS Review (15 min)

Walk through these [slides](html_css_review.pdf) with your buddy.

## You Do: CSS Crash Course (25 min)

In pairs, please work to complete this exercise:

[CSS Review Exercise](./css-review)

Work on them in this order:

- positioning
- sizing
- selectors

## Questions (15 min)

Each group will share one question or something they learned.

## You Do: Wendy Bite (30 min)

Complete this exercise with your buddy:

[Wendy Bite](./wendy_bite)

## Questions (15 min)

Each group will share one question or something they learned.

## Conclusion

There are over 500 CSS properties. It's impossible to memorize them. The key is to just get an idea of what you can accomplish with CSS, and then know what to Google.

### Tools that can help

**[The CSS Validator](http://jigsaw.w3.org/css-validator/#validate_by_input)** is a tool into which you can copy and paste your CSS, and it'll tell you precisely what's wrong with it. We'll be expecting you to validate your CSS during this course.

**The Chrome element inspector** lets you look at a specific element on a page, see exactly which CSS rules are being applied to it, and turn those rules on and off and modify them. It doesn't change your file; refresh the page, and the changes are gone.


## Quiz Questions

- What is the purpose of `flex-box`?
- What does `*` select?
- What does `box-sizing:border-box` do?
- What's the difference between `position:relative`, `position:absolute`, and `position:fixed`?
- What's the difference between borders, margins, and padding?
- What's the difference between an outline and a border?
- How would you apply styles only for screens narrower than 480 pixels?
- What is `z-index`?
- What is CSS specificity?
- What are psudo-classes? (provide an example)
- What are composite selectors? (provide an example)
- What are Google Fonts and how can we incorporate them into our app?
- What is an `em` and how is it used?
- What are `vh` and `vw` and how are they used?

## Further Reading

- [CSS Tricks Flex Box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Shay Howe's HTML/CSS Guide](http://learn.shayhowe.com)
- [LearnLayout.com](http://learnlayout.com/)
  - An great interactive tutorial that details CSS' many properties and quirks.
- [W3Schools CSS Reference](http://www.w3schools.com/cssref/default.asp)
  - Almost every CSS property ever.
- [Mozilla Developer Network CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  - Like W3Schools, but in *much* more detail.
- [CanIUse.com](http://caniuse.com/)
  - Search for a CSS property (or HTML, or JS), and it'll tell you on which web browsers it functions.
- [CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
  - Copy and paste your CSS in here and it tells you what's wrong with it.
- [CSS Tricks Almanac](https://css-tricks.com/almanac/)
  - A list of css selectors and properties
- [CSS Units - em vs px etc](http://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/)
