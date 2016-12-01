window.onload = function() {

  alert('Access the page title and log it to the console');
  var title = document.getElementById('page-title');
  console.log(title);

  alert('Access the list and log it to the console');
  var list = document.getElementById('awesome-list');
  console.log(list);

  alert('Add a fourth item to the list');
  var newItem = document.createElement('li');
  var newText = document.createTextNode('It lets you add content to the page dynamically.');
  newItem.appendChild(newText);
  list.appendChild(newItem);

  alert('Move the image to after the list');
  var image = document.getElementById('image-container');
  image.remove();
  document.body.appendChild(image);

  alert('Make the page title red (by adding a class to the page title)');
  title.setAttribute('class', title.className + ' red');

  alert('Make the list items blue (add classes to each list item, not to the ul element) HINT: You\'ll need a for loop');
  var items = document.getElementsByClassName('awesome-list-item');
  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('class', items[i].className + ' blue');
  }

  alert('Make the description green');
  var desc = document.getElementById('description');
  desc.setAttribute('class', desc.className + ' green');

  alert('Add a red footer paragraph to the page with the id "page-footer"');
  var footer = document.createElement('p');
  var footerText = document.createTextNode('Thanks for visiting this website.');
  footer.setAttribute('class', 'red');
  footer.appendChild(footerText);
  document.body.appendChild(footer);
}
