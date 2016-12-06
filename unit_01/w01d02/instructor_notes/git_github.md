---
title: Git and GitHub Intro
type: lesson
duration: "1:20"
creator:
    name: Micah Rich, LA
    adapted by: Colin Hart for WDI-remote
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

## Installing Brew, Git and setting up our local machine (15m)

1. First install brew:

    [brew documentation](http://brew.sh/)

    ```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
2. Then run these commands in bash:

    ```bash
$ brew update
$ brew upgrade
$ brew install git
```

3. We're also going to install brew cask and atom/sublime and [spectacle](https://www.spectacleapp.com/).

    - [Brew Caskroom](https://caskroom.github.io/)

    ```
$ brew tap caskroom/cask
```

4. Restart your terminal. Now you'll be able to install regular applications like Chrome. You will only want to follow these steps if you:

- Haven't installed atom or Sublime
- Have installed Atom or Sublime, but haven't set up the sym link.

But what's a sym link? Well, ideally you should be able to open files from  your terminal/bash using the command subl/atom and the file/directory name.


```bash
$ brew cask install atom
$ brew cask install spectacle
```


<br>

## Setting up Git with GitHub (10m)

[generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

<br>

## Why Version Control? (15m)


* Spend a few minutes thinking about the following questions:
  Assuming that version control systems did not exist, how would you:
    - Share your source code with other developers?
    - Collaborate with other developers
    - Manage multiple versions of a software product?
        - Free vs. Paid
        - Basic vs. Premium
        - 2.x vs. 3.x

* Put your thoughts and/or answers into Slack.

<br>

## Git vs GitHub and version control - Intro (20m)

First things first - Git is not GitHub. This is a common mistake that people make.

#### What is Git?

[Git](https://git-scm.com/) is:

- A program you run from the command line
- A distributed version control system

Programmers use Git so that they can keep the history of all the changes to their code. This means that they can rollback changes (or switch to older versions) as far back in time as they started using Git on their project.

**EXERCISE:** Think about some version control tools or processes you've used. These could be
formal processes imposed by a professor or manager, or a methods you've used personally. Direct message me if you'd like to share some of these verbally (I might just call on some of you) and/or write your answers in slack.

#### Some jargon

A codebase in Git is referred to as a **repository**, or **repo**, for short.

I'm going to give you a hint: Git is pretty confusing and complex at first but you'll pick it up before you know it. When we talk about repos and codebases we're really just talking about a directory that has a file in it named .git. This file tells the git binary to treat the directory as a repo and listen for changes, track files, and do git-things when asked.

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
- GitHub uses Git

#### Can you use git without GitHub?

Think about this quote: “Git is software. GitHub is company that happens to use Git software.”  

**Exercise:** React to with a thumbs up for yes or thumbs down for no. Write your reason in slack.

The answer is yes! They just share a similar name, but GitHub is a platform in the browser we use to share things with each other. We use git on our own to keep track of our files, and so does GitHub.

You can certainly use Git without GitHub!

<br>

## Why is Git tricky to understand? Demo (20m)

Git is tricky to understand because describing 'how' it works, like many things in programming, requires a breadth of technical knowledge. This is going to be a tricky mindset to work with at first.

We need to work with Git and many other complex technologies and approach them critically (i.e. as a critical thinker: the objective analysis and evaluation of an issue in order to form a judgment). But we need to also suspend our disbelief as it were and accept that at their core these technologies are complex, built by some of the best programming minds, and are the result of sometimes 50 years of iteration.

I don't need to explain the internal combustion engine to operate a car.

SO, all that being said, we can totally learn a little about how Git works, but for now it's enough to learn how to use it—for this class that means using it to keep track of homework and classwork and through this process better understand how we'll use it as professional developers.


> Things we don't need to know but might be curious and want to know!

- [Directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph)
- [SHA-1](https://en.wikipedia.org/wiki/SHA-1)
- blob
- tree

#### Trees?!

Even though you don't need to know how they work, it is useful to know that your local repository consists of three "trees" maintained by Git.

- **Working Directory**: which holds the actual files.
- **Index**: which acts as a staging area
- **HEAD**: which points to the last commit you've made.

![workflow](https://cloud.githubusercontent.com/assets/40461/8221736/f1f7e972-1559-11e5-9dcb-66b44139ee6f.png)

#### So many commands?!

There are also a lot of commands you can use in git. You can take a look at a list of the available commands by running:

```bash
$ git help -a
```

Even though there are lots of commands, during the course we will really only need about 10.

#### Git File Lifecycle

To understand how Git works, we need to talk about the lifecycle of a Git-tracked file.

![lifecycle](https://cloud.githubusercontent.com/assets/40461/8226866/62730b4c-159a-11e5-89cd-20b72ed1de45.png)

Schema From [git-scm.com](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)

There are 4 main stages of Git version controlled file:

1. **Untracked**: The file will not be added in the next commit
2. **Staged**: Staged files have not yet been committed to memory but they are "on deck" so to speak for your next commit
3. **Unmodified**: The file has already been committed and has not changed since the last commit
4. **Modified**: You have changes in the file since it was last committed, you will need to stage them again for the changes to be added in the next commit

Once you have committed a file and it becomes "unmodified" then it's contents are saved in Git's memory.

- **Not saved in git memory**: Your file is not saved until you commit the file to Git's memory
- **Saved in git memory**: Only once you have committed a file, it becomes saved in Git's memory

<br>

## Set up Git Prompt (15m)

1. Copy and paste the contents of this [file](https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh ) into `~/.git-prompt.sh`

    ```bash
# To create the file
$ touch ~/.git-prompt.sh
$ atom ~/.git-prompt.sh
```

2. Create a `.bash_profile` in your home directory

    ```bash
$ touch ~/.bash_profile
$ atom ~/.bash_profile
```

3. In that file paste the following:

    ```bash
    # This will load the .git_prompt file each time you open Terminal window. This will also give us some highlighting.    
source ~/.git-prompt.sh

    GIT_PS1_SHOWDIRTYSTATE=true
GIT_PS1_SHOWUNTRACKEDFILES=true
GIT_PS1_SHOWCOLORHINTS=true
export PS1='\u:\W$(__git_ps1 " (%s)")\$ '
```

4. Set your default editor:

    ```bash
$ git config --global core.editor "atom -n -w"
```

5. Then restart your terminal!

<br>


## Let's use Git (25m)

1. First, create a directory on your Desktop:

    ```bash
$ cd ~/Desktop
$ mkdir test_repo
```

2. You can place this directory under Git revision control using the command:

    ```bash
$ cd test_repo
$ git init
```

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

We should see that there is now a hidden folder called `.git` this is where all of the information about your repository is stored. There is no need for you to make any changes to this folder. You can control all the git flow using `git` commands.


#### Add a file

1. Let's create a new file:

    ```bash
$ touch a.txt
```

2. A small `%` should show next to your prompt! (_I have a `?` because I set mine up differently, do not panic_) 

    ```bash
<your name>:<current directory> (master #%)
```
That % sign indicates that we have an untracked file that Git doesn't know about

3. If we run `git status` we should get:

    ```bash
    On branch master

    Initial commit

    Untracked files:
    (use "git add <file>..." to include in what will be committed)

    a.txt

    nothing added to commit but untracked files present (use "git add" to track)
```

4. This means that there is a new **untracked** file. Next, tell Git to take a snapshot of the contents of all files under the current directory (note the -A)

    ```bash
$ git add -A
```

    A small cross should show next to your prompt!

    This snapshot is now stored in a temporary staging area which Git calls the "index".


#### Commit

1. To permanently store the contents of the index in the repository, (commit these changes to the HEAD), you need to run:

    ```bash
$ git commit -m "Please remember this file at this time"
```

2. You should now get:

    ```bash
[master b4faebd] Please remember this file at this time
 1 file changed, 0 insertions(+), 0 deletions(-)
  create mode 100644 a.txt
```

#### Make changes to the file

Now let's open a.txt in Sublime or Atom:


```bash
$ atom a.txt
```

Inside the file, write something. Save the file.

If you press `return` in the terminal, you will now see that you have untracked changes marked by a red `*`. (_Mine may look different, do not panic_) 


Running `git status` again will show you that a.txt has been **modified**.

#### Make a second commit and check the log

1. Let's now make a second commit.

    ```bash
$ git add -A
$ git commit -m "Second commit"
```

2. Checking `git log` will show you 2 commits with different ids:

    ```bash
* 6e78569 (HEAD, master) Second commit
* b4faebd Please remember this file at this time
```

> NOTE: if you get the message `git config --global --edit`, open it in Atom with `atom git config --global --edit`

#### Making repositories - Codealong (15m)

Let's do this together:

1. Go to your GitHub account
2. In the top left, hit the + button and select `New repository`
![](https://help.github.com/assets/images/help/repository/repo-create.png)
3. Name your repository `test_repo`
![](https://help.github.com/assets/images/help/repository/repo-create-name.png)
4. **Initialize this repository with a README** (So that we can `git pull`)
4. Click the big green Create Repository button
5. We now need to connect our local Git repo with our remote repository on GitHub. We have to add a "remote" repository, an address where we can send our local files to be stored.

    The remote URL is found under the green button on the right named "Clone or download"

    ![](https://i.imgur.com/FjdRT66.png)

6. Click on the clipboard to copy the URL and run this command in your Terminal. Make sure that you `cd` into the directory where you want to place this clone.


    ```bash
git remote add origin <git@github.com:github-name/test-repo.git>
```

#### What are Remotes? (5m)

Remotes are pointers or aliases we set up to tell git where to go on github.

Try running the following:

```bash
$ git remote

$ git remote -v
```

#### Pushing to GitHub (5m)

In order to send files from our local machine to our remote repository on GitHub, we need to use the command `git push`. However, you also need to add the name of the remote, in this case we called it `origin` and the name of the branch, in this case `master`.

```bash
git push origin master
```

This should fail due to new files on the remote repo.

#### Pulling from GitHub (5m)

1. As we added the README.md in our repo, we need to first `pull` that file to our local repository to check that we haven't got a 'conflict'.

    ```bash
git pull origin master
```

2. Once we have done this, you should see the README file on your computer. Now you can push your changes:

    ```bash
git push origin master
```

Refresh your GitHub webpage, and the files should be there.

<br>

# Forking and Cloning your first repository

## What is forking? Intro (5m)

The `fork` & `pull` model lets anyone fork an existing repository and push changes to their personal fork without requiring access be granted to the source repository.

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea. This is how most open source projects operate.

## Now that everyone has their first repository on GitHub, let's fork and clone our first repository! (20m)

#### Clone practice

Cloning allows you to get a local copy of a remote repository.

1. Navigate back to your Desktop and **delete your `test_repo` repository**:

    ```bash
cd ~/Desktop
rm -Rf test_repo
```

2. Go to your GitHub repo for `test_repo`
3. Click the green "Clone or Download" button and copy the URl. Make sure that you use **Clone with SSH** 

    ![clone](https://i.imgur.com/FjdRT66.png)
    
4. From the terminal prompt, clone the repo with the following command (you can clone the repo to your Desktop):

    ```bash
git clone <YOUR_TEST_REPO_URL>
```

#### Fork the student repo
 
2. Go to the link below, this is going to be our class repo where you'll receive your morning exercises, classwork, and homework. It's also where you'll push to submit your homework.

    https://github.com/ga-students/wdi-remote-matey

2. Click fork, and select your name then on your fork of the repo.
3. Click on the Green Button on the right hand side you will see:

    ![clone](https://i.imgur.com/FjdRT66.png)

4. Ensure that you have SSH checked and copy this url.

#### Clone your fork of the student repo!

To retrieve the contents of your repo, all you need to do is:

```bash
$ git clone git@github.com:<your-github-name>/wdi-remote-matey.git
```

Git should reply:

```bash
Cloning into 'wdi-remote-r2d2'...
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
$ git remote add upstream git@github.com:ga-students/wdi-remote-matey.git
```

Run `git remote -v` again! What's changed?

<br>

## Git Branch

You can create branches of your master branch to work on or experiment with new features. When ready, you can merge the branch into the master branch. Why might branches be beneficial?

**Demo:** GitUp - https://github.com/git-up/GitUp

## Assess - Independent Practice (10m)

Use the internet and what you've learned today to answer the following questions with a partner:

* How do I send changes to the staging area?
* How do I check what is going to be committed?
* How do I send the commits to GitHub?
* How does github know that I am allowed to push to a specific repo?
* Which Remote points to what?
* What is the whole process to push code from your local machine to github

<br>

## Conclusion (5m)

As a developer, you'll have to use Git pretty much everyday, the learning curve is steep and all the principles of version control can  be a bit blurry sometimes, hence why we ask students to push their homework everyday and to commit regularly during project time.

Don't be frustrated by all the new commands because we will definitely have the time to practice during this course.

- Explain the difference between forking and cloning.
- Describe the steps to initialize a Git repository and link your local repository to a GitHub remote location.

## Labtime
[Code School Git](https://try.github.io/levels/1/challenges/1)
