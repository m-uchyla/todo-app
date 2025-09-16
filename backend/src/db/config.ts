import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'todo',
  password: process.env.PGPASSWORD || 'postgres',
  port: Number(process.env.PGPORT) || 5432,
});

const db = drizzle(pool);

// Migration: create table and insert dummy data
async function migrate() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255),
      completed BOOLEAN DEFAULT FALSE
    );
  `);
  await db.execute(`
    INSERT INTO todos (title, completed) VALUES
      ('Sample Todo 1', false),
      ('Sample Todo 2', true),
      ('Sample Todo 3', false),
      ('Sample Todo 4', true),
      ('Sample Todo 5', false),
      ('Sample Todo 6', true),
      ('Sample Todo 7', false),
      ('Sample Todo 8', true),
      ('Sample Todo 9', false),
      ('Sample Todo 10', true)
    ON CONFLICT DO NOTHING;
  `);
}

export { db, migrate };
