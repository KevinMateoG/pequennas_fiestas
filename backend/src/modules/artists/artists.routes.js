import express from "express";

import { getArtistById, getArtists } from "./artists.controller.js";

export const artistsRouter = express.Router();

artistsRouter.get("/", getArtists);
artistsRouter.get("/:id", getArtistById);
