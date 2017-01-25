(function(){
  angular.module('CardsAgainstAssembly')
    .directive('scores', scoresView);


  function scoresView(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl:  "_scoresView.html"
    }
  }
})()
