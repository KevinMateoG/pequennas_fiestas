import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set in environment variables");
}

export const sql = neon(databaseUrl);
export const db = drizzle(sql);

export async function checkDbConnection() {
    await sql`select 1 as ok`;
}

// Codigo de kevin
// import { Pool } from 'pg'
// import { drizzle } from 'drizzle-orm/node-postgres'

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: process.env.DATABASE_SSL === "false" ? false : {
//         rejectUnauthorized: false
//     }
// })

// export const db = drizzle(pool)
// export { pool }