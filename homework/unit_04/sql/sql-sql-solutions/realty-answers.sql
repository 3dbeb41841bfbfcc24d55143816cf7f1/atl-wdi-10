1. Realty Schema


DROP TABLE if EXISTS apartments;
DROP TABLE if EXISTS offices;
DROP TABLE if EXISTS storefronts;

CREATE TABLE apartments(
    id SERIAL PRIMARY KEY,
  apt_num INTEGER,
  bedrooms  SMALLINT,
  bathrooms NUMERIC(1),
  address TEXT NOT NULL,
  tenant VARCHAR(255),
  occupied BOOLEAN,
  sq_ft NUMERIC,
  price MONEY
);

CREATE TABLE offices (
  id SERIAL PRIMARY KEY,
  office_num NUMERIC,
  floors SMALLINT,
  sq_ft NUMERIC,
  cubicles SMALLINT,
  bathrooms SMALLINT,
  address TEXT NOT NULL,
  name VARCHAR(255),
  occupied BOOLEAN,
  price MONEY
);

CREATE TABLE storefronts (
  id SERIAL PRIMARY KEY,
  address TEXT NOT NULL,
  occupied BOOLEAN,
  price MONEY,
  kitchen BOOLEAN DEFAULT FALSE,
  sq_ft NUMERIC,
  owner VARCHAR(255),
  outdoor_seating BOOLEAN DEFAULT FALSE
);

1. --enter your seed data below

--------------- APARTMENTS ---------------------
INSERT INTO apartments
( apt_num, bedrooms, bathrooms, address, tenant, occupied, sq_ft, price) VALUES ( '12',      2,       1,      '123 Sesame Street, New York, NY', 'Bert & Earnie', 'true', 1111, 1111121);

INSERT INTO apartments
( apt_num, bedrooms, bathrooms, address, tenant, occupied, sq_ft, price) VALUES ( '10',      4,       1.5,      '111 Broadway, New York, NY', 'DFW', 'false', 2045, 1211121);

INSERT INTO apartments
( apt_num, bedrooms, bathrooms, address, tenant, occupied, sq_ft, price) VALUES ( '20',      6,       2,      '444 Lafayette, New York, NY', 'John Steinbeck', 'true', 3020, 1011121);

INSERT INTO apartments
( apt_num, bedrooms, bathrooms, address, tenant, occupied, sq_ft, price) VALUES ( '33',      3,       3,      '3333 Broadway, New York, NY', 'Neil Gaiman', 'true', 3333, 3333333);

INSERT INTO apartments
( apt_num, bedrooms, bathrooms, address, tenant, occupied, sq_ft, price) VALUES ( '45',      9,       4.5,      '5 Broadway, New York, NY', 'Brian K. Vaughn', 'true', 9000, 911121);

INSERT INTO apartments
( apt_num, bedrooms, bathrooms, address, tenant, occupied, sq_ft, price) VALUES ( 777,      7,       7,      '7777 Broadway, New York, NY', 'James Hamblin', 'true', 7777, 77777777);


INSERT INTO apartments
( apt_num, bedrooms, bathrooms, address, tenant, occupied, sq_ft, price)
VALUES ('240',2,1,'432 Macy Summit 18865-1026 South Carolina' , 'Gaylord Bashirian Sr.' ,true,4469,5252589);

--------------- OFFICES ---------------------
INSERT INTO offices (office_num, floors, sq_ft, cubicles, bathrooms, address, name, occupied, price) VALUES ( 4, 5, 66000, 7, 8, '123 Sesame Street, New York, NY', 'Jim Henson',  true, 999999999);

