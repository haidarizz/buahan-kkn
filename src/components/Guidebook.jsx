import React, { useEffect } from "react";
import Carousel from "./Carousel";
import nature from "../image/nature.jpg";
import manual1 from "../image/1.png";
import manual2 from "../image/2.png";
import manual3 from "../image/3.png";
import manual4 from "../image/4.png";
import manual5 from "../image/5.png";
import manual6 from "../image/6.png";
import manual7 from "../image/7.png";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [manual1, manual2, manual3, manual4, manual5, manual6, manual7];

const Guidebook = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-7 px-[32px] sm:px-[70px] md:px-[120px] lg:px-[240px] xl:px-[480px]">
      <div className="flex justify-center items-center" data-aos="fade-down">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
          Manual Book
        </h1>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
          Website
        </h1>
      </div>
      <div
        className="mt-7 lg:mt-10 xl:px-0 h-fit w-fit lg:h-fit flex items-center shadow-xl shadow-darkgreen"
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
