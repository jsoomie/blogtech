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
const { urlencoded } = require("express");

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

// Test
app.get("/", (req, res) => {
    res.render("index", {
        title: "Home",
    });
});

// start server, will sequelize after working things work
app.listen(PORT, (err) => {
    if (err) {
        console.log(`ERR: ${err.message} ${err.stack}`);
    }
    console.log(`Server listening on port ${PORT}`);
});
