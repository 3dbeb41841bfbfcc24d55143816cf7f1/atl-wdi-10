# Intro to Mongoose + Embedded Documents

## Learning Objectives

- Differentiate between NoSQL and SQL databases.
- Explain what Mongoose is.
- Describe the role of Mongoose schema and models.
- Use Mongoose to perform CRUD functionality.
- List and describe common Mongoose queries.
- Persist data using Mongoose embedded documents.
- Describe how to use validations in Mongoose.

<br>

## Opening Framing (10 minutes / 0:10)

Before we dive into Mongoose, let's talk a bit about about yesterday's Mongo/NoSQL lesson. **What are some of your takeaways?**

#### What is a NoSQL database?

A NoSQL database is a non-relational database.

* This means no explicit one-to-one, one-to-many and many-to-many relationships.
* That being said, we can emulate these relationships in a NoSQL database.

#### How is a NoSQL database organized?

A NoSQL database can be organized into **documents** and **collections**.

* Collections are the NoSQL equivalent of tables in a SQL database.
* Documents are the NoSQL equivalent of a table row.

> This is not the only way that a NoSQL database organizes data. Start [here](http://rebelic.nl/2011/05/28/the-four-categories-of-nosql-databases/) to learn more.

#### What is MongoDB?

A NoSQL database that stores information as JSON.

* Technically, it's BJSON -- "binary JSON."

#### Why use NoSQL/Mongo over SQL?

It's flexible.

* You don't need to follow a schema if you don't want to. This might be helpful with non-uniform data.
* That being said, you can enforce consistency using schemas. In fact, we'll be doing that in today's class.

It's fast.

* Data is "denormalized" in a NoSQL data, meaning that it's all in the same place.
* For example, a post's comments will be nested directly within the post in the database.
* This is unlike a relational database, in which we need to make queries to retrieve data connected through a relation.

Many web apps already implement object-oriented Javascript.

* If we're using objects in both the back-end and front-end, that makes handling and sending data between the client and a database much easier.
* No need for type conversion (e.g., making sure a Ruby hash is being served as JSON).

#### What are some example MongoDB commands?

Even though you won't be writing much Mongo in WDI, we will be using some MongoDB CLI commands to test what's in our database in this class. Examples include...

* `show dbs` - Show a list of all databases
* `use database-name` - Connect to a database
* `show collections` - List the collections in a database
* `db.students.find()` - List all students in a student collection


#### Data Format

![](https://i.imgur.com/ZAQOhhY.png)

- A MongoDB database consists of _collections_ of _documents_.
- A _document_ in MongoDB is composed of _field_ (key) and _value_ pairs.

Lets take a look of what a MongoDB _document_ may look like:

```js
{
    _id: ObjectId("5099803df3f4948bd2f98391"),
    name: { first: "Alan", last: "Turing" },
    birth: new Date('Jun 23, 1912'),
    death: new Date('Jun 07, 1954'),
    contribs: [ "Turing machine", "Turing test", "Turingery" ],
    views: 1250000
}
```

__What does this data structure remind you of?__ JSON!

A MongoDB _document_ is very much like JSON, except it is stored in the database in a format known as _BSON_ (think - _Binary JSON_).

_BSON_ basically extends _JSON_ with additional data types, such as __ObjectID__ and __Date__ shown above.

#### The Document *_id*

The *_id* is a special field represents the document's _primary key_ and will always be listed as the first field. It must be unique.

We can explicitly set the *_id* like this:

```js
{
  _id: 2,
  name: "Suzy"
}
```
or this...

```js
{
  _id: "ABC",
  name: "Suzy"
}
```
However, it's more common to allow MongoDB to create it implicitly for us using its _ObjectID_ data type.

<br>

## Mongoose (5 minutes / 0:15)

![mongoose.js](https://www.filepicker.io/api/file/KDQZV88GTIaQn6p0GagE)

> "Let's face it, writing MongoDB validation, casting and business logic boilerplate is a drag. That's why we wrote Mongoose."

Mongoose is an ODM (Object Data Mapping), that allows us to encapsulate and model our data in our applications. It gives us access to additional helpers, functions and queries to simply and easily preform CRUD actions.

Mongoose will provide us with the similar functionality to interact with MongoDB and Express as Active Record did with PostgreSQL and Rails.

> Active Record is an ORM (Object Relational Mapper). An ODM is the same thing without relations.

Here's an example of some Mongoose code pulled from  [their documentation](http://mongoosejs.com).

```js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zilda' });

kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
});
```

<br>

## I Do: Set Up for Mongoose Intro Lesson App (5 minutes / 0:20)

1. Create a new project folder in your `/w07d04/student_labs` folder: `$ mkdir mongoose-intro-lesson`

2. `cd` into the new folder. 
3. `$ npm init -y`

3. Create a new database directory inside that folder: `$ mkdir db`

4. Create the following files: `$ touch server.js db/schema.js db/seeds.js`

5. Open the app in atom: `$ atom .`

Your folder structure should look like so:

![](https://i.imgur.com/Mc52tFo.png)

<br>

&#x1F535; YOU DO

Walk through the previous steps to set-up your app

<br>

## I Do: Mongoose and Connection Set Up (5 minutes / 0:25)

For today's in-class Mongoose demonstrations, we will be creating an app that uses two models: `Students` and `Projects`. 

Let's begin by installing Mongoose...

```bash
$ npm install --save mongoose
```

In order to have access to `mongoose` in our application, we need to explicitly require mongoose and open a connection to the database we specify

```js
// db/schema.js

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');
```

The name above `students` will be the name of the app's Mongo database. A cool feature of Mongo is that we don't have to create this database initially. If the database doesn't exist Mongo will instantiate it the first time you try to save something. 

```js
// db/schema.js

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

// Use ES6 native promises. We're specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

// Now that we're connected, let's save that connection to the database in a variable. We're just doing this to be DRY.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err){
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
  console.log("database has been connected!");
});

// Disconnect from database
db.close();
```

Now let's run our `db/schema.js` file:

```bash
$ node db/schema.js
```

<br>


&#x1F535; **YOU DO**

Walk through the previous steps

<br>

## Mongoose Schema & Models (10 minutes / 0:40)

#### What is a Mongoose Schema?

* Everything in Mongoose starts with a Schema!
* Mongo is schema-less and doesn't require much structure (but it's still a good idea to use a schema)
* Schemas are used to define attributes and structure for our documents.
* Each Schema maps to a MongoDB collection and defines the shape of the documents within that collection.

Here's an example of a Mongoose schema...

```js
// db/schema.js

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: String,
  age: Number
});
```

> Mongo will add a primary key to each object using `ObjectId`. This will be referenced as an `id` property on each new instance of the object.

#### What are Mongoose Models?

Mongoose Models will represent documents in our database.

* They are essentially constructors, which will allow us to preform CRUD actions with our MongoDB Database.
* Models are defined by passing a Schema instance to `mongoose.model`.

```js
// db/schema.js

var Schema = mongoose.Schema;

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
var StudentSchema = new Schema({
  name: String,
  age: Number
});

var StudentModel = mongoose.model("Student", StudentSchema);
```

`.model()` makes a copy of schema.

* The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural version of your model name.
* That means the model `Student` is for the `students` collection in the database.


<br>

&#x1F535; **YOU DO**

Add the code above to your `db/schema.js` file

<br>

### Mongoose - Schema - Model Summary
_Mongoose_ is an _ODM_ - an **O**bject **D**ocument **M**apper - i.e. it maps objects to documents. Therefore, Mongoose gives us the ability to do _CRUD_ operations on a _MongoDB_ database using JavaScript objects as our model objects.

> A _model_ object is an object whose primary concern is to hold data and represent an instance of a Domain Model. For example, if we were developing an application for Delta, we might have Domain Models for Airports, Flights, Passengers, Luggage, etc.  Instances of an Airport Domain Model might be ATL, LAX, ORD, DFW, etc.

![Object Document Mapping](https://i.imgur.com/YhAXdCB.png)

<br>

## Collections: Embedded Documents & References (10 minutes / 0:50)

Let's add another model to our `db/schema.js`.

* We will be adding a schema for `Project`, since I want to create an application that tracks Students and Projects.
* Like a one-to-many relationship in a relational database, a Student will have many Projects.

In Mongoose, we will do this using **embedded documents**.

### I Do: Embedded Documents

[Embedded Documents](http://mongoosejs.com/docs/2.7.x/docs/embedded-documents.html) -- sometimes referred to as "sub-documents" -- are schemas of their own which are elements of a parent document's array

* They contain all the same features as normal documents.


```js
// db/schema.js

var ProjectSchema = new Schema({
  title: String,
  unit: String
});

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ProjectSchema]
});

var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);
```
> The projects key of your `StudentSchema` documents will contain a special array that has specific methods to work with embedded documents.
>
> The Project Schema must be defined prior to our main Student Schema.

#### Advantages
* Easy to conceptualize and set up.
* Can be accessed quickly.

#### Disadvantages
* Don't scale well. Documents cannot exceed 16MB in size.

> If you find that you are nesting documents within documents for 3+ levels, you should probably look into a relational database. Scroll to the bottom for more info.

<br>

&#x1F535; **YOU DO**

Set Up Schema and Models for Projects

<br>

## CREATE Students and Projects (10 minutes / 1:20)

First let's create an instance of our Student model. Here's one way of doing it...

```js
// db/schema.js

// First we create a new student. It's just like generating a new instance with a constructor function!
var chuck = new StudentModel({name: "Chuck", age: 30});

// Then we save it to the database using .save
chuck.save(function(err, student){
  if(err){
    console.log(err);
  } else {
    console.log(student);
  }
});
```

Run `node db/schema.js` in the Terminal to run the code. We can also consolidate that into a single `.create` method, like so...

```js
// db/schema.js

StudentModel.create({ name: 'Chuck', age: 30 }, function (err, student) {
  if (err){
    console.log(err);
  } else {
    console.log(student);
  }
});
```

Why do we have two different ways to persist something to a database?

- Maybe we want to instantiate new instances of something for test purposes, but not actually save it to our database
- Maybe we want to add something to the new object (like a date/timestamp) or do some additional validation checking before saving
- Note that with new/save we need to assign the object to a variable

<br>

&#x1F535; **YOU DO**

- Create a new instance of a Student using `new` + `.save`
- Create a new instance of a Student using `.create`

<br>

#### I Do: Add Embedded Documents

Next, let's create a Project...

```js
// db/schema.js

var anna = new StudentModel({name: "Anna", age: 30});
var project1 = new ProjectModel({title: "memory game", unit: "JS"});

// Now we add that project to a student's collection / array of projects.
anna.projects.push(project1);

// In order to save that project to the student, we need to call `.save` on the student -- not the project.
anna.save(function(err, student){
  if(err){
    console.log(err);
  } else {
    console.log(student + " was saved to our db!");
  }
});
```

Run `node db/schema.js` in the Terminal to run the code.

<br>

&#x1F535; **YOU DO** - Practice adding students (10 min)

- Create a new Student and add a Project as an embedded document

<br>


## Seed Data (10 minutes / 1:30)

Let's seed some data in our database. In order to do that, we need to first make sure we can connect `schema.js` to `seeds.js`. Comment out the code we created above and add the following to the bottom of `db/schema.js`.

```js
// db/schema.js

// The rest of our schema code is up here...

// By adding `module.exports`, we can know reference these models in other files by requiring `schema.js`.
module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};
```

And add the following to `db/seeds.js`...

```js
// db/seeds.js

var mongoose = require('mongoose');
var Schema = require("./schema.js");

var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;
```

Now let's call some methods in `db/seeds.js` that will populate our database...

```js
// db/seeds.js

var mongoose = require('mongoose');
var Schema = require("./schema.js");

var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

// First we clear the database of existing students and projects.
StudentModel.remove({}, function(err){
  console.log(err);
});

ProjectModel.remove({}, function(err){
  console.log(err);
});

// Now we generate instances of Student and Project.
var becky = new StudentModel({name: "becky"});
var brandon = new StudentModel({name: "brandon"});
var steve = new StudentModel({name: "steve"});

var project1 = new ProjectModel({title: "project1!!", unit: "JS"});
var project2 = new ProjectModel({title: "project2!!", unit: "Express"});
var project3 = new ProjectModel({title: "project3!!", unit: "Angular"});
var project4 = new ProjectModel({title: "project4!!", unit: "Rails"});

// create two arrays that we can iterate over
var students = [becky, brandon, steve];
var projects = [project1, project2, project3, project4];

// Here we assign some projects to each student.
students.forEach(function(student, i){
  student.projects.push(projects[i], projects[i + 1]);

  student.save(function(err){
    if(err){ console.log(err); }
    console.log(student);
  });
});
```
Now, seed your database by running `node db/seeds.js` in your terminal. Use Ctrl + C to exit running Node.

Let's test if this all worked by opening Mongo in the Terminal...

```bash
$ mongo
$ show dbs
$ use students
$ show collections
$ db.students.find()
```
<br>

&#x1F535; **YOU DO** 

Add Seed data to your App (15 minutes / 1:45)

<br>

### Callback Functions

Oftentimes, when making a Mongoose query we will pass in a callback function (or use a Promise with `exec()`). It will be passed two arguments: `err` and `data`.

* `data` contains the result of the Mongoose query.

<details>

  <summary>Q: Why do you think callbacks/promises might be necessary when using Mongoose?</summary>

  > Because these queries are asynchronous! We want to make sure the query has finished before we run any code that depends on the result.

</details>

<br>



## Mongoose Queries - READ Index/Show (10 minutes / 1:55)

Mongoose provides us with a variety of helper methods that allow us to easily retrieve documents from our database.

> Explore them using the [Mongoose Queries Documentation](http://mongoosejs.com/docs/api.html#query-js).

```js
// Finds all documents of a specified model type. We can pass in a key-value pair(s) to narrow down the search.
Model.find({}, callback)

// Finds a single model by its id.
Model.findById(someId, callback)

// Find a single model using a key-value pair(s).
Model.findOne({someKey: someValue}, callback)

// Removes documents that match a key-value pair(s).
Model.remove({someKey: someValue}, callback)
```

Let's use `.find` to implement `index` functionality. We'll do that in a controller file...

```bash
$ mkdir controllers
$ touch controllers/studentsController.js
```

> We are adding a `controllers` directory and `studentsController.js` file to mimic how we might define a controller in an Express application. We will follow REST conventions and using our controllers to listen for incoming requests and communication with our database.


```js
// controllers/studentsController.js

var Schema = require("../db/schema.js");
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

var studentsController = {
  index: function(){
    StudentModel.find({})
    .exec(function(err, docs){
      if (err) { console.log(err); }

      docs.forEach(function(doc){
        console.log(doc);
      });
    });
  }
};

studentsController.index();
```
Run `node controllers/studentsController.js` in the terminal.

> Every model method that accepts query conditions can be executed by means of a callback or the `exec()` method (which is essentially a Mongoose-y promise). http://mongoosejs.com/docs/promises.html

Now let's do `show`...

```js
// controllers/studentsController.js

var studentsController = {
  index: function(){
    StudentModel.find({})
    .exec(function(err, docs){
      if (err) { console.log(err); }

      docs.forEach(function(doc){
        console.log(doc);
      });
    });
  },
  show: function(req){
    StudentModel.findOne({"name": req.name})
    .exec(function(err, docs){
      if (err) { console.log(err); }
      console.log(docs);
    });
  }};

studentsController.show({name: "becky"});
```

<br>

&#x1F535; **YOU DO**  - Index, Show, Update and Delete (15 minutes / 2:10)

Follow the above instructions to implement `index` and `show` for the Student model.

Then use [Mongoose documentation](http://mongoosejs.com/docs/api.html#query-js) to figure out how to update and delete authors. If the documentation proves difficult to navigate, don't be afraid to Google it! We'll go over how to update and delete after the exercise...

<br>


## I Do: Update & Delete (10 minutes / 2:25)

<details>
  <summary>**This is how to update...**</summary>

  ```js
  // controllers/studentsController.js
  var studentsController = {

    // This method takes two arguments: (1) the old instance and (2) what we want to update it with.
    update: function(req, update){
      StudentModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true})
      .exec(function(err, docs){
        if (err) { console.log(err); }
        console.log(docs);
      });
    }
  };

  studentsController.update({name: "becky"}, {name: "Sarah"});
  ```

  > We are inserting {new: true} as an additional option. If we do not, we will get the old document as a return value -- not the updated one.

</details>

<details>

  <summary>**This is how to delete...**</summary>

  ```js
  // controllers/studentsController.js

  var studentsController = {
    destroy: function(req){
      StudentModel.findOneAndRemove({name: req.name})
      .exec(function(err, docs){
        if (err) { console.log(err); }
        console.log(docs);
      });
    }
  };

  studentsController.destroy({name: "steve"});
  ```

</details>

> Don't look at these while working on the previous exercise!

<br>


## Validations (Bonus)

Mongoose contains built-in validators and an option to create custom validators as well.

Validators are defined at the field level of a document and are executed when the document is being saved. If a validation error occurs, the save operation is aborted and the error is passed to the callback.

**Built in Validators:**

* `required` and `unique`: used to validate the field existence in Mongoose, which is placed in your schema on the field you want to validate.

Example: Let's say you want to verify the existence of a username field and ensure it's unique before you save the user document.

```js
var UserSchema = new Schema({
  ...
  username: {
    type: String,
    unique: true,
    required: true
  }
});

```
>This will validate the existence and uniqueness of the username field when saving the document, thus preventing the saving of any document that doesn't contain that field.

* `match`: type based validator for strings, placed in your fields for you schemas

Continuing off the above example, to validate your email field, you would need to change your UserSchema as follows:

```js
var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    match: /.+\@.+\..+/
  }
});
```

>The usage of a match validator here will make sure the email field value matches the given regex expression, thus preventing the saving of any document where the e-mail doesn't conform to a valid pattern!

* `enum`: helps to define a set of strings that are only available for that field value.

```js
var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    match: /.+\@.+\..+/
  },
  role: {
    type: String,
    enum: ['Admin', 'Owner', 'User']
  },

});
```
>By Adding in `enum`, we are adding a validation to ensure only these three possible strings are saved in the document.

### Custom Validations

We can also define our own validators by using the `validate property`.

This `validate property` value is typically an array consisting of a validation function.

For example, if we want to validate the length of your user's password. To do so, you would have to make these changes in your UserSchema:

```js
var UserSchema = new Schema({
  ...
  password: {
    type: String,
    validate: [
      function(password) {
        return password.length >= 6;
      },
      'Password should be longer'
    ]
  },
});
```
>This custom validator will make sure your user's password is at least six characters long or it will prevent it from saving the document

* `.pre` validation: middleware that are functions which are passed control during execution of asynchronous functions.

By using `.pre`, these are executed before validations.

```js
UserSchema.pre("save", function(next) {
    var self = this;

    UserModel.findOne({email : this.email}, 'email', function(err, results) {
        if(err) {
            next(err);
        } else if(results) {
            console.warn('results', results);
            self.invalidate("email", "email must be unique");
            next(new Error("email must be unique"));
        } else {
            next();
        }
    });
});

```

-----

## Closing / Questions

* How is Mongoose used to interact with MongoDB?
* What are embedded documents in Mongoose?
* Why do we create a Schema in Mongoose?
* What do we need after Mongoose queries?
* What are common built in validations for Mongoose? Why would we use them?

## Homework

After this class you should be able to complete [Emergency Compliment](https://github.com/ga-wdi-exercises/compliment-express) and Part I of [YUM](https://github.com/ga-wdi-exercises/yum).

## Additional Resources

* [Mongoose Documentation](http://mongoosejs.com/index.html)
* [Embedded Docs versus Multiple Collections](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=mongoose%20embedded%20versus%20collections)
* [Active Record Versus Mongoose](active_record_comparison.md)
* [ODM For Mongo and Rails](https://github.com/mongodb/mongoid)

### Multiple Collections & References

Similar to how we use foreign keys to represent a one-to-many relationship in a SQL database, we can add `[references](https://docs.mongodb.org/manual/tutorial/model-referenced-one-to-many-relationships-between-documents)` to documents in other collections by storing an array of `ObjectIds` referencing document ids from another model.

```js
// db/schema.js

var ProjectSchema = new Schema({
  title: String,
  unit: String,
  students: [{type: Schema.ObjectId, ref: "Student"}]
});

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ {type: Schema.ObjectId, ref: "Project"}]
});

var StudentModel = mongoose.model("Student", StudentSchema);
var ProjectModel = mongoose.model("Project", ProjectSchema);
```

> Since we are using an id to refer to other objects, we use the ObjectId type in the schema definition. The `ref` attribute must match the model used in the definition.

#### Advantages
* Could offer greater flexibility with querying.
* Might be a better decision for scaling.

#### Disadvantages
* Requires more work. Need to find both documents that have the references (i.e., multiple queries).


