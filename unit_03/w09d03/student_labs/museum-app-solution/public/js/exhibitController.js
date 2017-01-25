(function(){
    angular.module('TheMET')
     .controller('ExhibitController', ExhibitController);

    function ExhibitController(){
        this.artist = 'John Sargent';
        this.title = 'Sargent Portraits of Artists & Friends';
        this.location = 'Gallery 999';
        this.headerImage = 'http://www.metmuseum.org/~/media/Images/Exhibitions/2015/Sargent/Sargent_DIGITAL_Hero.jpg?h=360&mw=988&w=988';
    }
})()
