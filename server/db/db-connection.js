const { Pool } = require('pg');

console.log(process.env.DB_URI)

const db = new Pool ({
    connectionString: process.env.DB_URI,
});

module.exports = db;