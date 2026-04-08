import express from "express";
import cors from "cors";
import "dotenv/config"

import { toNodeHandler } from "better-auth/node";
import { auth } from "./config/auth.js";
import { checkDbConnection, sql } from "./config/db.js";
import { onboardingRouter } from "./modules/auth/onboarding.routes.js";
import { artistsRouter } from "./modules/artists/artists.routes.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN ?? "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", toNodeHandler(auth))

app.use("/api/onboarding", onboardingRouter)
app.use("/api/artists", artistsRouter)
app.get("/health", (_req, res) => res.json({ ok: true }));

app.get("/health/db", async (_req, res, next) => {
  try {
    const result = await sql`select now() as now`;
    return res.json({ ok: true, dbTime: result[0]?.now ?? null });
  } catch (error) {
    return next(error);
  }
});

app.get("/api/db/tables", async (_req, res, next) => {
  try {
    const result = await sql`
      select table_name
      from information_schema.tables
      where table_schema = 'public'
      and table_type = 'BASE TABLE'
      order by table_name
    `;

    return res.json({
      ok: true,
      count: result.length,
      data: result.map((table) => table.table_name),
    });
  } catch (error) {
    return next(error);
  }
});

app.use((error, _req, res, _next) => {
  console.error(error);
  return res.status(500).json({
    ok: false,
    message: error?.message ?? "Internal Server Error",
  });
});

async function startServer() {
  try {
    await checkDbConnection();
    const port = process.env.PORT ?? 3000;

    app.listen(port, () => {
      console.log(`Backend running on http://localhost:${port}`);
      console.log("Neon DB connection: OK");
    });
  } catch (error) {
    console.error("Neon DB connection: FAIL");
    console.error(error);
    process.exit(1);
  }
}

startServer();

// Codigo de Kevin
// import express from "express";
// import cors from "cors";
// import "dotenv/config"

// import { toNodeHandler } from "better-auth/node";
// import { auth } from "./config/auth.js";
// import { onboardingRouter } from "./modules/auth/onboarding.routes.js";

// const app = express();

// app.use(express.json());

// app.use(
//   cors({
//     origin: process.env.FRONTEND_ORIGIN ?? "http://localhost:5173",
//     credentials: true,
//   })
// );

// app.use("/api/auth", toNodeHandler(auth))

// app.use(express.json());

// app.use("/api/onboarding", onboardingRouter)
// app.get("/health", (_req, res) => res.json({ ok: true }));

// app.listen(process.env.PORT ?? 3000, () => {
//   console.log(`Backend running on http://localhost:${process.env.PORT ?? 3000}`);
// });