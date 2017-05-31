angular.module('storeApp')
  .controller('ProductsController', ProductsController)
  .controller('ReviewsController', ReviewsController);

function ReviewsController() {
  this.productCategories = [
    'Smartphones',
    'Bluetooth Speakers',
    'Video Games'
  ];
};

function ProductsController() {
  this.products = [
    { name: 'Surface Book', price: '1500.43', dateAdded: '1490929458881' },
    { name: 'MacBook Pro 15"', price: '1800.34', dateAdded: '1490929458881' },
    { name: 'Macbook Pro 13"', price: '1600.28', dateAdded: '1490929458881' },
    { name: 'TI-86', price: '100.43', dateAdded: '1490929458881' },
    { name: 'UE Roll Speaker', price: '90.78', dateAdded: '1490929458881' }
  ];

  this.newProduct = { name: '', price: '', dateAdded: Date.now() };

  this.addProduct = function() {
    // My code to check to make sure this works
    // this.products.push({ name: 'Iphone 8', price: '400', dateAdded: '1490929458881' });

    this.products.push({name: this.newProduct.name, price: this.newProduct.price, dateAdded: this.newProduct.dateAdded });

    this.newProduct = { name: '', price: '', dateAdded: Date.now() };
  };

  this.toggleCategories = function() {
    this.showCategories = !this.showCategories;
  };
}