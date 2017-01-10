var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});

db.once('open', function(err){
  console.log("database has been connected");
});

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var ProjectSchema = new Schema({
  title: String,
  unit: String
});

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ProjectSchema]
});

var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);

module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
}
