import { Request, Response, NextFunction } from 'express';

export function validateTodo(req: Request, res: Response, next: NextFunction) {
  const { title } = req.body;
  if (typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'Title is required and must be a non-empty string.' });
  }
  next();
}
