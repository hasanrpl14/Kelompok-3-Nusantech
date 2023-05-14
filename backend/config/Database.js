import {Sequelize} from "sequelize";

const db = new Sequelize('absensi_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;