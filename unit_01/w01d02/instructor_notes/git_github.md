---
title: Git and GitHub Intro
type: lesson
duration: "1:20"
creator:
    name: Micah Rich, LA
    adapted by: Maren Woodruff for ATL-WDI-9
    competencies: Workflow
---

# Git and GitHub intro

### Objectives
*After this lesson, students will be able to:*

- Install Brew + Git
- Understand version control
- Understand the difference between Git and GitHub
- Practice using Git to push to a GitHub repo
- Explain basic git commands — init, add, commit, push, pull and clone
- Differentiate between remotes — origin and upstream
- Distinguish between different environments — local and remote repositories
- Fork and clone remote repositories

### Preparation
*Before this lesson, students should already be able to:*

- Use the command line
- Use a text editor

<br>

## Hook (5m)
When you think back to your favorite trip, you probably took a lot of snapshots, maybe you created a photo album as a keepsake, when you returned.  You have these moments, that allow you to time travel back and remember what happened.

These are some snapshots from a trip that I took to Nepal to meet with a group called Women's Empowerment.  These women were trying to teach others skills so that they could earn an independent living and help their families.  The group also provided scholarships to girls so that they could attend school.
### Women's Empowerment leaders
![Women's empowerment leaders](https://i.imgur.com/Zwaa4Bw.jpg)
### View of the Himalayas
![View of the Himalayas](https://i.imgur.com/sNdfrIX.jpg)
### Bagmati River + sacred holy temple, Pashupatinath
![Bagmati River + sacred holy temple, Pashupatinath](https://i.imgur.com/KhtJA5N.jpg)
### Holy man at Pashupatinath
![Holy man at the temple](https://i.imgur.com/gJORMM9.jpg)
### Prayer bells at the Monkey Temple
![Prayer bells at the Monkey temple](https://i.imgur.com/nVGfRYz.jpg)
### Traditional Women's Clothing
![Traditional dress](https://i.imgur.com/rMFihvS.jpg)

Similarly, git is a software that allows us to keep track, or keep snapshots, of our projects as we develop them.

<br />

---

##**YOU DO** (15m)

Spend the next 15 minutes reading the first 4 chapters
- Automated version control
- Setting up git
- Creating a repository
- Tracking change

from this website: https://swcarpentry.github.io/git-novice/01-basics/ 

<br />

---

## Why Version Control? **YOU DO** (3m)


* Spend the next few minutes with your buddy, discussing the following questions:
  Assuming that version control systems did not exist, how would you:
    - Share your source code with other developers?
    - Collaborate with other developers
    - Manage multiple versions of a software product?
        - Free vs. Paid
        - Basic vs. Premium
        - 2.x vs. 3.x

* Put your thoughts and/or answers into Slack.

<br />

---

## What is Version Control? (5m)
* _Version Control_ is the management of changes to documents, computer programs, web sites, and other collections of information.

* _Version Control_ provides:
    - a database containing a history of changes to a set of files
    - a set of commands for managing that database

## What is Version Control Good For?
* Manage Changes Over Time
    - Save various points in the development of your work.
    - See the history of your work.
    - Go "Back In Time" to see previous versions of your work.
    - Manage multiple versions of a software project.
* Sharing & Collaboration
    - Share your work with others.
    - Work effectively as a team on a single project.
    - Allow others to modify your work in a _controlled_ way.
    - Make multiple changes to a project in parallel.
    - Merge parallel changes in a controlled way.
* Experimentation
    - Experiment with various ideas and either keep or discard your experiments.
    - Keep multiple changes isolated until they are ready to be integrated.

### What if you could live your life using a Version Control System?

* Should I go back to school or move to Europe?
* Should I date person X or person Y?
* Should I try to make it as a professional musician?

---

## Git vs GitHub and version control - Intro (5m)

First things first - Git is not GitHub. This is a common mistake that people make.

#### What is Git?

[Git](https://git-scm.com/) is:

- A program you run from the command line
- A distributed version control system

Programmers use Git so that they can keep the history of all the changes to their code. This means that they can rollback changes (or switch to older versions) as far back in time as they started using Git on their project.

**EXERCISE:** Think about some version control tools or processes you've used. These could be
formal processes imposed by a professor or manager, or a methods you've used personally. Can anyone think of a version control example?

#### Terminology/History

A codebase in Git is referred to as a **repository**, or **repo**, for short.

Git is pretty confusing and complex at first, but I have full confidence that you will pick it up before you know it. When we talk about repos and codebases we're really just talking about a directory that has a file in it named .git. This .git is very importanta.  It tells git binary to treat the directory as a repo and listen for changes, track files, and do git-related tasks when asked.

Git was created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), the principal developer of Linux.

**I DO:** I'll `ls -la` into our class repo and show the `.git` directory.

#### What is GitHub?

[GitHub](https://github.com/) is:

- A hosting service for Git repositories
- A web interface to explore Git repositories
- A social network of programmers
- We all have individual accounts and put our codebases (repos, directories) on our GitHub account
- You can follow users and star your favorite projects
- Developers can access codebases on other public accounts
- You can use it to work on open source project
- GitHub uses Git

#### Can you use git without GitHub?

Think about this quote: “Git is software. GitHub is company that happens to use Git software.”  

**Exercise:** If you think this statement is true, react to with a thumbs up or a thumbs down if you think it is false. Why?

The answer is true! Git and Github just share a similar name, but GitHub is a platform in the browser where we can share repos/code with each other. And we use git, locally, to keep track of our files, and then we push those files/changes to GitHub.

You can certainly use Git without GitHub!

<br>

## Why is Git tricky to understand? Demo (5m)

Git is tricky to understand because describing 'how' it works, like many things in programming, requires a breadth of technical knowledge. 

We need to work with Git and many other complex technologies and approach them critically (i.e. as a critical thinker: the objective analysis and evaluation of an issue in order to form a judgment). But we need to also suspend our disbelief as it were and accept that at their core these technologies are complex, built by some of the best programming minds, and are the result of sometimes 50 years of iteration.

I don't need to explain music theory to you in order to play the guitar.  It may help in a bind, but it is not mandatory.

Today, we will learn a bit about how Git works, but for now it's enough to learn how to use it for this class - by keeping track of homework and classwork. Through this process, we will better understand how we will use it as professional developers.


> Things we don't need to know but might be curious to know!

- [Directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph)
- [SHA-1](https://en.wikipedia.org/wiki/SHA-1)
- blob
- tree

#### Ask me if I am a tree.

Even though you don't need to know how they work, it is useful to know that your local repository consists of three "trees" maintained by Git.

- **Working Directory**: the directory and subdirectories containing the files we are currently working on and holds the actual files.
- **Index (stage)**: a staging area where we list changes we want to commit
- **HEAD**: which points to the last commit you've made 

#### More terminology

- **Repository** - a collection of related commits that form a directed acyclic graph (find out more that if you click on the link above)
- **Commit** - a snapshot of the working tree at a giving time (make sure to include a message explaining what has changed)
- **Master** - the default name for the "main" development branch

![workflow](https://cloud.githubusercontent.com/assets/40461/8221736/f1f7e972-1559-11e5-9dcb-66b44139ee6f.png)

<br />

#### So many commands?!

There are a lot of commands available for git. You can look at the list of commands by running:

```bash
$ git help -a
```

Even though there are lots of commands, during this course we will probably only utilize about 10 of them.

<br />

---

## Let's use Git (25m)

1. First, create a directory on your Desktop:

    ```bash
$ cd ~/Desktop
$ mkdir planets
```
    - What does `~` mean?
    - What does mkdir mean?

2. You can place this directory under Git revision control using the command:

    ```bash
$ cd planets
$ git init
```
    - What does cd mean?
    - What does git init do?

3. Git will reply:

    ```bash
Initialized empty Git repository in <location>
```

    You've now initialized the working directory.

**EXERCISE:** Take 3 minutes to go through this process on your own. React with a thumbs up when you're finished. Can you write down what actual changes have been made to our directory and to your Terminal?

**Give me a thumbs up in Slack when you're done**

#### The .git folder

If we look at the contents of this empty folder using:

```bash
ls -A
```

We should see that there is now a hidden folder called `.git`. This is where all of the information about your project is stored. This folder allows us to control the git flow using `git` commands.  **If you delete it, you will lose your project's history.**


#### Add a file

1. Let's create a new file:

    ```bash
$ touch mars.txt
```

2. A small `%` should show next to your prompt! (_I have a `?` because I set mine up differently, do not panic_) 

    ```bash
<your name>:<current directory> (master #%)
```
That % sign indicates that we have an untracked file that Git doesn't know about

3. Run 
```bash
$ ls
````
 and you will see `mars.text` 

3. If we run `git diff` we should see the uncommitted changes that we have made/the staged files.

4. If we run `git status` we should get:

    ```bash
    On branch master

    Initial commit

    Untracked files:
    (use "git add <file>..." to include in what will be committed)

    mars.txt

    nothing added to commit but untracked files present (use "git add" to track)
```

5. This means that there is a new **untracked** file. Next, tell Git to take a snapshot of the contents of all files under the current directory (note the -A)

    ```bash
$ git add -A
```

    - `git add -A` will add every file that has been changed.
    - You can specify a single file by typing `git add mars.txt`, instead of using `-A`.

    - A small cross should show next to your prompt!
    - This snapshot is now stored in a temporary staging area which Git calls the "index".


#### Commit

1. To permanently store the contents of the index in the repository, (commit these changes to the HEAD), you need to run:

    ```bash
$ git commit -m "Initial commit"
```
- You are telling git to remember this file/these changes.

2. You should now get:

    ```bash
[master (root commit) b4faebd] Initial commit
 1 file changed, 0 insertions(+), 0 deletions(-)
  create mode 100644 mars.txt
```

- When we run `git commit`, Git takes everything we have told it to save by using git add and stores a copy permanently inside the special .git directory. This permanent copy is called a commit (or revision) and its short identifier is b4faebd (Your commit may have another identifier.)

- We use the `-m` flag (for “message”) to record a short, descriptive, and specific comment that will help us remember later on what we did and why. If we just run git commit without the -m option, Git will launch nano (or whatever other editor we configured as core.editor) so that we can write a longer message.

- **Good commit messages** start with a brief (<50 characters) summary explaining the changes made in the commit.

**REMEMBER:** it is always easier to rollback to a previous commit if it is an incremental change.  Therefore, don't write your whole project and commit at the end.  You should have tiny changes committed as you work through the project.


#### Make changes to the file

Now let's open mars.txt in Sublime or Atom:


```bash
$ subl mars.txt
```

Inside the file, write:
```bash
Discovered by Galileo Galilei in 1610, Mars is a cold and dry planet, but the surface is a rich red 
that looks like a beautiful sunset. 
```
Save the file.

If you press `return` in the terminal, you will now see that you have untracked changes marked by a red `*`. **(Mine may look different, do not panic)** 

Running
 ```bash
 $ cat mars.text
```
will show you the contents of the document- `Discovered by Galileo Galilei in 1610, Mars is a cold and dry planet, but the surface is a rich red 
that looks like a beautiful sunset. `

Running `git status` again will show you that mars.txt has been **modified**.

#### Make a second commit and check the log

1. Let's now make a second commit.

    ```bash
$ git add -A
$ git commit -m "Start notes on mars as a base"
```

2. Checking `git log` will show you 2 commits with different ids:

    ```bash
* 6e78569 (HEAD, master) Start notes on mars as a base
* b4faebd Please remember this file at this time
```
    - press `q` to quit out of the log file
    - press the spacebar to **page** up and down
    - `git log` will show you the commits that you have made so far, in reverse chronological order.

> NOTE: if you get the message `git config --global --edit`, open it in Atom with `atom git config --global --edit`

#### Git File Lifecycle

To understand how Git works, we need to talk about the lifecycle of a Git-tracked file.  You can think of git as taking snapshots over the life of the project.  `git add .` specifies what goes in the snapshot, and `git commit` actually takes the snapshot.

![lifecycle](https://cloud.githubusercontent.com/assets/40461/8226866/62730b4c-159a-11e5-89cd-20b72ed1de45.png)

Schema From [git-scm.com](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)

There are 4 main stages of Git version controlled file:

1. **Untracked**: The file will not be added in the next commit (pre git add)
2. **Staged**: Staged files have not yet been committed to memory but they are "on deck" so to speak for your next commit (after git add)
3. **Unmodified**: The file has already been committed and has not changed since the last commit (git status)
4. **Modified**: You have changes in the file since it was last committed, you will need to stage them again for the changes to be added in the next commit (git status)

Once you have committed a file and it becomes "unmodified" then it's contents are saved in Git's memory.

- **Not saved in git memory**: Your file is not saved until you commit the file to Git's memory
- **Saved in git memory**: Only once you have committed a file, it becomes saved in Git's memory

<br />


#### Creating repositories - Codealong (10m)

Let's do this together:

1. Go to your GitHub account
2. In the top left, hit the + button and select `New repository`
![](https://help.github.com/assets/images/help/repository/repo-create.png)
3. Name your repository `planets`
![](https://help.github.com/assets/images/help/repository/repo-create-name.png)
4. **Initialize this repository with a README** (So that we can `git pull`)
4. Click the big green Create Repository button
5. We now need to connect our local Git repo with our remote repository on GitHub. We have to add a "remote" repository, an address where we can send our local files to be stored.

    The remote URL is found under the green button on the right named "Clone or download"

    ![](https://i.imgur.com/FjdRT66.png)

6. Click on the clipboard to copy the URL and run this command in your Terminal. Make sure that you `cd` into the directory where you want to place this clone.


    ```bash
git remote add origin <git@github.com:github-name/planets.git>
```

#### Pushing to a Remote Repository - Codealong (10m)

#### What are Remotes? 

Remotes are pointers or aliases we set up to tell git where to go on github.

Try running the following:

```bash
$ git remote

$ git remote -v
```
-- The name `origin` is a local nickname for your remote repository. 

#### Pushing to GitHub 

In order to send files from our local machine to our remote repository on GitHub, we need to use the command `git push`. However, you also need to add the name of the remote, in this case we called it `origin` and the name of the branch, in this case `master`.

```bash
git push origin master
```

This should fail due to new files on the remote repo.

#### Pulling from GitHub

1. As we added the README.md in our repo, we need to first `pull` that file to our local repository to check that we haven't got a 'conflict'.

    ```bash
git pull origin master
```
    - `git pull` will check for changes and pull those changes to our remote repository

2. Once we have done this, you should see the README file on your computer. Now you can push your changes:

    ```bash
git push -u origin master
```

    - The name of our remote is origin. The default local branch name is master. The -u stands for upstream, and tells Git to remember these parameters/set the upstream to this repo, so that when we type `git push` and Git will know what to do

Refresh your GitHub webpage, and the files should be there.

<br />

---

# Forking and Cloning your first repository (20m)

## What is forking? Intro

The `fork` & `pull` model lets anyone fork an existing repository and push changes to their personal fork without requiring access be granted to the source repository.

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea. This is how most open source projects operate.

## Now that everyone has their first repository on GitHub, let's fork and clone our first repository! 

#### Clone practice

Cloning allows you to get a local copy of a remote repository.

1. Navigate back to your Desktop and **delete your `planets` repository**:

    ```bash
cd ~/Desktop
rm -Rf planets
```

2. Go to your GitHub repo for `planets`
3. Click the green "Clone or Download" button and copy the URl. Make sure that you use **Clone with SSH** 

    ![clone](https://i.imgur.com/FjdRT66.png)
    
4. From the terminal prompt, clone the repo with the following command (you can clone the repo to your Desktop):

    ```bash
git clone <YOUR_PLANET_REPO_URL>
```

#### Fork the student repo
 
2. Go to the link below, this is going to be our class repo where you'll receive your morning exercises, classwork, and homework. It's also where you'll push to submit your homework.

    https://github.com/ATL-WDI-Curriculum/atl-wdi-9

2. Click fork, and select your name then on your fork of the repo.
3. Click on the Green Button on the right hand side you will see:

    ![clone](https://i.imgur.com/FjdRT66.png)

4. Ensure that you have SSH checked and copy this url.

#### Clone your fork of the student repo!

To retrieve the contents of your repo, all you need to do is:

```bash
$ git clone git@github.com:<your-github-name>/atl-wdi-9.git
```

Git should reply:

```bash
Cloning into 'atl-wdi-9'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.
Checking connectivity... done.
```

You now have cloned your first repository!


#### Cloning vs Forking

When you fork a repository, you make a new **remote** repository that is exactly the same as the original, except you are the owner. You can then `clone` your new fork and `push` and `pull` to it without needing any special permissions.

When you clone a repository, unless you have been added as a contributor, you will not be able to push your changes to the original remote repository.

#### Setting your upstream remote to get updates using Git

```bash
$ git remote add upstream git@github.com:ATL-WDI-Curriculum/atl-wdi-9.git
```

Run `git remote -v` again! What's changed?

- We just created an `upstream` link so that you can fetch from changes from the atl-wdi-9 repository.

<br />

## Git Branch

You can create branches of your master branch to work on or experiment with new features. When ready, you can merge the branch into the master branch. Why might branches be beneficial?

**Demo:** GitUp - https://github.com/git-up/GitUp

<br />

---

## Assess - Independent Practice (8m)

Use the internet and what you've learned today to answer the following questions with a partner:

* How do I send changes to the staging area?
* How do I check what is going to be committed?
* How do I send the commits to GitHub?
* Why do I write a commit message?
* How do I check the status of my repository?
* How does github know that I am allowed to push to a specific repo?
* What does remote mean, and what does it point to?
* What is the whole process to push code from your local machine to github?
* What is the difference between forking and cloning?

<br />

--- 

## Conclusion (2m)

As a developer, you will have to use Git everyday. The learning curve is steep and all the principles of version control can  be a bit confusing sometimes. This is why we ask students to push their homework everyday and to commit hourly during project time.

Don't get frustrated by all of the new commands because we will have plenty of time to practice them during this course.


##BREAK


## Labtime
[Code School Git](https://try.github.io/levels/1/challenges/1)

If you finish before lunch, finish reading the remaining chapters on git: https://swcarpentry.github.io/git-novice/05-history/
