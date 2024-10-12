const express = require('express');
const { loginAdmin } = require('../controllers/authController');

const router=express.Router();

router.route('/login').post(loginAdmin);

module.exports=router;
