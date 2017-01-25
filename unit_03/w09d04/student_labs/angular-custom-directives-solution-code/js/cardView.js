(function(){
  angular.module('CardsAgainstAssembly')
    .directive('card', cardView);


  function cardView(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl:  "_cardView.html",
      scope: {
        question: '@'
      }
    }
  }
})()
