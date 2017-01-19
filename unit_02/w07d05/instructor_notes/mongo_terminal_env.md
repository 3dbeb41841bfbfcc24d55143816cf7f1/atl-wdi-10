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
  - List your sub databases
  - Choose a sub database as a target for your actions
  - Create a collection
  - Insert a document into a collection
  - Find a set of documents in a collection
  - Remove a set of documents from a collection
  - Update a set of documents in a collection
  - Drop a Collection or an entire sub database

## Describe what Mongo is

MongoDB is a database that holds javascript objects.  The database itself is just an application that runs quietly in the background and waits for connections (just like a web server).  You can connect to it in the same way that you would connect to a website, but instead of viewing a page, you can save, retrieve, update, and delete javascript objects to/from/in the database.


## Diagram the structure of Mongo

The Mongo database application itself contains several imaginary "sub-databases" (not sure if that's an industry term or not).  Each sub-database can be assigned to a specific application.  Imagine you're Google, and you have lots of different applications.  You don't want the data for your mail application data mixed in with your maps application data.  These sub-databases allow you to keep information structured in a way that is logical.

## List your sub databases

To list the sub-databases in your Mongo application, use the following command:

```
show dbs
```

## Choose a sub database as a target for your actions

In general, you won't be switching back and forth between different sub-databases, since, presumably, you'll just be working on one application at a time.  Because of this, we "select" a sub-database.  Once selected, all the actions we call will affect that sub database until we "select" another.

To choose (or create and choose) a sub-database, use the following command:

```
use first_db
```

If we later want to remind ourselves what sub database we're using, use the following command:

```
db
```


## Create a collection

Inside our each sub-database, we can have various collections.  Each collection is a set of related JavaScript objects.  Imagine we're creating a mail application.  We could have a collection of users and a different collection for messages.  The purpose of the collection is similar to sub databases, in that it's purely for organizational purposes.

The syntax for creating a collection is:

```
db.createCollection('teachers')
```

To show a collection, use:

```
show collections
```

## Insert a document into a collection

Now we're ready to start inserting JS objects into our collection.

```
db.teachers.insert({
	name:'Colin',
	gender:'m'
})
```

We can also insert an array of objects (Bulk insert)

```
db.teachers.insert(
	[
		{
			name:'Thom',
			gender:'m'		
		},
		{
			name:'Christine',
			gender:'f'		
		}
	]
)
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

## Remove a set of documents from a collection

Remove a document, just like you would find it

```
db.teachers.remove({gender:'m'})
```

## Update a set of documents in a collection

Update is similar to insert, find, and remove, but it takes two parameters.  The first is a search criteria, like before, and the second is how to change the selected records.

Insert a new teacher, name: "Mystery teacher" and gender: "??"

```
db.teachers.update(
	{name:'Mystery teacher'},
	{
		$set: {
			gender:'female',
			age: 25
		}
	}
)
```

`$set` is **critical**.  If you forget it, you will overwrite the data in your objects.

When we update a document without `$set`, the entire document is replaced, but not the `_id`.

Let's test this:

Look at the document holding Mystery teacher's info that we just updated. It should have gender and age now. Let's run the same update without `$set` find that document again and compare the data in the two versions, but also compare the `_id`'s. Notice that they're the same.


We can also $unset

Update will update only one document by default.  To update many, pass in a third `{ multi:true }` param

Insert a new teacher object with a name of `Mystery teacher`

```
db.teachers.update(
	{name:'Mystery teacher'},
	{
		$set: {
			gender:'female',
			age: 35
		}
	},
	{
		multi: true
	}
)
```

## Drop a Collection or an entire sub database

If you really screw up, you can drop a collection:

```
db.teachers.drop()
```

If you really REALLY screw up, you can drop an entire sub database:

```
db.dropDatabase()
```

# Activities

## Get Mongo running

1. Get mongod and mongo running

## Sub databases

1. show your sub databases
1. show the sub database you are currently using
1. create/use a sub database called first_db
1. show your sub databases
1. show the sub database you are currently using

## Create a collection

1. show the current sub databases collections
1. create a collections called teachers
1. show the current sub databases collections

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

## Drop a Collection or an entire sub database

1. Drop the teachers collection
1. Drop the current database
