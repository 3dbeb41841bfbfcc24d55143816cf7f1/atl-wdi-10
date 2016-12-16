var teams = ['New York Giants', 'Washington Redskins', 'Philadelphia Eagles', 'Dallas Cowboys'];

// Get all the child nodes of the div#content, and filter out the h1
// so only the divs show
$('#content').children('div').each(function() {
  $(this).addClass('teams-container');
});


// Listen for the space bar to be pressed and alert the user
$('html').keyup(function($event) {
  if ($event.keyCode == 32) alert('Space bar key pressed')
  // The above if statement syntax is more SYNTACTIC SUGAR for
  // when you have just one if statement you're checking for
  // only works for one line blocks, like a single alert :)
});

$('body').click(function($event) {
  // Loop over all the team divs and add the team name to each
  $('#content').children('div').each(function(index) {
    var $teamName = $('<p>').text(teams[index])
    $(this).append($teamName)
  })

  // remove all p tags after half a second
  setTimeout(function() {
    $('p').remove()
  }, 1000)

})

// http://api.jquery.com/jquery.each/
// HOW TO LOOP OVER JQUERY OBJECTS HOLDING MULTIPLE ELEMENTS ^^
$('img').click(function($event) {
  $event.stopPropagation();

  var $allTeams = $('.teams-container');
  // this refers to the element clicked
  var $child = $(this);

  $allTeams.each(function(index, val) {
    // index is the obvs the index, and val is the current elemen in the loop
    //
    // compares if the container we loop over matches the parent of the
    // element clicked if it is, then create the p-tags etc.
    if ( $(val).is($child.parent()) ) {
      var $teamName = $('<p>').text(teams[index])

      $('p').css({display: 'none'})

      $child.parent().append($teamName);
    }
  });
});
