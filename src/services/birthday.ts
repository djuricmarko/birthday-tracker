import 'server-only';

import { db, birthdays } from '~/db';
import type { Birthday } from '~/types/birthdayTypes';

/**
 * Fetches all birthdays from the database.
 * @returns A promise that resolves to an array of Birthday objects.
 */
export async function getBirthdays(): Promise<{ birthdays: Birthday[] }> {
  const birthdayRecords = await db.select().from(birthdays);
  console.log(birthdayRecords);

  return {
    birthdays: birthdayRecords as Birthday[]
  };
}
