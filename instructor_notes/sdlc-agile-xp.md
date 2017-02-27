<!--
This file is auto-generated from a 'template.md'
file using the 'md-process' script.
Therefore *DO NOT* edit this file directly!
Instead edit the template file and then run 'md-process'.
-->

# The Software Development Life-Cycle and Software Development Methodologies

## Learning Objectives
- Explain the Goal of the SDLC
- Explain the basic parts of the SDLC
- Explain how software development methodologies help us manage risk / uncertainty
- Explain the benefits and trade-offs of Waterfall, Agile/Scrum, and XP
- Explain why software development processes can and should evolve over time

## Hook: You Do (15 minutes)

Get together in your stand-up groups and discuss:

> Every morning you get together to produce some meaningful output. Namely, your `actionable goal` for the day.

- What is your group's `methodology` for producing this output?
- How did you first come up with it? Did someone suggest it or did it evolve organically?
- Has it evolved over time?
- If so, has it evolved in response to `pain` or `hardship`? (e.g. time constraints, ending up with goals
that aren't actionable, etc.)
- Can it be `codified`? Could you break it down into a few easy steps?
- Could another team `reproduce` it?

Try to write down your team's `codified` process in 3-5 steps. We'll go around the room in a few minutes and
present a `codified` and `reproducible` explanation of each team's process to the other teams!

## Framing

Software development in the real world requires an incredible amount of collaboration and communication.
Development teams can be as small as one person, but more often than not they involve several people.
This number can even reach into the hundreds on very large projects.

This many layers of communication coupled with the complexity of writing software **ALWAYS**
guarantees one thing: **`chaos`**.

![chaos_gif](http://i.giphy.com/mciMfMijRXIfm.gif)

Understanding the SDLC and its resultant Software Development Methodologies allows us to manage this inevitable chaos.
Even more importantly, it allows us to remove **`fear`** from the development process and **`go fast, forever`**.

## What is the Software Development Life-Cycle?

* Also called "System Development Life-Cycle"

> _SDLC_ is term referring to a process or set of processes for planning, creating, testing, and
deploying an software product (i.e. a library, framework, application, website, etc.)

---
## What is the goal of SDLC?

The SDLC manages three important vectors:

* **Quality**: Ensuring that a high-quality product is built and delivered
* **Scope**: Delivering the _correct_ product
* **Cost**: Estimating and controlling cost

## The Software Trianglet

Pick two! You can't have all three.

![SDLC](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Project-triangle.svg/320px-Project-triangle.svg.png)

## What are the basic parts of the SDLC?

The SDLC has been broken down many ways over the years, but the basic parts always involve:

- Planning / Framing the Problem
- Design
- Implementation
- Testing
- Deployment
- Acceptance

![SDLC](https://www.tutorialspoint.com/sdlc/images/sdlc_stages.jpg)

## Managing Risk

Risk is anything that can threaten the *success* of a software project.

> How do we measure and track risk?

> Will our risks change during a project? How do we respond to these changes?


## Traditional (read: OLD SCHOOL) Approach - Waterfall

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

Waterfall attempts to answer these questions and _lock them down_ near the beginning of the project.
Then it takes a _work of congress_ to change courses midstream.

Things may go very smoothly at first, but 18 months later it can be very difficult to course-correct.

![](http://i.giphy.com/ptJO0jn2idlRu.gif)


The reason that these assumptions don't hold for most Software Development projects is because the
software industry is *highly volatile*.

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

> So we must be *agile* in our approach to developing a software solution to a problem.

Agile software development is based on a very simple, but powerful set of rules laid out
in the [Agile Manifesto](http://agilemanifesto.org/).

These four rules are:
- **Individuals and interactions** over processes and tools
- **Working software** over comprehensive documentation
- **Customer collaboration** over contract negotiation
- **Responding to change** over following a plan

## Types of Agile

Most often you will encounter two of the many different Agile implementations: `Scrum` and `Extreme Programming (XP)`.

These can be tweaked in many different ways, and there are as many flavors of Agile as there are software teams.

## Scrum

The Scrum methodology is generally focused around `sprints`.

`Sprints` are short cycles of time (typically 1-4 weeks) for which the team sets very specific goals.
At the end of each sprint, the team will have a `retro` meeting to evaluate the progress they made towards
the sprint's goals. If any adjustments need to be made to better meet future goals, these are discussed and
implemented in the next sprint.

The most common way of evaluating a sprint's progress is to break the `backlog` of remaining work on a
project into small `user stories`, or `stories` for short. These stories are then assigned `point values`
that reflect the story's complexity. When planning a sprint, the goal is to add a certain number of `points`
of `user value` to the application within the sprint's time period.

The average number of points a team completes in a given period of time becomes that team's `velocity`.
`Velocity` can be a very powerful planning tool. We will talk about this further in just a bit.

## Extreme Programming (XP)

Extreme programming is the most "modern" of the software methodologies we are discussing today. It is based
on the exact same principles as Agile, with the key difference being that XP's focus on keeping `feedback loops`
as short as possible.

XP leverages the same tools and concepts as Agile, including `backlogs` full of `pointed` `user stories`,
`"ceremonies"` such as `stand-ups` and `retros`, and planning based on `velocity` rather than intuition.

But XP adds to these concepts a set of values and practices that "supercharge" the Agile process and enable
teams to build and ship code incredibly fast. These values and practices include, but aren't limited to:
- Frequent, small releases
- "Merciless" Refactoring
- Frequent knowledge-transfer
- Co-location
- Test-driven development
- Pair-programming
- Continuous Integration and Continuous Deployment

## Velocity

Velocity is one of the most powerful planning tools available, and the concept is very simple.

Agile teams develop a baseline


## You Do (45 minutes)

Build this (only the portfolio page): http://unvab.com/snow-free-html/portfolio.html

1 Waterfall team

1 Agile team

1 XP team

---

## For Further Reading

* [DZone RefCard on Scrum](dzone-rc-scrum.pdf)
* [Agile Lesson](https://github.com/ga-wdi-lessons/agile)
* [Overview of Agile Methodology](http://www.slideshare.net/hareshkarkar/overview-of-agile-methodology)
* [Thoughtbot Playbook - No Fixed Bids](https://thoughtbot.com/playbook/our-company/sales#no-fixed-bids)
* [Thoughtbot - Why Fixed Bids Are Bad For Clients, Too](https://robots.thoughtbot.com/why-fixed-bids-are-bad-for-clients-too)
