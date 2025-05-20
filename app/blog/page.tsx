import BlogCard from "@/components/BlogCard";
import PageHeader from "@/components/PageHeader";
import prisma from "@/lib/db";

const Blog = async () => {
  const blogPosts = await prisma.blogPost.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      tags: true,
    },
  });

  return (
    <>
      <PageHeader
        title="Our Story so far..."
        description="Follow our journey from start-up to a growing community, get the latest updates exploring the innovation behind your new go-to workout partner and the passion fueling smarter workouts every step of the way."
      />
      <section className="section-container">
        <div className="mt-5 md:my-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-14">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export const dynamic = 'force-dynamic';

export default Blog;
