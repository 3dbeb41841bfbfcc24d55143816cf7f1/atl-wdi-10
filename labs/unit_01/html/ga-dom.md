# GA DOM MOD!

Let's get down and dirty with the DOM on a familiar yet unfamiliar website. www.google.com.

Such a seemingly simple page:

![](https://i.imgur.com/Z0Ob5bl.png)

But open up the Chrome Developer tools and you will discover a swamp of esoteric id's and classes, hidden input fields, and divs within divs within divs.

So, what is your task? Utilizing your newfound knowledge of the DOM and Vanilla Javascript you are going to write a script to turn the Google homepage into a GA modded search page.

Use this image: ![](https://i.imgur.com/Qg26PYt.png)
- change the height to 95, and the width to 320.  

So that your GA search looks like this:

![](https://i.imgur.com/o7lm7vq.png)

You can't just dive into this task without a plan. You will want spend a couple of minutes just exploring the DOM and trying to isolate what areas need to be deleted and what areas need to be changed or updated.

Programming is about planning, it's not the wild west! Once you have spent some time familiarizing and tinkering (5-10min) You will want to get started.

I will start you off to give you an idea of your process! Comparing the two images we can see that the ga mod doesn't have the header nav bar or footer. So let's first get rid of those.

Header first. This is a three step job. First go into the DOM and find the div that contains the top nav bar, remember to use all your tools, the element selector is your friend.

After some searching you will find that the header lives in a div with an id of `#gb` and a class of `.gb_T`. Before going forward with our script we should verify that deleting this div does what we think it's going to do. Highlight that div in the dom and delete it!

Is it gone? ... Nice work. Okay, so we know for sure that that's the div we want gone. So let's figure out how to do what we just did manually but in Javascript. Refresh the page and use one of the query selector functions to pull the div out of the tree and then delete it.

<!-- ![](https://i.imgur.com/hYwtexr.png) -->

Nice job. Now we need to build a function to start documenting each of these scripts so we can ultimately write one complete function that will mod our google homepage in one go! We're gonna do this using a snippet. Here is the documentation: https://developers.google.com/web/tools/chrome-devtools/javascript/snippets

1. Open your dev tools. Select the Sources tab, then select the Snippets tab.

![](https://i.imgur.com/p0FTfZS.png)

1. Right click (control + click) inside the snippets window on the left and create a new snippet.
2. write a function called ga_mod()

```javascript
var ga_mod = function() {

}
```
3. write the code you wrote your wrote to delete the header into this function!

```javascript
var ga_mod = function() {
  var header = document.querySelector('#gb');

  header.remove();
}
```

4. Right click (control + click) and select "run" to run the code.

Nice now move on to the footer. The rest of this job is up to you! Good luck.

<!-- Images:
- [gear](https://dl.dropboxusercontent.com/s/whkficbkox6t66a/Screen%20Shot%202016-01-24%20at%205.43.31%20PM.png)
- [logo](https://dl.dropboxusercontent.com/s/e2iqc2r53r6omzn/General_Assembly_logo.png) -->
