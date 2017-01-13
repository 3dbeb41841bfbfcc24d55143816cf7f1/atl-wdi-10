# YUM!

For Lab time you will be writing a node application to practice using Mongoose. You task: create an app that tracks and stores Restaurants and Menu Items.

## Setup

You can work within this folder.  Run `$ npm install` to install all the modules listed in `package.json`.

You can seed your database by running `$ node db/seed.js` in the Terminal.

You can test your code by running `$ node index.js` in the Terminal.

## Part I: Mongoose

You'll begin by creating an app that performs CRUD functionality on a database using Mongoose queries. You should not yet be using Express.

1. Create schemas and corresponding models for a restaurant and for menu items.

2. Adds seed data for the restaurant and menu items...

  - A restaurant should have the following field names...

    * `name` - a string
    * `address` - an object with a `street` (string) and `zipcode` property (number)
    * `yelpUrl` - a string
    * `items` - an array containing your MenuItems schema

  - A menu item should contain the following...

    * `title` - a string

3. Create a new restaurant.

4. Write a function or method that finds a restaurant by `name`.

5. Write a function or method that finds all restaurants by `zipCode`.

6. Create a function that updates a restaurant.

7. Write a function or method that deletes a restaurant.

8. Write methods to add and remove embedded menu item documents for a restaurant of your choosing.

## Part II - Stretch: Add Express


Turn YUM into an Express app with routes that you can view in your browser and forms that manipulate your data with full CRUD.

Your app should have two pages...

- A page that lists all restaurants, on which a user can create a new restaurant.
- A page that lists one restaurant and all its menu items, on which a user can...
  - Delete the restaurant.
  - Update the restaurant.
  - Create a new menu item for the restaurant.
  - Delete a menu item from the restaurant.
