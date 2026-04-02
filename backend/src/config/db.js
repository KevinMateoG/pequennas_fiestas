import { pool } from 'pg'
import { drizzle } from 'drizzle-orm/singlestore/driver'

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === "false" ? false : {
        rejectUnauthorized: false
    }
})

export const db = drizzle(pool)
export { pool }