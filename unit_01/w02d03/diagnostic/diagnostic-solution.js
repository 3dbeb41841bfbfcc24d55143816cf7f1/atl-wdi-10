// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

//// Complete the Functions

// 1. The Fibonacci sequence is a sequence of numbers, starting with
//    "1, 1, 2, 3, 5, ...", where each number is the sum of the two previous
//    numbers. Complete the method `nthFibonacci`, below, which, given some
//    number `n`, returns the nth number in that sequence. If `n` is zero or
//    negative, return `null`. Assume that `n` will only be whole numbers.

var nthFibonacci = function(n){
  var fibs = [1, 1];
  if (n < 1) { return null; }
  if (n === 1) {return fibs[0];}
  for (var i = 2; i < n; i++){
    fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1])
  }
  return fibs[fibs.length - 1];
};

// Note: These next three questions involve using the DOM. Don't worry, just
// call `document` just like you normally would.

// 2. `renderTaskList` must
//    a) grab a <ul> element with id 'task-list' and
//    b) replace (NOT append) the inner content of that <ul> with new <li>
//       elements created from the list of tasks that is passed in.

var renderTaskList = function(tasks){
  var newHTML = '';
  for (var i = 0; i < tasks.length; i++) {
    newHTML += ("<li>" + tasks[i] + "</li>");
  }
  document.getElementById('task-list').innerHTML = newHTML;
};

// 3. `rotateBackgroundColor` must rotate the background color of the
//    page's <body> element each time it is invoked; from white to red, from red
//    to blue, from blue to green, and then from green back to white again.

var rotateBackgroundColor = function(){
  var currentColor = document.body.style.backgroundColor;
  var nextColorAfter = {
    'white': 'red',
    'red': 'blue',
    'blue': 'green',
    'green': 'white'
  };
  document.body.style.backgroundColor = nextColorAfter[currentColor] || 'red';
};

// 4. Set `rotateBackgroundColor` as a click handler for the button with the id
//    `q3-q4-button`.

window.onload = function(){
  document.getElementById('q3-q4-button').onclick = rotateBackgroundColor;
};
