// Convert favorites list to jQuery:


function addToList($list, thing) {
  var $thingLi = $('<li>');
  $thingLi.text(thing);
  $list.append($thingLi);
}

$(document).ready(function() {
  var $thingList = $('#fav-list');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

  $button.on('click', function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    if (newThing === '') {
      alert("You must type in a value!");
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });
});
