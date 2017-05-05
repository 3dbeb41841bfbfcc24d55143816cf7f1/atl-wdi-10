# Test-Driven Development (TDD)

### Lesson Objectives

- Why TDD?
- Answer some common concerns about TDD
- Describe the Three Laws of TDD
- Describe some pitfalls to TDD
- Describe Feature tests, integration tests, and unit tests
- Describe the tooling needed

---

### Why TDD?

- One thing is always guaranteed... broken code. Reduces bugs.
- Professionalism ("Write your company a check for every bug you write.")
- Feedback
- Maintainability
- Communication / Documentation
- Fearlessness
- Regression
- Speed

`
"The jury is in. The controversy is over. The debate has ended. The conclusion is: TDD works. Sorry." - Uncle Bob
`

### Why doesn't everybody do this?

- Seems like common sense, but it's not always the norm.
- Common questions about TDD...
	- Doesn't it take longer? (How expensive are bugs?)
	- Can't I just test it later? I already have a QA team...
	- But it's _hard_!
	- When am I done testing?
		- only as many test as will give you confidence
		- don't need to test every single permutation
	- Now I have to rewrite tests all the time along with my code! That's more work!
		- What this concern actually describes are *brittle* tests. Properly written tests do not have this problem.

### The Three Laws of TDD

1. You can't write any production code until you have first written a failing unit test.
2. You can't write more of a unit test than is sufficient to fail, and not compiling is failing.
3. You can't write more production code than is sufficient to pass the currently failing unit test.

### Types of automated tests:

- Feature tests (End-to-end tests)
- Integration tests
- Unit tests

##### And others...

- Contract / Frenemy tests
- UI tests
- Controller tests

### When do I run my tests? How do I run my tests?

- As often as possible
- Whenever I commit to `master`

