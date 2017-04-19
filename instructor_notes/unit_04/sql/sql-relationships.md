# Relationships in SQL / SQL JOINs

## Learning Objectives

- Define what a foreign key is
- Describe how to represent a one-to-many relationship in SQL database
- Explain how to represent one-to-one and many-to-many relationships in a SQL DB
- Distinguish between keys, foreign keys, and indexes
- Describe the purpose of the JOIN
- Use JOIN to combine tables in a SELECT
- Describe what it means for a database to be normalized

## Introduction

One of the key features of relational databases is that they can represent relationships between rows in different tables.

Going back to our library example, we have two tables: `books` and `authors`. Our goal now is to somehow indicate the relationship between a book and an author. In this case, that relationship indicates who wrote the book.

You can imagine that we'd like to use this information in a number of ways, such as...

- Getting the author information for a given book.
- Getting all books written by a given author.
- Searching for books based on attributes of the author (e.g., all books written by an American author).

## One-to-Many (10 minutes / 2:20)

How might we represent this information in our database? For this example,
let's assume that each book has only one author (even though that's not always
the case in the real world.)

#### Option 1 - Duplicate Info (Wrong)

**authors**

- name
- nationality
- birth_year

**books**

- title
- pub_date
- author_name
- author_nationality
- author_birth_year

**Downside**: duplication, keeping data in sync.

#### Option 2 - Array of IDs (Wrong)

**authors**

- name
- nationality
- book_ids

**books**

- title
- pub_date

**Downside**: Parsing list, can't index (for speed!)

#### Option 3 (Correct!)

**authors**

- name
- nationality

**books**

- title
- pub_date
- author_id

![one_to_many](images/one_to_many.png)

## Another Example of Relational Data

Within a relational database, all database records (rows) are assigned an ID, or *primary key*. Records may then reference other *foreign keys* (keys from other tables) to create relationships between records.

**houses**

| id | name        | color   |
|:-- |:----------- |:------- |
| 1  | Gryffindor  | Red     |
| 2  | Ravenclaw   | Purple  |
| 3  | Hufflepuff  | Yellow  |
| 4  | Slytherin   | Green   |

---

**students**

| id | first_name | last_name | house_id |
|:-- |:---------- |:--------- |:---------|
| 1  | Harry      | Potter    | 1        |
| 2  | Ron        | Weasly    | 1        |
| 3  | Hermionie  | Granger   | 1        |
| 4  | Draco      | Malfoy    | 4        |

*(each student has a foreign-key relationship to a house)*


## WE DO

Describe the following relationships. Which table would contain the foreign key?

- Author, Blog
- Recipe, Ingredient
- Make, Model (car)

## Joins
To SELECT information on two or more tables at ones, we can use a JOIN clause.
This will produce rows that contain information from both tables. When JOINing
two or more tables, we have to tell the database how to 'match up' the rows.
(e.g. to make sure the author information is correct for each book).

This is done using the ON clause, which specifies which properties to match.

### Writing SQL JOINS

```sql
SELECT id FROM authors where name = 'J.K. Rowling';
SELECT * FROM books where author_id = 2;

SELECT * FROM books JOIN authors ON books.author_id = authors.id;
SELECT * FROM books JOIN authors ON books.author_id = authors.id WHERE authors.nationality = 'United States of America';
```

### Alaises

You can also simplify your SQL queries using AS to create an alias.

```sql
SELECT * FROM books JOIN authors ON books.author_id = authors.id;

// would become

SELECT * FROM books AS b JOIN authors AS a ON b.author_id = a.id;
```

## Many-to-Many Relationships

We're not going to go in-depth with many-to-many relationships today, but lets go over a simple example...

Consider if we wanted to add a categories table (e.g. fiction, non-fiction,
sci-fi, romance, etc). Books can belong to many categories (i.e. a book might be
a fiction/romance, or a history/non-fiction). And a given category might have
many books.

Because of this, we can't put a `book_id` column on categories, nor a `category_id`
column on books, either way, we might have more than one value in that field
(a no-no in terms of performance).

To solution is to create an additional table, which stores just the
relationships between the two tables. Such a table is called a join table, and
contains two foreign key columns.

In our example, we might create a table called 'categorizations', and it would
have a `book_id` and `category_id`. Each row would represent a specific book's
association with a specific category.

![many_to_many](images/many_to_many.png)

Here's another look at a many-to-many relationship using the Harry Potter example from earlier.

**students**

| id | first_name | last_name | house_id |
|:-- |:---------- |:--------- |:---------|
| 1  | Harry      | Potter    | 1        |
| 2  | Ron        | Weasly    | 1        |
| 3  | Hermionie  | Granger   | 1        |
| 4  | Draco      | Malfoy    | 4        |


---

**subjects**

| id | subjects                      |
|:-- |:----------------------------- |
| 1  | Charms                        |
| 2  | Potions                       |
| 3  | Herbology                     |
| 4  | Defense Against the Dark Arts |
| 5  | Quiddich                      |

---

**join-table-students-subjects**

| id | student_id | subject_id |
|:-- |:---------- |:---------- |
| 1  | 1          | 4          |
| 2  | 3          | 1          |
| 3  | 3          | 2          |
| 4  | 1          | 5          |
| 5  | 2          | 5          |


*(a join-table table maps many students to many subjects)*



## You Do: Less Common Joins

There are actually a number of ways to join multiple tables with `JOIN`, if
you're really curious, check out this article:

[A visual explanation of SQL Joins](http://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)

## You Do: Books and Authors

See advanced_queries.sql in the [library_sql](https://github.com/ga-dc/library_sql)
exercise.


## Closing/Questions (10 minutes)

## Resources and links

* [Beginners Guide to SQL](http://www.sohamkamani.com/blog/2016/07/07/a-beginners-guide-to-sql/)
* [Khan Academy: Relational queries in SQL](https://www.khanacademy.org/computing/computer-programming/sql#relational-queries-in-sql)
