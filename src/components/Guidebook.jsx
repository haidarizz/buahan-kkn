import React, { useEffect } from "react";
import Carousel from "./Carousel";
import nature from "../image/nature.jpg";
import dummy1 from "../image/dummy1.jpg";
import dummy2 from "../image/dummy2.jpg";
import dummy3 from "../image/dummy3.jpg";
import dummy4 from "../image/dummy4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [dummy1, dummy2, dummy3, dummy4];

const Guidebook = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-7 px-0 sm:px-[70px] md:px-[120px] lg:px-[240px] xl:px-[360px]">
      <div className="flex justify-center items-center" data-aos="fade-down">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
          Manual Book
        </h1>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
          Website
        </h1>
      </div>
      <div
        className="px-[32px] mt-7 lg:mt-10 xl:px-0 h-fit w-fit lg:h-fit flex items-center shadow-xl shadow-darkgreen"
        data-aos="fade"
      >
        <Carousel>
          {[
            ...slides.map((s) => (
              <img
                className="top-0 bottom-0 px-0 lg:px-0 h-full w-fit"
                src={s}
              />
            )),
          ]}
        </Carousel>
      </div>
    </div>
  );
};

export default Guidebook;
