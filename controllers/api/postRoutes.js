const router = require("express").Router();
const { Post } = require("../../models");
const auth = require("../../utils/auth");

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
router.post("/create", auth, async (req, res) => {
    try {
        const newPost = await Post.create({
            user_id: req.session.userID,
            title: req.body.title,
            body: req.body.body,
        });

        res.json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// updates post
router.put("/details/:id", auth, async (req, res) => {
    try {
        const [edited] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        res.status(200);

        // RENDER
        res.render("singlePost", {
            title: "POST DETAILS",
            loggedIn: req.session.loggedIn,
            username: req.session.name,
        });
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
});

// deletes post
router.delete("/details/:id", auth, (req, res) => {
    try {
        const [edited] = Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (edited > 0) {
            res.status(200);
        } else {
            res.status(500);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
