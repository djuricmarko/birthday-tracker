import 'server-only';

import { neon } from '@neondatabase/serverless';
import { Birthday } from '~/types/birthdayTypes';

const sql = neon(process.env.DATABASE_URL!);

/**
 * Fetches all birthdays from the database.
 * @returns A promise that resolves to an array of Birthday objects.
 */
export async function getBirthdays(): Promise<{ birthdays: Birthday[] }>{
  const birthdays = await sql`SELECT * FROM birthdays` as Birthday[];

  return {
    birthdays
  }
}
