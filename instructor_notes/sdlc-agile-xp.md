<!--
This file is auto-generated from a 'template.md'
file using the 'md-process' script.
Therefore *DO NOT* edit this file directly!
Instead edit the template file and then run 'md-process'.
-->

# The Software Development Life-Cycle

## Table of Contents

* [What is Software Development Life-Cycle?](#what-is-software-development-life-cycle?)
* [What is the goal of SDLC?](#what-is-the-goal-of-sdlc?)
* [The Software Triangle](#the-software-triangle)
  * [The Iron Pyramid?](#the-iron-pyramid?)
* [Managing Risk](#managing-risk)
* [Traditional Approach - Waterfall](#traditional-approach---waterfall)
* [Why is Waterfall so Attractive?](#why-is-waterfall-so-attractive?)
* [Enter Agile](#enter-agile)
* [For Further Reading](#for-further-reading)


## What is the Software Development Life-Cycle?

* Also called "System Development Life-Cycle"

> _SDLC_ is term referring to a process or set of processes for planning, creating, testing, and deploying an software product (i.e. a library, framework, application, website, etc.)

![SDLC](https://www.tutorialspoint.com/sdlc/images/sdlc_stages.jpg)

---

## What is the goal of SDLC?

* **Quality**: Ensuring that a high-quality product is built and delivered
* **Scope**: Delivering the _correct_ product
* **Cost**: Estimating and controlling cost

## The Software Triangle

Pick two! You can't have all three.

![SDLC](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Project-triangle.svg/320px-Project-triangle.svg.png)

## Managing Risk

Risk is anything that can threaten the *success* of a software project.

> How do we measure and track risk?

> Will our risks change during a project? How do we respond to these changes?


## Traditional Approach - Waterfall

![Waterfall Process](https://xbsoftware.com/wp-content/uploads/2014/10/software-development-life-cycle.png)

Waterfall follows a very *familiar* approach to designing and building a system:

* Figure out what you want to build
* Design it
* Build it
* Test it
* Ship it
* Enjoy

But *waterfall* is not usually a good fit for large *Software* projects, because certain *assumptions* do not hold.

Waterfall _assumes_ that we know everything we need to know at the beginning of the project:

* What features are needed
* What technologies are a good fit
* How long it will take
* How many developers are needed

Waterfall attempts to answer these questions and _lock them down_ near the beginning of the project. Then it takes a _work of congress_ to change courses midstream.

The reason that these assumptions don't hold for most Software Development projects is because the software industry is *highly volatile*.

* Markets change
* Technologies change
* What seemed like a good idea 3 months ago seems silly or irrelevant now.

We need a process for building software that can *ADAPT* quickly to change!

## Enter Agile

Agile asks "When do we know the most about a project (at the beginning or at the end)?"

Agile accepts the fact that everything continues to change at a rapid rate:

* Markets change
* Technology changes
* Culture changes
* Business dynamics change
* Our understanding continues to evolve

Agile software development focuses on a very simple, but powerful set of rules laid out in the [Agile Manifesto](http://agilemanifesto.org/).

These four rules are:
- **Individuals and interactions** over processes and tools
- **Working software** over comprehensive documentation
- **Customer collaboration** over contract negotiation
- **Responding to change** over following a plan

> So we must be *agile* in our approach to developing a software solution to a problem.

## Types of Agile

Generally, you will encounter two different Agile methodologies, `Scrum` and `Extreme Programming (XP)`.

These can be tweaked in many different ways, and there are as many flavors of Agile as there are software teams.

## Scrum

The Scrum methodology is generally focused around `sprints`.

`Sprints` are short cycles of time (typically 1-4 weeks) for which the team sets very specific goals. At the end of each sprint, the team will have a `retro` meeting to evaluate the progress they made towards the sprint's goals. If any adjustments need to be made to better meet future goals, these are discussed and implemented in the next sprint.

The most common way of evaluating a sprint's progress is to break the `backlog` of remaining work on a project into small `user stories`, or `stories` for short. These stories are then assigned `point values` that reflect the story's complexity. When planning a sprint, the goal is to add a certain number of `points` of `user value` to the application within the sprint's time period.

The average number of points a team completes in a given period of time becomes that team's `velocity`. `Velocity` can be a very powerful planning tool. We will talk about this further in just a bit.



## XP


---

## For Further Reading

* [DZone RefCard on Scrum](dzone-rc-scrum.pdf)
* [Agile Lesson](https://github.com/ga-wdi-lessons/agile)
* [Overview of Agile Methodology](http://www.slideshare.net/hareshkarkar/overview-of-agile-methodology)
* [Thoughtbot Playbook - No Fixed Bids](https://thoughtbot.com/playbook/our-company/sales#no-fixed-bids)
* [Thoughtbot - Why Fixed Bids Are Bad For Clients, Too](https://robots.thoughtbot.com/why-fixed-bids-are-bad-for-clients-too)
