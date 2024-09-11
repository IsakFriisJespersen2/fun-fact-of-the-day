import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './db/schemas/fact.ts',
	out: './db/drizzle',
	dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
	dbCredentials: {
		host: 'db',
		user: 'admin',
		password: 'admin',
		database: 'database'
	}
});
