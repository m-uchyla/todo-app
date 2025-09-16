
# Backend - Express.js + PostgreSQL + DrizzleORM

This is a scalable Express.js backend setup with PostgreSQL and DrizzleORM, using TypeScript.

## Scripts
- `npm run dev` — Start development server with nodemon
- `npm run build` — Compile TypeScript
- `npm start` — Run compiled server

## PostgreSQL Connection
Edit your environment variables for database connection in `.env` or set them in your shell:
- PGUSER
- PGPASSWORD
- PGHOST
- PGDATABASE
- PGPORT

## API Endpoints
- `GET /todos` — List all todos (optionally paginated via query params)
- `GET /todos/paginated?page=1&limit=10` — List todos with pagination metadata
- `POST /todos` — Create a new todo (requires `{ title }`)
- `PUT /todos/:id` — Update a todo by ID (requires `{ title, completed }`)
- `DELETE /todos/:id` — Remove a todo by ID

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start development server:
   ```sh
   npm run dev
   ```

## File Structure & Explanations

```
backend/
├── src/
│   ├── app.ts                      # Express app setup (middleware, routers)
│   ├── server.ts                   # Server entrypoint (starts app)
│   ├── db/                         # Database connection & schema
│   │   ├── config.ts               # Database settings and migration
│   │   └── schemas                 # Todos table definition
│   ├── controllers/                # Route handlers
│   │   └── todo.controller.ts      # CRUD logic for todos
│   ├── routes/                     # Express routers
│   │   └── todo.routes.ts          # Todo API routes
│   ├── middlewares/                # Custom middleware (validation, error)
│   │   ├── error.middleware.ts     # Centralized error handler
│   │   └── validate.middleware.ts  # Request validation for todos
│   ├── utils/                      # Utility functions/helpers
│   │   └── db-helpers.ts           # (reserved for DB helpers)
│   └── types/                      # Custom TypeScript types
│       └── todo.types.ts           # Todo type definition
├── package.json
├── tsconfig.json
└── README.md
```

This structure separates concerns for scalability and maintainability. Each layer (routes, controllers, middlewares, etc.) is modular and easy to extend.
