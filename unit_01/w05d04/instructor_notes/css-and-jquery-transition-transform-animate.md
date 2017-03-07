# CSS Transitions + Animations & jQuery Animations

## Learning Objectives

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

<br />

## Hook

[The Five Obstructions](http://www.imdb.com/title/tt0354575/) is one of my favorite films.  Jorgan Leth created a short in 1967, entitled _The Perfect Human_.  

Lars Von Trier (a Danish director most known for _Dancer in the Dark_ and _Dogville_) saw this short and thought that it was so perfect that he wondered whether Leth could re-create it.  

Von Trier is part of a wave of directors that thought that in order to create new pieces of art, they should place restrictions on each other.  Von Trier 'dares' Jordan Leth to re-create his famous short, with restrictions that are decided upon by Von Trier.  One of the restrictions is to create an animated short.

This is it: [The Five Obstructions Animation](https://www.youtube.com/watch?v=9-Y1PhOt6sM).

<br />

## Intro

Today we'll be covering 3 major topics:

* CSS Transitions
* CSS Transforms (2D)
* CSS Animations
* Vendor Prefixes

**Transitions** let us tell the browser how to smoothly change a property over time. For example, if the height of an element changes (due to a :hover selector), we can tell the browser to change the height gradually over 1 second.

**Transforms** are a set of CSS properties that take an element and transform it's shape, e.g. rotating it, scaling it, skewing it, etc.

**Animations** are similar to transitions, in that they let us change properties over time, but they give us more control over how those changes happen.

For example, we have more control over how the animation repeats, we can change between multiple values at once, etc.

**Vendor Prefixes** - A prefix provides browser support for features that are not fully supported.  If you are using chrome, you won't need to add a prefix to any of the properties used this lesson, but in general, it's a good idea to check **Can I Use** (http://www.caniuse.com) to see if you need to use prefixes to support most users/browsers. For CSS Animations, you should use prefixes to ensure support for Safari, IE, and other browsers.

**Vendor Prefixes**
    <br />
    -webkit- // Chrome/Safari
    <br />
    -moz- // Firefox
    <br />
    -o- // Opera
    <br />
    -ms // IE

The easiest way to do this is with **prefix free** (http://leaverou.github.io/prefixfree/).

---
<br />

<!-- ## Group Breakouts

Each group will have 20 minutes to prepare a short explanation / demo of their assigned topic. Your demos should take **no longer than 5 minutes**. Explore the next topic if you finish yours.

| Group | Topic                                              |
|-------|----------------------------------------------------|
| 1     | CSS Transforms (No animation)                      |
| 2     | CSS Transitions                                    |
| 3     | CSS Animations (basic keyframes and syntax)        |
| 4     | CSS Animations (timing functions)                  |
| 5     | CSS Animations (iterations / repeats / direction ) |

<br /> -->

## Traditional Animation vs Computer Animation

1. In traditional (hand-drawn) animations, there were two kinds of animators
	- Keyframe artist
		- Draws the main frames for the animation
	- Inbetweener  (tweener)
		- Fills in the frames between each keyframe, so it looks fluid
1. In computer animation, the developer acts as the keyframe artist, and the computer is the 'tweener'.

<br />

![](http://www.ubelly.com/wp-content/uploads/2012/01/keyframes.png)

<br />

## Create Basic Transitions in CSS

Transitions are a way to introduce **timing** to a given effect. In order to use any effect, you first need to define an initial state and a final state for the element that you would like to change.

<!-- ```css
a {
  	padding: 2em; /* initial state */
  	display: inline-block;
  	border: 1px solid black;
  	position: relative;
  	left: 0;
  	background: yellow;
}
a:hover {
	background: green; /* final state */
}
``` -->
```css
.square {
    width: 200px;
    height: 200px;
    background: crimson; /* initial state */
}

.square:hover {
    background: darkBlue; /* final state */
}
```

Next, add a transition property:

- [transition-property](https://www.w3schools.com/cssref/css3_pr_transition-property.asp)
    - `transition-property: background, left, top, height;`
    - the name or names of the CSS properties that you would like to animate
    - separate multiple properties by a comma
- [transition-duration](https://www.w3schools.com/cssref/css3_pr_transition-duration.asp)
    - `transition-duration: 0.5s;`
    - specifies the duration of an animation
    - can be specified in seconds or milliseconds(1000ms to 1s)
- [transition-timing-function](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp)
    - `transition-timing-function: ease;`
    - different options to explore the speed of the animation
    	- **ease**
            - start slow
            - finish slow
            - smoother than ease-in-out
    	- **linear**
            - applies the same speed from start to finish
    	- **ease-in**
            - start slow
            - finish fast
    	- **ease-out**
            - start fast
            - finish slow
    	- **ease-in-out**
            - start slow
            - speed up in the middle
            - finish slow
    	- **cubic-bezier(n,n,n,n)**
            - allows you to add variations to control the animation
            - it takes 4 parameters to indicate the curve on the x and y-axis, and 2 to indicate the handles
                - values range from 0 to 1
            - [Cubic Bezier Playground](http://cubic-bezier.com/#.17,.67,.83,.67)
                - use to check your custom function against other timing functions
- [transition-delay](https://www.w3schools.com/cssref/css3_pr_transition-delay.asp)
    - `transition-delay: 1s;`
    - allows you to delay the start of the animation

```css
.square {
    width: 200px;
    height: 200px;
    background: crimson; /* initial state */
    transition-property: background;
    transition-duration: 5s; /* 1s is the default */
    transition-delay: 1s;
}

.square:hover {
    background: darkBlue; /* final state */
}
```

**Transition Shorthand**- allows your code to be shorter and more maintainable, especially if you are using vendor prefixes.

- `transition: <transition-property> <transition-duration> <timing-function> <transition-delay>`
    - Example: `transition: transform 1s ease-in-out;` 

```css
.square {
    width: 200px;
    height: 200px;
    background: crimson; /* initial state */
    transition: background-color 5s 1s; 
}

.square:hover {
    background: darkBlue; /* final state */
}
```

![](http://i.imgur.com/ylb6WX9.gif)

1. Create a 100px by 100px square box that has a background color of tomato.
1. Write a CSS rule that will transition your div from this initial state:

    ```css
    div {
        background: tomato;
        width: 100px;
        height: 100px;
}
```

1. Add to this final state... Write a CSS rule that changes the background color to turquoise when you hover over the element with your mouse

    ```css
    div:hover {
        background: turquoise;
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

- There are many timing functions. Check them out at http://easings.net

<br />

---

<br />

## CSS Transform

Transform allows elements styled in CSS to be transformed in a two-dimensional space. 

The [transform](https://www.w3schools.com/cssref/css3_pr_transform.asp) property allows you to change the shape, size and position.  It has the following options...

### 2D Transform Methods 

1. [rotate(angle)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_rotate)
    - `transform: rotate(10deg);`
    - rotate an element clockwise or counter-clockwise via degrees(deg)
    - will rotate clockwise by default
    - if you use a negative value, it will rotate counter-clockwise
1. [scale(x, y)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_scale)
    - `transform: scale(1.1);`
    - allows you to increase/decrease the size of an element
    - takes 2 parameters
        - 1st parameter(width)
        - 2nd parameter(height)
1. [translate(x, y)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_translate)
    - `transform: translateX(10px);`
    - move an element from its **current position** on the x and y-axis
    - takes 2 parameters
        - 1st parameter- x-axis
            - will move horizontally
            - if you use a negative value, it will move to the right
        - 2nd parameter- y-axis
            - will move vertically
        - optional: use `translateX()` or `translateY()`
1. [skew(x-angle, y-angle)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_skew)
    - `transform: skewX(45deg);`
    - skew elements on the x and y-axis via degrees(deg)
    - takes 2 parameters
        - 1st parameter- x-axis
            - will skew to the left by default
            - if you use a negative value, it will skew to the right
        - 2nd parameter- y-axis
    - optional: 
        - [skewX(angle)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_skewx)
        - [skewY(angle)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_skewy)

Syntax:
 
- `transform: method(parameter);`

```css
.square {
    width: 200px;
    height: 200px;
    background-color: crimson; /* initial state */
    transition: background-color 5s, transform 3s; 
}

.square:hover {
    width: 200px;
    height: 200px;
    background-color: darkBlue; /* final state */
    transform: skewX(20deg);
}
```

- You can check out the `transform` options in the Dev Tools using autocomplete. 

**Transform Shorthand**:

1. `transform: scale(2) skewX(20deg) rotate(4deg);`

<br />

### 3D Space

3D transformations extends CSS transform to allow elements in CSS to be transformed in three-dimensional space.  You use the same values for the x and y-axis (horizontally and vertically).  The z-axis allows us to transform front and back/extend out of the screen or 2D pane.

#### New CSS Properties

1. [perspective](https://www.w3schools.com/cssref/css3_pr_perspective.asp)
    - distance between the viewer and the object
    - if you ever took an art class, you probably discussed perspective
        - **vanishing point**- when all points converge on a single point
            - creates depth/ a 3D effect
    - use in order to transform in 3D space
    - default is (1000px)
    - a higher value will feel far away (1500px)
    - a lower value (400px) will make you feel closer to the object
    - **must be applied to the parent element**
    <br />
    ![Vanishing point](http://imgs.abduzeedo.com/files/articles/vanishing/vanishing-12.jpg)
1. [perspective-origin](https://www.w3schools.com/cssref/css3_pr_perspective-origin.asp)
    - defines where the element exists on the x and y-axis
    - default 50% 50%, which represents the x and y-axis
1. [transform-origin](https://www.w3schools.com/cssref/css3_pr_transform-origin.asp)
    - allows you to change the original x and y-positions
1. [transform-style](https://www.w3schools.com/cssref/css3_pr_transform-style.asp)
    - allows child elements to preserve 3D transformations
    - flat (default)
    - `transform-style: preserve-3d;` // will keep that style for the child elements
1. [backface-visibility](https://www.w3schools.com/cssref/css3_pr_backface-visibility.asp)
    - defines whether an element should be visible when it is facing the screen

#### 3D Transform Methods

1. [rotateX(angle)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_rotatex) // transform clockwise
1. [rotateY(angle)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_rotatey) // transform counterclockwise
1. [rotateZ(angle)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_rotatez) // transform front and back
1. rotate 3D shorthand: `rotate3d(x-axis, y-axis, z-axis, angle deg);`
    `rotate3d(1, 1, 1, 360deg);`
1. [translateX(x)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_translatex) // transform horizontally
1. [translateY(y)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_translatey) // transform vertically
1. `translateZ(z);` // transform front and back
1. translate 3D shorthand: `translate3d(x-axis, y-axis, z-axis);`
    `translate3d(50px, 50px, 75px);`
1. [scaleX(x)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_scalex) // transform  width
1. [scaleY(y)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_scaley) // transform height
1. `scaleZ(z);` // transform front and back
1. scale 3D shorthand: `scalee3d(width, height, z-axis);`
    `translate3d(2, 2, 2);`
    3D- allows you to transform on the size and not on the movement

If you know the math, you can write your own transformation matrix

1. [matrix(n,n,n,n,n,n)](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_matrix)
1. matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
1. Example of a matrix: http://periodic.famo.us/


#### Example of `translateX()`

```css
.square {
  ...
  transform: translateX(0); /* start state */
  transition-property: background-color, transform; /* make sure to add transform here */    
}

.square:hover {
    ...
    transform: translateX(100px); /* end state */
}    
```

![](http://i.imgur.com/ylb6WX9.gif)

1. Rotate your box 45 degrees
1. Translate it along the X axis by 200px
1. Translate it along the Y axis by 200px
2. Try `transform: translate(200px, 200px);`
1. Scale the div so it is twice as big
2. Skew the div by 10 degrees
3. You can also combine multiple values: `transform: translateX(200px) skew(30deg) scale(3);`
4. `transform: perspective(35px) translate3d(20px, 30px, 15px);`
    - x, y, z axis
    - perspective is distance from the user 
    - when perspective === z-axis you're behind the element

<br />

## Transform is Better than Position

<!--Take 5 minutes to read this article by Paul Irish on [Why Moving Elements With Translate() Is Better Than Pos:abs Top/left](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/).
-->
Why don't we just use something like `position: relative` and `left: 200px`?


Transforms are better for animation for two reasons:

1. When elements are changed in the DOM, the browser checks to see if other elements are being pushed around.  When using transforms, the browser doesn't do this which makes it faster.
    * Add `display: inline-block` to your CSS rule
    * Add some lorem ipsum 
 
1. If you're doing a 3D transform, the computer's Graphics Processing Unit (GPU) is engaged, which is really fast
    - http://codepen.io/paulirish/pen/nkwKs (uses top/left position)
	    - Ultimately, the element has to re-calculate every time the computer 
	    moves based on what is around it.
    - http://codepen.io/paulirish/pen/LsxyF (uses translate)
		- Doesn't worry about what is around it.

<br />

## Complex Animations with Multiple States

Transitions are great for going from one state to another, but sometimes you need more than an initial and a final state.  [Keyframes](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp) can be used to add color changes based on the percentage of visibility. A keyframe is similar to a function declaration, in that it starts with **@keyframes**, followed by the animation name, followed by curly braces.  Inside of the curly braces, you add the keyframes-selector/percentage followed by a normal css rule.

![](http://i.imgur.com/ylb6WX9.gif)

1. Define a named animation with a set of keyframes. These are similar to the traditional animation "tweeners" that were mentioned earlier.
	
    ```css
    @keyframes example {
        from { background-color: red; }
        to   { background-color: yellow; }
    }
    ```
<br />

	```css
	@keyframes example {
	    0%   { background-color: red; left: 0px; top: 0px; }
	    25%  { background-color: yellow; left: 200px; top: 0px; }
	    50%  { background-color: blue; left: 200px; top: 200px; }
	    75%  { background-color: green; left: 0px; top: 200px; }
	    100% { background-color: red; left:0px; top: 0px; }
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

1. Additional properties:
    - [animation-duration](https://www.w3schools.com/cssref/css3_pr_animation-duration.asp)
        - specifies how many seconds or milliseconds an animation takes to complete one cycle
        - mandatory in order for the animation to happen
        - the default is 0
	- [animation-timing-function](https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp)
        - defines the speed curve of the animation
        - linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(n, n, n, n)
	- [animation-iteration-count](https://www.w3schools.com/cssref/css3_pr_animation-iteration-count.asp) (can be set to infinite)
        - specifies the number of times an animation should run
	- [animation-direction](https://www.w3schools.com/cssref/css3_pr_animation-direction.asp)
        - specifies whether an animation should play in reverse direction or alternate cycles
		- reverse
		- alternate
	- [animation-delay](https://www.w3schools.com/cssref/css3_pr_animation-delay.asp)
        - specifies a delay for the start of an animation
	- [animation-play-state](https://www.w3schools.com/cssref/css3_pr_animation-play-state.asp)
        - specifies whether the animation is running or paused
		- paused
		- running
    - [animation-fill-mode](https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.asp)
        - specifies a style for the element when the animation is not playing (when it is finished, or when it has a delay)

**Animation Shorthand**

`animation: <animation-name> <animation-duration> <animation-timing-function> <animation-delay>
        <animation-iteration-count> <animation-direction>;`

[Animation Example](http://codepen.io/marenwoodruff/pen/EWKMKJ?editors=1100)

![](http://i.imgur.com/ylb6WX9.gif)

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
    15% {
        background-color: orange;
        left: 400px; 
        top: 400px;
    }
```

<br />

## 3rd Party CSS Libraries

There are a lot of pre-built CSS libraries out there that are easy to include in your app. Here's an example: https://www.sitepoint.com/top-9-animation-libraries-use-2016/

- [animate.css](https://daneden.github.io/animate.css/)
- [greensock.com](https://greensock.com/) (js - Koty Recommends!)
- [jQueryUI](https://jqueryui.com/) (js)
- [Angular Animate](https://docs.angularjs.org/api/ngAnimate/service/$animateCss) (js)

<br />

## Using jQuery for Animations

CSS Animations are easy and mostly compatible.  They are often a good choice
for basic animation needs. For anything more complex, such as animation that
depends on user input, you will need to use Javascript. There are good libraries for animation (see above). 

![](http://i.imgur.com/ylb6WX9.gif)

Take 5 minutes to read through these two links:
 
- http://www.w3schools.com/jquery/eff_animate.asp
- https://www.sitepoint.com/guide-jquery-animate-method

<br />

jQuery can be useful for animation because you can pass in a callback function and potentially chain methods together.

<br />

### `fadeIn()`

jQuery has some simple animation methods like [fadeIn()](https://www.w3schools.com/jquery/eff_fadein.asp) for example. The fadeIn() method gradually changes the opacity, for selected elements, from hidden to visible (fading effect).

**Syntax**
<br />
`$(selector).fadeIn(speed,easing,callback);`
- **speed**- specifies the speed of the fading effect
    - milliseconds
    - slow
    - fast
- **easing**- specifies the speed of the element in different points of the animation. Default value is "swing"
    - swing - moves slower at the beginning/end, but faster in the middle
    - linear - moves in a constant speed
- **callback**- a function to be executed after the fadeIn() method is completed

Let's try this in Codepen.io (make sure to include the jQuery library under Settings -> Quick Add).
<br />

1. html:

    ```html
    <div id="box1">BOX 1</div>
```
2. css:

    ```css
    #box1 {
		height: 100px;
		width: 100px;
		padding: 10px;
		position: relative;
		background-color: aqua;
    }
```
1. jQuery:

    ```js
    $('#box1').fadeIn(3000).fadeOut(10000);
```
Here are some [common jQuery effects](http://www.w3schools.com/jquery/jquery_ref_effects.asp) you can use.

<br />

### `animate()`
 You can accomplish a lot of the CSS animation code from above using 
[animate()](https://www.w3schools.com/jquery/jquery_animate.asp). The jQuery animate() method is used to create custom animations.

**Syntax**
<rb />
`$(selector).animate({params},speed,callback);`
- **params**- required params parameter defines the CSS properties to be animated
- **speed**- speed parameter specifies the duration of the effect. 
    - slow
    - fast
    - milliseconds
- **callback parameter**- a function to be executed after the animation completes

Here is an example:
 
1. html:

    ```html
    <div class="container">
		<div id="box1">BOX 1</div>
		<div id="box2">BOX 2</div>
	</div>
	<div class="controlButtons">
		<button type="button">Toggle</button>
	</div>
```
2. css:

    ```css
    #box2 {
		height: 100px;
		width: 100px;
		padding: 10px;
		position: relative;
		background-color: mediumVioletRed;
    }
```

1. jQuery:

    ```js
    $("button").click(function(){
        $("#box2").animate({
            height: 'toggle';
        }, 4000);
});
```
<br />

[animate() Example](http://codepen.io/marenwoodruff/pen/mWPowR)

<br />

## Lab

Look at these links and complete as many of these exercises as you can:

* [CSS Accordion](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/tree/master/unit_01/w05d04/student_labs/css-accordion)
* [DolphinCat!](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/tree/master/unit_01/w05d04/student_labs/dolphin-cat-css-animations)
* [CSS Airbnb](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/tree/master/unit_01/w05d04/student_labs/css-airbnb)
* [Hyrule Potion Shop](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/tree/master/unit_01/w05d04/student_labs/hyrule_potion_shop)

<br />

## Bonus

Look at the following examples, try to re-create them from scratch using as little starter code as possible.

* [Animated Buttons](http://tympanus.net/Tutorials/AnimatedButtons/index.html) (Transitions and Animations)
* [Image Hover Effects](http://tympanus.net/Tutorials/OriginalHoverEffects/) (Transitions and Animations)
* [Solar System in CSS](http://neography.com/journal/our-solar-system-in-css3/) (Transitions and Animations)

<br />

## Resources
- [The Perfect Human](https://www.youtube.com/watch?v=W9kls6bMkRo)
- [Can I Use](http://www.caniuse.com)
- [CSS Transform- W3 Schools](https://www.w3schools.com/cssref/css3_pr_transform.asp)
- [CSS Tricks- Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Keyframe Animation](https://css-tricks.com/snippets/css/keyframe-animation-syntax/)
- [Prefix Free](http://leaverou.github.io/prefixfree/)
- [Paul Irish article- Why Moving Elements With Translate() Is Better Than Pos:abs Top/left](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/)
- [Paul Irish video- 2D transform's translate() vs absolute positioning: Performance evaluation with Chrome DevTools](https://youtu.be/NZelrwd_iRs)
- [Chris Coyier- Animation Performance](https://css-tricks.com/tale-of-animation-performance/)

<br />

### Codepens
- [In class example](https://codepen.io/marenwoodruff/pen/qrZgxL)
- [You do example- tomato box](http://codepen.io/marenwoodruff/pen/oZxGeV?editors=1100)
- [Keyframe example](http://codepen.io/marenwoodruff/pen/EWKMKJ?editors=1100)
- [jQuery example](http://codepen.io/marenwoodruff/pen/mWPowR)

<!--/* @keyframes example {
    0%   {background-color:red; left:0px; top:0px;}
    25%  {background-color:yellow; left:200px; top:0px;}
    50%  {background-color:blue; left:200px; top:200px;}
    75%  {background-color:green; left:0px; top:200px;}
    100% {background-color:red; left:0px; top:0px;}
} */
/* div {
    width: 100px;
    height: 100px;
    color: white;
} */
/* #box1 {
  background-color: red;
  position: relative;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
} */-->