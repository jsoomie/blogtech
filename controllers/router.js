// brings in router
const router = require("express").Router();
// brings the auth in // will user later
const auth = require("../utils/auth");

const { User, Post, Comment } = require("../models");

// GET homepage
router.get("/", async (req, res) => {
    try {
        const posts = await Post.findAll({
            exclude: ["createdAt", "updatedAt"],
            include: [
                {
                    model: User,
                    required: true,
                    attributes: ["name"],
                    exclude: ["password", "createdAt", "updatedAt"],
                },
                {
                    model: Comment,
                    required: true,
                    attributes: ["user_id", "body"],
                    include: [User],
                },
            ],
        });

        const postings = posts.map((post) => post.get({ plain: true }));

        // testing only
        // posts.forEach((user) => console.log(user.toJSON()));

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

router.get("/dashboard/details/:id", async (req, res) => {
    try {
        // insert get post id here
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
    res.render("singlePost", {
        title: "POST DETAILS",
    });
});

// testing login page
router.get("/login", (req, res) => {
    res.render("login", {
        title: "LOGIN",
    });
});

module.exports = router;
