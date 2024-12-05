import workout from "@/public/images/workout_with_gwaan.webp";
import Image from "next/image";
import FadeInAnimation from "@/components/FadeInAnimation";

const Product = () => {
  return (
    <FadeInAnimation viewport={{ amount: 0.3 }}>
      <div className="relative mx-auto border-night dark:border-night bg-night border-[14px] rounded-[2.5rem] h-[530px] w-[308px] shadow-xl mt-10">
        <div className="w-[148px] h-[18px] bg-night top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[46px] w-[3px] bg-night absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-night absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-night absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[280px] h-[500px] bg-white dark:bg-night">
          <Image
            src={workout}
            alt="Phone showing workout using Gwaan AI"
            unoptimized
            className="w-[280px] h-auto"
            priority
          />
        </div>
      </div>
    </FadeInAnimation>
  );
};

export default Product;
