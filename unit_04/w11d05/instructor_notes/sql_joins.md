---
title: SQL JOINS
type: Lesson
duration: "2:00"
creator:
    name: Colin Hart,
    city: WDIR-Matey
competencies: Relational Databases
---

# SQL Joins

### Objectives

- What are JOIN tables?
- Why do we need JOINS?
- INNER JOIN
- LEFT, RIGHT, and OUTER JOINs


### Preparation

## Intro (5 mins)
psql -d library < seed.sql

## Relationships and Joins
In your first SQL lesson you learned how to CREATE TABLE and DROP TABLE, and how to do the four basic SQL operations: SELECT, INSERT, UPDATE, and DELETE.  With these features, we have what is essentially a spreadsheet, a spreadsheet which enforces constraints on the type of data in each column via the schema.  It's as if Excel could handle a million rows, but had no way of expressing the relationship between the items in one spreadsheet and another.

Postgres and other SQL databases are __relational__.  They are designed for storing and viewing data that is interrelated.  To do this, one table has a __foreign key__ to another table.  If rows are related, one column in each row will have the same value.  Usually, a column in one row will contain the primary key of another row.

How was this different in MONGO?

##

In our system there are many libraries, so we will have a library table.  There are also many books, so we will have a books table.  Each book can have many copies in the system, so we will have a table which represents a copy of a book.  The libraries have many users, who can have a book checked out, and employees who work at a particular library.  Let's start by working out the library, books, and book-copy tables.

```
CREATE DATABASE joins_example_db;
\c joins_example_db

CREATE TABLE customers (
id SERIAL PRIMARY KEY,
name varchar(255),
address varchar(255),
city varchar(255),
state varchar(255),
zip integer
);

CREATE TABLE orders (
id SERIAL PRIMARY KEY,
customer_id INTEGER REFERENCES customers,
amount money,
order_date date
);
```

## INNER JOIN

To SELECT information on two or more tables at once, we can use a JOIN clause.
This will produce rows that contain information from both tables. When JOINing
two or more tables, we have to tell the database how to 'match up' the rows.

This is done using the ON clause, which specifies which properties to match.

Now that we have our order and customer tables let's add some seed data:

```sql
INSERT INTO customers (name, address, city, state, zip) VALUES ('Walter Key', '79 Highland Ave.', 'Somerville', 'MA', '02143');
INSERT INTO customers (name, address, city, state, zip) VALUES ('Grayce Mission', '40 College Avenue', 'Somerville', 'MA', '02143');
INSERT INTO customers (name, address, city, state, zip) VALUES ('Rosalinda Motorway', '115 Broadway', 'Somerville', 'MA', '02143');
INSERT INTO customers (name, address, city, state, zip) VALUES ('Holland St', '98', 'Louisville', 'KY', '01234');



INSERT INTO orders (customer_id, amount, order_date) VALUES (1, 111.51, '01/5/2016');
INSERT INTO orders (customer_id, amount, order_date) VALUES (2, 151.88, '12/22/2015');
INSERT INTO orders (customer_id, amount, order_date) VALUES (3, 78.50, '05/05/2014');
INSERT INTO orders (customer_id, amount, order_date) VALUES (1, 124.00, '07/13/2015');
INSERT INTO orders (customer_id, amount, order_date) VALUES (2, 65.50, '02/15/2014');
INSERT INTO orders (customer_id, amount, order_date) VALUES (1, 25.50, '09/16/2014');
INSERT INTO orders (customer_id, amount, order_date) VALUES (2, 14.40, '03/03/2014');
INSERT INTO orders (customer_id, amount, order_date) VALUES (1, 234.56, '10/08/2015');
```
---



Let's write a statement to get get all of the orders with a customer id of 1.

```sql
SELECT * FROM orders WHERE customer_id = 1;
```

What if we also wanted to get the user data for our first user?

```sql
SELECT * FROM orders WHERE customer_id = 1;
SELECT * FROM customers WHERE id = 1;
```

So that's two separate transactions to our database. Let's combine them into a JOIN:

Let's break this down into steps.

What aspect of the user would we like to see?
  Let's go ahead and say `name` and `zip` code

  ```sql
  SELECT name, zip
  FROM CUSTOMERS
  WHERE id = 1;
  ```

And then we also want to see that customers orders specifically `amount` and `order_date`

