const express = require('express');
const router = express.Router();

const controller = require('../controllers/testController');
const authService = require('../services/authService');

router.get('/', controller.get);
router.post('/', authService.authorize, controller.post);
router.post('/isAdmin', authService.isAdmin, controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;
