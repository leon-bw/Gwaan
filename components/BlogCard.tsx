import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import FadeInAnimation from "@/components/FadeInAnimation";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight01Icon } from "hugeicons-react";

type BlogPost = {
  image: StaticImageData;
  title: string;
  date: string;
  category: string | null;
  description: string;
  link: string;
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <FadeInAnimation>
      <Card className="bg-white text-night p-6 hover:-translate-y-1 hover:-rotate-1 hover:shadow-night/20 hover:drop-shadow-lg transition duration-300 my-1 rounded-lg group">
        <Image
          src={post.image}
          alt="blog post image"
          className="rounded-md mb-4"
          priority
        />
        <CardContent className="p-0 text-left">
          <div className="flex flex-col gap-4">
            <Link href={post.link} className="mr-auto">
              <CardTitle className="text-seaGreen text-xl capitalize line-clamp-2 overflow-hidden hover:text-gwaanGreen transition duration-300">
                {post.title}
              </CardTitle>
            </Link>
            <p className="mb-3 line-clamp-3">{post.description}</p>
            <div className="flex items-center">
              <Link
                href={post.link}
                className="text-night font-bold text-center rounded-lg py-3 flex items-center justify-start group-hover:scale-105 transition duration-300"
              >
                Read More
                <ArrowRight01Icon className="group-hover:translate-x-3 transition duration-300 ml-2" />
              </Link>
              {post.category && (
                <span className="bg-night/20 text-night rounded-lg p-1 px-2 font-bold text-[10px] uppercase ml-auto">
                  {post.category}
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeInAnimation>
  );
};

export default BlogCard;
