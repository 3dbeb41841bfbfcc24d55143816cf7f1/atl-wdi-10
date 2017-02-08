### Using Git and branches to Collaborate

One person on the team will create the project repo. As a team, you have the option of deciding whether you'll fork the main project repo and make pull requests from your forks and branches into the main repo, or if everyone will clone the main repo and makes pull requests just from branches. It's up to you, but your team should be in sync.

You *_MUST_* use branches to collaborate. Period. If you need a refresher refer to [W07D02](https://github.com/ga-students/wdi-remote-matey/blob/master/unit_02/w10d03/instructor_notes/)

Working code lives on the `master` branch. No member of the team should _ever_ be writing code or making changes on master unless you're in your final deployment phase.

Every project and each local repository should have a branch called `develop` where you will merge everyone's work at the end of the day and test and verify it works before merging everything into `master`. This way master is _safe_ you're never risking breaking the code you know for a fact works.

Having every team member working on a develop branch is the minimum requirement to avoid merge conflicts.

However, if you have two people working on the same feature or in similar parts of the app, you might want to go one step further and make a branch off of `develop` called a feature branch. This way if Person 1 finishes before Person 2 and pushes their code from their feature branch and merges it into `develop` Person 2 can commit their code to their feature branch. Checkout to the develop branch, pull Person 1's code from GitHub to their local develop branch. And then decide if they code will break their feature code. Or possibly Person 2 needs Person 1's code in their feature branch and so can merge it in from develop

### User stories and Project management.

If in prior projects you have not used or followed through on maintaining your user stories and project management you'll want to make sure to not follow that pattern for this project. Because you are all remote is essential that everyone understands what everyone is working on, both feature wise as well as file wise.

You should be in regular communication with your team. But if you maintain a current and active history of the state your project using user stories and technical specs in Trello or GitHub issues where team members have taken ownership of specific cards or issues, it will limit the need to constantly interrupt each other to figure out what you should or could work on next.

### The role of the Git Tsar

You should be trying to sync up several times a day to push code and merge it. And make sure everyone is on track. One person should take the role of the Git Tsar, and switch roughly each day. The Git Tsar is in charge of looking at the open pull requests, merging them. Possibly closing issues that relate to them. Communicating with the team what code has been completed and merged, on which branches etc. And handling merge conflicts that will occur.

The rest of the team should be available to answer questions and help the Git Tsar make intelligent decisions.

We recommend that you aim to sync everyone's develop branches at noon (if there are open pull requests) and at six before the day ends. The end of day merge is the most important since your team's schedule will be more flexible. You'll want to make sure that if your team is all working at separate times during the evening and night that everyone understands what their task is, what everyone else is working on, and also that everyone's code is in the same state.
