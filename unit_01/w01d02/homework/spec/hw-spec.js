// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// 'require' external code //
const expect = require('chai').expect;

// HW Responses
const responses = require('../hw.js');

// Tests
context('Truthy/Falsey Expression Questions:', function(){
  describe('Response one', function(){
    it('should be true', function(){
      expect(responses.one).to.equal(true);
    });
  });
  describe('Response two', function(){
    it('should be false', function(){
      expect(responses.two).to.equal(false);
    });
  });
  describe('Response three', function(){
    it('should be true', function(){
      expect(responses.three).to.equal(true);
    });
  });
  describe('Response four', function(){
    it('should be false', function(){
      expect(responses.four).to.equal(false);
    });
  });
  describe('Response five', function(){
    it('should be true', function(){
      expect(responses.five).to.equal(true);
    });
  });
})
context('Flow Control Questions:', function(){
  describe('Response six', function(){
    it('should end up equalling 10010', function(){
      expect(responses.six).to.equal(10010);
    });
  });
  describe('Response seven', function(){
    it('should end up equalling 101', function(){
      expect(responses.seven).to.equal(101);
    });
  });
  describe('Response eight', function(){
    it('should equal 1723296', function(){
      expect(responses.eight).to.equal(1723296);
    });
  });
  describe('Response nine', function(){
    it('should equal 71071', function(){
      expect(responses.nine).to.equal(71071);
    });
  });
  describe('Response ten', function(){
    it('should equal 10405071317', function(){
      expect(responses.ten).to.equal(10405071317);
    });
  });
});
