window.onload = function() {
    // 1. Button one, when clicked, should trigger an alert saying "you have clicked button one"
    var buttonOne = document.getElementById('buttonOne');

    buttonOne.addEventListener("click", function(){
        alert("you have clicked button one");
    });

    // 2. Button two, when clicked, should trigger a function that creates a <p> with the following string:
    var buttonTwo = document.getElementById('buttonTwo');

    buttonTwo.addEventListener("click", function(){
        var par = document.createElement("p");
        var parContent = document.createTextNode("These buttons are great!");
        par.appendChild(parContent);

        var containerDiv = document.getElementById('container');
        containerDiv.appendChild(par);
    });

    // A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).
    // and appends it to the DOM in the <div id="information">.

    // 3. Button three, when clicked, should remove the p tag from the DOM
    var buttonThree = document.getElementById('buttonThree');

    buttonThree.addEventListener("click", function(){
        var par = document.getElementsByTagName("p")[0];

        var containerDiv = document.getElementById('container');
        containerDiv.removeChild(par);
    });
}
