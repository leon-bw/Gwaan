"use client";

import Molecule from "@/public/images/molecule.png";
import Molecule2 from "@/public/images/molecule_3.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight01Icon } from "hugeicons-react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "./ui/button";

const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-[radial-gradient(ellipse_200%_100%_at_top_right,#318741,#141414_70%)] overflow-x-clip py-24"
    >
      <div className="container mx-auto">
        <div className="section-heading px-4 text-center relative">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text md:pb-6">
            Sign up to get early access
          </h2>
          <p className="section-description text-white mt-5">
            Be the first to experience smarter, more effective workouts. Sign up
            now for early access and start transforming your fitness journey!
          </p>
          <motion.img
            src={Molecule.src}
            alt="Molecule"
            width={360}
            className="absolute -left-[390px] -top-[174px]"
            style={{ translateY, rotate: "-5deg" }}
          />
          <motion.img
            src={Molecule2.src}
            alt="Molecule"
            width={360}
            className="absolute -right-[410px] -top-[56px] scale-x-[-1]"
            style={{ translateY, rotate: "-75deg" }}
          />
        </div>
        <div className="flex gap-4 mt-10 justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="font-semibold hover:bg-white/30 hover:border-seaGreen hover:text-white transition duration-300"
          >
            <Link href={"https://iidsy56pe6e.typeform.com/to/uR7Q8tID"}>
              Sign Up
            </Link>
          </Button>
          <Button
            asChild
            size="default"
            variant="ghost"
            className="text-white hover:bg-white/30 hover:text-white font-semibold py-6 gap-1 transition duration-300 group"
          >
            <Link href={"/about"}>
              Learn more
              <ArrowRight01Icon size={24} className="arrow" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
