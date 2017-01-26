---
title: Deploying a node Application
type: lesson
duration: "1:30"
creator:
    name: Colin Hart, adapted from Gerry Mathe
competencies: Deployment
---

# Deploying to Heroku

### Objectives
*After this lesson, students will be able to:*

- Explain Heroku as a service and why it's useful
- Deploy a Node.js app
- Push and pull from MongoDB using a live web interface


## Deploying, why? Intro (15 mins)

When we have finished developing a version of our app, we might want to put it on the internet for other people to see.

#### Localhost

Most of what we've developed so far has just run on our own computers. Both our database and our web server have been on our computer. We've done this because it's much easier to develop locally because we don't actually need an internet connection.  However, people can't access it easily unless they are also on our local network.

So what are your options?

**1. Buy another Computer**

  We could just buy another computer somewhere else and use it to run our applications - or even more than one, if needed, and by the way, a server is a computer. We could connect this other computer to the internet and with a bit of configuration, we could allow people to connect to it using a URL.

  However, we'd have to buy and look after this computer, have somewhere to store it and ensure that it was working and always connected to the internet. Also, if someone hit an error when they used our app, we might have to stop and start it? Maybe there is a better way?

**2. Virtual machines**

  What if we could write a program that pretends to be a computer? If we could do this, then we could run another operating system within it? This is called a virtual machine.

**3. Cloud hosting platform**

  Heroku is a cloud-based service. Essentially it's virtual machines that run on Amazon Web Services (EC2) and hosts your application code in the cloud.  By using the git, you can deploy your code directly to Heroku's - they call them "dynos" - and seconds later your changes will be live in production.

  By the way: All of Heroku lives on Amazon's Web Services



To deploy an app to Heroku, it's a fairly straightforward step-by-step process.

First you need to link your machine to your Heroku account - a similar process to what we did with GitHub.


##Codealong - Setting up Heroku and our machines (10 mins)

#### Sign up for Heroku

Go to heroku.com and make a free account. Make sure to remember your password!


#### Add SSH-key to Heroku

Very similar to when we setup GitHub, we need to add our ssh-keys to Heroku so that Heroku can know we're authenticated users.

So let's add our ssh-key to Heroku. First, we need to copy our ssh-key:

```bash
cat ~/.ssh/id_rsa.pub | pbcopy
```

