[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Git & GitHub

This morning, we will install and configure Git, and set it up to work with
your respective GitHub accounts.

<br />

## Initial Setup : Homebrew

1. Please install [Homebrew](http://brew.sh/)
(if you have not already done so)
by running the following command from the terminal.

- [brew documentation](http://brew.sh/)

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Next, run Homebrew's built-in diagnostic tool with the command `brew doctor`.
You may see a list of various different errors and warnings; if so, please flag
an instructor and get their assistance.
**Please do not proceed until you get a message saying**
**`Your system is ready to brew.`**

3. Once you see that message, run these commands in bash:

```bash
$ brew update
$ brew upgrade
$ brew -v
```
- will output your version of homebrew

```bash
$ brew install git
$ git --version
```

- this will download and install Git with Homebrew
- `git --version` will output which version of git you have

4. Run each of the following commands in the terminal
(substituting in your personal information for what is in the quotes).  **Make sure to use the same username and email that you use in github.**

```bash
git config --global user.name "yourGithubUsername"
git config --global user.email "your_github_email@example.com"
```

```bash
$ git config --get user.name
```

- should output your name

```bash
$ git config --get user.email
```

- should output your email

5. To check to see if you have set up an ssh key, run this command

```bash
$ ls ~/.ssh/id_rsa
```

- if you have one, it will output '/Users/[something]/.ssh/id_rsa'
- if you see 'No such file or directory', you have not created an ssh key

#### If you have not yet created a ssh key, follow this link.
[generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

**I set mine up without a passphrase.**

<br />

4. You are also going to install brew cask and atom/sublime and [spectacle](https://www.spectacleapp.com/).

- [Brew Caskroom](https://caskroom.github.io/)

```
$ brew tap caskroom/cask
```

5. Restart your terminal. Now you'll be able to install regular applications like Chrome. You will only want to follow these steps if you:

- Haven't installed atom or Sublime
- Have installed Atom or Sublime, but haven't set up the sym link.

But what's a [sym link](https://en.wikipedia.org/wiki/Symbolic_link)? Well, ideally you should be able to open files from  your terminal/bash using the command subl/atom and the file/directory name.

```bash
$ brew cask install sublime-text3
$ brew cask install spectacle
```

<br />

## Configure your Git Prompt

1. Run through the commands below.  The touch command will create your git-prompt file.  The subl command will open that file in sublime.  Then, click on this link and copy/paste its contents into your `~/.git-prompt.sh`- [git prompt contents](https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh ) 

```bash
# To create the file
$ touch ~/.git-prompt.sh
$ subl ~/.git-prompt.sh
```

2. If you don't have a bash-profile in your home directory, run through the commands below to touch/create a `.bash_profile`.  Then, open the file in sublime.

```bash
$ touch ~/.bash_profile
$ subl ~/.bash_profile
```

3. In that file paste the following code:

<!-- ```bash
# Load .bashrc, if it exists.
if [ -f ~/.bashrc ]; then
   source ~/.bashrc
``` -->

```bash
# This will load the .git_prompt file each time you open Terminal window. 
# This will also give us some highlighting.    
source ~/.git-prompt.sh

GIT_PS1_SHOWDIRTYSTATE=true
GIT_PS1_SHOWUNTRACKEDFILES=true
GIT_PS1_SHOWCOLORHINTS=true
export PS1='\u:\W$(__git_ps1 " (%s)")\$ '
```

4. Set your default editor:

```bash
$ git config --global core.editor "subl -n -w"
$ git config --list
```

- `--global` means that you should use these settings for every project
- You should see a list of the settings that you have configured


5. Then, create a new file called `.gitignore` in your home directory, and copy the contents of [this file](https://raw.githubusercontent.com/ga-wdi-boston/orientation/master/.gitignore)
into it.

Run `git config --global core.excludesfile ~/.gitignore` in the terminal.

6. Restart your terminal. Git is now set up and configured!

<br />

## Link Git and GitHub with Secret Keys

Git and GitHub can only securly share information by encrypting their messages,
and this requires having secret keys.

Start the key-generating wizard (`ssh-keygen -t rsa -C "your_github_email@example.com"`)

Feel free to put in a password or select a non-default location for your keys,
but it's not necessary to do so; you can just keep hitting enter to move ahead.

Once the key's been created, add it to your system (`ssh-add ~/.ssh/id_rsa`),
and then copy it to your clipboard (`pbcopy < ~/.ssh/id_rsa.pub`). Then, go to [https://github.com/settings/ssh](https://github.com/settings/ssh) and click 'New Key'; paste in the key you've just created, and give that key a name of your choosing.

Your key is now on both Git and GitHub! To test the connection, run

`ssh -T git@github.com`

If you get a prompt along the lines of

```
The authenticity of host 'github.com (xxx.xxx.xxx.xxx)'... can\'t be established.
RSA key fingerprint is XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX.
Are you sure you want to continue connecting (yes/no)?
```

then just type 'yes'.
If everything's working, you should get a response like the following:

```
Hi your Username! You\'ve succesfully authenticated, but GitHub does not provide shell access.
```

Congratulations! You now have **Git** and **GitHub** set up and configured.

---

## [Linux or Windows Instructions](http://docs.railsbridge.org/installfest/choose_your_operating_system)

---

### If you have finished setting up git, you can work on typing exercises

* [TypeRacer](http://play.typeracer.com/)
* [Typing.io](http://typing.io)
* [ztype](http://zty.pe/)
