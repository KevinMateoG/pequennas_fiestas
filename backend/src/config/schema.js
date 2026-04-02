import { pgTable, uuid, text, boolean, timestamp, numeric } from "drizzle-orm/pg-core";

export const users = pgTable("users",{
    id: uuid("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("emailVerified").notNull().default(false),

    image: text("image"),

    role: text("role").notNull(),
    isActive: boolean("isActive").notNull().default(true),

    createAt: timestamp("createAt", {withTimezone:false}).notNull().defaultNow(),

    }
);

export const artistProfiles = pgTable("artist_profiles", {
    id: uuid("id").primaryKey(),
    userId: uuid("userId").notNull().unique(),

    bio: text("bio"),
    contactPhone: text("contactPhone"),
    contactSocial: text("contactSocial"),
    baseRate: numeric("baseRate", {precision:10, scale:2}),
    city: text("city"),
    converageArea: text("converageArea"),
    category: text("category")
})