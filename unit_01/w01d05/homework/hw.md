[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive-remote)

# Intro to App Building

## Instructions

Your first week is done -- now it's time to start pulling it all together!

In this homework, you're not going to be writing an entire program. Instead, you
will be building out a small part of a larger application, just like you might
in the real world. Most larger applications are broken out into many smaller
parts; this makes it easier to build, maintain, upgrade, and debug projects
that might otherwise become much too complex to handle. This idea, of building
an app out of lots of stand-alone pieces, is called _modularity_, and is a mark
of good software design. Additionally, the piece of the application that you
will be building will have one dedicated job, and it will work in conjunction
with other similarly-dedicated parts. Dividing responsibilities this way is
called _separation of concerns_, and is another mark of good design.

The app in question is a "to-do list" app, to be controlled through some sort of
user interface (as yet undesigned). The piece that you will be building is
called a _router_ -- a router's job is to take input and to direct (or 'route')
that input data to another part of the program, usually by invoking some other
component's methods.

Because we don't know what this UI will be like, we want our router to have a
well-defined interface (or _API_) so that the UI can plug into it easily.
Specifically, our router will have one method, called `route`. That method
will expect an array of input data from the user, and it will behave in the
following way:

```js
var r = require('./router');
// This is how you can access the router from the Node REPL
// Make sure your path is correct.

// Create a new task //
// Args after 'new' are name, due date, and priority level of task. Order matters.
r.route(['new','walk the dog','2016-12-09',2])
// Output should be
// [ { name: 'walk the dog',
//     dueDate: '2016-12-10',
//     priority: 1,
//     taskId: 1 } ]

// Show all tasks //
r.route(['show', 'all']);
// Output should be:
// [ { name: 'walk the dog',
//     dueDate: '2016-12-10',
//     priority: 1,
//     taskId: 1 },
//   { name: 'walk the fish',
//     dueDate: '2016-12-10',
//     priority: 4,
//     taskId: 2 } ]

// Show one task //
r.route(['show', 2]); // taskId
// Output should be:
// { name: 'walk the fish',
//   dueDate: '2016-12-10',
//   priority: 4,
//   taskId: 2 }

// Destroy one task //
r.route(['delete', 1]);
// Output should be null, but the task should be deleted.

// Update one task //
r.route(['edit', 2, 'name', 'walk the fish (in its bowl)']);
//           Property name, property value
// Output should be:
// { name: 'walk the fish (in its bowl)',
//   dueDate: '2016-12-10',
//   priority: 4,
//   taskId: 2 }
```

> In the case where you might try show, update, or destroy a task that doesn't
> exist (i.e. no task can be found with that taskId), it should return `null`.

Each of these options is referred to as a _route_ -- a way of handling some
specific category of inputs.

In the finished application, your router will use a data managing component
called a _data store_ to interact with the underlying data. However, that
component has not been built yet, so you will instead be interacting with a
_stub_ -- a stand-in component that acts in the exact same way, but doesn't
actually do any work under the hood. Stubs, and their cousins, _mocks_ (same
methods as what they're replacing, but **nothing** under the hood) are a
critical part of building applications with lots of moving parts.

The code for the dummy data store can be found in `data-store-stub.js`; feel
free to take a look through it, but please DO NOT change anything in that file.
The stub has already been loaded into the `router.js` file as an object called
`dataStore`, so all you need to do is call methods on that object.

One thing to note is that the data store (stub or no) will assign each task it
creates a special unique id property called a `taskId`. The store ensures that
every value is unique by incrementing the value each time a new task is added --
that way, you never get two tasks with the same `taskId`.

## Reach

If you finish before the deadline, try adding some custom routes that do things
that aren't listed here!
