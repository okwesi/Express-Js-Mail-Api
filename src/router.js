const express = require('express');
const controller = require('./controller')
const router = express.Router();


router.get("/home", controller.helloWorld)

module.exports = router