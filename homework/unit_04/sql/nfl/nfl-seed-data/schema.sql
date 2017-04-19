drop table if exists players;
drop table if exists teams;

create table teams(
    id serial primary key,
    name varchar(255) not null,
    stadium varchar(255),
    division varchar(255),
    conference varchar(255),
    head_coach varchar(255),
    active boolean
);

create table players(
    id serial primary key,
    name varchar(255) not null,
    position varchar(255),
    salary integer,
    team_id integer references teams
);
