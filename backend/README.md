# Backend - Express.js + PostgreSQL

This is a clean Express.js backend setup with PostgreSQL support using TypeScript.

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

## Example Endpoint
- `GET /` — Returns current time from PostgreSQL

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start development server:
   ```sh
   npm run dev
   ```
