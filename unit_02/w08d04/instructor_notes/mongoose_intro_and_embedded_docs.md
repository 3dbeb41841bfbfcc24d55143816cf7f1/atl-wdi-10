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

## You Do: Initial Set Up for Reminders (5 minutes / 0:20)

1. Create a new project folder your `/w06d02/student_labs` folder: `$ mkdir mongoose-intro-lesson`

2. `cd` into the new folder. 

3. Create a new database folder inside that folder: `$ mkdir db`

3. `$ npm init -y`

4. Create the following files: `$ touch index.js db/schema.js db/seeds.js`

5. Open the app in atom: `$ atom .`

Your folder structure should look like so:

![](https://i.imgur.com/sxFsxgC.png)

<br>

## I Do: Mongoose and Connection Set Up (5 minutes / 0:25)

For today's in-class demonstrations, **I will be creating an app** that uses two models: `Students` and `Projects`. 

After each demo, **you will apply the same functionality** to your app using `Authors` and `Reminders`.

Let's begin by installing Mongoose...

```bash
$ npm install --save mongoose
```

In order to have access to `mongoose` in our application, we need to explicitly require mongoose and open a connection to the test database on our locally

```js
// db/schema.js

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');
```

> The name above `students` will be the name of the database stored in MongoDB

```js
// db/schema.js

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

// Use native promises
mongoose.Promise = global.Promise;

// Now that we're connected, let's save that connection to the database in a variable.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err){
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
  console.log("database has been connected!");
});
```

Now let's run our `db/schema.js` file:

```bash
$ node db/schema.js
```

<br>


## You Do: Install Mongoose and Connection (5 min / 0:30)

Follow the instructions in the previous section to require mongoose in your app.

<details>
    <summary>Solution for Reminders</summary>
    
```js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reminders');

// Use native promises
mongoose.Promise = global.Promise;

// Now that we're connected, let's save that connection to the database in a variable.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err){
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
  console.log("database has been connected!");
});
```
</details>

<br>

## Mongoose Schema & Models (10 minutes / 0:40)

#### What is a Mongoose Schema?

* Everything in Mongoose starts with a Schema!
* Schemas are used to define attributes and structure for our documents.
* Each Schema maps to a MongoDB collection and defines the shape of the documents within that collection.

Here's an example of a Mongoose schema...

```js
// db/schema.js

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var ProjectSchema = new Schema({
  title: String,
  unit: String
});

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

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

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

### Mongoose - Schema - Model Summary
_Mongoose_ is an _ODM_ - an **O**bject **D**ocument **M**apper - i.e. it maps objects to documents. Therefore, Mongoose gives us the ability to do _CRUD_ operations on a _MongoDB_ database using JavaScript objects as our model objects.

> A _model_ object is an object whose primary concern is to hold data and represent an instance of a Domain Model. For example, if we were developing an application for Delta, we might have Domain Models for Airports, Flights, Passengers, Luggage, etc.  Instances of an Airport Domain Model might be ATL, LAX, ORD, DFW, etc.

![Object Document Mapping](https://i.imgur.com/YhAXdCB.png)

<br>

## Collections: Embedded Documents & References (10 minutes / 0:50)

Now, Let's add another model to our `db/schema.js`.

* We will be adding a schema now for `Project`, since I want to create an application that tracks Students and Projects.
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
})

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ProjectSchema]
})

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

> If you find that you are nesting documents within documents for 3+ levels, you should probably look into a relational database.

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

<br>

## You Do: Set Up Schema and Models for Reminders (10 minutes / 1:00)

Use the previous section to step up your Reminder and Author schemas and models. 

- Your `ReminderSchema` should have one key/value pair:
    - `body: String`
- Your `AuthorSchema` should have two key/value pairs:
    - `name: String`
    - `reminders` will be an Array of Reminders  

Use the Project/Student schema above for reference.

> [Solution](https://github.com/ga-wdi-exercises/reminders_mongo/blob/cfee42d3cfd0bf5f2581cc61ba712eb8e1b7777f/db/schema.js)

<br>

## Break (10 minutes / 1:10)

<br>

## Create with Students and Projects (10 minutes / 1:20)

First let's create an instance of our Student model. Here's one way of doing it...

```js
// db/schema.js

// First we create a new student. It's just like generating a new instance with a constructor function!
var anna = new StudentModel({name: "Anna", age: 30});

// Then we save it to the database using .save
anna.save(function(err, student){
  if(err){
    console.log(err);
  } else {
    console.log(student);
  }
});
```

> You can compare this to `.new` and `.save` in ActiveRecord.

We can also consolidate that into a single `.create` method, like so...

```js
// db/schema.js

StudentModel.create({ name: 'Anna', age: 30 }, function (err, student) {
  if (err){
    console.log(err);
  } else {
    console.log(student);
  }
});
```

#### I Do: Add Embedded Documents

Next, let's create a Project...

```js
// db/schema.js

var anna = new StudentModel({name: "Anna", age: 30});
var project1 = new ProjectModel({title: "memory game", unit: "JS"});

// Now we add that project to a student's collection / array of projects.
anna.projects.push(project1)

// In order to save that project to the student, we need to call `.save` on the student -- not the project.
anna.save(function(err, student){
  if(err){
    console.log(err)
  } else {
    console.log(student + " was saved to our db!");
  }
});
```

<br>

## You Do: Practice adding Authors (10 min)

- Create a new instance of an Author using `new` + `.save`
- Create a new instance of an Author using `.create`
- Create a new Author and add a Reminder as an embedded document

<br>


## Seed Data (10 minutes / 1:30)

Let's seed some data in our database. In order to do that, we need to first make sure we can connect `schema.js` to `seeds.js`. Let's add the following to `db/schema.js`...

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

var StudentModel = Schema.StudentModel
var ProjectModel = Schema.ProjectModel
```

Now let's call some methods in `db/seeds.js` that will populate our database...

```js
// db/seeds.js

var mongoose = require('mongoose');
var Schema = require("./schema.js");

var StudentModel = Schema.StudentModel
var ProjectModel = Schema.ProjectModel

// First we clear the database of existing students and projects.
StudentModel.remove({}, function(err){
  console.log(err)
});

ProjectModel.remove({}, function(err){
  console.log(err)
});

// Now we generate instances of Student and Project.
var becky = new StudentModel({name: "becky"})
var brandon = new StudentModel({name: "brandon"})
var steve = new StudentModel({name: "steve"})

var project1 = new ProjectModel({title: "project1!!", unit: "JS"})
var project2 = new ProjectModel({title: "project2!!", unit: "Express"})
var project3 = new ProjectModel({title: "project3!!", unit: "Angular"})
var project4 = new ProjectModel({title: "project4!!", unit: "Rails"})

var students = [becky, brandon, steve]
var projects = [project1, project2, project3, project4]

// Here we assign some projects to each student.
for(var i = 0; i < students.length; i++){
  students[i].projects.push(projects[i], projects[i+1])
  students[i].save(function(err, student){
    if (err){
      console.log(err)
    } else {
      console.log(student);
    }
  })
};

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

### Callback Functions

Oftentimes, when making a Mongoose query we will pass in a callback function. It will be passed two arguments: `err` and `data`.

* `data` contains the result of the Mongoose query.

<details>

  <summary>Q: Why do you think callbacks might be necessary when using Mongoose?</summary>

  > Because these queries are asynchronous! We want to make sure the query has finished before we run any code that depends on the result.

</details>

## You Do: Add Seed Data and Create to your App (15 minutes / 1:45)

Now do the same thing with your Reminders app.

> [Solution](https://github.com/ga-wdi-exercises/reminders_mongo/commit/9b5a93841df550516e04778066cb43bd790c11f8)

## Mongoose Queries (10 minutes / 1:55)

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

> We are adding a `controllers` directory and `studentsController.js` file to mimic how we might define a controller in an Express application. Like how our controllers will help us in Rails, we will be following similar REST conventions and using our controllers to listen for incoming requests and communication with our database.


```js
// controllers/studentsController.js

var Schema = require("../db/schema.js");
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

var studentsController = {
  index: function(){
    StudentModel.find({}, function(err, docs){
      console.log(docs);
    });
  }
};

studentsController.index();
```
Run `node controllers/studentsController.js` in the terminal.

Now let's do `show`...

```js
// controllers/studentsController.js

var studentsController = {
  index: function(){
    StudentModel.find({}, function(err, docs){
      console.log(docs);
    });
  },
  show: function(req){
    StudentModel.findOne({"name": req.name}, function(err, docs){
      console.log(docs);
    });
  }
};

studentsController.show({name: "becky"});
```

<br>

## You Do: Index, Show, Update and Delete (15 minutes / 2:10)

Follow the above instructions to implement `index` and `show` for the Author model.

Then use [Mongoose documentation](http://mongoosejs.com/docs/api.html#query-js) to figure out how to update and delete authors. If the documentation proves difficult to navigate, don't be afraid to Google it! We'll go over how to update and delete after the exercise...

> [Index/Read Solution](https://github.com/ga-wdi-exercises/reminders_mongo/commit/d51081c0bf995bbd7f47883467da1c06a03de058)
> [Update/Delete Solution](https://github.com/ga-wdi-exercises/reminders_mongo/blob/469d3c09059c60b7779a8c3a8c2fb12aefcc779a/controllers/authors.controller.js)

## Break (5 minutes / 2:15)

## I Do: Update & Delete (10 minutes / 2:25)

<details>
  <summary>**This is how to update...**</summary>

  ```js
  // controllers/studentsController.js
  var studentsController = {

    // This method takes two arguments: (1) the old instance and (2) what we want to update it with.
    update: function(req, update){
      StudentModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, docs){
        if(err) {
          console.log(err)
        }
        else {
          console.log(docs);
        }
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
      StudentModel.findOneAndRemove(req, function(err, docs){
        if(err){
          console.log(err);
        }
        else{
          console.log(docs);
        }
      });
    }
  };

  studentsController.destroy({name: "steve"});
  ```

</details>

> Don't look at these while working on the previous exercise!

-----

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
