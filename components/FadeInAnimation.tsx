"use client";

import React, { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface FadeInAnimationProps extends MotionProps {
  children: ReactNode;
}

const FadeInAnimation = ({ children, ...props }: FadeInAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