Then we need to go to [Heroku](https://www.heroku.com/).

Email > Manage Account > SSH Keys.

#### Add a credit card to Heroku

https://devcenter.heroku.com/categories/billing

#### Install Heroku Toolbelt

Next we need to install the [Heroku Toolbelt](https://toolbelt.heroku.com).

This is a command-line tool that allows us to use commands in the terminal, similar to the way that we use git.

Once it is installed, you need to login with your heroku credentials:

```bash
brew install heroku
```

```bash
$ heroku login
Enter your Heroku credentials.
Email: adam@example.com
Password (typing will be hidden):
Authentication successful.
```

## Heroku and Node - Intro (10 mins)

We've learned how to use Node.js and mongoDB, but again, a web app hosted on your laptop is not really useful. Today, you'll deploy your Unit 2 Project to a server online so that everyone can access it on the web. There are a few  configurations we must make to our application to ensure we can successfully push to production.

First, we'll need a functioning git repository with our application that includes a package.json file - remember, this is used by Node’s dependency manager.  The package.json file determines the version of Node.js used to run your application and includes any dependencies your application needs to run. Upon deployment, Heroku reads this file and installs the correct versions and appropriate dependencies using the  `npm install` command.

Make sure you have a `.gitignore` file with node_modules listed.

## Set up your app for deployment - Codealong (25 mins)

To verify that the Heroku CLI tool belt is properly working , type:

```bash
heroku auth:whoami
```

This should display the email corresponding to the logged in account.

#### Good to go? Let's deploy

Make sure you are in your Project repository!

Heroku requires that we have initialized our app as a git repo, luckily you've all done this already and have been committing and pushing to GitHub.

#### Create a .gitignore file

Touch `.gitignore` in the root of your repo and add 

```
node_modules
.DS_Store
```

to that file

#### Procfile

A `Procfile` is a text file you create in the root directory of your application to explicitly tell Heroku what commands should be run. For our the purpose of this lesson we only care about one command:

`web: node server.js` (or whatever name you used for your server file)

This command says that this process type will be attached to the HTTP routing stack of Heroku and take web requests when the application goes live. It is important to note that, by default, Heroku looks to your package.json for your start command, but because we may not have declared a start script, or the start script is specific to non-production needs, it is always best practice to define it within your Procfile.


#### Add engine to your package.json

run $`node --version`

Add engines with the version number  under dependencies:

```
"engines": {
  "node": "6.9.1"
}
```


#### Tell Heroku we are creating an app

You can either let heroku create a random generated name or you can try to find a combination that isn't taken.

`heroku create <name of app>`

Here we use the `heroku` command to create and name the app we wish to host.

Also, let's set the environment of our Heroku app to production:

`heroku config:set NODE_ENV=production --app <your heroku app name>`

#### Generate a production mongoDB URI

First, we must integrate the Heroku add-on, mongolab, into our app. An add-on provides our production app with extra functionality, and in this case, a production Mongo database.

`heroku addons:create mongolab`

Now that we have a production database, we must find its connection URI that has been automatically stored to our app's config variables by mongolab:

`heroku config | grep MONGODB_URI`

#### Change the database URIs in the app so that they are dynamic

If you take a look in `app.js`, you should see the code that creates the connection to mongoDB:

```
mongoose.connect('mongodb://localhost/<your-db>');
```

The URL `'mongodb://localhost/<your-db>'` is obviously only valid when we are running the app locally, but for Heroku, we need to use the connection URI for our production database we just generated.


To access environment variables in a node app, we can use `process.env`.


```javascript
var mongoURI =  process.env.MONGODB_URI || 'mongodb://localhost/<your-db>';
mongoose.connect(mongoURI);
```

Now our conditional statement above simply instructs the application to use MONGOLAB_URI in production if it exists, and if not, use our local database URI.

#### Change the urls for production

We'll have to apply the same logic we wrote for the db connection to the the port where the app is running.  This port will be automatically assigned by Heroku and stored under the key `PORT` in the environment variables. Around the line 22 in our `app.js` file, you can see the port where the app is open:

```javascript
app.listen(3000)
```

Replace this code with:

```javascript
app.listen(process.env.PORT || 3000 )
```

#### Commit all changes and deploy!

`git add` and `git commit` all the changes and then deploy them by typing

```bash
git push heroku master
```

Note that we are deploying to Heroku's remote, and not our typical remote origin. Heroku and GitHub are two totally different clouds that must be given commands explicitly. A push to GitHub will not automatically push to Heroku.

Now run the one-time command `heroku ps:scale web=1` to start up your app's dynos, essentially starting up your app's process!

#### You made it!
Once the deployment is done, open Google Chrome and go to `http://YOURHEROKUAPP.herokuapp.com/` and you should see the index page online!  Remember, you can always type in `heroku open` to launch the application from the command line.


## Tools for production in Node - Demo (10 mins)

>Note: Demonstrate the following using the app we deployed previously.

There are a couple of tools we can use in production for troubleshooting and error handling:

`heroku restart` will let us restart our server and make sure all of our configuration details are up-to-date.  You'd be surprised how much can be fixed by simply restarting the server; it's a big reason Heroku restarts every one of its applications daily!

Again, for efficiency, `heroku open` will open up your app in the browser.

If there are errors, you can use the command `heroku logs` to get a print out of the production/server logs for your application. These are just like the logs we had printing to our console in development mode. With this, you'll be able to search for what caused your application to crash and debug. Remember any changes you make to your application locally will require you to add, commit, and push to Heroku again. You **do not** need to repeat the database configuration.


## Your turn to deploy - Independent Practice (25 mins)

Choose any other Express code base you've built and push it live.  Use what you just learned from lecture and the code we wrote, too.  Share the url with your instructor via Slack.
