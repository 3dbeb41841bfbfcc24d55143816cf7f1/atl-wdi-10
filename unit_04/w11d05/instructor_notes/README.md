

Selects all orders where customer id is 1

```sql
SELECT customer_id, order_date, amount
  FROM customers
  JOIN orders
    ON customers.id = orders.customer_id
  WHERE customer_id = 1;

```
alternative
```sql
 SELECT * FROM orders WHERE customer_id = 1;
```
```sql
customer_id | order_date | amount  
-------------+------------+---------
          1 | 2016-01-05 | $111.51
          1 | 2016-01-05 | $111.51
          1 | 2015-07-13 | $124.00
          1 | 2014-09-16 |  $25.50
          1 | 2015-10-08 | $234.56
```
----------
```sql
SELECT * FROM customers
INNER JOIN orders
  ON customers.id = orders.customer_id
WHERE customer_id = 1;
```
alternative

```sql
SELECT * FROM customers
LEFT OUTER JOIN orders
  ON customers.id = orders.customer_id
WHERE customer_id = 1;
```

```sql
id |    name    |     address      |    city    | state | zip  | id | customer_id | amount  | order_date
----+------------+------------------+------------+-------+------+----+-------------+---------+------------
 1 | Walter Key | 79 Highland Ave. | Somerville | MA    | 2143 |  1 |           1 | $111.51 | 2016-01-05
 1 | Walter Key | 79 Highland Ave. | Somerville | MA    | 2143 |  2 |           1 | $111.51 | 2016-01-05
 1 | Walter Key | 79 Highland Ave. | Somerville | MA    | 2143 |  5 |           1 | $124.00 | 2015-07-13
 1 | Walter Key | 79 Highland Ave. | Somerville | MA    | 2143 |  7 |           1 |  $25.50 | 2014-09-16
 1 | Walter Key | 79 Highland Ave. | Somerville | MA    | 2143 |  9 |           1 | $234.56 | 2015-10-08
 ```


*INNER JOIN*
An inner join only returns those records that have “matches” in both tables. So for every record returned in T1 – you will also get the record linked by the foreign key in T2. In programming logic – think in terms of AND.

Inner join produces only the set of records that match in both Table A and Table B.

*LEFT JOIN*
A left join returns all the records in the “left” table (T1) whether they have a match in the right table or not.

If, however, they do have a match in the right table – give me the “matching” data from the right table as well. If not – fill in the holes with null.
