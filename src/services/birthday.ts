import 'server-only';

import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function getBirthdays() {
  const birthdays = await sql`SELECT * FROM birthdays`
  return {
    birthdays
  }
}
