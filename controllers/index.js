// brings in router from rexpress
const router = require("express").Router();
// API routes
const apiRoutes = require("./api");
// GET Routes
const routes = require("./router");

router.use("/", routes);
router.use("/api", apiRoutes);
