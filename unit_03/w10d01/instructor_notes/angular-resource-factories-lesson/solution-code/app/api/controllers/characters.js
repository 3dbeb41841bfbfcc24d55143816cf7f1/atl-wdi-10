var Character = require('../models/Character');

// GET
function getAll(request, response) {
  Character.find(function(error, characters) {
    if(error) response.status(404).send(error);

    response.status(200).send(characters);
  }).select('-__v');
}

// POST
function createCharacter(request, response) {
  var character = new Character(request.body);

  character.save(function(error) {
    if(error) response.status(500).send(error);

    response.status(201).send(character);
  });
}

// GET
function getCharacter(request, response) {
  var id = request.params.id;

  Character.findById({_id: id}, function(error, character) {
    if(error) response.status(404).send(error);

    response.status(200).send(character);
  }).select('-__v');
}

function updateCharacter(request, response) {
  var id = request.params.id;

  Character.findById({_id: id}, function(error, character) {
    if(error) response.status(404).send(error);

    if(request.body.name) character.name = request.body.name;
    if(request.body.lightsaber) character.lightsaber = request.body.lightsaber;

    character.save(function(error) {
      if(error) response.status(500).send(error);

      response.status(200).send(character);
    });
  }).select('-__v');
}

function removeCharacter(request, response) {
  var id = request.params.id;

  Character.remove({_id: id}, function(error) {
    if(error) response.status(404).send(error);

    response.status(200);
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createCharacter: createCharacter,
  getCharacter: getCharacter,
  updateCharacter: updateCharacter,
  removeCharacter: removeCharacter
}