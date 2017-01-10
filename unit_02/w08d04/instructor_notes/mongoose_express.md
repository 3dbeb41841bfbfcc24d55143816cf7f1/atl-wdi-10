---
title: Mongo-backed Models with Mongoose
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

# Mongo-backed Models with Mongoose

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

NodeJS and MongoDB work really well together. To handle HTTP requests and read from or send data to MongoDB, Mongoose is the most common Node.js ORM to manipulate data using MongoDB: CRUD functionality is something that is necessary in almost most every application, as we still have to create, read, update, and delete data.

Since we'll be able to use JSON across our application - with Mongo and Node - using JavaScript in our application is much easier. The MEAN stack - Mongo, Express, Angular, and Node - is becoming increasingly popular because of this.

For today, we will build a simple Node app in a folder and a file app.js.

#### What Is Mongoose?

Mongoose is an object modeling package - think ORM for Node; this gives us the MongoDB CRUD commands.

<br>

## Setting up your app - Codealong (5 mins)

I've included starter code in your student labs folder here: https://github.com/ga-students/wdi-remote-r2d2/tree/master/unit_02/w06d03/student_labs

1. `cd` into the folder
2. run `npm install`
3. open the app in atom: `atom .`
4. You need to have 4 terminal tabs open:
    - In one tab you'll run `mongod`
    - In one tab you'll run `nodemon app.js`
    - You'll use one tab to access your `mongo` shell
    - Keep another tab open to  the Terminal prompt `$` to run commands


In this example, we are connecting to a local database named `family-tree`. You can now execute all the mongoDB commands over the database `family-tree`.

<br>

&#x1F535; YOU DO

1. Set up your app
2. Take 5 minutes and familiarize yourself with the code

<br>

## Working with Models - Codealong (20 mins)


#### Defining a Model

Further, you can define methods to help automatically populate key(s) of your model. For example:

```javascript
UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});
```

<br>

## Interacting with MongoDB's CRUD - Demo (15 mins)


####Seed your database

From your Terminal prompt tab, run `$ node db/seeds.js` to seed your database. This will add 3 users to your `family-tree` database.

<br>

#### Users Index

We can use the JavaScript equivalent of `.all`, `.find_by_`, and `.find` to get a hold of what we're looking for.

Inside `users.js` let's add:

```javascript
// USERS INDEX ROUTE
router.get('/', function(req, res){
  User.find({}, function(err, users){
    console.log(users);
    res.send(users);
  });
});
```

Test it out in your browser

- Goto `http://localhost:4000/users/`

