import React, { useEffect } from "react";
import nature from "../image/nature.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Cardkegiatan = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="pt-7 pb-20 px-[32px] sm:px-[70px] md:px-[120px] lg:px-[120px] xl:px-[180px] z-20">
      <div className="flex justify-center items-center" data-aos="fade-down">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
          Kegiatan Desa
        </h1>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
          Buahan
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mb-4 lg:mb-4 pt-7 lg:pt-10" data-aos='fade-down'>
        <div className="flex flex-col bg-gradient-to-tr from-darkgreen to-lightgreen w-full lg:w-1/3 mx-3 p-2 mb-4 lg:mb-0 shadow-lg shadow-green">
          <div className="bg-white w-full px-4 pt-4 pb-6">
            <div className="overflow-hidden mb-4 shadow-sm">
              <img
                alt="img"
                src={nature}
                className="w-full hover:scale-[1.2] object-cover transition-all duration-300 ease-in-out"
              ></img>
            </div>
            <h1 className="font-bold font-dmserif text-darkgreen text-xl mb-2">
              Potensi wisata A
            </h1>
            <p className="font-opensans mb-5">
              Lorem ipsum de amor fucking motherfucker
            </p>
            <a
              target="_blank"
              href="https://buahan-gianyar.desa.id/"
              className="text-sm text-center lg:text-md px-4 py-2 bg-yellow text-darkgreen hover:bg-darkgreen hover:bg-opacity-100 hover:font-extrabold hover:text-yellow transition-all duration-200 w-auto font-opensans font-medium"
            >
              Selengkapnya
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-tr from-darkgreen to-lightgreen w-full lg:w-1/3 mx-3 p-2 mb-4 lg:mb-0 shadow-lg shadow-green">
          <div className="bg-white w-full px-4 pt-4 pb-6">
            <div className="overflow-hidden mb-4 shadow-sm">
              <img
                alt="img"
                src={nature}
                className="w-full hover:scale-[1.2] object-cover transition-all duration-300 ease-in-out"
              ></img>
            </div>
            <h1 className="font-bold font-dmserif text-darkgreen text-xl mb-2">
              Potensi wisata A
            </h1>
            <p className="font-opensans mb-5">
              Lorem ipsum de amor fucking motherfucker
            </p>
            <a
              target="_blank"
              href="https://buahan-gianyar.desa.id/"
              className="text-sm text-center lg:text-md px-4 py-2 bg-yellow text-darkgreen hover:bg-darkgreen hover:bg-opacity-100 hover:font-extrabold hover:text-yellow transition-all duration-200 w-auto font-opensans font-medium"
            >
              Selengkapnya
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-tr from-darkgreen to-lightgreen w-full lg:w-1/3 mx-3 p-2 mb-4 lg:mb-0 shadow-lg shadow-green">
          <div className="bg-white w-full px-4 pt-4 pb-6">
            <div className="overflow-hidden mb-4 shadow-sm">
              <img
                alt="img"
                src={nature}
                className="w-full hover:scale-[1.2] object-cover transition-all duration-300 ease-in-out"
              ></img>
            </div>
            <h1 className="font-bold font-dmserif text-darkgreen text-xl mb-2">
              Potensi wisata A
            </h1>
            <p className="font-opensans mb-5">
              Lorem ipsum de amor fucking motherfucker
            </p>
            <a
              target="_blank"
              href="https://buahan-gianyar.desa.id/"
              className="text-sm text-center lg:text-md px-4 py-2 bg-yellow text-darkgreen hover:bg-darkgreen hover:bg-opacity-100 hover:font-extrabold hover:text-yellow transition-all duration-200 w-auto font-opensans font-medium"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardkegiatan;
