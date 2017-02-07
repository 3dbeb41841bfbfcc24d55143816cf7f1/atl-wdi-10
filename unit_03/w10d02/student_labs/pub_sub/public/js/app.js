angular.module('pubSubApp', [])
  .controller('ControllerOne', ControllerOne)
  .controller('ControllerTwo', ControllerTwo)
  .controller('ControllerThree', ControllerThree)

function ControllerOne($scope) {
  var self = this;

  // Send event to all child controllers
  self.broadcastEvent = function(){
    console.log('BROADCASTING from ctrl1')
    $scope.$broadcast('myEvent', {message: 'Hello from Ctrl 1'});
  }

  $scope.$on('childEvent', function(event, data){
    console.log('RECIEVING in ctrl1')
    self.message1 = data.message;
  })
}

function ControllerTwo($scope) {
  var self = this;

  $scope.$on('myEvent', function(event, data){
    console.log('RECIEVING in ctrl2')
    self.message2 = data.message;
  });

  $scope.$on('childEvent', function(event, data){
    console.log('RECIEVING in ctrl2')
    self.message2 = data.message;
  })
}

function ControllerThree($scope) {
  var self = this;

  $scope.$on('myEvent', function(event, data){
    console.log('RECIEVING in ctrl3')
    self.message3 = data.message;
  });

  self.emitEvent = function() {
    console.log('BROADCASTING from ctrl3')

    $scope.$emit('childEvent', {message: 'Hello from Ctrl 3'});
  }

}
