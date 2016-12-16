//JQUERY SOLUTION
$(document).ready(function(){
  console.log('loaded');

  var $startButton = $('button');

  $startButton.on("click", game.start);
});

// this object will contain all of your properties and methods/functions
var game = {

  // an array of ten tiles
  tiles: ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],

  // USE THIS TO SHUFFLE YOUR ARRAYS
  //a = array
  shuffle: function(a) {
    for(var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
      return a;
  },

  start: function(){
    console.log("started!");
    // shuffle the tiles array
    game.shuffle(game.tiles);

    // then call makeAndDisplayTiles to build and display the gameboard
    game.makeAndDisplayTiles();
  },

  makeAndDisplayTiles: function(){
    $('#game').html("");
    $('#info').html("");

    $.each(game.tiles, function(index, tile){
      console.log(index, tile);

      var $newTile = $('<div></div>')
              .addClass('column')
              .attr('data-value', tile)
              .on("click", function(){
                // addClickToTile
                game.makePlay(this);
              });


      $('#game').append($newTile);

    });
  },

  makePlay: function(tile){
    $(tile).html(tile.dataset.value)
           .addClass("clicked");

    if ($('.clicked').length === 2) {
      game.checkForMatch();
    }
  },

  checkForMatch: function() {
    setTimeout(function() {
      var $selected = $('.clicked');

      // if they are a match
      if ($selected.eq(0).attr('data-value') === $selected.eq(1).attr('data-value')) {
        console.log('match');

        $selected.addClass("found").removeClass('clicked');
        // $('#info').show().html("Match!").fadeOut(1000);

        // if no match is found
      } else {
        console.log('no match');
        // $('#info').show().html("No match!").fadeOut(1000);
        $selected.removeClass("clicked").html("");
      }
      game.checkForWin();
    }, 1000);
  },

  checkForWin: function() {

    if ($('.found').length === 10) {
      $('.found:odd').each(function(){
        $(this).addClass("won");
      });

      $('#info').html("You're a winner!");
    }
  }
};
