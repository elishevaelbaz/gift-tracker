var router = require("express").Router();
var giftController = require("../../controllers/gift");

router.get("/", giftController.findAll);
router.delete("/:id", giftController.delete);
router.put("/:id", giftController.update);

module.exports = router;
