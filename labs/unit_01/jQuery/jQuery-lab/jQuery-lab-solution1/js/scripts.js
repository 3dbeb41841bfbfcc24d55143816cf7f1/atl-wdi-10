$(document).ready(function() {

  var teams = ['New York Giants', 'Washington Redskins', 'Philadelphia Eagles', 'Dallas Cowboys'];

  //add keyup event for spacebar
  $(document).keyup(function(event) {
    if (event.keyCode === 32) {
      alert("SPACEBAR!!")
    };
  });

  //add teams-container class to divs
  //add paragraphs to each div (text will be filled on click)
  var $divs = $("#content")
    .children('div')
    .addClass('teams-container')
    .append($('<p>'))

  //click the body, all team names will show and disappear after 1 second
  $('body').click(function() {
    $('p').each(function(index) {
      $(this).text(teams[index]).show()
      $(this).hide(1000);
    })
  })

  //click event on the image
  $('.teams-container > img').click(function($event) {
    $event.stopPropagation();

    //find index of the clicked container (img's parent)
    //to grab matching team name in teams array
    var position = $(this).parent().index() - 1;

    //for each paragraph check to see if index matches position
    $('p').each(function(index){
      // console.log(position);
      // console.log("index: ", index)
      // console.log("This is : ", this);

      if (index === position) {
        //add text to the paragraph tag with corresponding team name from teams array
        $(this).text(teams[position]).show();
      } else {
        $(this).hide();
      }
    });
  });


});
