import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "./db.js";
import * as schema from "./schema.js";

export const auth = betterAuth({
  // ... your existing config
  secret: process.env.BETTER_AUTH_SECRET,

  baseURL: process.env.BACKEND_URL,

  basePath: "/api/auth",

  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
      user: schema.users,
    },
  }),

  emailAndPassword: {
    enabled: true,
  },
});
