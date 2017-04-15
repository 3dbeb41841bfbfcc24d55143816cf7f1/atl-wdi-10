# Getting PGSQL

  - Mac: http://postgresapp.com/
  
    - Homebrew: 
      - `$ brew install postgres`
      - `$ brew services start postgres`
  - Linux
    - `apt-get install postgresql-9.4`
  - All
    - Verify your installation, by running `psql` in your terminal.  You should see:

```
$ psql
psql (9.6.1)
Type "help" for help.

matt=#
```  



## Trouble Shooting

### Could not Connect to Server

If you see this when your run `psql`, you have not started the PostgresApp first.

```
$ psql
psql: could not connect to server: No such file or directory
	Is the server running locally and accepting
	connections on Unix domain socket "/tmp/.s.PGSQL.5432"?
```

### Cannot start PostgreSQL

* Symptoms:
    - PostgreSQL not running and launchctl fails with the following error:

> postgresql.plist: Operation already in progress

* Solution:
    - view the PostgreSQL Server logs for potential errors:
      `subl /usr/local/var/postgres/server.log`
    - Google the last error and fix
    - One solution I found:
      `rm -rf /usr/local/var/postgres && initdb /usr/local/var/postgres`
    - Also may need to manually delete the pid file:
      `rm /usr/local/var/postgres/postmaster.pid`

* References:
    - https://github.com/Homebrew/homebrew/issues/35240
    - http://stackoverflow.com/questions/24379373/how-to-upgrade-postgres-from-9-3-to-9-4-without-losing-data

### Cannot start psql

* Symptoms:
    - psql: FATAL:  database "<user>" does not exist

* Solution:
    - Run createdb with no arguments to create a default database:
      `createdb`

### Cannot create a database

* Symptoms:
    - $ createdb  hangs / never returns

* Solution:
    - Mac OSX upgrades are known to remove empty directories under /usr/local/var which causes
      problems for PostgreSQL installations
    - To fix, run the following statements from the `bash` shell:

```
mkdir -p /usr/local/var/postgres/{pg_tblspc,pg_twophase,pg_stat_tmp}/
touch /usr/local/var/postgres/{pg_twophase,pg_stat_tmp}/.keep
pg_ctl start -D /usr/local/var/postgres
```

# Create a Database

```bash
$ createdb test1     # create a new database
$ psql test1         # connect to database

test1=# \l         # list all databases in PostgreSQL
test1=# \q         # quit
```

## Some PSQL Commands

```
\l               # list all databases
\c <database>    # connect to <database>
\d               # list all tables and other objects
\dt              # list all tables
\d <table_name>  # list details about <table_name>
\h               # show help
\q               # quit
```

## Where's all this data stored, anyway?

- Look in PostgresApp preferences.  You should see `~/Library/Application\ Support/Postgres/var-9.4`.  Let's take a look in there.
- We see `postgres-server.log`
- Check out a file within `global/`. What is THAT?
  - This is binary (not text) data, spread out across multiple files
- [More info](http://www.postgresql.org/docs/9.0/static/storage-file-layout.html)
