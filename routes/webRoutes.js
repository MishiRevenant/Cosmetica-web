const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.index);
router.get('/servicios', siteController.services);
router.get('/galeria', siteController.gallery);
router.get('/contacto', siteController.contact); // Nueva ruta

module.exports = router;
