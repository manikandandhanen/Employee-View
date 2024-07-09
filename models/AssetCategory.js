const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const AssetCategory = sequelize.define("AssetCategory", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = AssetCategory;
