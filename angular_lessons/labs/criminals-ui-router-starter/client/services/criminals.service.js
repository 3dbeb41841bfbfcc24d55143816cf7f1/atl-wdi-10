angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.loadAll = loadAll;


	// HOW IT DOES STUFF
	function loadAll() {
		return $http.get('/api/criminals');
	}
}
