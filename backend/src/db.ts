import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { todos } from './schema';

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
      ('Sample Todo 2', true)
    ON CONFLICT DO NOTHING;
  `);
}

export { db, migrate };
