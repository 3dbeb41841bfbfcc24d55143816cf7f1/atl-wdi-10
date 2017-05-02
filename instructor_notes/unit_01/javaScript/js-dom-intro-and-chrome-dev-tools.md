---
title: Chrome Dev Tools
type: lesson
duration: "0:30"
creator:
    name: Shawn Johnson
    city: Atlanta
edited:
    name: Maren Woodruff
    city: Atlanta
    
---

# Intro to the DOM + Chrome Dev Tools

### Objectives
*After this lesson, students will be able to:*

- Describe the Document Object Model (DOM)
- Open and describe the components of the Chrome developer tools
- Use the developer tools to manipulate page elements (HTML/CSS)
- Start to learn how to debug your code

### Preparation
*Before this lesson, students should already be able to:*

- Open Chrome
- Write basic HTML
- Write basic JavaScript

<br />

## What are Dev Tools? – Intro

One of the most important traits a developer can have is an inner Sherlock Homes. A developer needs to be a world class detective- to always have an eye/interest in looking deeper, under the surface, for solving the problem.

![](http://cdn2.hubspot.net/hub/485203/file-2549982505-jpg/blog-files/sherlock_holmes_questionmark_white_bg-289x300.jpg) 

Every great detective needs a great set of tools. Most modern browsers include a set of tools that allow developers to monitor and explore what is going on on a web page. The Chrome Developer Tools, often shortened to "Dev Tools", are a set of debugging tools built into Google Chrome.  

We can do a lot of useful things with these tools, but here are some of the things that are the most useful:

- We can view and manipulate the HTML & CSS as the browser has rendered them, via the DOM
- We can watch requests and responses as they are made and received
- We can observe JavaScript being run
- We can debug problems in our code
- We can issue JavaScript commands in our console, otherwise known as our browser command line

Having such a powerful set of browser tools at our disposal is incredibly valuable, and you should get into the habit of using them to their full potential.

<br />

![We Do](http://i.imgur.com/6Kce0ca.png)

## Open the DevTools – Demo

First, let's navigate to [http://generalassemb.ly](http://generalassemb.ly).

Now to access the DevTools, we can press:

- `command(⌘) + option + i` to open the DevTools (which will open on the last tab that you had open)
- `command(⌘) + option + j` to open the DevTools on the console tab
- `command(⌘) + option + u` to view the source

If you forget these commands, you can always go to *View > Developer > Developer Tools*, but it will be very beneficial to try to **memorize these keyboard shortcuts**.

### DevTools Tabs

Overall, there are eight main tools available in the Developer Tools. You may see other people's DevTools with a few more, as you can add custom tools via chrome extension.

We won't use all of these tabs during this course. The **key** tabs that we will become familiar with are:

- **Elements** - Where you can examine the rendered html/edit the CSS and the DOM
- **Network** - Where you see the results of your network requests and evaluate network performance
- **Console** - The JavaScript Console - where you write/test out code

<br />

## Elements Tab

You can use the Elements panel for a variety of tasks:

- Inspecting the HTML & CSS of a web page
- Live-editing HTML/CSS on-the-fly

Let's go ahead and play around with some of these tools.

<br />

![We Do](http://i.imgur.com/6Kce0ca.png)

### Modifying CSS On-the-Fly

The Chrome DevTools have made it very easy to quickly test and edit the CSS before incorporating it back into your application. On [http://jezebel.com/](http://jezebel.com/) do the following:

- Press `command(⌘) + option + i` to open the inspector view
  - You can open the DevTools with any shortcut that you like, then press the square with the arrow on the top left corner of the tools section.
  - Alternatively, try right-clicking on the page and selecting "Inspect Element" at the bottom; or right-clicking on a particular element and selecting "Inspect"
- Look at the DOM nodes on the left-hand side and select the `body`
- Look at the CSS responsible for a rendered element in the browser

When you are sure that you have the body selected, in the CSS live-editor on the right, change the CSS property `background` value to `red` by clicking on it:

```css
body {
    background: red;
}
```

What happened? When we have are looking at CSS via the DOM, we are able to do whatever we want to change it!  But remember that if you refresh the page, everything will re-render in the way that it was originally intentioned and you will lose your changes!  Your browser will have sent a new request and received a new response back - aka the default HTML + CSS files and folders associated with the `jezebel` endpoint.

A few other things to try:

- Notice that as you start typing background, the css properties autocomplete.
- After choosing your color, a little colored box will show up (if Chrome recognizes the color that you typed).
- If you press `SHIFT` and click on the colored box, you can see that the color changes format rgb, hex, etc.
- If you click on the colored box, you will also see a color selector.
- If you click on the color you will also get a color selector!

Pretty sweet, eh?

<br />

![You Do](http://i.imgur.com/ylb6WX9.gif)

### YOU DO - Alter the GA logo (5m)
- Go to the [General Assemb.ly site](https://generalassemb.ly/).  Inspect the General Assemb.ly logo in the top left corner and change the image to an image of your choosing (from somewhere on the internet)
- Change the values of the logo margin to make the image fit
- Change the font-family of the first `h1` on the page to Arial and the font-color to red

The goal of this exercise is to try to get you comfortable editing and manipulating the DOM in your browser, as these will come in handy for every one of your projects. <!-- I often use dev tools to play around with the CSS for whatever page I happen to be working on. -->

<br />

![You Do](http://i.imgur.com/ylb6WX9.gif)

### YOU DO (2 min)

- Change the text of the first `h1` on the page to "WDI ATL 10 gets down with Chrome Dev Tools!".
- If you finish with this task, experiment with what else you can manipulate on the page.

<br />

## Network Tab

The Network panel records information about each network operation in your application, including detailed timing data, HTTP request and response headers, cookies, WebSocket data, and more.

- Refresh the page and take a look at the requests being made by the page
  - Notice that the status of a lot of the resources are **304** (not modified- aka they were cached in memory)
- On the right hand side of your dev tools header, you will see three dots in a vertical line.  
  - Click on those dots, and you will see a dropdown.  
  - Click on 'Settings'.  
  - Under the 'Prefereces' section, 
    - under the 'Network' list, 
    - select 'Disable Cache (while DevTools is open' so that the requests are processed as 'new' each time we ask for a resource from the server
  - Refresh the page, and you should see that the resources are now of **200** or ok status.
- Take 2 minutes to try to find the main HTML Page (GA.com may not work, you may need to go to jezebel.com, sort by the `doc` filter, and find the main html document) and check out the IP address and the request/responses.

<br />

## Console Tab - Codealong

Lastly, let's have a look at the console tab (practice the shortcut – `⌘ + option + j`).

The **JavaScript Console** provides two primary ways for developers to test web pages and applications:

1. Log diagnostic information in the development process using the [Console API](https://developer.chrome.com/devtools/docs/console-api)
**This is where console.log comes from.**
2. A shell prompt, which can be used to interact with the document and the DevTools.

When we write JavaScript that we intend to have processed in a browser, we can use commands like `console.log()` to log values from our JavaScript straight to this tab, as the code executes. This is immensely helpful when we are trying to figure out if certain values are being retrieved or passed between functions. We will use this feature/statement **a lot** in the coming weeks.

### Console Shell

The console shell also allows us to execute JavaScript and interact with the current DOM using JavaScript, just like we would from a JavaScript file that we load with the page.

Let's try this:

```javascript
1 + 1;
=> 2

var num = 10;
=> undefined

num;
=> 10

for (var i = 0; i <= num; i++) {
  console.log(i);
}
```

<br />

## Conclusion

There are a lot of things that Chrome can do for you. However, we don't have time to look at them all right now. Spend some time playing around with the DevTools during your assignment tonight. You will become very familiar with what they can do for you over the course of WDI.  You can also check out more shortcuts [here](https://developer.chrome.com/devtools/docs/shortcuts).

- What are the shortcuts to open the DevTools?

---

### Some of my favorite JS books
* [A Smarter Way to Learn JS](http://www.cpp.edu/~jcmcgarvey/513_2016/ASmarterWaytoLearnJavaScript.pdf)
* [A Smarter Way to Learn jQuery](https://github.com/JideLambo/javascript-books/blob/master/A%20Smarter%20Way%20to%20Learn%20jQuery%20-%20Mark%20Myers.pdf)
* [JavaScript + JQuery](https://www.dropbox.com/s/05je29f3oxj7oa0/JavaScript%20and%20JQuery%20Interactive%20Front-End%20Web%20Development%202014.pdf?dl=0) - So good! Might be worth buying...
* [JavaScript the Good Parts](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
* [Eloquent JS](http://eloquentjavascript.net/)
* [DOM Enlightenment](http://domenlightenment.com/#1.1)
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
* [You Don't Know ES6](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond)
