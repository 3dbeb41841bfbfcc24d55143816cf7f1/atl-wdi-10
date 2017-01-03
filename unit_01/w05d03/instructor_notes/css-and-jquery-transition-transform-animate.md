# CSS Transitions + Animations & jQuery Animations

- Describe the importance of prefixing CSS properties
- Describe what a CSS transform is, and give some examples
- Describe what it means to transition or animate in CSS
- List the types of properties that can / can't be animated
- Use the `transition` declaration to change element properties on events
- Describe the purpose and syntax of css `keyframes`
- List and describe the purpose of the `animation` properties
- Compare & contrast CSS Transitions and Animations
- Create complex animations using CSS animation properties
- Compare & contrast using CSS and JS for animations

<br>

## Intro (10 minutes)

Today we'll be covering 3 major topics, each somewhat related:

* CSS Transforms (2D)
* CSS Transitions
* CSS Animations
* Prefixing

**Transforms** are a set of CSS properties that take a an element and transform
it's shape, e.g. rotating it, scaling it, skewing it, etc.

**Transitions** let us tell the browser how to change a property over time. For
example, if the height of an element changes (due to a :hover selector, for
example), we can tell the browser to change the height gradually over 1 second.

**Animations** are similar to transitions, in that they let us have properties
change over time, but they give us more control over how those changes happen.
For example, we have more control over how the animation repeats, change between
multiple values at once, etc.

**Prefixing** - If you're using chrome, you won't need to prefix any properties
for this lesson, but in general, it's a good idea to check [Can I Use](caniuse.com)
to see if you need to use prefixes to support most users. For CSS Animations,
you should use prefixes to ensure support for Safari, IE, and other browsers.

The easiest way to do this is with [prefix free](http://leaverou.github.io/prefixfree/).


<br>

## Group Breakouts (50 minutes)

Breakout into groups of 4... each group will have 20 minutes to prepare a short
explanation / demo of their assigned topic. Your demos should take **no longer than
5 minutes**.

| Group | Topic                                              |
|-------|----------------------------------------------------|
| 1     | CSS Transforms (No animation)                      |
| 2     | CSS Transitions                                    |
| 3     | CSS Animations (basic keyframes and syntax)        |
| 4     | CSS Animations (timing functions)                  |
| 5     | CSS Animations (iterations / repeats / direction ) |

<br>

## Explain the roles in traditional animation and how they apply to computer animation

1. In traditional (hand-drawn) animation, there were two kinds of animators
	- Keyframe artist
		- Draws the main frames for the animation
	- Inbetweener  (tweener)
		- Fills in the frames between each keyframe so it looks fluid
1. In computer animation, we act as the keyframe artist, and the computer is the tweener.

<br>

![](http://www.ubelly.com/wp-content/uploads/2012/01/keyframes.png)

<br>

<details>
<summary>
**Create basic transitions between a start and end state in CSS**
</summary>

Define a start state and an end state

```css
a {
	background:yellow; /* start state */
}
a:hover {
	background:green; /* end state */
}
```

Three main properties:

- `transition-property: background, left, top, height;`
- `transition-duration: 0.5s;`
- `transition-timing-function: ease;`
	- ease
	- linear
	- ease-in
	- ease-out
	- ease-in-out
	- cubic-bezier(n,n,n,n)
- `transition-delay: 1s;`

Shorthand

- `transition: <property> <duration> <timing-function> <delay>`


<br>

![](http://i.imgur.com/ylb6WX9.gif)


1. Create a `p` tag that has a yellow background-color
1. Write a CSS rule that changes the background color to blue when you hover over the element with your mouse
1. Create a transition so that this happens over 2 seconds
</details>

<br>

<details>
<summary>**Write complex animations with multiple states**</summary>

Transitions are great for going from one state to another, but sometimes you need more than a start and end state.  To do this, there are two steps

1. Create a named animation with a set of keyframes.
	
	```css
	@keyframes example {
	    0%   {background-color:red; left:0px; top:0px;}
	    25%  {background-color:yellow; left:200px; top:0px;}
	    50%  {background-color:blue; left:200px; top:200px;}
	    75%  {background-color:green; left:0px; top:200px;}
	    100% {background-color:red; left:0px; top:0px;}
	}
	```

1. Assign the animation to a rule and give it a duration
	
	```css
	div {
	    width: 100px;
	    height: 100px;
	    background-color: red;
	    position: relative;
	    animation-name: example;
	    animation-duration: 4s;
	}
	```
1. Additional properties
	- animation-timing-function
	- animation-iteration-count (can be set to infinite)
	- animation-direction
		- reverse
		- alternate
	- animation-delay
	- animation-play-state
		- paused
		- running

<br>

![](http://i.imgur.com/ylb6WX9.gif)

1. Create a box with a background color
1. Over the course of 4 seconds, have it do the following:
	1. move right and change background color
	1. move down and change background color
	1. move left and change background color
	1. move up and change background color
1. Have this animation loop indefinitely and alternate direction


</details>
<br>

## Using jQuery for animations


![](http://i.imgur.com/ylb6WX9.gif)

Take 5 minutes and read through these two links:
 
- [W3Schools jQuery .animate()](http://www.w3schools.com/jquery/eff_animate.asp) 
- https://www.sitepoint.com/guide-jquery-animate-method/

<br>

### `fadeIn()`

jQuery has some simple animations methods like `fadeIn()` for example. Let's try this in Codepen.io (make sure to add jQuery under settings.

1. html:

    ```html
<div id="box1">BOX 1</div>
```

2. css:

    ```css
    #box1 {
        background-color: blue;
        display: none;
    }
```

1. javascript:

    ```js
$('#box1').fadeIn(3000);
```
Here are some [common jQuery effects](http://www.w3schools.com/jquery/jquery_ref_effects.asp) you can use.

<br>


### `animate()`
 You can accomplish a lot of the CSS animation code from above using `animate()`. Here's an example:
 
1. html:

    ```html
<div id="box2">BOX 2</div>
<button type="button">Toggle</button>
```
2. css:

    ```css
    #box2 {
        position:relative;
        background: green;
    }
```

1. javascript:

    ```js
$("button").click(function(){
      $("#box2").animate({
        height: 'toggle'
    }, 4000);
});
```

 

<br>



## Lab

Work with a partner to implement as many of these exercises as you can:

* [CSS Accordion](https://github.com/ga-dc/css-accordion)
* [DolphinCat!](https://github.com/ga-dc/dolphin-cat-css-animations)
* [Clock](https://github.com/adambray/clock-bro)

### Bonuses

Look at the following examples, try to re-create them from scratch using as little
starter code as possible.

* [Animated Buttons](http://tympanus.net/Tutorials/AnimatedButtons/index.html) (Transitions and Animations)
* [Image Hover Effects](http://tympanus.net/Tutorials/OriginalHoverEffects/) (Transitions and Animations)
* [Solar System in CSS](http://neography.com/journal/our-solar-system-in-css3/) (Transitions and Animations)

## Questions / Recap

### CSS / JS Animations

CSS Animations are easy and mostly compatible, so they're often a good choice
for basic animation needs. For anything more complex, such as animation that
depends on user input, you'll need to use Javascript. There are good libraries
for animation, including jQuery UI, and [GSAP (Greensock Animation Platform)](http://greensock.com/gsap)


