INSERT INTO offices (office_num, floors, sq_ft, cubicles, bathrooms, address, name, occupied, price) VALUES (274,39,131106,45,13,  '8737 Genoveva Hill 01416 Maryland' ,'Kshlerin Group',true,2532366);
INSERT INTO offices (office_num, floors, sq_ft, cubicles, bathrooms, address, name, occupied, price) VALUES (107,77,441349,392,10,  '2760 Eichmann Mission  Wyoming, 61690' ,'OHara - Rippin',false,8988248);
INSERT INTO offices (office_num, floors, sq_ft, cubicles, bathrooms, address, name, occupied, price) VALUES (335,6,107930,306,49,  '7580 Kiehn Causeway  New Hampshire, 25820-7602' ,'Windler and Sons',true,12688820);
INSERT INTO offices (office_num, floors, sq_ft, cubicles, bathrooms, address, name, occupied, price) VALUES (201,25,98384,259,17,  '2301 Alberta Meadow  Kentucky, 62783-7681' ,'Doyle - Kulas',true,13416820);
INSERT INTO offices (office_num, floors, sq_ft, cubicles, bathrooms, address, name, occupied, price) VALUES (217,39,229173,265,12,  '0117 Burley Well  Massachusetts, 67831 ,Wiza', 'Legros and Hermann',false,10259959);
INSERT INTO offices (office_num, floors, sq_ft, cubicles, bathrooms, address, name, occupied, price) VALUES (70,90,135915,194,44,  '7103 Celestino Tunnel  Pennsylvania, 31618-7425' ,'Schoen and Sons',true,10368847);
INSERT INTO offices (office_num, floors, sq_ft, cubicles, bathrooms, address, name, occupied, price) VALUES  (42,4,457694,113,42,  '094 Quitzon Mountains  New Jersey, 09409-8765 ','Barton LLC',true,7305480);

--------------- STOREFRONTS ---------------------
INSERT INTO storefronts ( address, occupied, price, kitchen, sq_ft, owner, outdoor_seating) VALUES ('  30011 Rutherford Ville  North Dakota, 11982 ',true,13464245,false,288226,'Aufderhar Inc',true);
INSERT INTO storefronts ( address, occupied, price, kitchen, sq_ft, owner, outdoor_seating) VALUES('  2321 Schowalter Tunnel  Arizona, 73049-1017 ',true,7876874,true,478419, 'Connelly, Von and Beier',true);
INSERT INTO storefronts ( address, occupied, price, kitchen, sq_ft, owner, outdoor_seating) VALUES ('  9347 Crona Grove  Maine, 88176 ',true,13213853,true,290951,'Koss, Vandervort and Metz',true);
INSERT INTO storefronts ( address, occupied, price, kitchen, sq_ft, owner, outdoor_seating) VALUES ('  7954 Crist Street  Ohio, 42835-7075 ',true,8283234,true,12888,'Bergnaum - Johnston',true);
INSERT INTO storefronts ( address, occupied, price, kitchen, sq_ft, owner, outdoor_seating) VALUES('  46698 Rollin Inlet  South Dakota, 78482 ',true,1289321,true,362812,'Barton LLC',true);
INSERT INTO storefronts ( address, occupied, price, kitchen, sq_ft, owner, outdoor_seating) VALUES('  0331 Berge Lights  Illinois, 88258-5513 ',true,14167395,true,40070,'Schmitt, Sanford and McClure',true);
INSERT INTO storefronts ( address, occupied, price, kitchen, sq_ft, owner, outdoor_seating) VALUES('  9285 VonRueden Haven  Kansas, 55914 ',true,11756724,true,54353,'Crist and Sons',false);


1. Realty Queries:

-- - The average square footage of all offices.
SELECT AVG(sq_ft) FROM offices;

-- - The total number of apartments.
SELECT COUNT(*) FROM apartments;

-- - The apartments where there is no tenant
SELECT * FROM apartments WHERE occupied = false;

-- - The names of all of the companies
SELECT name FROM offices;

-- - The number of cubicles and bathrooms in the 3rd office
SELECT cubicles, bathrooms FROM offices WHERE id=3;

-- - The storefronts that have kitchens
SELECT * from storefronts WHERE kitchen = true;

-- - The storefront with the highest square footage and outdoor seating
SELECT owner, sq_ft FROM storefronts ORDER BY sq_ft DESC LIMIT 1;

-- - The office with the lowest number of cubicles
SELECT name, cubicles FROM offices ORDER BY cubicles ASC LIMIT 1;

-- - The office with the most cubicles and bathrooms
SELECT name, cubicles, bathrooms FROM offices ORDER BY cubicles + bathrooms DESC LIMIT 1;
