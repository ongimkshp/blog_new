const express = require('express');
const router = express.Router();

const AuthController = require('../app/controllers/AuthController');

router.get('/login', AuthController.login);
router.post('/login', AuthController.postLogin);
router.get('/logout', AuthController.logout);

module.exports = router;
