const assetService = require("../services/assetService");
const assetCategoryService = require("../services/assetCategoryService");

exports.getAllAssets = async (req, res) => {
  try {
    const assets = await assetService.getAllAssets();
    const categories = await assetCategoryService.getAllAssetCategories();
    res.render("assets", { assets, categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addAsset = async (req, res) => {
  try {
    await assetService.addAsset(req.body);
    res.redirect("/assets");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Similarly add other methods like updateAsset, getAssetById, etc.
