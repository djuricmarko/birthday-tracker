import { pgTable, text, date, uuid } from 'drizzle-orm/pg-core';

export const birthdays = pgTable('birthdays', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  date: date('date'),
});

export type Birthday = typeof birthdays.$inferSelect;
export type NewBirthday = typeof birthdays.$inferInsert;
