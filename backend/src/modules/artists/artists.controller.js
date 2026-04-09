import { findArtistById, listArtists } from "./artists.service.js";

export async function getArtists(_req, res) {
	try {
		const artists = await listArtists();
		return res.json({ data: artists });
	} catch (error) {
		console.error("Error listing artists:", error);
		return res.status(500).json({ message: "No se pudieron cargar los artistas." });
	}
}

export async function getArtistById(req, res) {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({ message: "El id del artista es obligatorio." });
	}

	try {
		const artist = await findArtistById(id);

		if (!artist) {
			return res.status(404).json({ message: "Artista no encontrado." });
		}

		return res.json({ data: artist });
	} catch (error) {
		console.error("Error loading artist by id:", error);
		return res.status(500).json({ message: "No se pudo cargar el artista." });
	}
}
