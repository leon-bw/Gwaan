import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Molecule from "@/assets/molecule.png";
import Molecule2 from "@/assets/molecule_2.png";

const CallToAction = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_top_right,#318741,#141414_90%)] overflow-x-clip py-24">
      <div className="container mx-auto">
        <div className="section-heading px-4 text-center relative">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text md:pb-6">
            Sign up to get early access
          </h2>
          <p className="section-description text-white mt-5">
            Be the first to experience smarter, more effective workouts. Sign up now for early access and start transforming your fitness journey!
          </p>
          <Image
            src={Molecule}
            alt="Molecule"
            width={360}
            className="absolute -left-[390px] -top-[157px]"
          />
          <Image
            src={Molecule2}
            alt="Molecule"
            width={360}
            className="absolute -right-[410px] -top-[39px] scale-x-[-1] -rotate-[75deg]"
          />
        </div>
        <div className="flex gap-4 mt-10 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="font-semibold hover:bg-white/30 hover:border-seaGreen hover:text-white transition"
          >
            Sign Up
          </Button>
          <Button
            size="default"
            variant="ghost"
            className=" text-white hover:bg-white/30 hover:text-white font-semibold py-6 gap-1 transition"
          >
            Learn more <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
