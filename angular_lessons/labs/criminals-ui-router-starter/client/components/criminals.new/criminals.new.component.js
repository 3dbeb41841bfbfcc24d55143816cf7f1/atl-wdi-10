const controller = require('./criminals.new.controller.js');
const template = require('./criminals.new.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('criminalsNew', component);
