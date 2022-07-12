const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './Images');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage });

router.get('/email', controller.getByEmail);
router.post('/create', controller.post);
router.post('/photo', upload.single('file'), controller.postImage);
router.put('/', controller.put);

module.exports = router;
