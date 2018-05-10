var router = require("express").Router();
var fetchController = require("../../controllers/fetch");

router.get("/", fetchController.scrapeGifts);

module.exports = router;