import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight01Icon } from "hugeicons-react";
import RobotImage from "@/public/images/robot_with_ai.webp";

const Hero = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,#318741,#141414_90%)] overflow-x-clip">
      <div className="container max-w-screen-2xl mx-auto pt-12 pb-20 px-4 lg:px-14 md:pt-5 md:pb-10">
        <div className="md:flex items-center gap-5 lg:gap-12">
          <div className="md:w-[480px]">
            <div className="text-sm text-white inline-flex border border-[#999]/50 px-3 py-1 rounded-lg tracking-tight">
              Beta version coming soon
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text mt-6">
              AI Powered <br /> Fitness
            </h1>
            <p className="text-xl text-white tracking-tight mt-6">
              Creator-driven movement tracking that makes form and rep
              monitoring simple—perfect for home workouts!
            </p>
            <div className="flex gap-4 items-center mt-8 flex-wrap">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold bg-white hover:bg-white/30 hover:border-seaGreen hover:text-white transition duration-300"
              >
                Get Early Access
              </Button>
              <Button
                asChild
                size="default"
                variant="ghost"
                className="text-white hover:bg-white/30 hover:text-white font-semibold py-6 gap-1 transition duration-300 group"
              >
                <Link href={"/about"}>
                  Learn more
                  <ArrowRight01Icon
                    size={24}
                    className="arrow"
                  />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[650px] md:flex-1 relative">
            <Image
              src={RobotImage}
              alt="AI Robot image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
