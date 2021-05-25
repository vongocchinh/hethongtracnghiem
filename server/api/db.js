'use strict';
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' })
const mysql = require('mysql');
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE
})
module.exports = db
