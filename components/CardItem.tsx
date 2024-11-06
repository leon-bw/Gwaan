"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { HugeiconsProps } from "hugeicons-react";

type CardItemProps = {
  icon: React.ComponentType<HugeiconsProps>;
  heading: string;
  text: string;
};

const CardItem = ({ icon: Icon, heading, text }: CardItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <Card className="p-4 hover:scale-105 hover:shadow-night/20 hover:drop-shadow-lg transition duration-300 group">
        <CardContent className="p-2 md:p-6">
          <div className="flex flex-col items-center gap-6 text-center justify-evenly w-full">
            <Icon color="seaGreen" size={36} />
            <CardTitle className="text-lg font-bold text-night/70 group-hover:scale-105 transition duration-300">
              {heading}
            </CardTitle>
            <p className="text-balance">{text}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardItem;
