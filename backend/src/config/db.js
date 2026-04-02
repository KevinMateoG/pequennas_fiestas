import { Pool } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === "false" ? false : {
        rejectUnauthorized: false
    }
})

export const db = drizzle(pool)
export { pool }