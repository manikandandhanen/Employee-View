const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const Employee = sequelize.define("Employee", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.ENUM("active", "inactive"), allowNull: false },
});

module.exports = Employee;
