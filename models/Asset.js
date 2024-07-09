const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config");
const AssetCategory = require("./AssetCategory");

const Asset = sequelize.define("Asset", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  serialNumber: { type: DataTypes.STRING, allowNull: false, unique: true },
  name: { type: DataTypes.STRING, allowNull: false },
  status: {
    type: DataTypes.ENUM("in stock", "issued", "scrapped"),
    allowNull: false,
  },
});

Asset.belongsTo(AssetCategory);

module.exports = Asset;
