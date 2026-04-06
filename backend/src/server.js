const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { checkDbConnection, sql } = require("./config/db");

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