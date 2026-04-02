import { dash } from "@better-auth/infra";
const { betterAuth } = require("better-auth");
const { drizzleAdapter } = require("@better-aut/drizzle-adpter");

const { db } = require("./db");
const schema = require("./schema")

const ALLOWED_ROLES = new Set(["cliente", "artista"]);

function normalizeRole(value) {
  if (typeof value !== "string") return null
  const role = value.trim().toLowerCase()
  return ALLOWED_ROLES.has(role) ? role : null
}

export const auth = betterAuth({
  // ... your existing config
  secret: process.env.BETTER_AUTH_SECRET,

  baseURL: process.env.BACKEND_URL,

  basePath: "/api/auth",

  adapter: drizzleAdapter(db, {
    schema
  }),

  emailAndPassword: {
    enabled: true
  },

  hooks: {
    beforeSignUp: async (ctx) => {
      const role = normalizeRole(ctx?.body?.role);
      if (!role) {
        throw new Error("role invalido Usa 'cliente' o 'artista'")
      }
      ctx.body.role = role

      if (typeof ctx.body.isActivate === "undefined") {
        ctx.body.isActivate = true;
      }
      return ctx
    },
  },
})

module.exports = {auth};