const { Sequelize } = require("sequelize");

const db = new Sequelize('absensi_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;
