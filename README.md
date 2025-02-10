# Gwaan

This is the first update to the web Gwaan website, a tech startup focused on fitness through AI-driven solutions. The Gwaan app leverages technology to analyse your exercise movements, offering real-time feedback for improved form, and progress tracking. This platform is the hub for their mission to make personalised fitness guidance accessible to everyone.

## Tech Stack

**Framework** - Next.js

**Frontend** - TypeScript, Tailwind CSS, ShadCN, Framer Motion

**Backend** - Prisma, API routes (in Next.js)

**Database** - PostgreSQL (via Docker)

## Features

- Contact form with validation using React Hook Form and Zod
- Team and Blog populated from the database
- UI using Tailwind CSS and ShadCN components

## Getting Started

Ensure you have the following installed: 
- Node.js
- Docker
- Git


1. **Clone the Repository**

```bash
git clone https://github.com/leon-bw/gwaan.git
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables**
- Create a .env.local file in the project root.
- Add the following (replace placeholders with your PostgreSQL credentials):

```bash
DATABASE_URL="postgresql://your_user:your_password@localhost:5432/gwaan_db"
```

4. **Run PostgreSQL with Docker**

- If you haven't already started your PostgreSQL container, you can do so with the following command. This step will create and run a PostgreSQL instance using Docker:

- If you get a port clash after replacing the placeholders, simply try a different port on your local machine

```bash
docker run --name postgres-db -e POSTGRES_USER=your_user -e POSTGRES_PASSWORD=your_password -e POSTGRES_DB=gwaan_db -p 5432:5432 -d postgres
```

5. **Apply Database Migrations**
- Apply the database migrations to set up your schema in PostgreSQL

```bash
npm prisma migrate:dev
```

6. **Start Development Server**

```bash
npm run dev
```
