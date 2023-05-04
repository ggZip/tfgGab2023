const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateLoginData } = require('../middlewares/authValidationMiddleware');

router.post('/login', validateLoginData, authController.login);

module.exports = router;
