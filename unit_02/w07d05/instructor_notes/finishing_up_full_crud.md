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
  - connect views to our controllers
  - build a third resource into the application w/ views


## Mongoose Calls with promises


    
    // INDEX
    router.get('/', function(req, res){
      User.find({})
        .exec(function(err, users){
          if (err) { console.log(err); }
          console.log(users);
          res.render('users/index.hbs', {
            users: users
          });
        });
    });
    
    // USER UPDATE ROUTE
    router.put('/:id', function(req, res){
      User.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        email: req.body.email
      }, { new: true })
      .exec(function(err, user){
        if (err) { console.log(err); }
        console.log(user);
        res.render('users/show.hbs', {
          user: user
        });
      });
    });

#### Moral of the story

If you're querying for data in your db you're gonna want to call `exec()`.


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
  4. open the app in atom/sublime
  5. open up localhost:4000


## Views!
### Installation (5m)

  1. install and configure `hbs`
  2. install and configure `method-override`
  3. install and configure `morgan`
    
    var hbs = require('hbs')
    var methodOverride = require('method-override')
    var morgan = require('morgan')
    
    app.set('view engine', 'hbs');
    app.use(methodOverride('_method'))
    

#### Build views for student routes!

  1. create the views directory, and touch the layout file
  
    
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Users</title>
      </head>
      <body>
        <h1>USERS, ITEMS, AND OTHER THINGS</h1>
        <br/>
        <a href="/users">HOME</a>
        {{{ body }}}
      </body>
    </html>
    


  2. touch `views/users/index.hbs`
    - View should show all the students
    - Only display the first name
    - Your choice if you want to use flexbox or ul/li's
    
    <ul>
      {{#each users}}
        <li><a href="/users/{{this.id}}">{{this.first_name}}</a></li>
        <li>{{this.email}}</li>
        <br/>
      {{/each}}
    </ul>

    <a href="/users/new">Add New User</a>

  3. touch `views/users/show.hbs`
    - Each student on the `index` page should be clickable and direct the user to a show page for that specific student

    - The show page should render:
      - first_name
      - when they signed up
      - the number of items
      - an edit button on the `show` page that renders a form which makes a put/patch request to the backend
      - a destroy button on the `show` page that removes the user from the database

    <h1>{{user.first_name}}</h1>
    <div>
      <a href="/users/{{user.id}}/edit">Edit User</a>
    </div>
    <div>
      <form action="/users/{{user.id}}?_method=DELETE" method="POST">
        <input type="submit" value="Delete User"/>
      </form>
    </div>
    <ul>
      <li>First Name: {{user.first_name}}</li>
      <li>Email: {{user.email}}</li>
      <li>Sign up date: {{user.created_at}}</li>
      <li>Number of Items: {{user.items.length}}</li>
    </ul>


  4. touch `views/users/edit.hbs`
  
    <h1>Edit {{user.first_name}}</h1>
    <form action="/users/{{user.id}}?_method=PUT" method="POST">
      <div>
        <label for="first_name">
          First Name
        </label>
        <input type="text" name="first_name" value="{{user.first_name}}"/>
      </div>
      <div>
        <label for="email">
          Email
        </label>
        <input type="text" name="email" value="{{user.email}}"/>
      </div>
      <div>
        <input type="submit" value="Update User"/>
      </div>
    </form>


#### Build a views for items!
*Building from the student show page*

  1. touch `views/items/index.hbs`
    - On the student show page, add a button to see students items
    - The button should render all of the students items in an `index` view
    - add a button next to each item that deletes that item.
    
    // SHOW STUDENT
    <div>
      <a href="/users/{{user.id}}/items">See Items</a>
    </div>

    
    // INDEX ITEMS
    <ul>
      {{#each items}}
        <li>{{this.name}}</li>
        <div>
          <form action="/users/{{../user.id}}/items/{{this.id}}?_method=DELETE" method="POST">
            <input type="submit" value="Delete Item"/>
          </form>
        </div>
        <br/>
      {{/each}}
    </ul>



## _Whew!_ Done!

On your own create a third resource, `project_id`.

1. I'm slacking out the seed file to use, make sure to run `node db/seeds.js`

1. Add the `ProjectIdeaSchema` schema to the `db`
  - description, string
  - in_progress, boolean
  - created_at/updated_at
  - Make sure you are exporting the `ProjectIdeaSchema` from the schema.js
2. Create a new model called `project_idea.js`
3. Add `project_ideas` to each User object in your seed file.  Make sure to reseed your database.

3. Create a new controller in controllers called `project_ideas` the route will be `/users/:userId/project-ideas`

When you load it in the `server.js` you'll match that pattern above

4. Create a `project_ideas` directory in views

5. triple check your configuration
  - do your routes work<br>
  - is the model/schema correctly synced in `db`, `models`, and in the controller file

6. start building full CRUD w/ views!
  - create new project ideas<br>
  - show them all on an index page specific to user<br>
  - edit project ideas<br>
  - delete project ideas<br>

