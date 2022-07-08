const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');

router.post('/create', controller.post);

module.exports = router;
