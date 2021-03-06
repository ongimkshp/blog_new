const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

router.get('/home', homeController.show);
router.get('/couser', homeController.getCouser);
router.get('/users', homeController.getUsers);
router.get('/home-data', homeController.index);

module.exports = router;
