// external exports
const express = require('express');

// internal exports
const { getUsers } = require('../controllers/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')


const router = express.Router();

router.get('/',decorateHtmlResponse('Users'), getUsers);

module.exports = router;
