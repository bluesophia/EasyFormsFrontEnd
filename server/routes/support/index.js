var express = require('express');
var router = express.Router();
const controller = require("./support.controller");


router.get("/", controller.support);
// router.post("/", controller.supportform);

module.exports = router;


