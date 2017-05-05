# Feature Tests

### Lesson Objectives:
- Define an application "feature"
- Describe when to write feature tests
- Describe the purpose of Feature tests
- Describe the tooling of feature testing
- Build a feature test

--- 

#### What is a Feature Test?

- On a day-to-day basis, we are building features, NOT applications.
- On a high level, we want to know if an entire feature both "works" and is "done"
	- This does not mean every single way we could use the feature, just a *nominal* use case for the feature.
- Feature tests allow us to define programmatically when a feature is **working** and **done**, and then run that test forever to ensure it doesn't break.

#### When do we use these tests?
- Before we write any code for a new feature
- Every time we run our test suite thereafter to prevent **regressions**.

#### Why do we need feature tests?
- To tell us when we're done. When we write a feature test before we write code, we can think about our code on a lower level and know that our passing feature test will tell us when we have done enough work.
- To describe high-level features of our application. Our feature tests become our high-level documentation for our code. **This means we should always change our feature test before changing code that makes up a feature.**

#### What does it look like? (Tooling)
- We actually run the full application, in a browser if necessary. 
- We simulate real user input (typing, clicking buttons, etc.)
- We make assertions that given certain user input, we will see some output to the user OR something will happen on the back-end.

#### Challenges
- API Calls
	- If we're actually running our app, we actually have to make API calls. Since we can't be hitting a production API every time we run our test, we will need to rely on either **lower life-cycle** APIs (which makes us dependent on the team that develops it) or we will need to build our own **mock** APIs.

- E-mails
	- Just like API calls, do we want to be sending real e-mails every time our feature test runs? Obviously that would be a waste of resources. Therefore, we need to use testing tools that allow our code to *think* it is sending an e-mail, without changing the code itself.
	
- Database
	- We can't be filling up a production database with junk test data every time we run our tests, so we will need separate test databases (just like we have separate development databases)

- etc.