import 'server-only';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { pgTable, text, date, uuid } from 'drizzle-orm/pg-core';
import { env } from '~/env';

export const birthdays = pgTable('birthdays', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  date: date('date'),
  userId: uuid('userId').notNull(),
});

export const db = drizzle(neon(env.POSTGRES_URL));

export type Birthday = typeof birthdays.$inferSelect;
export type NewBirthday = typeof birthdays.$inferInsert;
