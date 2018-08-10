var express = require('express');
var router = express.Router();
const controller = require("./blogcontents.controller");

router.get("/", controller.blogcontents);

module.exports = router;


