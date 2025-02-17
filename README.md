# Blog Post Management App

This project is a blog post management app that enables users to create and view blog posts. It includes both a frontend and a backend, with the backend built using `Wrangler` (Cloudflare Workers) and the frontend built using `React`, `Vite`, and `Tailwind CSS`.

## Features

- **Create Blog Posts**: Users can create new blog posts with a title and content.
- **Display All Posts**: Users can view all posts, and each post has a delete button for removal.
- **Authentication**: Users can sign in and sign up using JWT-based authentication.

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (for running backend and frontend)
- [PostgreSQL](https://www.postgresql.org/) (for the database)
- [Vite](https://vitejs.dev/) (for building the frontend)
- [Prisma](https://www.prisma.io/) (for managing the database)

## Installation

### Backend

1. **Clone the repository**:

    ```bash[
    git clone https://github.com/eternalbasic1/Medium
    cd backend
    ```

2. **Install backend dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory of the backend and add the following configuration:

    ```bash
    BACKEND_URL=http://localhost:8787
    DATABASE_URL="postgres://username:password.h.aivencloud.com:23942/defaultdb?sslmode=require"
    JWT_SECRET="SECRET"
    ```
    In  `.env` file in the root directory of the backend and add the following configuration:

    ```bash
    DATABASE_URL="Prisma accelerator URL" // go to official prisma & create prisma accelerator using already created postgres DB URL
    JWT_SECRET="SECRET"
    ```
    
4. **Start the backend**:

    To run the backend locally for development, use:

    ```bash
    npm run dev
    ```

    To deploy the backend, use:

    ```bash
    npm run deploy
    ```

---

### Frontend

1. **Clone the repository** (if you haven't already):

    ```bash
    git clone https://github.com/eternalbasic1/Medium
    cd frontend
    ```

2. **Install frontend dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `config.ts` file in the src directory of the frontend and add the following configuration:

    ```bash
    export const BACKEND_URL = "http://localhost:8787/api/v1";
    ```

4. **Start the frontend**:

    To run the frontend locally for development, use:

    ```bash
    npm run dev
    ```

---

## Folder Structure

### Backend

- **`src/index.ts`**: Main entry point for the backend API using `Wrangler`.
- **`prisma/schema.prisma`**: Prisma schema for the database model. (Please apply migrations)
- **`src/api`**: Contains the API routes for managing posts.

### Frontend

- **`src/App.tsx`**: Main entry point for the React application.
- **`src/components/`**: Contains reusable components such as `TopBar` and `TextEditor`.
- **`src/pages/`**: Contains page components like `Publish` for creating blog posts.

## Common 
- **cd Common 
- **npm install
