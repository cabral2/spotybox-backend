const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');

router.get('/email', controller.getByEmail);
router.post('/create', controller.post);
router.put('/', controller.put);

module.exports = router;
