---
title: Binding Controller and View with Hardcoded Data
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

# Binding Controller and View with Hardcoded Data

## Introduction

Since we just learned how to set up an Angular app, and how controllers and views work, today, we'll be practicing exactly that.

Your mission is to build a new Angular app from scratch, set up multiple controllers, and render them all in a single view. This will be a quick little site for a museum with information about a future exhibit, general museum information and hours, and donor information.

Create an example Node/Express app for this lesson.

1. `mkdir museum-app` && `cd` into it

2. `npm init -y`
3. `touch server.js`

    var express = require('express');
    var app     = express();

    app.use(express.static('public'));

    app.get('/', function(req, res){
        res.render('index');
    });

    app.listen(4000, function(){
        console.log("app listening on port 4000");
    });
    
4. `npm install --save express`
5. `mkdir public`
6. `mkdir public/js`
7. `touch public/js/app.js`

    `angular.module('TheMET', []);`

8. `touch public/js/donorController.js`

    `angular.module('TheMET').controller('DonorController', DonorController);`

9. `touch public/js/exhibitController.js`

    `angular.module('TheMET').controller('ExhibitController', ExhibitController);`

10. `touch public/js/generalInfoController.js`

    `angular.module('TheMET').controller('GeneralInfoController', GeneralInfoController);`

11. `touch public/index.html`
    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Museum App</title>
      </head>
      <body>
    
      </body>
    </html>
    ```

12. Add `ng-app` to the `<html>` tag: 

    `<html ng-app="TheMET">`

13. `mkdir public/css`
14. `touch public/css/style.css`

    ```css
    body {
     margin: 2rem auto;
     max-width: 900px;
    }

    h1 {
     font-size: 3.618rem;
     text-align: center;
    }

    section {
     border-top: 1px solid silver;
    }

    img {
     max-width: 100%;
    }
    ```
    
15. Add the js, css, Angular CDN links to the `<head>` of index.html
    ```html
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
    <script src='js/app.js'></script>
    <script src='js/donorController.js'></script>
    <script src='js/exhibitController.js'></script>
    <script src='js/generalInfoController.js'></script>
    ```
16. Here is a link to the photo: http://www.metmuseum.org/~/media/Images/Exhibitions/2015/Sargent/Sargent_DIGITAL_Hero.jpg?h=360&mw=988&w=988
    
17. Your folder structure should look similar to this.

    ![](https://i.imgur.com/LEgPIqj.png)


## Exercise
     
2. Build 3 basic controllers with fake data:
  + A controller with information about an example exhibit that's coming up
  + A controller with general operation information, like hours, address, phone number, etc.
  + A controller with information for donors, like contact information for the head of the museum, what sort of donations are accepted, etc.
3. Render basic controller data in the view, with a section for each controller


#### Deliverable

A simple hardcoded Angular app with 3 controller files, an app file, and an `index.html`

<img width="752" alt="screen shot 2015-07-30 at 11 37 25 pm" src="https://cloud.githubusercontent.com/assets/25366/9002041/f942dad0-3713-11e5-838f-8670fd50c5cd.png">

## Additional Resources

- We'll learn about this in the next lesson, but if you want to tackle iterating through arrays or objects ahead of time, check out [`ng-repeat`](https://docs.angularjs.org/api/ng/directive/ngRepeat)



