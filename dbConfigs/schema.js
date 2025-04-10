import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

// users - table name with these cols
export const USER_TABLE = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar().notNull(),
  email: varchar().notNull(),
  isMemeber: boolean().default(false),
});
