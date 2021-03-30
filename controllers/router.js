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
            include: [User],
            raw: true,
        });

        console.log(posts);

        // RENDER
        res.render("index", {
            title: "BLOGTECH",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Testing dashboard page
router.get("/dashboard", (req, res) => {
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
