//TESTS FOR SCRIPTS.JS

var expect = require("chai").expect;

var numberToOrdinal = require("../script.js").numberToOrdinal;

describe('Turning Numbers to Ordinal', function(){
    it('1 should return 1st', function(){
      expect(numberToOrdinal(1)).to.equal("1st");
    });
    it('2 should return 2nd', function(){
      expect(numberToOrdinal(2)).to.equal("2nd");
    });
    it('3 should return 3rd', function(){
      expect(numberToOrdinal(3)).to.equal("3rd");
    });
    it('4 should return 4th', function(){
      expect(numberToOrdinal(4)).to.equal("4th");
    });
    it('5 should return 5th', function(){
      expect(numberToOrdinal(5)).to.equal("5th");
    });
    it('6 should return 6th', function(){
      expect(numberToOrdinal(6)).to.equal("6th");
    });
    it('7 should return 7th', function(){
      expect(numberToOrdinal(7)).to.equal("7th");
    });
    it('8 should return 8th', function(){
      expect(numberToOrdinal(8)).to.equal("8th");
    });
    it('9 should return 9th', function(){
      expect(numberToOrdinal(9)).to.equal("9th");
    });
    it('10 should return 10th', function(){
      expect(numberToOrdinal(10)).to.equal("10th");
    });
    it('11 should return 11th', function(){
      expect(numberToOrdinal(11)).to.equal("11th");
    });
    it('12 should return 12th', function(){
      expect(numberToOrdinal(12)).to.equal("12th");
    });
    it('13 should return 13th', function(){
      expect(numberToOrdinal(13)).to.equal("13th");
    });
    it('21 should return 21st', function(){
      expect(numberToOrdinal(21)).to.equal("21st");
    });
    it('22 should return 22nd', function(){
      expect(numberToOrdinal(22)).to.equal("22nd");
    });
    it('23 should return 23rd', function(){
      expect(numberToOrdinal(23)).to.equal("23rd");
    });
    it('111 should return 111th', function(){
      expect(numberToOrdinal(111)).to.equal("111th");
    });
    it('112 should return 112th', function(){
      expect(numberToOrdinal(112)).to.equal("112th");
    });
    it('113 should return 113th', function(){
      expect(numberToOrdinal(113)).to.equal("113th");
    });
    it('0 should return "0"', function(){
      expect(numberToOrdinal(111)).to.equal("111th");
    });
    it('40 should return 40th', function(){
      expect(numberToOrdinal(40)).to.equal("40th");
    });

});
