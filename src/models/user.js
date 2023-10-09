const { DataTypes } = require("sequelize");
const db = require("../config/database"); // Configure your database

const User = db.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "users", // Specify your custom table name here
  }
);

module.exports = User;
