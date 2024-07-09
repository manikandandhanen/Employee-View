const Asset = require("../models/Asset");

exports.getAllAssets = async () => {
  return await Asset.findAll({ include: "AssetCategory" });
};

exports.addAsset = async (assetData) => {
  return await Asset.create(assetData);
};

// Add other service methods like updateAsset, getAssetById, etc.
