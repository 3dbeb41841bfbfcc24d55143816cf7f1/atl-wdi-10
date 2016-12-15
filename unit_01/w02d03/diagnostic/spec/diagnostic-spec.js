// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

let phantom = require('phantom');
let phInstance = null, sitepage = null;
describe('w02 Diagnostic', function(){
  before(function(){
    this.timeout(6000);
    return phantom.create()
    .then(instance => {
      phInstance = instance;
      return instance.createPage();
    })
    .then(page => {
      sitepage = page;
      return page.open( process.env.PWD + '/index.html');
    })
    // .then(status => {
    //   console.log(`PAGE FINISHED LOADING; STATUS ${status}`);
    // })
    .catch(error => {
        console.log(error);
        sitepage.close();
        phInstance.exit();
    });
  });
  describe("nthFibonacci(n)", function(){
    it("gives the nth Fibonacci number", function(){
      let testCases = [
        {n: 1, fib: 1},
        {n: 2, fib: 1},
        {n: 3, fib: 2},
        {n: 4, fib: 3},
        {n: 5, fib: 5},
        {n: 10, fib: 55},       // 1 1 2 3 5 8 13 21 34 55
        {n: 20, fib: 6765},     // 89 144 233 377 610 987 1597 2584 4181 6765
      ]
      return sitepage.evaluate(function(testCases){
        return testCases.map(function(testCase){
          return {expected: testCase.fib, actual: nthFibonacci(testCase.n)};
        });
      }, testCases).then(function(testCases){
        testCases.forEach(function(testCase){
          expect(testCase.expected).to.equal(testCase.actual);
        });
      });
    });
    it("returns `null` for values of n less than 1", function(){
      let testCases = [
        {n: 0, fib: null},
        {n: -1, fib: null}
      ]
      return sitepage.evaluate(function(testCases){
        return testCases.map(function(testCase){
          return {expected: testCase.fib, actual: nthFibonacci(testCase.n)};
        });
      }, testCases).then(function(testCases){
        testCases.forEach(function(testCase){
          expect(testCase.expected).to.equal(testCase.actual);
        });
      });
    });
  });
  describe("renderTaskList(tasks)", function(){
    it('takes a list of tasks, generates a set of <li> elements from those tasks,\n     \
    and sets these elements as the content of a <ul> element with the id `task-list`', function(){
      var tasks = [
        'mow the lawn',
        'walk the dog',
        'feed the cat',
        'take out the trash',
        'do the laundry',
        'X the Y'
      ];
      return sitepage.evaluate(function(tasks){
        var taskList = document.getElementById('task-list');
        renderTaskList(tasks);
        return Array.prototype.slice.call(taskList.children).map(function(child){
          return {innerHTML: child.innerHTML, tagName: child.tagName};
        });
      }, tasks).then(function(taskListChildren){
        expect(taskListChildren.length).to.equal(tasks.length);
        for (let i = 0; i < tasks.length; i++) {
          expect(taskListChildren[i].tagName).to.equal('LI');
          expect(taskListChildren[i].innerHTML).to.equal(tasks[i]);
        }
      });
    });
  });
  describe("rotateBackgroundColor()", function(){
    it('changes the background color of the body once;\n     \
      - if the background color is white (or something else other than red, blue, or green), it becomes red;\n     \
      - if the background color is red, it becomes blue;\n     \
      - if the background color is blue, it becomes green;\n     \
      - if the background color is green, it becomes white', function(){
      let testCases = [
        {initialColor: 'white', nextColor: 'red'},
        {initialColor: 'red', nextColor: 'blue'},
        {initialColor: 'blue', nextColor: 'green'},
        {initialColor: 'green', nextColor: 'white'},
        {initialColor: '', nextColor: 'red'},
        {initialColor: 'orange', nextColor: 'red'}
      ];
      return sitepage.evaluate(function(testCases){
        return testCases.map(function(testCase){
          document.body.style.backgroundColor = testCase.initialColor;
          rotateBackgroundColor();
          return {
            expected: testCase.nextColor,
            actual: document.body.style.backgroundColor
          };
        });
      }, testCases).then(function(testCases){
        testCases.forEach(function(testCase){
          expect(testCase.expected).to.equal(testCase.actual);
        });
      });
    });
    it('is attached to the button with id `q3-q4-button` as a click handler', function(){
      return sitepage.evaluate(function(){
        var button = document.getElementById('q3-q4-button');
        return button.onclick === rotateBackgroundColor;
      }).then(function(result){
        expect(result).to.be.true;
      });
    });
  });
  
  after(function(){
    sitepage.close();
    phInstance.exit();
  });
});
