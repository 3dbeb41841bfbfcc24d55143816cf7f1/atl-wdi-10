![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# SQL: Where In The World Is Carmen Sandiego?

We're going to use what we've learned already about searching with SQL commands, and apply it to chase down and capture an elusive and world-reknowned thief, Carmen Sandiego. Follow the clues, use the interweb - write down both the SQL commands /queries you used and your answers to the clues (in the [find_carmen.sql](find_carmen.sql) file)- and figure out where Carmen's headed, so we can catch her and bring her in.

## Exercise Objectives

- gain deeper knowledge for intermediate SQL queries
- practice interacting with PostgreSQL through the `psql` shell in terminal
- practice SQL queries such as "WHERE", "ORDER BY", "AND", "LIMIT", "LIKE", "DESC", and "ASC"

## Setup

- Make sure you're in the `carmen-sandiego` directory in the homework folder.
- Record your answers (SQL queries) in [find_carmen.sql](find_carmen.sql)
- From the command line, let's create a new database called ```carmen``` and populate it with the SQL found in ```world.sql```


Use the postgres shell:
  ```
  # Enter psql
  psql

  # Create database
  CREATE DATABASE carmen;

  # Connect to carmen
  \c carmen

  # Seed data from world.sql
  \i starter-code/world.SQL
  ```

Then, use the clues below to create the appropriate SQL queries to help you find Carmen and then, tell us where she's heading!! (Record your answers in the [find_carmen.sql](find_carmen.sql) file). Don't forget to git commit when you've found her!

### The Clues

  - **Clue #1:** We recently got word that someone fitting Carmen Sandiego's description has been traveling through Southern Europe. She's most likely traveling someplace where she won't be noticed, so find the least populated country in Southern Europe, and we'll start looking for her there.

  - **Clue #2:** Now that we're here, we have insight that Carmen was seen attending language classes in this country's officially recognized language. Check our databases and find out what language is spoken in this country, so we can call in a translator to work with you.

  - **Clue #3:** We have new news on the classes Carmen attended: our gumshoes tell us she's moved on to a different country, a country where people speak *only* the language she was learning. Find out which nearby country speaks nothing but that language.

  - **Clue #4:** We're booking the first flight out: maybe we've actually got a chance to catch her this time. There are only two cities she could be flying to in the country. One is named the *same* as the country – that would be too obvious. We're following our gut on this one; find out what other city in that country she might be flying to.

<hr>
&#x1F534; COMMIT 1<br>
"Commit: CARMEN SANDIEGO - Halfway there! Hot on her trail."
<hr>

  - **Clue #5:** We're close! Our South American agent says she just got a taxi at the airport, and is headed towards the capital! Look up the country's capital, and get there pronto! Send us the name of where you're headed and we'll follow right behind you!

  - **Clue #6:** Oh no, she pulled a switch: there are two cities with very similar names, but in totally different parts of the globe! She's headed to South America as we speak; go find a city whose name is *like* the one we were headed to, but doesn't end the same. Find out the city, and do another search for what country it's in. Hurry!

  - **Clue #7:** She knows we're on to her: her taxi dropped her off at the international airport, and she beat us to the boarding gates. We have one chance to catch her, we just have to know where she's heading and beat her to the landing dock.

  - Lucky for us, she's getting cocky. She left us a note, and I'm sure she thinks she's very clever, but if we can crack it, we can finally put her where she belongs – behind bars.

```
  Our playdate of late has been unusually fun –
  As an agent, I'll say, you've been a joy to outrun.
  And while the food here is great, and the people – so nice!
  I need a little more sunshine with my slice of life.
  So I'm off to add one to the population I find
  In a city of ninety-one thousand and now, eighty five.
```
<hr>
&#x1F534; COMMIT 2<br>
"Commit: CARMEN SANDIEGO - I found Carmen Sandiego"
<hr>


### Hungry for more?
Some of the entries have gotten a bit messed up. For example, the capital of Brazil is not `Brasï¿½lia`, rather, it is Brasília. Update this entry to the correct spelling. Record your update, in the find_carmen.sql file (below `I found Carmen`), and do a query for one row and copy paste it to show the update.

Update any other two entries that have gotten messed up.


### SQL file format with comments

<p align="center">
  <img src ="http://s3.postimg.org/8386vdt43/Screen_Shot_2015_07_08_at_8_11_25_PM.png">
</p>



## Additional Resources

- [PostgreSQL tutorial](http://www.tutorialspoint.com/postgresql/)
- [PostgreSQL official documentation](http://www.postgresql.org/docs/)
