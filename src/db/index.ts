import 'server-only';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

export const db = drizzle(neon(process.env.POSTGRES_URL!));

export * from './schema';
