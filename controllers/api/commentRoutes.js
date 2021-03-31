const router = require("express").Router();
const { Comment } = require("../../models");

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
router.post("/create", async (req, res) => {
    try {
        const newComment = await Comment.create({
            user_id: req.body.user_id,
            post_id: req.body.post_id,
            body: req.body.body,
        });

        res.status(200).json(newComment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
