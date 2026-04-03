import { pgTable, uuid, text, boolean, timestamp, numeric } from "drizzle-orm/pg-core";

export const artistProfiles = pgTable("artist_profiles", {
    id: uuid("id").primaryKey(),
    userId: text("userId").notNull().unique(),

    bio: text("bio"),
    contactPhone: text("contactPhone"),
    contactSocial: text("contactSocial"),
    baseRate: numeric("baseRate", {precision:10, scale:2}),
    city: text("city"),
    converageArea: text("converageArea"),
    category: text("category")
})