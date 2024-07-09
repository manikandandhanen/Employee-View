const express = require("express");
const assetCategoryController = require("../controllers/assetCategoryController");

const router = express.Router();

router.get("/", assetCategoryController.getAllAssetCategories);
router.post("/", assetCategoryController.addAssetCategory);

// Add other routes like PUT, DELETE, etc.

module.exports = router;
