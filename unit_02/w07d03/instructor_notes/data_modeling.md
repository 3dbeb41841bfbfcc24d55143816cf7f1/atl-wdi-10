---
title:  Data Modeling in Mongo
type: lesson
duration: '2:00'
creator:
    name: Colin Hart
    class: WDIr-matey
---

### Lesson Objectives

- Describe what a database is
- Model one-to-few embedded documents
- Describe the ACID Properties
- Construct collections/documents based on application behavior
- Diagnose the pitfalls of embedded documents


## What are Databases? - Intro (20 mins)

A database is a place where information gets stored in a hard drive - or distributed across multiple hard drives - on a computer somewhere. Much like we've been creating and storing data in arrays or objects, a database represents a collection of individual pieces of data stored in a highly structured and searchable way; they represent a model of reality.

Inside a database, we do basic actions like create, read, update, and destroy data – hey look, CRUD!

In modern web development, there are different categories of databases – SQL, NoSQL. We're focusing on NoSQL because it typically get's paired with Node and Express, but we will talk about SQl later in the course.

SQL stands for Structured Query Language, and it's a language used to manage and get information from considered what are considered "relational" databases.

NoSQL means... No Structured Query Language.


## Why Mongo

Flexibility

Flexibility, however, is a double-edged sword; more flexibility means more choices to face when deciding how to model data.

You will likely encounter many a developer who puts down Mongo. When we start learning SQL and relational databases toward the end of the program we can talk more about why and more about the pitfalls of flexibility.

## Let's Draw on The Board - We Do (20 mins)

Our example is going to be Survey Monkey:

- What pieces of data do we need to think about when constructing our survey monkey app?
- What are the types of this data?
- What are the relations between these pieces of data?

## Pair Up & Draw on The Board - Y'all Do (20 mins)

How do you feel about your understanding of data modeling after doing the Survey Monkey example? Raise 2 fingers for "really well!" or 1 finger for "still a little lost".  Pair up 1's and 2's.

Choose any app (Netflix, Instagram, etc.) and model the database with your partner on the board around the classroom.


## ACID

ACID defines a set of rules for database transactions. These rules are built-in to our database technologies, so we don't need to worry too much about actively employing them ourselves. But knowing what they are helps provide a solid grounding for a what a database does.

What does ACID stand for:

A - Atomicity
* All or nothing, if one part fails, the entire transaction fails

C - Consistency
* Any valid transaction can only result in creating an equally valid state as defined by the various rules built by the programmer, constraints, cascades etc.

I - Isolation
* Concurrent transactions will not result invalid data. Transaction results look as though Concurrent transactions were run serially (one after another).

D - Durability
* Once a change has been made, nothing but another transaction will change it.

Mongo bends these standards a little for the sake of speed, availability and scaling.

You can read more about ACID and MongoDB here:
https://dzone.com/articles/how-acid-mongodb


## Independent Practice (40 minutes)

Working with a partner, draw out some collections/documents for different hypothetical apps. Diagram like we have done so far.

Pick one one of the following to model with your partner on paper:

- A social media site, with users and posts/tweets/pins
- An online ordering system, with customers and orders
- A bar drink system, with orders, customers, drinks, and/or liquors
