const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { checkDbConnection, sql } = require("./config/db");
const artistsRoutes = require("./modules/artists/artists.routes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN ?? "http://localhost:5173",
    credentials: true,
  })
);

app.get("/health", (_req, res) => res.json({ ok: true }));

app.get("/health/db", async (_req, res, next) => {
  try {
    const result = await sql`select now() as now`;
    res.json({ ok: true, dbTime: result[0].now });
  } catch (error) {
    next(error);
  }
});

app.get("/api/db/tables", async (_req, res, next) => {
  try {
    const tables = await sql`
      select table_name
      from information_schema.tables
      where table_schema = 'public'
      and table_type = 'BASE TABLE'
      order by table_name
    `;

    res.json({
      ok: true,
      count: tables.length,
      data: tables.map((table) => table.table_name),
    });
  } catch (error) {
    next(error);
  }
});

app.use("/api/artists", artistsRoutes);
app.use(errorHandler);

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