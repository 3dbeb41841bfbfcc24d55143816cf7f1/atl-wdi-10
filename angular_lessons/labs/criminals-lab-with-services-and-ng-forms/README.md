# Criminals Lab w/ Services and Angular Forms

## In the starter code, you will find a completed lab from yesterday's Criminals Lab

### Using services to make API calls:

- First, let's refactor the `$http` calls in our `criminalsController.js` into a `CriminalsService`
- This `CriminalsService` should have three methods, `getCriminals, addCriminal, and deleteCriminal`
- Be sure to `$inject` your new service into the `CriminalsController`!

### Using Angular for form validation

- Now, let's use Angular to validate our form input.
- When we try to submit without entering a name, we should receive the message 
**"Must enter a name before proceeding"**
- When we try to submit without entering a location, we should receive the message 
**"Must enter a location before proceeding"**
- When we try to submit without entering a status, we should receive the message 
**"Must choose a status before proceeding"**
- We should not be able to **Submit** before all of these validation checks are met


### BONUS:

- Validate that the `location` field in the form has been entered in the proper 
format (City Name, followed by two-character State / Province)
- Add some CSS animation to the validation messages as they appear on the form
