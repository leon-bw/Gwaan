import React from "react";

const Video = () => {
  return (
    <>
      <div className="section-heading">
        <h2 className="section-title pb-4">Meet our Founder</h2>
        <p className="section-description">
          Join us on a journey to empower every move you make. As you build
          strength, we’re here to support and celebrate your progress every step
          of the way.
        </p>
      </div>
      <div className="mt-12 lg:mt-20 relative w-full aspect-video md:max-w-[800px] lg:max-w-2xl mx-auto">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/1_7gppvZaig?start=1"
          title="Gwaan Founder - British Science Association video"
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Video;
