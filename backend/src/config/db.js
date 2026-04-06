const { neon } = require("@neondatabase/serverless");

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
	throw new Error("DATABASE_URL is not set in environment variables");
}

const sql = neon(databaseUrl);

async function checkDbConnection() {
	await sql`select 1 as ok`;
}

module.exports = {
	sql,
	checkDbConnection,
};
