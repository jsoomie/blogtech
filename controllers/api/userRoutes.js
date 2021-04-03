const router = require("express").Router();
const { User } = require("../../models");

// This isn't needed for the app, but used for postman to get to view.
router.get("/", async (req, res) => {
    try {
        const users = await User.findAll({
            raw: true,
        });

        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Creates new user
router.post("/create", async (req, res) => {
    try {
        // Creates new user based on input
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        // starts new session and saves them as logged in
        req.session.save(() => {
            req.session.userID = newUser.id;
            req.session.name = newUser.name;
            req.session.loggedIn = true;
        });

        res.status(200).json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// login
router.post("/login", async (req, res) => {
    try {
        // compares user based on body input of name
        const user = await User.findOne({
            where: {
                name: req.body.name,
            },
        });

        // if no user is found return
        if (!user) {
            res.status(400).json({
                message: "No user!",
            });
            return;
        }

        // grabs user's password and compares it
        const password = user.checkPassword(req.body.password);

        // if no password is found return
        if (!password) {
            res.status(400).json({
                message: "No password!",
            });
            return;
        }

        // creates session for user
        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.name = user.name;
            req.session.loggedIn = true;
        });

        res.status(200).json({
            message: "You are now logged in!",
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// logout destroys session
router.post("/logout", async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
