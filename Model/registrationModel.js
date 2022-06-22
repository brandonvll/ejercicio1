const { DataTypes } = require("sequelize");
const { db } = require("../Conectdb/dataBase");

const Registration = db.define("registration", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: false,
  },
});

module.exports = { Registration };
