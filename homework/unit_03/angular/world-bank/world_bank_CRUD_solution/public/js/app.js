var app = angular.module("myApp", []);

app.controller("MainController", ['$http', '$scope', function($http, $scope){

	var vm = this;
	vm.total = "";
	vm.regions = [];
	vm.infos = "";
	vm.formdata = {};

	//this is to get the count from the count router
	$http.get('/wbinfo/count').then(
		function(response){ //success callback
			vm.total = response.data;
		}),
		function(err) { //error callback
			console.log(err);
		};

	//this is to get all the regions
	$http.get('wbinfo/uniqueRegions').then(
		function(response) {
			// console.log(response.data)
			vm.regions = response.data;
		}), 
		function(err) {
			console.log(err);
		};

	//this is to get the information from the regions
	this.showRegion = function(name) {
		$http.get('wbinfo/byName/' + name).then(
			function(response) {
				// console.log(response.data)
				vm.infos = response.data;
				// console.log(vm.infos)
			}),
			function (err) {
				console.log(err);
			}
	};

	//this is to add a new record: it will automatically display the region name
	this.addRecord = function() {
		console.log("Hey it worked");
		$http({
			method: 'POST',
			url: '/wbinfo',
			data: this.formdata
		}).then(
		function(response) {
			//push this formdata into the regions array
			vm.regions.push(response.data.region);
			//reset & clears the form
			vm.formdata = {};
		}),
		function(err) {
			console.log(err);
		}
	};

	//this is to delete the information and remove the name of the region from the list
	// if there is no more information available
	this.delete = function(data, index) {
		//get the id of the data coming in; this is used to access the URL below
		var id = data._id;
		// console.log("delete button fired: ", data._id)
		$http({
			method: 'DELETE',
			url: '/wbinfo/' + id,
			data: this
		}).then( 
			function(response) {
			// console.log("This is the response ", response)
			// console.log("This is vm.infos ", vm.infos)
			//this removes the information of the region at the given index
			vm.infos.splice(index, 1);
			//this removes the region from the list, if empty
			vm.regions.pop(response.data.region);
		}),
		function(err) {
			console.log(err);
		}
	};

	//this allowes user to edit in realtime on the same page
	this.edit = function(data, index) {
		//get the id of the data coming in; used in the URL below
		var id = data._id
		// console.log("check this out: ", id)
		// console.log("this is what this is ", this.infos)
		$http({
			method: 'PUT',
			url: '/wbinfo/' + id,
			data: this.infos[index]
		}).then(
			function(response) {
				// FUTURE task: edit the regions name on the list
				// console.log(response.data.region)
				// console.log(vm.regions)
			}), 
			function(err) {
				console.log(err);
			}
	};

}]);//ends mainController
