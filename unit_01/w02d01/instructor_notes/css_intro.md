[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# CSS - An Introduction

## Lesson Objectives

- Define CSS and describe its use
- How to add CSS rules to your app
- Diagram the structure of CSS
- Demonstrate how to apply rules to a specific tag
- List some common element properties that can be styled
- Describe ids and classes. Explain when should we use which
- Describe "The Cascade"
- Describe how to combine various selectors
- Describe Specificity
- Conclusion

<br>

## Hook

### Fist to Five
    - 1 - Iffy on CSS
    - 5 - Rockstar 

### Why CSS?
I have been living in my apartment for a little over a year.  I always thought that my stay in Atlanta was not long-term, and therefore, I never decorated, I never put anything on our walls.  However, when I found out about this GA gig, I decided that it was time to change that fact.  We painted our living room wall turqoise.  I bought/put up art and pictures.  I added a wall hanging above our bed.  And suddenly, I started wanting to spend more time in my place.  It felt more like home, and therefore, made Atlanta feel more like home.  

CSS can do the same for your website.  It can get your end user to come back, or get you funding for your site.  It can make the difference between 

this: **Blinkee.com**

A site that sells itmes that blink or glow in the dark

<br />

![blinkee.com a site that sells items that blink or glow in the dark](https://i.imgur.com/scpHM8k.png)

<br />

and this: **Spotify Rewind**

They received a Webby Award for the best aesthetic design

<br />

![Webby Award for best aesthetic design- spotify rewind](https://i.imgur.com/U4RkgTX.png)

- [CSS3 is pretty powerful now-a-days and can do cool stuff](http://www.cssdesignawards.com/articles/10-cool-css-js-demos-tuts-to-apply-and-use/67/)
- [CSS3D + HTML5](http://codepen.io/ge1doot/pen/GgOYoy)

<br />

## YOU DO - Look up these Questions with your buddy (5m)

- Describe 3 ways to add CSS to an app. Which is preferred?
- Describe the 3 components of a CSS rule.
- Describe `id` and `class` and use cases for each.
- Describe 3 ways to combine CSS selctors.

<br />

## Define CSS

**QUESTION**: Can anyone define CSS for us?

As I stated earlier, HTML gives our site structure, but it doesn't do much in terms of how the site looks.  This is where CSS comes in. 

#### CSS stands for:

- **Cascading** - we will define this shortly
- **Style** - making things elegant
- **Sheets** - it is a sheet of text, not a program that we write

<br />

## How to add CSS to your app

**QUESTION**: What are 3 ways to add CSS to an app?

- **A separate CSS file** - This is the best practice. It allows multiple HTML pages to access a single file and share the same set of CSS rules. You'll add a link to the CSS file in the `head` of your HTML page.

```html
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="mystyle.css">
	</head>
	<body>
		<p>CSS is fun!</p>
	</body>	
</html>	
```


- **In the head of your document** with `<style></style>` tags - You can add CSS rules to your HTML by adding `style` tags to the `head` of your HTML page. These rules would only be accessible by that HTML page.

```html
<html>
  <head>
    <style>
		  p {
				color: red; // will change the text color to red
		  }
		</style>
  </head>
  <body>
  	<p>CSS is fun!</p>
  </body>	
</html>	
```  
	
- **Inline styling** - This is when you add CSS rules directly to the HTML element. You should never write CSS this way.  It makes it extremely difficult to debug.  And makes it difficult to keep your code dry.  

- The only use case is HTML emails. 

```html
<p style="color: red">CSS is fun!</p>
```

<br />

![](http://i.imgur.com/2BtC2Zx.gif)

What are 3 ways to add CSS rules to your page? Which is the best practice?

<br />

## The structure of CSS

A CSS file is composed of many rules.  Each rule governs the appearance of certain elements.  The generalized form looks like:

```css
selector {
	property: value; // also known as the declaration
	property: value;
	property: value;
}
```

Everything inside the curly braces is called the "declaration block"

- **The selector**- is the HTML element we would like to style
- **The declaration block**- surrounded by curly braces, the declaration block is filled with CSS rules you would like to apply
- **The declaraion**- includes the property name and a value, and ends with a semicolon 
 
<br />

## Apply rules to a specific tag

<details>
    <summary>In Slack, can someone create the CSS rule to give all my `p` tags a red Georgia font and a yellow background?</summary>
    
    If you wanted to style all the `<p>` tags of a page, you could style it by writing:

```css
p {
	color: red;
	font-family: Georgia;
	background: yellow;
}
```
</details>

<br />

![](http://i.imgur.com/2BtC2Zx.gif)

What are the 3 components of a CSS rule?

<br />


## List some common element properties

Here are some properties that you can set for an element

#### color
	
- names
	- turquoise, red, yellow, white, grey, black, green, orange, purple
	- http://www.crockford.com/wrrrld/color.html
- values
	- **hexidecimal number** 
		- #RRGGBB, (0-F), six places
		- `#40e0d0;` // turquoise
		- All values must be between 00 and FF.
		- if you have 6 of the same, or repeating values, you can shorten the hex to 3 
			- `#ffffff;` to `#fff;`
	- **rgb(red, green, blue)**
		- `rgb(64, 224, 208);` // turquoise
		- each parameter (red, green, and blue) defines the intensity of the color as an integer between 0 and 255.
	- **rgba(red, green, blue, alpha)** 
		- rgb also has an `a` that stands for **alpha**
		- The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque)
	- **hsl(hue, saturation %, lightness %)**
		- hsl(180, 59%, 80%); // turquoise
		- **Hue** is a degree on the color wheel (from 0 to 360) - 0 (or 360) is red, 120 is green, 240 is blue.
		- **Saturation** is a percentage value; 0% means a shade of gray and 100% is the full color.
		- **Lightness** is also a percentage; 0% is black, 100% is white.
	- **hsla(hue, saturation %, lightness %, alpha)**
		- hsl also has an `a` that stands for **alpha**
		- The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

- Use https://color.adobe.com to find color schemes
** It is recommended that you use no more than 5 colors on your site.  Too many colors can confuse the user.  So, be careful. **

#### background
- color
- image

#### font-size
- measured in px, ems, percents, rems
 
#### font-family
##### System fonts
	- **Single word fonts**
		- Arial, Courier, Times, etc
	- **Multi word fonts** 
		- must be placed in quotes
		- "Times New Roman", "Arial Black", "Lucinda Console"

- Use http://www.cssfontstack.com/ to see which fonts are available on different operating systems
- [Google fonts](https://fonts.google.com/)

##### Generic fonts
		- serif, sans-serif, cursive, fantasy, monospace.

- You can add several font families as a value
	- It starts with first and goes down the line until it finds one it has
	- And you should always add in a default font

#### font-weight
- normal, bold

#### text-align
- left, right, center

![Imgur](http://i.imgur.com/ylb6WX9.gif)


- Create an html page with a `p` tag and some placeholder text
2. Change its text color to a hex value that you choose from http://color.adobe.com
3. Give it a background color
4. Make the size of the text larger
5. Change its font family to a sans-serif font
6. Make the text bold
7. Center the text


<br>

## Describe ids and classes.

Sometimes just targeting an element is not enough.  We can target other attributes of elements in our selectors.

#### ids
##### In your html
`<div id="left-column"></div>`
##### In your stylesheet
`#left-column {
	text-align: center;
}`
- like a driver's license, each id on a page must be unique
- this is great for styles on a page that occur only once
	- e.g. left column, contact form, etc

#### classes
##### In your html
`<div class="large-module"></div>`
`.large-module {
	text-align: center;
}`
- like our current class, each class on a page does not have to be unique
- this is great for repeatable ideas
	- module
		- e.g. ad unit, comment block, etc
	- function
		- e.g. active, important,etc

<br />

![Imgur](http://i.imgur.com/ylb6WX9.gif)

- Add two more `p` tags.
2. Give one `p` tag an id
3. Give the other two `p` tags the same class
4. Use just the ids and classes to style the `p` tag with the id differently from the ones with a class

<br />

## Describe What "Cascade" Means

**Cascading Style Sheets** are set up so that you can have many properties affect the same element. Some of those properties may conflict with each other.

- The more specific the selector, the more precendence it will get
- `div.main p` will get more precendence than `p`
- Inline styles will take precendence before styles in the head tag, which will take 
precendence over styles in separate style sheets.
- Styles are read from top to bottom.  If there are styles defined lower in the stylesheet, the lower styles will take precendence. 

<br />

![Imgur](http://i.imgur.com/ylb6WX9.gif)


- Create a `p` tag within a `section` tag
2. Put some text in the `section` tag, but outside the `p` tag
3. Put some text in the `p` tag
4. Style just the `section` tag to give its text some color
5. Note that the `p` tag has also been affected

<br />

## Combining selectors 

Selectors can be more complex than just an element, id, or class.

- You can have one set of rules affect multiple sections by listing them
	- `p, #left-column {}`
		- will style all `<p>` tags and whichever tag has the id of "left-column"
1. You can combine attributes (i.e. tags, classes, ids) to narrow down how many elements are effected
	- `a.important {}`
		- styles all anchor tags that also have an "important" class
			- `<a class="important"></a>`
	- `#left-column.visible {}`
		- styles whichever tag that has the id of "left-column", but only when it also has a class of "visible"
			- styled: `<div id="left-column" class="visible"></div>`
			- not-styled: `<div id="left-column"></div>`
	- `.profile.minimized {}`
		- styles all tags that have two classes (separated by a space): "profile" and "minimized"
		- `<div class="profile minimized"></div>`
	- `div#left-column {}`
		- you could combine tags and ids, but there's only ever going to be one tag with an id of "left-column"
		- it's not like you would have a group of tags with the same id, from which you want to select only those that are `div` tags
		- it is more simple to just write `#left-column {}` and leave out the div
1. You can filter out tags based on their ancestors
	- `main p {}`
		- will style all `<p>` tags that are descendants of `<main>` tags

		<br />
		
		```html
		<main>
		  <p></p>
		</main>
		```
		```html
		<main>
		  <section>
		    <p></p>
		  </section>
		</main>
		```

<br />
		
![Imgur](http://i.imgur.com/ylb6WX9.gif)


- Create a rule for all `p` tags that also have a class of `active`
- For this rule, make the text bold
- Add an `active` class to a few of your p tags
- Create a rule for all `div` tags that also have a class of `active`
- For this rule, make the text very large
- Create a `div` tag with the class of `active`


<br />

## Describe Specificity

When an element is being styled by two rules at the same time, the browser calculates which rule is more specific and applies that rule.  To do this it looks at the selector.  If both rules have the same specificity, the last rule is applied.

#### Count the number of ids in each rule's selector.
- Apply whichever rule has more ids in its selector
- In theory there should only be one or zero ids in each selector
	- `#left-column #comments`
		- do not need to filter by ancestor
		- you can just write `#comments`

#### If the number of ids in each rule's selector is the same, count the number of classes
- Apply whichever rule has more classes in its selector

#### If the number of ids and classes in each rule's selector is the same, count the number of tags
- Apply whichever rule has more tags in its selector

#### Scoring
Specificity is actually quite easy to calculate (these numbers are for example only):

| selector | value |
|:-- |:----------- |
| **tag** | 1 point  |
| **class**  | 10 points   |
| **id** | 100 points  |
| **inline** | 1000 points   |

#### Specificity Ties
When two selectors have the same net specificity score, then the last one applied wins. Note that stylesheets are read from top to bottom, and their styles are applied in order… therefore, styles defined lower within your stylesheet will win.

For example, an inline CSS style rule would have priority over a rule in a CSS stylesheet.

<br>

### ![Imgur](http://i.imgur.com/2BtC2Zx.gif)

<details>
	<summary>What is the net specificity of this selector `div#features a.slide h3 span`</summary>
	<br>
	This selector is worth **114 points**.
</details>


What type of CSS rule would take precidence? 

1. seperate stylesheet 
2. inline
3. within `style` tags?




![Imgur](http://i.imgur.com/ylb6WX9.gif)

1. Create a rule for the tag with an id of `blue`
1. Set the text color for this rule to blue
1. On the next line of your css file, create a rule for all tags with classes of `red`
1. Set the text color for this rule to red
1. In your HTML, create a `span` tag with both an id of `blue` and a class of `red`
1. Note that the color of the `span` tag should be blue

<br>


![Imgur](http://i.imgur.com/WzTTdIe.jpg)
## Labtime
####Exercise #1
[Add CSS to the Blog Mockup](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/blob/master/unit_01/w02d01/student_labs/html-practice-and-review.md)
[Blog mockup](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/blob/master/unit_01/w02d01/student_labs/mockup.png)



####Exercise #2

[Instagram Lab](https://github.com/ga-wdi-exercises/instagram_ad)

<br />

## <a name="conclusion">![Imgur](http://i.imgur.com/wPefQjh.png)</a>

**REVIEW QUESTIONS**

1. Explain the use case for a `class` vs an `id`
2. What is specificity?


**RESOURCES**

- Check out [W3 Schools CSS](http://www.w3schools.com/css/default.asp) documentation for extra stuff
- [CSS Specificity](http://www.standardista.com/css3/css-specificity/)
