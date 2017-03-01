window.onload = function() {
    // Button one, when clicked, should trigger an alert saying "you have clicked button one"
    // Button two, when clicked, should trigger a function that creates a <p> with the following string:

    // A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).
    // and appends it to the DOM in the <div id="information">.

    // Button three, when clicked, should remove the p tag from the DOM
    var buttonOne = document.querySelector('#buttonOne');
    var buttonTwo = document.querySelector('#buttonTwo');
    var buttonThree = document.querySelector('#buttonThree');

    buttonOne.addEventListener("click", function() {
        alert('You have clicked button one.');
    });

    buttonTwo.addEventListener("click", function() {
        var newPar = document.createElement('p');
        var newNode = document.createTextNode("A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).");
        var newDiv = document.getElementById('information');
        newPar.setAttribute("id", "newPar");
        newPar.appendChild(newNode);
        newDiv.appendChild(newPar);

    });

    buttonThree.addEventListener("click", function() {
        var newDiv = document.getElementById('information');
        var newPar = document.getElementById('newPar');
        newDiv.removeChild(newPar);
    });
}
