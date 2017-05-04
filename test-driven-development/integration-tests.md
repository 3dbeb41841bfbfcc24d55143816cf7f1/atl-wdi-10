# Integration Tests

### Lesson Objectives:
- Describe a component "integration" point
- Describe when to write integration tests
- Describe the purpose of integration tests
- Describe the relationship between Feature and Integration tests
- Describe the tooling of integration testing
- Build an integration test

--- 

#### What is an Integration Test?

- Nicely factored code should be made up of several small _components_, each with a clearly defined _interface_.
- These components have to talk to each other, and we want to make sure they are communicating properly.
- Integration tests describe the communication between these components, but not the way they are used to build features or how they work internally.
- **Basically, integration tests describe how two or three components talk to each other to solve problems.**

#### When do we use these tests?
- When we find ourselves writing really low-level feature tests. 
	- Let's say because of the complexity of a feature, we end up writing several different versions of the test to make sure one class or another is talking to something else based on which order a user clicks buttons.
	- We could write just one version of the (expensive) feature test, and write several lower-level integration tests that ensure our classes talk to each other in any order.
- When unit tests don't give us quite enough confidence.
	- Sometimes when we have lots of really low-level unit tests, we still may not be sure that given some random input from another class, our class will work. Integration tests allow us to to test any *weird* ways that classes can talk to each other that might make us uneasy.
- **We will often have fewer of these tests than other types.**

#### What does it look like? (Tooling)
- Create instances of the classes we are "integrating", then accomplish a task using 
  these together.
- Test this tasks or set of tasks using several different inputs, expecting correct results for each.

#### Challenges
- What if these classes **DEPEND** on other classes? Should we try to avoid this? Does this help us look at our code base and see where our design could be better?
	- Sometimes, the need for lots of integration tests can be an indicator that we need to take a better look at our application's design.
- It can be a challenge to recognize when an integration test should be used instead of a feature test or more unit tests.
- This is a great tool that developers can forget to use because it isn't as ubiquitous as feature and unit tests!

#### The Future
- Some people say that properly using Integration-style tests can replace feature testing entirely. This is challenging to implement and may reduce "confidence" for a lot of developers, but it also removes a lot of the expense of end-to-end Feature tests. Fast test suites are way better to work with, and are an important goal for many teams.

