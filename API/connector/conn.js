const fs = require('fs');
const mysql = require('mysql2')
const dotenv = require("dotenv");

dotenv.config()

const connection = mysql.createConnection({
    host: process.env.BANCO_STRING,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port:process.env.DATAPORT,
    // ssl:{ca:fs.readFileSync("")}

})


module.exports = connection;