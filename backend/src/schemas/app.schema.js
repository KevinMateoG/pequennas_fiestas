import { pgTable, uuid, text, boolean, timestamp, numeric } from "drizzle-orm/pg-core";

export const artistProfiles = pgTable("artist_profiles", {
    id: uuid("id").primaryKey(),
    userId: text("user_id").notNull().unique(),

    bio: text("bio"),
    contactPhone: text("contact_phone"),
    contactSocial: text("contact_social"),
    baseRate: numeric("base_rate", {precision:10, scale:2}),
    city: text("city"),
    converageArea: text("converage_area"),
    category: text("category")
})