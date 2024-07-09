const AssetCategory = require("../models/AssetCategory");

exports.getAllAssetCategories = async () => {
  return await AssetCategory.findAll();
};

exports.addAssetCategory = async (categoryData) => {
  return await AssetCategory.create(categoryData);
};

// Add other service methods like updateAssetCategory, getAssetCategoryById, etc.
