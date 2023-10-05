const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Configure your database connection

const User = sequelize.define(
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

// Synchronize the model with the database (create the table)
// sequelize
//   .sync()
//   .then(() => {
//     console.log("Table created successfully");
//   })
//   .catch((err) => {
//     console.error("Error creating table:", err);
//   });

module.exports = User;
