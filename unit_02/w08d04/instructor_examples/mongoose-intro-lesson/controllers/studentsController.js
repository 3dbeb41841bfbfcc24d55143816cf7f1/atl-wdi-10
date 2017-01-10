var Schema = require("../db/schema.js");
var StudentModel = Schema.StudentModel
var ProjectModel = Schema.ProjectModel


var studentsController = {
  index: function(){
    StudentModel.find({}, function(err, docs){
      console.log(docs);
    })
  },
  show: function(req){
    StudentModel.findOne({name: req.name}, function(err, docs){
      console.log(docs);
    });
  },
  update: function(req, update){
      StudentModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, docs){
        if(err) {
          console.log(err)
        }
        else {
          console.log(docs);
        }
      });
    },
  destroy: function(req){
    StudentModel.findOneAndRemove(req, function(err, docs){
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  }
  };

// studentsController.index();
// studentsController.show({name: "becky"});
studentsController.update({name: "becky"}, {name: "Sarah"});
studentsController.destroy({name: "steve"});
