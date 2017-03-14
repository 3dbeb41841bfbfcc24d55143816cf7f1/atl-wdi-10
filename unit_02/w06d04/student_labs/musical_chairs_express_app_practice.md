## LABTIME - Create an Express Recipes App

For labtime you're gonna pair up and create a new Express app using `recipes` as a resource. 

Each student will create an app. To start, Student 1 will "drive" (i.e.- create the app locally) while Student 2 offers guidance. After 30 minutes, I'll ping everyone to swap roles. So Student 2 will "drive" and create an app while Student 1 offers guidance.

Remember... I'm here! Send me a Slack if anything is unclear or if you get in a jam.

Your recipes will have `title`, `veggie` and `imageUrl` fields so that you can add an image. (NOTE - `imageUrl` is _optional_ if you don't want to deal with images in your view) 

Here's a deployed version of the app for reference: https://recipe-practice-app.herokuapp.com/recipes

Here is solution code from today's Todo app: https://github.com/ga-students/wdi-remote-r2d2/tree/master/unit_02/w05d04/instructor_examples

<br />

## Objectives

Use the lessons and examples from this week for guidance. Here are some suggested steps:

1. Create a new Express App
    
    ```bash
$ mkdir recipes_app
$ cd recipes_app
$ npm init
$ npm install --save express
$ npm install --save hbs
$ touch server.js
```

1. Create the necessary variables and require the appropriate modules in `server.js`

2. Remember to `app.set()` your view engine to `hbs`

1. Set up your server and port using `app.listen()`

1. In `server.js`, create an `app.get()` route for `/recipes`.  

1. Create a `recipes.js` file in your root directory for some seed data. Add `module.exports` and hard code a few recipes. Here are some seeded recipes to get you started.

 ```js
    module.exports = {
     seededRecipes: [
        {
          title: "Seafood Gumbo",
          veggie: false,
          imageUrl: "http://17374-presscdn-0-15.pagely.netdna-cdn.com/wp-content/uploads/2012/01/seafood-gumbo-960x652.jpg"
        }, {
          title: "Chicken Parm",
          veggie: false,
         imageUrl: "http://consumerrecipe.conagrafoods.com/uploadedImages/img_4740_1599.jpg"
        }
      ]
    };    
    ```
1. Add the appropriate code in the `server.js` to `require()` the `module.exports` from the `recipes.js` file.

2. Test out your route using `res.send()` before dealing with views.

3. Create a `views` folder in the parent directory.

4. Create a `layout.hbs` for your app and scaffold it out with HTML

5. Remember to add the appropriate handlebars `{{{body}}}` syntax.

1. Update your route to render a view for `views/recipes/index.hbs`. (Remember to create a `views/recipes/` folder.)

1. Add `{{}}` to your `index.hbs` file that will render the recipes inside an `<ol></ol>` using `<li></li>` tags.

2. Create a `new` route using an `app.get()` request. 

3. Create a form in the `views/recipes/new.hbs` file.

4. Remember to `npm install --save body-parser` and add the correct `app.use()` code in the `server.js`.

4. Create a `.post` route for a `recipe` (make sure to redirect).

5. Create a SHOW route in the `server.js` using `recipes/:id`.

6. Important!! make sure that your SHOW route is below your NEW route in `server.js`

6. Create a SHOW view like this: `touch views/recipes/show.hbs`.

1. Add the code to `app.use()` static assets in your app.

2. Add a css file to your app for styling.

<br />

**Stretches:** 

- Add a javascript file to your app
- Add a nav bar to your `layout.hbs`
- On your INDEX page, make each recipe a clickable link using `<a href=""></a>`. So, when you click on a recipe it should take you to it's individual SHOW page

<br />

If you finish, walk back through the appropriate steps above and add another resource to your app (e.g.- movies, songs, artists, comics).
    
<br />
