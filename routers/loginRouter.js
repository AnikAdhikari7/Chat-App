// external exports
const express = require('express');

// internal exports
const { getLogin } = require('../controllers/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router();

router.get('/', decorateHtmlResponse('Login'), getLogin);

module.exports = router;
