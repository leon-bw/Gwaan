"use client";
import Product from "@/components/product";
import { motion } from "framer-motion";

const ProductShowcase = () => {
  return (
    <section className="bg-seaSalt py-24">
      <div className="container px-4 lg:px-10 mx-auto max-w-screen-xl">
        <div className="lg:flex lg:items-center lg:flex-row-reverse gap-10">
          <div className="section-heading">
            <h2 className="section-title pb-2">
              A more effective way to track progress
            </h2>
            <p className="section-description mt-5">
              Forget checking your form in the mirror or losing track of reps.
              Our AI solution uses your phone’s selfie camera to analyse each
              movement in real-time, counting your reps and providing instant
              feedback on your form so you can focus on what really matters and
              maximize your results!
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <Product />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
