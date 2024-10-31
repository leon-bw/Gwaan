"use client";
import Image from "next/image";
import Link from "next/link";
import Desk from "@/public/images/photos/desk.png";
import Photo from "@/public/images/photos/group_photo.png";
import Team from "@/public/images/photos/team_photo.png";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight01Icon } from "hugeicons-react";
import { easeIn, motion } from "framer-motion";

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
    category: "Editorial",
    date: new Date("03/20/2023"),
    image: Team,
    title: "Our journey",
    summary:
      "Laboni, our co-founder, reflects back on how our fitness application, Gwaan, came to be.\nHow was the business born?\nDuring lockdown, Pearce and I were struggling to see results, or stay motivated, with our at-home workouts. The fitness tracker wasn't accurately capturing our progress, and - despite the movements",
  },
  {
    category: "Guides",
    date: new Date("03/15/2023"),
    image: Desk,
    title: "Remote working and exercise",
    summary:
      "Remote working has enabled people to work from home and avoid the daily commute. As useful as it has been, it has also taken a huge toll on our collective physical fitness.\nWhy did it all change?\nBefore the pandemic, many people had a daily routine that included walking or cycling to work, climbing stairs, and moving around the office.",
  },
  {
    category: "",
    date: new Date("02/01/2023"),
    image: Photo,
    title: "Inclusive Innovation",
    summary:
      "Our founder, Pearce, was invited to explore how we can better encourage diversity in technology, and encourage minority groups to innovate. See the full article here.\nWhat does it mean to make innovation more inclusive?\nMany corporations are fascinated that I do not look like the conventional stereotype of a scientist;",
  },
].map((post) => ({
  ...post,
  link: `/blog/${generateSlug(post.title)}`,
}));

const Blog = () => {
  return (
    <>
      <section className="section-bg">
        <div className="section-container md:pt-24">
          <div className="section-heading">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text mt-6 text-center">
                Our Story so far...
              </h1>
              <p className="section-description text-white">
                Follow our journey from start-up to a growing community, get the
                latest updates exploring the innovation behind your new go-to
                workout partner and the passion fueling smarter workouts every
                step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-seaSalt">
        <div className="section-container">
          <div className="mt-5 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {posts.map((post, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: easeIn }}
              >
                <Card
                  key={index}
                  className="bg-white text-night p-6 hover:-translate-y-1 hover:-rotate-1 hover:shadow-night/20 hover:drop-shadow-lg transition duration-300 my-1 rounded-lg group"
                >
                  <Link href={post.link}>
                    <Image
                      src={post.image}
                      alt="blog post image"
                      className="rounded-md mb-4"
                      priority
                    />
                  </Link>
                  <CardContent className="p-0 text-left">
                    <div className="flex flex-col gap-4">
                      <CardTitle className="text-seaGreen text-xl capitalize">
                        {post.title}
                      </CardTitle>
                      <p className="mb-3 line-clamp-3">{post.summary}</p>
                      <div className="flex items-center">
                        <Link
                          href={post.link}
                          className="text-night font-bold text-center rounded-lg py-3 flex items-center justify-start group-hover:scale-105 transition duration-300"
                        >
                          Read More
                          <ArrowRight01Icon className="group-hover:translate-x-3 rounded-xl transition duration-300 ml-2" />
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
