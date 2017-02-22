---
title: The Tooling of WDI
type: Walkthrough
duration: 2 hrs
creator:
  name: Colin Hart
  campus: WDI
competencies: Computer Usage
---

# The Tooling of WDI

## Lesson Objectives

  - Walkthrough Slack and the various channels we'll use
    - Outcomes Channel
    - Class Channel
    - Party time Channel
    - Debugging Channel
    - Parking Lot Channel
  - Walkthrough the Class Wiki
  - Set up classroom directory structure
  - Understand how to use the Spotlight app
  - Write down the commands for using Spectacle
  - Discuss typing speeds and apps for practicing

## Slack

Slack is your main means of communication during and after class.

There are five channels we'll use:

- `#atl-wdi9-classroom`
- `#atl-wdi9-debugging`
- `#atl-wdi9-outcomes`
- `#atl-wdi9-partytime`
- `#atl-wdi9-parkinglot`

1. We'll run our lessons in the `#wdi-9-atl-classroom` channel. After class, the TA will come online in this channel.
2. The `#wdi-9-atl-debugging` channel is probably the most important channel of the four. Throughout this course, whether it's during class, during homework, late-late at night, on the weekends, whenever, you're going to run into errors in your code.
3. `#wdi-9-atl-outcomes` will be where your outcomes lessons happen with Coach Seth and Coach Eric.
4. The `#wdi-9-atl-partytime` channel is for all non-class related conversations to occur.
5. The `#wdi-9-atl-parkinglot` channel is for class-related conversations that are more in-depth than class time allows for.

#### `#atl-wdi9-debugging` channel

Debugging and learning how to read and work toward solving errors is one of the most important skills you will learn during this course. It's a skill you'll need to practice and hone constantly.

The `#atl-wdi9-debugging` channel will help facilitate this.

When you encounter an error that you can't solve or are stuck on you'll create a `Bug Report` and post it to the debugging channel. Once you've posted it an instructor and eventually, your classmates will be able to help you find a solution to your problem.

We'll talk about submitting bug reports later.

## The Wiki

Our classroom exists on GitHub as part of our class [repository](https://github.com/ATL-WDI-Curriculum/atl-wdi-9/wiki).

It also contains walkthroughs on how to submit homework, how to make a Bug Report, how to submit a new page to the Wiki, links to documentation, podcasts, newsletters, books and _many, many_ other things.

## Setting up your classroom!
#### Managing your machines processing power

Slack and the coding software you'll need running will take up quite a bit of your machine's processing power. To participate lag free you need to:

1. Not have your email or any social media open
2. Keep browser tabs to a minimum, especially while using Chrome

#### Managing screen real-estate

We strongly encourage that you install and get comfortable with [spectacle](https://www.spectacleapp.com/). We will cover this at the beginning of the cohort.

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

You will spend much of your time in the classroom on your computer. You will need to be able to quickly navigate between applications, folders, windows, etc., to keep up with class.

This isn't just for your benefit as students; web developers are obsessed with minimizing key strokes and navigating efficiently. Coding is hard enough as it is without losing time trying to find or open files.

Your goal should be to use your mouse as little as possible. Aiming to get to a point where you rarely use it if ever.

#### Spotlight

Spotlight is an excellent tool to ween yourself off the mouse. You can use it to open applications. From this point forward you should **never** use your mouse to click on something in the dock.

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


#### Replacing the mouse, Spectacle.

Spectacle is an app that allows you to move windows around and arrange them easily so they always fit on your screen in thirds, halves, or quarters.

- Move to the left half: `⌥⌘←`
- Move to the right half: `⌥⌘→`
- Move to the top half: `⌥⌘↑`
- Move to the bottom half: `⌥⌘↓`

- Move to the upper left: `⌃⌘←`
- Move to the lower left: `⌃⇧⌘←`
- Move to the upper right: `⌃⌘→`
- Move to the lower right: `⌃⇧⌘→`

`^ ⌘ ⌥ ⇧` are all symbols that represent different keys on your keyboard:

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
