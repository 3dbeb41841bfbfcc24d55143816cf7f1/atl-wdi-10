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
- LEFT and RIGHT JOINs


### Preparation

## Intro (5 mins)
We've learned the four fundamental SQL operations: SELECT, INSERT, UPDATE, DELETE.

Sometimes we want to select specific fields from different tables, and JOIN (hint hint) this information together in one table response from our database.  This allows us to combine 2+ tables to pull the exact information we want out of our SQL database.  

For example, if we want to JOIN the `users` and `todos` table to see the users name next to the todo the user created, then it would look like this.

_users_

```
| id | name  | fav_color | fav_ice_cream |
|----|-------|-----------|---------------|
| 1  | Josh  | green     | phish food    |
| 2  | Danny | red       | cherry garcia |
| 3  | Gerry | salmon    | cookie dough  |
```

_todos_

```
| id | description               | user_id     |
|----|---------------------------|-------------|
| 1  | I need to go to the store | 2           |
| 2  | Go to the park            | 1           |
| 3  | Chores and stuff          | 3           |
```

_SQL_

```
SELECT name, description
FROM users
JOIN todos ON users.id = todos.users_id;
```

RESULT

```
| name  | description               |
|-------|---------------------------|
| Danny | I need to go to the store |
| Josh  | Go to the park            |
| Gerry | Chores and stuff          |
```



## Relationships and Joins
Postgres and other SQL databases are __relational__.  They are designed for storing and viewing data that is interrelated.  To do this, one table has a __foreign key__ to another table.  If rows are related, one column in each row will have the same value.  Usually, a column in one row will contain the primary key of another row.

How was this different in MONGO?

##

In this next example we have a `customers` table and a `orders` table.

CFU: What's the relationship between `customers` and `orders`?

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
INSERT INTO orders (customer_id, amount, order_date) VALUES (2, 151.88, '07/13/2015');
INSERT INTO orders (customer_id, amount, order_date) VALUES (3, 78.50, '05/05/2014');
INSERT INTO orders (customer_id, amount, order_date) VALUES (1, 124.00, '07/13/2015');
INSERT INTO orders (customer_id, amount, order_date) VALUES (2, 65.50, '09/16/2014');
INSERT INTO orders (customer_id, amount, order_date) VALUES (1, 25.50, '09/16/2014');
INSERT INTO orders (customer_id, amount, order_date) VALUES (2, 14.40, '09/16/2014');
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
JOIN orders ON customers.id = orders.customer_id;
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

<details>

<summary>**Solution**</summary>


# Solution
```sql
SELECT name, address, city, state, zip, amount, order_date
FROM customers
JOIN orders ON customers.id = orders.customer_id
WHERE customer_id = 2;
```
</details>

<br>
<br>

2. Write a JOIN query that sums all the orders as order_total of `Grayce Mission` and returns a table with the `name` and `order_total`
  ```
  name           |  total  
  ----------------+---------
  Grayce Mission | $231.78
  ```
  
<details>

<summary>**Solution**</summary>


# Solution
```sql
SELECT customers.name, SUM(Orders.amount) as total
FROM customers
JOIN orders ON customers.id = orders.customer_id
WHERE customers.id = 2 GROUP BY customers.name;
```
</details>

<br>
<br>

3. Write a Join query that returns all of the users order summed as total:

  ```
  name               |  total  
  --------------------+---------
  Grayce Mission     | $231.78
  Walter Key         | $718.59
  Rosalinda Motorway |  $78.50
  ```
  
  
<details>

<summary>**Solution**</summary>


# Solution
```sql
SELECT customers.name, SUM(orders.amount) as total
FROM customers
JOIN orders ON customers.id = orders.customer_id
GROUP BY customers.name;
```
</details>

<br>
<br>

There are several other forms of JOINS that are much less common

*LEFT JOIN*

```
SELECT name, zip, amount, order_date
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id;
```
A left join returns all the records in the “left” table (customers) whether they have a match in the "right" (orders) table or not.

If, however, they do have a match in the right table – give me the “matching” data from the right table as well. If not – fill in the holes with null.


*RIGHT JOIN*

```
SELECT name, zip, amount, order_date
FROM customers
RIGHT JOIN orders ON customers.id = orders.customer_id;
```

Returns all records in the "right" table (orders) whether they have a match in the "left" (customers) table or not.


## GROUP BY
Suppose we want to know the total amount purchased on each order_date provided in the orders table.  We would use `GROUP BY` to sum the amounts for each date.

## ORDER BY
This operation will allow us to order the results based on a specific field we are SELECTing.

```
SELECT order_date, SUM(amount) 
FROM orders 
GROUP BY order_date
ORDER BY order_date;
```

This query will aggregate the total amount for each order_date, and order the results by order_date.

## Further Reading
Some nice visuals of SQL Joins:

[http://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins](http://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins)



## You Do: Less Common Joins

There are actually a number of ways to join multiple tables with `JOIN`, if
you're really curious, check out this article:

![All the joins in the world](https://www.codeproject.com/KB/database/Visual_SQL_Joins/Visual_SQL_JOINS_V2.png)

[A visual explanation of SQL Joins](http://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)

## You Do: Books and Authors

See advanced_queries.sql in the [library_sql](https://github.com/ga-dc/library_sql)
exercise.

## Advanced SQL

If you DON'T have the libary database - SET UP YOUR LIBRARY DB
- Access this directory: https://github.com/ATL-WDI-Curriculum/atl-wdi-9/tree/master/unit_04/w11d04/student_labs/library_sql

- `psql` {{ in terminal }}

- `CREATE DATABASE library;`

- `Ctrl + d` to exit `psql`

- `psql -d library < schema.sql`  {{ in terminal }}

- `psql -d library < seed.sql`    {{ in terminal }}

If you DO have the library database
- `psql -d library`       {{ in terminal }}

- `psql`                  {{ in terminal }}

- Do this exercise: https://github.com/ATL-WDI-Curriculum/atl-wdi-9/edit/master/unit_04/w11d05/instructor_notes/sql_advanced_sol.sql

