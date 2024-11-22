import React from "react";
import Link from "next/link";
import Image from "next/image";
import FadeInAnimation from "@/components/FadeInAnimation";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight01Icon } from "hugeicons-react";
import ReactMarkdown from "react-markdown";

type BlogPost = {
  id: string;
  image: string;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  tags: { id: string; name: string }[];
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <FadeInAnimation>
      <Card className="bg-white text-night p-6 hover:-translate-y-1 hover:-rotate-1 hover:shadow-night/20 hover:drop-shadow-lg transition duration-300 my-1 rounded-lg group">
        <Image
          src={post.image}
          alt={post.title}
          className="rounded-md mb-4"
          priority
          width={662}
          height={400}
        />
        <CardContent className="p-0 text-left">
          <div className="flex flex-col gap-4">
            <Link href={`/blog/${post.slug}`} className="mr-auto">
              <CardTitle className="text-seaGreen text-xl capitalize line-clamp-2 overflow-hidden hover:text-gwaanGreen hover:underline transition duration-300">
                {post.title}
              </CardTitle>
            </Link>
            <div className="mb-3 line-clamp-3">
              <ReactMarkdown>{post.content.slice(0, 290)}</ReactMarkdown>
            </div>
            <div className="flex items-center">
              <Link
                href={`/blog/${post.slug}`}
                className="text-night font-bold text-center rounded-lg py-3 flex items-center justify-start group-hover:scale-105 transition duration-300"
              >
                Read More
                <ArrowRight01Icon className="arrow ml-2" />
              </Link>
              {post.tags && (
                <div className="flex flex-wrap ml-auto gap-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-night/20 text-night rounded-xl p-1 px-2 font-bold text-[10px] uppercase"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeInAnimation>
  );
};

export default BlogCard;
