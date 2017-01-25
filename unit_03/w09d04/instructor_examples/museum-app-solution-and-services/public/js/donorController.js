(function(){
    angular.module('TheMET')
        .controller('DonorController', DonorController);

    function DonorController(schmittyService){
        this.greeting = schmittyService.greeting;

        this.contact = {
            email: 'development@metmuseum.org',
            phone: ' 212-650-2425'
        }
        this.amounts = [ 50, 100, 250, 500, 1000, 5000]
    }
})()
