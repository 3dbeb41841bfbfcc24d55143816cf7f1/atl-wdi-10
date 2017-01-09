# Asynchronous Code with Callbacks and Promises

## Non-Blocking Code in JavaScript

  Pop quiz! In the code below, which word will get printed first?

  ```js
  console.log('Red');
  console.log('Blue')
  ```

  What about now? Try it out for yourself and see what happens.

  ```js
  setTimeout(function(){ console.log('Red'); }, 0);
  console.log('Blue');
  ```

  JavaScript code is _non-blocking_ -- this means that each line of code begins
  to execute as soon as it possibly can, _including before previous lines of
  code have finished executing.

  > "Isn't that really confusing? How could anyone write code when they can't be
  > sure about the order in which their lines will run?"

  Well, most of the time, each line of code executes so quickly that it isn't
  noticeable. But when you want to do things that are slow/take a long time,
  this behavior becomes very important.

  In the context of web applications, it's especially important to think about
  JavaScript's non-blocking behavior when your JS code is interfacing with
  another system or service, since there's no telling how long such a service
  might take to do its job. The most common examples of this are:

  -   Waiting on **DOM events** (driven by user interaction).

  -   Waiting for a **response to an HTTP request**.

  -   Waiting for a **database** to retrieve/modify a piece of data.

  -   Waiting for a **timer** to run out.

  -   Waiting for the **filesystem** to read from, or to write to, a file.

  In all of these examples, your JavaScript code is
  _waiting for something to happen_, and there's no telling how long that
  'something' will take.

  So how can we tell our code to wait for something to finish?
  Node actually uses the same approach that the browser does -- callbacks.
  By setting a callback as an event handler, we can defer its execution until
  the event it's listening for occurs. Future steps can then be triggered
  by more callbacks.

  ```js
  var stepTwo = function(num){
    // ... Do Something ... ///
  };

  var eventHandler = function(){
    // ... Do Something ... ///
    result = 42;
    stepTwo(42)
  }
  ```

