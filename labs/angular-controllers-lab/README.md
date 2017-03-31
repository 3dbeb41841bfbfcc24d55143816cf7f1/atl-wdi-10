# Angular Controllers Lab

## Let's build an online store app!

--- 

### Setup:
1. Run `npm install`
2. In the starter code, you should see a pre-made `app.js` file with a module named `storeApp` already created.
3. Run `npm run start-dev`
4. Now open `localhost:4000` in your browser. You should see the message `"I am a working Angular.js app!"` displayed.

### Display our products:

1. Now that you have a running app, we'll want to add some more useful functionality. Create a new controller in  named `ProductsController` and add it to the 'storeApp` module. Make sure to require this new 

2. We'll want to display all of our products on the page when our application loads. Inside of the `ProductsController`, let's create a new variable `this.products` and set it equal to the an array of products:

```javascript

this.products = [
{ name: 'Surface Book', price: '1500.43', dateAdded: '1490929458881'},
{ name: 'MacBook Pro 15"', price: '1800.34', dateAdded: '1490929458881'},
{ name: 'Macbook Pro 13"', price: '1600.28', dateAdded: '1490929458881'},
{ name: 'TI-86', price: '100.43', dateAdded: '1490929458881'},
{name: 'UE Roll Speaker', price: '90.78', dateAdded: '1490929458881'}
]
```

3. Now we'll want to display each one of these products on the page when it is displayed! We'll want to create a new `<div>` tag for each one of these products and then display each piece of information like this: 

`>>> Product Name: Surface Book | Price: 1500.43 | Date Added: 1490929458881`
We'll have to use the built-in Angular directive `ngRepeat` to accomplish this.

4. When we refresh the page, we should now see each of our products displayed!

5. Now that we have all of the data on the page, we might notice that it doesn't look as readable as we might want it to! Let's use some Angular `filters` to clean up the data and make it look nice for our users.

6. First, let's use the `currency` filter to display our `price` in a nicer format that looks like this: `$1500.43`

7. Next, let's use the `date` filter to display the `dateAdded` attribute in a readable format, such as `MM/dd/yyyy`

#### > Things should be looking a lot better now!

---

### Adding a new product:

1. Now that we are displaying our products, let's allow our selves to dynamically add new products!

2. Create a `form` element that adds a new `product` to our `products` array.

3. When we click the `Submit` button, we should automatically see our new `product` added to the products on the page!

--- 

### Add Product Categories:

1. Let's create a new controller called `ReviewsController`.

2. This controller should display on the page, _nested inside_ of `ProductsController`

3. Let's create a new set of Product Categories inside this new controller that looks like this: 

```javascript
this.productCategories = [
	'Smartphones',
	'Bluetooth Speakers',
	'Video Games'
]
```

4. Let's display these product categories as an `unordered list (<ul>)`, with a message above that reads: `Displaying X products across Y categories.` `X` should be the current number of products, and `Y` should be the current number of categories.

	- When we add a new product, the number of products should increase by 1.

--- 

### BONUS: 

1. Sort the `products` by `price` when the page loads, regardless of how they are organized in our array. When we add a new product, it should automatically show up, sorted by price with all of the previously existing products.

2. Add a button that will show or hide the `Product Categories` when you click it. 


