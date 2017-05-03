window.onload = function() {
    // For button one
    // 1. get access to button 1
    var button = document.getElementById('buttonOne');
    
    // 2. user will click on button 1
    button.addEventListener("click", function() {
        // 3. once this happens, show an alert that says "you have clicked button one"
        alert('you have clicked button one');
    });

    // For button two
    // 1. get access to button 2
    var buttonTwo = document.getElementById('buttonTwo');
    
    // 2. user will click on button 2
    buttonTwo.addEventListener('click', function() {
    // 3. once this happens
        // create a paragraph
        var par1 = document.createElement("p");
        // add a text node to that paragraph
        par1.innerHTML = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).";
        // append that paragraph to the div with id of information
        document.getElementById('information').appendChild(par1);
    });

    // For button three
    // 1. get access to button 3
    var buttonThree = document.getElementById('buttonThree');

    // 2. user will click on button 3
    buttonThree.addEventListener('click', function() {
    // 3. once this happens
        // access paragraph via its tag name
        var par2 = document.getElementsByTagName('p')[0];

        // remove paragraph from the div with the id of information
        document.getElementById('information').removeChild(par2);
    });
}










