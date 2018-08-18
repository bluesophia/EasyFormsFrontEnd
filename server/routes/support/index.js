var express = require('express');
var router = express.Router();
const controller = require("./support.controller");


router.get("/", controller.support);

module.exports = router;


