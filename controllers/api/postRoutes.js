const router = require("express").Router();
const { Post } = require("../../models");
const auth = require("../../utils/auth");

// Just for postman to view
router.get("/", auth, async (req, res) => {
    try {
        const posts = await Post.findAll();

        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Creates new post
router.post("/create", auth, async (req, res) => {
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
