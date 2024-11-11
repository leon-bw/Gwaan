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

  const subheading = `${formatDate} - ${post.tags
    ?.map((tag) => tag.name)
    .join(", ")}`;

  return (
    <>
      <div>
        <PageHeader title={post.title} description={subheading} />
        <h1 className="capitalize">{post.title}</h1>
        <Image src={post.image} alt={post.title} width={662} height={400} />
        <p>{post.content}</p>
      </div>
    </>
  );
};

export default BlogPost;
