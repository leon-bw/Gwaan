import React from "react";

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const formattedSlug = params.slug.replace(/-/g, " ");

  return <div>{formattedSlug}</div>;
};

export default BlogPost;
