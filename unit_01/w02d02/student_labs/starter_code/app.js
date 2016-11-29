window.onload = function() {
    var buttonOne = document.querySelector('#sweet-button-one');
    var buttonTwo = document.querySelector('#sweet-button-two');
    var buttonThree = document.querySelector('#sweet-button-three')
    var information = document.querySelector('.information')
    
    buttonOne.addEventListener('click', function() {
        alert('you\'ve clicked button one')
    })
    
    buttonTwo.addEventListener('click', function() {
        var pTag = document.createElement('p');
        pTag.innerHTML = 'A click event is essentially, tying a function, as a callback, to an element and speciyfing what action needs to happen to trigger or call/invoke that function (callback)'
        
        information.appendChild(pTag);
    })
    
    buttonThree.addEventListener('click', function() {
        var pTag = document.querySelector('p');
        
        pTag.remove()
    })
    
}
