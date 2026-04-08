import express from "express";
import cors from "cors";
import "dotenv/config"

import { toNodeHandler } from "better-auth/node";
import { auth } from "./config/auth.js";
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

// app.use(express.json)

app.use("/api/onboarding", onboardingRouter)
app.use("/api/artists", artistsRouter)
app.get("/health", (_req, res) => res.json({ ok: true }));

app.listen(process.env.PORT ?? 3000, () => {
  console.log(`Backend running on http://localhost:${process.env.PORT ?? 3000}`);
});