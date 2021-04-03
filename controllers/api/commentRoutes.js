const router = require("express").Router();
const { Comment } = require("../../models");
const auth = require("../../utils/auth");

// Just for postman
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.findAll();

        res.status(200).json(comments);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Creats new post based on user_id and post_id
router.post("/create", auth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.userID,
        });

        res.status(200).json(newComment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
