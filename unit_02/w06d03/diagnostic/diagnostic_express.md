# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?

### Question 2: What are the differences between a GET request and a POST request?

### Question 3: What does `npm init` do?

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?  

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  //hmm...
}
```

### Question 9: What is MVC? How have we been using it so far?

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}

