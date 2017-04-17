const controller = require('./about.controller.js');
const template = require('./about.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('about', component);
