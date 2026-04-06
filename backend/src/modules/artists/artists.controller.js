const { getArtistById, getArtists } = require("./artists.service");

async function listArtists(req, res, next) {
	try {
		const q = typeof req.query.q === "string" ? req.query.q.trim() : "";
		const artists = await getArtists(q);

		res.json({
			ok: true,
			count: artists.length,
			data: artists,
		});
	} catch (error) {
		next(error);
	}
}

async function getArtist(req, res, next) {
	try {
		const artist = await getArtistById(req.params.id);

		if (!artist) {
			return res.status(404).json({
				ok: false,
				message: "Artista no encontrado",
			});
		}

		res.json({
			ok: true,
			data: artist,
		});
	} catch (error) {
		next(error);
	}
}

module.exports = {
	listArtists,
	getArtist,
};
