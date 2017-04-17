# The CLI (Command Line Interface)

## Outline
* [Learning Objectives](#learning-objectives)
* [Background](#background)
* [Why The CLI?](#why-the-cli)
* [Some TERMinology](#some-terminology)
* [The Basics of CLI](#the-basics-of-cli)
* [Paths](#paths)
* [The BASH Shell](#the-bash-shell)
* [Common Commands](#common-commands)
* [Unsafe Commands](#unsafe-commands)
* [WDI Environment](#wdi-environment)
* [Homework / Practice](#homework--practice)
* [Sample Quiz Questions](#sample-quiz-questions)
* [Hungry for More?](#hungry-for-more)
* [References](#references)

## Learning Objectives

### Concepts

- Compare and contrast CLIs / GUIs
- Explain how command line usage can increase efficiency
- Describe the anatomy of a command (statement, flags, arguments)
- Explain what a path is, and why the 'current path' is important in the CLI
- Explain the difference between an absolute path and a relative path

### Mechanics

- Setup your working directory / environment for WDI
- List common commands to
  - View the path of the current directory
  - View the contents of a directory
  - Navigate to different directories
  - Manage files and directories
- List unsafe commands

### Framing

Turn & Talk: Given your exposure to the command line so far (prework and installfest), discuss the following questions:

* How is the CLI different from the GUI?
* What do you like / dislike about using it?
* It what ways might it be better or worse for Developers? (Compared to a GUI)

---------------------------------------------------------------------------

## Background

### What is an Operating System?
An operating system (OS) is a resource manager. It takes the form of a set of software routines that allow users and application programs to access system resources (e.g. the CPU, memory, disks, printers, network cards, etc.) in a safe, efficient and abstract way.

### History of UNIX
* The UNIX OS was originally created at Bell Labs by Ken Thompson and Dennis Ritchie back in 1969.
* It was released to the public in 1975.
* The Seventh Edition, released in 1978, marked a split in UNIX development into two main branches:
  - SYSV (System 5) - developed by AT&T and other commercial companies.
  - BSD (Berkeley Software Distribution) - arose from the University of California at Berkeley where Ken Thompson spent a sabbatical year.
* Apple Computer transitioned its origidnal home grown operating system over to a BSD variant of UNIX in 2000 known as OSX.
* In 2007 OSX became a certified UNIX.
* Linux is a free open source UNIX OS for PCs that was originally developed in 1991 by Linus Torvalds, a Finnish undergraduate student.

## Why The CLI?

The CLI has many benefits over a GUI:

### Speed
While it may not seem so yet, over time, most developers can achieve common tasks much faster using the command line. Features such as tab completion, history searching / modifying, and piping commands all contribute to this speed.

### Precision
Because of its nature as a text-based interface, the command line provides us with a lot more precision. We can look at the commands we're about to enter and understand exactly what they will do. This also allows:

Examples:

```bash
ls -als | sort -nr | head -5               # List the 5 largest files in the current directory
find . -name '*.md' | xargs grep -i unix   # Search for Markdown files containing "unix"
```

### Repeatability / Scriptability
The precision of commands and their text-based nature means we can easily save them and re-use them, or share them with others when appropriate.

### Tools
There are a very large number of tools available on the command line, to help us achieve almost any task. Most of them are built in, but we can download almost any others using `brew` on a mac, or `apt-get` on linux.

### Modularity / Composition
Tools built for the command line usually follow something called the ['unix philosophy'](http://catb.org/esr/writings/taoup/html/#id2807216), which is that each tool should do ~1 thing, and do it well. Complex tasks can be achieved by chaining tools together.

### Coolness Factor
After you master the command line you can impress your friends and star in a spy movie!!!

![Command Line Coolness](images/fast-developer.gif)

--------------------------------------------------------------------------------

## Some TERMinology
* **Terminal** - the application that presents a command line interface to the user.
* **Shell** - a command line interpreter that executes the commands that the user types. Common shells are sh, bsh, csh, ksh, bash, fish, and zsh (we will be using bash in this class)
* **Process** - a program that is currently running on the computer
* **Application** - a program that consists of one or more processes

## The Basics of CLI

You may already be familiar with some of these concepts, but it's worth reviewing them now, cementing the concepts and getting some more practice in.

### Everything is a command

First things first, on the command line, everything we enter into the command line is a **command**. When we hit enter, the command is executed.

### Commands have output and side effects

Some commands have **output**, which is displayed on the screen for us to see.

Examples of commands that have output might be:

* `pwd`
* `ls`
* `cat <filename>`

Other commands primarily exist to have a *side-effect*, or in other words, to make some change, usually on our system. An example might be `touch`, which creates a new file.

Note that often times, a command whose main job is a side effect may not provide any output if it succeeds. If there is an error it will provide output.

Rarely, some commands may provide both an output and side effects.

### Command Syntax (Flags and Arguments)

    $ ls -als *.png

Commands generally consist of three parts, the command, followed by flags (aka options), and finally arguments.

The **command** is the first 'word', e.g. `ls`, `cd`, or `touch`. It is like the verb, which says generally, 'what do I want to do'.

Next come the **flags** or **options**. These are optional; you may not use them for some commands. As the name implies, they set options to tell the command **how** to do what it's about to do. There may be zero or more options. Options usually start with one or two dashes. Usually one dash is for a short one letter abbreviation, while two dashes is for long name for the option.

http://catb.org/esr/writings/taoup/html/ch10s05.html#id2948149

Finally come the arguments. These are what you want to do the action to. Usually these are file names, but they could be URLs, or other things.

### Commands run in an 'environment'

We won't go deep into environments yet, but everytime a command is run, it may choose to look at what are called `environment variables`. These are essentially variables that are semi-permanent and can provide information or options to help a command do its job.

--------------------------------------------------------------------------------

## Paths
### What is a 'path'?

A path is the description that tells us (or a computer) where a file or directory is on our computer.

Our terminal (shell) is always working out of a single path at a time. Commands that are run will take action in the current path (directory) unless we tell them to do otherwise.

### Relative vs Absolute Paths

All paths point to a single file or directory, but we can write paths to be either **relative** or **absolute**.

#### Absolute Paths

An absolute path will always tell us exactly where the file or directory is. An example in the real world would be a mailing address:

```
GA
2nd Floor, Ponce City Market
675 Ponce De Leon Ave NE
Atlanta, GA 30308
USA
Earth
Solar System
Milky Way
```

Absolute paths start with a `/` and go from top down (least specific to more specific):

```bash
/Milky_Way/Solar_System/Earth/USA/Atlanta/GA
# or a realistic example
/Users/joehacker/ga/wdi/projects/project-2
```

The first slash essentially means "start at the root of the computer's file system".

Some absolute paths instead start with a `~`. This is a shortcut to the absolute path of our home directory. So the above absolute path could also be written as

```
~/ga/wdi/projects/project-2
```

#### Relative Paths

Relative paths are interpreted starting from the directory we're in (aka the current working directory). They are similar to giving directions from a starting point, for example:

`Go to the end of the street, turn left, go to the 2nd light, turn right and it is the 3rd house on the left.`

The above directions only work from a specific starting point. It is the same with UNIX relative paths.

Relative paths start with anything but a slash `/` or a tilde `~`.

So if I were in my home directory, the path to my work directory could be written

```bash
ga/wdi                     # relative
~/ga/wdi                   # absolute
/users/joehacker/ga/wdi/   # absolute
```

If I were in a different directory, then the relative path would point to an entirely different directory/file.

Periods or dots are special in relative paths:
* One dot means "relative to the current directory"
* Two dots means "go up to the parent directory"

So if I'm in `~/ga/wdi` then the relative path `../personal_projects` means "go up one level to the code directory, then down into personal_projects".

We can use multiple `..` to go up multiple levels:

`../../documents/top_secret/lol_cats/favorites/so_many_kittenz.jpg` would go up two levels, from `~/ga/wdi` to `~` (my home directory), and then down into my favorite lolcat picture.

--------------------------------------------------------------------------------

## The BASH Shell
* Important configuration files
  - ~/.bash_profile
  - ~/.bashrc
* Why 2 files?
  - .bash_profile is executed for login shells
  - .bashrc is executed for interactive non-login shells

NOTE: files that begin with a dot are considered `hidden` files in that they are not commonly viewed by the user. You can always view them if needed with the `ls -a` command.

### Command line basics
  * UNIX command format: `command --flag1 --flag2 arguments`
  * The PATH
    - the `which` command vs. the BASH `type` command
    - `alias which='type -a`
  * Pipes and Redirection
    - `echo "Hello, WDI" > greeting.txt`
    - `ls -als | sort -nr | head`
    - `ls '*.md' | xargs grep -i wdi`
    - `figlet "I Love GA" | lolcat`
    - `fortune -s | cowsay -f tux | lolcat`
    - `ps aux | grep ruby > currently_running_ruby_processes.txt`

### File System basics
* directories / folders and files
* file types
* tree structure: parents and children
* UNIX commands for files and directories:
  - pwd, cd, ls, mkdir, rmdir
  - absolute vs. relative paths
  - $HOME and ~
  - touch, cat, more/less, cp, mv, rm
  - wildcards

### File ownership
* All files and directories belong to an owner and a group
* The owner and the group have specific access to the file/directory
* `chown <new-owner> files`
* `chgrp <new-group> files`

### File permissions
* Read
  - File: user can view the contents of the file
  - Directory: user can list the files
* Write
  - File: user can modify the contents of the file
  - Directory: user can create new files and remove existing files
* Execute
  - File: user can use the file as a UNIX command
  - Directory: user can change into the directory
* `chmod options files`

### Processes
* foreground and background processes
* process ID
* process input and output (stdin, stdout, stderr)
* The `ps` command

--------------------------------------------------------------------------------

## Common Commands

### Getting help / info

There are three general ways to get help with a command.

* add `--help` or `-h` to the end of the command. e.g. `brew --help`
* use the `man` tool (manual), e.g. `man brew`
* search google

### Common Command Teachbacks

Form groups of ~3 and spend 15 minutes researching and preparing a short demo
of your command. Focus on:

* what it does
* common uses
* common flags or arguments
* any 'gotchas'?

#### Commands

* tab completion
* ls
* cd
* touch / mkdir
* cp
* mv
* rm

## Unsafe Commands

### sudo

`sudo` runs the command that follows as the SuperUser, aka 'root' or 'admin'. This means the command could potentially have destructive effects.

Generally, you shouldn't need to run commands with sudo in this course. If you're not sure, ask an instructor.

### rm

`rm` deletes files with no confirmation, and there's no `trash` to recover them from. Use `rm`, and especially `rm -rf` ___with caution!!!___

## WDI Environment

### Directory Structure

Here's the suggested structure for your WDI directory. Please create the following directories if they do not exist.

```
~
├── ga
│   └── wdi
│       └── exercises
│       └── mini-projects
│       └── projects
```

## Other Helpful Commands

* whoami
* hostname
* ping
* pushd
* popd

## Setting Up Your BASH Prompt

To setup a very nice BASH Prompt, see [LiquidPrompt](liquidprompt.md).

--------------------------------------------------------------------------------

## Homework / Practice

### A New Terminal

[A New Terminal](https://github.com/ATL-WDI-Exercises/intro-to-command-line/blob/master/star_wars_command_line.md)

### CLI Gardening

[CLI Gardening](https://github.com/ga-dc/cli_gardening)

### Kitchen Organizer

[Kitchen Organizer](https://github.com/ga-dc/kitchen_organizer)

### Command Line Fu (Optional)

[Command Line Fu](https://github.com/ga-dc/command_line_fu)

--------------------------------------------------------------------------------

## Sample Quiz Questions

- Why would a developer prefer the command line over a GUI?
- Write a command to list only files beginning with your first name.  Label the parts of the command.
- Where can we find help for shell commands?
- Describe 4 bash commands for managing directories and files.
- Describe 2 unsafe commands
- You are currently in the "code" directory in the below file tree. How would you get to the directory that contains "beach.png" using the command line?

```
home
├── documents
│   └── code
├── photos
│   ├── headshot.jpg
│   └── summer_vacation_2014
│       └── beach.png
└── videos
```

## Hungry for More?

Here are some advanced commands worth checking out that we may not explicitly go over in class:

* grep
* cat
* less
* find
* cal
* vim

## References
* [Unix Intro Course](http://www.doc.ic.ac.uk/~wjk/UnixIntro/)
* [Bash Beginner's Guide](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/)
