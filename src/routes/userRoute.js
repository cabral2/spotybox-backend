const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');

router.get('/email', controller.getByEmail);
router.post('/create', controller.post);

module.exports = router;
