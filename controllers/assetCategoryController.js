const assetCategoryService = require("../services/assetCategoryService");

exports.getAllAssetCategories = async (req, res) => {
  try {
    const categories = await assetCategoryService.getAllAssetCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addAssetCategory = async (req, res) => {
  try {
    await assetCategoryService.addAssetCategory(req.body);
    res.redirect("/asset-categories");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Similarly add other methods like updateAssetCategory, getAssetCategoryById, etc.
