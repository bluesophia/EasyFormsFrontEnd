const router = require("express").Router();
// const home = require("../home");
const about = require("../about");
// const blog = require("../blog");
// const support = require("../support");
// const contact = require("../contact");
// const login = require("../login");


// router.use("/", home);
router.use("/about", about);
// router.use("/blog", blog);
// router.use("/support", support);
// router.use("/contact", contact);
// router.use("/login", login);

module.exports = router;