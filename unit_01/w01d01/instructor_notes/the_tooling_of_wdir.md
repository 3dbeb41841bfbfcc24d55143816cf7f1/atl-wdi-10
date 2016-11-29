---
title: The Tooling of WDIR
type: Walkthrough
duration: 2hrs
creator:
  name: Colin Hart
  campus: WDIR
competencies: Programming
---

# The Tooling of WDIR

# Lesson Objectives

  - Slack
    - Outcomes Channel
    - Class Channel
    - Party time Channel
    - Debugging Channel
  - Wiki
  - Directory Structure
  - Spotlight
  - Spectacles
  - Typing


# Intro

WDIR is an interactive virtual classroom experience. Meaning, along with the coding skills you'll learn throughout the course, there are many patterns, tools, and processes that you'll need to ramp-up on in order to participate seamlessly in the classroom environment.

The online campus is made up of three tools:

- Slack: a chatroom with multiple channels
- Zoom: for video conferencing
- GitHub: to submit and receive code

You'll quickly become comfortable interacting with these three applications by way of participating daily in the classroom.

However, you the classroom is not just these remote applications it's also your computer.

Imagine we are in a physical classroom with desks, a whiteboard, chairs, plugs, etc., and upon entering the room, you notice that everything you'd want in a class room is there, but it's all out of order. The chairs are stacked haphazardly, and the desks are placed randomly throughout the room with no attention to the white board or where the plugs are. And there's trash and random odds and ends left over from the previous class.

That's a pretty horrible classroom experience and not at all conducive to learning. As the person in charge of the classroom, it's my responsibility to make sure the classroom is in order and ready. In an online environment you are the manager of the classroom and making sure your computer as well as you ability to navigate it are up to par.

**What does that mean?**

It means I will provide you with the base structure of what your _virtual classroom_ should look like and how you should organize it and interact with it. It will be up to you to practice and maintain.

Let's start by talking about Slack.

## Slack

Slack is your main means of communication during and after class.

There are four channels we'll use in our class

- `#wdir-matey`
- `#wdir-matey-outcomes`
- `#wdir-matey-partytime`
- `#wdir-matey-debugging`

1. We'll run our lessons in the `#wdir-matey` channel. After class, the TA, `Samuel Weisse`, will come online and help you out on the homework in this channel.

2. `#wdir-matey-outcomes` will be where your outcomes lessons happen with Seth and Eric.

3. The `#wdir-matey-partytime` channel is far all non-class related conversations to occur.

4. Throughout this course, whether it's during class, during homework, late-late at night, on the weekends. You're going to run into errors in your code. The `#wdir-matey-debugging` channel is probably the most important channel of the four.

#### `#wdir-matey-debugging` channel

Debugging and learning how to read and work toward solving errors is one of the most important skills you will learn during this course. It's a skill you'll need to practice and hone constantly.

The `#wdir-matey-debugging` channel will help facilitate this.

When you encounter an error that you can't solve or are stuck on you'll create a `Bug Report` and post it to the debugging channel. Once you've posted it an instructor and eventually, your classmates will be able to help you find a solution to your problem and vice versa you'll be able to help solve the issues your classmates come across

We'll talk about submitting bug reports later.

## The Wiki

Our classroom exists on GitHub as part of our class [repository](https://github.com/ga-students/wdi-remote-matey/wiki).

It will contain links to recordings of all of our lessons.

It also contains walkthroughs on how to submit homework, how to make a bug report, how to submit a new page to the Wiki, links to documentation, podcasts, newsletters, books and _many, many_ other things.


## Setting up your own classroom!

#### Managing your machines processing power

Zoom, Slack, and the code tools you'll need to have running will take up quite a bit of your machines processing power. To participate lag free you need to:

1. Not have your email or social media open
2. Make sure you're connected to the Internet via ethernet

#### Managing screen real-estate

We highly encourage that you have Slack and Zoom on one monitor and your code and notes in another. This will seem a little overwhelming at first but you'll quickly find it to be second nature and we'll also cover some tools and patterns that will make your life exponentially easier.


#### Directory Structure

Let's do a little command line lab and start setting up your dev environment!

What is the command to create a directory? To change directories?

```bash
$ cd ~
$ mkdir dev
$ cd dev
$ mkdir notes
$ mkdir unit_projects
```

Your `dev` directory will be where you store all of the code related files, notes, and projects.

Tomorrow you'll clone the GitHub class repo into your `dev` directory.

## Interacting with your classroom

Your classroom is your computer. You will need to be able to quickly navigate between applications, folders, windows, etc., to keep up with class.

This isn't just for your benefit as students; web developers are obsessed with minimizing key strokes and navigating efficiently. Coding is hard enough as it is without losing time trying to find or open files.

#### Spotlight

Spotlight is an excellent tool for opening applications. From this point forward you should **never** use your mouse to click on something in the dock. That might seem extreme now, but you'll thank yourself in a week.

The command to open spotlight is `command + space`. A small popup will open in which you can type the name of the application you'd like to open.

1. Open Chrome using spotlight.
2. Close terminal and then re-open it with spotlight.

#### Switching between applications

`command + tab` will open a bar across the middle of your screen allowing you to quickly toggle through remote applications by either holding command and using the arrow keys or pressing tab. When you let go your computer will switch to that application.

1. Use `command + tab` to switch to chrome.
2. Open up seven tabs _or_ find a window that has many tabs open.

#### Toggling between tabs

This shortcut works in almost every application whether it's Chrome, Atom, Slack, or even the terminal.

`command + [` or `command + ]` will toggle between tabs.

1. Toggle between tabs


#### Replacing the mouse, Spectacles.

Spectacles is an app that allows you to easily move windows around and arrange them, so they always fit on your screen in thirds, halves, or quarters

- Move to the left half: `⌥⌘←`
- Move to the right half: `⌥⌘→`
- Move to the top half: `⌥⌘↑`
- Move to the bottom half: `⌥⌘↓`

- Move to the upper left: `⌃⌘←`
- Move to the lower left: `⌃⇧⌘←`
- Move to the upper right: `⌃⌘→`
- Move to the lower right: `⌃⇧⌘→`

`^ ⌘ ⌥ ⇧` are all symbols that represent different keys on your key board:

- `⌃` stands for control
- `⌘` stands for the command key
- `⌥` stands for the option key
- `⇧` stands for caps lock

I *HIGHLY* encourage you all to memorize these and use them as quickly as possible. I'd recommend you write a cheat sheet by hand that you can have next to your keyboard at all times.

Again, it will be a little slower at first. But after a short time, it'll become second nature.

#### Typing

As you can tell a big part of the last two sections are about optimizing how you work with your computer, how to navigate in it and how you organize your screen easily.

Coding, as you might have realized is a lot of typing, a lot of reading and a lot of research.

Being able to type quickly will be a skill you'll want to start developing if you have thought about it before.

I'd suggest aiming for at least 50-60 words per minute. Which should put you at about ~30 words per minute when writing code.

It's one of those things where doing a little bit of practice every couple days over a period of time will quickly improve your abilities.

The game [TypeRacer](http://play.typeracer.com/) is a good way to improve your overall typing speed.

There's another [resource](http://typing.io) (Typing.io) that has you work on typing code and hitting some of those weird keys you never think about otherwise.

Finally, if those two are too dry for you, there's [ztype](http://zty.pe/) which is an arcade style shooter where you complete words to destroy ships, replete with bombs, point bonuses and... well, you get the picture.
