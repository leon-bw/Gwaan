import prisma from "@/lib/db";
import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { notFound } from "next/navigation";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const post = await prisma.blogPost.findUnique({
    where: {
      slug: params.slug,
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
      <PageHeader title={post.title} description={formatDate}>
        <div className="text-center">
          {tags && <span className="text-white uppercase text-xs">{tags}</span>}
        </div>
      </PageHeader>
      <section className="section-container lg:py-24">
        <Image
          src={post.image}
          alt={post.title}
          width={662}
          height={400}
          className="mx-auto rounded-md"
        />
        <p className="mt-8 md:mt-16">{post.content}</p>
      </section>
    </>
  );
};

export default BlogPost;
