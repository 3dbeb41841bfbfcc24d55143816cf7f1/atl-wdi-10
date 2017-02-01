# Superhero Phonebook

![image](http://68.media.tumblr.com/835ed8a1911ab3976704081e881194c4/tumblr_nzxhrcM9Yv1tlgqkgo8_250.gif)

Welcome, Agent X. We have been expecting you.

Your mission: build an app that helps us find superheroes' phone numbers. We've collected the data. You'll build the program tonight. We're counting on you.


## Setup

In `homework`, you're going to find just three files:

- `index.html`: You will be adding Angular directives and code to this file (but otherwise, don't modify the HTML).
- `js/app.js`: You will write your javascript in here. A list of superheroes is also provided for you in this file.
- `css/app.css`: styling is done, so don't modify this file.


## Directions

Your Angular app will need to display the list of superheroes in `app.js`, allow you to search that list, and color code the list by whether the superhero is Marvel, DC, or independent. You'll also want to add a button next to each superhero to display an image for the superhero.

1. Bootstrap your angular application by adding `ng-app` as `superheroApp` and add Angular to your scripts. Test your work: `{{2+2}}` in the body should render as `4`.

2. Setup a simple module and a controller `SuperheroesController` in `app.js`, and attach a controller to your view `SuperheroesController as sh` on the body. `sh` will be shorthand for superhero and this is how we will reference the controller.

3. Add the list of superheroes to the controller to `this.superheroes`. Use `ng-repeat` to render the list of superheroes on the view inside `<tbody>` so that it looks like:

  ```
  <tbody>
    <tr>
      <td>Spiderman <button>Show</button> </td>
      <td>800-WEB-CRWL</td>
      <td>Marvel</td>
    </tr>

    <tr>
      <td>The Incredible Hulk <button>Show</button> </td>
      <td>800-HLK-SMSH</td>
      <td>Marvel</td>
    </tr>

    <tr>
      <td>Wonder Woman <button>Show</button> </td>
      <td>800-GRL-WNDR</td>
      <td>DC</td>
    </tr>

    ... et cetera ...

  </tbody>
  ```

4. When you click on the `<button>Show</button>` it will show the hero image after "Picture" in the top div (with class="picture"), the hero's name, and the hero's number. You will want to use [ng-click](https://docs.angularjs.org/api/ng/directive/ngClick).

  <details><summary>..Hint</summary>

    This one is tricky.. yet simple.

    - Clicking on this button will invoke a **function** in your controller that assigns `this.hero` to be equal to the hero you just clicked on.

    - How can you pass the current hero through the click event using angular?

    - How can you show the image to the top of the page? Where does this info live? (in `this.hero`)
  </details>

5. Let's add a class so that the background for each superhero contact is blue, green, or lightblue, depending on the superhero's `group`.  Add a class to the `<tr>` and set it equal to that hero's group using Angular.

  <details><summary>..Hint</summary>

    - Note: the CSS is already done for you, but check the syntax! The `group` in our superheroes list is capitalized, and our CSS selector is lowercased. How can you lower case the class with Angular, so that the selectors match?

    ```
    <tr class="marvel"> //will turn background green
    <tr class="Marvel"> //will not do anything
    ```

    - Use a lower case filter
  </details>

6.  Use `ng-model` and `ng-filter` to add a search box to your superhero list.

### Reach Goal

 Add a small form to add superheroes to your list. [form docs](https://docs.angularjs.org/api/ng/directive/form)


## Submitting Your Work

    When you're ready to submit your work,

    1.  Add, commit, and push your code to your fork of the class repo.
    2.  File an issue on the class repo titled "Your Name -- wXXdXX".

    The issue should include:

    -   A link that points back to your fork.

    -   A 'comfort' score on how you feel about the material, from 1 (very
        uncomfortable) to 5 (very comfortable)
