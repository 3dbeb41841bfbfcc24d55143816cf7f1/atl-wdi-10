---
title: Mongoose + Express
type: lesson
duration: "1:25"
creator:
    name: Gerry Mathe
    city: London
adapted:
    name: Marc Wright
    city: ATL
competencies: Server Applications
---

# Mongoose + Express

### Objectives
*After this lesson, students will be able to:*

- Update & destroy a model
- Initialize and create a new instance of a model
- Perform basic find queries
- Reference other documents in an instance of a model
- Work with embedded and referenced documents with Mongoose

### Preparation
*Before this lesson, students should already be able to:*

- Describe how Mongo documents work
- Describe how an ORM works
- Create a basic Node app

<br>

## Using MongoDB with Node - Intro (5 mins)

This morning we created an app that used Mongoose methods and queries to add/retreive data from a database. This afternoon we are going to build an Express app using those same REST-ful methods and queries. Now, we will wrap that Mongoose code in the appropriate route. We will use Express to send and receive the JSON data. Tomorrow we will add Handlebars to render that data into views, and create a fully working app!

NodeJS and MongoDB work really well together. To handle HTTP requests and read from or send data to MongoDB, Mongoose is the most common Node.js ORM to manipulate data using MongoDB. CRUD functionality is something that is necessary in almost most every application, as we still have to create, read, update, and delete data.

Since we will be able to use JSON across our application - with Mongo and Node - using JavaScript in our application is much easier. The MEAN stack - Mongo, Express, Angular, and Node - is becoming increasingly popular because of this.

For today, we will build a simple Node app in a folder and a file app.js.

#### What Is Mongoose?

Mongoose is an object modeling package - think of it as an ORM (Object Relational Mapper) for Node.  It gives us the MongoDB CRUD commands.

<br />

## Setting up your app - Codealong (5 mins)

I have included starter code in your **w07d04/student_labs** folder called `express-mongoose-lesson-starter`

1. `cd` into the folder
2. run `npm install`
3. open the app in sublime: `subl .`
4. You need to have 4 terminal tabs open:
    - In one tab you will run `mongod`
    - In one tab you will run `nodemon server.js`
    - You will use one tab to access your `mongo` shell
    - Keep another tab open to the Terminal prompt `$`, in order to run commands


In this example, we are connecting to a local database named `express-mongoose-lesson-starter`. You can now execute all the mongoDB commands in the database `express-mongoose-lesson-starter`.

