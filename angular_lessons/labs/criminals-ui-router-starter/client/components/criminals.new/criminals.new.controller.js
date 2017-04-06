CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
	const vm = this;

	vm.createCriminal = createCriminal;
	vm.newCriminal = {};

	activate();

	function activate() {}

	function createCriminal() {
		CriminalsService
			.create(vm.newCriminal)
			.then(function resolve(response) {
				const id = response.data.criminal._id;
				$state.go('criminalsShow', { criminalId: id });
			});
	}
}

module.exports = CriminalsNewController;
