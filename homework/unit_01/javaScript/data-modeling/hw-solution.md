[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
 
# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

> Since this is a to-do list, a 'task' is a natural abstraction, and in any case
> 'tasks' and 'projects' are both mentioned in the description. They are also
> likely to have their own data (such as names and/or descriptions), so it
> makes more sense to represent tasks as objects rather then just strings.
>
> A Task has:
> -   a name
> -   a time when it is begun
> -   a time when it is completed
>
> A Project has:
> -   a name
> -   a description
> -   a set of tasks

```javascript
var task {
  name: 'clean house',
  dateStarted: '05/02/2017',
  dateCompleted: 'unfinished'
};

var project = {
  name: 'Project 1',
  description: 'game built in JS',
  setOfTasks: ['create HTML page', 'create CSS page', 'create JS page', 'link the three pages together', 'create basic boilerplate', 'start creating game functionality', 'create win scenarios', 'create clickable start button', 'create clickable reset button', 'create winner screen']
};
```

### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

> Based on the description, photos and albums are key parts of the app's
> functionality, so making entities to represent them makes sense. However,
> the description also mentions users -- maybe at some point we'll need to keep
> track of which user uploaded which picture, or created which album. In that
> case, it might make sense to represent a user as well.
>
> A Photo has:
> -   a name
> -   a date
> -   a URL to where the image is hosted
>
> An Album has:
> -   a name
> -   a set of photos
>
> A User has:
> -   a username
> -   a set of photos that they've uploaded
> -   a set of albums that they've created

```javascript
var photo = {
  name: 'photo from beach',
  date: 'February 2016',
  url: 'images/photo1.jpg'
};

var album = {
  name: 'Trip to the Bahamas',
  setOfPhotos: ['images/photo1.jpg', 'images/photo2.jpg', 'images/photo3.jpg', 'images/photo4.jpg', 'images/photo5.jpg']
};

var user = {
  username: 'marenwoodruff',
  imagesUploaded: ['images/photo1.jpg', 'images/photo2.jpg', 'images/photo3.jpg', 'images/photo4.jpg', 'images/photo5.jpg'],
  albumsCreated: ['Trip to the Bahamas', 'Exploring Prague', 'Dream trip to Bali (to be added)']
};

```


### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

> This one's a bit trickier. The app isn't really recording or storing new data.
> So what is there to represent? Well, for one, the house -- it surely has some
> properties of its own. It might also make sense to model a light; at a
> minimum, you'll need to be able to keep track of the current brightness level
> of each light in order to know how to change it. It might also make sense to
> keep track of each light's location, or to give each light a name for greater
> usability. The thermostat may or may not need to be its own entity; if a house
> only has one thermostat, maybe that information could be stored as a property
> of the house. For now, I'm prepare to make that assumption.
>
> A Light has:
> -   a brightness level
> -   a location
> -   a name
>
> A Home has:
> -   a temperature
> -   a set of lights

```javascript
var light = {
  brightnessLevel: 'super bright',
  location: 'living room',
  name: 'chandlier'
};

var homeSystem = {
  temp: '73 degrees',
  setOfLights: ['living room', 'office', 'kitchen', 'bedroom', ' bathroom']
};
```

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

> There are a lot of possible entities here -- e-commerce has lots of moving
> parts. For starters, the description explicitly mentions products, orders, and
> a cart (which at the end of the day is really just an in-progress order).
> On top of that you can make the argument that there should be an intermediary
> entity -- an 'order item' or 'line item' -- which adds extra information like
> how much of a particular product should be added to the order.
>
> A Product has:
> -   a name
> -   a description
> -   a price
>
> An Order Item has:
> -   a product
> -   a quantity
>
> An Order has:
> -   a set of order items
> -   a status (i.e. 'in progress', 'completed')
> -   a date of when the order was completed

var product = {
  name: 'Vitamix Ascent A2500 Blender, Black',
  description: 'The best blender in the world.  Part blender, part food processor.  Can make soup, smoothies, sauces!  It is the item that will last forever- you can pass it on to your children.  So, spend the money now, and let them save later!',
  price: '$499.95'
};

var vitamixOrder = {
  product: 'vitamix',
  quantity: 1
};

var order: {
  setOfOrderItems: [vitamixOrder],
  status: 'in progress',
  dateCompleted: 'incomplete'
};

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they need to travel to get from one station to another. Two abstractions that you decide to use to model your application's data are Stations and Rail Lines, with the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

> One **major disadvantage** of this approach is that the app's purpose is to
> tell travellers how many stops they need to go in order to get from one
> station to another; that information is **not being stored** in the
> representationabove. It might be possible to do so by adding an extra
> 'line position' property to each station, but this is a bit awkward. It might
> be better (or at least more natural) for the line to represent its set of
> stations using an array.
>
> However, one advantage to this approach is that each station can be referenced
> by its name; if you use an array to represent the set of stations, you need to
> look up which station is at which position any time you want to access it.

### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

> The first approach roots all other representations inside the representation
> of a doctor. This makes finding all of the appointments that one doctor has
> easy; however, finding all the appointments a particular _patient_ has across
> multiple doctors will be tricker -- you would have to iterate through every
> doctor, and then for each doctor, iterate through every one of their
> appointments. Another concern is that since appointments only have a field
> for a patient, there's no way to know (just by looking at the appointment)
> who the doctor in question is, or even if there is one.
>
> In the second approach, it'll be a bit harder to find all appointments
> involving a given doctor -- you'll have to walk through all of the
> appointments on the list; however, this will also be true of finding all
> appointments involving a given patient, which is simpler than in the first
> approach.
>
> In choosing between one or the other, one key consideration is how often
> users will need to see all of a doctor's appointments vs all of a patient's
> appointments. For isntance, if the app is focused on tracking how doctors are
> spending their time, maybe looking up all of the appointment records
> associated with one patient is not something you'll need to do very often.

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

  > A Player has...
  > -   a username
  > -   a URL to an avatar image
  >
  > A Game has...
  > -   an X player
  > -   an O player
  > -   a set of moves that have been made by X and O
  >
  > A Move has...
  > -   a player token (X or O)
  > -   a position (perhaps a number from 0 - 8, representing each cell)

b.  How might those entities be represented in JavaScript code?

  > Here is one possible representation.

  ```js
  var examplePlayer = {
    username: 'rickest_rick_there_is',
    avatarURL: 'http://imgur.com/...'
  };
  var exampleMove = {
    playerToken: 'X',
    position: 3
  };
  var exampleGame = {
    xPlayer: {
      username: 'rickest_rick_there_is',
      avatarURL: 'http://imgur.com/...'
    },
    oPlayer: {
      username: 'morty',
      avatarURL: 'http://imgur.com/...'
    },
    moves: [
      {
        playerToken: 'X',
        position: 4
      },
      {
        playerToken: 'O',
        position: 2
      },
      {
        playerToken: 'X',
        position: 6
      }
    ]
  };
  ```

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

  > There must obviously be some representation of a game. The state of that
  > game could be modeled in a variety of ways; for example, as a 'board' that's
  > filled with 'pieces', or as a list of 'moves' made over time.
  >
  > An advantage to the first approach is that calculating three-in-a-row is a
  > little easier. An advantage to the second approach is that it allows you to
  > perfectly reconstruct the history of a game (whereas with only having a
  > board, you'd have to guess). Neither of these advantages is so significant
  > that one is a clear choice over the other. I opted for the second.
  >
  > In the second approach, each move would consist of a token placed (i.e. X
  > or O) and a particular location on the board, and each game would consist of
  > a set of moves; given that order of moves matters, it makes sense to
  > represent that set of moves with an array. From there, it's just a question
  > of how you associate two players; in this example, I chose to store each
  > player under a separate property of the game.
