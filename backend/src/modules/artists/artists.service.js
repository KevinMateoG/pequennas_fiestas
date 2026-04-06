const { sql } = require("../../config/db");

function pickFirst(obj, keys, fallback = null) {
	for (const key of keys) {
		if (obj[key] !== undefined && obj[key] !== null && obj[key] !== "") {
			return obj[key];
		}
	}

	return fallback;
}

function normalizeArtist(row, index) {
	return {
		id: pickFirst(row, ["id", "artist_id"], `artist-${index + 1}`),
		name: pickFirst(row, ["name", "full_name", "artist_name"], "Unknown artist"),
		category: pickFirst(row, ["category", "specialty", "discipline"], "Creative"),
		rating: Number(pickFirst(row, ["rating", "avg_rating"], 0)),
		hourlyRate: Number(pickFirst(row, ["hourly_rate", "price_per_hour", "rate"], 0)),
		bio: pickFirst(row, ["bio", "description"], "Sin descripcion disponible."),
		city: pickFirst(row, ["city", "location"], "Ubicacion no especificada"),
		contactSocial: pickFirst(row, ["contact_social", "social"], null),
		contactPhone: pickFirst(row, ["contact_phone", "phone"], null),
		imageUrl: pickFirst(
			row,
			["image_url", "avatar_url", "photo_url", "profile_image"],
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
		),
	};
}

async function getArtists(search = "") {
	const artistsTableCheck = await sql`select to_regclass('public.artists') as table_name`;
	let normalized = [];

	if (artistsTableCheck[0]?.table_name) {
		const rows = await sql`select * from public.artists limit 200`;
		normalized = rows.map(normalizeArtist);
	} else {
		const profilesTableCheck = await sql`select to_regclass('public.artist_profiles') as table_name`;

		if (!profilesTableCheck[0]?.table_name) {
			return [];
		}

		const rows = await sql`
			select
				ap.id,
				ap.category,
				ap.base_rate as hourly_rate,
				u.name,
				u.image as image_url
			from public.artist_profiles ap
			left join public."user" u on u.id = ap.user_id
			limit 200
		`;

		normalized = rows.map(normalizeArtist);
	}

	if (!search) {
		return normalized;
	}

	const query = search.toLowerCase();
	return normalized.filter((artist) => artist.name.toLowerCase().includes(query));
}

async function getArtistById(id) {
	const artistsTableCheck = await sql`select to_regclass('public.artists') as table_name`;

	if (artistsTableCheck[0]?.table_name) {
		const rows = await sql`select * from public.artists where id = ${id} limit 1`;
		if (rows[0]) {
			return normalizeArtist(rows[0], 0);
		}
	}

	const profilesTableCheck = await sql`select to_regclass('public.artist_profiles') as table_name`;
	if (!profilesTableCheck[0]?.table_name) {
		return null;
	}

	const rows = await sql`
		select
			ap.id,
			ap.category,
			ap.base_rate as hourly_rate,
			ap.bio,
			ap.city,
			ap.contact_social,
			ap.contact_phone,
			u.name,
			u.image as image_url
		from public.artist_profiles ap
		left join public."user" u on u.id = ap.user_id
		where ap.id = ${id}
		limit 1
	`;

	if (!rows[0]) {
		return null;
	}

	return normalizeArtist(rows[0], 0);
}

module.exports = {
	getArtists,
	getArtistById,
};
