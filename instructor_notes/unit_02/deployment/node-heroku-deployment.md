---
title: Deploying to Heroku
type: lesson
duration: "1:25"
creator:
    name: Gerry Mathe/London
    updated: Mike Hopper/Atlanta
competencies: Deployment
---


# Deploying NodeJS Apps to Heroku

### Objectives
*After this lesson, students will be able to:*

- Explain Heroku as a service and why it's useful
- Set up a new Heroku app & push to production
- Push & pull from Heroku PG DB

### Preparation
*Before this lesson, students should already be able to:*

- Describe what a server is
- Use Git to push code to a remote server (such as GitHub)

## Deploying, why? Intro (15 mins)

When we have finished developing a version of our app, we might want to put it on the internet for other people to see.

### Localhost

Most of what we've developed so far has just run on our own computers. Both our database and our web server have been on our computer. We've done this because it's much easier to develop locally because we don't actually need an internet connection.  However, people can't access it easily unless they are also on our local network.

### What is Heroku?

Heroku is a cloud-based web app hosting service, often called a _PaaS_ (Platform-as-a-Service). Essentially it's a collection virtual machines that run on Amazon Web Services (EC2) that host your applications in the cloud. By using Git, you can deploy your code directly to a Heroku VM (they call them "dynos") and seconds later your changes will be live in production.

By the way: All of Heroku lives on Amazon's Web Services (AWS).

To deploy an app to Heroku, it's a fairly straightforward step-by-step process.

First you need to link your machine to your Heroku account - a similar process to what we did with GitHub.

## Creating your Heroku and MongoLab Accounts

You will need to create accounts for _Heroku_ and _MongoLab_ before you can deploy your _MEN_ or _MEAN_ Stack apps. Both _Heroku_ and _MongoLab_ provide free hosting for a small number of applications.

## Install Heroku Toolbelt

Next we need to install the [Heroku Toolbelt](https://toolbelt.heroku.com).

This is a command-line tool that allows us to use commands in the terminal, similar to the way that we use git.

Once it is installed, you need to login with your heroku credentials:

```bash
$ heroku login
Enter your Heroku credentials.
Email: adam@example.com
Password (typing will be hidden):
Authentication successful.
```

## Deploying a NodeJS Project to Heroku

Once you have a project that is managed with _Git_ (a Git project), you can run the `heroku` command to prepare the project for deployment to Heroku:

```bash
git remote -v     # Displays current Git remotes
heroku create
git remote -v     # Displays the newly created Git remotes for Heroku
```

Now you can push to Heroku with this command:

```bash
git push heroku master
```

> Note that git will only push your latest committed code to Heroku. Any uncommitted code will _not_ be deployed!

You can check the status of your deployment and view the logs using:

```bash
heroku ps         # Check the process status
heroku logs       # View the logs (when something goes wrong)
```

### Adding a MongoDB Database via MongoLab

Heroku does not host your MongoDB database but you can create a free MongoLab sandbox database via the heroku toolbelt:

```bash
heroku addons:create mongolab:sandbox
```

The above command will automatically set a heroku environment variable. To see the value, just run:

```bash
heroku config
```

> At the time of this writing Heroku requires that you add a Credit Card to your Heroku account when using addons such as mongolab. Heroku will not charge you but does require the Credit Card (hmm...). Just follow the instructions you get after running the `heroku addons:create mongolab:sandbox` command.

### Configuring Your Express App to use a MongoLab Sandbox Database

Edit `app.js` and `seeds.js` and replace the existing DB connection code with the following:

```javascript
// Connect to database
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/express-movies');
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});
```

Then `git commit` the change and push to heroku:

```bash
git add -A
git commit -m "Updated DB connection code to use MongoLab when in Production"
git push heroku master
heroku ps
heroku open
```

To run the seeds file on the Heroku dyno:

```bash
heroku run node seeds.js
```

Test it out

```bash
heroku ps
heroku open
```

##Conclusion - 5 mins

* How does Heroku relate to AWS?
* What are Heroku config settings used for? Why would you want to use them for:
  - MongoDB connection strings
  - External API keys
* How does the command `heroku create` affect your local git repository?
* Why is it a good idea to have Git *ignore* the `node_modules` and `bower_components` directories?
* What do the following commands do?
  - `heroku create`
  - `git push heroku master`
  - `heroku ps`
  - `heroku logs`
  - `heroku open`
  - `heroku config`
