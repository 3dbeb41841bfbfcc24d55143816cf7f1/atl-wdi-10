# Installing Ruby

## Objectives

* Install Ruby via rbenv
* Have the correct Ruby running
* Easily switch Ruby versions
* Execute a Ruby script

## Sanity check

There's two Ruby version management tools which conflict with each other.

Make sure you do NOT have the other one by running `$ rvm`. It needs to output `command not found: rvm`.

If it does not, tell us now and go to [the uninstall steps](https://richonrails.com/articles/uninstalling-rvm).

**Note:** the `$` means to run it in the Terminal. So if I write `$ which ruby` it means to run `which ruby` in your bash Terminal. This works for zsh as well.


## Have the correct Ruby running

Mac OSX comes with its own version of Ruby which is no good. We need to set it so that we have control.

To see where the current Ruby is being executed, run: `$ which ruby`. This should output to `/usr/bin/ruby`.

If we run `$ ruby -v`, it'll output the standard one which is `2.0.0` at the current time. Not every app uses this version, so we need to use our own tool to manage Ruby versions.


## Install Ruby via rbenv

In your bash terminal:

```bash
# rbenv enables us to download Ruby
brew install rbenv

# ruby-build enables us to install multiple Ruby versions
brew install ruby-build

# list all the available Ruby versions
rbenv install -l

# Find the latest one that looks like:
# 2.4.1
# that DOES NOT have a -dev or -rc, but a -p is OK
# At the current time, the latest one is 2.4.1
rbenv install 2.4.1
# This takes awhile!
```


## Have the correct Ruby running (continued)

Now we'll check to see if we're using the correct version of Ruby.

Previously, when we ran `$ which ruby`, we got `/usr/bin/ruby` and `$ ruby -v` gave us `2.0.0`. Let's fix that.

```bash
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile

# Refresh bash source
source ~/.bash_profile

# Use your version here
rbenv global 2.4.1
which ruby
```

The end result you should be similar to `/Users/<your user name>/.rbenv/shims/ruby`.


## Easily switch Ruby versions

Let's install another version of Ruby. Previously we had `2.4.1`. Let's install `2.3.0` for funsies.

```bash
# bash

# This will take a minute
rbenv install 2.3.0

# Now we can see what we have available to us
rbenv versions

# Let's set it to 2.3.0
rbenv global 2.3.0

# Print our current Ruby version
# It should be 2.3.0
ruby -v
```


## Execute a Ruby script

Let's make a directory for our random Ruby scripts.

```bash
# bash
cd ~
mkdir ruby_scripts
cd ruby_scripts
touch example.rb
subl example.rb	# or whatever your preferred editor is
```

```ruby
# example.rb
puts "Hello World!"
```

```bash
# bash
ruby example.rb
```

Yay!


## Weekend Homework

There's an awesome book for getting started with Ruby called [Learn Ruby the Hard Way](https://learnrubythehardway.org/book/).

It's hosted online for free.

This homework will not be graded, however the more you read through the book, the easier this week will be and the more you'll be able to do in your Rails project.
