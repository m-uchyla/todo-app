import express from 'express';
import { migrate, db } from './db';
import { todos } from './schema';

const app = express();
const port = process.env.PORT || 3001;

// Run migration and insert dummy data
migrate().then(() => {
  console.log('Migration complete');
});

app.get('/', (req, res) => {
  res.send('Express + DrizzleORM API');
});

// Sample GET /todos endpoint
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await db.select().from(todos);
    res.json(allTodos);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
