const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUserData } = require('../middlewares/validationMiddleware');

router.post('/register', validateUserData, userController.createUser);

module.exports = router;
