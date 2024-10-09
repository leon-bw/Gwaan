import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import RobotImage from "@/assets/robot_with_artificial_intelligence.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,#318741,#141414_90%)] overflow-x-clip">
      <div className="container max-w-screen-2xl mx-auto pt-12 pb-20 px-4 lg:px-14 md:pt-5 md:pb-10">
        <div className="md:flex items-center gap-2">
          <div className="md:w-[478px]">
            <div className="text-sm text-white inline-flex border border-[#999]/50 px-3 py-1 rounded-lg tracking-tight">
              Beta version coming soon
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text mt-6">
              AI Powered <br/> Fitness
            </h1>
            <p className="text-xl text-white tracking-tight mt-6">
              Creator-driven movement gamification for a fuss-free form and rep
              monitoring home workout!
            </p>
            <div className="flex gap-4 items-center mt-8 flex-wrap">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold bg-white text-black hover:bg-white/30 hover:border-seaGreen hover:text-white transition duration-300"
              >
                Get Early Access
              </Button>
              <Button
                size="default"
                variant="ghost"
                className=" text-white hover:bg-white/30 hover:text-white font-semibold py-6 gap-1 transition duration-300"
              >
                Learn more <ChevronRight size={16} />
              </Button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={RobotImage}
              alt="AI Robot image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
