const express = require('express');
const router = express.Router();

const controller = require('../controllers/accountController');
const authService = require('../services/authService');

router.post('/auth', controller.authenticate);

module.exports = router;
