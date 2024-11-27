# Gwaan

This is the first update to the web application for Gwaan, a tech startup focused on using AI to analyse and improve exercise performance.

## Tech Stack
**Frontend** - Next.js, TypeScript, Tailwind CSS, ShadCN, Framer Motion

**Backend** - Prisma, PostgreSQL

**Database** - PostgreSQL (via Docker)

## Features

- Responsive design
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
git clone https://github.com/your-username/gwaan.git
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
- Create a .env.local file in the project root.
- Add the following (replace placeholders with your PostgreSQL credentials):

```bash
docker run --name postgres-db -e POSTGRES_USER=your_user -e POSTGRES_PASSWORD=your_password -e POSTGRES_DB=gwaan_db -p 5432:5432 -d postgres
```

5. **Apply Database Migrations**

```bash
npm prisma migrate:dev
```

6. **Start Development Server**

```bash
npm run dev
```
