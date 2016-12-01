# Lab

At this point you should have an Express app with a full auth flow.

Many of the concepts about file/folder structure, exporting modules, connecting to the database, creating schemas, and using promises and mongoose are _exactly the same_ as what we've learned over the course of the week. And certainly the work we've done this week regarding views and routing are the same as the week before. The one difference that the data comes from Mongo instead of an array of objects in an exported JS file.

With that in mind, your lab is to continue building on our auth_app.

You've done *Users* and *Items* and *authors* and *reminders* so far with Marc.

We've built the user portion, now it's time for you to construct a resource that users have.

In order to not worry as much about naming, you can choose to add items, reminders, or todos to the User resource.

1. Create a router file in the controllers directory for the resource you chose (items, reminders, or todos)
2. The routes are going to follow this format:
  ```                  
  get, index, /users/:id/(items/reminders/todos)
  get, show, /users/:id/(items/reminders/todos)/:id

  get, new, /users/:id/(items/reminders/todos)/new
  post, create, /users/:id/(items/reminders/todos)

  get, edit, /users/:id/(items/reminders/todos)/:id/edit
  put, put(post w/ method override), /users/:id/(items/reminders/todos)/:id

  delete, delete(post w/ method override), /users/:id/(items/reminders/todos)/:id
  ```

3. Create the views necessary for the get requests

# Tips

1. Don't move on to the next piece until you've proven it works, either using console.logs or postman
2. Use your notes don't feel like you have to guess at what comes next
3. User our lesson plan notes from throughout the week as a guide.
4. You can use the lesson we did today to build users as your guide for every other resource, just don't forget about embedding
5. As you're building, and as you solve thing, don't just move forward without thought. Take a minute to think about what you did and why. Start considering building your own guide for how to construct the different features. We're going to give you many reps on this between now and Monday, but reps are only useful _if_ you take the time to think critically about what you're doing.
