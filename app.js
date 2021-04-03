// Mods
const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const session = require("express-session");

// brings in db connection
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Routes
const router = require("./controllers");

// Port
const PORT = process.env.PORT || 3001;

// Seesion setup
const sess = {
    secret: "Super hush hush",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

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

// Routers
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
