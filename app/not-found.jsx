"use client";

import Link from "next/link";
import Rocket from "@/public/images/rocket.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="bg-night">
      <div className="section-container">
        <div
          className="bg-repeat bg-[url('/images/stars-stroke-rounded.svg')] bg-cover text-white"
          style={{ backgroundSize: "12px 12px" }}
        ></div>
        <div className="section-heading">
          <div className="grid grid-cols-1 gap-8 text-center mb-8">
            <h1 className="section-title text-white">Oops! Page Not Found</h1>
            <p className="section-description text-white mb-8">
              Looks like you've strayed off course, this page isn't part of your
              workout routine. Don’t worry, even the best athletes lose track
              sometimes. Let's get you back on the right path!
            </p>
            <Link href="/">
              <Button variant={"secondary"} className="font-semibold">
                Back to Home Base
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 max-w-xl mx-auto">
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
