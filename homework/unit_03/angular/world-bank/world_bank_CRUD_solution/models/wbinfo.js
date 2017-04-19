var mongoose = require('mongoose');

var wbinfoSchema = mongoose.Schema({
	region: String,
	projectabstract: String,
	projectname: String,
	year: String,
	loanamnt: String
});

module.exports = mongoose.model('Wbinfo', wbinfoSchema);
