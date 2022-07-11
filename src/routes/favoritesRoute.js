const express = require('express');
const router = express.Router();

const controller = require('../controllers/favoritesController');

router.get('/user', controller.getByUser);
router.get('/user_favorite', controller.getByUserAndAlbum);
router.post('/', controller.post);
router.delete('/', controller.delete);

module.exports = router;
