import 'server-only';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { pgTable, text, date, uuid } from 'drizzle-orm/pg-core';
import { env } from '~/env';

const birthdays = pgTable('birthdays', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  date: date('date'),
  userId: uuid('userId').notNull(),
});

const db = drizzle(neon(env.POSTGRES_URL));

type Birthday = typeof birthdays.$inferSelect;
type NewBirthday = typeof birthdays.$inferInsert;

export { db, birthdays, type Birthday, type NewBirthday };
