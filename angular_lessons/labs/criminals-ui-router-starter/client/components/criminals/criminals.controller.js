CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService) {
	const vm = this;

	// WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
	vm.criminals = [];
	vm.loading = true;


	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
	activate();

	function activate() {
		loadAllCriminals();
	}
	

	// HOW IT DOES STUFF
	function loadAllCriminals() {
		CriminalsService
			.loadAll()
			.then(function resolve(response) {
				vm.criminals = response.data.criminals;
				vm.loading = false;
			});
	}
}

module.exports = CriminalsController;
