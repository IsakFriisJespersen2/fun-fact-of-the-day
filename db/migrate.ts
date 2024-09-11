// import 'dotenv/config';
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db, queryClient } from './db';

const main = async () => {
  console.log("Migrating database...");
  await migrate(db, { migrationsFolder: "./db/drizzle" });
  await queryClient.end();
  console.log("Database migrated successfully!");
};

main()

