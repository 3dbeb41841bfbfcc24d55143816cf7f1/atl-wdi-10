---
title: Chrome Dev Tools
type: lesson
duration: "0:30"
creator:
    name: Shawn Johnson
    city: Atlanta
edited:
    name: Marc Wright
    city: Atlanta
    
---

# Intro to the DOM + Chrome Dev Tools

### Objectives
*After this lesson, students will be able to:*

- Describe the Document Object Model (DOM)
- Open and describe the components of the Chrome developer tools
- Use the developer tools to manipulate page elements (HTML/CSS)
- Start to learn how to debug our code

### Preparation
*Before this lesson, students should already be able to:*

- Open Chrome
- Write basic HTML
- Write basic JavaScript

<br>

## Intro + Hook

This morning we're gonna take a look at the DOM and how we can use the Chrome Dev Tools to manipulate and test it out. This afternoon we'll use more advanced ways to perform DOM manipulation using Javascript.



<details>
<summary>To start, can someone describe the difference between HTML and the DOM in their own words?</summary>
The DOM (Document Object Model) is the browser's intrepretation of the HTML. Your browser creates objects out of the HTML elements.

examples: 

- blueprint => HTML, finished building => DOM
- recipe ingredients => HTML, finished dish => DOM

</details>


**WE DO:** Goto [Kickass App](http://kickassapp.com/) and use it. What is happening?

<br>

## What is the DOM?

- A browser receives a page as HTML and creates a model and stores it in memory creating a Document Object Model (a.k.a. the DOM tree).

![DOM Tree](http://www.webstepbook.com/supplements/slides/images/dom_tree.gif)

- The DOM has properties, methods and events that each browser implements in the same way.
- Each DOM "element" is an object, and may be accessed and modified independently of other content.
- Inspectible using the web inspector.
- Defines a heirarchy for all content elements in the document.
- In the console, type `document.` and check out the available methods.
- Demo `document.lastModified` and `document.title`

<br>

## What are Dev Tools? – Intro

One of the most important traits a developer can have is an inner Sherlock Homes. A developer needs to be a world class detective. Always having an eye for looking deeper under the surface. 

![](http://cdn2.hubspot.net/hub/485203/file-2549982505-jpg/blog-files/sherlock_holmes_questionmark_white_bg-289x300.jpg) 

Every great detective needs a great set of tools. Most modern browsers include a set of tools that allow developers to monitor and explore what's going on in a web page. The Chrome Developer Tools, which we often call the "Dev Tools", are a set of debugging tools built into Google Chrome.

We can do a lot of useful things with these tools, but some of the things that are most useful:

- We can view the HTML & CSS as the browser has rendered them into the DOM
- We can watch requests and responses as they are made and received
- We can observe JavaScript being run
- We can debug issues with our code
- We can issue JavaScript commands on a console, or browser command line

Having such a powerful set of browser tools at our disposal is incredibly valuable, and you should get into the habit of using them to their full potential.


<br>

![We Do](http://i.imgur.com/6Kce0ca.png)

## Open the DevTools – Demo

First, let's navigate to [http://generalassemb.ly](http://generalassemb.ly).

Now to access the DevTools, we can press:

- `⌘ + option + i` to open the DevTools (will open on the last tab you had open)
- `⌘ + option + j` to open the DevTools on the console tab
- `⌘ + option + u` to view the source

If you forget these commands, you can always go to *View > Developer > Developer Tools*, but try to memorize the keyboard shortcut.

#### DevTools Tabs

Overall, there are eight main tools available in the Developer Tools. You may see people with a few more as you can add custom ones using extensions.

We won't use all of these tabs during the course, the key ones we are going to get very familiar with are:

- **Elements** - Where you examine code - edit CSS and the DOM
- **Network** - Where you see results of network request and evaluate network performance
- **Console** - The JavaScript Console - where you write code

<br>

## Elements Tab

You can use the Elements panel for a variety of tasks:

- Inspecting the HTML & CSS of a web page
- Testing the site in different layouts
- Live-editing CSS on-the-fly

Let's go ahead and play around with some of these tools.

<br>

![We Do](http://i.imgur.com/6Kce0ca.png)

### Modifying CSS On-the-Fly

For modifying and editing your CSS, the dev tools has made it super easy to quickly test and edit CSS before incorporating back into your application. On [http://generalassemb.ly](http://generalassemb.ly) do the following:

- Press `⌘ + option + i` to open the inspector view
  - You can also do this by opening the dev tools with any other shortcut, then pressing the square with the arrow on the top left corner of the tools section
  - Or, try right-clicking on the page and selecting "Inspect Element" at the bottom
- Look at the DOM nodes on the left hand side and select the `body`
- Look at the CSS responsible for a rendered element in the browser

When you are sure that you have the body selected, in the CSS live editor on the right, change the CSS property `background-color` value to `red` by clicking on it:

```css
body {
    background-color: red;
    ...
}
```

What happened? Well since we have this CSS file locally, we're able to do whatever we want to change it!But notice if you refresh your page, everything is gone!  Your browser sent a new request and got a new response back - the default CSS files and folders associated with the `generalassemb.ly` endpoint.

A few other things to try:

- Notice that as you start typing background, the css properties autocomplete
- After choosing your color, a little colored box will show up (if Chrome recognized the color you typed)
- If you press `SHIFT` and click on the colored box, you can see that the color changes format RGBA, Hex, etc.
- If you click on the colored box, you will also see a color selector.
- If you click on the color you also get a color selector!

Pretty sweet, huh?

<br>

![You Do](http://i.imgur.com/ylb6WX9.gif)

##### YOU DO - Alter the GA logo
- Inspect the General Assembly logo in the top left corner and change the image to an image of your choosing from somewhere on the internet
- Change the values of the logo margin to make the image fit
- Change the font-family of the first `h1` on the page to Arial and the font-color to red

We're just trying to get you comfortable editing and manipulating the DOM on your browser as these will come in handy for every one of your projects.

<br>

### Modifying DOM Elements

Inside the DOM tree view, we can see a representation of the Document Object Model as interpreted by the browser.

We can edit these elements.

- Select the `body` element
- Delete it by pressing the `Delete` button
- Then Undo this by pressing `⌘ + z`


![You Do](http://i.imgur.com/ylb6WX9.gif)

##### YOU DO

- Change the text of the first `h1` on the page to "Hello WDI Remote!"

<br>

##Network Tab

The Network panel records information about each network operation in your application, including detailed timing data, HTTP request and response headers, cookies, WebSocket data, and more.

- Refresh the page and have a look at the requests being made by the page
  - Notice that the status of a lot of the resources are **304** (not modified)
- Select 'Disable Cache' so the requests are processed as new each time we ask for a resource from the server
  - Refresh the page, and you should see that everything is now **200** (ok)
- Try to find the main HTML Page (GA.com may not work, you may need to go to espn.com, sort by the `Doc` filter, and find the main html doc) and check out the IP address and the request/responses.

<br>

## Console Tab - Codealong

Lastly, let's have a look at the console tab (practice the shortcut – `⌘ + option + j`).

The JavaScript Console provides two primary ways for developers to test web pages and applications:

- Log diagnostic information in the development process using the [Console API](https://developer.chrome.com/devtools/docs/console-api)
- A shell prompt which can be used to interact with the document and DevTools.

When we write JavaScript that we intend to be processed in a browser, we can use commands like `console.log()` to log values from our Javascript straight to this tab, as the code executes. This is immensely helpful when we're trying to figure out if certain values are being retrieved or passed between functions. We'll use this feature a lot in the coming weeks.

#### Console Shell

The console shell also allows us to execute Javascript and interact with the current DOM using Javascript, just like we would from a JavaScript file that we load with the page.

Let's try this:

```javascript
> 1 + 1
< 2

> var a = 1;
< undefined

> a
< 1

> for (var i = 0; i < 10; i++) {
    console.log(i);
  }
```

<br>

## Conclusion

There are a lot more things that Chrome can do for you. However, we don't have time to look at them right now. Spend some time playing around with the dev tools during your assignment tonight. You will become very familiar with what they can do for you over the course of WDI.  Check out more shortcuts [here](https://developer.chrome.com/devtools/docs/shortcuts).

- What are the shortcuts to open the dev tools?
- Why do you lose all your work, if you modify the DOM, after you refresh the page?

