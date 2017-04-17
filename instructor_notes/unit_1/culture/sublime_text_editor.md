# Efficient Text Editing with Sublime

*Submitted by Mike Hopper, WDI Atlanta.*

The following lesson should take about `75 minutes` and includes a lab for
the students to practice some of the powerful editing features of Sublime.

The main purpose of this lesson is to get students comfortable with the
Sublime editor, including how to configure it, install plugins, and get
*greedy* about discovering faster, more efficient ways of editing files.

TAGS=[sublime, editor, tools]

## Core Competencies

Students will be able to:

* Explain the difference between text files and binary files
* Installing Sublime Text 3 using brew cask
* Modify the configuration of Sublime to set the theme, font, tab settings, etc.
* Launch Sublime from the command line
* Use Find to search the current file or all of the files
* Change the layout to 2up, 3up, 4up, etc.
* Install Package Control
* Using Package Control to install other Sublime plugins
* Use cool Sublime editing tricks such as:
  - select and edit several lines at once
  - select and edit in "column mode"
  - move the selected line up or down
* Use keyboard shortcuts to save time

![VI or Sublime](to-vi-or-not-to-vi.png)

## Install Brew

Copy and Paste into your terminal window:

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Install Cask, Cask Versions and Sublime Text 3

```bash
brew tap caskroom/cask
brew tap caskroom/versions
brew cask install sublime-text
```


## What is a Text Editor?
* Provides an interface for viewing and modifying text files
* Text files are files containing human readable text
* Encoded via ASCII or Unicode characters
* There are different *kinds* of text editors:
    - terminal / command line: vim, emacs, nano
    - window based: Sublime, TextMate, Notepad++

## Modern Text Editors
* Can open a file or a directory
* Can understand context:
    - context sensitive help
    - may highlight errors or bad practices in your code
    - adapt to different file formats
    - provide syntax highlighting

* extensions & plugins - used to add additional features to the editor

## Types of Text Files
* Plain text
* Markdown
* CSV
* Various Programming Languages
    - HTML
    - CSS
    - JavaScript
    - Ruby
    - BASH
    - SQL
* Each programming language has a set of rules, keywords, operators, and syntax

## Sublime Text
* multi-platform (OS X, Windows, Linux)
* popular (widely used for web development)
* free to try (though you will be nagged to purchase it)
* extensible (we can add functionality via plugins)

## Sublime Versions
* Do you have Sublime Text Version 2 or Version 3?

## Launching Sublime

To open sublime, simply click the icon in the Dash or Launchpad.
Or just type `subl` in a terminal.

To open Sublime with a specific file, we can use the command line again,
but this time passing in a file name:

```bash
mkdir recipes
subl recipes/veggie_soup.txt
```

## Project mode

Real-world software projects often involve _many_ files organised into
folders. It is handy to be able to see all the files in our project when
working in our text editor. Sublime makes this easy as it supports a
project mode. To use this we simply pass a directory instead of a file:

```bash
subl recipes
```
or...

```bash
cd recipes
subl .
```

Notice that the sidebar now has a folders section that shows all the files
and folders in the project. Clicking on a folder expands the view to show its
contents.

## Take a Tour of the Sublime Editor Window Components

* Menu
* Sidebar
* Open files via tabs
    - can rearrange tabs
    - can change layout of tabs - `Alt-Command-<Number>`
* Edit pane
* Ruler
* Minimap
* Footer
    - Line #, Column #
    - White Space Mode
    - File Type

## Find (Search)

* You can search a single file or all of the open files
* You can search case sensitive or case insensitive
* You can search using regular expressions (we will talk about those later)

### Settings and themes

`cmd + ,` allows you to access the sublime's preferences.

It opens this file as a JSON object (we will learn all about JSON in the next
few weeks).  It basically presents the settings as a series of keys and values
- you can add keys/values, and/or modify the existing values to fit your
personal preferences.

**For now, add the following:**

```json
{
    "draw_white_space": "all",
    "ensure_newline_at_eof_on_save": true,
    "fade_fold_buttons": false,
    "font_face": "Menlo",
    "font_size": 20,
    "highlight_line": true,
    "highlight_modified_tabs": true,
    "indent_to_bracket": true,
    "line_padding_bottom": 1,
    "line_padding_top": 1,
    "open_files_in_new_window": false,
    "rulers":
    [
        78
    ],
    "soda_classic_tabs": true,
    "soda_folder_icons": true,
    "tab_size": 2,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "word_separators": "./\\()\"'-:,.;<>~!@#%^&*|+=[]{}`~?",
    "word_wrap": "false"
}
```

We can change the colour scheme sublime uses by going to `preferences/color scheme` and selecting one of the themes. I recommend **Monokai** or **Dawn**. When you select a scheme it changes all of the syntax highlighting colors.

### Packages

Sublime works with a lot of plugins, and we will install new plugins almost every week. Before, you had to download the package manually and add it to Sublime's plugins folder. Now there is a package manager for Sublime, which works a bit like brew; you ask for a package and sublime will install it for you.

In short, Sublime is highly customisable, you can play around by editing your user settings and by installing plugins. We will do this using *Package Control*.

Follow the instructions [here](https://packagecontrol.io/installation#st3) to install *Package Control*.
Note that there is a difference in the instructions between ST2 and ST3.

#### Install Advanced New File plugin via Package Control

Now we will use *Package Control* to install the *Advanced New File* plugin.
See [Sublime Advanced New File](https://github.com/skuroda/Sublime-AdvancedNewFile)

Now test out the plugin by creating a new file:

* Create a New File (AdvancedNewFile plugin):   `Alt-Command-N`

## Code Along

In this code along we will create some files via the command line and then
edit them in Sublime.

```bash
cd ~
cd wdi
git clone https://github.com/ATL-WDI-Curriculum/sublime.git
cd sublime/exercises
```

Follow the instructions that start with a `#` sign to make modifications
to the text in the following files.

* eggs_and_ham.txt
* fruit.txt
* superheroes.txt
* math.txt

## References

* [Efficiency With Sublime Text](http://thunderboltlabs.com/blog/2013/11/19/efficiency-with-sublime-text-and-ruby/)
* [Scotch.io Tutorials](https://scotch.io/tag/sublime-text)
* [Sublime Text Keyboard Shortcuts](http://www.wdtutorials.com/2013/06/23/sublime-text-keyboard-shortcuts-cheat-sheet-win-os-x-and-linux#.VT2F161Viko)
* [Sublime Practice](https://www.shortcutfoo.com/app/dojos/sublime-text-3-mac)
* [Sublime Youtube videos](https://www.youtube.com/playlist?list=PLLnpHn493BHEYF4EX3sAhVG2rTqCvLnsP)
