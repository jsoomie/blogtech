const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const Comment = sequelize.define("comment", {
    body: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Comment;
