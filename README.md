# Gwaan - AI Powered Fitness App

This is the first update to the web Gwaan website, a tech startup focused on fitness through AI-driven solutions. The Gwaan app leverages technology to analyse your exercise movements, offering real-time feedback for improved form, and progress tracking. This platform is the hub for their mission to make personalised fitness guidance accessible to everyone.

## Tech Stack

**Framework** - Next.js

**Frontend** - Tailwind CSS, ShadCN, Framer Motion

**ORM** - Prisma

**Database** - PostgreSQL via Supabase

**Form Handling** - React Hook Form with Zod validation

**Icons** - Lucide React and Hugeicons

## Features

- Fully responsive across all device sizes
- Blog with categories and tags
- Contact form with validation and server side processing
- Subtle animations to improve user experience
- UI using Tailwind CSS and ShadCN components


## Project Structure

```
gwaan/
├── app/                  # Next.js App Router
│   ├── (root)/           # Homepage routes
│   ├── about/            # About page
│   ├── actions/          # Server actions
│   ├── blog/             # Blog pages
│   │   └── [slug]/       # Individual blog post pages
│   └── contact-us/       # Contact page
├── components/           # UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── prisma/               # Prisma schema and migrations
│   ├── migrations/       # Database migrations
│   └── schema.prisma     # Database schema
└── public/               # Static assets
```

## Database Schema

The application uses the following data models:

- **BlogPost**: Blog articles with title, content, image and tags
- **Tag**: Tags for blog posts
- **Team**: Team member profiles
- **ContactForm**: Submitted contact form data


## Acknowledgements


*"Empowering Fitness for All"*
