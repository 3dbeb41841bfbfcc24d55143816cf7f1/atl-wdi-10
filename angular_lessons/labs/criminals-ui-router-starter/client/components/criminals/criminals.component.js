const controller = require('./criminals.controller.js');
const template = require('./criminals.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('criminals', component);
