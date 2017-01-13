# Screw Todos! What shouldn't you do

## ToDont Lab

You're going to rebuild with your partner what we've built over the last two days, using your partner and the repo we just documented as a resource

It's a ToDont app to help you keep track of all the things you shouldn't do!


1. Initialize a new node application.

  I recommend you build piecemeal, applying the concept of [YAGNI](https://en.wikipedia.org/wiki/You_aren't_gonna_need_it) (You Ain't Gonna Need It) Meaning, don't add the method-override module until you're going to use it, build the edit view as you build the edit route, etc.

  This will help you keep track of you're currently working on as well as making sure you don't forget something small.

  - 1a. npm init
  - 1b. add what you need in the server file
  - 1c. create the controller folder, the views folder
  - 2d. configure your router file for `toDonts`

2. add a data file

  Touch `data.js` in the root of your node project.

  copy + paste the following content

  ```js
  module.exports = {
    seededToDonts: [
      {
        description: "shove old ladies",
        urgent: true
      }, {
        description: "rob a bank",
        urgent: false
      }
    ]
  };
  ```

  Make sure your require the file in your `toDonts`router file

3. Routes!

  All four CRUD actions, 6 routes in total!

  - 3a. Create or finish configuring your router file
  - 3b. index route and view
  - 3c. show route and view
  - 3d. create route and view
  - 3e. edit route, view, and put route
  - 3f. delete route
