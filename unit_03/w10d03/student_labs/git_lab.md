## You Do: Git Lab

In your teams, you're going to test this process with forks.

1. Nominate one person in your team to simulate having the "main repo." Use the test repo we created this morning.

2. The other team members will fork that persons repo and clone the fork locally.

3. Each team member who forked should run $`git remote -v` and verify that their origin remote points to their fork and that they have an upstream remote that points to the person maintaining the main repo.

  If you're missing one you can add remotes by running $`git remote add <name of remote> <url of remote>`

### The Fun Stuff

Moving files from one machine to another. Simulate the work-flow process.

Everyone should create a dev branch.

For each of these steps, you're going to alternate screen shares so EVERYONE can see what's happening. Only one person is typing commands at a time in this exercise.

1. *One* person will touch a file called `weird2-<your name>` on the dev branch.
2. Add commit and push to origin dev
3. Open a pull request from your fork to the main repo.

  The steps for opening pull requests from a fork are listed here. It's just a bunch of drop downs and menus on GitHub:
  https://help.github.com/articles/creating-a-pull-request-from-a-fork/

4. The nominated person will accept and close the Pull request

  This person can choose to either pull dev locally and run git merge locally and then push back to master to move code from dev to master
  *OR*
  They can open another pull request from dev to master and then pull both branches down

  The steps for opening pull requests from one branch to another in your own repo are listed here: https://help.github.com/articles/creating-a-pull-request/

5. Once the file weird2 is merged into dev on GitHub, all the other teammates can run `git pull upstream dev` to pull the code from upstream dev into their local dev.
6. Once the file weird2 is merged into master on GitHub, all the other teammates can run `git pull upstream master` to pull the code from upstream master into their local master.
7. Everyone should make sure to push to their origin dev and origin master, so their local and remote are also in sync. Check that the weird2 file exists in all branches and all repos.

Repeat these six steps for each _Slowly_ for each team member.

If you finish these six steps for each person, and there is still time. Play with making feature branches and merging files from those. *OR* Repeat the six steps by adding some lines of text to one of your files and syncing that new line across all the branches and repos.
