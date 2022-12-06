const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "6135213120",
    host: "localhost",
    port: 5432,
    database: "lookinnabook"
});

module.exports = pool;