"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { History } from "lucide-react";
import { motion } from "framer-motion";

const contents = [
  {
    icon: History,
    heading: "Train Anytime, No Gear Required",
    text: "Workout anywhere using just your phone’s front camera, no equipment needed. Let AI take care of the tracking, so you can focus on results.",
  },
  {
    icon: CircleCheckBig,
    heading: "Real-Time Feedback, Every Rep",
    text: "Take control of your form with instant, feedback. Get corrections as you move, making every rep count towards your fitness goals.",
  },
  {
    icon: TrendingUp,
    heading: "Track Your Progress, See Gains",
    text: "Earn points for every perfectly executed rep and improve your form over time. Take your performance and fitness to the next level.",
  },
];

const Cards = () => {
  return (
    <section className="bg-seaSalt py-24">
      <div className="container px-6 mx-auto max-w-screen-xl md:px-10">
        <div className="section-heading">
          <h2 className="section-title pb-5">Smart fitness, Simplified</h2>
          <p className="section-description mt-5">
            Experience the future of fitness with our AI engine, whether you’re
            at home or on the go.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:gap-8 lg:mt-12">
          {contents.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <Card
                key={index}
                className="p-4 hover:scale-105 hover:shadow-night/20 hover:drop-shadow-lg transition duration-300 group"
              >
                <CardContent className="p-2 md:p-6">
                  <div className="flex flex-col items-center gap-6 text-center justify-evenly w-full">
                    <item.icon
                      color="seaGreen"
                      size={36}
                      className="group-hover:text-gwaanGreen transition duration-300"
                    />
                    <CardTitle className="text-lg font-bold text-night/70">
                      {item.heading}
                    </CardTitle>
                    <p className="text-balance">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
