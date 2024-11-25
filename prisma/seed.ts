import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed tags
  const tag1 = await prisma.tag.create({ data: { name: "Fitness" } });
  const tag2 = await prisma.tag.create({ data: { name: "Health" } });

  // Seed blog posts
  await prisma.blogPost.create({
    data: {
      title: "10 Tips for Better Workouts",
      slug: "10-tips-for-better-workouts",
      content: "Here are some tips to improve your workouts...",
      author: "John Doe",
      image: "blog1.jpg",
      tags: {
        connect: [{ id: tag1.id }, { id: tag2.id }],
      },
    },
  });

  await prisma.blogPost.create({
    data: {
      title: "Understanding Nutrition Basics",
      slug: "understanding-nutrition-basics",
      content: "Nutrition plays a key role in your fitness journey...",
      author: "Jane Smith",
      image: "blog2.jpg",
      tags: {
        connect: [{ id: tag2.id }],
      },
    },
  });

  // Seed team members
  await prisma.team.createMany({
    data: [
      {
        name: "Alice Johnson",
        position: "CEO",
        image: "alice.jpg",
        quote: "Empowering people through fitness technology.",
      },
      {
        name: "Bob Carter",
        position: "CTO",
        image: "bob.jpg",
        quote: "Innovating the way we approach exercise.",
      },
    ],
  });

  // Seed Contact Form entry
  await prisma.contactForm.create({
    data: {
      name: "Test User",
      email: "test@example.com",
      reason: "General Inquiry",
      message: "This is a sample message.",
    },
  });
}

main()
  .then(async () => {
    console.log("Database seeded successfully.");
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Error seeding database:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
