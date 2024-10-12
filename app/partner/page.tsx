import { Button } from "@/components/ui/button";

const Partner = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_center,#318741,#141414_40%)] overflow-x-clip">
      <div className="container max-w-screen-2xl mx-auto pt-12 pb-20 px-4 lg:px-14 md:pt-5 md:pb-10">
        <div className="section-heading gap-4 h-[375px]">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text mt-6">
              Shape the Future of Fitness with Us
            </h1>
            <p className="section-description text-white">
              Empower your clients and boost your income by partnering with our
              innovative AI platform, designed to make every rep count.
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
  );
};

export default Partner;
