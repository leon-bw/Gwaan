import productImage from "@/assets/iPhone_mockup.png";
import workout from "@/assets/exercise_session_short.gif";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2>A more effective way to track progress</h2>
        <p>
          Forget checking your form in the mirror or losing track of your reps.
          Our AI-driven solution analyzes your movements in real-time, providing
          instant feedback so you can focus on what really matters and maximize
          your results.
        </p>

        <div className="relative mx-8 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[586px] w-[341px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[313px] h-[558px] bg-white dark:bg-gray-800">
            <Image src={workout} alt="Workout using Gwaan AI" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
