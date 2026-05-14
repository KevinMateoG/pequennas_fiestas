import { pgTable, uuid, text, boolean, timestamp, numeric } from "drizzle-orm/pg-core";
import { user } from "./auth.schema";
import { decimal } from "drizzle-orm/gel-core";

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

export const bookings = pgTable("bookings", {
    id: uuid("id").primaryKey(),
    clientId: text('client_id').notNull().references(() => user.id),
    artistId: text('artist_id').notNull().references(() => user.id),
    eventDate: timestamp('event_date').notNull(),
    eventLocation: text('event_location').notNull(),
    description: text('description'),
    agreedPrice: decimal('agreed_price', {precision:10,scale:2}).notNull(),
    status: text('status').notNull().default('pendiente'),
    createdAt: timestamp('create_at').notNull().defaultNow(),
    updatedAt: timestamp('update_at').notNull().defaultNow()
    }
)