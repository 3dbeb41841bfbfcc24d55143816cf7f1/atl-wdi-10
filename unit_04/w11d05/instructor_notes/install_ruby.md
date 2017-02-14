#### NOTE: If you have RVM already set up you will need to decide whether you want to continue using RVM or if you'd prefer to switch to rbenv.

To uninstall follow these instructions: https://richonrails.com/articles/uninstalling-rvm

To check if you have RVM installed simply run the command $`rvm`. If it is not installed you'll see the message `command not found: rvm`

RVM and Rbenv do NOT work well together, so having both installed will cause _weirdness_

------


1: $`brew install rbenv ruby-build`

2: $`echo 'eval "$(rbenv init -)"' >> ~/.bash_profile`

3: $`echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile`

> Once you've completed the first two steps you can run the command $`rbenv` which will give you a short list of rbenv commands. Rbenv is a ruby environment manager, which allows you to install multiple versions of Ruby.


## Why we need rbenv and our own version of Ruby.


> Every apple computer comes with a version of Ruby already installed (2.0.0). Your computer's OS uses Ruby to run various processes. So while it’s not terrible to mess with the configuration of your systems Ruby i.e. changing permissions, sudo installing gems etc. It’s better just have our own version.   

> Also, consider this: if we have have Ruby 2.0.0 installed by default and we then install Ruby 2.3.0, how do we tell the computer which version of Ruby to use and in what instance? This is why we need an environment management tool   

## Steps 4 - 6


4: After you run $`rbenv` you’ll see a list of commands like `rbenv versions`, `rbenv install`, `rebenv global` etc. We want to run $`rbenv install 2.3.0`

5: Run $`rbenv rehash`

6: Run $`rbenv global 2.3.0`

>Steps 4 through 6 install the Ruby version 2.3.0. Rehashing is a configuration process specific to rbenv. Rehash needs to be run after installing any new version of Ruby. The command `rbenv global 2.3.0` sets 2.3.0 to be the version that’s used globally on your computer. You may have also noticed `rbenv local`, which will set a ruby version specific to a project, and `rbenv shell` which sets a specific ruby version to run in your terminal.

>You can read all about this and more about Rbenv, what it does and how to use it [here](https://github.com/sstephenson/rbenv):
