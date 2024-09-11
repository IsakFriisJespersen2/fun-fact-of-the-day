import { serial, text, numeric, pgTable } from 'drizzle-orm/pg-core';

export const fact = pgTable('fact', {
	id: numeric('id').primaryKey(),
	fact: text('text'),
	upVotes: numeric('upVotes'),
	downVotes: numeric('downVotes')
});
