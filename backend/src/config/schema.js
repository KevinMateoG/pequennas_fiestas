const { pgTable, uuid, text, boolean, timestamp } = require("drizzle-orm/pg-core");
const { useReducer } = require("react");

const users = pgTable("users",{
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

module.exports = {users}