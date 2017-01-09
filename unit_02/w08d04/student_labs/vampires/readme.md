# Vampire Chronicles

![Interview with the Vampire](https://mischiefmanagedsite.files.wordpress.com/2014/05/3.gif)

For this morning's lab we will be adding a vampires collection to our 'learn' database

##Connect to your 'vampire' database

Start your mongo server
```
mongod
```
Next, open a new terminal window and connect to your server
```
mongo
```
See available databases
```
show dbs
```
Create your 'vampire' database
```
use vampire
```

##Create your 'vampires' collection

Copy the command from the populate_vampires.js file into your terminal

##Let's practice selection!
Run the following selections and **SAVE YOUR COMMANDS into a SELECT_VAMPIRES.md file**.  A cheatsheet of more advanced selection tools is available [here](mongo_cheatsheet2.md)

###Select by comparison
Select all the vampires that:
  - have greater than 500 victims
  - have less than or equal to 150 victims
  - have a  victim count is not equal to 210234
  - have more than 150 AND less than 500 victims  

###Select by exists or does not exist
Select all the vampires that:
  - have a title property
  - do no have a victims property
  - have a title AND no victims
  - have victims AND the victims they have are greater than 1000

###Select objects that match one of several values
Select all the vampires that:
  - love either 'frilly shirtsleeves' or 'frilly collars'
  - love 'brooding'
  - love at least one of the following: 'appearing innocent,' 'trickery,' 'lurking in rotting mansions,' 'R&B music'
  - love 'fancy cloaks' but not if they also love either 'top hats' or 'virgin blood'  
    \* *Hint-You will also have to use $nin* \*

###Select with OR
Select all the vampires that:
  - are from 'New York, New York, US' or 'New Orleans, Louisiana, US'
  - love 'brooding' or 'being tragic'
  - have more than 1000 victims or love 'marshmallows'
  - have red hair or green eyes

###Negative Selection
Select all vampires that:
  - love 'ribbons' but do not have blonde hair
  - are not from Rome
  - do not love any of the following:
  ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']
  - have not killed more than 200 people
