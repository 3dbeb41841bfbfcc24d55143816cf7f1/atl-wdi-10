// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var dataStore = require('./data-store-stub');

var route = function(inputArgs){
  if (inputArgs[0] === 'show') {
    if (inputArgs[1] === 'all') { // Show All
      return dataStore.showTaskIndex()
    } else {    // Show One
      let taskId = Number(inputArgs[1]);
      return dataStore.showOneTask(taskId);
    }
  } else if (inputArgs[0] === 'delete') {
    let taskId = Number(inputArgs[1]);
    dataStore.destroyOneTask(taskId);
    return;
  } else if (inputArgs[0] === 'edit') {
    let taskId = Number(inputArgs[1]);
    if (inputArgs[2] === 'name') {
      return dataStore.updateOneTask(taskId, { name: inputArgs[3] });
    } else if (inputArgs[2] === 'dueDate') {
      return dataStore.updateOneTask(taskId, { dueDate: inputArgs[3] });
    } else if (inputArgs[2] === 'priority') {
      return dataStore.updateOneTask(taskId, { priority: inputArgs[3] });
    }
    // Alternatively,
    // let attrs = {};
    // attrs[inputArgs[2]] = inputArgs[3];
    // return dataStore.updateOneTask(taskId, attrs);
  } else if (inputArgs[0] === 'new') {
    let newTask = dataStore.createTask({
      name: inputArgs[1],
      dueDate: inputArgs[2],
      priority: inputArgs[3]
    });
    return newTask;
  } else {
    console.err("Command not recognized."); // Optional!
    return;
  }
};

module.exports = {
  route: route
}
