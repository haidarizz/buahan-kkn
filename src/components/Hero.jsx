import React from "react";
import { Link } from "react-scroll";
import Typed from "react-typed";
import nature from "../image/nature.jpg";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${nature}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="text-white w-full h-screen bg-black border-b-8 border-darkgreen overflow-hidden"
      style={backgroundImageStyle}
    >
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-6xl sm:text-5xl text-4xl md:py-6 font-bold font-dmserif text-darkgreen">
          Mengembara
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-7xl sm:text-6xl text-5xl font-bold py-4 font-dmserif text-darkgreen">
            Desa
          </p>
          <Typed
            className="md:text-7xl sm:text-6xl text-5xl font-bold md:pl-4 pl-2 font-dmserif text-brown"
            strings={["Buahan", "Buahan", "Buahan"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <Link
          activeClass="active"
          to="tentang"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-xs lg:text-sm font-bold cursor-pointer bg-orange bg-opacity-80 hover:bg-orange hover:bg-opacity-100 hover:font-extrabold hover:text-darkgreen border-transparent border-y-4 hover:border-b-brown w-[150px] font-opensans my-8 mx-auto py-1 text-darkgreen"
        >
          Explore Now!
        </Link>
      </div>
    </div>
  );
};

export default Hero;
