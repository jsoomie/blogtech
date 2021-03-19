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

// Error message to be used
const errm = `ERR: ${err.message} ${err.stack}`;

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

// start server, will sequelize after working things work
app.listen(PORT, (err) => {
    if (err) {
        console.log(errm);
    }
    console.log(`Server listening on port ${PORT}`);
});
