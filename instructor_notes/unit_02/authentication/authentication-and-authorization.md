---
title:  Authentication and authorization
type: lesson
duration: '4:00'
creator:
    name: Colin Hart
    class: WDIr-matey
---

# Authentication and Authorization

## Lesson Objectives

  - Break down the authentication strategy
  - Explain sessions and cookies
  - Break down the authorization strategy
  - document each phase of the documentation to aid customization

## Intro - What is Authentication and Encryption? (15 mins)


#### Authentication

Today, we are going to learn about making our site more secure. Authentication is about making sure the server knows the identity of the person accessing the site and the data that is stored. Essentially, it's about asking for passwords.

It doesn't guarantee anything - and security only goes so far. If someone takes your email/password, they could "pretend" to be you on a website. There is _no_ way for the server to know differently.

Authentication should be used whenever you want to know exactly who is using or viewing your site.  To know which user is currently logged-in, a website needs to store sensitive data - this data will, therefore, be *encrypted*.

#### Encryption

When we talk about passwords, the commonly used word is "encryption", although the way passwords are used, most of the time, is a technique called "hashing". Hashing and Encryption are pretty similar in terms of the processes executed, but the main difference is that hashing is a one-way encryption, meaning that it's very difficult for someone with access to the raw data to reverse it.  


|     | Hashing |   Symmetric Encryption -|  
|-----|---------|-----------------------|
|     |One-way function | Reversible Operation |
|Invertible Operation? |    No, For modern hashing algorithms it is not easy to reverse the hash value to obtain the original input value | Yes, Symmetric encryption is designed to allow anyone with access to the encryption key to decrypt and obtain the original input value |


#### Bcrypt

Hashing is when a function is called on a variable - in this case a password - in order to produce a constant-sized output; it being a one-way function, there isn't a function to reverse or undo a hash and calling the function again - or reapplying the hash - isn't going to produce the same output again.

From another [stack post](http://stackoverflow.com/questions/1602776/what-is-password-hashing):

_"Hashing a password will take a clear text string and perform an algorithm on it (depending on the hash type) to get a completely different value. This value will be the same every time, so you can store the hashed password in a database and check the user's entered password against the hash."_

This prevents you from storing the cleartext passwords in the database (bad idea, _very bad_).

Bcrypt is recognized as one of the most secure ways of encrypting passwords because of the per-password salt. Even with it being slower than any other algorithms, a lot of companies still prefer to use bcrypt for security reasons.

#### But wait, what's a salt?

A salt is random data that can be added as additional input to a one-way function, in our case a one-way function that  hashes a password or passphrase. We use salts to defend against dictionary attacks, a technique for "cracking" an authentication mechanism by trying to determine the decryption key.


## EXERCISE: Install bcrypt and require it

  1. $`npm install bcrypt --save`

  2. require it `var bcrypt = require('bcrypt')` in helpers/auth.js


## Helpers: helper directories and helper files

  What is a helper method?

  Why would we load them into separate files and directories?

## Sessions / Cookies

The most common way of handling authentication - if all users are logged in or not - is to use cookies.

According to royal.gov.uk:

> "A cookie is a simple text file that is stored on a computer or mobile device by a website’s server and only that server will be able to retrieve or read the contents of that cookie. Each cookie is unique to a web browser, means that if you're logged in on Google with Chrome, you will still have to login to google if you open Firefox on the same computer. Cookies will contain some anonymous information such as a user ID and the site name. It basically allows a website to remember things like user preferences or the content of a shopping basket."

## EXERCISE: Install, require and configure express-session

  1. $`npm install express-session --save`

  2. Require it in the server.js file `var session = require('express-session');`

  3. configure it below methodOverride configuration

    ```
    app.use(session({
      secret: "derpderpderpcats",
      resave: false,
      saveUninitialized: false
    }));
    ```

## What makes up our Auth Strategy

#### Routes
  - Sessions Controller
    - login
    - logout

  The Sessions controller is in charge of creating and destroying the cookie/session

  - Users controller
    - signup

  Renders a form to sign up (create) a user. Not a part of sessions

## EXERCISE Fill in the sign up GET/POST route in usersController

  1. `router.get('/signup')`

    ```
      res.render('users/signup.hbs');
    ```

  2. With your partner, document the function, `createSecure()` in the `auth/helpers.js` dir

  3. Fill in the signup post route with the following code

  ```
  var user = new User({
    email: req.body.email,
    password_digest: res.hashedPassword
  });

  user.save(function(err, user){
    if (err) console.log(err);

    console.log(user);
    res.redirect('/users');
  });
  ```

#### Middleware

http://expressjs.com/en/guide/using-middleware.html

  1. create a `app.get('/test-middleware', function() {res.send('hi')})` route in `server.js`

  2. create a function `hello` in server.js that console.logs('HELLO FROM MIDDLEWARE >>>>>>>>>')

  3. call the hello function between the _path_ and the _callback_

  ```
    app.get('/test-middleware', hello, function(req, res) {
      res.send('hi')
    })

  ```
## EXERCISE Fill in the login and logout route in sessionsController

1. Document the `authHelpers.loginUser` function in `helpers/auth.js`

2. Install `pryjs` a backend debugger

  - https://github.com/blainesch/pry.js
  - $`npm install pryjs --save`
  - require `pryjs` on the first line of `server.js` and *DONT* use `var`

2. Fill in the login route

  ```
    eval(pry.it)
    res.redirect('/users')
  ```

4. hit the route and our code will pause

  type req.session into the terminal and you should see the logged in user

5. $`stop` to continue the script and exit debugger

  - $`play`: play lines of code as if you had entered them. Accepts two integers: start and end. End defaults to start.
  - $`stop`: will exit the pryjs prompt and continue through the app.
  - $`whereami`: will show you exactly where you are in the code. Accepts two integers to replace the default 5 before and 5 after.

6. Delete eval(pry.it) or comment it out

7. fill in logout route

  ```
  req.session.destroy(function(){
    res.redirect('/users');
  });
  ```


### Lab: Authorization

How might you restrict access of different pages to logged in users?

User Stories:
  - As a user, i should only be able to hit the test-middleware route if I'm logged in
  - As a user, I should only be able to see my own User Show page

1. One function, called authorize, will provide both of these behaviors.
2. It will be defined in the `helpers/auth.js` file
3. It will return `res.json({status: 401})` as the failed response if the user is not logged in or if the user is trying to access another users show page
