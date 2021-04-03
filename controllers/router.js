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
            loggedIn: req.session.loggedIn,
            username: req.session.name,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// gets dashboard page
router.get("/dashboard", auth, async (req, res) => {
    try {
        const userID = req.session.userID;
        const users = await Post.findAll({
            where: {
                id: userID,
            },
        });

        console.log(users);

        // RENDER
        res.render("dashboard", {
            title: "DASHBOARD",
            loggedIn: req.session.loggedIn,
            username: req.session.name,
        });
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
});

// gets details on a single blog
router.get("/dashboard/details/:id", auth, async (req, res) => {
    try {
        // insert get post id here

        // RENDER
        res.render("singlePost", {
            title: "POST DETAILS",
            loggedIn: req.session.loggedIn,
            username: req.session.name,
        });
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
});

router.get("/dashboard/add", auth, async (req, res) => {
    try {
        res.render("addPost", {
            title: "ADD POST",
            loggedIn: req.session.loggedIn,
            username: req.session.name,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// getslogin page
router.get("/login", (req, res) => {
    try {
        // RENDER
        res.render("login", {
            title: "LOGIN",
            loggedIn: req.session.loggedIn,
            username: req.session.name,
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
            loggedIn: req.session.loggedIn,
            username: req.session.name,
        });
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
});

module.exports = router;
