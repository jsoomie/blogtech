const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Post belongs to user
Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

// Post can have many comments
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});

// a comment belongs to a user
Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

module.exports = {
    User,
    Comment,
    Post,
};
