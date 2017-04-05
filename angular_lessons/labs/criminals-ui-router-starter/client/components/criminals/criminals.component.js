const controller = require('./criminals.controller.js');
const template = require('./criminals.html');

const CriminalsComponent = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('criminals', CriminalsComponent);
