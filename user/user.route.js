const express = require('express');
const SignupController = require('./signup.controller');
const  LoginController = require('./login.controller');

const router  = express.Router();


router.post("/signup" , SignupController)


router.post("/login" , LoginController)

module.exports = router