```sql
SELECT name, zip, amount, order_date
FROM customers
JOIN orders ON customers.id = orders.customer_id
```

`JOIN` allow us to smoosh to tables together. We use `ON` to create JOINED rows specifically where the customer_id (foreign_key) and the primary key of the customer are the same.

This returns all of the customers so let's add our WHERE clause back in

```sql
SELECT name, zip, amount, order_date
FROM customers
JOIN orders ON customers.id = orders.customer_id
WHERE customer_id = 1;
```

The default behavior of the JOIN statement is to make an INNER JOIN. You could rewrite the statement more explicitly using that terminology:

```sql
SELECT name, zip, amount, order_date
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id
WHERE customer_id = 1;
```

*INNER JOIN*
An inner join only returns those records that have “matches” in both tables. So for every record returned in T1 – you will also get the record linked by the foreign key in T2. In programming logic – think in terms of AND.

Inner join produces only the set of records that match in both Table A and Table B.


EXERCISE:

1. Write a JOIN query that returns all of the user data `Grayce Mission` plus her orders.

  ```
    name         |      address      |    city    | state | zip  | amount  | order_date
  ----------------+-------------------+------------+-------+------+---------+------------
  Grayce Mission | 40 College Avenue | Somerville | MA    | 2143 | $151.88 | 2015-12-22
  Grayce Mission | 40 College Avenue | Somerville | MA    | 2143 |  $65.50 | 2014-02-15
  Grayce Mission | 40 College Avenue | Somerville | MA    | 2143 |  $14.40 | 2014-03-03
  ```

  <!-- ```sql
  SELECT name, address, city, state, zip, amount, order_date
  FROM customers
  JOIN orders ON customers.id = orders.customer_id
  WHERE customer_id = 2;
  ``` -->
2. Write a JOIN query that sums all the orders as order_total of `Grayce Mission` and returns a table with the `name` and `order_total`
  ```
  name           |  total  
  ----------------+---------
  Grayce Mission | $231.78
  ```

  <!-- ```sql
  SELECT customers.name, SUM(Orders.amount) as total
  FROM customers
  JOIN orders ON customers.id = orders.customer_id
  WHERE customers.id = 2 GROUP BY customers.name
  ``` -->
3. Write a Join query that returns all of the users order summed as total:

  ```
  name               |  total  
  --------------------+---------
  Grayce Mission     | $231.78
  Walter Key         | $718.59
  Rosalinda Motorway |  $78.50
  ```
  <!-- ```sql
  SELECT Customers.name, SUM(Orders.amount) as total
  FROM customers
  JOIN orders ON customers.id = orders.customer_id
  GROUP BY Customers.name;
  ``` -->


There are several other forms of JOINS that are much less common


*OUTER JOIN*
An outer join is the inverse of the inner join. It only returns those records not in “left” table and the "right" table.

“Give me the records that DON’T have a match.”

In programming logic – think in terms of NOT AND.

*LEFT JOIN*
A left join returns all the records in the “left” table (Table 1) whether they have a match in the right table or not.

If, however, they do have a match in the right table – give me the “matching” data from the right table as well. If not – fill in the holes with null.

*LEFT OUTER JOIN*
A left outer join combines the ideas behind a left join and an outer join. Basically – if you use a left outer join you will get the records in the left table that DO NOT have a match in the right table.


## GROUP BY
Suppose for each employee, we want the number of employees they manage, or for each library, we want the number of distinct books they stock.  We need to use GROUP BY.

```
SELECT COUNT(e.id) AS reports_count, m.id, m.name
FROM employees AS e
INNER JOIN managers AS m ON e.manager_id=m.id
GROUP BY e.manager_id, m.id, m.name;
```

This builds the join table from employees to employees, then aggregates the rows which have the same e.manager_id, m.id, and m.name.  Then it selects the number of rows aggregated and the id and name of the manager.

## Further Reading
Some nice visuals of SQL Joins:

[http://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins](http://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins)



## You Do: Less Common Joins

There are actually a number of ways to join multiple tables with `JOIN`, if
you're really curious, check out this article:

[A visual explanation of SQL Joins](http://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)

## You Do: Books and Authors

See advanced_queries.sql in the [library_sql](https://github.com/ga-dc/library_sql)
exercise.
