var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var criminalsController = require('../controllers/criminals');

// http://127.0.0.1:3000/criminals
router.route('/criminals')

  //GET all criminals
  .get(criminalsController.getAll)

  //POST a new criminals
  .post(criminalsController.createCriminal);


router.route('/criminals/:id')

  // GET return specific criminals
  .get(criminalsController.getCriminal)

  // PATCH update existing criminals
  .patch(criminalsController.updateCriminal)

  // DELETE remove specific criminals from DB
  .delete(criminalsController.removeCriminal);


module.exports = router