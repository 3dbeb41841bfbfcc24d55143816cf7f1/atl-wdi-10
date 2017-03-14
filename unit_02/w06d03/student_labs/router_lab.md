# LAB

### Pick the driver and navigator

We will switch every 30 minutes

You will create a new router for each route defined in _Step 2_

#### Step 1

1. Initialize a new Node app

2. Touch server.js

3. Create a views directory

4. Add Express
	- npm install <module> --save

5. Add the app.listen function to your server.js

6. Add express to server.js

7. Add handlebars to server.js


#### Step 2

*A math router*
8. A route `/math/:operator` that expects `num1` and `num2` as query parameters. The
route will add, subtract, multiply or divide the two numbers. The result is rendered
to `math.hbs` (you've done this already!)

*A greeting router*
9. A route `/greeting/:name` that expects `greeting` as a query parameter. The
route will construct a custom greeting based on the parameters and render the
resulting string to `greeting.hbs`

*A reverse router*
10. A route `/reverse` that expects `word` as a query parameter. The route will
reverse the worse and render the resulting string to `reversed.hbs`

*This route will go in the math router made in #6*
11. A route that shows all the numbers in a given range

*10 and 11 will be in the same router, you can use whatever naming convention
you think makes sense.*

12. A route that renders todays date (not hardcoded)

13. A route that renders the date a specific number of days before or after
todays date. (What's the date 5 days from now, 4 days ago)
*hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date*
