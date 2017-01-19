var Schema = require("../db/schema.js");
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

var studentsController = {

  index: function(){
    StudentModel.find({})
      .exec(function(err, docs){
        if (err) { console.log(err); }

        docs.forEach(function(doc){
          console.log(doc);
        });
      });
  }
};

studentsController.index();
