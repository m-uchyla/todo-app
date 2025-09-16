import { db } from '../db/config';
import { TodosTable } from '../db/schemas';
import { Request, Response, NextFunction } from 'express';
import { eq } from 'drizzle-orm';


export async function getTodosPaginated(req: Request, res: Response, next: NextFunction) {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.max(Number(req.query.limit) || 10, 1);
    const offset = (page - 1) * limit;

    const todos = await db.select().from(TodosTable).limit(limit).offset(offset);
    // Use pg client for count
    const result = await db.$client.query('SELECT COUNT(*) FROM todos');
    const total = Number(result.rows[0].count);

    res.json({
      page,
      limit,
      total,
      todos,
    });
  } catch (err) {
    next(err);
  }
}


export async function getTodos(req: Request, res: Response, next: NextFunction) {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.max(Number(req.query.limit) || 10, 1);
    const offset = (page - 1) * limit;

    const todos = await db.select().from(TodosTable).limit(limit).offset(offset);
    // Use pg client for count
    const result = await db.$client.query('SELECT COUNT(*) FROM todos');
    const total = Number(result.rows[0].count);

    res.json({
      page,
      limit,
      total,
      todos,
    });
  } catch (err) {
    next(err);
  }
}

export async function createTodo(req: Request, res: Response, next: NextFunction) {
  try {
    const { title } = req.body;
    const [todo] = await db.insert(TodosTable).values({ title }).returning();
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
}

export async function updateTodo(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const { title, completed } = req.body;
    const [updated] = await db.update(TodosTable)
      .set({ title, completed })
      .where(eq(TodosTable.id, id))
      .returning();
    if (!updated) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function deleteTodo(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const [deleted] = await db.delete(TodosTable)
      .where(eq(TodosTable.id, id))
      .returning();
    if (!deleted) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
}
