[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Commit Guidelines

Do not use `commit -m`; it doesn't let you give a detailed commit message.
Instead, just write `git commit` and write your message in the
text editor that pops up (e.g. Atom, Sublime Text, Vim).

Every commit message must have a **subject line** that gives a high-level
description of the commit, followed by a **message body** that goes into more
detail.

Additionally, each commit message should adhere to the seven rules
below, which lay out some widely-accepted best practices. A detailed analysis
of these rules can be found
[here](http://chris.beams.io/posts/git-commit/#seven-rules).

1.  Separate your subject line from your body with a blank line.

2.  Limit the subject line to 50 characters (some say 40).

3.  Capitalize the subject line.

4.  Do not end your subject line in a period.

5.  Use the imperative mood in the subject line. This means to write
    it as if you were giving someone a command, e.g. "Create a new directory"

6.  Wrap the body at 72 characters.

7.  Use the body to explain _what_ and _why_ rather than _how_.

Here's an example commit message.

```markdown
Refactor parsing function

Starting to refactor the parsing function in order to make it more DRY.

See: #112
```

That last bit (`See #112`) is a reference to an issue on the repo.
GitHub recognizes those notes, and this allows you to quickly see which commits
are tied to which issues. If a commit completely solves an issue,
you'll commonly see people write things like `Resolves #73`
