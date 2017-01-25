---
title: Binding Controller and View with Hardcoded Data
type: Lab
duration: "1:25"
creator:
    name: Matt Huntington
    city: WDIR
competencies: Front-end frameworks
---

#Lab - Scope

There were 5 Marx brothers!  Chico, Harpo, Groucho, Gummo, and Zeppo.

Given the following HTML

```html
<!DOCTYPE html>
<html ng-app="MarxBrotherApp">
  <head></head>
  <body>
    <main ng-controller="FamilyController as family">
      <h1>The {{family.name}} brothers</h1>
      <div ng-controller="ChicoController as chico">
        <button ng-click="chico.listSiblings()">List siblings</button>
      </div>
      <div ng-controller="HarpoController as harpo">
        <button ng-click="harpo.listSiblings()">List siblings</button>
      </div>
      <div ng-controller="GrouchoController as groucho">
        <button ng-click="groucho.listSiblings()">List siblings</button>
      </div>
      <div ng-controller="GummoController as gummo">
        <button ng-click="gummo.listSiblings()">List siblings</button>
      </div>
      <div ng-controller="ZeppoController as zeppo">
        <button ng-click="zeppo.listSiblings()">List siblings</button>
      </div>
    </main>
  </body>
</html>
```

Make each controller have a firstname property like this:

```javascript
app.controller('ChicoController', ['$scope', function($scope){
  this.name = 'Chico'
}]);
```

Set a name property for FamilyController.

Create a listSiblings function that, using $scope, will console log something like:

"Hello, my name is Chico Marx.  My brothers are Harpo, Groucho, Gummo, and Zeppo"
  - Marx should be retrieved from FamilyController
  - The brothers' names should appear in the order in which they appear in the HTML
