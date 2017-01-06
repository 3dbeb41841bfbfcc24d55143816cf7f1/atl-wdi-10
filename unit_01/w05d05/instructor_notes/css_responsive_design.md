---
title: CSS - Responsive Design
type: Lesson
duration: 1hr 30m
creator:
  name: Adapted fomr Marc Wright by Colin Hart
  campus: WDIR
competencies: Programming
---


# CSS - Responsive Design

# Lesson Objectives

  - Explain responsiveness and why we need it
  - Describe fluid layout
  - Describe the 'mobile first' development process
  - Explain min/max-height/width
  - Define media queries and why we need them


# Intro

### The Backstory

The Phone/Tablet/Phablet wars.  Apple, Google, Samsung and a bunch of other companies all released a bunch of devices, all with various dimensions.

Initially, we would test to determine which device was viewing the site, and then serve up different content based on that.  This was called adaptive.

### Now

Soon there were too many devices to examine and too much different code to write, so we decided to serve the same content to all devices, but modify it slightly so that it still looks good.  This is called responsive.

In responsive, the *content* responds to device attributes

- width
- height
- orientation
- media

### Methods to achieve this

- fluid layout
- mobile first
- min/max-height-width
- media queries

### Chome Dev Tools Device Toolbar
Previously you had to pay for software that would mimic what a given site would look like on a variety of devices. A helpful tool to use is the device toolbar in dev tools

<br>

## Describe Fluid Layout

Layout using percentages so that content shrinks and expands with window dimensions

<br>

## Describe the "mobile first" development process

1. Term is mostly used for designers
	- use https://generalassemb.ly/
1. Also applies to developers
	- start by developing mobile and move upward
	- don't go desktop to mobile

<br>

## Explain min/max-height/width

1. max-width/height
1. min-width/height
	- **EXAMPLE** nav when squished
		- keep item text on one line
		- combine min-width with percentage

<br>

## Define media queries and why we need them

1. media query possibilites
	- http://www.w3schools.com/cssref/css3_pr_mediaquery.asp
	- media types
		- screen
		- print
		- tv
	- media features
		- min-width
		- max-width
		- min-height
		- max-height
		- orientation
		- resolution
1. mobile first with media queries
	- mobile devices typically slower
	- will read mobile css and discard larger device css
	- larger devices will read mobile data and overwrite
		- this is okay since they're faster
	- could also have media queries for small devices too
		- fine, but can get complex with lots of media queries
		- can scan and assume existing queries are only for large devices

<br>

![](http://i.imgur.com/6Kce0ca.png)

1. Create a div (with content) that, for large width screens, has a width of 300px and is centered in the page
1. For screens that have a width less than 500px, the div should fill 100% of the screen
1. Create four divs with content and a yellow background
1. For screen widths greater than 600px, the divs should line up in a row, have a red background, and have a black 1px solid border.  The combined width of all four divs should fill the width of the screen

<br>

![](http://i.imgur.com/WzTTdIe.jpg)

## Labtime

[Create this Mockup](../student_labs/css/README.mkd)
