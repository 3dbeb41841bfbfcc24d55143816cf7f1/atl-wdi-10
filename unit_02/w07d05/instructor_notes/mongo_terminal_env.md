---
title: Intro to Mongo
type: lesson
duration: '1:00'
creator:
    name: Colin Hart, adapted from Matt Huntington
    class: WDIR-Matey
---
## Lesson Objectives
  - Describe what Mongo is
  - Get Mongo running
  - Diagram the structure of Mongo
  - List your databases
  - Choose a database as a target for your actions
  - Create a collection
  - Insert a document into a collection
  - Find a set of documents in a collection
  - Remove a set of documents from a collection
  - Update a set of documents in a collection
  - Drop a Collection or an entire database

## Describe what Mongo is

MongoDB is a database that holds javascript objects.  The database itself is just an application that runs quietly in the background and waits for connections (just like a web server).  You can connect to it in the same way that you would connect to a website, but instead of viewing a page, you can save, retrieve, update, and delete javascript objects to/from/in the database.

## Diagram the structure of Mongo

Mongo itself can contain several databases.  Each database can be assigned to a specific application.  Imagine you're Google, and you have lots of different applications.  You don't want the data for your mail application data mixed in with your maps application data.  These separations databases allow you to keep information structured in a way that is logical.


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
&#x1F535; **CFU**

- Give me an example of why it would be helpful for a company to have separate databases?

## List your databases

To list the databases in your Mongo application, use the following command:

```
show dbs
```

## Choose a database as a target for your actions

In general, you won't be switching back and forth between different databases, since, presumably, you'll just be working on one application at a time.  Because of this, we "select" a database.  Once selected, all the actions we call will affect that database until we "select" another.

To choose (or create and choose) a database, use the following command:

```
use first_db
```

If we later want to remind ourselves what database we're using, use the following command:

```
db
```


## Create a collection

Inside our each database, we can have various collections.  Each collection is a set of related JavaScript objects.  Imagine we're creating a mail application.  We could have a collection of users and a different collection for messages.  The purpose of the collection is similar to databases, in that it's purely for organizational purposes.

The syntax for creating a collection is:

```
db.createCollection('teachers')
```

To show a collection, use:

```
show collections
```

&#x1F535; **CFU**

- When we compared SQL and NoSQL databases the other day, we talked about SQL tables and how they relate to each other, and drew ERD’s.  How are collections similar to tables?

## Insert a document into a collection

Now we're ready to start inserting JS objects into our collection.

```
db.teachers.insert({
	name:'Josh',
	gender:'m'
})
```

We can also insert an array of objects (Bulk insert)

```
db.teachers.insert([{name:'Danny', gender:'m'}, {name:'Maren', gender:'f'}])		
```

If things get tough to read, we can break our command out onto multiple lines

## Find a set of documents in a collection

You'll notice that inserting doesn't show what's in the collection.  This is because it's writing to the database.  You can either read from or write to the database, but not both at the same time.

To examine what's in our collection, we run:

```
db.teachers.find()
```

If you don't like how this is formatted, add `.pretty()` to the end

```
db.teachers.find().pretty()
```

You can also do a little fuzzy search with regex pattern: `/ /i`

`db.teachers.find({name: /Th/i});`

To find all the documents in our collection that have a gender property set to 'm', we run:

```
db.teachers.find({gender:'m'}).pretty()
```

&#x1F535; **CFU**

- If we have a view and we want to show a list of only women teachers, how would we use ‘.find()’ to grab those records from the database?


## Remove a set of documents from a collection

Remove a document, just like you would find it

```
db.teachers.remove({gender:'m'})
```

## Update a set of documents in a collection

Update is similar to insert, find, and remove, but it takes two parameters.  The first is a search criteria, like before, and the second is how to change the selected records.

Insert a new teacher, name: "Mystery teacher" and gender: "??"

```
db.teachers.insert({name:'Mystery Teacher', gender:'?'} )
```

```
db.teachers.update( {name:'Mystery Teacher'}, { $set: { gender:'female', age: 25 } } )
```

`$set` is **critical**.  If you forget it, you will overwrite the data in your objects.

When we update a document without `$set`, the entire document is replaced, but not the `_id`.

Let's test this:

Look at the document holding Mystery teacher's info that we just updated. It should have gender and age now. Let's run the same update without `$set` find that document again and compare the data in the two versions, but also compare the `_id`'s. Notice that they're the same.

```
db.teachers.update( {name:'Mystery Teacher'}, {  gender:'female', age: 25  } )
```

Update will update only one document by default.  To update many, pass in a third `{ multi:true }` param

Insert a new teacher object with a name of `MysteryTteacher`

```
db.teachers.update({name:'Mystery Teacher'}, { $set: {gender:'female', age: 35} }, { multi: true })
```

&#x1F535; **CFU**

0 || 1 || 2


## Drop a Collection or an entire database

If you really screw up, you can drop a collection:

```
db.teachers.drop()
```

If you really REALLY screw up, you can drop an entire database:

```
db.dropDatabase()
```

# Activities

## Get Mongo running

1. Get mongod and mongo running

## Databases

1. show your databases
1. show the database you are currently using
1. create/use a database called first_db
1. show your databases
1. show the database you are currently using

## Create a collection

1. show the current databases collections
1. create a collections called teachers
1. show the current databases collections

## Insert a document into a collection

1. Insert a document with the `name` of `Colin` and the `gender` of `m`
1. In one command insert one document with the `name` of `bob` and the `gender` of `m`, and another document with the `name` of `jenny` and the `gender` of `f`

## Find a set of documents in a collection

1. Find all the documents in the teachers collection
1. Do the same, but make the results format nicely
1. Do the same, but only for the male teachers

## Remove a set of documents from a collection

1. Remove all the male teachers

## Update a set of documents in a collection

1. Update jenny to have the name `jennifer` and the age of `25`

## Drop a Collection or an entire database

1. Drop the teachers collection
1. Drop the current database
