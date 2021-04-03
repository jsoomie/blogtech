// brings in router
const router = require("express").Router();
// brings the auth in // will user later
const auth = require("../utils/auth");

const { User, Post, Comment } = require("../models");

// GET homepage
router.get("/", auth, async (req, res) => {
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

// gets dashboard page
router.get("/dashboard", auth, async (req, res) => {
    try {
        const userID = req.body.user_id;
        const users = await User.findAll();

        // RENDER
        res.render("dashboard", {
            title: "DASHBOARD",
        });
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
});

// gets details on a single blog
router.get("/dashboard/details/:id", async (req, res) => {
    try {
        // insert get post id here

        // RENDER
        res.render("singlePost", {
            title: "POST DETAILS",
        });
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
});

// getslogin page
router.get("/login", (req, res) => {
    try {
        // RENDER
        res.render("login", {
            title: "LOGIN",
        });
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
});

// gets signup page
router.get("/signup", (req, res) => {
    try {
        // RENDER
        res.render("signup", {
            title: "SIGN UP",
        });
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
});

module.exports = router;
