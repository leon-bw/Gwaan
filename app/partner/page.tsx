import Image from "next/image";
import { Button } from "@/components/ui/button";
import CTA from "@/components/call-to-action";
import Money from "@/public/images/hand_holding_money.png";
import Analytics from "@/public/images/data_analysis_monitor.png";

const Partner = () => {
  return (
    <>
      <section className="section-bg">
        <div className="section-container md:pt-24">
          <div className="section-heading gap-4 h-[375px]">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text mt-6 text-center">
                Shape the Future of Fitness with Us
              </h1>
              <p className="section-description text-white">
                Empower your clients and boost your income by partnering with
                our innovative AI platform, designed to make every rep count.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold bg-white text-black hover:bg-white/30 hover:border-seaGreen hover:text-white transition duration-300"
              >
                Start Earning
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-seaSalt overflow-x-clip">
        <div className="section-container lg:py-24">
          <div className="flex flex-col items-center lg:flex-row lg:gap-20 justify-center mt-8 md:mt-0">
            <div className="section-heading mx-0">
              <h3 className="section-title pb-4 md:mt-8">
                Partner with Gwaan and Amplify Your Impact
              </h3>
              <p className="text-night/50 py-4 text-center">
                Join the Gwaan Team and Empower Your Clients
              </p>
              <p className="section-description">
                Join Gwaan’s community of elite trainers and take your coaching
                to the next level. With our cutting-edge AI software, your
                clients get real-time feedback on their form and rep accuracy,
                enhancing their progress and results. Simply film your workouts,
                upload content, and engage with your audience—all while earning
                a share of the revenue every time your video is viewed. Turn
                your expertise into income and be part of the future of fitness
                with Gwaan!
              </p>
            </div>
            <div className="max-w-md">
              <Image src={Money} alt="Hand holding money" />
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row-reverse lg:gap-20 justify-center mt-8 xl:mt-24">
            <div className="section-heading mx-0">
              <h3 className="section-title pb-4 md:mt-8">
                Smarter Insights for Better Results
              </h3>
              <p className="text-night/50 py-4 text-center">
                Work Smarter with Gwaan
              </p>
              <p className="section-description">
                Enhance your personal training with Gwaan’s AI-powered
                analytics, giving you the ability to track client progress and
                customize workouts to fit their unique needs. Identify which
                exercises clients find challenging, monitor their improvement
                over time, and adapt your programs to maximize results—all from
                your phone. Expand your reach, boost client engagement, and
                bring a new level of personalization to every session.
              </p>
            </div>
            <div className="max-w-md">
              <Image
                src={Analytics}
                alt="Monitor showing data points with magnifying glass"
                className="mt-8 lg:mt-0"
              />
            </div>
          </div>
        </div>
        <CTA />
      </section>
    </>
  );
};

export default Partner;
