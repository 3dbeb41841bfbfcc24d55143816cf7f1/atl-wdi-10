---
title: Express - Authentication and Authorization strategies w/ Passport
type: lesson
duration: All day :P
creator:
    name: Colin Hart
    class: WDIr-R2D2
---
# Authentication and Authorization strategies w/ Passport

## Lesson Objectives

- Describe Authentication and Authorization as concepts
- Configure passport, passport-local, and passport-local-mongoose, express-sessions in node/express
- Express the purpose of sessions
- identify the methods passport provides and the context in which we use them

## Brief Theory section

Passport is a large library that gives us a lot of functionality

### Patterns

We're going to see several patterns during this exercise that are going to be new(ish)


For one, we're going to see a _LOT_ more middleware:

```
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('express-session')({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/users', usersController );
```

So much middleware!


Two, we're also going to apply middleware in a new way:

```
router.post('/login', passport.authenticate('local'), function(req, res) {
  [... code ...]
});
```

Notice the function reference between `'/login'` and `function(req, res)`

It's not a big deal! We're just inserting a function that get's called before the the route starts executing it's callback.

Exercise:

Add some middle ware the `console.logs(hello)` before returning the route.

Go into the starter code run $`npm install`


1. in `server.js` define a function called hello that console.logs(hello).
2. in the root route in `server.js` between `'/'` and `function(req, res)` add the function reference to hello.
3. start your node server and visit `/` you'll see that the hello function executes.

We'll be using this pattern to let the passport module do a lot of the heavy lifting for us.

Three, we'll start using the hbs conditionals to help control the flow in our application. This is called authorization, it's what prevents you from visiting a user profile other than your own. etc.

### Set up starter code

You've already run `npm install` but we need some new modules.

Install: `passport passport-local passport-local-mongoose express-session`


Check the documentation: [20min]

Spend ~5 minutes per repo, just review the documentation.

- https://github.com/jaredhanson/passport
- https://github.com/jaredhanson/passport-local
- https://github.com/saintedlama/passport-local-mongoose

Being familiar with the documentation is important, it will give you an avenue of recourse to troubleshoot or add new features if you choose. Being able to read  documentation and know where to find it is _VITAL_.

Have you looked at the Express.js docs? Morgan? How about bodyParser? If you haven't you should in the future. Programmers read, _a lot_ it's the path to understanding and improving.

### Configuration

Theres's quite a bit of configuration for each of the modules we've installed:

Let's start with passport:

Add the following lines to `server.js`:

In the modules section:
```
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

```

In the middleware section:
```
app.use(require('express-session')({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
```

### Ahh what is all this?

1. Passport.initialize() and passport.session()
2. A strategy (local, facebook, github, etc.)
3. The serialize and deserialize methods


### Exercise You Do:

Create a User Schema in the models directory with username and password and export it using module.exports.

I'm going to add one extra piece now:

Require, passport-local-mongoose at the top.

```
var passportLocalMongoose = require('passport-local-mongoose');  
```

And below the schema add

```
userSchema.plugin(passportLocalMongoose);   
```

The documentation for this exists here:

https://github.com/saintedlama/passport-local-mongoose

### Add routes

