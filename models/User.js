const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const User = sequelize.define("user", {
    username: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
});

module.exports = User;
