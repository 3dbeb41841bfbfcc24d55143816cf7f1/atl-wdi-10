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

## Intro

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
for this lesson, but in general, it's a good idea to check **Can I Use** (http://www.caniuse.com)
to see if you need to use prefixes to support most users. For CSS Animations,
you should use prefixes to ensure support for Safari, IE, and other browsers.

The easiest way to do this is with **prefix free** (http://leaverou.github.io/prefixfree/).


<br>

## Group Breakouts (50 minutes)

Each group will have 20 minutes to prepare a short explanation / demo of their assigned topic. Your demos should take **no longer than 5 minutes**. Explore the next topic if you finish yours.

| Group | Topic                                              |
|-------|----------------------------------------------------|
| 1     | CSS Transforms (No animation)                      |
| 2     | CSS Transitions                                    |
| 3     | CSS Animations (basic keyframes and syntax)        |
| 4     | CSS Animations (timing functions)                  |
| 5     | CSS Animations (iterations / repeats / direction ) |

<br>

## CSS Transform

You can check out the `transform` options in Atom (or the Dev Tools) using autocomplete. The `transform` property has the following values...

### Use the CSS3 transform property to visually manipulate DOM elements in a 2D space

1. transform:rotate(10deg);
1. transform:scale(1.1);
1. transform:translateX(10px);
1. transform:skewX(45deg);

You can perform multiple transforms in one statement

1. transform: scale(2) skewY(0.3) rotate(4deg);

<br>

### Use the CSS3 transform property to visually manipulate DOM elements in a 3D space

The Z axis extends out of the screen

1. rotateX();
1. rotateY();
1. rotateZ();
1. translateX();
1. translateY();
1. translateZ();
1. scaleX();
1. scaleY();
1. scaleZ();

If you know the math, you can write your own transformation matrix

1. matrix(n,n,n,n,n,n)
1. matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
1. http://periodic.famo.us/

<br>


![](http://i.imgur.com/ylb6WX9.gif)


1. Create a 100px by 100px square box that has a background color of red
1. Rotate it 45 degrees
1. Translate it along the X axis by 200px
1. Translate it along the Y axis by 200px
2. Try `transform: translate(200px, 200px)`
1. Scale the div so it is twice as big
2. Skew the div by 10 degrees
3. You can also combine multiple values: `transform: translateX(200px) skew(30deg) scale(3)`
4. `transform: perspective(35px) translate3d(20px, 30px, 15px)`
    - x, y, z axis
    - perspective is distance from the user 
    - when perspective == z-axis you're behind the element

<br>



## Explain why using transform for animation is better than using position

Why don't we just use something like `position: relative` and `left: 200px`?


Transforms are better for animation for two reasons

1. When elements are changed in the DOM, the browser checks to see if other elements are being pushed around.  When using transforms, the browser doesn't do this which makes it faster.
    * Add `display: inline-block` to your CSS rule
    * Add some lorem ipsum 
   
1. If you're doing a 3D transform, the computer's GPU is engaged, which is really fast
    - http://codepen.io/paulirish/pen/nkwKs (uses top/left position)
    - http://codepen.io/paulirish/pen/LsxyF (uses translate)

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

## Create basic transitions between a start and end state in CSS

Transitions are a way to introduce timing to a given effect. To start, define a start state and an end state

```css
a {
  	padding:2em; /* start state */
  	display:inline-block;
  	border:1px solid black;
  	position:relative;
  	left:0;
  	background:yellow;
}
a:hover {
	background:green; /* end state */
}
```

Next, add a transition property (there are more):

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
    - Example: `transition: transform 1s ease-in-out;` 

<br>

![](http://i.imgur.com/ylb6WX9.gif)


1. Write a CSS rule that will transition your div from this start state:

    ```css
    div {
        background:red;
        width:100px;
        height:100px;
}
```

1. To this end state... Write a CSS rule that changes the background color to blue when you hover over the element with your mouse

    ```css
    div:hover{
      background: blue;
    }
```

1. Let's make that transition a little smoother:

    ```css
  div {
        ...  
        transition-duration: 3s;
        transition-property: background; /* specify which property you want to transition */
        transition-timing-function: linear;
  }
    ```

    > There are many timing functions. Check out http://easings.net
    
2. Let's also add a `translateX()`

    ```css
    div {
      ...
      transition-property: background, transform; /* make sure to add transform here */
      transform: translateX(0); /* start state */    
    }
    
    div:hover {
        ...
        transform: translateX(100px); /* end state */
    }    
    ```

<br>

## Write complex animations with multiple states

Transitions are great for going from one state to another, but sometimes you need more than a start and end state.

<br>

![](http://i.imgur.com/ylb6WX9.gif)

1. Define a named animation with a set of keyframes. These are similar to the traditional animation "tweeners" that were mentioned earlier.
	
	```css
	@keyframes example {
	    0%   {background-color:red; left:0px; top:0px;}
	    25%  {background-color:yellow; left:200px; top:0px;}
	    50%  {background-color:blue; left:200px; top:200px;}
	    75%  {background-color:green; left:0px; top:200px;}
	    100% {background-color:red; left:0px; top:0px;}
	}
	```
    > Note, remember that for production, `translate` will be faster than `left`, `top`, etc.


1. Assign the animation to a rule and give it a duration
	
	```css
	div {
	    width: 100px;
	    height: 100px;
	    background-color: red;
	    position: relative;
	    animation-name: example;
	    animation-duration: 4s;
	    animation-timing-function: linear;
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

1. Try adding the following properties

    ```css
    div {
        ...
        animation-iteration-count: inifinite;
        animation-direction: alternate;    
    }
    ```
    
1. Try adding another keyframe

    ```css
15%  {background-color: orange; left:400px; top:400px;}
```

<br>


## 3rd Party CSS Libraries

There are a lot of pre-built CSS libraries out there that are easy to include in your app. Here's a sample: https://www.sitepoint.com/top-9-animation-libraries-use-2016/

- animate.css
- greensock.com (js - Koty Recommends!)
- jQueryUI (js)
- Angular Animate (js)

<br>

## Using jQuery for animations

CSS Animations are easy and mostly compatible, so they're often a good choice
for basic animation needs. For anything more complex, such as animation that
depends on user input, you'll need to use Javascript. There are good libraries
for animation (see above). 

<br>

![](http://i.imgur.com/ylb6WX9.gif)

Take 5 minutes and read through these two links:
 
- http://www.w3schools.com/jquery/eff_animate.asp
- https://www.sitepoint.com/guide-jquery-animate-method

<br>

jQuery can be useful for animations because you can pass in a callback function and potentially chain methods together.

### `fadeIn()`

jQuery has some simple animations methods like `fadeIn()` for example. Let's try this in Codepen.io (make sure to include the jQuery library under Settings -> Quick Add).

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
$('#box1').fadeIn(3000).fadeOut(4000);
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

Look in today's student labs folder and complete as many of these exercises as you can:

* [CSS Accordion](https://github.com/ga-dc/css-accordion)
* [DolphinCat!](https://github.com/ga-dc/dolphin-cat-css-animations)

<br>

## Bonuses

Look at the following examples, try to re-create them from scratch using as little
starter code as possible.

* [Animated Buttons](http://tympanus.net/Tutorials/AnimatedButtons/index.html) (Transitions and Animations)
* [Image Hover Effects](http://tympanus.net/Tutorials/OriginalHoverEffects/) (Transitions and Animations)
* [Solar System in CSS](http://neography.com/journal/our-solar-system-in-css3/) (Transitions and Animations)
























