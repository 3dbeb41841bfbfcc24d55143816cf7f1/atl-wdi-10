# The TDD Flow

### Lesson Objectives
- Describe the flow of Test-Driven Development
- Test-drive a full application feature
- Refactor code while safely preserving all functionality

---

#### Red, Green, Refactor!

- The simplest mantra of TDD is this: "Red, Green, Refactor"
- This means that we should always start with a failing test, make that test pass, and then once we have a safety net set up, refactor the code as we please. We can make any changes we want, knowing that if we make a mistake the test will fail and tell us we need to take another look.

#### The TDD Flow

##### RED
- Failing feature test
- Failing integration tests (if necessary)
- Failing unit test

##### GREEN
- Passing unit tests until the integration tests also pass
- Feature test should pass if all of our integration and unit tests are also passing.
- We're done with the feature!

##### REFACTOR
- Clean it up!
- Can we one-line something?
- Are our variable names clear?
- Are our function names clear?
- etc.
