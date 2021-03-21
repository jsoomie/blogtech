const express = require("express");
const router = express.Router();

// Testing home page
router.get("/", (req, res) => {
    res.render("index", {
        title: "BLOGTECH",
    });
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
