window.onload = function() {
	console.log('loaded');

	// Invoke your chain of functions and listeners within window.onload

};


// USE THIS TO SHUFFLE YOUR ARRAYS
function shuffle(o) {
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

// this object will contain all of your properties and methods/functions
var game = {


};
