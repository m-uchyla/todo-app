import { Router } from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo, getTodosPaginated } from '../controllers/todo.controller';
import { validateTodo } from '../middlewares/validate.middleware';


const router = Router();

// GET /todos - List all todos (optionally paginated via query params)
router.get('/', getTodos);

// GET /todos/paginated?page=1&limit=10 - List todos with pagination metadata
router.get('/paginated', getTodosPaginated);

// POST /todos - Create a new todo (requires { title })
router.post('/', validateTodo, createTodo);

// PUT /todos/:id - Update a todo by ID (requires { title, completed })
router.put('/:id', validateTodo, updateTodo);

// DELETE /todos/:id - Remove a todo by ID
router.delete('/:id', deleteTodo);

export default router;
