const express = require('express');
const router = express.Router();

const controller = require('../controllers/followersController');

router.get('/following', controller.getFollowing);
router.get('/followers', controller.getFollowers);
router.put('/block', controller.updateIsBlock);
router.post('/', controller.postFollower);
router.delete('/', controller.deleteFollower);

module.exports = router;
