var express = require('express');
var router = express.Router();
const controller = require("./contact.controller");

router.get("/", controller.contact);

module.exports = router;


