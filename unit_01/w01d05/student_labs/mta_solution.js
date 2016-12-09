// Single Object solution to MTA
var command = process.argv[2]; // the mta{} function the user wants to run

var mta = {

    data: {
      "N": ["Times_Square", "34th", "28th", "23rd", "Union_Square", "8th"],
      "L": ["8th", "6th", "Union_Square", "3rd", "1st"],
      "6": ["Grand_Central", "33rd", "28th", "23rd", "Union_Square", "Astor_Place"]
    },

    hub: "Union_Square",

    lines: function() {
      var lines  = Object.keys(this.data) // fetches the keys in this.data
      console.log("Lines:", lines); // prints lines to the the console
      return lines // returns the data
    },

    stops: function(line) {
      var stops = this.data[line] // fetches the value of the key line)
      console.log("Stops:", stops); // prints stops to the the console
      return stops
    },

    calculate: function(line, stop1, stop2) {
      var stops = this.stops(line); // uses the function stops
      // computes the distance biwteen the stops
      var distance = stops.indexOf(stop2) - stops.indexOf(stop1);
      distance = Math.abs(distance);

      console.log("Distance:", distance); // prints stops to the the console
      return distance
    },

    complexCalculate: function(line1, stop1, line2, stop2) {
      // This function uses the calculate to compute
      // the stops traveled on line1 from stop1 to the hub
      // and then on line2 from the hub to stop2
      var distance1 = this.calculate(line1, stop1, this.hub);
      var distance2 = this.calculate(line2, this.hub, stop2);

      console.log("Ditance Between lines:", distance1 + distance2);
    }
};

switch(process.argv[2]) {
  case undefined:
    console.log('please provide a command')
    break;
  case 'lines':
    mta[process.argv[2]]()
    break;
  case 'stops':
    mta[process.argv[2]](process.argv[3])
    break;
  case 'calculate':
    // console.log(process.argv)
    mta[process.argv[2]](process.argv[3], process.argv[4], process.argv[5])
    break;
  case 'complexCalculate':
    mta[process.argv[2]](process.argv[3], process.argv[4], process.argv[5], process.argv[6])
    break;
}
