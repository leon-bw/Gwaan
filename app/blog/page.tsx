"use client";
import Image from "next/image";
import Link from "next/link";
import Desk from "@/public/images/photos/desk.png";
import Photo from "@/public/images/photos/group_photo.png";
import Team from "@/public/images/photos/team_photo.png";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import { ArrowRight01Icon } from "hugeicons-react";
import { motion } from "framer-motion";

type posts = {
  category: string | null;
  date: Date;
  image: string;
  title: string;
  summary: string;
  author: string;
};

const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

const posts = [
  {
    category: "Editorial",
    date: new Date("03/20/2023"),
    image: Team,
    title: "Our Journey: How Gwaan Came to Be",
    summary:
      "Co-founder Laboni shares the origin story of Gwaan, a fitness app inspired by the need for accurate home workout tracking during lockdown. Starting as a lighthearted idea, the app evolved into a real tool powered by computer vision, created with her husband, Pearce. Reflecting on the journey, Laboni discusses the challenges and growth experienced in the startup world, as well as the commitment required to turn an idea into a full-fledged product.",
  },
  {
    category: "Guides",
    date: new Date("03/15/2023"),
    image: Desk,
    title: "Impact of Remote Work on Fitness",
    summary:
      "We examine the decline in physical activity due to remote work and the impact on overall fitness. It highlights how the loss of daily physical routines, such as commuting, has led to more sedentary lifestyles. It also offers tips for incorporating movement into the workday, like scheduling exercise breaks, using standing desks, and opting for active errands, to combat the negative effects of prolonged sitting.",
  },
  {
    category: "",
    date: new Date("02/01/2023"),
    image: Photo,
    title: "Fostering Diversity and Innovation in Tech",
    summary:
      "Founder Pearce discusses his unconventional path into technology and the importance of promoting diversity in the industry. He reflects on the barriers faced by underrepresented groups and offers three actionable strategies to support diverse talent in tech. The article also shares Gwaan’s commitment to inclusivity, collaborating with organizations to make the tech space more accessible and inspiring for future innovators.",
  },
]
.map((post) => ({
  ...post,
  link: `/blog/${generateSlug(post.title)}`,
}));

const Blog = () => {
  return (
    <>
      <PageHeader
        title="Our Story so far..."
        description="Follow our journey from start-up to a growing community, get the latest updates exploring the innovation behind your new go-to workout partner and the passion fueling smarter workouts every step of the way."
      />
      <section className="bg-seaSalt">
        <div className="section-container">
          <div className="mt-5 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
              >
                <Card
                  key={index}
                  className="bg-white text-night p-6 hover:-translate-y-1 hover:-rotate-1 hover:shadow-night/20 hover:drop-shadow-lg transition duration-300 my-1 rounded-lg group"
                >
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
                      <p className="mb-3 line-clamp-3">{post.summary}</p>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
