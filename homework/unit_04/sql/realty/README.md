# SQL: Realty

### Step 1 - Create a new database
- Create a new database called `realty_db`.

<hr>
&#x1F534; COMMIT 1<br>
"Commit: REALTY - Realty database created"
<hr>

### Step 2 - Create a Schema

Use the schema file named [realty_schema.sql](realty_schema.sql), and
create tables in your realty database which should model
`Apartments`, `Offices` and `Storefronts`. They should have the
following properties:

#### An Apartment should have:

1. an id (serial primary key)
2. an apartment number
3. number of bedrooms
4. number of bathrooms
5. an address (required, not null)
6. a tenant
7. an occupied status (boolean)
8. a square footage
9. a price

#### An Office should have:

1. an id
2. an office number
3. a number of floors
4. a square footage
5. a number of cubicles
6. a number of bathrooms
7. an address (required, not null)
8. a company name
9. an occupied status
10. a price

#### A storefront should have:

1. an id
2. an address
3. an occupied status
4. a price
5. whether there is a kitchen or not
6. a square footage
7. an owner
8. whether there is outdoor seating or not (default false)

Load the seed file into your database from the command line. Use the
`psql` shell to inspect your schema.

<hr>
&#x1F534; COMMIT 2<br>
"Commit: REALTY - Realty schema created"
<hr>

### Step 3 - Define a seed file and seed your database
In a SQL file named [realty_seed.sql](realty_seed.sql), write commands that will add new entries into your apartment, office and storefront tables. You should create at least 2 entries for each table. Vary the attributes of each entry so no two are alike. From the command line, load this seed file into your database. [You can use faker.js to generate some of this data for you] (https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html)

<hr>
&#x1F534; COMMIT 3<br>
"Commit: REALTY - Realty seed file created and db seeded"
<hr>

### Step 4 - Queries
In the file [realty.sql](realty.sql), write the SQL commands you would use to retrieve the following information from your database. Test each command in PSQL to make sure it is correct:

1. The average square footage of all offices.
2. The total number of apartments.
3. The apartments where there is no tenant
4. The names of all of the companies
5. The number of cubicles and bathrooms in the 3rd office
6. The storefronts that have kitchens
7. The storefront with the highest square footage and outdoor seating
8. The office with the lowest number of cubicles
9. The office with the most cubicles and bathrooms


&#x1F534; COMMIT 4<br>
"Commit: Realty queries completed"

### Hungry for more?
Entering fake data is such a chore! Use your programming skills to build an app to generate the entries for you.

<details><summary>Getting Started</summary>

- make a new folder called `faker`
- `cd` into that folder,
- `touch generate-seed-data.js`
- `npm install faker --save`
- at the top of the file `var faker = require ('Faker');`

- make some functions:
  - fakeApartments
  - fakeOffices
  - fakeStorefronts
  - getRandomInt (you can just grab this from MDN - be sure to cite it, if you use it! Or write your own)
  - getRandomTrueFalse (returns a true or false vale, set it to be true 70% of the time)
  - finally console log your data so you when you run
  - `node generate-seed.data.js` it will out put something like this:
   ```INSERT INTO storefronts ( address, occupied, price, kitchen, sq_ft, owner, outdoor_seating) VALUES ('  30011 Rutherford Ville  North Dakota, 11982 ',true,13464245,false,288226,'Aufderhar Inc',true);```

   <details><summary> SUPER SPOILER! A way to write fakeStorefronts (but feel free to use faker however you want!)</summary>

   ```
   function fakeStorefronts(){
  var address = faker.fake ("  {{address.streetAddress}}  {{address.state}}, {{address.zipCode}} ");
  var occupied = getRandomTrueFalse ();
  var price = getRandomInt(380000, 15000000);
  var kitchen = getRandomTrueFalse ();
  var sq_ft =   getRandomInt(100, 500000);
  var owner = faker.fake ("{{company.companyName}}");
  var outdoor_seating = getRandomTrueFalse ();
  var startQuery = "INSERT INTO storefronts ( address, occupied, price, kitchen, sq_ft, owner, outdoor_seating) VALUES "
  var query = startQuery + " ('" +
    address + "'," +
    occupied + "," +
    price + "," +
    kitchen + "," +
    sq_ft + ",'" +
    owner + "'," +
    outdoor_seating  +
    ");";

  return query;
}

console.log(fakeStorefronts());


SAMPLE OUTPUT:
INSERT INTO storefronts ( address, occupied, price, kitchen, sq_ft, owner, outdoor_seating) VALUES  ('  61153 Powlowski Via  Nevada, 57178-3706 ',true,4192529,true,390865,'Green - Larkin',true);
```
</details>
</details>

### Wildy Ravenous For Even More!?
Upgrade `generate-seed-data.js` to take two arguments, `tableName` and `numberOfInsertions` and have it automatically add to your tables in Postgres, rather than console logging!
