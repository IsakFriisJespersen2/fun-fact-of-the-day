CREATE TABLE IF NOT EXISTS "fact" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" text,
	"upVotes" numeric,
	"downVotes" numeric
);
