# Angular Forms and Form Validation

## Objectives
After this lesson, students will be able to:

* Explain the difference between server-side and client-side form validation
* Explain how Angular's `ngMessages` library provides support for _declarative_ form validation.
* Create an HTML Form that uses Angular's `ngMessages` for client-side form validation.

## Introduction

This lesson covers how to do forms and form validation in _AngularJS_. When we did _server-side_ rendering, we had to validate the user input on the server side and return an error message when the user made a mistake.

Now that we have _client-side_ rendering and a full-featured client-side JavaScript framework in _AngularJS_, we can do a large portion of the form validation in the client code running in the browser before we even send anything to the server. If the form is in an _invalid_ state, we may even disable the submit button until the error is corrected by the user.

Note that we cannot do _all_ of the form validation in the client code. Validating that an email address is not already taken or that a duplicate item does not already exist are errors that usually need to be detected server-side. But _many_ user errors can be checked and caught in the client-side JavaScript code, saving a trip to the server and making the UI experience much snappier.

## Error Reporting

There are many ways to _report_ a form input error to the user. Most common is putting an error message directly above, below, or beside the form input control containing the erroneous user input. _AngularJS_ provides a means to easily define the error messages that may be displayed for various kinds of errors (such as input being too short, too long, or not matching a specified pattern). In addition, these error messages can be styled using CSS or a CSS library such as _Twitter Bootstrap_ which has lots of support for styling forms.

Note that _AngularJS_ provides support for conditionally showing or hiding error messages in the [ngMessages](_https://docs.angularjs.org/api/ngMessages/directive/ngMessages) module. This module must be included in your project and loaded by your application's module configuration:


## Angular Form Validation

Let's start with a simple HTML Form - see [AngularJS Form Validation - Starter Codepen](http://codepen.io/drmikeh/pen/mVaade?editors=1110)

### Observations:
* We have a simple HTML page with a Form containing input fields for a userID, an email, and a zip code.
* The Form has an `novalidate` attribute indicating that we do *not* want the default browser form validation as we will be handling form validation ourselves.
* We have some simple data bindings between our HTML code and our AngularJS controller.
* We have a method called `submitForm` to handle when the form is submitted. For now we just popup an `alert` box containing the data we want to submit to the server.

## Steps to Adding Angular Form Validation

### Step 1 - Add the `ng-messages` and the `ng-animate` libraries:

Angular's `ngMessages` library is a separate module from the core AngularJS library. You can install it manually into your project or use a tool like _Bower_ to install it. For now we will use a CDN to load it.

We will also be using the `ngAnimate` library to assist in making our form error messages animate when they appear and disappear (nice!).

Add the following to the `head` section of the `html` page:

```html
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-animate.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-messages.min.js"></script>
```

We also need to add these modules as dependencies when we load our AngularJS app. Add the `ngMessages` and the `ngAnimate` dependencies to the `myApp` declaration:

```javascript
angular.module('myApp', ['ngMessages', 'ngAnimate'])
```

> Note: this is the only JavaScript change will we need to make in this lesson. Our specific form validation rules will all be defined declaratively in the `html` code.

### Step 2 - Add the Form Validation Rules and the Form Validation Error Messages

We need to add the specific form validation rules to each of our form's input controls and also add the error messages we want displayed when a form input is not valid.

For the `Username` input we want to enforce a minimum length of 3 characters, a maximum length of 10 characters, and make the input `required` (the user must enter something). We can use `ng-minlength` and `ng-maxlength` for the length requirements and the vanilla HTML `required` (which AngularJS recognizes).

We can also add error messages that are conditionally displayed depending on which validation is failing (if any).

Here is how the `Username` input control looks after adding the validations and messages:

```html
  <input type="text"
         class="form-control"
         name="user"
         ng-model="ctrl.formData.userName"
         ng-minlength="3"
         ng-maxlength="10"
         required />
  <div class="error-messages" ng-messages="myForm.user.$error">
    <div ng-message="required">Username is required</div>
    <div ng-message="minlength">Username is too short</div>
    <div ng-message="maxlength">Username is too long</div>
  </div>
```

Here we have added a `div` under our input control to conditionally display a form validation error message.

Notice that AngularJS connects the correct error message with the validation check that is failing.

For the `email` validation, AngularJS uses the `type="email"` to validate that the input follows the pattern of an email address. We just need to add the `required` attribute and the error messages.

```html
  <input type="email"
         class="form-control"
         name="email"
         ng-model="ctrl.formData.email"
         required />
  <div class="error-messages" ng-messages="myForm.email.$error">
    <div ng-message="required">Email is required</div>
    <div ng-message="email">Invalid email address.</div>
  </div>
```

Finally for the `zipcode` input we will use a `ng-pattern` to specify a _regex_ to ensure that the input matches the pattern for U.S. or Canadian zip codes.

```html
  <input type="text"
         class="form-control"
         name="zipcode"
         ng-model="ctrl.formData.zipcode"
         required
         ng-pattern="/^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$/" />
  <div class="error-messages" ng-messages="myForm.zipcode.$error">
    <div ng-message="required">Zip Code is required</div>
    <div ng-message="pattern">Please type a valid U.S. or Canadian zip code.</div>
  </div>
```

The last change we want to make is to disable the `submit` button when the form is in an _invalid_ state. To do this, we simply use Angular's `ng-disabled` attribute:

```html
  <button type="submit"
          class="btn btn-primary"
          ng-disabled="myForm.$invalid">Submit</button>
```

If you want to debug things or just learn more about what is going on, you can add the following `html` to the form under the `submit` button:

```html
  <hr/>
  <hh>Some debugging output:</h4>
  <pre>myForm.$valid         = {{ myForm.$valid         | json }}</pre>
  <pre>myForm.user.$error    = {{ myForm.user.$error    | json }}</pre>
  <pre>myForm.email.$error   = {{ myForm.email.$error   | json }}</pre>
  <pre>myForm.zipcode.$error = {{ myForm.zipcode.$error | json }}</pre>
```

This code will display the details about why the form is in an invalid state.

### Step 3 - Add CSS for Error Message Styling and Animation Effects

Below is some Sassy CSS (SCSS) that will style the form validation error messages including adding some nice animation to the error messages.

```css
.error-messages {
  color: maroon;
  position: relative;
  div {
    position: absolute;
    opacity: 1;
    transition: 0.3s linear all;
    font-size: 0.8em;
    &.ng-enter {
      &.ng-enter-active {
        opacity: 1;
        top: 0;
      }
      opacity: 0;
      top: -20px;
    }
    &.ng-leave {
      opacity: 1;
      top: 0;
    }
    &.ng-leave-active {
      opacity: 0;
      top: 20px;
    }
  }
}
```

## Conclusion
* Adding client-side form validation is easy with AngularJS and ngMessages.
* Client-side form validation provides immediate feedback to the user when they have entered some bad input
* Not all errors can be detected client-side, but many common user errors can be detected and reported in the client before wasting a trip to the server.

## Links

* [AngularJS Form Validation - Solution Codepen](http://codepen.io/drmikeh/pen/OVxyBw?editors=1110)
* [Angular ngMessages](https://docs.angularjs.org/api/ngMessages)
* [Angular ngAnimate](https://docs.angularjs.org/api/ngAnimate)
* [Twitter Bootstrap Forms](http://getbootstrap.com/css/#forms)
