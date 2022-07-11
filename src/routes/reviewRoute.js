const express = require('express');
const router = express.Router();

const controller = require('../controllers/reviewController');

router.post('/', controller.post);
router.get('/album/:albumId', controller.getByAlbumId);
router.get('/user/:userId', controller.getByUserId);

module.exports = router;
