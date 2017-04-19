---
title: Collaborating with git: branches, merging, and pull requests
type: lesson
duration: "2:00"
creator:
    name: Colin Hart
competencies: Deployment
---

# Collaborating with git: branches, merging, and pull requests

### Objectives
*After this lesson, students will be able to:*

- Create different branches in a git repo
- Switch environments between branches
- Move code from one branch to another locally
- Move code from one branch to another remotely (on Github)
- Share code between people using Github
- Describe and utilize good git code isolation practices


# Intro

Using git as we have in the past few months is perfectly fine when working alone, though I imagine many of you will use and benefit from the processes and patterns we're learning today even when you work alone.

*Exercise:* What problem does Git solve?

## The problem

- How do you save your code in a reliable and trackable way?
- How do you share code with collaborators
- How do you, in the process of sharing that code, make sure everyone is in sync even if people are working on different parts or in different versions of the code base or even a file?
- How do you keep and maintain different versions of your code in isolation?

Up till now, git has only solved two big problems, how do we as teachers get the code from us to you, and from you to us, and how do you as students save your code in a reliable and trackable way.

But git does _so_ much more.


## setup

Make sure you're *not* in your student repo in the terminal.

1. Go to GitHub and create a repo called `testing-<your-name>``
2. `clone` that repo down locally, again making sure you're *NOT* in the student repo.
3. `cd` into that new repo.

# processes and branching

From now on you will have at least two branches if not more in your projects.

  run $`git branch`

  You should see in green something like this `* master`

  This is the master branch. You've interacted a lot with master during class. `git pull/push origin master` and `git pull/push upstream master`

  ```
  binary/app |    cmd    |  remote  | branch name
     git     | pull/push |  origin  |    master
  ```

## master branch

It holds _working_ code

Meaning, code that doesn't have bugs, or has bugs that you are okay with or have documented

It is the code that is deployed to Heroku; it is "live" code or "production" code.

This is the code that users see and use. Not code that you are developing in or testing in.

It is a source of truth. This is the most final version of your application. If anything ever happens to your code, you know you can always just return to this version.

## dev branch

Create a new branch; there are two commands you can use

$`git checkout -b dev`

git checkout is the command to switch between branches, -b is a flag that stands for `build`, and dev is the branch we want to create.

So this command creates the branch and switches context to the newly created branch.

$`git branch dev`
$`git checkout dev`

Does the same thing as the first one but breaks it out into two steps.

The dev branch is where you're writing code, testing things, breaking things, it has bugs, that are documented in GitHub issues.

You only ever move code from dev to master when dev is in a working state.

## The process for pushing working code.

One person on your team will create the repo for your project; you should all fork the main repo and then clone your fork

You all create a dev and master on your local fork.

You work on whatever task or user story you're focused on in the `dev` branch (or a feature branch, which we'll get to in a minute). When you've finished that feature or task, you run `git push origin dev`.

You then will open a pull request from your fork to the main repo from dev branch to dev branch. Whoever is in charge of checking pull requests will accept the pull request merging it into dev, and will run `git pull origin dev` from their dev branch to merge the remote dev branch to their local dev branch. They will then verify often with the person who wrote the code that everything is working as it should.

That person will then merge the code from dev to master and push it `git push origin master` or will merge the code by opening and closing a pull request from dev to master on GitHub.

Finally, all the other team members will be able to change branches to master and run `git pull upstream master` to get the most up to date working changes.

## The process for sharing code that's not finished.

Say you have a feature you're just stuck on, and someone else is going to take it over. How do you get your unfinished code from your machine to the other?

Same process as above, and just making sure that you're not merging it to master ever.  

## feature branches

You might take this one step farther.

You can use `dev` as one more safety layer, using it to test bigger things, pair program, etc. and make what we call feature branches for individual tasks you're working on.

This is particularly helpful if you're working on several features at once that aren't necessarily related.

Imagine you're working on logout as well as creating todos at the same time and just switching back and forth when you get bored with one task.

Those are two totally separate features. You don't want to push them up in the same pull request, and you don't want them to be in the same commit.

You could keep track of it in your head and just remember to commit one feature separately by manually specifying files etc. And making sure to open one pull request for each. But as we've discussed keeping stuff in your head is a giant pain, and your brain is going to be filled with angular and mongoose struggles, you don't want to clutter it with just keeping track of what should be committed where.

What you can do is create a feature branch off of dev:

```
master
|
|\ dev
| \
| |
| |\ feature branch
| | \
| | |
m d f
```

Naming conventions of feature branches would often follow the GitHub Issue # or the Trello Ticket and the name of the feature

$`git checkout -b 12-auth-logout`

And then you can work on the code for auth logout on that branch, make your commits there. And if you want to/or need to work on some other feature before log out is finished you can commit all your work to 12-auth-logoout, checkout to dev, and create a new feature branch

$`git checkout -b 15-todos-post`

```
master
|
|\ dev
| \
| |
| |\ 12-auth-logout
| | \
| |  \
| |\  15-todos-post
| | | |
| | | |
m d A T
```

# We Do Lab

1. touch a file called `weird1` in dev
2. checkout to master $`git checkout master`
  If you run `git status` and `ls`

  You'll notice how `weird1` came with us. This is because we didn't commit the file or the change to dev.

3. checkout back to dev  $`git checkout dev`
4. `git add weird1` and `git commit -m "adding weird1"`
5. checkout to master $`git checkout master`

  If you run `git status` and `ls`

  You'll notice how `weird1` isn't in our directory this time. It's currently saved and only accessible in the `dev` branch

## Merging

If we wanted to manually merge dev into master

Making sure you're in master, the merge command will merge whatever branch you specify into the _current_ working branch.

We're currently in `master` if we run `git merge dev` git will merge the code in dev, in this case, an empty file called weird1 into dev.

### When would you use git merge?

It's possible you'd use it in your feature branch before pushing to GitHub

Imagine you've finished your logout feature on the `12-auth-logout` branch

But in the time you've been working your other teammate has pushed some code relating to authentication to dev. Before you push your code to Github, starting the process of merging it into master, you should probably test that your logout feature works with the new dev code

If you're really unsure, you could merge `dev` into your `12-auth-logout` branch. But assuming everyone is following all of these processes well, it's probably safe to merge it to dev and test it there.

After merging you can test your logout feature and the other features you're worried about conflicting in dev. When you've verified everything works or you fix whatever isn't you can add commit and push those change to your GitHub and then open a pull request from your fork to origin.
