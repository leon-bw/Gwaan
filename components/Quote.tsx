import React from "react";
import FadeInAnimation from "./FadeInAnimation";

const Quote = () => {
  return (
    <FadeInAnimation>
      <section className="py-12">
        <div className="container px-6 mx-auto max-w-screen-xl md:px-10">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-2xl md:text-4xl md:leading-[60px] font-semibold tracking-tighter text-balance mt-5 max-w-fit">
              <span className="text-seaGreen text-2xl md:text-4xl">"</span> We
              respect your privacy, only capturing data on your movements rather
              than camera footage.
              <span className="text-seaGreen text-2xl md:text-4xl">"</span>
            </p>
            <p className="text-lg text-night/50">
              <span className="font-bold text-seaGreen">Pearce Jarrett</span>&nbsp;  
              CEO at Gwaan
            </p>
          </div>
        </div>
      </section>
    </FadeInAnimation>
  );
};

export default Quote;