![](https://i.imgur.com/rUXH4Fy.png)

<br>

&#x1F535; YOU DO - Index Route

1. Seed your database
2. Add an index route for users
3. Confirm that it's working in the browser

<br>




#### Users Show

```javascript
// USER SHOW ROUTE
router.get('/:id', function(req, res){
  User.findById(req.params.id, function(err, user) {
    console.log(user);
    res.send(user);
  });
});
```

Test it out in your browser. Grab the `id` of one of your users and add it to the URL

- For example, goto `localhost:4000/users/57eba9b84126ce61760606d3`

![](https://i.imgur.com/vnTVrMp.png)

<br>

&#x1F535; YOU DO - Show Route

2. Add a show route for users
3. Confirm that it's working in the browser

<br>

## Postman

Today we're goning to test our routes using a tool called Postman. 

- Go download it from here: https://www.getpostman.com/. 
- Click on "Mac App".
- Open the app

Postman allows us to make HTTP requests. We'll also use it to mimic using forms to send data to our server.

<br>

&#x1F535; YOU DO - Download Postman

1. Go download it from here: https://www.getpostman.com/. 
1. Click on "Mac App".
1. Open the app

<br>

##Back to CRUD

#### Create
```javascript
// USER CREATE ROUTE
router.post('/', function(req, res){
  var user = new User({
    first_name: req.body.first_name,
    email: req.body.email,
    items: req.body.items
  });
  user.save(function(err, user){
    console.log(user);
    res.send(user);
  });
});
```

We'll test out sending form data using Postman

- Make sure you're making a `POST` request
- Make sure you're sending the request to `localhost:4000/users/`
- Make sure you're on the `Body` tab and you have `x-www-form-urlencoded` selected
- Make sure you have key/value pairs for `first_name` and `email`
    - Remember that we added validations for `email` to be unique and that it's required
- Hit Send

![](https://i.imgur.com/kCL2ZA2.png)

<br>

&#x1F535; YOU DO - Create users

1. Add the Create route
2. Confirm the route is working by creating a new user via Postman

<br>

#### Update

For update, you can do it in one of two ways (that are super easy!) - using `.findByIdAndUpdate()` or `.findOneAndUpdate()`:

```javascript
// USER UPDATE ROUTE
router.patch('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    email: req.body.email
  }, {new: true}, function(err, user) {
    res.send(user);
  });
});
```

We'll test out sending form data using Postman

- First, use a GET request to grab the data for a single user that you want to update. For example, `http://localhost:4000/users/57eba9b84126ce61760606d3`
    
    ![](https://i.imgur.com/skhh8QX.png)

- Make sure you're making a `PATCH` request
- Make sure you're sending the request to `localhost:4000/users/<THE USER ID YOU SELECTED>`
- Make sure you're on the `Body` tab and you have `x-www-form-urlencoded` selected
- Make sure you have key/value pairs for `first_name` and `email`
    - Remember that we added validations for `email` to be unique and that it's required

    ![](https://i.imgur.com/xBG4pvy.png)
    
- Hit Send
- Confirm that your user has been updated by making a `GET` request to `http://localhost:4000/users/<THE USER ID YOU SELECTED>`

<br>

&#x1F535; YOU DO - Update users

1. Add the Update route
2. Confirm the route is working by updating a user via Postman

<br>

#### Destroy

Mongoose gives you two easy methods to delete documents - `findByIdAndRemove()`and `.findOneAndRemove()`.

```javascript
// USER DESTROY
router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) console.log(err);
      console.log('User deleted!');
      res.send("User deleted");
  });
});
```

We'll test out sending form data using Postman

- First, use a GET request to grab the data for a single user that you want to update. For example, `http://localhost:4000/users/57eba9b84126ce61760606d3`
- Make sure you're making a `DELETE` request
- Make sure you're sending the request to `localhost:4000/users/<THE USER ID YOU SELECTED>`    
- Hit Send
- You should see a message that says "User Deleted"

![](https://i.imgur.com/51C9YVy.png)

- Confirm that your user has been deleted by making a `GET` request to `http://localhost:4000/users/<THE USER ID YOU SELECTED>`

<br>

&#x1F535; YOU DO - Destroy users

1. Add the Delete route
2. Confirm the route is working by deleting a user via Postman

<br>

#### Embed an Item inside a User

```javascript
// ADD A NEW ITEM
router.post('/:id/items', function(req, res){
  User.findById(req.params.id, function(err, user){
    user.items.push(new Item({name: req.body.name}))
    user.save(function(err){
      res.send(user);
    });
  });
});
```

We'll test out sending form data using Postman

- First, use a `GET` request to grab the data for a single user that you want to update. For example, `http://localhost:4000/users/57eba9b84126ce61760606d7`
- Make sure you're making a `POST` request to `/:id/items`. For example, `http://localhost:4000/users/57eba9b84126ce61760606d7/items`
- Make sure you're on the `Body` tab and you have `x-www-form-urlencoded` selected
- Make sure you have a key/value pair for `name`

![](https://i.imgur.com/B2xVMmm.png)

- Hit Send
- Confirm that the item has been added by making a `GET` request to `http://localhost:4000/users/<THE USER ID YOU SELECTED>`

<br>

&#x1F535; YOU DO - Embed an Item to a User

1. Add the route
2. Confirm the route is working by embedding an item on a user via Postman

<br>

#### Remove an Item from a User

```javascript
// REMOVE AN ITEM
router.delete('/:userId/items/:id', function(req, res){
  User.findByIdAndUpdate(req.params.userId, {
    $pull:{
      items: {_id: req.params.id}
    }
  }, function(err, item){
    if(!err){
      res.send(item + " Item deleted");
    }
  });
});
```

We'll test out sending form data using Postman

- First, use a GET request to grab a single user from whom you want to remove an Item. For example, `http://localhost:4000/users/57eba9b84126ce61760606d3`
- Copy the `_id` for the item you want to remove
- Make sure you're making a `DELETE` request
- Make sure you're sending the request to `localhost:4000/users/<THE USER ID YOU SELECTED>/items/<THE ITEM ID YOU WANT TO REMOVE>`    
- Hit Send
- You should see a message that says "Item Deleted" next to the removed Item

![](https://i.imgur.com/51C9YVy.png)

- Confirm that the item has been deleted by making a `GET` request to `http://localhost:4000/users/<THE USER ID YOU SELECTED>`

<br>

&#x1F535; YOU DO - Remove an Item from a User

1. Add the route
2. Confirm the route is working by removing an item from a user via Postman

<br>


## Conclusion (5 mins)
Mongoose is just a bridge to use MongoDB inside a NodeJS environment. There are a lot of options when creating a schema with Mongoose, we've just seen a few for the moment.

<br>

## Labtime

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

<br>


<details>
<summary>Embedded Documents Review</summary>

## Independent Practice (20 mins)

Using the code we just wrote and the [official Mongoose Models docs](http://mongoosejs.com/docs/models.html), add three custom methods to models/users.js:

- `/all`, this will return all the documents
- `/create`, given some arguments in the url, this method will create a `user` record.
- `/delete/:id`, will remove the document corresponding to the collection

Try them out in the `node` terminal, if you have time.

<br>

## What are embedded documents? Codealong (20 mins)

> Note: Go slowly through this section as we anticipate students having trouble

Embedded documents are just what they sound like: documents with their own schemas nested in other documents. They take of the form of objects within an array.  You can think of this as a sort of `has_many` relationship - the context to use embedded documents is data entities need to be used/viewed in context of another.

The nested schema are equipped with all the same features as your models: defaults, validators, middleware, and even error handling, as they are tied to the save() error callback; and Mongoose can work with embedded documents by default.


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

Or from mongoDB official docs, we can look at this example with Patron and Address models:

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

The address documents make two references to the Joe Bookreader object, so instead we can:

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

Note that sub-documents do not save individually, only with the highest-level document; in this case, the addresses are saved with the Joe Bookreader Patron document.

#### Finding a sub-document

All documents in Mongoose have an  `_id`.  Look above at our Patron example.  Joe Bookreader has an `_id` of 'joe'. DocumentArrays have a special `id` method for looking up a document by its _id.

```javascript
// in our first example
var doc = parent.children.id(id_you_are_looking_for);

// in the second example
var doc = patron.addresses.id(id_you_are_looking_for)
```

#### Adding and Removing sub-docs

Remember Ruby methods like `pop`, `push`, or the `<<` operator?  We'll, Mongoose comes with MongooseArray methods like as `push`, `unshift`, `addToSet`, and others.  And just like adding them, we can remove them with `remove()`

Using code from the official docs, we can see how these are used:

```javascript
var Parent = mongoose.model('Parent');
var parent = new Parent;

// create a child
parent.children.push({ name: 'Liesl' });
var subdoc = parent.children[0];
console.log(subdoc) // { _id: '501d86090d371bab2c0341c5', name: 'Liesl' }
subdoc.isNew; // true

parent.save(function (err) {
  if (err) return handleError(err)
  console.log('Success!');
});

//remove

var doc = parent.children.id(id_you_are_looking_for).remove();
parent.save(function (err) {
  if (err) return handleError(err);
  console.log('the sub-doc was removed')
});

```

Sub-docs may also be created without adding them to the array by using the create method of MongooseArrays.

```javascript
var newdoc = parent.children.create({ name: 'Aaron' });
```


</details>


