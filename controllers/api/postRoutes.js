const router = require("express").Router();
const { Post } = require("../../models");

router.post("/create", async (req, res) => {
    try {
        console.log("Post post");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
