const express = require("express");
const router = express.Router();

// API routes
const apiRoutes = require("./api");
// GET Routes
const routes = require("./router");

router.use("/", routes);
// router.use("/api", apiRoutes);

module.exports = router;
