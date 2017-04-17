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
- Continuous Integration and Continuous Deployment (CI/CD)

## Velocity and Estimation

> "Business likes to view estimates as commitments. Developers like to view estimates as guesses.
The difference is profound."

> &mdash; Robert C. Martin (Uncle Bob), _The Clean Coder_

**Question: I want you to add a new button to one of the web pages you've already built during this course.
How long will this take you?**

The only correct answer is _"I don't know."_ You can make an _**educated guess**_ but that's the
best you can do. Estimation is not an `exact science`. Mathematically speaking, it is a
`distribution`.

![](http://i63.tinypic.com/jfkyz4.jpg)

There are many processes that exist in the software development world for dealing with
this uncertainty, but the most common in the Agile world is `velocity`.

Velocity, as we mentioned before is the average number of `story points` a team accomplishes over
a set period of time (usually one or two weeks). Assuming this number is **stable**, the team
can use their `velocity` as a baseline to determine how much time is left, based on the `stories`
left in the `backlog`.

Let's break this down with an example:
- According to our backlog, we have **40 POINTS** of story work left on our project.
- Our **VELOCITY** is pretty stable, at about **8 POINTS** per week.
- Therefore, we can safely guess that we have **~5 WEEKS** of time left on our project.

This will not be 100% accurate! Velocity will not stay the same for the entire life of a project.
BUT can we all agree that this is likely to be a much more accurate estimate than if we had
just made an arbitrary guess?

> The stability of a team's **velocity** over time is also known as **volatility**.

## You Do (45 minutes)

Split into three teams of ~10 people each! (3 mins)

**We're going to build a new website for our company, _Vandelay Industries_.**

#### Requirements:
- I think it should have a red `header bar` with our company's **name** and **logo**.
- I also think it should have four buttons, each in a different color:
    - blue
    - red
    - green
    - orange
- When I click on any one of the buttons, the other four buttons should turn that color.
- I want our application to be deployed to a [Codepen](http://codepen.io/).


#### Waterfall team
- Before you write ANY code, you must draw up your entire plan for the application and I must approve it.
- Make sure to ask me about everything I might want as we draw up the plan!
- If you uncover any problems with your plan as you code, I must approve any changes to that plan before
you continue.
- I am a very important Business Person &trade; with lots of very important certifications. I manage many
projects. This means my time is very valuable and my schedule might not be open every time you want to
get my approval.

#### Scrum team
- Spend 10 minutes determining your `backlog` of stories. Try your best to account for each step you will need.
- Work in three ten-minute sprints. Plan your first sprint and assign point-values to the stories you think
you can complete in the first sprint.
- If you do not complete all of your stories in the first sprint, they will move to the next sprint, but try
to learn from the mistakes you made in the first sprint and improve on them in the second. The goal is to
complete all of the stories you have accounted for in a sprint.
- If you don't think you can complete all of the required in your third sprint, try to prioritize the most
important work remaining in the backlog.
- I will check in with you at the end of each sprint to give feedback on your progress.

#### XP team
- Spend 10 minutes determining your `backlog` of stories. Try your best to account for each step you will need.
- Decide when a full unit of work has been complete (e.g. the header is successfully created, or one of the buttons is on the page), and show it to me for approval.
- Once I have approved a unit of work, move on to the next unit and repeat that process. You should be
checking in with me at least every few minutes.

#### When we are done, we will get back together and compare our websites and experiences!

---

## For Further Reading

* [DZone RefCard on Scrum](dzone-rc-scrum.pdf)
* [Agile Lesson](https://github.com/ga-wdi-lessons/agile)
* [Overview of Agile Methodology](http://www.slideshare.net/hareshkarkar/overview-of-agile-methodology)
* [Thoughtbot Playbook - No Fixed Bids](https://thoughtbot.com/playbook/our-company/sales#no-fixed-bids)
* [Thoughtbot - Why Fixed Bids Are Bad For Clients, Too](https://robots.thoughtbot.com/why-fixed-bids-are-bad-for-clients-too)
