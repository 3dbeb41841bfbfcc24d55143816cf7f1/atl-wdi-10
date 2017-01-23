# Summer Bucket List w/ Authentication

In tonight's assignment, you will be creating a full CRUD MEN app with Authentication and two models (User and List).

## Exercise Objectives
  - build upon boilerplate authentication code
  - gain more practice building a second resource, routes, and views
  - gain an extra round of using Mongoose schemas and models
  - gain more muscle memory for using git to commit changes

## Setup
  - run `npm install` to download all dependencies
  - The majority of the app's folder structure is set up for you. You are also provided:
    - boilerplate authentication code from today's lesson
    - CSS Styling. To deactivate, remove the `link` from `layout.hbs`
  - This app will be running on `localhost:4000/users`
  - Don't forget to open `mongod` and `mongo` in separate terminal windows

  Example app structure:

  ![image](https://i.imgur.com/u42X1Ea.png)

## Directions

### Part 1: Modify the User

So far we have a User Model that only has `email` and `password_digest`. Add at least 2 more properties `username` and `list` to the User model. We'll have to change a few things:

  1. **User Schema** In `db/schema.js`, update the User Schema to include `username: String` and `list: [ListSchema]`:

  ```
  var UserSchema = new Schema({
    username: String,
    email: String,
    password_digest: String,
    list: [ListSchema],
    created_at: Date,
    updated_at: Date
  });
  ```
  
     🎯 Git add, and commit -m "updated user schema"


  2. **Sign Up Form** We have to make sure the user signs up with this new information. The only extra thing we'll want them to sign up with is their `username`. We don't need them to sign up their `list` because they will be adding list items _after_ they sign up. In `views/users/signup.hbs`, add another `div` with an `input` for the `username`.

  <details><summary>Answer: </summary>
  
  ```
  <div>
    <label for="username">username</label>
    <input type="text" name="username">
  </div>
  ```
  </details>

     🎯 Git add, and commit -m "updated signup form"
    

  3. **Post Route** Finally, we have to fix our post route that creates the `User` object to include the new property so that it saves it in the database. In `controllers/users.js`'s `router.post('/')`, update `var user` to include the `username` property.

  <details><summary>Answer: </summary>
  ```
  var user = new User({
    username: req.body.username,
    email: req.body.email,
    password_digest: res.hashedPassword
  });
  ```
  </details>

     🎯 Git add, and commit -m "updated User post route"

  4. Check your work! Run `nodemon` and on `localhost:4000/users` try signing up as a new user with a username. You can also double check the user in the `mongo` shell directly and see `username` is now part of the User model.



### Part 2: Creating the List Model and Schema

Now that the user is set up, let's add a second resource `list`.

  1. **List Schema** In `db/schema.js`, let's add a new schema called `ListSchema`. The list collection will look like this:

  ```
  {
    name: "Deep sea diving",
    completed: false
  }
  ```

  <details><summary>Answer: </summary>
  ```
  var ListSchema = new Schema({
  	name: String,
    complete: Boolean
  });
  ```
  </details>

  Not done with this file yet! Save the list model as ListModel, and add it to your `module.exports`. Refer to the existing `User` model and export.

  2. **List Model** In `models`, `touch list.js`. This is where you will require and export your List Schema. We separate models in their own files. Refer to `models/user.js` to see how we require the `db.schema` folder.

  3. 🎯 Git add, and commit -m "created List schema and model"


### Part 3: Add Authentication Middleware

Before we start building routes, we want to think about what access users will have. In this app, users will not be authorized to view show pages that don't belong to them; they can only view their own show page. How can we do this?

On the user show route, we can add a middleware function that checks who the logged in user is, and if they visit their own show route, grant access. Else, we'll display an error message restricting access.

1. In `helpers/auth.js` create one more function called `authorized`. This function will check if there is a currentUser in `req.session` OR if the currentUser's `._id` matches the id in `req.params.id` (or however you choose to name the id). IF this isn't the case, send a JSON 404 object.

2. Middleware functions require the `next()` function so that it could move onto the next function upon completion. So add `next()` at the end of the `authorized` function.

3. We created the function, but we still have to use it somewhere. Back in `controllers/users.js` we are restricting access on the `router.get('/:id')` route, so call the `authorized` function here. Be mindful how to reference it.

<details><summary>Hint: </summary>

  The middleware function will go in the middle of the route path and callback function. But since we coded it in a different file and exported it in `helpers/auth.js`, and since we required the module on our controller file as `authHelpers`, you will use `authHelpers.authorized` for it to be found.

  ```
  router.get('/:id', authHelpers.authorized, function(req, res){
    //your route
  }
  ```
</details>

This means, whenever the server gets a request to the show route, before the request/response callback function it will first check our middleware function. If it passes, we continue with the function. Else, an error message is displayed and the request gets terminated.

4. 🎯 Git add, and commit -m "added authentication authorization middleware"

### Part 4: Adding Routes

Because we have 2 resources (User and List), we are going to separate the controllers into `users.js` and `lists.js.` Because `list` is embedded into the User model, we still have to require both the List and User models in the controller. We _could_ write all our functionality in 1 single controller page, but let's keep practicing "separation of concerns" and make sure we feel good about the flow of all the moving pieces in the app.

- In `server.js`. First things first, let's declare our routes and controllers in the server file. Altogether we will declare 3:

  - `app.use("/session")` This is already provided.
  - `app.use("/users")` This is also provided.
  - `app.use("/users/:id/lists")` You will create and set this route. All CRUD actions made to the `List` resource will be routed to a `ListController`.
  - 🎯 Git add, and commit -m "set up server.js"

- In `controllers/users.js` you will have:
  - GET "/" that displays all users on the index page
  - GET "/signup" that simply renders the signup page
  - GET "/:id" route that shows the page ONLY IF it's the current user's session. Else, redirect to an error page that says "Oops! You are not authorized."
  - POST "/" that saves the user username, email, and password, and redirects back to the login screen
  - 🎯 Git add, and commit after each route

- In `controllers/lists.js` you will have:
  - GET "/:id/edit" route that renders the list's edit page
  - POST "/" route that saves the list item to the logged in user
  - PUT "/:id" route that updates the changes made to the list
  - DELETE "/:id" route that deletes the list item.
  - Remember this controller is for the `localhost:4000/users/:id/lists` resource.
  - 🎯 Git add, and commit after each route

#### Testing your routes

Again, before we deal with views, you can test your routes using Postman. Use meaningful console logs in your code so you can monitor what data and routes are being accessed and handled.

### Part 5: Adding views

Because we are using 2 resources, we are going to create 2 view folders for each of them. Instead of creating separate views for each CRUD action, we'll combine some of them onto one view page:

- In `view/users`:
  - `index.hbs` lists all users usernames which links to their show page
  - `show.hbs`:
    - displays user's username
    - displays list of bucket list items each with a link to the edit page
    - displays a form to add new items on their list
  - `login.hbs` shows a login form via email/password
  - `signup.hbs` shows a form to create a new User (username, e-mail, password)

- In `views/lists`:
  - `edit.hbs` shows a form to edit the list and has a button to delete the item

## Reach Goals

- On `view/users/show.hbs`, add a "did it" button for each list item. When the user clicks on the button, the list item `name` will show up in a "Completed Bucket List Items" section. Since `List` only has two properties (name and complete), is there a way to UPDATE the `complete` property when clicked..?

- Add a 3rd model of your choice. Some suggestions:
  - Favorites: any list item can be "favorited" and the main page will list recently favorited bucket list items.
  - Comments: any list item can have comments. Clicking on the list item will display the comments the user has made for that item.

## Submitting Your Work

    When you're ready to submit your work,

    1.  Add, commit, and push your code to your fork of the class repo.
    2.  File an issue on the class repo titled "Your Name -- wXXdXX".

    The issue should include:

    -   A link that points back to your fork.

    -   A 'comfort' score on how you feel about the material, from 1 (very
        uncomfortable) to 5 (very comfortable)
