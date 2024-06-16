const host      = process.env.DB_HOST || "localhost";
const user      = process.env.DB_USER || "root";
const password  = process.env.DB_PASS || "hadil";
const database  = process.env.DB_DATABASE || "Restosducoeur_API";

module.exports = { host, user, password, database };