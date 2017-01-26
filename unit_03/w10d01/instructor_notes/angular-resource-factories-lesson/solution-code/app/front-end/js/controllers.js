angular
  .module("lightsaberApp")
  .controller("MainController", MainController);

MainController.$inject = ['Character']
function MainController(Character){
  var self = this;

  // Blank new character for form
  this.character = {}

  // Fetch all todos
  this.characters = Character.query();

  // Fetch the clicked todo
  this.selectCharacter = function(character) {
    self.selectedCharacter = Character.get({id: character._id});
  };

  // Create/Update a Character (Class Method)
  this.addCharacter = function() {
    if (self.character._id) {
      Character.update(self.character, function(){
        self.character = {};
      });
    } else {
      Character.save(self.character, function(character) {
        self.characters.push(character);
        self.character = {}
      });
    }
  };

  // Delete a Character
  this.deleteCharacter = function(character){
    Character.delete({id: character._id});
    var index = self.characters.indexOf(character);
    self.characters.splice(index, 1);
  }

  // Fill the form to edit a Character
  this.editCharacter = function(character){
    self.character = character;
  }
}