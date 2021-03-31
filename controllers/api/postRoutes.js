const router = require("express").Router();
const { Post } = require("../../models");

// Just for postman to view
router.get("/", async (req, res) => {
    try {
        const posts = await Post.findAll();

        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Creates new post
router.post("/create", async (req, res) => {
    try {
        const newPost = await Post.create({
            user_id: req.body.user_id,
            title: req.body.title,
            body: req.body.body,
        });

        res.json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
