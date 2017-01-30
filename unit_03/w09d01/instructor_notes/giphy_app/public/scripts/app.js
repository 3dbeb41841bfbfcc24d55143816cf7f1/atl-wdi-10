$(function() {
  $('.save-gif').click(function(event) {
    saveGif();
  })
  $('.get-gif').click(function(event) {
    getGif();
  })
  $('.saved-gifs').click(function(event) {
    getSavedGifs();
  })
})

var getGif = function() {
  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
  .done(function(giphyResponse) {
    console.log(giphyResponse.data)
    $('.image-jumbotron').attr('src', giphyResponse.data.image_url)
  })

}

var saveGif = function() {
  var url = $('img').attr('src')
  console.log(url)
  $.post('/gifs', {url: url} )
  .done(function(response) {
    console.log(response)
  })
}

var getSavedGifs = function() {
  $.get('/gifs')
  .done(function(response) {
    var $container = $('.all-gifs-container');
    $container.html('')
    response.gifs.forEach(function(el) {
      var $div = $('<div>');
      var $img = $('<img>').attr('src', el.url);

      $container.append($div.append($img))

    })
  })
}
