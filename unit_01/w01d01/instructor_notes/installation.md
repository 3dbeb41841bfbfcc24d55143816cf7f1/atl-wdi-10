---
title: Installation
type: Walkthrough
duration: 1hr
creator:
  name: Colin Hart
  campus: WDIR
competencies: Terminal navigation
---

# Installation

## Lesson Objectives

- install `brew`
- install `brew cask`
- install `Node` w/ brew
- install `Spectacles` w/ brew cask
- install `Atom` w/ brew cask
- Verify git is installed


# Installing Brew

First install brew:

[brew documentation](http://brew.sh/)

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Restart your Terminal, then run these commands in bash:

```bash
$ brew update
$ brew upgrade
$ brew install node
```

While brew is upgrading and installing do some research into what Brew is.

We're also going to install brew cask and then Atom and Spectacle.

https://caskroom.github.io/

```bash
$ brew tap caskroom/cask
```

Restart your terminal. Now you'll be able to install regular applications like Chrome using the command `$ brew cask install`

```bash
$ brew cask install spectacle
```

### Set up Spectacles

Open up your System Preferences
Click the padlock in the bottom left corner so you can make changes and then check the box next to Spectacle to allow the app to control your computer.

We'll go over what this app does later.

### Uninstall and reinstall Atom

```bash
$ brew cask install atom
```

You'll now be able to run the command `atom` in your terminal and give it a directory of file to open.
