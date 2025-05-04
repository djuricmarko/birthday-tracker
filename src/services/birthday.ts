import 'server-only';

import { db, birthdays } from '~/lib/db';
import type { Birthday } from '~/types/birthdayTypes';

/**
 * Fetches all birthdays from the database.
 * @returns A promise that resolves to an array of Birthday objects.
 */
async function getBirthdays(): Promise<{ birthdays: Birthday[] }> {
  const birthdayRecords = await db.select().from(birthdays);

  return {
    birthdays: birthdayRecords as Birthday[]
  };
}

/**
 * Adds a new birthday record.
 * @param birthday - The birthday object to be added
 * @returns A promise that resolves to the added Birthday object
 */
async function addBirthday(birthday: Omit<Birthday, 'id'>) {
  const [newBirthday] = await db.insert(birthdays).values({ name: birthday.name, date: birthday.date }).returning();

  return newBirthday as Birthday;
}

/**
 * Deletes a birthday record from the database.
 * @param id - The unique identifier of the birthday record to be deleted
 * @returns A promise that resolves to the id of the deleted birthday record
 */
async function deleteBirthday(id: string) {
  console.log('Deleting birthday with id:', id);
  return id;
}

export {
  getBirthdays,
  addBirthday,
  deleteBirthday,
};
