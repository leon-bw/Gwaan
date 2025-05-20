import prisma from '@/lib/db';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

type PageProps = {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const BlogPost = async ({ params }: PageProps) => {
  const { slug } = params;

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
        <div className="pt-8 md:pt-16 max-w-2xl mx-auto prose">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export const dynamic = 'force-dynamic';

export default BlogPost;
