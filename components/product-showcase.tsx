import productImage from "@/assets/iPhone_mockup.png";
import workout from "@/assets/exercise_session_short.gif";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="bg-seaSalt py-24">
      <div className="container px-4 lg:px-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <h2 className="text-center text-3xl md:text-6xl md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-night to-seaGreen text-transparent bg-clip-text pb-2">
            A more effective way to track progress
          </h2>
          <p className="text-center text-lg tracking-tight leading-8 text-night mt-5">
            Forget checking your form in the mirror or losing track of your
            reps. Our AI solution analyses your movements in real-time,
            providing instant feedback so you can focus on what really matters
            and maximize your results!
          </p>

          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[586px] w-[341px] shadow-xl mt-10">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[313px] h-[558px] bg-white dark:bg-gray-800">
              <Image src={workout} alt="Workout using Gwaan AI" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
