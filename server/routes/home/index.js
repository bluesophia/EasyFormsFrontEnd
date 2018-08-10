var express = require('express');
var router = express.Router();
const controller = require("./home.controller");


router.get("/", controller.home);
router.get("/features", controller.features);
router.get("/clients", controller.clients);
router.get("/stories", controller.stories);

module.exports = router;


