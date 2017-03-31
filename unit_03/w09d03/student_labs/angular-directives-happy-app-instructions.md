---
title: Angular Directives
type: Lab
duration: "1:25"
creator:
    name: Micah Rich
    city: LA
adapted:
    name: Marc Wright
    city: WDIR
competencies: Front-end frameworks
---

# Angular Directives

## Introduction

Pair programming lab! We're going to build something just like what we built together in the last lesson, but this time with a couple extra cherries on top.

Your mission is to build a tiny little Angular application together that tracks happiness – so you can keep a log of how you feel each day. Scientifically proven to average out your happiness over time.

Be creative with how you store the data, and if you have time, check out some of the bonus ideas.

## Setup

Create a example Node/Express app for this lesson.

1. `mkdir happyApp` && `cd` into it
2. `npm init -y`
4. `touch server.js`

```js
var express = require('express');
var app     = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(4000, function(){
    console.log("app listening on port 4000");
});
```
    
1. `npm install --save express`
1. `mkdir public`
1. `mkdir public/js`
1. `touch public/js/app.js`

```js
angular.module('HappyApp', []);
```
1. `touch public/js/ratingsController.js`

```js
angular.module('HappyApp', [])
  .controller('RatingsController', RatingsController);

  function RatingsController(){
    //code goes here

      function addRating(){
        //code goes here    
      }
  }
```
1. `touch public/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Happy App</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/ratingsController.js"></script>
  </head>
  <body>

  </body>
</html>
```
    
1. Make sure to add `ng-app` to your `<html>`

```html
<html ng-app="HappyApp">
```

1. Here is some starter html body code with the Angular directives missing.

```html
<h1>HappyApp</h1>
<h3 class='tagline'>Generally average happiness over time, since 1986</h3>

<section id="ratings" ng-controller="">
  <ul>
    <li ng-repeat="">
      <span ng-if="">:-)</span>
      <span ng-if="">:-|</span>
      <span ng-if="">:-(</span>
    </li>
  </ul>

  <form class="add-rating" ng-submit="">
    <p>
      <strong>How's your happiness today?</strong><br/> Click one to pick it, then save.
    </p>
    <div>
      <input type="radio" value="1" name="rating" id="rating+1" ng-model="">
      <label for="rating+1">:-)</label>
    </div>
    <div>
      <input type="radio" value="0" name="rating" id="rating=0" ng-model="">
      <label for="rating=0">:-|</label>
    </div>
    <div>
      <input type="radio" value="-1" name="rating" id="rating-1" ng-model="">
      <label for="rating-1">:-(</label>
    </div>

    <input type="submit" value="Save My Happiness">
  </form>
</section>
``` 
    

2. `mkdir public/css`
3. `touch public/css/style.css`

```css
@import url(http://fonts.googleapis.com/css?family=Raleway:900,200,600|League+Script);

body {
  font-family: Raleway, Helvetica, sans-serif;
  font-weight: 200;
  text-align: center;
  text-rendering: optimizeLegibility;
}
p {
  line-height: 1.5;
}
h1 {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 3.618rem;
  margin: 3rem auto 0;
  letter-spacing: 12px;
}
h1:after {
  content: "™";
  font-size: 1rem;
  vertical-align: super;
  position: relative;
  top: -0.618rem;
}
.tagline {
  font-weight: 200;
  margin: 0.618rem auto 0;
  font-size: 1.8rem;
  font-family: 'League Script', cursive;
}

#ratings {
  margin-top: 3.618rem;
}


#ratings ul {
  list-style: none;
  counter-reset: ratings;
}

#ratings ul li {
  display: inline-block;
  margin: 0 1rem;
  font-size: 2rem;
  counter-increment: ratings;
}

#ratings ul li span {
  display: block;
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

#ratings ul li:after {
  content: counter(ratings);
  font-size: 1rem;
  border: 1px solid black;
  display: block;
  text-align: center;
  margin-top: 1.618rem;
  padding: 0.292rem 0.192rem 0rem 0.192rem;
  height: 1.618rem; width: 1.618rem;
  border-radius: 100px;
}

#ratings .add-rating {
  border: 1px solid black;
  max-width: 300px;
  margin: 3.618rem auto 2rem;
  padding: 2rem;
  border-radius: 4px;
}

#ratings .add-rating div {
  display: inline-block;
  margin-right: 1rem;
}
#ratings .add-rating input[type=submit] {
  display: block;
  margin: 2rem auto 0 auto;
  border: 1px solid black;
  background: black;
  color: white;
  font-family: Raleway, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  padding: 0.392rem 1rem;
}
#ratings .add-rating input[type=radio] + label {
  font-size: 1.8rem;
  cursor: pointer;
  display: block;
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
#ratings .add-rating input[type=radio] {
  display: none;
}
#ratings .add-rating input[type=radio]:checked + label{
  color:red;
}
```

    
1. Your folder structure should look similar to this.

    ![](https://i.imgur.com/ASNEYNK.png)

## Exercise

- Use ng-repeat to iterate over data (you may want to Google Angular `track by $index`)
- Use ng-if to show elements

#### Bonus ideas

- Store a happiness rating along with the time that it was saved
- Write a function to calculate your average happiness rating
- Style it like a beast
- Find some clever uses for Angular directives we haven't used in class yet – there's a whole slew of documentation out there!

#### Deliverable

While yours certainly doesn't have to _look_ like this, here's one example of a finished product. We're listing out happiness ratings on the top, and the user can click one of the three options below to update the list! This example uses some clever styling with radio buttons & labels to make it look fancy.

Here is a deployed version: athlete-amanda-20133.bitballoon.com

<img width="765" alt="screen shot 2015-07-31 at 11 03 11 am" src="https://cloud.githubusercontent.com/assets/25366/9013911/cf0aaf8a-3773-11e5-82f0-943b11a6502d.png">

## Additional Resources

- [Angular Directives Docs](https://docs.angularjs.org/api/ng/directive)
- [Awesome Angular Directives cheatsheet](http://www.cheatography.com/proloser/cheat-sheets/angularjs/)
