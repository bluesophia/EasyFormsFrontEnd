const router = require("express").Router();

const home = require("../home");
const about = require("../about");
const blog = require("../blog");
const blogcontents = require("../blogcontents");
const support = require("../support");
const supportform = require("../supportform");
const contact = require("../contact");
const uploads = require("../uploads");
// const login = require("../login");
// const users = require("../users");

router.use("/", home);
router.use("/about", about);
router.use("/blog", blog);
router.use("/blogcontents", blogcontents);
router.use("/support", support);
router.use("/supportform", supportform);
router.use("/contact", contact);
router.use("/uploads", uploads);
// router.use("/login", login);
// router.use("/users", users);

module.exports = router;