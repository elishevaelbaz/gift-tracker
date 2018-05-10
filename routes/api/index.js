var router = require("express").Router();
var fetchRoutes = require("./fetch");
var noteRoutes = require("./notes");
var giftRoutes = require("./gifts");

router.use("/fetch", fetchRoutes);
router.use("/notes", noteRoutes);
router.use("/gifts", giftRoutes);

module.exports = router;
