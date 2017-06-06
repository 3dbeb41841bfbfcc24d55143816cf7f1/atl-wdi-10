angular.module('storeApp')
  .controller('ReviewsController', ReviewsController);

function ReviewsController() {
  this.productCategories = [
    'Smartphones',
    'Bluetooth Speakers',
    'Video Games'
  ];
};