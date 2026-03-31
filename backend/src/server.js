const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN ?? "http://localhost:5173",
    credentials: true,
  })
);

app.get("/health", (_req, res) => res.json({ ok: true }));

app.listen(process.env.PORT ?? 3000, () => {
  console.log(`Backend running on http://localhost:${process.env.PORT ?? 3000}`);
});