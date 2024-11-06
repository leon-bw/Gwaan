"use client";
import workout from "@/public/images/exercise_session_short.gif";
import Image from "next/image";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <div className="relative mx-auto border-night dark:border-night bg-night border-[14px] rounded-[2.5rem] h-[586px] w-[341px] shadow-xl mt-10">
        <div className="w-[148px] h-[18px] bg-night top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[46px] w-[3px] bg-night absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-night absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-night absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[313px] h-[558px] bg-white dark:bg-night">
          <Image
            src={workout}
            alt="Phone showing workout using Gwaan AI"
            unoptimized
            priority
            width={313}
            height={558}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
