import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const posts = sqliteTable('posts', {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  content: text().notNull(),
  createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text().default(sql`(CURRENT_TIMESTAMP)`),
});
