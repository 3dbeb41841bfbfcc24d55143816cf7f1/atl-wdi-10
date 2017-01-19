// SETTING UP MONGOOSE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});

db.once('open', function(){
  console.log("database has been connected");
});

db.close();

// SCHEMA INFO BELOW
var Schema = mongoose.Schema;

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


// MONGOOSE QUERIES START HERE
// NEW + SAVE
// var chuck = new StudentModel({name: "Chuck", age: 30});
//
// chuck.save(function(err, student){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(student);
//   }
// });

// CREATE A PROJECT - EMBEDDED DOCUMENT

// var anna = new StudentModel({name: "Anna", age: 30});
// var project1 = new ProjectModel({title: "Memory Game", unit: "JS"});
//
// anna.projects.push(project1);
//
// anna.save(function(err, student){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(student + " was saved to our db");
//   }
// });




module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};
