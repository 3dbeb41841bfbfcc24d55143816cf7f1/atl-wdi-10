window.onload = function() {
  var stopButton = document.querySelector('#stopButton');
  var slowButton = document.querySelector('#slowButton');

  var stopLight = document.querySelector('#stopLight');
  var slowLight = document.querySelector('#slowLight');

  stopButton.addEventListener('click', trafficLight.illuminateRed);
  slowButton.addEventListener('click', trafficLight.illuminateYellow);
}


var trafficLight = {
  illuminateRed: function(event) {
    trafficLight.clearLights();

    stopLight.style.background = 'red';
  },

  illuminateYellow: function(event) {
    trafficLight.clearLights();

    slowLight.style.background = 'blue';
  },

  clearLights: function() {
    stopLight.style.background = 'black';

  }
}
