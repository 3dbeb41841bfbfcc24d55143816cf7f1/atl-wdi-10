# Express Diagnostic

### Question 1: Request Response Cycle

A. Client or Browser
B. Request
C. Server
D. Response

This diagrams one basic way of how computers communicate to each other. The client sends a request for some data, and the server responds to the request.

### Question 2: What are the differences between a GET request and a POST request?

A GET request is used to retrieve information from the server from a specified resource.

a POST request is used to send data to be processed to a specified resource.

### Question 3: What does `npm init` do?

From [npm](https://docs.npmjs.com/cli/init)

>This will ask you a bunch of questions, and then write a package.json for you.

>It attempts to make reasonable guesses about what you want things to be set to, and then writes a package.json file with the options you've selected.

>If you already have a package.json file, it'll read that first, and default to the options in there.

You can easily create a package.json file without this, with `touch package.json`.

### Question 4: What does CRUD stand for?

create   -- POST
read     -- GET
update   -- PUT
delete   -- DELETE

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?

This was a tricky question because both POST and PUT are used to create. However, we will be using POST to create new/non-existing data.  

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="PUT" action="myScript.js">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```

It would tell the browser where to send the form-data when
the form is submitted, in this case it would send the form-data to `myScript.js`.

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to `/homepage`

```
app.post("/menus", function(req, res){
  res.redirect("/homepage");
});
```

### Question 8: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}

So just like we've been using `res.send()`, `res.render()`, you can also send JSON data with `res.json()`.

```
app.get("/products", function(req, res){
  res.json({error: "Bad Request"})
});
```

### Question 9: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  //hmm...
}
```

We could save those values into variables:
```
var id = req.params.id;
var songId = req.params.song_id;
```

### Question 10: What is MVC? How have we been using it so far?

![image](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/200px-MVC-Process.svg.png)

The model is any of the logic or the database or any of the data itself. For now, without a database, we have been manipulating plain javascript objects, stored locally in our app.

The view is simply how you display the data out. With Handlebars, we have been able to display data on the page.

The controller handles all the traffic coming in (and out). We have been using controllers to handle HTTP requests and manages, and sends back data through a response.
