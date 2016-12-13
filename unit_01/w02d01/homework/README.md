[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Homework : HTML & CSS

## Setup

-   Confirm that Atom is set up as your default text editor for Git commits.

## Instructions

In tonight's assignment, are going to make a simple storefront website, piece by
piece, inside this directory. As you do, you will need to make a Git commit
after completing each step.

... But first, a note about commits and commit messages!

Up until now, you may have been using `git commit -m` to make your commits. The
`-m` flag conveniently allows you to write your commit message in the terminal,
rather than in a text editor (which is what would otherwise pop up if you left
off the `-m` flag). However, one major drawback to using `-m` is that this makes
it hard to write a commit message of more than a single line, or to carefully
review and revise the content of your commit message before making the commit.

Why is this important? The answer is that your Git commit messages are a form
of self-documentation -- they give you a way of leaving detailed notes about
each commit that you make, so that another developer (or you, after six months
on another project) can look at the history of your work and see what choices
you made and why.

> In contrast, imagine how unpleasant it would be to have to figure out someone else's project
> if your only clues were commit messages like _"Pushed code"_ or
> _"Fixed that HTML thing"_...

For this reason, we want you to get
practice writing more detailed commit messages, so we ask that you please do not
use the `-m` flag in this assignment.

What makes a good commit message? As far as content goes, it should include
things like:

-   High-level descriptions of groups of changes;

-   Explanations of why a particular change or group of changes got made;

-   References to external code, both for providiing attribution and for
    linking to relevant documentation; and, most commonly...

-   References to the issue (or issues) that your commit is addressing (a very
    important part of managing workflow).

There are also a whole host of best practices on how to format and structure
your commits; a summarized list of these can be found in the
[commit guidelines](./commit-guidelines.md).

With all this in mind, let's go ahead and get started!

### HTML Page

The first thing you'll be doing is building a simple site with three HTML pages:
an 'index' page, an 'about' page, and a page for one of the company's products.

1.  Create a new file called `index.html`, filled with HTML boilerplate.
    Give the page a header, a 'main' section, and a footer.

    > For context, the header will show the company's logo and hold navigation.
    > The main section of `index.html` will display the company's most
    > popular product and show a link to where you can purchase one.
    > The footer will hold links to other, less well-traveled parts of the site
    > (e.g. `Warranty and Returns`).

2.  Add a heading (with the text "ExampleCompany") and a nav bar to the header.

3.  Create a new file called `about.html`, also filled with standard HTML
    boilerplate. The body should contain a header, followed by a heading with
    the text "About Us".

4.  Add an article to the body of `about.html`, with two paragraphs of text
    inside. Since this is just a mock site, fill the paragraphs with
    'lorem ipsum' text (or equivalent).

5.  Add a link with the text "< Back" to the bottom of `about.html`.
    Have this link take the user back to `index.html`.
    Then, add a link to the nav bar of `index.html` with the text 'About Us',
    and have that link direct the user to `about.html`.

6.  In the main section of `index.html`, add a box containing the name of the
    the product ('PopularProduct'), a short description (just use lorem ipsum
    for now), and a link with the text "Buy Now".

7.  Create a new file called `product-page-01.html`, and again fill it with
    HTML boilerplate. Have the "Buy Now" link from the previous step point to
    this page. Then, add a header and a 'main' section to the body.

8.  Inside the 'main' section of `product-page-01.html`, add a heading
    ('PopularProduct'), a longer description (lorem ipsum again), a form
    for placing an order, and a 'Back' link similar to the one in `about.html`.

9.  Inside the order form, add a set of checkboxes (to selectively
    include/exclude Features A, B, C, D, and E), and create labels to match up
    with each checkbox. Fill each label with the appropriate text ('Feature A',
    'Feature B', etc). Make sure that all checkboxes have the same value for
    'name', so that their results will get grouped together by the form.

10. Also inside the order form, add a drop-down menu to choose the delivery
    speed : Standard Delivery, Expedited Delivery, or Overnight Delivery.
    Then add a 'submit' button to the order form, with the text "Buy Now" inside
    of it.

You will probably need to use a reference to figure out exactly how to
implement those steps in HTML.
The [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML)
and [W3Schools](http://www.w3schools.com/html/default.asp)
are two good ones.

### Adding CSS

Now that we have a simple site with a little bit of content, let's add some
styling using CSS.

1.  Create a CSS file called `main.css` and link to it from `index.html`,
    `about.html`, and `product-page-01.html`.

2.  Set all the text content in the page to be center-aligned. (Hint: Is there a
    simple way to do this?)

3.  Set the image found [here](https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Railway_workshop_museum_exhibition_in_Ljubljana%2C_Slovenia.jpg/1024px-Railway_workshop_museum_exhibition_in_Ljubljana%2C_Slovenia.jpg)
    as the background of the page, and have it cover the entire page.

4.  Set some default font properties for the document: 'Lucida Sans' (a member
    of the 'sans-serif' font family) with a size of 20px.

5.  Give the main section of the page a text color of `#dddddd`, with a
    translucent background (white, at 60% opacity). Style the `<article>` and
    `<h2>` in `about.html` the exact same way.

6.  Apply those same properties to the top-level heading. Additionally, give the
    top-level heading a 'bolder' font weight and a font size of 45 pixels.

7.  Go over to `product-page-01.html`. Suppose that we want all of the
    checkboxes and buttons in the form (but nothing else) to have the same
    color, size, and font. Define a class accomplish this; make all of that text
    blue, in the 'Impulse' font (sans-serif family).

8.  Whoops, new request from marketing! Apparently the submit button, which they
    keep calling a 'call to action', isn't big enough or eye-catching enough.
    They want the button to be bright red, and for the text to be big (50px or
    more). Use either an ID or another class to make those modifications.

9.  Hmmm. That blue text color is clashing with our new red background -- lets
    make that button text white instead.

10. Lastly, let's do something to make all of those links look nicer. Make it so
    that all links have black text; then, make it so that the link inside the
    nav bar on the `index.html` page and the 'back' buttons in `about.html` and
    `product-page-01.html` have the same translucent background as the headings,
    _without changing anything else_. Accomplish this in whatever way you think
    is best.

As before, you will probably need to consult a reference to figure out exactly
how to implement these steps. Fortunately, both the
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) and
[W3Schools](http://www.w3schools.com/css/default.asp)
have content on CSS. Another good resource is
[CSS-Tricks.com](https://css-tricks.com/).

### Reach Features

> NOTE: Do not attempt until every other objective is met.

It's possible to completely sidestep needing classes and IDs in this
example by using more complex selectors in your CSS rules. Can you
figure out how? Take a look at the references above for hints.

Make a commit after refactoring your CSS to use these more advanced selectors.

## Submitting Your Work

When you're ready to submit your work,

1.  Push your code to your fork of the class repo.
2.  File an issue on the class repo titled "Your Name -- wXXdXX".

The issue should include:

-   A link that points back to your fork.

-   A 'comfort' score on how you feel about the material, from 1 (very
    uncomfortable) to 5 (very comfortable)

Then, once you file this issue, please go through these
[preparatory materials](./prep.md)
to help get you ready for tomorrow's material on layout.
