# Mongo Vampire Hunt

In this exercise, we will interact with data in our database **directly** using Mongo queries.

## Setup

We will be doing all of our coding in terminal, but we will use this mini-app to seed our database with vampires so we have data to work with.

1. In terminal anywhere, start your mongo server with `mongod`.

2. Open a new tab (`cmd + t`) and open your mongo console with `mongo`. Make sure there are no errors/ no other instances of this running.

3. Open a new tab in terminal (3 altogether) and navigate to the `vampire_hunt` folder inside `morning_exercise` for today. You will have to:

  - run `npm install` to install and use mongoose and express.
  - run `nodemon` and confirm our app is hooked up to mongo and listening to 3000:

    Example Output:
    ```
    **Mongoose is CONNECTED**
    ***LISTENING***"
    ```

4. Now open ONE MORE terminal tab (4 altogether) and let's populate our database. Type ONLY ONCE:

  ```
  curl localhost:3000/seedvampire
  ```

  This makes a request to `localhost:3000/seedvampire` without the need of a browser. And the `/seedvampire` route is set up to create data.

5. Go back to your mongo terminal and let's check it worked:
  - `show dbs` to show all your databases. If you see `vampire_hunt` Congrats!
  - `use vampire_hunt` to get to our vampire collection
  - `db.vampires.find().pretty()` will show you the full list of data

6. You can close your `curl` tab, we won't be needing that anymore.


## Directions

For the following parts, write mongo queries in your CLI, and when you figure out the right answer, copy the correct mongo queries into a new `vampire_queries.md` file.

You will definitely need to reference [mongo docs]([https://docs.mongodb.org/manual/reference/operator/query/#query-selectors]).

### Part 1
#### Basic Selections by property & operators

Select the vampire:

  - that has 112 victims `db.vampires.find({victims: 112})`
  - that has the name Francis Frost
  - whose location is "Paris, France"
  - have greater than 500 victims
  - have fewer than or equal to 150 victims
  - have a victim count is not equal to 210234
  - have greater than 150 AND fewer than 500 victims

### Part 2
#### Select by exists or does not exist
Select all the vampires that:

  - have a title property
  - do not have a victims property
  - have a title AND no victims
  - have victims AND the victims they have are greater than 1000

### Part 3
#### Select objects that match one of several values
Select all the vampires that:

  - love either `frilly shirtsleeves` or `frilly collars`
  - love `brooding`
  - love at least one of the following: `appearing innocent`, `trickery`, `lurking in rotting mansions`, `R&B music`
  - love `fancy cloaks` but not if they also love either `top hats` or `virgin blood`
    \* *Hint-You will also have to use $nin* \*

    ### Part 4
#### Select objects that match one of several values
Select all the vampires that:

  - love either `frilly shirtsleeves` or `frilly collars`
  - love `brooding`
  - love at least one of the following: `appearing innocent`, `trickery`, `lurking in rotting mansions`, `R&B music`
  - love `fancy cloaks` but not if they also love either `top hats` or `virgin blood`
    \* *Hint-You will also have to use $nin* \*

### Part 5
#### Select with OR
Select all the vampires that:

  - are from `New York, New York, US` or `New Orleans, Louisiana, US`  
  - love `brooding` or `being tragic`  
  - have more than 1000 victims or love `marshmallows`  
  - have red hair or green eyes  

### Part 6
#### Negative Selection
Select all vampires that:  

  - love `ribbons` but do not have blonde hair  
  - are not from Rome  
  - do not love any of the following:
  [`fancy cloaks`, `frilly shirtsleeves`, `appearing innocent`, `being tragic`, `brooding`]  
  - have not killed more than 200 people  

### Part 7
#### Replacing a record
Replace the following:  

  - replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'  
  - replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'

### Part 8
#### Update single values
Update the following:

  - Update 'Guy Man' to have a gender of 'm'  
  - Update 'Eve' to have a gender of 'f'  
  - Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'  
  - Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
  - Rename 'Eve's' name field to 'moniker'

### Part 9
#### Remove documents
https://docs.mongodb.org/manual/tutorial/remove-documents/

  - Remove a single document wherein the hair_color is 'brown'
  - Remove all documents wheren the eye-color is 'green'
