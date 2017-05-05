# Mocking

### Lesson Objectives
- Describe "mocking" interactions during TDD
- Explain why mocking makes our tests more reliable
- Mock a class in Ruby
- Mock an API call through HTTParty

---

#### What is test mocking?

- Sometimes we need to create fake versions of real classes in our code to avoid **test pollution** 
- If we are running live code from another class, there is no guarantee that a failing test is because of the class we are actually testing. Our tests can lie to us.
- To prevent this from happening, we only use the live code that we care about and we stub everything else out
- Doesn't this mean we aren't testing the real code the way it will actually run? No, we are feature / integration testing everything so if it doesn't all work together, we will know later
- Unit tests work together with feature / integration tests to make sure everything is covered

### Mocking Classes

- Create a stub of the class
- add only the interface that we need to use

### Mocking API Calls

- Stub out your API client (HTTParty)
- when we call the proper method on the client (e.g. 'get'), stub out to return a response that we expect
- THIS REQUIRES US TO KNOW WHAT THE API CALL WILL LOOK LIKE - Postman


