const express = require("express");
const assetController = require("../controllers/assetController");

const router = express.Router();

router.get("/", assetController.getAllAssets);
router.post("/", assetController.addAsset);

// Add other routes like PUT, DELETE, etc.

module.exports = router;
