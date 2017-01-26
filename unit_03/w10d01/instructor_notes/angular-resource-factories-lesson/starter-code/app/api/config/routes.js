var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var charactersController = require('../controllers/characters');
var episodesController = require('../controllers/episodes');

// http://127.0.0.1:3000/characters
router.route('/characters')

  //GET all characters
  .get(charactersController.getAll)

  //POST a new character
  .post(charactersController.createCharacter);


router.route('/characters/:id')

  // GET return specific characters
  .get(charactersController.getCharacter)

  // PUT update existing characters
  .put(charactersController.updateCharacter)

  // DELETE remove specific characters from DB
  .delete(charactersController.removeCharacter);


// http://127.0.0.1:3000/episodes
router.route('/episodes')

  //GET all episodes
  .get(episodesController.getAll)

  //POST a new character
  .post(episodesController.createEpisode);


router.route('/episodes/:id')

  // GET return specific episodes
  .get(episodesController.getEpisode)

  // PUT update existing episodes
  .put(episodesController.updateEpisode)

  // DELETE remove specific episodes from DB
  .delete(episodesController.removeEpisode);


module.exports = router