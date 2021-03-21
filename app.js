// Mods
const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const Sequelize = require("sequelize");
require("dotenv").config();
const SequelizeStore = require("connect-session-sequelize");
const mysql = require("mysql2");
const session = require("express-session");
const bcrypt = require("bcrypt");

// Routes
const router = require("./controllers/router");

// Port
const PORT = process.env.PORT || 3001;

// engine settings
app.set("view engine", "hbs");
app.engine(
    "hbs",
    hbs({
        extname: "hbs",
        defaultLayout: "main",
    })
);

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(router);

// 404 catch all
app.use((req, res) => {
    res.status(404).render("404", {
        title: "404 - Page Not Found",
    });
});

// start server, will sequelize after working things work
app.listen(PORT, (err) => {
    if (err) {
        console.log(`ERR: ${err.message} ${err.stack}`);
    }
    console.log(`Server listening on port ${PORT}`);
});
