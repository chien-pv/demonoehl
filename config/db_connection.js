const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("demonodehl", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
