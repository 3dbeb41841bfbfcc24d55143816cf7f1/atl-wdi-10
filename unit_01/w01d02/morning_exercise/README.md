[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Git & GitHub

This morning, we will install and configure Git, and set it up to work with
your respective GitHub accounts.

## Initial Setup : Homebrew

Please install [Homebrew](http://brew.sh/)
(if you have not already done so)
by running the following command from the terminal.

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Next, run Homebrew's built-in diagnostic tool with the command `brew doctor`.
You may see a list of various different errors and warnings; if so, please flag
an instructor and get their assistance.
**Please do not proceed until you get a message saying**
**`Your system is ready to brew.`**

Once you see that message, run `brew update`, followed by `brew upgrade`.

## Install and Configure Git

Run `brew install git` to download and install Git with Homebrew.

Then, create a new file in your home directory called `.git-prompt.sh`, and
fill it with the contents of
[this file](https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh)

Next, create a file in the home directory (if one doesn't already exist) called
`.bash_profile`. In that file, paste the following:

```bash
# Load .bashrc, if it exists.
if [ -f ~/.bashrc ]; then
   source ~/.bashrc
fi

## Git Configuration
# Load the .git_prompt file each time you open Terminal window.
# This will also give us some highlighting.
source ~/.git-prompt.sh
GIT_PS1_SHOWDIRTYSTATE=true
GIT_PS1_SHOWUNTRACKEDFILES=true
GIT_PS1_SHOWCOLORHINTS=true
export PS1='\u:\W$(__git_ps1 " (%s)")\$ '
export EDITOR='atom --wait'
export VISUAL='atom --wait'
```

Run each of the following commands in the terminal
(substituting in your personal information as appropriate).

```bash
git config --global user.name "arbitraryUsername"
git config --global user.email "your_github_email@example.com"
git config --global core.editor "atom --wait"
```

Then, create a new file called `.gitignore` in your home directory, and copy
the contents of [this file](https://raw.githubusercontent.com/ga-wdi-boston/orientation/master/.gitignore)
into it.

Run `git config --global core.excludesfile ~/.gitignore` in the terminal.

Restart your terminal. Git is now set up and configured!

## Link Git and GitHub with Secret Keys

Git and GitHub can only securly share information by encrypting their messages,
and this requires having secret keys.

Start the key-generating wizard (`ssh-keygen -t rsa -C "your_github_email@example.com"`)

Feel free to put in a password or select a non-default location for your keys,
but it's not necessary to do so; you can just keep hitting enter to move ahead.

Once the key's been created, add it to your system (`ssh-add ~/.ssh/id_rsa`),
and then copy it to your clipboard (`pbcopy < ~/.ssh/id_rsa.pub`). Then, go to
[https://github.com/settings/ssh](https://github.com/settings/ssh) and click
'New Key'; paste in the key you've just created, and give that key a name of
your choosing.

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
Hi yourUsername! You\'ve succesfully authenticated, but GitHub does not provide shell access.
```

Congratulations! You now have Git and GitHub set up and configured.
