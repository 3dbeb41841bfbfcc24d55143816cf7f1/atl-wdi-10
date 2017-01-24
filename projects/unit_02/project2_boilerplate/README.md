# Boilerplate Project 2

This is boilerplate for your Express project, so there are several things you'll need to add, create and change before you're ready to start working on your project.

1. You'll need to create your project two repo and clone or create it locally.

2. You'll copy the boilerplate code to your project two repo.

  Your file structure should look like the following:

  ```
    |- MySweetProject
    |
    | -- controllers
    | -- db
    | -- helpers
    | -- models
    | -- public
    | -- views
    | -- package.json
    | -- server.js
  ```
3. Update the package.json

  - Update the name of your project. It's currently called `"name": "boilerplate"`.
  - Update the author of your project from `"author": "boilerplate"` to your name.

4. Update the server file

  - `mongoose.connect` is currently commented out. Uncomment it and complete the URL with the name of *YOUR* database.

# What does the boilerplate contain?

The basic file and directory structure.

#### controllers

Including the template for `sessions.js` and `users.js` controllers. The routes are not filled in but are set up with the correct middleware.

#### Models/Schema

There is a default user set up with email, password_digest, created_at and updated_at. You can modify the attributes of the user as much as you want or need. You might not want users to signup with email for example. It's up to *you.*

#### Public directory

No content exists in the public directory.

#### Views, user views, and layout

The view directory contains a users directory which has two empty views for login and signup as well as a layout file.

#### Package.json

You'll still need to update the package.json, but the basic modules you need are already there:

  - bcrypt
  - body-parser
  - express
  - express-session
  - hbs
  - method-override
  - mongoose
  - morgan`

#### server.js

With all the configuration for method-override, body-parser, morgan, sessions, express, mongoose, and HBS.

The configuration for loading/routing to the users and sessions controller.

The only thing *NOT* included is the configuration for serving the public directory statically. You'll need to set that up yourself.

# What is NOT included

- Content in the views
- Code in the routes
- configuration for serving the public directory statically
