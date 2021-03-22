require("dotenv").config();
const Sequelize = require("sequelize");

const env = process.env;

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
    host: env.DB_HOST,
    dialect: "mysql",
    dialectOptions: { decimalNumbers: true },
});

module.exports = sequelize;
