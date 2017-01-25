(function(){
    angular.module('TheMET')
    .controller('GeneralInfoController', GeneralInfoController);

    function GeneralInfoController(){
         this.hours = {
            Sunday: "10:00 a.m.–5:30 p.m.",
            Monday: "10:00 a.m.–5:30 p.m.",
            Tuesday: "10:00 a.m.–5:30 p.m.",
            Wednesday: "10:00 a.m.–5:30 p.m.",
            Thursday: "10:00 a.m.–5:30 p.m.",
            Friday: "10:00 a.m.–9:00 p.m.",
            Saturday: "10:00 a.m.–9:00 p.m."
         }
         this.admission = {
            Adults:  "$25",
            Seniors: "$17",
            Students:  "$12"
         }
    }
})()
