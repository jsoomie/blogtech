// brings in router
const router = require("express").Router();
// brings the auth in // will user later
const auth = require("../utils/auth");

const { User, Post, Comment } = require("../models");

// GET homepage
router.get("/", async (req, res) => {
    try {
        console.log("This is the backend");
        const posts = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: { exclude: "password" },
                },
            ],
        });

        const postings = posts.map((post) => post.get({ plain: true }));

        // RENDER
        res.render("index", {
            title: "BLOGTECH",
            postings,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Testing dashboard page
router.get("/dashboard", async (req, res) => {
    const users = await User.findAll();
    res.render("dashboard", {
        title: "DASHBOARD",
    });
});

// testing login page
router.get("/login", (req, res) => {
    res.render("login", {
        title: "LOGIN",
    });
});

module.exports = router;
