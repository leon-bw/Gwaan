import Image from "next/image";
import Link from "next/link";
import Desk from "@/assets/desk.png";
import Photo from "@/assets/group_photo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CircleArrowRight01Icon } from "hugeicons-react";

type posts = {
  category: string | null;
  date: Date;
  image: string;
  title: string;
  summary: string;
  author: {
    name: string;
    role: string;
  };
};

const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

const posts = [
  {
    category: "",
    date: new Date("02/01/2023"),
    image: Photo,
    title: "Inclusive Innovation",
    summary:
      "Our founder, Pearce, was invited to explore how we can better encourage diversity in technology, and encourage minority groups to innovate. See the full article here.\nWhat does it mean to make innovation more inclusive?\nMany corporations are fascinated that I do not look like the conventional stereotype of a scientist;",
  },
  {
    category: "Guides",
    date: new Date("03/15/2023"),
    image: Desk,
    title: "Remote working and exercise",
    summary:
      "Remote working has enabled people to work from home and avoid the daily commute. As useful as it has been, it has also taken a huge toll on our collective physical fitness.\nWhy did it all change?\nBefore the pandemic, many people had a daily routine that included walking or cycling to work, climbing stairs, and moving around the office.",
  },
].map((post) => ({
  ...post,
  link: `/blog/${generateSlug(post.title)}`,
}));

const Blog = () => {
  return (
    <>
      <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,#318741,#141414_90%)] overflow-x-clip">
        <div className="container max-w-screen-xl mx-auto pt-12 pb-20 px-4 lg:px-14 md:pt-5 md:pb-10 text-center">
          <div className="section-heading">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text mt-6 text pb-6">
              Our Story so far...
            </h1>
            <p className="section-description text-white mx-auto">
              Follow our journey from start-up to a growing community, get the
              latest updates exploring the innovation behind your new go-to
              workout partner and the passion fueling smarter workouts every
              step of the way.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...posts, ...posts].map((post, index) => (
              <Card
                key={index}
                className="bg-night/50 text-white p-4 border-night/60 shadow-md my-1 rounded-xl"
              >
                <div className="hover:border-white">
                  <Image
                    src={post.image}
                    alt=""
                    className="rounded-md mb-6 border-seaSalt/70 border-2 z-20"
                  />
                </div>
                <CardContent className="p-0 text-left md:p-2">
                  <div className="flex justify-between mb-4">
                    <p className="text-sm">
                      {post.date.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                    {post.category && (
                      <p className="bg-white text-night/80 rounded-full p-1 font-semibold text-xs uppercase">
                        {post.category}
                      </p>
                    )}
                  </div>
                  <div className="">
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </div>
                  <p className="pt-6 mb-6 line-clamp-3">{post.summary}</p>
                  <div className="flex items-center justify-between">
                    <Link href={post.link}>
                      <Button
                        variant={"ghost"}
                        className="p-0 hover:underline hover:text-white hover:bg-transparent"
                      >
                        Read More
                      </Button>
                    </Link>
                    <Link href={post.link}>
                      <CircleArrowRight01Icon className="hover:bg-white/30 size-10 p-2 rounded-full" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
