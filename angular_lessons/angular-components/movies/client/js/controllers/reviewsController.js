angular
    .module('moviesApp')
    .controller('ReviewsController', ReviewsController);

function ReviewsController() {
    this.reviewList = [
        {content: 'It was good.'},
        {content: 'Meh.'},
        {content: 'Did not like it.'},
    ]
}
