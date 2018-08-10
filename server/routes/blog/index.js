var express = require('express');
var router = express.Router();
const controller = require("./blog.controller");


router.get("/", controller.blog);

module.exports = router;


