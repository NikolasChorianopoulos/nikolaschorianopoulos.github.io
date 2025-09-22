import React from "react";

const Hero = () => {
  return (
    <div className="flex flex items-center justify-evenly">
      <div className="flex flex-col items-center justify-center min-h-100 "></div>
      <div>
        <img src="/sMe.jpg" alt="Me" className="w-96 h-96 rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
