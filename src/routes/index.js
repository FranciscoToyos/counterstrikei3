// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainControllers');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/redes',mainController.red);

//router.get ('/contacto',mainController.contacto)

module.exports = router;
