const router = require("express").Router();
const { User } = require("../../models/User");

router.get("/", async (req, res) => {
    try {
        res.send("GET REQUEST");
        console.log("GET REQUEST");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        // Creates new user based on input
        const newUser = await User.create({
            username: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        // starts new session and saves them as logged in
        req.session.save(() => {
            req.session.userID = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;
        });

        res.json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
