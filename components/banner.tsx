"use client";

import Image from "next/image";
import IUKLogo from "@/assets/UKRI_IUK-Logo.png";
import MSFoundersLogo from "@/assets/MS_Startups_FH_logo.png";
import BarclaysLogo from "@/assets/Barclays-ELs.png";
import BSALogo from "@/assets/BSA Logo_Colour_PNG.png";
import CampusLogo from "@/assets/campusfounders.png";
import D11ZLogo from "@/assets/D11Z_Logo.png";
import { motion } from "framer-motion";

const logos = [
  { src: IUKLogo, alt: "Innovate UK Logo" },
  { src: MSFoundersLogo, alt: "MS Founders Logo" },
  { src: BarclaysLogo, alt: "Barclays Eagle Labs Logo" },
  { src: BSALogo, alt: "British Science Association Logo" },
  { src: CampusLogo, alt: "Campus Founders Logo" },
  { src: D11ZLogo, alt: "D11Z Logo" },
];

const Banner = () => {
  return (
    <section className="py-6 md:py-10 bg-seaSalt">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-20 flex-none pr-20"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
              repeatDelay: 0,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                height={300}
                className="banner-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
