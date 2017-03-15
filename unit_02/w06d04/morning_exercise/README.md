![ga](http://mobbook.generalassemb.ly/ga_cog.png)

---
Title: Clock Hand Angle Calculator <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator:<br>
    Original creators: WDI-Lettuce<br>
    Adapted by: Christine for WDIR-Matey<br>
Competencies: Logic, Javascript<br>
Prerequisites: Javascript <br>

---

# Morning Exercise

## CLOCK HAND ANGLE CALCULATOR

![clock](http://orpheogroup.com/wp-content/uploads/2014/10/grand-central-clock-crop.jpg)

##Setup

Run `npm install` -- this will download any exercise-specific JavaScript dependencies into to a directory called node_modules.

##Directions

In `clocks.js` you will be writing a function `calculate` that takes two integers, `hour` and `minute`. The function should calculate the two angles in degrees between the **hour hand** and **minute hand** on a twelve-hour analog clock face.

Note that the hour hand has 'drift'. If the time is **6:30**, the hour hand will be halfway through its travel between **6** and **7**. If the time is **9:45**, the hour hand will be three quarters of the way between **9** and **10**.

Return an "out of range" message if an input is greater than the clock's range.

Expected output examples:

```
clock(6, 00)    //returns [180, 180]
clock(12, 00)   //returns [360, 0]
clock(12, 15)   //returns [82.5, 277.5]
clock(9, 45)    //returns [22.5, 337.5]
clock(1, 59)    //returns [294.5, 65.5]
clock(500, 34)  //returns "out of range"
clock(-6, 00)   //returns "out of range"
```

<!-- ### Testing Your Work

A set of automated tests, written in the [Mocha.js](https://mochajs.org/)
testing framework, has been provided for you with this assignment.
To run these tests, type `npm test` into the console from the root directory
of this repo. Test your work regularly, and read the feedback from the tests
carefully -- it may give you a clue about what to do next.
 -->