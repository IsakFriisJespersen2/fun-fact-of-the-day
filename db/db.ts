import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const queryClient = postgres('postgres://admin:admin@db:5432/database');
export const db = drizzle(queryClient);
