"use client";

import Link from "next/link";
import Rocket from "@/public/images/rocket.webp";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="bg-night">
      <div className="section-container">
        <div className="section-heading">
          <div className="grid grid-cols-1 gap-8 text-center mb-8">
            <h1 className="section-title text-white">
              404{<br />}Page Not Found
            </h1>
            <p className="section-description text-white mb-8">
              Looks like you&apos;ve strayed off course, this page isn&apos;t part of your
              workout routine. Don&apos;t worry, even the best athletes lose track
              sometimes. Let&apos;s get you back on the right path!
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm bg-secondary text-night hover:text-white hover:bg-white/20 h-10 p-4 font-semibold mx-auto transition duration-300"
            >
              Return Home
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 max-w-xl mx-auto my-28">
          <motion.img
            src={Rocket.src}
            alt="Rocket"
            initial={{
              transform: "translateX(-5px) translateY(5px)",
            }}
            animate={{
              transform: "translateX(19px) translateY(-8px)",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
