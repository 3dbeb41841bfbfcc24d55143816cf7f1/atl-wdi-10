[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Pseudo-Code

## Problem-Solving

Every developer, no matter their specialty, must engage in problem solving as a
core part of their role.

One key strategy for problem solving is the process of writing **'pseudo-code'**
-- human readable directions (though written in a code-like style) that, if
followed closely, would allow someone to reach the solution.

For instance, here is what some pseudo-code for making lasagna might look like:

```plaintext
1. Pre-heat oven to 350 deg F
2. Boil water for that crimpy pasta
3. etc . . .
```

Here's another example -- making sure that you shut all of the lights off in
your house.

```plaintext
For each room in the house
  if that light is on in that room,
    turn the light off.
```

Note that the syntax isn't exactly the same. There are no strict rules about
writing pseudo-code -- just make it in a way that makes sense to you.

Doing this before you actually start coding can be a great way to fight the
"analysis paralysis" that sometimes happens when you try to solve a
challenging problem; it will help you organize your thoughts, and can make the
process of actually writing the code much easier.

### Exercise : Psuedo-Coding with Rick and Morty

![](http://vignette2.wikia.nocookie.net/rickandmorty/images/0/0d/Rick-and-Morty1.jpg/revision/latest/scale-to-width-down/300?cb=20140213083747)

> _Rick and Morty encounter many problems on their pan-dimensional_
> _adventures..._

In pairs, create a pseudo-code solution for each of the problems below.
Try to look past the irrelevant details, and just focus on the core part of the
problem.

> Don't spend no more than 5 minutes on any of these.

#### 1. RESTAURANT TIPPIN'

![](http://vignette1.wikia.nocookie.net/rickandmorty/images/0/01/Birdperson_Saving_Morty.png/revision/latest/scale-to-width-down/250?cb=20160913001151)
![](http://vignette3.wikia.nocookie.net/rickandmorty/images/b/bb/FirstSquanch.png/revision/latest/scale-to-width-down/71?cb=20151006235614)

Rick, Morty, and Rick's old friends Birdperson and Squanchy are eating together
at a diner. Pseudo-code an application which can take the bill (plus some
arbitrary tip %) and split it amongst the four of them. For example, a bill
of $40 with a 20% tip should evaluate to $12 per person, including tip.

##### _suggested number of steps: 2_

#### 2. PARASITES

![](http://vignette4.wikia.nocookie.net/rickandmorty/images/5/52/Parasitemmooorrttyy.png/revision/latest/scale-to-width-down/250?cb=20160921081337)
![](http://vignette1.wikia.nocookie.net/rickandmorty/images/1/12/Reverse_Giraffe.png/revision/latest/scale-to-width-down/250?cb=20160921082124)

The Smith household has been infested with shape-shifting, memory-altering
parasites! These parasites trick you into keeping them in your home (and letting
them eat your food) by changing your memories so that you think they've always
been there. The only clue you have for finding them out is that they can only
create happy memories. Given the (rapidly growing) list of people in the house,
how can you create a list of the people who definitely _aren't_ parasites?

##### _suggested number of steps: 2 - 3_

#### 3. THE ADVENTURES OF STEALY

![](http://vignette3.wikia.nocookie.net/rickandmorty/images/7/78/Stealy.jpg/revision/latest/scale-to-width-down/250?cb=20160609132837)

Stealy went through another office today, and he stole a whole bunch of neat
stuff:

-   a bag of Bobbish (worth 8 Frapples)
-   a Plumbus (worth 6.5 Grapples)
-   three crushed red party cups (worth 15.5 Rapples)

Psuedo-code an application that can calculate the value of Stealy's hoard, in
Rapples (given, of course, that 1 Frapple equals 10 Rapples, and 1 Grapple
equals 4 Frapples).

##### _suggested number of steps: 2 - 3_

## Patterns

One thing you may notice as you start to mock out solutions using pseudocode is
that many problems, though superficially different, actually have very similar
patterns to their solutions. For example, adding up a sum of a list of numbers
is an almost identical process to taking the product of a list of numbers -- the
only things that change are the operation (`+` vs `*`) and the initial value
(0 vs 1).

Let's take a look at some of the different higher-level patterns of pseudo-code,
and then see how they translate over to actual code.

### Exercise

For each of the following problems, identify what the question is asking you to
do (i.e. compare, sort, search, transform, ...). Then, take a quick skim of this
[pseudocode pattern cheatsheet](./patterns.md)
to compare the problem to a few common patterns that often come up.

> Don't take this cheatsheet as gospel, and _definitely_ don't waste time
> memorizing it. It's a small sample of a very large number of possible
> patterns.

Next, try writing out a pseudocode solution to each problem.

Finally, if you have time, try to convert each of your pseudo-code solutions
into actual JavaScript code. Don't worry about it being exactly right -- just
try to get 80% of the way there.

#### Problems

1.  Given an array of 'rectangle' objects (with properties 'base' and 'height'),
    return the area of the largest rectangle.

2.  Find the first word that starts with the letter 'u' in a list of words.

3.  Given an arbitrary word, find the letter (or letters) in that words which
    appear most commonly. For example, in the word 'Alabama', the most commonly
    occurring letter is 'a' (appearing four times).

### Retrospective

Spend a few minutes thinking about the following:

-   Do these problems seem similar to any ones you've see so far?

-   Can you come up with an example of your own where the patterns discussed
    here might be applicable?

-   Are there any other patterns that you've come across that could be
    applicable in other circumstances?