### "Callback Hell" : Drawbacks to Callbacks

  OK, that's fine for doing things that involve one 'slow' step. But what if
  there's _more than one_ 'slow' thing we have to deal with?

  ![Stamp](https://media2.giphy.com/media/1xkMJIvxeKiDS/200w.gif)

  ![Staple](https://media3.giphy.com/media/l2JI9JdUDjxVbd20g/200w.gif)

  For instance, let's say we need to do all of the following:

  1. Read in data from a file
  2. Parse the data as CSV content
  3. Use the content to make an HTTP request.
  4. Take the response and store data into a database.
  5. Send a response back to the user.

  Phew. How might that look if we try to use callbacks to handle that whole
  process?

  Maybe something like this?

  ```js
  fs.readFile('./data-csv', function(err, data){  // read a file
    if(err) throw err;

    csv.parse(data, function(err, csvData){       // parse the data as CSV
      if(err) throw err;

      var url = csvData[0].url;
      var req = http.request({host: url}, function(res){ // make an HTTP request
        var responseData = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          responseData += chunk;
        });
        res.on('end', () => {                            // collect the response
          ResponseMessages.create({body: responseData},  // add record to a DB
            function(err, messageRecord){
            if (err) throw err;

            res.render('response', responseData);
          })
        });
      });
      req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
      });

    })

  });
  ```

  ![Head Bang](https://media4.giphy.com/media/OT69wDOihxqEw/200w.gif)

  Wow, that's some deep nesting. This code looks really complicated and messy.
  It's not easy to follow. And on top of all that, it's duplicative -- do you
  really need a separate system for handling errors at every stage in the
  process?

### Promises

  Fortunately, there's another way. Promises are an easy way of setting up
  processes involving any number of 'slow' steps. The core idea is a
  'Promise Object', a type of object that represents the result of an
  as-yet-uncompleted process. What makes a Promise object special is that we
  can define 'handler' functions on it which will fire as soon as the Promise
  reaches a result.

  Suppose that `p` is such an object. We'd like to operate on the result of `p`,
  but that result doesn't exist yet. We can call a method on `p` called `.then`,
  and pass it a callback, like so:

  ```js
  p.then(function(result){
    // do something with
    return someFunction(result)
  });
  ```

  When the process that `p` is the result of completes, this callback will fire,
  and the result that `p` stands for will be passed into that callback as its
  argument.

  OK, that's neat, but not earthshattering. However, there is something else
  interesting that happens -- `.then` returns _another promise object_ (let's
  call it `q`). `q` represents the result of running `p`'s process, and _then_
  passing the result through the given callback function.

  ```js
  var q = p.then(function(result){
    // ...
    return something;
  });
  ```

  However, since `q` is also a Promise object, we can also call `.then` on `q`!

  ```js
  var q = p.then(function(result){
    // ...
    return something;
  });
  q.then(function(nextResult){
    // ...
    return somethingElse;
  })
  ```

  Hold on... something interesting is happening.

  ```js
  p.then(function(result){
    // ...
    return something;
  })
  .then(function(nextResult){
    // ...
    return somethingElse;
  });
  ```

  Could we make the chain longer?

  ```js
  p.then(function(result){
    // ...
    return something;
  })
  .then(function(nextResult){
    // ...
    return somethingElse;
  })
  .then(function(anotherResult){
    // ...
    return stillSomethingElse;
  })
  //...
  ```

  This is the magic of Promises. Rather than having deeply nested callbacks
  within callbacks within callbacks, Promises allow us to list out the steps
  linearly -- the end result reads like a recipe.

  OK, but what about when there are multiple 'slow' steps? Just putting them
  in a callback won't work -- the callback would finish executing (and move on
  to the next step) before the slo process finished.

  Well, Promises have one last trick up their sleeves. If one of those `then`
  callbacks returns a Promise object rather than just a normal value, it
  'inserts' that Promise object into the chain, before the next `then` callback.

  In other words, this:

  ```js
  p.then(function(resultA){
    // ...
    return something;
  })
  .then(function(resultB){
    // ...
    return promiseObject
  })
  .then(function(resultC){
    // ...
    return somethingElse;
  })
  ```

  works just the same as this:

  ```js
  p.then(function(resultA){
    // ...
    return something;
  })
  .then(function(resultB){
    // ...
    return promiseObject.then(function(resultC){
      // ...
      return somethingElse;
    })
  })
  ```

  In practical terms, this means that if one of the steps in your process is
  slow, just return a new Promise object representing the result of that step!

#### Making That First Promise

  OK, you caught us. We've talked about how you take a single Promise object
  and turn it into a chain pro Promises. But where does that first Promise come
  from?

  A new Promise object can be created using the `Promise` constructor, just like
  any other kind of object. However, rather than data, what a new Promise object
  needs when it's instantiated is a function to guide its behavior, called an
  _executor function_.

  ```js
  var p = new Promise(function(resolve, reject){
    // `resolve` and `reject` are callbacks.
    // `resolve` is invoked if this first step is successful.
    // `reject` is invoked if it fails.
  });
  p.then(/* ... */)
  .then(/* ... */)
  .then(/* ... */)
  ```

  This is a bit tedious sometimes, though, so another way you can do it is
  by calling `Promise.resolve(someValue)`; this will return a new Promise object
  (that you can then call `.then` on) resolving to `someValue`.

#### Handling Errors

  Another thing we haven't mentioned is error handling. What if something goes
  wrong? What happens when we call `reject` on that first promise?

  The answer is that `.then` can actually take two callback arguments, not just
  one; the first callback is called if the promise resolved successfully, while
  the second one is called if it did _not_ resolve successfully.

  ```js
  p.then(function(result){
    return something;
  }, function(error){
    console.error(error);
  })
  ```

  If an error crops up and no failure-case handler function has been defined,
  the `.then` function returns a Promise whose state is 'failed' and which will
  attempt to call _its own_ failure-case handler immediately. This process
  continues until one promise in the chain has a callback function for handling
  an error; at that point, the callback function handles the error, and the next
  promise in the chain resolves successfully.

  It's also possible to define a promise with no success handler, only a failure
  handler -- such a Promise would exist only to catch errors.

  ```js
  p.then(null, function(err){ /* ... */ });
  ```

  This is a common need, so there's a shorthand.

  ```js
  p.catch(function(err){ /* ... */});
  ```

### Further Reading

-  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
-  [Spring.io : Understanding JavaScript Promises](https://spring.io/understanding/javascript-promises)