Exercise: Part 1 (Reps, you've already done this!)

In the controller directory touch a file called `users.js` This is going to be our router.

At the top of the router file we'll need the following:

```
var express = require('express');
var router  = express.Router();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');


```


Let's create three routes:

1. GET, `/`, renders a view `users/index`
2. GET, `/signup`, renders a view `users/signup`
  - create the view and verify that the view renders
3. POST, `/signup`, redirects to the route `/`
4. Export the router
5. load the router in the `server.js` file

```
var usersController = require('./controllers/users.js');
[ ... middleware ...]
app.use('/users', usersController );
```

Exercise: Part 3 (more reps)

In the `/users/signup` view build a form to allow users to sign up:

1. The action should be `/users/signup`
2. The method is POST
3. Create two input fields
  - one with type=text, name=username, and placeholder=username
  - second with type=password, name=password, and placeholder=password
4. Don't forget your submit field!

Finally, what does this route need to accomplish?

### Create a new User!

```
User.register(new User({
  username : req.body.username }),
  req.body.password,
  function(err, account) {
    if (err) {
        return res.render('register');
    }

    res.redirect('/');
});
```

The `.register` method comes from our the `passport-local-mongoose` plugin we set up in our user model a couple steps ago.

What does it do:

It creates a new User object, it hashes the password, and breaks it up into to types attributes we didn't create, `salt` and `hash` and saves this object to our database.

Fill in the form and test. Use simple username and password so you remember, and if the browser asks you to save the password click `no` or `never for this website`

After you hit submit verify, in your server logs that the form is making the request you intended (a POST to /users/signup).

Then, open a new tab and start mongo move into the auth-test database, and query for the User you just created in the Users collection.

### Login

Exercise: You do: Let's create two more routes for login:

1. GET, `/login`, renders a view `users/login`
2. POST, `/login`, redirects to `/users`

Create the view `users/login`. You can copy the form from the signup page, just remember to change the action from `/users/signup` to `/users/login`.

Before building any further, let's just console.log `req.body` and verify our content is there.

Again, let's be critical and think about what behavior the login route needs to achieve?


---

1. When the user submits the login form, a POST request to /login is made.
2. We need to take the username and password from the body and verify that they match a user in our database.
3. To do that we need to load the user from the database by username and the compare the passwords
4. To compare the passwords we need to decrypt the hashed password using our salt.
5. If they don't match the response should be to send the user back to the login page
6. If it does match we need to create a session, (a cookie -- just an object that gets stored in the headers of requests)
7. store the user information in the cookie and add the user data to the request object.

# _Holy Crap_

Yeah, that's a ton. Authentication is a very complex system, and this doesn't even deal with proper security, considerations about exposing the database to the user, how to respond to errors, multiple attempts, two factor auth, all of which are standard features built into Authentication.

We're not doing most of that, and the seven steps above are achieved using one method given to us by passport, so you can stop holding your breath.

##### Why aren't we doing it?

1. Yeah, it's a lot, and it's not simple, it's multiple days worth of lessons.
2. It's not vital information. As a junior developer you're not going to work on/build an authentication systems _most likely_.

##### So why _are_ we doing this?

Because, in order to build applications you need to keep track of users, and allow different users to create resources. If you built a forum, you'd need users to signup and log in so when they create posts you know which post belongs to which user.

### Back to login

So what's our magical passport method that does a bazillion things for us?

`passport.authenticate('local')`

Your POST route for `/login` should look like this:

```
router.post('/login', passport.authenticate('local'), function(req, res) {

});
```

Finally, add this code inside the callback:


```
req.session.save(function (err) {
  if (err) {
    return next(err);
  }
  res.redirect('/users');
});
```

### What are sessions

Sessions are how we keep track of whether a user is logged in and who they are. Like most things in JS it's just an object structure. And like many things in express it gets saved on the `req` object.

In `/users` add:

```
console.log('session >>', req.session)
console.log('req.user >>', req.user)
```

Let's log in now see this in action.


### Authorization and hbs


Exercise:

1. Add a mongoose promise query to GET `/users` to find all of the users.

2. Render the `index` view with `{ users: users, user: req.user}`

3. Loop over `users` in the `index` view.

4. In the loop create a UL for each user
  - one li for the username
  - and an href that links to a show page using the `_id` attribute

##### Routing time!

1. We need to make a show route in our users router.
  - GET `/users/:id`
2. Add a mongoose promise query to find an individual user by `_id`
3. render a `users/show` view and pass it `{user: user}`
4. loop over `user` in the show page and display the username


### Authorization

So right now, as a logged in user (or not) the user can view any other users show page. But of course in any application you want to restrict what users can see where they can go.

We're going to restrict this route so only logged in users can see a show page and only if it's there show page.

This isn't too crazy actually.

```
if (!req.user || req.user._id != req.params.id) {
  res.json({status: 401, message: 'unauthorized'})
} else {
  var query = User.findById({_id: req.params.id})

  query.then(function(user) {
    res.json(user)
  })
  .catch(function(err) {
    response.json({message: 'nope' + err});
  });
}
```

We can implement this pattern in any route, we could even extract this into a middleware function.

```
var authenticate = function(req, res, next) {
  if (!req.user || req.user._id != req.params.id) {
    res.json({status: 401, message: 'unauthorized'})
  } else {
    next()
  }
}

router.get('/:id', authenticate, function(req, res) {
  var query = User.findById({_id: req.params.id})

  query.then(function(user) {
    res.json(user)
  })
  .catch(function(err) {
    response.json({message: 'nope' + err});
  });
});
```

### Nav bar

The next feature we're going to add is a nav bar.

What are our user stories for our nav bar.

- As an _unauthenticated_ user, the nav bar should prompt me to either *log in* or *sign up*
- As an _authenticated_ user, the nav bar should welcome me personally, and prompt me to *log out*.

We can see from reading these stories, that we have a conditional, meaning an if statement.

Exercise: Nav bar

1. Touch a `layout.hbs` file in views
2. Add the html boilerplate code to `layout.hbs`
3. Add `{{{body}}}`
4. Above `{{{body}}}` Create a `ul` with the style tag of display: inline;
5. use the `{{#if}}`, `{{else}}`, `{{/if}}` syntax to conditionally show the user anchor tags that meet the requirements speced out by the user stories.

### Logout

You might have noticed that even though we linked to `/users/logout` we haven't made that route yet.

This is our last piece of the authentication flow.

Super straight forward:

```
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/users');
});
```
