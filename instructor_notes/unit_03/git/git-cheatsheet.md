# Cheatsheet
https://github.com/ga-students/wdi-remote-matey/wiki/Git-Cheatsheet

1. $`git branch`
 - lists all available branches

2. $`git checkout <branch name>`
 - moves from current branch to a different branch

3. $`git checkout -b <branch name>`
 - creates a branch and switches from current branch to just created branch

4. $`git branch -d <branch name>`
 - deletes the branch with that name locally

5. $`git merge <branch name>`
 - takes the committed code in the branch you pass in and merges it into the branch you're currently in

6. $`git remote -v`
 - lists all the remotes on your repo.

7. $`git remote add <remote name> <url>`
  - add a new remote to your repo
  - remote name would be:
    - origin (your fork or your repo)
    - upstream (the place your forked from)
    - heroku (the heroku remote url when you run $`heroku create`)

8. $`git remote remove <remote name>`
  - deletes the remote named