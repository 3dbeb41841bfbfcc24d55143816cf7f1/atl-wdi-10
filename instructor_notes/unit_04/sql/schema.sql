drop table if exists customers;
drop table if exists orders;

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
