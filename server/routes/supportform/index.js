var express = require('express');
var router = express.Router();
const controller = require("./supportform.controller");


router.post("/", controller.supportform);
// router.post("/", controller.supportformpost);

module.exports = router;


