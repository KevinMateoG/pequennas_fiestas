import { eq } from "drizzle-orm";

import { db } from "../../config/db.js";
import { artistProfiles, user } from "../../schemas/schema.js";

const FALLBACK_IMAGE_URL = "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80";

function toCatalogArtist(row) {
	const hourlyRate = Number.parseFloat(row.hourlyRate ?? "0");

	return {
		id: row.id,
		name: row.name ?? "Artista",
		category: row.category ?? "General",
		city: row.city ?? "No definida",
		bio: row.bio ?? "Este artista aun no ha completado su biografia.",
		contactSocial: row.contactSocial ?? "",
		contactPhone: row.contactPhone ?? "",
		imageUrl: row.imageUrl ?? FALLBACK_IMAGE_URL,
		hourlyRate: Number.isNaN(hourlyRate) ? 0 : hourlyRate,
		rating: 4.8,
	};
}

export async function listArtists() {
	const rows = await db
		.select({
			id: artistProfiles.id,
			name: user.name,
			category: artistProfiles.category,
			city: artistProfiles.city,
			bio: artistProfiles.bio,
			contactSocial: artistProfiles.contactSocial,
			contactPhone: artistProfiles.contactPhone,
			imageUrl: user.image,
			hourlyRate: artistProfiles.baseRate,
		})
		.from(artistProfiles)
		.leftJoin(user, eq(artistProfiles.userId, user.id));

	return rows.map(toCatalogArtist);
}

export async function findArtistById(id) {
	const rows = await db
		.select({
			id: artistProfiles.id,
			name: user.name,
			category: artistProfiles.category,
			city: artistProfiles.city,
			bio: artistProfiles.bio,
			contactSocial: artistProfiles.contactSocial,
			contactPhone: artistProfiles.contactPhone,
			imageUrl: user.image,
			hourlyRate: artistProfiles.baseRate,
		})
		.from(artistProfiles)
		.leftJoin(user, eq(artistProfiles.userId, user.id))
		.where(eq(artistProfiles.id, id))
		.limit(1);

	if (rows.length === 0) {
		return null;
	}

	return toCatalogArtist(rows[0]);
}
