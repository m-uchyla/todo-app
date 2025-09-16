import { pgTable, serial, varchar, boolean } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }),
  completed: boolean('completed').default(false),
});
