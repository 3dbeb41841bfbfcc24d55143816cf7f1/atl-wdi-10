-- - List the names of all NFL teams'

SELECT name FROM teams;

-- name
-- ----------------------
-- Buffalo Bills
-- ...
--  Seattle Seahawks
-- (64 rows)

-- - List the stadium name and head coach of all NFC teams

SELECT stadium, head_coach FROM teams;

-- stadium            |   head_coach
-- -------------------------------+----------------
-- Ralph Wilson Stadium          | Doug Marrone
-- ...
-- CenturyLink Field             | Pete Carroll
-- (64 rows)

-- - List the head coaches of the AFC South

SELECT head_coach FROM teams WHERE conference='AFC' AND division= 'South';

-- head_coach
-- ----------------
-- Bill OBrien
-- Chuck Pagano
-- Gus Bradley
-- Ken Whisenhunt
-- Bill OBrien
-- Chuck Pagano
-- Gus Bradley
-- Ken Whisenhunt
-- (8 rows)

-- - The total number of players in the NFL

SELECT COUNT(*) FROM players;

-- count
-- -------
--  1532
-- (1 row)

-- - The team names and head coaches of the NFC North and AFC East

SELECT name, head_coach FROM teams WHERE conference ='NFC' AND division ='North' OR conference='AFC' AND division='East';

-- name         |   head_coach
-- ----------------------+----------------
-- Buffalo Bills        | Doug Marrone
-- Miami Dolphins       | Joe Philbin
-- New England Patriots | Bill Belichick
-- New York Jets        | Rex Ryan
-- Chicago Bears        | Marc Trestman
-- Detroit Lions        | Jim Caldwell
-- Green Bay Packers    | Mike McCarthy
-- Minnesota Vikings    | Mike Zimmer
-- Buffalo Bills        | Doug Marrone
-- Miami Dolphins       | Joe Philbin
-- New England Patriots | Bill Belichick
-- New York Jets        | Rex Ryan
-- Chicago Bears        | Marc Trestman
-- Detroit Lions        | Jim Caldwell
-- Green Bay Packers    | Mike McCarthy
-- Minnesota Vikings    | Mike Zimmer
-- (16 rows)


-- - The 50 players with the highest salaries

SELECT name FROM players ORDER BY salary DESC LIMIT 50;

-- name
-- -------------------------
-- Peyton Manning
-- ...
-- Ed Reed
-- (50 rows)

-- - The average salary of all NFL players

SELECT AVG(salary) FROM players;

-- avg
-- ----------------------
-- 1579692.539817232376
-- (1 row)

-- - The names and positions of players with a salary above 10_000_000
SELECT name, position FROM players  WHERE salary > 10000000;
-- name           | position
-- -------------------------+----------
-- Jake Long               | T
-- Joe Thomas              | T
-- Dwight Freeney          | DE
-- Peyton Manning (buyout) | QB
-- Peyton Manning          | QB
-- Elvis Dumervil          | DE
-- Tamba Hali              | DE
-- Philip Rivers           | QB
-- Michael Vick            | QB
-- Nnamdi Asomugha         | CB
-- Trent Williams          | T
-- Matthew Stafford        | QB
-- Cliff Avril             | DE
-- Jared Allen             | DE
-- Matt Ryan               | QB
-- Brent Grimes            | CB
-- Drew Brees              | QB
-- Vincent Jackson         | WR
-- Calais Campbell         | DE
-- Sam Bradford            | QB
-- Chris Long              | DE
-- (21 rows)


-- - The player with the highest salary in the NFL
SELECT name FROM players ORDER BY salary DESC LIMIT 1;

-- name
-- ----------------
-- Peyton Manning
-- (1 row)

SELECT name, position, salary FROM players  WHERE salary > 10000000 ORDER BY salary DESC; --doublecheck that I did it right

-- name           | position |  salary
-- -------------------------+----------+----------
-- Peyton Manning          | QB       | 18000000
-- Drew Brees              | QB       | 15760000
-- Dwight Freeney          | DE       | 14035000
-- Elvis Dumervil          | DE       | 14000000
-- Michael Vick            | QB       | 12500000
-- Sam Bradford            | QB       | 12000000
-- Jared Allen             | DE       | 11619850
-- Matthew Stafford        | QB       | 11500000
-- Matt Ryan               | QB       | 11500000
-- Tamba Hali              | DE       | 11250000
-- Jake Long               | T        | 11200000
-- Trent Williams          | T        | 11000000
-- Nnamdi Asomugha         | CB       | 11000000
-- Vincent Jackson         | WR       | 11000000
-- Cliff Avril             | DE       | 10600000
-- Calais Campbell         | DE       | 10600000
-- Joe Thomas              | T        | 10500000
-- Brent Grimes            | CB       | 10431000
-- Peyton Manning (buyout) | QB       | 10400000
-- Chris Long              | DE       | 10310000
-- Philip Rivers           | QB       | 10200000
-- (21 rows)

-- - The name and position of the first 100 players with the lowest salaries
SELECT name, position FROM players ORDER BY salary ASC LIMIT 100;

-- name          | position
-- ------------------------+----------
-- Phillip Dillard        |
-- Eric Kettani           | RB
-- ...
-- Caleb Schlauderaff     | G
-- (100 rows)


-- - The average salary for a DE in the nfl

SELECT AVG(salary) FROM players WHERE position='DE';
-- avg
-- ----------------------
-- 2161326.377049180328
-- (1 row)


-- - The names of all the players on the Buffalo Bills
SELECT players.name, teams.name FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'Buffalo Bills';

-- name        |     name
-- --------------------+---------------
-- Mario Williams     | Buffalo Bills
-- ...
-- Michael Jasper     | Buffalo Bills
-- (59 rows)


-- - The total salary of all players on the New York Giants
SELECT SUM(players.salary) FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'New York Giants';

-- sum
-- ----------
-- 74179466
-- (1 row)

-- - The player with the lowest salary on the Green Bay Packers
SELECT players.name FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE '%Green Bay Packers%' ORDER BY salary ASC LIMIT 1;

-- name
-- ----------------
-- Shaky Smithson
-- (1 row)
