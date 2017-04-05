angular.module('InfamousCriminals')
    .service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {

    var vm = this;

    vm.getCriminals = function () {
        return $http
            .get('/criminals')
            .then(function(response){
                return response.data.criminals;
            });
    };

   vm.addCriminal = function (newCriminal) {
       return $http
           .post('/criminals', newCriminal);
   };

    vm.deleteCriminal = function (criminal) {
        return $http
                .delete("/criminals/" + criminal._id)
    };

}
