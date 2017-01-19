---
title:  Finishing up Full Crud
type: lesson
duration: '2:00'
creator:
    name: Colin Hart
    class: WDIr-matey
---

## Lesson Objectives

  - Review structure of mongoose calls
  - Walk through mongoose docs
  - connect views to our controllers
  - build a third resource into the application w/ views


## Mongoose Calls with promises
#### [mongoose promise docs](http://mongoosejs.com/docs/promises.html)
#### [switching out cbs with promises in mongoose](http://eddywashere.com/blog/switching-out-callbacks-with-promises-in-mongoose/)


Read the documentation link (5m) if you finish, start in on the other one.

#### Moral of the story

You won't need `.exec()` for things like create, update, save. But if you're querying for data in your db you're gonna want to call `exec()`.


## Views!

#### Build views for student routes!

  1. index
    a. Should show all the students

  2. show
    a. Each student should be clickable and direct the user to a show page for that specific student

    b. The show page should render a list of the students projects

  3. update

    a. Each student should have an edit button that renders a form which makes a put request to the backend

  4. destroy
    a. No view necessary, but a button would be nice!

#### Build a views for projects!
*Building from the student show page*

  1. On the student show page, add a button to see students projects
    a. The button should render all of the students projects

    b. Each project should be clickable and direct the user to a project show page. [HINT] The project \_id should be imbedded in the DOM in order to populate the url

  2. Build a show page for student projects
    Show page should have an edit button and a delete button
