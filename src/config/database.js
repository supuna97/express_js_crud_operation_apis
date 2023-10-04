const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ejs_crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

// Test the connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("MySQL connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

module.exports = sequelize;
