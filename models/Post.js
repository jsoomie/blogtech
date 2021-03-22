const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const Post = sequelize.define("post", {
    title: {
        type: Sequelize.STRING,
    },
    body: {
        type: Sequelize.STRING,
    },
});

module.exports = Post;
