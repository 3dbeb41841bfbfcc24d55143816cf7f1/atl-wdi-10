# Week 3 Diagnostic Solutions

Q1. Given the page above, list as many ways as you can think of to query for the
button using `document`.

> `document.getElementById('only-once')`
> `document.getElementsByClassName('dangerous')[0]`
> `document.getElementsByTagName('button')[0]`
> `document.querySelector('#only-once') // or document.querySelectorAll( ... )[0]`
> `document.querySelector('.dangerous') // or document.querySelectorAll( ... )[0]`
> `document.querySelector('button')     // or document.querySelectorAll( ... )[0]`

Q2. Given the same page, now list as many ways as you can think of to query for
this element using jQuery.

> `$('button')`, `$('.dangerous')`, `$('#only-once')`
> `$('body button')`, `$('body > button')`
> `$('body .dangerous')`, `$('body > .dangerous')`
> `$('body').children()`

Q3. What is the syntax for setting a click handler on an element using jQuery?

> `/* jQuery Object* /.on('click', clickHandlingCallback)`
> `/* jQuery Object* /.click(clickHandlingCallback)` is also ok.

Q4. What happens if we don't use `window.onload` when setting event handlers on
the initial elements in the page?

> If we don't use `window.onload` to set handlers on the initial elements,
> the JS may execute before the desired element has been created in the DOM.

Q5. What could you write to change "defense: 20" to "defense: 100" to jigglypuff, above?
>`jigglypuff.defense = 20;`.

Q6a. What if we don't know the name we want the key to have, only that it's being
stored in the variable `mysteryKey`?

> In this case, we'd have to write `jigglypuff[mysteryKey] = 45`.

Q6b. How can you invoke the `sing` method in jigglypuff you've written?

> `jigglypuff.sing()`

Q7. Write a CSS selector to choose all elements that are the second child of
their parent element.

> `:nth-child(2)`. This one was tough -- you'd need to Google it.

Q8. What is "this"? Describe it as though you're explaining it to your mom.

> Objects are collections of properties and behaviors, called "methods".
> To refer back to the object that a method is part of from inside the method's
> code (for instance, in order to refer to another method, or one of the
> object's properties) JavaScript has a special keyword called `this`. It almost
> acts like a possessive pronoun (i.e. 'myself').

> To mom:
> "this" is a special Javascript keyword, and its value depends on where it is called, such as in a global context (where "this" would refer to the global object) or in a function. Think of functions as different, separate shops, and let's say each shop sells a particular white T-shirt. If you're in Shop A, and you grab "this" T-shirt,  "this" would be referring to the white T-shirt you are holding, found particularly in Shop A. Now, let's walk to Shop C, and they have the same white T-shirt, and as  you grab "this" shirt, it's not the same shirt you picked up in Shop A. "this" refers to a particular value depending on its location.

Q9. $(".someClass") returns...

> A jQuery object (containing a collection of all elements that belong to the
> class 'someClass').

Q10. What is the difference between `$(".someClass")[0]` and
`$(".someClass").eq(0)`?

> `$(".someClass")[0]` returns the first underlying JS DOM element selected (in
> this case the first element belonging to the class 'someClass').
> `$(".someClass").eq(0)` also grabs the first underlying element, but instead
> of returning it directly, it wraps that element in a new jQuery object, and
> returns that new jQuery object. It does this so that it's possible to call
> jQuery methods on that element (not possible in the first case.)
