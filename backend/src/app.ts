import express from 'express';
import todoRouter from './routes/todo.routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();
app.use(express.json());

app.use('/todos', todoRouter);
app.use(errorMiddleware);

export default app;
