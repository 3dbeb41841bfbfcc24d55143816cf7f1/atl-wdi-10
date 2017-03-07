<!-- Creator: Thom Page -->

# GLITCH IN THE MATRIX

![](https://i.imgur.com/90wg6lD.png)

## Exercise Objectives

- gain practice setting up a rails app from scratch
- gain familiarity with common Rails errors and feel comfortable troubleshooting them
- get more practice with migrations, correcting migrations, seeds, ActiveRecord

## Setup

No code is provided for you. Follow the prompts quite literally! Make allll the glitches!

## Directions

### Part 1: Setup

- In the `homework` folder for today

- Use `rails new` to make a new Rails project called `matrix_app_api`

- Do it now!

**&#x1F47E; Glitch?**  You forgot to use the `--api` flag? Can't really fix that.

**Solution:** Don't worry about it for now, just keep going!

**&#x1F47E; Glitch?** You forgot to make postgres the db with the `-d` flag? If you forget this, `sqlite` will be the default, and we don't want that. You could fix this by installing the `pg` gem and altering the `database.yml` file, but since you just made the app it would be easier to start over.

**Solution:** Do `rails new` again, and this time use postgresql.

:dart: "Commit 1: Initialized Rails server".


### Part 2: Run the Rails server

We haven't done this yet, but in Terminal, run the Rails server with `rails s`. The output in Terminal should look like:

![](https://i.imgur.com/Fx3Yue5.png)

In your browser, go to `localhost:3000`

You should see either error page:

If you remembered to set up with the `--api` flag:

![](https://i.imgur.com/TLr8Llh.png)

If you forgot the `--api` flag:

![](https://i.imgur.com/x9ZTg7B.png)

**&#x1F47E; Glitch!** The database does not exist?

**Solution:** Quit the server with `ctrl + c`. Make the database with `rails db:create`

:dart: "Commit 2: Created the db".


### Part 3:  Run migrations

Run your migrations with `rails db:migrate`.

**&#x1F47E; Glitch!** Nothing happens. That's because we did not first `generate` any migrations.

**Solution:** Generate migrations (instructions below)


### Part 4: Generate migrations

We are going to make a **table** for the database. The table will eventually hold information about characters from the Matrix movies.

Generate a migration to make the table:

```
rails g migration CreateCharacter
```

Even though Character is singular, go ahead and press enter to generate the migration.

**&#x1F47E; Glitch!** I realized that I don't want a table called `character`. I want a table called `characters`. It's proper to name the table with a plural of the resource.

**Solution:** Rails solved this for me.

The migration file should look like this:

![](https://i.imgur.com/3Gyh5RP.png)

You can see that it's going to name the table `characters` anyway! Thanks, Rails!

:dart: "Commit 3: Created table migration".

### Part 5: Give details to migration file

I want my Matrix characters to have a name, description, and image url. All three will be strings. I'm going to try this in the migration file:

![](https://i.imgur.com/OZg87Yo.png)

I'm going to ignore the fact that I spelled `description` wrong (`desciption`). Go ahead and make the typo and we'll fix it.


### Part 6: Run migrations

Run the migration to create the table:

```
rails db:migrate
```

![](https://i.imgur.com/PoN7zYk.png)

**&#x1F47E; Glitch!** When I check the `schema.rb` file, I am disgusted to learn that I spelled `description` wrong.

![](https://i.imgur.com/O60cIMc.png)

**Solution:** Run another migration to change the column name (instructions below)


### Part 7: Make a corrective migration

I want to change the column in the schema called "desciption" to "description".

* Run a migration `rails g migration FixDescriptionColumnTypo`

The migration file should be an empty change method:

![](https://i.imgur.com/Fi0Oexz.png)

Good! No glitches, even though we called our migration `FixSomething` rather than `ChangeSomething`. It's all good, mates.

Add in `rename_column`:

```
def change
  rename_column :characters, :desciption, :description
end
```

![](https://i.imgur.com/Cr5Be3H.png)

Before you run the migration, answer these two questions:

<details><summary>Q: What is `rename_column` exactly?</summary>
A: It's a method invocation, like: `rename_column(characters, desciption, description)`
</details>

<details><summary>Q: What are the three arguments passed to the `rename_column` method?</summary>
A: table name, column to change, updated column name
</details>

How'd you do? Now you can run the migration:

```
rails db:migrate
```

### Part 8: Check migrations

* Check the `schema.rb` file.

* Check the db with `rails dbconsole`

* Enter: `SELECT * FROM characters;`

![](https://i.imgur.com/gswi0M7.png)

* `\q` to quit dbconsole.

**&#x1F47E; Glitch?** If the columns are not spelled correctly, run more migrations to fix the column names.

:dart: "Commit 4: Renamed the column".


### Part 9: Change table

**&#x1F47E; Glitch!** I decided I want to name my entire table something other than `characters`. I want to called it `matrix_characters` because I might add in more movies to my app later, and want to be specific about which movie's characters I'm referencing.

**Solution:** Create another migration

```
rails g migration ChangeTableName
```

I can use a method called `rename_table` in the migration file:

```
class ChangeTableName < ActiveRecord::Migration[5.0]
  def change
    rename_table :characters, :matrix_characters
  end
end
```

![](https://i.imgur.com/viS2D1c.png)


Double check for typos and syntax! All good? Go ahead and run a migration:

```
rails db:migrate
```

* Check the `schema.rb` and see the change.

:dart: "Commit 5: Changed table name".


### Part 10: Um, I changed my mind

**&#x1F47E; Glitch!** I am the worst at making up my mind. I don't want the table to be called `matrix_characters`. I just want it to be called `characters`. I don't want or need the last migration, so can I get rid of it?

**Solution:**

* Undo the last migration with `rails db:rollback`
* Check that the `schema.rb` has "characters" as the table name, not "matrix_characters".

**&#x1F47E; Glitch!** If I ever run migrations again, it will rename my table again, because that migration file is sitting there ready to go. Ugh! I need to get rid of it!

**Solution:** You can destroy the migration with `rails destroy migration <migration name>`. We want the migration we've called "ChangeTableName" to be destroyed so:

![](https://i.imgur.com/LHGGBN5.png)

![](https://i.imgur.com/qIEa6QH.png)

It should be gone. You can shorten the command to:

```
rails d migration ChangeTableName
```

:dart: **Commit your work** "Commit 6: Rolled back and destroyed migration".


### Part 10: Seed the database

Open the file `db/seeds.rb`

The pattern for making a single entry is:

```
Model.create({ column: data, column: data })
```

Note that the Model name is **capitalized** and **singular**.

We can create many of a given Model using an array of entries. Copy this data into your `seeds.rb` file, an array of Matrix characters for our Character model (our table is called 'characters', so our model should be called 'Character' .... right?:

```
Character.create([

    { name: "Neo", description: false },
    { name: "Trinity", description: false },
    { name: "Morpheus", description: false },
    { name: "Agent Smith", description: false },

])
```

![](https://i.imgur.com/2Ub3JU5.png)

Save and run the seed file:

```
rails db:seed
```

**&#x1F47E; Glitch! &#x1F47E; Glitch! &#x1F47E; Glitch! &#x1F47E; Glitch! &#x1F47E; Glitch!**

![](https://i.imgur.com/eEnKDGQ.png)

* We haven't defined what Character is, yet.

* **Solution:** Make a Character model to relate to our database (instructions below). Then, we can make ActiveRecord entries for the Character model.

:dart: "Commit 7: Failed to seed database"


### Part 11: Make a model

To make a model, first we need a model file.

Make a file in `app/models` called `characters.rb`

Can we seed our model yet? Run `rails db:seed`

**&#x1F47E; Glitch!** Character is still not recognized :(

**Solution:**

* Make a Character class. In `characters.rb` write in:

```
class Character

end
```

Can we seed our model yet? Run `rails db:seed`

**&#x1F47E; Glitch!** Character is _still_ not recognized

**Solution:** Make the Character class inherit from ApplicationRecord (which, if you look in the `application_record.rb` file, you'll see that it inherits from `ActiveRecord`)

```
class Character < ApplicationRecord

end
```

![](https://i.imgur.com/5NjS00n.png)

Can we seed our model yet? Run `rails db:seed`

**&#x1F47E; Glitch!** Nope! Character is still an unrecognized constant.

**Solution:** Rename our model file. Rails favors "**convention** over **configuration**." We have to stick to Rails' conventions or we'll be doomed. Rails wants the model files to be **singular** not plural.

* Rename `characters.rb` to `character.rb`

Can we seed our model yet? Run `rails db:seed`

**&#x1F47E; Glitch?** There should be no glitch! In fact, there should be nothing.

![](https://i.imgur.com/T8TucKh.png)

If you did get an error, keep trying to fix the glitch

:dart: "Commit 8: Seeded the Data"

### Part 12: Check seed data in db

Open `rails dbconsole`

```
SELECT * FROM characters;
```

Expected output:

![](https://i.imgur.com/UCPfefb.png)


If you have any glitches, fix them!

:dart: "Commit 9: data exists in the database"


### Part 13: The seed data is all wrong

**&#x1F47E; Glitch!** Ughhh.. I don't like the seed data. There is an 'f' in the description columns instead of a description, and no data in the img_url columns. _But_ if I run more seeds the old data will still be there. I kind of want to reset the whole db with new seed data.

**Solution:** This is kinda overkill, but you never know when you'll need to do this. Drop the databases, run all the migrations all over again and then re-seed the database from scratch. (Instructions below)

Change your seed data to have a (very) brief description of each Matrix character. Don't worry about the img_url for now:

```
{ name: "Neo", description: "A computer hacker who becomes 'The One' in leading the war against machines." },
{ name: "Trinity", description: "Neo's BFF and GF, made famous by cracking a database so secure that she is famous among hackers." },
{ name: "Morpheus", description: "Pill-carrying captain of the Nebuchadnezzar wanted by 'The Agents.'" },
{ name: "Agent Smith", description: "A sentient computer program carefully disguised like an average-looking human male who is Neo's archenemy. "},
```

* Then, run `rails db:reset`

Expected output:

![](https://i.imgur.com/zbavral.png)

**reset** has dropped the databases, re-run the migrations, and re-seeded the databases.

Check that the db has seeded correctly inside `rails dbconsole`

```
SELECT * FROM characters;
```

`\q` to quit

:dart: "Commit 9: Reset database"


### Part 14: Active Record Queries

Open Rails console

`rails c`

Using Active Record queries, do the following:

* add an img url to each of the Matrix characters
* delete Agent Smith
* add a new character: The Oracle

:dart: "Commit 10: Active Record queries"


### Part 15: Relations

* Make second model, `vehicles` that has a column for `name` and `type`
* Seed the vehicles with a type "Spaceship", name "Nebuchadnezzar"
* Change the `characters` table to have an integer field called `vehicle_id`
* In rails console, associate Morpheus and Trinity with the Nebuchadnezzar

:dart: "Commit 11: Relations"


## Reach Goals

* Read through the documentation on Migrations [Active Record Migrations](http://edgeguides.rubyonrails.org/active_record_migrations.html)

* Read about controllers for Monday's lesson [Rails controllers](https://github.com/ga-students/wdi-remote-matrix/blob/master/unit_4/w11d1/instructor_notes/RAILS_CONTROLLERS.md)

* Implement an Index route that displays the JSON of all Matrix characters

* Implement a Show route that displays the JSON of a single Matrix character


## Submitting Your Work

  When you're ready to submit your work,

  1.  Add, commit, and push your code to your fork of the class repo.
  2.  File an issue on the class repo titled "Your Name -- wXXdXX".

  The issue should include:

  -   A link that points back to your fork.

  -   A 'comfort' score on how you feel about the material, from 1 (very
      uncomfortable) to 5 (very comfortable)
