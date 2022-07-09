const express = require('express');

const registerController = require('../controllers/register');

const router = express.Router();

router.get('/register', registerController.getRegister);

router.post('/register', registerController.postRegister);

module.exports=router;