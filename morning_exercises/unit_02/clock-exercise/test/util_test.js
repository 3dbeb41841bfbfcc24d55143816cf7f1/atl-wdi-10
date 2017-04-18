// General Assembly, WDI (Web Development Immersive) Remote  (Matey)
// Copyright (C) 2017 Christine Yi under the GNU General Public License.
// See LICENSE for details.

// require chai
var expect = require("chai").expect;
// require homework response
var clock = require('../clocks.js').calculate;

// console.log(Clock)

//Tests
describe("clock hand angles tests", function(){
  it("clock(6, 00) should return [180, 180]", function(){
    expect(clock(6,0)).to.eql([180,180]);
  });

  it("clock(12, 00) should return [360, 0]", function(){
    expect(clock(12,0)).to.eql([360,0]);
  });

  it("clock(12, 15) should return [82.5, 277.5]", function(){
    expect(clock(12,15)).to.eql([82.5, 277.5]);
  });

  it("clock(1, 59) should return [294.5, 65.5]", function(){
    expect(clock(1,59)).to.eql([294.5, 65.5]);
  });

  it("clock(9, 45) should return [22.5, 337.5]", function(){
    expect(clock(1,59)).to.eql([294.5, 65.5]);
  });

  it("clock(500, 34) should return 'out of range'", function(){
    expect(clock(500, 34)).to.eql("out of range");
  });

  it("clock(-6, 00) should return 'out of range'", function(){
    expect(clock(-6,0)).to.eql("out of range");
  });

});
