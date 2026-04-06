const express = require("express");
const { getArtist, listArtists } = require("./artists.controller");

const router = express.Router();

router.get("/", listArtists);
router.get("/:id", getArtist);

module.exports = router;
