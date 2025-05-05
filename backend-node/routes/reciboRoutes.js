const express = require('express');
const router = express.Router();
const controller = require('../controllers/reciboController');

router.get('/', controller.listar);
router.get('/:id/pdf', controller.gerarPdf);
router.post('/', controller.cadastrar);

module.exports = router;
