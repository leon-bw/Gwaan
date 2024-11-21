import prisma from "@/lib/db";
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const post = await prisma.blogPost.findUnique({
    where: {
      slug: slug,
    },
    include: {
      tags: true,
    },
  });

  if (!post) {
    notFound();
  }

  const formatDate = post.createdAt.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const tags = post.tags?.map((tag) => tag.name).join(", ");

  return (
    <>
      <section className="section-bg">
        <div className="section-container">
          <div className="section-heading text-center">
            <p className="py-4 text-white/50">{formatDate}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text my-6 text-center capitalize pb-2 md:pb-6">
              {post.title}
            </h1>
            {tags && (
              <span className="bg-white/30 text-white rounded-xl font-bold text-[10px] md:text-xs uppercase p-1 px-2">
                {tags}
              </span>
            )}
          </div>
        </div>
      </section>
      <div className="section-container md:py-24">
        <Image
          src={post.image}
          alt={post.title}
          width={662}
          height={400}
          className="mx-auto rounded-md"
        />
        <p className="pt-8 md:pt-16 max-w-2xl mx-auto">{post.content}</p>
      </div>
    </>
  );
};

export default BlogPost;
