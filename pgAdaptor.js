require('dotenv').config()
const pgPromise = require('pg-promise');

const pgp = pgPromise({});

const config = {
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "dhanda123"
};

const db = pgp(config);

exports.db = db;