
# Unit Tests

### Lesson Objectives:
- Determine a testable "unit" of code
- Describe when to write unit tests
- Describe the purpose of unit tests
- Describe the relationship between Feature, Integration, and Unit tests
- Describe the tooling of unit testing
- Build an unit test

--- 

#### What is a Unit Test?

- A test around the smallest **testable** unit of code possible.
- Testable units are usually single **public** functions.
- Separate permutations of the same function should be separate unit tests.

#### When do we use these tests?
- As early and often as possible (remember the Three Laws of TDD).
- Before we write any code for a new feature.
- As we are building out a feature, we should be writing unit tests every step of the way.
	- A single feature could require even one hundred unit test if it is sufficiently large.


#### Why do we need unit tests?
- Unit tests keep us focused on **only** the next most important lines of code.
- Unit tests ensure that we are thinking in small chunks of code.
- Unit tests lead to better *design* because we are keeping our units of code modular. When we make sure code is testable, we have to make sure we can test it on its own without other classes or functions `polluting` the test.


#### What does it look like? (Tooling)
- Determine what the next working set of code can be.
- Make assertions that the code will give the correct output given the nominal use case 
	- e.g. "When I run this function with these two parameters, I'll catch the return of the function in a variable. This variable should equal `4` if everything works properly."
- Make additional assertions that the code will give correct output given any other use cases (e.g. different parameters).

