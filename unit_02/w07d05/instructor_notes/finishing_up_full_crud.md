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


## Setup (5m)

You can use your own code from yesterday if it's more or less complete.

#### Using your own code

  1. copy and paste the app from `w07d04/student_labs` to todays student_labs directory

#### Using the Marc's solution from yesterday for todays starter

  1. cd into `student_labs/full-crud-starter`

#### Prep your code-base

  1. $`npm install`
  2. start nodemon and mongod. Make sure there are no errors
  3. node db/seeds.js
  4. open the app in atom
  5. open up localhost:4000


## Views!
### Installation (5m)

  1. install and configure `hbs`
  2. install and configure `method-override`
  3. install and configure `morgan`

  Refer to https://github.com/ga-students/todo_crud_app or your notes for help.

#### Build views for student routes!

  1. create the views directory, and touch the layout file

  2. touch `views/users/index.hbs`
    - View should show all the students
    - Only display the first and last name
    - Your choice if you want to use flexbox or ul/li's

  3. touch `views/users/show.hbs`
    - Each student on the `index` page should be clickable and direct the user to a show page for that specific student

    - The show page should render:
      - first_name
      - last_name
      - when they signed up
      - the number of items

  4. touch `views/users/edit.hbs`

    - Each student should have an edit button on the `show` page that renders a form which makes a put/patch request to the backend

  5. destroy
    - No view necessary, but a button would be nice, on each show page

#### Build a views for items!
*Building from the student show page*

  1. touch `views/items/index.hbs`
    - On the student show page, add a button to see students items

    - The button should render all of the students items in an `index` view

    <!-- b. Each project should be clickable and direct the user to a project show page. [HINT] The project \_id should be imbedded in the DOM in order to populate the url -->

  2. On the item `index` page add a button next to each item that deletes that item.

## _Whew!_ Done!

On your own create a third resource, `project_idea`.

1. Add the schema to the `db`
  - description, string
  - in_progress, boolean
  - created_at/updated_at
2. Create a new controller in controllers called `project_ideas` the route will be `/users/:id/project-ideas`

When you load it in the `server.js` you'll match that pattern above

3. Create a `project_ideas` directory in views

4. triple check your configuration
  - do your routes work<br>
  - is the model/schema correctly synced in `db`, `models`, and in the controller file

5. start building full CRUD w/ views!
  - create new project ideas<br>
  - show them all on an index page specific to user<br>
  - edit project ideas<br>
  - delete project ideas<br>
