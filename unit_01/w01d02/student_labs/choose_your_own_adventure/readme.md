# Choose Your Own Adventure!

Using what you know about data types, variables, operators, conditional blocks, and accepting user input, create a text-based game that allows the user to arrive at different "destinations" based on the inputs they type.

### Rules
* Any path the user goes down must ask them at least **three** questions.
* There must be a minimum of **seven** total destinations the user could arrive at based on their responses.
* For **at least one** of the questions asked, there must be **more than two possible user responses**.
* Your code must contain **at least one switch statement**
* Your code must make use of **both string and number user inputs**.

> **Hint:** You may need `parseInt()` and `toString()`

### Need Some Inspiration?

How about...

* A Lord of the Rings style adventure where the player is Frodo, and he must choose how to get to Mordor. Possible obstacles involve Orcs, Goblins and getting drunk on mead.
* A "Top Chef" style cooking adventure where the player is the chef, trying to make dinner for an elite group of judges. Possible obstacles include overcooking the meal, running out of time or mean judges.
* A Harry Potter themed adventure where the user is Harry and he must find all the horcruxes. Possible obstacles include He-who-must-not-be-named, Professor Snape or Ron being completely useless.

### Pseudo-coded Example

What is your name?

* `Sean`

Nice to meet you, `Sean`. What year would you like to go to? **(YYYY)**

* `>= 2015`
    * I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? **(B/G)**
        * `B`iff
            * Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)**
                * `S`tand and fight
                    * Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.
                * `R`un like a coward
                    * You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.
        * `G`riff
            * Griff is asking you if you are in, or out. What do you say? **(I/O)**
                * `I`n
                    * Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.
                * `O`ut
                    * Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.
* `1985-2014`
    * Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?
        * `Calvin Klein`
            * Welcome to the future, `Calvin Klein`.
* `1955-1984`
    * I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? **(Y/N/S)**
        * `Y`es
            * Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.
        * `N`o
            * Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.
        * `S`et her up with George
            * Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.
* `< 1955`
    * I see you're a fan of Back to the Future 3. You've run out of nitroglycerin to get back to your own time. How do you power the Time Machine? **(H/M/T)**
        * `H`orses
            * Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.
        * `M`oonshine
            * You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.
        * `T`rain
            * Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? **(T/L)**
                * `T`ake her
                    * Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.
                * `L`eave her
                    * Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.
