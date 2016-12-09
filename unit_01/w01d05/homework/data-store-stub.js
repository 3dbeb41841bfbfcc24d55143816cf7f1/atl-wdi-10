// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";

const tasks = [];
let taskIdIndex = 1;

// `api` holds all of the methods for performing CRUD on tasks
const api = {};
// Index: get the full list of tasks
api.showTaskIndex = function(){
  return tasks.slice(0); // return a copy, not the original
};
// Show: get one specific task
api.showOneTask = function(taskId){
  var taskToShow = retrieveTask(taskId);
  if (!taskToShow) { return null; }
  return Object.assign({}, taskToShow); // return a copy, not the original
};
// Destroy: destroy one specific task
api.destroyOneTask = function(taskId){
  var indexOfTask = tasks.findIndex(function(task){
    return task.taskId === taskId
  });
  if (indexOfTask !== -1) {
    tasks.splice(indexOfTask, 1);
  }
};
// Update: update one specific task
api.updateOneTask = function(taskId, taskAttrs){
  var taskToUpdate = retrieveTask(taskId);
  if (!taskToUpdate) { return null; }
  for (var attr in taskAttrs) {
    if (taskToUpdate.hasOwnProperty(attr)) {
      taskToUpdate[attr] = taskAttrs[attr];
    }
  }
  return Object.assign({}, taskToUpdate); // return a copy, not the original
};
// Create: create a new task
api.createTask = function(taskAttrs){
  var newTask = {
    name: taskAttrs.name,
    dueDate: taskAttrs.dueDate,
    priority: taskAttrs.priority,
    taskId: taskIdIndex
  }
  tasks.push(newTask);
  taskIdIndex += 1;
  return Object.assign({}, newTask); // return a copy, not the original
};

// Helper function
var retrieveTask = function(taskId){
  return tasks.find(function(task){
    return task.taskId === taskId;
  });
}

module.exports = api;