![](https://i.imgur.com/ebX8wCK.png)

<br />

### &#x1F535; YOU DO (5 minutes)

1. Set up your app
2. Take 5 minutes and familiarize yourself with the code

<br />

## Working with Models - Codealong (20 mins)


### Defining a Model

You can define methods to help automatically populate the key(s) of your model. For example, if we wanted to automatically add `updated_at` and `created_at` fields to our users:

```javascript
// in the db/schema.js

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});
```
<br />

### Adding Mongoose Validations

<details>
<summary>When might we want to use validations on our data?</summary>

- Unique email or user name
- Confirm that an email field has an `@` symbol
- Confirm that a phone field has the correct number of digits and formatting
- Confirm that form fields are not left empty
- Confirm that a password matches it's confirmation field
- Confirm that a password has a minimum number of digits or includes certain characters.

</details>

<br />

```js
// in the db/schema.js

var UserSchema = new Schema({
  first_name: String,
  last_name: String,
  email: { type: String, required: true, unique: true },
  created_at: Date,
  updated_at: Date,
  items: [ItemSchema]
});
```

Check out this morning's Mongoose Intro lesson (near the bottom) for more custom validation info. Here are the Mongoose docs: http://mongoosejs.com/docs/validation.html

<br />

## Interacting with MongoDB's CRUD - Demo (15 mins)

### Seed your database

From your Terminal prompt tab, run `$ node db/seeds.js` to seed your database. This will add 3 users to your `express-mongoose-lesson-starter` database.

<br />

&#x1F535; YOU DO 

1. Seed your database

<br />

### Users Index

For the most part, we are repeating what we did in our intro to mongoose app. However, now we are using the Express Router. Inside `usersController.js` let's add:

```javascript
// USERS INDEX ROUTE
router.get('/', function(req, res){
  User.find({})
  .exec(function(err, users) {
    if(err) { console.log(err); }
    
    console.log(users);
    res.send(users);
  });
});
```

Test it out in your browser. **NOTE - this app runs on localhost port `:4000` instead of `:3000`**

- Go to `http://localhost:4000/users/`

![](https://i.imgur.com/rUXH4Fy.png)

<br />

### &#x1F535; YOU DO - Index Route (2 minutes)

2. Add an index route for users
3. Confirm that it's working in the browser

<br />

### Users Show

```javascript
// USER SHOW ROUTE
router.get('/:id', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log(user);
    res.send(user);
  });
});
```

Test it out in your browser. Grab the `id` of one of your users and add it to the URL

- For example, go to `localhost:4000/users/57eba9b84126ce61760606d3`

![](https://i.imgur.com/vnTVrMp.png)

<br />

### &#x1F535; YOU DO - Show Route (2 minutes)

2. Add a show route for users
3. Confirm that it's working in the browser

<br />

## Postman

It is a good practice to build your app one step at a time for testing and efficency. 

- STEP 1 - This morning we created the Mongoose queries and confirmed that the code works. 
- STEP 2 - This afternoon we are going to take those working pieces of code and wrap them in Express routes. 
- STEP 3 - Tomorrow we will worry about the views, once the routes are working, etc. 

For our current app, we have not created views and forms yet, so we need a way to test our non-`.get` routes. We are going to use a tool called Postman. 

- You can download it from here: https://www.getpostman.com/. 
- Click on the "Mac App" icon.
- Open the app.

Postman is a simple app that allows us to make HTTP requests. We will also use it to mimic using forms to send data to our server.

<br />

### &#x1F535; YOU DO - Download/Open Postman (2 minutes)

<br />

## Back to CRUD

### Create
```javascript
// USER CREATE ROUTE
router.post('/', function(req, res) {
  var user = new User({
    first_name: req.body.first_name,
    email: req.body.email,
    items: req.body.items
  });
  user.save(function(err, user) {
    if(err) console.log(err);
    
    console.log(user);
    res.send(user);
  });
});
```

We will test out sending form data using Postman.

- Make sure that you are making a `POST` request.
- Make sure that you are sending the request to `localhost:4000/users/`.
- Make sure that you are on the `Body` tab and that you have `x-www-form-urlencoded` selected.
- Make sure that you have key/value pairs for `first_name` and `email`.
    - Remember that we added validations for `email` to be unique and that it is required
- Hit Send

![](https://i.imgur.com/kCL2ZA2.png)

<br />

### &#x1F535; YOU DO - Create a User (5 minutes)

1. Add the Create route
2. Confirm that the route is working by creating a new user via Postman

<br />

### Update

To update, you can write it in one of two ways (both are super easy!) - use the helper methods: `.findByIdAndUpdate()` or `.findOneAndUpdate()`:

```javascript
// USER UPDATE ROUTE
router.patch('/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    email: req.body.email
  }, {new: true})
  .exec(function(err, user) {
    if (err) console.log(err);
    
    console.log(user);
    res.send(user);
  });
});
```

We will test out sending form data using Postman.

- First, use a GET request to grab the data for a single user that you would like to update. For example, `http://localhost:4000/users/57eba9b84126ce61760606d3`
    
    ![](https://i.imgur.com/skhh8QX.png)

- Make sure that you are making a `PATCH` request.
- Make sure that you are sending the request to `localhost:4000/users/<THE USER ID YOU SELECTED>`.
- Make sure that you are on the `Body` tab and you have `x-www-form-urlencoded` selected.
- Make sure that you have key/value pairs for `first_name` and `email`.
    - Remember that we added validations for `email` to be unique and that it is required

    ![](https://i.imgur.com/xBG4pvy.png)
    
- Hit Send
- Confirm that your user has been updated by making a `GET` request to `http://localhost:4000/users/<THE USER ID YOU SELECTED>`

<br />

### &#x1F535; YOU DO - Update Your Users (5 minutes)

1. Add the Update route.
2. Confirm that the route is working by updating a user via Postman.

<br />

### Destroy

Mongoose gives you two easy helper methods to delete documents - `findByIdAndRemove()`and `.findOneAndRemove()`.

```javascript
// USER DESTROY
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if(err) console.log(err);
    
    console.log('User deleted!');
    res.send("User deleted");
  });
});
```

We will test out sending form data using Postman.

- First, use a GET request to grab the data for a single user that you want to delete. For example, `http://localhost:4000/users/57eba9b84126ce61760606d3`
- Make sure that you are making a `DELETE` request.
- Make sure that you are sending the request to `localhost:4000/users/<THE USER ID YOU SELECTED>`.
- Hit Send.
- You should see a message that says "User Deleted".

![](https://i.imgur.com/51C9YVy.png)

- Confirm that your user has been deleted by making a `GET` request to `http://localhost:4000/users/<THE USER ID YOU SELECTED>`.

<br />

### &#x1F535; YOU DO - Destroy Your Users (5 minutes)

1. Add the Delete route
2. Confirm that the route is working by deleting a user via Postman

<br />

### Embed an Item to a User Document

```javascript
// ADD A NEW ITEM
router.post('/:id/items', function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user) {
    user.items.push(new Item({name: req.body.name}));
    user.save(function(err) {
      if (err) console.log(err);
      
      res.send(user);
    });
  });
});
```

We will test out sending form data using Postman.

- First, use a `GET` request to grab the data for a single user that you would like to update. For example, `http://localhost:4000/users/57eba9b84126ce61760606d7`.
- Make sure that you are making a `POST` request to `/:id/items`. For example, `http://localhost:4000/users/57eba9b84126ce61760606d7/items`.
- Make sure that you are on the `Body` tab and you have `x-www-form-urlencoded` selected.
- Make sure that you have a key/value pair for `name`.

![](https://i.imgur.com/B2xVMmm.png)

- Hit Send.
- Confirm that the item has been added by making a `GET` request to `http://localhost:4000/users/<THE USER ID YOU SELECTED>`.

<br />

### &#x1F535; YOU DO - Embed an Item to a User Document (2 minutes)

1. Add the items create route.
2. Confirm that the route is working by embedding an item on a user via Postman.

<br />

### Remove an Item from a User

```javascript
// REMOVE AN ITEM
router.delete('/:userId/items/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.userId, {
    $pull: {
      items: {_id: req.params.id}
    }
  })
  .exec(function(err, item) {
    if (err) console.log(err);
    
    res.send(item + " Item deleted");
  });
});
```

More info on [$pull](https://docs.mongodb.com/manual/reference/operator/update/pull/)

We will test out sending form data using Postman.

- First, use a GET request to grab a single user from whom you want to remove an Item. For example, `http://localhost:4000/users/57eba9b84126ce61760606d3`
- Copy the `_id` for the item you want to remove.
- Make sure that you are making a `DELETE` request.
- Make sure that you are sending the request to `localhost:4000/users/<THE USER ID YOU SELECTED>/items/<THE ITEM ID YOU WANT TO REMOVE>`.
- Hit Send.
- You should see a message that says "Item Deleted" next to the removed Item.

![](https://i.imgur.com/GJ6R2pB.png)

- Confirm that the item has been deleted by making a `GET` request to `http://localhost:4000/users/<THE USER ID YOU SELECTED>`.

<br />

### &#x1F535; YOU DO - Remove an Item from a User (2 minutes)

1. Add the delete item route.
2. Confirm that the route is working by removing an item from a user via Postman.

<br />


## Conclusion (5 mins)
Mongoose is just a bridge to use MongoDB inside of  a Node.js environment. There are a lot of options when creating a schema with Mongoose, we have just covered a few of them.

<br />

## Lab time

- Add views and forms. Here are some sample starter steps. You should also reference the express/views/handlebars lessons and apps from last week.
    - `npm install --save hbs`
    - create a `var hbs` and require handlebars
    - set the view engine to hbs
    - create a views/users/index.hbs
    - create a layouts.hbs file
    - add handlebars to the view
    - update your INDEX route from `res.send()` to `res.render()`
- Add external css and javascript files
- Add promises to the app

<br />


<details>
<summary>Embedded Documents Review</summary>

## Independent Practice (20 mins)

Using the code we just wrote and the [official Mongoose Models docs](http://mongoosejs.com/docs/models.html), add three custom methods to models/users.js:

- `/all`, this will return all the documents
- `/create`, given some arguments in the url, this method will create a `user` record.
- `/delete/:id`, will remove the document corresponding to the collection

Try them out in the `node` terminal, if you have time.

<br />

## What are Embedded Documents? Codealong (20 mins)

**[Embedded documents](http://mongoosejs.com/docs/subdocs.html)** are just what they sound like: documents with their own schemas nested in other documents. They take the form of objects within an array.  You can think of this as a sort of `has_many` relationship - the context to use embedded documents is data entities that need to be used/viewed in the context of another.

The nested schemas are equipped with all the same features as your models: defaults, validators, middleware, and even error handling, as they are tied to the save() error callback. Mongoose can work with embedded documents by default.


Let's look at these two schemas below - we can embed `childSchema` into the property `children`:

```javascript
var childSchema = new Schema({ name: 'string' });

var parentSchema = new Schema({
  children: [childSchema]
})

var Parent = mongoose.model('Parent', parentSchema);
var parent = new Parent({ children: [{ name: 'Matt' }, { name: 'Sarah' }] })
parent.children[0].name = 'Matthew';
parent.save(function(err) {
  if (err) console.log(err);
  
  console.log('New Parent!');
});
```

Or from the MongoDB official docs, we can look at this example with Patron and Address models:

```javascript
{
   _id: "joe",
   name: "Joe Bookreader"
}

{
   patron_id: "joe",
   street: "123 Fake Street",
   city: "Faketon",
   state: "MA",
   zip: "12345"
}

{
   patron_id: "joe",
   street: "1 Some Other Street",
   city: "Boston",
   state: "MA",
   zip: "12345"
}
```

The address documents make two references to the Joe Bookreader object, so instead we can create something like this:

```javascript
{
   _id: "joe",
   name: "Joe Bookreader",
   addresses: [
                {
                  street: "123 Fake Street",
                  city: "Faketon",
                  state: "MA",
                  zip: "12345"
                },
                {
                  street: "1 Some Other Street",
                  city: "Boston",
                  state: "MA",
                  zip: "12345"
                }
              ]
 }
```

Note that sub-documents do not save individually, only with the highest-level document.  In this case, the addresses are saved with the Joe Bookreader Patron document.

<br />

### Finding a Sub-Document

All documents in Mongoose have an  `_id`.  Look above at our Patron example.  Joe Bookreader has an `_id` of 'joe'. DocumentArrays have a special `id` method for looking up a document by its _id.

```javascript
// in our first example
var doc = parent.children.id(id_you_are_looking_for);

// in the second example
var doc = patron.addresses.id(id_you_are_looking_for)
```

<br />

### Adding and Removing Sub-Docs

Remember JavaScript's array methods like `pop` or `push`?  We'll, Mongoose comes with MongooseArray methods like as `push`, `unshift`, `addToSet`, and others.  And because we can add them, we can also remove them with `remove()`.

Using code from the official docs, we can see how these are used:

```javascript
var Parent = mongoose.model('Parent');
var parent = new Parent;

// create a child- it was Liesl, but I changed it to Diesel
parent.children.push({ name: 'Diesel' });
var subdoc = parent.children[0];
console.log(subdoc); // { _id: '501d86090d371bab2c0341c5', name: 'Diesel' }
subdoc.isNew; // true

parent.save(function (err) {
  if(err) { return handleError(err); }
  
  console.log('Success!');
});

//remove

var doc = parent.children.id(id_you_are_looking_for).remove();
parent.save(function (err) {
  if(err) { return handleError(err); }
  
  console.log('the sub-doc was removed');
});

```

Sub-docs may also be created without adding them to an array by using the **create** method from MongooseArrays.

```javascript
var newdoc = parent.children.create({ name: 'Gus' });
```

</details>


