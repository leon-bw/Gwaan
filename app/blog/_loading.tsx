import React from "react";

const loading = () => {
  return (
    <section className="section-container">
      <div className="bg-white shadow-md flex flex-col gap-4 max-w-80 p-4 border-2 rounded-lg border-night/5">
        <div className="w-full h-48 bg-night/30 rounded-md animate-pulse"></div>
        <div className="w-full h-10 bg-night/30 rounded-md animate-pulse"></div>
        <div className="w-full h-5 bg-night/30 rounded-md animate-pulse"></div>
        <div className="w-full h-5 bg-night/30 rounded-md animate-pulse"></div>
        <div className="w-1/2 h-5 bg-night/30 rounded-md animate-pulse"></div>
        <div className="flex items-center justify-between mt-5">
          <div className="w-1/5 h-4 bg-night/30 rounded-md animate-pulse"></div>
          <div className="w-1/5 h-4 bg-night/30 rounded-md animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default loading;
