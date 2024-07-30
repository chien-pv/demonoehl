const sequelize = require("../config/db_connection");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
  {
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    // paranoid: true,
  }
);

module.exports = User;
