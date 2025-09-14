import React from "react";
import SocialButton from "./SocialButton";

const Hero = () => {
  return (
    <div className="flex flex items-center justify-evenly">
      <div className="flex flex-col items-center justify-center min-h-100 ">
        <h1 className="text-4xl font-bold">Sup, I'm Nikolas Chorianopoulos</h1>
        <h2 className="text-2xl">And this is my life.</h2>
        <SocialButton />
      </div>
      <div>
        <img src="/Me.jpg" alt="Me" className="w-96 h-96 rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
